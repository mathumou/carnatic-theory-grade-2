/**
 * Carnatic Music Theory Grade 2 - Main Interactive Application Logic
 */

(function () {
  "use strict";

  // Application State
  const state = {
    currentTab: "study",
    language: localStorage.getItem("carnatic_lang") || "both", // 'tamil', 'english', 'both'
    theme: localStorage.getItem("carnatic_theme") || "light",
    activeTopicFilter: "all",

    // Flashcards
    flashcards: [],
    currentCardIndex: 0,
    isCardFlipped: false,

    // MCQ Quiz
    mcqPool: [],
    currentMcqIndex: 0,
    mcqScore: 0,
    mcqStreak: 0,
    mcqAnswered: false,

    // Write Practice
    writePool: [],
    currentWriteIndex: 0,
    writeRevealed: false,
    writeFeedback: null, // 'correct', 'partial', 'wrong'
    repeatList: [],

    // Trial Exam
    examState: {
      active: false,
      timeLeft: 1800, // 30 mins
      timerInterval: null,
      mcqAnswers: {},
      fillAnswers: {},
      matchPairs: {},
      mathAnswers: {},
      essaySelfScores: {},
      submitted: false,
      finalScore: null
    },

    // Tala Metronome
    metronome: {
      running: false,
      interval: null,
      currentBeat: 0,
      talaId: 5, // Triputa / Adi
      jathiAksharas: 4, // Chaturasra
      bpm: 60
    }
  };

  // DOM Elements
  const DOM = {};

  // Initialize App on DOM Ready
  document.addEventListener("DOMContentLoaded", () => {
    cacheDomElements();
    applyTheme(state.theme);
    bindEvents();
    initAudioWidget();
    loadProgress();
    switchTab("study");
  });

  function cacheDomElements() {
    DOM.tabButtons = document.querySelectorAll(".nav-tab");
    DOM.views = document.querySelectorAll(".view-section");
    DOM.themeToggle = document.getElementById("themeToggle");
    DOM.langToggle = document.getElementById("langToggle");
    DOM.tanpuraBtn = document.getElementById("tanpuraBtn");
    DOM.pitchSelect = document.getElementById("pitchSelect");
    DOM.syllabusModalBtn = document.getElementById("syllabusModalBtn");
    DOM.syllabusModal = document.getElementById("syllabusModal");
    DOM.closeModalBtn = document.getElementById("closeModalBtn");
  }

  function bindEvents() {
    // Navigation Tabs
    DOM.tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        switchTab(tab);
      });
    });

    // Theme Toggle
    if (DOM.themeToggle) {
      DOM.themeToggle.addEventListener("click", () => {
        const newTheme = state.theme === "light" ? "dark" : "light";
        applyTheme(newTheme);
      });
    }

    // Language Toggle
    if (DOM.langToggle) {
      DOM.langToggle.addEventListener("click", () => {
        const next = state.language === "both" ? "tamil" : state.language === "tamil" ? "english" : "both";
        state.language = next;
        localStorage.setItem("carnatic_lang", next);
        updateLangButtonText();
        refreshCurrentView();
      });
    }

    // Tanpura Drone
    if (DOM.tanpuraBtn) {
      DOM.tanpuraBtn.addEventListener("click", () => {
        const isPlaying = window.carnaticAudio.toggleTanpura();
        DOM.tanpuraBtn.classList.toggle("active", isPlaying);
        DOM.tanpuraBtn.innerHTML = isPlaying
          ? `<span class="icon">🛑</span> <span>நிறுத்து (Stop)</span>`
          : `<span class="icon">🪕</span> <span>சுருதி (Tanpura)</span>`;
      });
    }

    // Pitch Select
    if (DOM.pitchSelect) {
      DOM.pitchSelect.addEventListener("change", (e) => {
        const freq = parseFloat(e.target.value);
        window.carnaticAudio.setPitch(freq);
      });
    }

    // Syllabus Modal
    if (DOM.syllabusModalBtn && DOM.syllabusModal) {
      DOM.syllabusModalBtn.addEventListener("click", () => {
        DOM.syllabusModal.style.display = "flex";
      });
    }

    if (DOM.closeModalBtn && DOM.syllabusModal) {
      DOM.closeModalBtn.addEventListener("click", () => {
        DOM.syllabusModal.style.display = "none";
      });
    }

    if (DOM.syllabusModal) {
      DOM.syllabusModal.addEventListener("click", (e) => {
        if (e.target === DOM.syllabusModal) {
          DOM.syllabusModal.style.display = "none";
        }
      });
    }
  }

  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem("carnatic_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    if (DOM.themeToggle) {
      DOM.themeToggle.innerHTML = theme === "dark" ? "☀️ Light" : "🌙 Dark";
    }
  }

  function updateLangButtonText() {
    if (!DOM.langToggle) return;
    if (state.language === "both") {
      DOM.langToggle.innerHTML = `🌐 இருமொழியும் (Bilingual)`;
    } else if (state.language === "tamil") {
      DOM.langToggle.innerHTML = `🌐 தமிழ் மட்டும் (Tamil)`;
    } else {
      DOM.langToggle.innerHTML = `🌐 English Only`;
    }
  }

  function initAudioWidget() {
    updateLangButtonText();
    // Fill pitch select options
    if (DOM.pitchSelect && window.PITCH_MAP) {
      DOM.pitchSelect.innerHTML = Object.entries(window.PITCH_MAP)
        .map(([note, freq]) => `<option value="${freq}">${note} (${freq.toFixed(1)}Hz)</option>`)
        .join("");
    }
  }

  function switchTab(tabId) {
    state.currentTab = tabId;

    // Update Tab Navigation Active State
    DOM.tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });

    // Update View Visibility
    DOM.views.forEach(view => {
      const match = view.id === `${tabId}View`;
      view.style.display = match ? "block" : "none";
    });

    // Initialize View Data
    if (tabId === "study") renderStudyView();
    if (tabId === "flashcards") initFlashcards();
    if (tabId === "mcq") initMcqQuiz();
    if (tabId === "write") initWritePractice();
    if (tabId === "trial-exam") initTrialExam();
    if (tabId === "print-exam") renderPrintExamView();
    if (tabId === "progress") renderProgressView();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function refreshCurrentView() {
    switchTab(state.currentTab);
  }

  // =========================================================================
  // 1. STUDY NOTES VIEW
  // =========================================================================
  function renderStudyView() {
    const container = document.getElementById("studyViewContent");
    if (!container) return;

    let html = `
      <div class="section-banner">
        <div>
          <h2>📖 அறிமுறை தரம் 2 - முழுமையான பாடக் குறிப்புகள்</h2>
          <p>சாகித்ய சுருதிலயா பாடத்திட்டத்தில் உள்ள 6 முக்கிய பாடத் தலைப்புகள், விவரிப்புகள் மற்றும் ஒலி மாதிரிகள்.</p>
        </div>
        <div class="filter-bar" style="margin: 0;">
          <button class="pill-btn ${state.activeTopicFilter === 'all' ? 'active' : ''}" onclick="window.appFilterTopic('all')">அனைத்து தலைப்புகளும் (All)</button>
          <button class="pill-btn ${state.activeTopicFilter === 'topic1' ? 'active' : ''}" onclick="window.appFilterTopic('topic1')">1. அறிமுகம்</button>
          <button class="pill-btn ${state.activeTopicFilter === 'topic2' ? 'active' : ''}" onclick="window.appFilterTopic('topic2')">2. ஸப்தஸ்வரங்கள்</button>
          <button class="pill-btn ${state.activeTopicFilter === 'topic3' ? 'active' : ''}" onclick="window.appFilterTopic('topic3')">3. 12 ஸ்வரஸ்தானம்</button>
          <button class="pill-btn ${state.activeTopicFilter === 'topic4' ? 'active' : ''}" onclick="window.appFilterTopic('topic4')">4. ஸப்த தாளங்கள்</button>
          <button class="pill-btn ${state.activeTopicFilter === 'topic5' ? 'active' : ''}" onclick="window.appFilterTopic('topic5')">5. 5 ஜாதிகள்</button>
          <button class="pill-btn ${state.activeTopicFilter === 'topic6' ? 'active' : ''}" onclick="window.appFilterTopic('topic6')">6. இசைக் குறியீடுகள்</button>
        </div>
      </div>
    `;

    // TOPIC 1: INTRODUCTORY DEFINITIONS
    if (state.activeTopicFilter === "all" || state.activeTopicFilter === "topic1") {
      const t1 = SYLLABUS_DATA.topics[0];
      html += `
        <div class="topic-box" id="topic1">
          <div class="topic-box-header" onclick="window.toggleTopicAccordion('topic1Body')">
            <h3><span>📌</span> ${t1.titleTamil} <small style="font-size:0.85rem; color:var(--text-secondary);">(${t1.titleEnglish})</small></h3>
            <span class="topic-badge">18 வரைவிலக்கணங்கள் (18 Terms)</span>
          </div>
          <div class="topic-box-body" id="topic1Body">
            <p style="margin-bottom:1rem; color:var(--text-secondary);">${t1.description}</p>
            <div class="definition-grid">
              ${t1.items.map(item => `
                <div class="def-card">
                  <div class="def-card-term">
                    <span>${item.term}</span>
                    <span class="def-card-translit">${item.translit}</span>
                  </div>
                  ${state.language !== 'english' ? `<div class="def-card-tamil">${item.definitionTamil}</div>` : ''}
                  ${state.language !== 'tamil' ? `<div class="def-card-english">${item.definitionEnglish}</div>` : ''}
                  <div class="def-card-points">
                    ${item.keyPoints.map(kp => `<span class="point-tag">${kp}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    // TOPIC 2: SAPTA SWARAS & TAMIL NAMES
    if (state.activeTopicFilter === "all" || state.activeTopicFilter === "topic2") {
      const t2 = SYLLABUS_DATA.topics[1];
      html += `
        <div class="topic-box" id="topic2" style="margin-top:1.5rem;">
          <div class="topic-box-header" onclick="window.toggleTopicAccordion('topic2Body')">
            <h3><span>🎵</span> ${t2.titleTamil}</h3>
            <span class="topic-badge">7 ஸ்வரங்கள்</span>
          </div>
          <div class="topic-box-body" id="topic2Body">
            <p style="margin-bottom:1rem; color:var(--text-secondary);">${t2.description}</p>
            
            <div class="card" style="background:var(--secondary-light); border-color:var(--secondary); color:#78350f; padding:1rem; margin-bottom:1rem;">
              <strong>💡 நினைவில் வைக்க எளிய சூத்திரம் (Mnemonic):</strong><br>
              ${t2.mnemonic}
            </div>

            <div class="swara-table-wrapper">
              <table class="swara-table">
                <thead>
                  <tr>
                    <th>ஸ்வரம்</th>
                    <th>முழுப் பெயர் (Sanskrit)</th>
                    <th>தமிழ்ப் பெயர் (Tamil)</th>
                    <th>இயற்கை ஒலி / உவமை (Animal/Bird)</th>
                    <th>வகை (Nature)</th>
                    <th>கேட்க (Audio)</th>
                  </tr>
                </thead>
                <tbody>
                  ${t2.swaras.map(s => `
                    <tr>
                      <td><strong style="font-size:1.2rem; color:var(--primary);">${s.shortName}</strong></td>
                      <td>${s.fullName} <br><small style="color:var(--text-secondary);">${s.translit}</small></td>
                      <td><strong style="color:var(--secondary-hover);">${s.tamilName}</strong> <br><small style="color:var(--text-secondary);">${s.tamilTranslit}</small></td>
                      <td>${s.animal}</td>
                      <td><span class="point-tag">${s.nature}</span></td>
                      <td>
                        <button class="swara-audio-btn" onclick="window.playSwaraSound('${s.shortName === 'ஸ' ? 'S' : s.shortName === 'ரி' ? 'R2' : s.shortName === 'க' ? 'G3' : s.shortName === 'ம' ? 'M1' : s.shortName === 'ப' ? 'P' : s.shortName === 'த' ? 'D2' : 'N3'}')" title="Play ${s.shortName}">
                          ▶
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    // TOPIC 3: 12 SWARASTHANAS
    if (state.activeTopicFilter === "all" || state.activeTopicFilter === "topic3") {
      const t3 = SYLLABUS_DATA.topics[2];
      html += `
        <div class="topic-box" id="topic3" style="margin-top:1.5rem;">
          <div class="topic-box-header" onclick="window.toggleTopicAccordion('topic3Body')">
            <h3><span>🎹</span> ${t3.titleTamil}</h3>
            <span class="topic-badge">12 ஸ்தானங்கள் / 16 பெயர்கள்</span>
          </div>
          <div class="topic-box-body" id="topic3Body">
            <p style="margin-bottom:1rem; color:var(--text-secondary);">${t3.explanation}</p>

            <h4 style="margin:1rem 0 0.5rem; color:var(--primary);">கிளிக் செய்து சுவர ஒலிகளைக் கேட்கலாம் (Interactive Swarasthana Player):</h4>
            <div class="swarasthana-fretboard">
              ${t3.positions.map(p => `
                <div class="fret-key ${p.type.includes('Achala') ? 'achala' : 'chala'}" onclick="window.playSwaraSound('${p.names[0].abbr}')">
                  <div class="fret-pos">#${p.pos}</div>
                  <div class="fret-swara">${p.names[0].code}</div>
                  <div class="fret-code">${p.westernSemitone}</div>
                  <div class="fret-name">${p.names.map(n => n.nameTamil).join('<br>')}</div>
                  <small style="color:var(--secondary); font-weight:700; margin-top:4px;">▶ ஒலி</small>
                </div>
              `).join('')}
            </div>

            <div class="card" style="background:var(--bg-muted); margin-top:1.25rem;">
              <h4 style="color:var(--primary); margin-bottom:0.5rem;">ஒரே ஸ்தானத்தைப் பகிர்ந்து கொள்ளும் ஸ்வரங்கள் (Shared Positions):</h4>
              <ul style="padding-left:1.25rem; font-size:0.95rem; line-height:1.7;">
                <li><strong>ஸ்தானம் 3:</strong> சதுஸ்ருதி ரிஷபம் (R2) = சுத்த காந்தாரம் (G1)</li>
                <li><strong>ஸ்தானம் 4:</strong> ஷட்ச்ருதி ரிஷபம் (R3) = சாதாரண காந்தாரம் (G2)</li>
                <li><strong>ஸ்தானம் 10:</strong> சதுஸ்ருதி தைவதம் (D2) = சுத்த நிஷாதம் (N1)</li>
                <li><strong>ஸ்தானம் 11:</strong> ஷட்ச்ருதி தைவதம் (D3) = கைசிக நிஷாதம் (N2)</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    }

    // TOPIC 4: SAPTA TALAS & ANGAS
    if (state.activeTopicFilter === "all" || state.activeTopicFilter === "topic4") {
      const t4 = SYLLABUS_DATA.topics[3];
      html += `
        <div class="topic-box" id="topic4" style="margin-top:1.5rem;">
          <div class="topic-box-header" onclick="window.toggleTopicAccordion('topic4Body')">
            <h3><span>🥁</span> ${t4.titleTamil}</h3>
            <span class="topic-badge">3 அங்கங்கள் & 7 தாளங்கள்</span>
          </div>
          <div class="topic-box-body" id="topic4Body">
            <h4 style="color:var(--primary); margin-bottom:0.75rem;">1. தாளத்தின் முக்கிய 3 அங்கங்கள் (The 3 Main Angas):</h4>
            <div class="definition-grid" style="margin-bottom:1.5rem;">
              ${t4.angas.map(a => `
                <div class="def-card" style="border-top:4px solid var(--secondary);">
                  <div class="def-card-term">
                    <span>${a.nameTamil} (${a.nameEnglish})</span>
                    <span style="font-size:1.5rem; color:var(--primary);">${a.symbol}</span>
                  </div>
                  <p style="font-weight:600; color:var(--text-primary); margin:0.3rem 0;">செயல்: ${a.actionTamil}</p>
                  <p style="color:var(--text-secondary); font-size:0.88rem;">Action: ${a.actionEnglish}</p>
                  <div style="margin-top:0.5rem;"><span class="point-tag">காலம்: ${a.aksharas} அக்ஷரம்</span></div>
                </div>
              `).join('')}
            </div>

            <h4 style="color:var(--primary); margin-bottom:0.75rem;">2. சூளாதி ஸப்த தாளங்கள் (Suladi Sapta Talas):</h4>
            <div class="card" style="background:var(--secondary-light); border-color:var(--secondary); color:#78350f; padding:0.85rem; margin-bottom:1rem; font-style:italic;">
              <strong>ஸப்த தாள சுலோகம்:</strong> ${t4.talaShlokam}
            </div>

            <div class="swara-table-wrapper">
              <table class="swara-table">
                <thead>
                  <tr>
                    <th>எண்</th>
                    <th>தாளத்தின் பெயர்</th>
                    <th>அங்க அமைப்பு</th>
                    <th>அங்கக் குறியீடு</th>
                    <th>சதுரஸ்ர அக்ஷர அளவு</th>
                    <th>செயல் முறை</th>
                  </tr>
                </thead>
                <tbody>
                  ${t4.talas.map(t => `
                    <tr>
                      <td><strong>${t.id}</strong></td>
                      <td><strong style="color:var(--primary); font-size:1.05rem;">${t.nameTamil}</strong><br><small style="color:var(--text-secondary);">${t.nameEnglish}</small></td>
                      <td>${t.angasTamil}</td>
                      <td><span style="font-size:1.25rem; font-weight:700; letter-spacing:0.15em; color:var(--secondary-hover);">${t.symbol}</span></td>
                      <td>${t.chaturasraCount || t.misraCount || t.khandaCount}</td>
                      <td>
                        <button class="btn btn-outline btn-sm" onclick="window.simulateTala('${t.nameTamil}', '${t.symbol}')">
                          👏 தாளப் பயிற்சி
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    // TOPIC 5: 5 JATHIS
    if (state.activeTopicFilter === "all" || state.activeTopicFilter === "topic5") {
      const t5 = SYLLABUS_DATA.topics[4];
      html += `
        <div class="topic-box" id="topic5" style="margin-top:1.5rem;">
          <div class="topic-box-header" onclick="window.toggleTopicAccordion('topic5Body')">
            <h3><span>🖐️</span> ${t5.titleTamil}</h3>
            <span class="topic-badge">5 ஜாதிகள் = 35 தாளங்கள்</span>
          </div>
          <div class="topic-box-body" id="topic5Body">
            <p style="margin-bottom:1rem; color:var(--text-secondary);">${t5.description}</p>
            <div class="card" style="background:var(--accent-light); border-color:var(--accent); color:#064e3b; padding:1rem; margin-bottom:1.25rem; font-weight:600;">
              முக்கிய விபரம்: லகுவின் (I) அக்ஷர அளவை மட்டுமே இந்த 5 ஜாதிகள் மாற்றும்! த்ருதம் (O = 2), அனுத்ருதம் (U = 1) எப்போதும் மாறாது.
            </div>

            <div class="swara-table-wrapper">
              <table class="swara-table">
                <thead>
                  <tr>
                    <th>ஜாதிப் பெயர்</th>
                    <th>லகு அடையாளம்</th>
                    <th>அக்ஷர எண்ணிக்கை</th>
                    <th>கை விரல் செயல் முறை</th>
                  </tr>
                </thead>
                <tbody>
                  ${t5.jathis.map(j => `
                    <tr>
                      <td><strong style="color:var(--primary); font-size:1.05rem;">${j.nameTamil}</strong> (${j.nameEnglish})</td>
                      <td><strong style="font-size:1.3rem; color:var(--secondary);">${j.laghuSymbol}</strong></td>
                      <td><span class="point-tag" style="font-size:0.95rem; font-weight:700;">${j.aksharas} அக்ஷரங்கள்</span></td>
                      <td>${j.actionTamil}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="card" style="background:var(--bg-muted); margin-top:1.25rem;">
              <h4 style="color:var(--primary); margin-bottom:0.5rem;">35 தாளக் கணக்கீட்டு உதாரணங்கள்:</h4>
              <ul style="padding-left:1.25rem; line-height:1.7;">
                <li><strong>சதுரஸ்ர ஜாதி திரிபுட தாளம் (ஆதி தாளம்):</strong> I₄ + O + O = 4 + 2 + 2 = <strong>8 அக்ஷரங்கள்</strong></li>
                <li><strong>மிஸ்ர ஜாதி ஜம்பை தாளம்:</strong> I₇ + U + O = 7 + 1 + 2 = <strong>10 அக்ஷரங்கள்</strong></li>
                <li><strong>கண்ட ஜாதி அட தாளம்:</strong> I₅ + I₅ + O + O = 5 + 5 + 2 + 2 = <strong>14 அக்ஷரங்கள்</strong></li>
                <li><strong>திஸ்ர ஜாதி ஏக தாளம்:</strong> I₃ = <strong>3 அக்ஷரங்கள்</strong></li>
              </ul>
            </div>
          </div>
        </div>
      `;
    }

    // TOPIC 6: MUSICAL NOTATION & SYMBOLS
    if (state.activeTopicFilter === "all" || state.activeTopicFilter === "topic6") {
      const t6 = SYLLABUS_DATA.topics[5];
      html += `
        <div class="topic-box" id="topic6" style="margin-top:1.5rem;">
          <div class="topic-box-header" onclick="window.toggleTopicAccordion('topic6Body')">
            <h3><span>🎼</span> ${t6.titleTamil}</h3>
            <span class="topic-badge">ஸ்தாயி, காலம், கார்வைக் குறிகள்</span>
          </div>
          <div class="topic-box-body" id="topic6Body">
            <p style="margin-bottom:1rem; color:var(--text-secondary);">${t6.description}</p>
            ${t6.categories.map(cat => `
              <div style="margin-bottom:1.5rem;">
                <h4 style="color:var(--primary); border-bottom:2px solid var(--border); padding-bottom:0.35rem; margin-bottom:0.85rem;">
                  ${cat.categoryNameTamil} <small style="color:var(--text-secondary); font-size:0.85rem;">(${cat.categoryNameEnglish})</small>
                </h4>
                <div class="definition-grid">
                  ${cat.symbols.map(s => `
                    <div class="def-card">
                      <div class="def-card-term">
                        <span style="font-size:1.3rem; color:var(--secondary-hover);">${s.symbol}</span>
                        <span style="font-size:0.9rem; color:var(--primary); font-weight:600;">${s.nameTamil}</span>
                      </div>
                      <p style="font-size:0.92rem; color:var(--text-primary); margin-top:0.4rem;">${s.descriptionTamil}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  // Window helper for topic filtering
  window.appFilterTopic = function (topicId) {
    state.activeTopicFilter = topicId;
    renderStudyView();
  };

  // Window helper for accordion toggling
  window.toggleTopicAccordion = function (bodyId) {
    const el = document.getElementById(bodyId);
    if (!el) return;
    el.style.display = el.style.display === "none" ? "block" : "none";
  };

  // Window helper for playing swara sound
  window.playSwaraSound = function (abbr) {
    const ratio = window.SWARA_RATIOS[abbr] || 1.0;
    window.carnaticAudio.playSwara(ratio, 0.9);
  };

  // Window helper for interactive tala simulation
  window.simulateTala = function (name, symbol) {
    alert(`👏 தாளப் பயிற்சி: ${name} (${symbol})\nலகுவுக்கு தட்டும் விரல் எண்ணிக்கையும், த்ருதத்திற்கு தட்டும் வீச்சும் போட்டுப் பழகவும்!`);
    window.carnaticAudio.playTalaSound("clap");
  };

  // =========================================================================
  // 2. FLASHCARDS VIEW
  // =========================================================================
  function initFlashcards() {
    state.flashcards = [...SYLLABUS_DATA.flashcards];
    state.currentCardIndex = 0;
    state.isCardFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    const container = document.getElementById("flashcardsViewContent");
    if (!container) return;

    if (!state.flashcards.length) {
      container.innerHTML = `<div class="card text-center"><p>நினைவு அட்டைகள் இல்லை.</p></div>`;
      return;
    }

    const card = state.flashcards[state.currentCardIndex];
    const total = state.flashcards.length;

    container.innerHTML = `
      <div class="section-banner">
        <div>
          <h2>💡 நினைவு அட்டைகள் (Flashcards)</h2>
          <p>அட்டையை கிளிக் செய்து திருப்பி விடையைப் பார்க்கலாம். பரீட்சைக்கு முன்பு விரைவாக நினைவுகூர உதவும்!</p>
        </div>
        <div style="font-weight:700; color:var(--secondary); font-size:1.1rem;">
          அட்டை ${state.currentCardIndex + 1} / ${total}
        </div>
      </div>

      <div class="flashcard-wrapper" onclick="window.flipCard()">
        <div class="flashcard ${state.isCardFlipped ? 'flipped' : ''}" id="activeCard">
          <!-- FRONT FACE -->
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-topic-tag">📌 ${card.topicTitle}</div>
            <div class="flashcard-content">${card.front}</div>
            <div class="flashcard-hint">🔄 கிளிக் செய்து விடையைப் பார்க்கவும் (Click to Flip)</div>
          </div>

          <!-- BACK FACE -->
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-topic-tag">✅ சரியான விடை (Answer)</div>
            <div class="flashcard-content" style="font-size:1.15rem; text-align:left;">${card.back}</div>
            <div class="flashcard-hint">🔄 மீண்டும் கிளிக் செய்ய முன்னால் திரும்பும்</div>
          </div>
        </div>
      </div>

      <div class="flashcard-controls">
        <button class="btn btn-outline" onclick="window.prevCard()" ${state.currentCardIndex === 0 ? 'disabled' : ''}>
          ⬅️ முந்தையது (Prev)
        </button>
        <button class="btn btn-secondary" onclick="window.flipCard()">
          🔄 திருப்புக (Flip)
        </button>
        <button class="btn btn-outline" onclick="window.shuffleCards()">
          🔀 கலைத்துப் போடு (Shuffle)
        </button>
        <button class="btn btn-primary" onclick="window.nextCard()" ${state.currentCardIndex === total - 1 ? 'disabled' : ''}>
          அடுத்தது (Next) ➡️
        </button>
      </div>
    `;
  }

  window.flipCard = function () {
    state.isCardFlipped = !state.isCardFlipped;
    const cardEl = document.getElementById("activeCard");
    if (cardEl) {
      cardEl.classList.toggle("flipped", state.isCardFlipped);
    }
  };

  window.nextCard = function () {
    if (state.currentCardIndex < state.flashcards.length - 1) {
      state.currentCardIndex++;
      state.isCardFlipped = false;
      renderFlashcard();
    }
  };

  window.prevCard = function () {
    if (state.currentCardIndex > 0) {
      state.currentCardIndex--;
      state.isCardFlipped = false;
      renderFlashcard();
    }
  };

  window.shuffleCards = function () {
    for (let i = state.flashcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.flashcards[i], state.flashcards[j]] = [state.flashcards[j], state.flashcards[i]];
    }
    state.currentCardIndex = 0;
    state.isCardFlipped = false;
    renderFlashcard();
  };

  // =========================================================================
  // 3. MCQ PRACTICE QUIZ
  // =========================================================================
  function initMcqQuiz(filterTopic = "all") {
    let pool = [...SYLLABUS_DATA.mcqQuestions];
    if (filterTopic !== "all") {
      pool = pool.filter(q => q.topicId === filterTopic);
    }
    // Shuffle questions
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    state.mcqPool = pool;
    state.currentMcqIndex = 0;
    state.mcqScore = 0;
    state.mcqStreak = 0;
    state.mcqAnswered = false;
    state.activeMcqFilter = filterTopic;
    renderMcqQuestion();
  }

  function renderMcqQuestion() {
    const container = document.getElementById("mcqViewContent");
    if (!container) return;

    if (!state.mcqPool.length) {
      container.innerHTML = `<div class="card text-center"><p>வினாக்கள் ஏதுமில்லை.</p></div>`;
      return;
    }

    if (state.currentMcqIndex >= state.mcqPool.length) {
      renderMcqSummary(container);
      return;
    }

    const q = state.mcqPool[state.currentMcqIndex];
    const total = state.mcqPool.length;
    const progressPercent = Math.round((state.currentMcqIndex / total) * 100);

    container.innerHTML = `
      <div class="quiz-container">
        <div class="section-banner" style="margin-bottom:1rem;">
          <div>
            <h2>🎯 பலவுள் தெரிவு பயிற்சி (MCQ Quiz)</h2>
            <p>ஒவ்வொரு வினாவுக்கும் சரியான விடையைத் தேர்வு செய்க. உடனடி விளக்கம் வழங்கப்படும்!</p>
          </div>
          <div class="filter-bar" style="margin:0;">
            <button class="pill-btn ${state.activeMcqFilter === 'all' ? 'active' : ''}" onclick="window.filterMcqQuiz('all')">அனைத்தும்</button>
            <button class="pill-btn ${state.activeMcqFilter === 'topic1' ? 'active' : ''}" onclick="window.filterMcqQuiz('topic1')">அறிமுகம்</button>
            <button class="pill-btn ${state.activeMcqFilter === 'topic2' ? 'active' : ''}" onclick="window.filterMcqQuiz('topic2')">ஸ்வரங்கள்</button>
            <button class="pill-btn ${state.activeMcqFilter === 'topic4' ? 'active' : ''}" onclick="window.filterMcqQuiz('topic4')">தாளங்கள்</button>
            <button class="pill-btn ${state.activeMcqFilter === 'topic5' ? 'active' : ''}" onclick="window.filterMcqQuiz('topic5')">ஜாதிகள்</button>
            <button class="pill-btn ${state.activeMcqFilter === 'topic6' ? 'active' : ''}" onclick="window.filterMcqQuiz('topic6')">குறியீடுகள்</button>
          </div>
        </div>

        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <div class="card">
          <div class="quiz-header-meta">
            <span>வினா ${state.currentMcqIndex + 1} / ${total}</span>
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span class="streak-badge">🔥 தொடர்: ${state.mcqStreak}</span>
              <span style="font-weight:700; color:var(--primary);">புள்ளிகள்: ${state.mcqScore}</span>
            </div>
          </div>

          <div class="quiz-question-text">
            ${state.language !== 'english' ? q.questionTamil : ''}
          </div>
          ${state.language !== 'tamil' ? `<div class="quiz-question-sub">${q.questionEnglish}</div>` : ''}

          <div class="quiz-options">
            ${q.optionsTamil.map((optTamil, idx) => {
              const optEnglish = q.optionsEnglish[idx];
              const letters = ["A", "B", "C", "D"];
              return `
                <button class="quiz-option-btn" id="optBtn_${idx}" onclick="window.checkMcqAnswer(${idx})" ${state.mcqAnswered ? 'disabled' : ''}>
                  <span class="quiz-option-letter">${letters[idx]}</span>
                  <div>
                    ${state.language !== 'english' ? `<div>${optTamil}</div>` : ''}
                    ${state.language !== 'tamil' && optEnglish ? `<div style="font-size:0.85rem; color:var(--text-secondary);">${optEnglish}</div>` : ''}
                  </div>
                </button>
              `;
            }).join('')}
          </div>

          <div id="mcqFeedbackArea" style="display:none;"></div>

          <div style="display:flex; justify-content:flex-end; margin-top:1.5rem;">
            <button class="btn btn-primary" id="mcqNextBtn" onclick="window.nextMcqQuestion()" style="display:none;">
              அடுத்த வினா (Next) ➡️
            </button>
          </div>
        </div>
      </div>
    `;
  }

  window.filterMcqQuiz = function (topicId) {
    initMcqQuiz(topicId);
  };

  window.checkMcqAnswer = function (selectedIndex) {
    if (state.mcqAnswered) return;
    state.mcqAnswered = true;

    const q = state.mcqPool[state.currentMcqIndex];
    const isCorrect = selectedIndex === q.correctIndex;

    const selectedBtn = document.getElementById(`optBtn_${selectedIndex}`);
    const correctBtn = document.getElementById(`optBtn_${q.correctIndex}`);

    if (isCorrect) {
      if (selectedBtn) selectedBtn.classList.add("correct");
      state.mcqScore += 1;
      state.mcqStreak += 1;
      window.carnaticAudio.playCorrect();
    } else {
      if (selectedBtn) selectedBtn.classList.add("wrong");
      if (correctBtn) correctBtn.classList.add("correct");
      state.mcqStreak = 0;
      window.carnaticAudio.playWrong();
    }

    // Show Explanation
    const feedbackArea = document.getElementById("mcqFeedbackArea");
    if (feedbackArea) {
      feedbackArea.style.display = "block";
      feedbackArea.innerHTML = `
        <div class="quiz-explanation-box">
          <strong>${isCorrect ? '🎉 அற்புதம்! மிகச் சரியான விடை!' : '❌ தவறு, சரியான விடையைக் கவனிக்கவும்:'}</strong>
          <p style="margin-top:0.4rem; color:var(--text-primary);">${q.explanation}</p>
        </div>
      `;
    }

    const nextBtn = document.getElementById("mcqNextBtn");
    if (nextBtn) nextBtn.style.display = "inline-flex";

    saveProgress();
  };

  window.nextMcqQuestion = function () {
    state.currentMcqIndex++;
    state.mcqAnswered = false;
    renderMcqQuestion();
  };

  function renderMcqSummary(container) {
    const total = state.mcqPool.length;
    const percent = Math.round((state.mcqScore / total) * 100);
    if (percent >= 80) {
      window.carnaticAudio.playFanfare();
      triggerConfetti();
    }

    container.innerHTML = `
      <div class="card text-center" style="max-width:600px; margin:2rem auto; padding:2.5rem;">
        <div style="font-size:3.5rem; margin-bottom:1rem;">
          ${percent >= 80 ? '🏆' : percent >= 60 ? '🌟' : '📚'}
        </div>
        <h2 style="color:var(--primary); margin-bottom:0.5rem;">பயிற்சி நிறைவுற்றது! (Quiz Completed)</h2>
        <p style="font-size:1.1rem; color:var(--text-secondary); margin-bottom:1.5rem;">
          நீங்கள் பெற்ற மதிப்பெண்: <strong>${state.mcqScore} / ${total}</strong> (${percent}%)
        </p>

        <div class="card" style="background:var(--bg-muted); margin-bottom:1.5rem; text-align:left;">
          <h4 style="color:var(--primary); margin-bottom:0.5rem;">மதிப்பீடு & ஆலோசனைகள்:</h4>
          <p style="font-size:0.95rem; line-height:1.6;">
            ${percent >= 90
        ? 'அதி சிறப்பு! நீங்கள் தரம் 2 அறிமுறைப் பாடத்தில் மிகத் தேர்ச்சி பெற்றுள்ளீர்கள். அடுத்ததாக மாதிரிப் பரீட்சையை எழுதிப் பார்க்கவும்!'
        : percent >= 75
          ? 'மிக நன்று! பெரும்பாலான வினாக்களுக்குச் சரியான விடையளித்துள்ளீர்கள். தவறவிட்ட பகுதிகளை பாடக் குறிப்புகளில் மீளாய்வு செய்யவும்.'
          : 'நல்ல முயற்சி! தொடர்ந்து பயிற்சி செய்தால் முழு மதிப்பெண்களையும் எளிதாகப் பெறலாம். பாடக் குறிப்புகளையும் நினைவு அட்டைகளையும் மீண்டும் படியுங்கள்!'}
          </p>
        </div>

        <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="window.filterMcqQuiz('all')">
            🔄 மீண்டும் பயிற்சி செய்க (Retry)
          </button>
          <button class="btn btn-secondary" onclick="window.switchTabTo('write')">
            ✍️ அடுத்ததாக: எழுத்துப் பயிற்சி (Write Mode)
          </button>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 4. WRITE & PRACTICE MODE (Small questions drill)
  // "where he can write the answers... very small questions"
  // =========================================================================
  function initWritePractice() {
    state.writePool = [...SYLLABUS_DATA.writeQuestions];
    // Shuffle
    for (let i = state.writePool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.writePool[i], state.writePool[j]] = [state.writePool[j], state.writePool[i]];
    }
    state.currentWriteIndex = 0;
    state.writeRevealed = false;
    state.writeFeedback = null;
    renderWriteQuestion();
  }

  function renderWriteQuestion() {
    const container = document.getElementById("writeViewContent");
    if (!container) return;

    if (!state.writePool.length) {
      container.innerHTML = `<div class="card text-center"><p>வினாக்கள் ஏதுமில்லை.</p></div>`;
      return;
    }

    if (state.currentWriteIndex >= state.writePool.length) {
      renderWriteSummary(container);
      return;
    }

    const q = state.writePool[state.currentWriteIndex];
    const total = state.writePool.length;

    container.innerHTML = `
      <div class="write-card">
        <div class="section-banner">
          <div>
            <h2>✍️ எழுத்துப் பயிற்சி (Short Answer Practice)</h2>
            <p>வினாவைப் படித்து விடையைத் தட்டச்சு செய்யவும் (அல்லது நோட்டுப் புத்தகத்தில் எழுதிப் பார்க்கவும்). பின்னர் மாதிரி விடையுடன் ஒப்பிட்டுச் சரிபார்க்கவும்!</p>
          </div>
          <div style="font-weight:700; color:var(--secondary); font-size:1.1rem;">
            வினா ${state.currentWriteIndex + 1} / ${total}
          </div>
        </div>

        <div class="card">
          <div class="quiz-question-text" style="color:var(--primary);">
            ${q.questionTamil}
          </div>
          <div class="quiz-question-sub">
            ${q.questionEnglish}
          </div>

          <div style="margin:0.85rem 0;">
            <button class="btn btn-outline btn-sm" onclick="window.toggleWriteHint()">
              💡 குறிப்பு பார்க்க (Show Hint)
            </button>
            <div id="writeHintBox" style="display:none; margin-top:0.5rem; font-size:0.9rem; color:var(--secondary-hover); background:var(--secondary-light); padding:0.5rem 0.85rem; border-radius:var(--radius-sm);">
              <strong>குறிப்பு:</strong> ${q.hint}
            </div>
          </div>

          <div class="write-input-group">
            <label style="display:block; font-weight:600; margin-bottom:0.4rem; color:var(--text-secondary);">
              உங்கள் விடை (Your Answer in Tamil or English transliteration):
            </label>
            <input 
              type="text" 
              class="write-input" 
              id="studentWriteInput" 
              placeholder="எடுத்துக்காட்டு: குரல் / kural ..." 
              autocomplete="off"
              onkeypress="if(event.key === 'Enter') window.checkStudentTypedAnswer()"
            />
          </div>

          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="window.checkStudentTypedAnswer()">
              🔍 விடையைச் சரிபார்க்க (Check Answer)
            </button>
            <button class="btn btn-outline" onclick="window.revealModelAnswer()">
              👁️ விடையை நேரடியாகப் பார்க்க (Reveal Model Answer)
            </button>
          </div>

          <div id="modelAnswerSection" style="display:none;"></div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const input = document.getElementById("studentWriteInput");
      if (input) input.focus();
    }, 100);
  }

  window.toggleWriteHint = function () {
    const hintBox = document.getElementById("writeHintBox");
    if (hintBox) {
      hintBox.style.display = hintBox.style.display === "none" ? "block" : "none";
    }
  };

  window.checkStudentTypedAnswer = function () {
    const input = document.getElementById("studentWriteInput");
    if (!input) return;
    const typed = input.value.trim().toLowerCase();
    const q = state.writePool[state.currentWriteIndex];

    // Check if matches any acceptable answer
    const isMatch = q.acceptableAnswers.some(ans => {
      const cleaned = ans.trim().toLowerCase();
      return typed === cleaned || (typed.length > 2 && cleaned.includes(typed)) || (typed.length > 2 && typed.includes(cleaned));
    });

    if (isMatch) {
      window.carnaticAudio.playCorrect();
    } else {
      window.carnaticAudio.playWrong();
    }

    window.revealModelAnswer(isMatch ? "match" : "check");
  };

  window.revealModelAnswer = function (status = "neutral") {
    state.writeRevealed = true;
    const q = state.writePool[state.currentWriteIndex];
    const container = document.getElementById("modelAnswerSection");
    if (!container) return;

    container.style.display = "block";
    container.innerHTML = `
      <div class="model-answer-box" style="${status === 'match' ? 'border-color:var(--accent); background:var(--accent-light);' : ''}">
        <div style="font-weight:700; font-size:1.05rem; margin-bottom:0.4rem; color:var(--primary);">
          ${status === 'match' ? '🎉 அருமை! உங்கள் விடை சரியானது!' : '📋 சரியான மாதிரி விடை (Model Answer):'}
        </div>
        <div style="font-size:1.15rem; font-weight:700; color:var(--text-primary); margin-bottom:0.25rem;">
          ${q.modelAnswerTamil}
        </div>
        <div style="font-size:0.95rem; color:var(--text-secondary); font-style:italic;">
          ${q.modelAnswerEnglish}
        </div>

        <div style="margin-top:1.25rem; border-top:1px dashed rgba(0,0,0,0.15); padding-top:0.85rem;">
          <p style="font-weight:600; margin-bottom:0.5rem; font-size:0.9rem;">
            நீங்கள் எழுதிய விடை எவ்வாறு இருந்தது என சுயமாக மதிப்பிடுங்கள் (Self-Evaluation):
          </p>
          <div class="self-grade-actions">
            <button class="btn btn-accent btn-sm" onclick="window.gradeWriteAnswer('correct')">
              ✅ சரியாக எழுதினேன்! (I got it right!)
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.gradeWriteAnswer('practice')">
              ⚠️ கிட்டதட்ட சரி / மீண்டும் பழக வேண்டும் (Needs Practice)
            </button>
            <button class="btn btn-outline btn-sm" onclick="window.gradeWriteAnswer('repeat')">
              🔁 தவறாக எழுதினேன் / மீண்டும் கேள் (Repeat Later)
            </button>
          </div>
        </div>
      </div>
    `;
  };

  window.gradeWriteAnswer = function (grade) {
    const q = state.writePool[state.currentWriteIndex];
    if (grade === "repeat" || grade === "practice") {
      state.repeatList.push(q);
    }
    state.currentWriteIndex++;
    state.writeRevealed = false;
    renderWriteQuestion();
  };

  function renderWriteSummary(container) {
    container.innerHTML = `
      <div class="card text-center" style="max-width:600px; margin:2rem auto; padding:2.5rem;">
        <div style="font-size:3.5rem; margin-bottom:1rem;">🎉</div>
        <h2 style="color:var(--primary); margin-bottom:0.5rem;">எழுத்துப் பயிற்சி நிறைவடைந்தது!</h2>
        <p style="color:var(--text-secondary); margin-bottom:1.5rem;">
          அனைத்து வினாக்களையும் எழுதிப் பார்த்துவிட்டீர்கள்! மீண்டும் மீண்டும் எழுதிப் பார்ப்பது பரீட்சைக்கான நினைவாற்றலை மிகவும் அதிகரிக்கும்.
        </p>

        ${state.repeatList.length > 0 ? `
          <div class="card" style="background:var(--secondary-light); border-color:var(--secondary); color:#78350f; text-align:left; margin-bottom:1.5rem;">
            <strong>மீண்டும் பழக வேண்டிய வினாக்கள் (${state.repeatList.length}):</strong>
            <ul style="margin-top:0.5rem; padding-left:1.25rem; font-size:0.95rem;">
              ${state.repeatList.slice(0, 5).map(q => `<li>${q.questionTamil}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="window.initWritePractice()">
            🔄 மீண்டும் பயிற்சி செய்க (Restart Drill)
          </button>
          <button class="btn btn-secondary" onclick="window.switchTabTo('trial-exam')">
            📝 மாதிரிப் பரீட்சை எழுத (Trial Exam)
          </button>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 5. TRIAL EXAM VIEW (100 Marks Full Authentic Exam Simulation)
  // =========================================================================
  function initTrialExam() {
    renderTrialExamIntro();
  }

  function renderTrialExamIntro() {
    const container = document.getElementById("trialExamViewContent");
    if (!container) return;

    const exam = SYLLABUS_DATA.trialExams[0];

    container.innerHTML = `
      <div class="card" style="max-width:800px; margin:0 auto; padding:2.5rem;">
        <div class="exam-banner-top">
          <h2>${SYLLABUS_DATA.institution}</h2>
          <h3 style="color:var(--primary); margin-top:0.5rem;">அறிமுறை தரம் - 2 (Theory Grade - 2)</h3>
          <p>மாதிரிப் பரீட்சை வினாத்தாள் - 100 புள்ளிகள் (Model Examination Paper)</p>
          <div class="exam-meta-grid">
            <div>நேரம்: 30 நிமிடங்கள்</div>
            <div>மொத்தப் புள்ளிகள்: 100</div>
            <div>பகுதிகள்: அ, ஆ, இ, ஈ, உ (5 Sections)</div>
          </div>
        </div>

        <div style="font-size:1rem; line-height:1.7; margin-bottom:2rem;">
          <h4 style="color:var(--primary); margin-bottom:0.5rem;">பரீட்சை அமைப்பும் விதிகளும்:</h4>
          <ul style="padding-left:1.25rem; color:var(--text-secondary);">
            <li><strong>பகுதி 'அ':</strong> பலவுள் தெரிவு வினாக்கள் (10 × 2 = 20 புள்ளிகள்)</li>
            <li><strong>பகுதி 'ஆ':</strong> கோடிட்ட இடங்களை நிரப்புக (10 × 2 = 20 புள்ளிகள்)</li>
            <li><strong>பகுதி 'இ':</strong> பொருத்துக (10 × 1 = 10 புள்ளிகள்)</li>
            <li><strong>பகுதி 'ஈ':</strong> தாள அக்ஷரக் கணக்கீடுகள் (5 × 4 = 20 புள்ளிகள்)</li>
            <li><strong>பகுதி 'உ':</strong> சிறு வினாக்கள் வரைவிலக்கணம் (6 × 5 = 30 புள்ளிகள்)</li>
          </ul>
        </div>

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <button class="btn btn-primary btn-lg" onclick="window.startTrialExam()">
            🚀 பரீட்சையைத் தொடங்குக (Start Exam)
          </button>
          <button class="btn btn-outline btn-lg" onclick="window.switchTabTo('print-exam')">
            🖨️ தாளில் எழுத வினாத்தாளை அச்சிடுக (Print Paper)
          </button>
        </div>
      </div>
    `;
  }

  window.startTrialExam = function () {
    state.examState = {
      active: true,
      timeLeft: 1800, // 30 minutes
      timerInterval: null,
      mcqAnswers: {},
      fillAnswers: {},
      matchPairs: {},
      mathAnswers: {},
      essaySelfScores: {},
      submitted: false,
      finalScore: null
    };

    // Start countdown timer
    state.examState.timerInterval = setInterval(() => {
      if (state.examState.timeLeft > 0) {
        state.examState.timeLeft--;
        updateExamTimerDisplay();
      } else {
        clearInterval(state.examState.timerInterval);
        alert("⏰ பரீட்சைக்கான நேரம் முடிவடைந்தது! உங்கள் விடைகள் சமர்ப்பிக்கப்படுகின்றன.");
        window.submitTrialExam();
      }
    }, 1000);

    renderLiveTrialExam();
  };

  function updateExamTimerDisplay() {
    const el = document.getElementById("examTimerBox");
    if (!el) return;
    const mins = Math.floor(state.examState.timeLeft / 60);
    const secs = state.examState.timeLeft % 60;
    el.innerHTML = `⏱️ நேரம்: ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function renderLiveTrialExam() {
    const container = document.getElementById("trialExamViewContent");
    if (!container) return;

    const exam = SYLLABUS_DATA.trialExams[0];
    const secA = exam.sections[0];
    const secB = exam.sections[1];
    const secC = exam.sections[2];
    const secD = exam.sections[3];
    const secE = exam.sections[4];

    // Find MCQ questions for section A
    const secAMcqs = secA.questionIds.map(id => SYLLABUS_DATA.mcqQuestions.find(q => q.id === id)).filter(Boolean);

    let html = `
      <div class="exam-paper">
        <div class="exam-timer-sticky" id="examTimerBox">
          ⏱️ நேரம்: 30:00
        </div>

        <div class="exam-banner-top">
          <h2>${SYLLABUS_DATA.institution}</h2>
          <h3 style="color:var(--primary); margin-top:0.4rem;">அறிமுறை தரம் - 2 மாதிரிப் பரீட்சை</h3>
          <p>Theory Grade - 2 Trial Examination | Total Marks: 100</p>
        </div>

        <!-- SECTION A: MCQ -->
        <div class="exam-section-title">${secA.titleTamil}</div>
        <div style="margin-bottom:2rem;">
          ${secAMcqs.map((q, idx) => `
            <div style="margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--border);">
              <p style="font-weight:700; margin-bottom:0.6rem; color:var(--text-primary);">
                ${idx + 1}. ${q.questionTamil} <small style="color:var(--text-secondary); font-weight:normal;">(${q.questionEnglish})</small>
              </p>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:0.5rem;">
                ${q.optionsTamil.map((opt, oIdx) => `
                  <label style="display:flex; align-items:center; gap:0.5rem; padding:0.5rem 0.85rem; border:1px solid var(--border); border-radius:var(--radius-sm); cursor:pointer;">
                    <input type="radio" name="exam_mcq_${q.id}" value="${oIdx}" onchange="window.recordExamMcq('${q.id}', ${oIdx})">
                    <span>${opt}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- SECTION B: FILL IN THE BLANKS -->
        <div class="exam-section-title">${secB.titleTamil}</div>
        <div style="margin-bottom:2rem;">
          ${secB.questions.map((q, idx) => `
            <div style="margin-bottom:1.25rem;">
              <p style="font-weight:600; margin-bottom:0.4rem;">${idx + 1}. ${q.questionTamil}</p>
              <input 
                type="text" 
                class="write-input" 
                style="padding:0.5rem 0.85rem; font-size:1rem; max-width:320px;" 
                placeholder="விடையை எழுதவும்..."
                onchange="window.recordExamFill('${q.id}', this.value)"
              />
            </div>
          `).join('')}
        </div>

        <!-- SECTION C: MATCH THE FOLLOWING -->
        <div class="exam-section-title">${secC.titleTamil}</div>
        <p style="color:var(--text-secondary); margin-bottom:1rem;">இடப்பக்கமுள்ள ஸ்வரம்/அங்கத்தை வலப்பக்கமுள்ள சரியான தமிழ்ப் பெயருடன் பொருத்துக:</p>
        <div class="match-columns-grid">
          <div>
            <h4 style="color:var(--primary); margin-bottom:0.5rem;">பகுதி 1 (Left)</h4>
            ${secC.pairs.map((p, idx) => `
              <div class="match-item" id="match_left_${idx}" onclick="window.selectMatchLeft(${idx})">
                <span><strong>${idx + 1}.</strong> ${p.left}</span>
                <span id="match_badge_${idx}" style="font-size:0.8rem; color:var(--text-muted);">கிளிக் செய்க</span>
              </div>
            `).join('')}
          </div>
          <div>
            <h4 style="color:var(--secondary); margin-bottom:0.5rem;">பகுதி 2 (Right)</h4>
            ${[...secC.pairs].sort(() => Math.random() - 0.5).map((p, rIdx) => `
              <div class="match-item" id="match_right_${rIdx}" onclick="window.selectMatchRight(${rIdx}, '${p.right}')">
                <span>${p.right}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- SECTION D: TALA MATH CALCULATIONS -->
        <div class="exam-section-title">${secD.titleTamil}</div>
        <div style="margin-bottom:2rem;">
          ${secD.problems.map((p, idx) => `
            <div style="margin-bottom:1.5rem; background:var(--bg-muted); padding:1.25rem; border-radius:var(--radius-md);">
              <p style="font-weight:700; color:var(--text-primary); margin-bottom:0.4rem;">
                ${idx + 1}. ${p.questionTamil} <small style="color:var(--text-secondary);">(${p.questionEnglish})</small>
              </p>
              <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:0.6rem;">சூத்திரம்: லகுவின் அக்ஷரம் + த்ருதம் / அனுத்ருதம்</p>
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <span>மொத்த அக்ஷரங்கள் =</span>
                <input 
                  type="number" 
                  class="write-input" 
                  style="width:100px; padding:0.4rem 0.6rem; text-align:center;" 
                  placeholder="?"
                  onchange="window.recordExamMath(${idx}, this.value)"
                />
              </div>
            </div>
          `).join('')}
        </div>

        <!-- SECTION E: SHORT ANSWER ESSAY -->
        <div class="exam-section-title">${secE.titleTamil}</div>
        <p style="color:var(--text-secondary); margin-bottom:1rem;">கீழ்க்காணும் வினாக்களுக்கு விடை எழுதவும். சமர்ப்பித்த பின் மாதிரி விடையுடன் ஒப்பிட்டு சுய மதிப்பீடு செய்வீர்கள்:</p>
        <div style="margin-bottom:2rem;">
          ${secE.questions.map((q, idx) => `
            <div style="margin-bottom:2rem; border-bottom:1px solid var(--border); padding-bottom:1.5rem;">
              <p style="font-weight:700; color:var(--primary); margin-bottom:0.4rem; font-size:1.05rem;">
                ${q.questionTamil}
              </p>
              <textarea 
                class="write-input" 
                rows="4" 
                placeholder="உங்கள் விடையை இங்கே சுருக்கமாக எழுதவும்..."
                style="resize:vertical;"
                id="exam_essay_${q.id}"
              ></textarea>
            </div>
          `).join('')}
        </div>

        <!-- SUBMIT BUTTON -->
        <div style="text-align:center; margin-top:2.5rem; padding-top:2rem; border-top:2px solid var(--border);">
          <button class="btn btn-primary btn-lg" onclick="window.confirmSubmitTrialExam()">
            🏁 மாதிரிப் பரீட்சையைச் சமர்ப்பிக்க (Submit Exam)
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  // Exam recording handlers
  window.recordExamMcq = function (qId, optionIdx) {
    state.examState.mcqAnswers[qId] = optionIdx;
  };

  window.recordExamFill = function (qId, val) {
    state.examState.fillAnswers[qId] = val.trim();
  };

  window.recordExamMath = function (idx, val) {
    state.examState.mathAnswers[idx] = val.trim();
  };

  let selectedLeftMatchIdx = null;
  window.selectMatchLeft = function (idx) {
    selectedLeftMatchIdx = idx;
    document.querySelectorAll(".match-item").forEach(el => el.classList.remove("selected"));
    const leftEl = document.getElementById(`match_left_${idx}`);
    if (leftEl) leftEl.classList.add("selected");
  };

  window.selectMatchRight = function (rIdx, rightText) {
    if (selectedLeftMatchIdx === null) {
      alert("முதலில் இடப்பக்கமுள்ள உருப்படியைத் தேர்ந்தெடுக்கவும் (Please select an item from Left first)!");
      return;
    }
    state.examState.matchPairs[selectedLeftMatchIdx] = rightText;

    const leftEl = document.getElementById(`match_left_${selectedLeftMatchIdx}`);
    const badge = document.getElementById(`match_badge_${selectedLeftMatchIdx}`);
    if (badge) {
      badge.textContent = `➡️ ${rightText}`;
      badge.style.color = "var(--accent)";
      badge.style.fontWeight = "700";
    }
    if (leftEl) {
      leftEl.classList.remove("selected");
      leftEl.classList.add("matched");
    }
    selectedLeftMatchIdx = null;
  };

  window.confirmSubmitTrialExam = function () {
    if (confirm("நிச்சயமாக மாதிரிப் பரீட்சையைச் சமர்ப்பிக்க விரும்புகிறீர்களா? (Are you sure you want to submit?)")) {
      window.submitTrialExam();
    }
  };

  window.submitTrialExam = function () {
    if (state.examState.timerInterval) {
      clearInterval(state.examState.timerInterval);
    }
    state.examState.submitted = true;

    // Calculate Scores for Auto-Graded Sections:
    const exam = SYLLABUS_DATA.trialExams[0];
    let scoreA = 0; // MCQ (20 marks: 10 * 2)
    const secAMcqs = exam.sections[0].questionIds.map(id => SYLLABUS_DATA.mcqQuestions.find(q => q.id === id));
    secAMcqs.forEach(q => {
      if (state.examState.mcqAnswers[q.id] === q.correctIndex) {
        scoreA += 2;
      }
    });

    let scoreB = 0; // Fill blanks (20 marks: 10 * 2)
    exam.sections[1].questions.forEach(q => {
      const studentAns = (state.examState.fillAnswers[q.id] || "").toLowerCase();
      const trueAns = q.answer.toLowerCase();
      const translitAns = (q.translit || "").toLowerCase();
      if (studentAns && (studentAns.includes(trueAns) || trueAns.includes(studentAns) || studentAns === translitAns)) {
        scoreB += 2;
      }
    });

    let scoreC = 0; // Match (10 marks: 10 * 1)
    exam.sections[2].pairs.forEach((p, idx) => {
      const studentRight = state.examState.matchPairs[idx];
      if (studentRight === p.right) {
        scoreC += 1;
      }
    });

    let scoreD = 0; // Math (20 marks: 5 * 4)
    exam.sections[3].problems.forEach((p, idx) => {
      const studentVal = state.examState.mathAnswers[idx];
      if (studentVal && studentVal.toString() === p.answer.toString()) {
        scoreD += 4;
      }
    });

    state.examState.partialScore = { scoreA, scoreB, scoreC, scoreD, totalAuto: scoreA + scoreB + scoreC + scoreD };
    renderTrialExamGrading(exam);
  };

  function renderTrialExamGrading(exam) {
    const container = document.getElementById("trialExamViewContent");
    if (!container) return;

    const { scoreA, scoreB, scoreC, scoreD, totalAuto } = state.examState.partialScore;
    const secE = exam.sections[4]; // Essay / Short answer 30 marks

    container.innerHTML = `
      <div class="exam-paper" style="max-width:850px;">
        <div class="exam-banner-top">
          <h2 style="color:var(--primary);">பரீட்சை மதிப்பீட்டு அறிக்கை (Exam Evaluation)</h2>
          <p>பகுதி 'அ', 'ஆ', 'இ', 'ஈ' மதிப்பெண்கள் கணக்கிடப்பட்டுவிட்டன (${totalAuto} / 70).</p>
          <p style="margin-top:0.4rem; color:var(--text-secondary);">
            பகுதி 'உ' இல் உள்ள 6 வினாக்களுக்கு நீங்கள் எழுதிய விடைகளை மாதிரி விடையுடன் ஒப்பிட்டு புள்ளிகளைத் தேர்வு செய்யவும் (Self-Grading):
          </p>
        </div>

        <div style="background:var(--bg-muted); padding:1rem; border-radius:var(--radius-md); margin-bottom:2rem;">
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1rem; text-align:center;">
            <div><strong>பகுதி 'அ' (MCQ):</strong> ${scoreA} / 20</div>
            <div><strong>பகுதி 'ஆ' (கோடிட்ட இடம்):</strong> ${scoreB} / 20</div>
            <div><strong>பகுதி 'இ' (பொருத்துக):</strong> ${scoreC} / 10</div>
            <div><strong>பகுதி 'ஈ' (தாளக் கணக்கு):</strong> ${scoreD} / 20</div>
          </div>
        </div>

        <div class="exam-section-title">பகுதி 'உ' - மாதிரி விடை ஒப்பீடு & மதிப்பெண் வழங்கல் (6 × 5 = 30 புள்ளிகள்)</div>
        <div>
          ${secE.questions.map((q, idx) => {
      const typed = (document.getElementById(`exam_essay_${q.id}`) || {}).value || "(விடை எழுதப்படவில்லை / Empty)";
      return `
              <div class="card" style="margin-bottom:1.5rem; border-left:4px solid var(--secondary);">
                <h4 style="color:var(--primary); margin-bottom:0.4rem;">${q.questionTamil}</h4>
                
                <div style="margin:0.75rem 0; background:var(--bg-muted); padding:0.85rem; border-radius:var(--radius-sm);">
                  <strong>நீங்கள் எழுதிய விடை:</strong>
                  <p style="margin-top:0.25rem; font-style:italic;">${typed}</p>
                </div>

                <div class="model-answer-box" style="margin-bottom:1rem;">
                  <strong>சரியான மாதிரி விடை (Model Answer):</strong>
                  <p style="margin-top:0.35rem; white-space:pre-line;">${q.modelAnswerTamil}</p>
                </div>

                <div style="background:var(--bg-main); padding:0.75rem; border:1px solid var(--border); border-radius:var(--radius-sm);">
                  <strong>மதிப்பெண் தேர்வு செய்க (Award Marks out of 5):</strong>
                  <div style="display:flex; gap:0.5rem; margin-top:0.4rem;">
                    ${[5, 4, 3, 2, 1, 0].map(pts => `
                      <label style="cursor:pointer; display:flex; align-items:center; gap:0.3rem; background:var(--bg-card); padding:0.3rem 0.6rem; border:1px solid var(--border); border-radius:4px;">
                        <input type="radio" name="essay_mark_${q.id}" value="${pts}" onchange="window.recordEssayMark('${q.id}', ${pts})">
                        <span>${pts} புள்ளி</span>
                      </label>
                    `).join('')}
                  </div>
                </div>
              </div>
            `;
    }).join('')}
        </div>

        <div style="text-align:center; margin-top:2rem;">
          <button class="btn btn-primary btn-lg" onclick="window.finalizeTotalExamScore()">
            🏆 இறுதி முடிவை வெளியிடுக (Show Final Grade Card)
          </button>
        </div>
      </div>
    `;
  }

  window.recordEssayMark = function (qId, mark) {
    state.examState.essaySelfScores[qId] = mark;
  };

  window.finalizeTotalExamScore = function () {
    const exam = SYLLABUS_DATA.trialExams[0];
    let essayTotal = 0;
    exam.sections[4].questions.forEach(q => {
      essayTotal += (state.examState.essaySelfScores[q.id] || 0);
    });

    const totalAuto = state.examState.partialScore.totalAuto;
    const finalTotal = totalAuto + essayTotal;
    state.examState.finalScore = finalTotal;

    // Save to test history in localStorage
    saveExamResult(finalTotal);

    if (finalTotal >= 75) {
      window.carnaticAudio.playFanfare();
      triggerConfetti();
    }

    renderFinalReportCard(finalTotal, essayTotal);
  };

  function renderFinalReportCard(finalTotal, essayTotal) {
    const container = document.getElementById("trialExamViewContent");
    if (!container) return;

    const { scoreA, scoreB, scoreC, scoreD } = state.examState.partialScore;
    let grade = "C";
    let remark = "தேர்ச்சி (Pass)";
    if (finalTotal >= 85) { grade = "A+ / சிறப்புத் தேர்ச்சி (Distinction)"; remark = "அபாரமான அறிவுத்திறன்! பரீட்சையில் முதலிடம் பெற வாழ்த்துகள்!"; }
    else if (finalTotal >= 75) { grade = "A / மிக நன்று (Very Good)"; remark = "சிறப்பான அடைவு! சிறு தவறுகளைத் திருத்திக் கொண்டால் முழு மதிப்பெண் பெறலாம்."; }
    else if (finalTotal >= 60) { grade = "B / நன்று (Good)"; remark = "நன்றாக எழுதியுள்ளீர்கள். வரையறைகளையும் குறியீடுகளையும் மேலும் பழகவும்."; }

    container.innerHTML = `
      <div class="card text-center" style="max-width:750px; margin:2rem auto; padding:2.5rem;">
        <div style="font-size:3.8rem; margin-bottom:0.75rem;">
          ${finalTotal >= 85 ? '🥇' : finalTotal >= 75 ? '🥈' : '🎖️'}
        </div>
        <h2 style="color:var(--primary); margin-bottom:0.35rem;">பரீட்சை முடிவுகள் (Final Exam Result)</h2>
        <h3 style="color:var(--secondary); font-size:2.4rem; margin-bottom:0.5rem;">
          ${finalTotal} / 100
        </h3>
        <p style="font-size:1.25rem; font-weight:700; color:var(--text-primary); margin-bottom:1.5rem;">
          தரம்: ${grade}
        </p>

        <div class="swara-table-wrapper" style="text-align:left; margin-bottom:1.5rem;">
          <table class="swara-table">
            <thead>
              <tr>
                <th>பகுதி (Section)</th>
                <th>பெற்ற புள்ளிகள் (Scored)</th>
                <th>மொத்தப் புள்ளிகள் (Max)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>பகுதி 'அ': பலவுள் தெரிவு (MCQ)</td><td><strong>${scoreA}</strong></td><td>20</td></tr>
              <tr><td>பகுதி 'ஆ': கோடிட்ட இடம் (Fill-ins)</td><td><strong>${scoreB}</strong></td><td>20</td></tr>
              <tr><td>பகுதி 'இ': பொருத்துக (Match)</td><td><strong>${scoreC}</strong></td><td>10</td></tr>
              <tr><td>பகுதி 'ஈ': தாள அக்ஷரக் கணக்குகள்</td><td><strong>${scoreD}</strong></td><td>20</td></tr>
              <tr><td>பகுதி 'உ': சிறு வினாக்கள் வரைவிலக்கணம்</td><td><strong>${essayTotal}</strong></td><td>30</td></tr>
              <tr style="background:var(--secondary-light); font-weight:700; font-size:1.1rem;">
                <td>மொத்த மதிப்பெண்கள் (Total)</td>
                <td style="color:var(--primary);">${finalTotal}</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card" style="background:var(--bg-muted); text-align:left; margin-bottom:1.5rem;">
          <strong>ஆசிரியரின் குறிப்பு (Teacher's Remark):</strong>
          <p style="margin-top:0.4rem; color:var(--text-secondary); line-height:1.6;">${remark}</p>
        </div>

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="window.startTrialExam()">
            🔄 மீண்டும் பரீட்சை எழுத (Retake Exam)
          </button>
          <button class="btn btn-secondary" onclick="window.switchTabTo('print-exam')">
            🖨️ காகிதப் பரீட்சை வினாத்தாள் (Print Paper)
          </button>
          <button class="btn btn-outline" onclick="window.switchTabTo('study')">
            📖 பாடக் குறிப்புகளுக்குச் செல்க
          </button>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 6. PRINT EXAM VIEW (Clean A4 Paper Format for Handwriting)
  // =========================================================================
  function renderPrintExamView() {
    const container = document.getElementById("printExamViewContent");
    if (!container) return;

    const exam = SYLLABUS_DATA.trialExams[0];
    const secAMcqs = exam.sections[0].questionIds.map(id => SYLLABUS_DATA.mcqQuestions.find(q => q.id === id));
    const secB = exam.sections[1];
    const secC = exam.sections[2];
    const secD = exam.sections[3];
    const secE = exam.sections[4];

    container.innerHTML = `
      <div class="no-print section-banner" style="margin-bottom:1.5rem;">
        <div>
          <h2>🖨️ அச்சிடக்கூடிய மாதிரி வினாத்தாள் (Printable Exam Sheet)</h2>
          <p>கீழேயுள்ள 'அச்சிடுக (Print)' பொத்தானை அழுத்தினால் A4 தாளில் அழகாக பிரிண்ட் செய்யலாம். உங்கள் மகன் உண்மையான பரீட்சை போலவே பேனாவால் எழுதிப் பழகலாம்!</p>
        </div>
        <button class="btn btn-primary btn-lg" onclick="window.print()">
          🖨️ வினாத்தாளை அச்சிடுக (Print to PDF / Paper)
        </button>
      </div>

      <div class="exam-paper" style="max-width:850px; margin:0 auto; background:#fff; color:#000;">
        <div class="exam-banner-top">
          <h2>${SYLLABUS_DATA.institution}</h2>
          <h3 style="margin-top:0.25rem;">வாய்ப்பாட்டு பாடத்திட்டம் - அறிமுறை தரம் 2</h3>
          <p>மாதிரிப் பரீட்சை வினாத்தாள் (Model Question Paper) | தரம் - 2</p>
          <div class="exam-meta-grid" style="background:#f3f4f6; color:#000; border:1px solid #ccc;">
            <div>மாணவர் பெயர்: __________________________</div>
            <div>காலம்: 30 நிமிடங்கள்</div>
            <div>மொத்தப் புள்ளிகள்: 100</div>
          </div>
        </div>

        <!-- Part A -->
        <div class="exam-section-title" style="background:#eee; color:#000; border-left:4px solid #000;">
          பகுதி 'அ' - சரியான விடையைத் தெரிவு செய்து வட்டமிடுக (10 × 2 = 20 புள்ளிகள்)
        </div>
        <div>
          ${secAMcqs.map((q, idx) => `
            <div style="margin-bottom:1rem; page-break-inside:avoid;">
              <p><strong>${idx + 1}. ${q.questionTamil}</strong></p>
              <div style="margin-left:1.5rem; display:grid; grid-template-columns:1fr 1fr; gap:0.25rem; font-size:0.95rem;">
                <div>(A) ${q.optionsTamil[0]}</div>
                <div>(B) ${q.optionsTamil[1]}</div>
                <div>(C) ${q.optionsTamil[2]}</div>
                <div>(D) ${q.optionsTamil[3]}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Part B -->
        <div class="exam-section-title" style="background:#eee; color:#000; border-left:4px solid #000; margin-top:2rem;">
          பகுதி 'ஆ' - கோடிட்ட இடங்களை நிரப்புக (10 × 2 = 20 புள்ளிகள்)
        </div>
        <div>
          ${secB.questions.map((q, idx) => `
            <div style="margin-bottom:0.85rem;">
              <p>${idx + 1}. ${q.questionTamil}</p>
            </div>
          `).join('')}
        </div>

        <!-- Part C -->
        <div class="exam-section-title" style="background:#eee; color:#000; border-left:4px solid #000; margin-top:2rem;">
          பகுதி 'இ' - பொருத்துக (10 × 1 = 10 புள்ளிகள்)
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin:1rem 0;">
          <div>
            ${secC.pairs.map((p, idx) => `<p style="margin-bottom:0.4rem;">${idx + 1}) ${p.left}  ...........</p>`).join('')}
          </div>
          <div>
            ${[...secC.pairs].sort(() => 0.5 - Math.random()).map((p, idx) => `<p style="margin-bottom:0.4rem;">( &nbsp; ) ${p.right}</p>`).join('')}
          </div>
        </div>

        <!-- Part D -->
        <div class="exam-section-title" style="background:#eee; color:#000; border-left:4px solid #000; margin-top:2rem;">
          பகுதி 'ஈ' - தாள அக்ஷரக் கணக்கீடுகளைச் செய்க (5 × 4 = 20 புள்ளிகள்)
        </div>
        <div>
          ${secD.problems.map((p, idx) => `
            <div style="margin-bottom:1.25rem;">
              <p><strong>${idx + 1}. ${p.questionTamil}</strong></p>
              <div class="write-line">விளக்கக் கணக்கீடு: </div>
              <div class="write-line">மொத்த அக்ஷரங்கள் = </div>
            </div>
          `).join('')}
        </div>

        <!-- Part E -->
        <div class="exam-section-title" style="background:#eee; color:#000; border-left:4px solid #000; margin-top:2rem;">
          பகுதி 'உ' - சிறு வினாக்களுக்கு விடையளிக்குக (6 × 5 = 30 புள்ளிகள்)
        </div>
        <div>
          ${secE.questions.map((q, idx) => `
            <div style="margin-bottom:1.5rem; page-break-inside:avoid;">
              <p><strong>${q.questionTamil}</strong></p>
              <div class="write-line"></div>
              <div class="write-line"></div>
              <div class="write-line"></div>
              <div class="write-line"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 7. PROGRESS & MASTERY VIEW
  // =========================================================================
  function renderProgressView() {
    const container = document.getElementById("progressViewContent");
    if (!container) return;

    const history = JSON.parse(localStorage.getItem("carnatic_exam_history") || "[]");
    const bestScore = history.length ? Math.max(...history.map(h => h.score)) : 0;

    container.innerHTML = `
      <div class="section-banner">
        <div>
          <h2>📊 அடைவு மட்டமும் முன்னேற்றமும் (Progress & History)</h2>
          <p>பயிற்சி வினாடி வினாக்கள் மற்றும் மாதிரிப் பரீட்சை முடிவுகளின் தொகுப்பு.</p>
        </div>
        <div>
          <button class="btn btn-outline btn-sm" onclick="window.clearUserProgress()">
            🗑️ வரலாற்றை அழிக்க (Reset)
          </button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1.25rem; margin-bottom:2rem;">
        <div class="card" style="text-align:center;">
          <div style="font-size:2rem; color:var(--secondary); font-weight:700;">${bestScore} / 100</div>
          <p style="color:var(--text-secondary); margin-top:0.25rem;">அதிஉயர் பரீட்சைப் புள்ளி (Best Exam)</p>
        </div>
        <div class="card" style="text-align:center;">
          <div style="font-size:2rem; color:var(--primary); font-weight:700;">${history.length}</div>
          <p style="color:var(--text-secondary); margin-top:0.25rem;">எழுதிய மாதிரிப் பரீட்சைகள்</p>
        </div>
        <div class="card" style="text-align:center;">
          <div style="font-size:2rem; color:var(--accent); font-weight:700;">6 / 6</div>
          <p style="color:var(--text-secondary); margin-top:0.25rem;">பாடக் கூறுகள் (Syllabus Units)</p>
        </div>
      </div>

      <div class="card">
        <h3 style="color:var(--primary); margin-bottom:1rem;">பரீட்சை வரலாற்றுப் பதிவு (Exam Attempt History):</h3>
        ${history.length === 0 ? `
          <p style="color:var(--text-muted); font-style:italic;">இன்னும் மாதிரிப் பரீட்சைகள் எதுவும் முடிக்கப்படவில்லை. 'மாதிரிப் பரீட்சை' பகுதிக்குச் சென்று முதல் தேர்வை எழுதவும்!</p>
        ` : `
          <div class="swara-table-wrapper">
            <table class="swara-table">
              <thead>
                <tr>
                  <th>திகதி (Date)</th>
                  <th>பெற்ற மதிப்பெண்</th>
                  <th>சதவீதம்</th>
                  <th>தரம் (Grade)</th>
                </tr>
              </thead>
              <tbody>
                ${history.map(item => `
                  <tr>
                    <td>${item.date}</td>
                    <td><strong>${item.score} / 100</strong></td>
                    <td>${item.score}%</td>
                    <td><span class="point-tag">${item.score >= 80 ? 'Distinction' : item.score >= 60 ? 'Pass' : 'Need Practice'}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    `;
  }

  function saveExamResult(score) {
    const history = JSON.parse(localStorage.getItem("carnatic_exam_history") || "[]");
    const record = {
      date: new Date().toLocaleDateString('ta-IN', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      score: score
    };
    history.unshift(record);
    localStorage.setItem("carnatic_exam_history", JSON.stringify(history.slice(0, 15)));
  }

  window.clearUserProgress = function () {
    if (confirm("அனைத்து அடைவு வரலாற்றையும் அழிக்க விரும்புகிறீர்களா?")) {
      localStorage.removeItem("carnatic_exam_history");
      renderProgressView();
    }
  };

  function saveProgress() {
    // optional progress syncing
  }

  function loadProgress() {
    // optional loading
  }

  window.switchTabTo = function (tabId) {
    switchTab(tabId);
  };

  // =========================================================================
  // LIGHTWEIGHT CANVAS CONFETTI CELEBRATION
  // =========================================================================
  function triggerConfetti() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ["#b91c1c", "#d97706", "#f59e0b", "#059669", "#2563eb", "#db2777"];

    for (let i = 0; i < 120; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 5 + 3,
        rotation: Math.random() * 360
      });
    }

    let frame = 0;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += 4;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 180) {
        requestAnimationFrame(render);
      } else {
        canvas.remove();
      }
    }
    render();
  }

})();
