/**
 * Carnatic Music Audio Engine using Web Audio API
 * Features:
 * - Tanpura Drone Generator (Pa-Sa-Sa-Sa)
 * - Swarasthana Pitch Synthesizer
 * - Quiz Sound Effects (Correct, Wrong, Fanfare)
 * - Tala Metronome Click (Tha, Dheem, Nam)
 */

class CarnaticAudioEngine {
  constructor() {
    this.ctx = null;
    this.tanpuraRunning = false;
    this.tanpuraTimer = null;
    this.basePitch = 261.63; // C (1 Kattai)
    this.masterGain = null;
    this.droneGain = null;
    this.soundEffectsGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.droneGain.connect(this.masterGain);

      this.soundEffectsGain = this.ctx.createGain();
      this.soundEffectsGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
      this.soundEffectsGain.connect(this.masterGain);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Set Pitch (e.g. C, C#, D, etc.)
  setPitch(freq) {
    this.basePitch = freq;
  }

  // Play a single note (Swaram)
  playSwara(ratio, duration = 0.8) {
    this.init();
    const now = this.ctx.currentTime;
    const freq = this.basePitch * ratio;

    // Create a rich harmonic sound resembling a veena / harmonium
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(freq, now);

    osc2.type = "sine";
    osc2.frequency.setValueAtTime(freq * 2, now);

    // Filter to warm up the sound
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(3, now);

    // ADSR Envelope
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + duration + 0.05);
    osc2.stop(now + duration + 0.05);
  }

  // Tanpura Pluck Sound (Additive String Synthesis)
  pluckTanpuraString(freq, timeOffset = 0) {
    if (!this.tanpuraRunning || !this.ctx) return;
    const now = this.ctx.currentTime + timeOffset;

    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(freq, now);

    subOsc.type = "sine";
    subOsc.frequency.setValueAtTime(freq * 0.5, now);

    filter.type = "lowpass";
    // Tanpura jawari (buzzing bridge harmonic shimmer)
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(2200, now + 0.15);
    filter.frequency.exponentialRampToValueAtTime(600, now + 2.2);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.28, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 1.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

    osc.connect(filter);
    subOsc.connect(filter);
    filter.connect(gain);
    gain.connect(this.droneGain);

    osc.start(now);
    subOsc.start(now);
    osc.stop(now + 2.5);
    subOsc.stop(now + 2.5);
  }

  // Toggle Continuous Tanpura Drone
  toggleTanpura() {
    this.init();
    if (this.tanpuraRunning) {
      this.stopTanpura();
      return false;
    } else {
      this.startTanpura();
      return true;
    }
  }

  startTanpura() {
    this.tanpuraRunning = true;
    const loopTanpura = () => {
      if (!this.tanpuraRunning) return;

      const sa = this.basePitch;
      const pa = this.basePitch * (3 / 2); // Panchamam (or 0.75 for Mandra Pa)
      const taraSa = this.basePitch * 2;   // Upper Sa

      // Standard Carnatic Tanpura pluck sequence:
      // 1. Mandra Panchamam (Pa)
      // 2. Madhya Shadjam (Sa)
      // 3. Madhya Shadjam (Sa)
      // 4. Mandra Shadjam (Kharaj Sa)
      this.pluckTanpuraString(pa * 0.5, 0.0);   // Mandra Pa
      this.pluckTanpuraString(sa, 0.7);          // Madhya Sa
      this.pluckTanpuraString(sa, 1.4);          // Madhya Sa
      this.pluckTanpuraString(sa * 0.5, 2.1);    // Kharaj Sa (Low Sa)

      this.tanpuraTimer = setTimeout(loopTanpura, 2800);
    };

    loopTanpura();
  }

  stopTanpura() {
    this.tanpuraRunning = false;
    if (this.tanpuraTimer) {
      clearTimeout(this.tanpuraTimer);
      this.tanpuraTimer = null;
    }
  }

  // Sound Effects: Correct Answer
  playCorrect() {
    this.init();
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 arpeggio

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.001, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);

      osc.connect(gain);
      gain.connect(this.soundEffectsGain);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.35);
    });
  }

  // Sound Effects: Wrong Answer
  playWrong() {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.35);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

    osc.connect(gain);
    gain.connect(this.soundEffectsGain);

    osc.start(now);
    osc.stop(now + 0.4);
  }

  // Sound Effects: Exam Completion Fanfare
  playFanfare() {
    this.init();
    const now = this.ctx.currentTime;
    const notes = [
      { f: 523.25, t: 0, d: 0.15 },
      { f: 523.25, t: 0.18, d: 0.15 },
      { f: 523.25, t: 0.36, d: 0.15 },
      { f: 659.25, t: 0.54, d: 0.3 },
      { f: 783.99, t: 0.88, d: 0.3 },
      { f: 1046.50, t: 1.25, d: 0.7 }
    ];

    notes.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(n.f, now + n.t);

      gain.gain.setValueAtTime(0.001, now + n.t);
      gain.gain.linearRampToValueAtTime(0.25, now + n.t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);

      osc.connect(gain);
      gain.connect(this.soundEffectsGain);

      osc.start(now + n.t);
      osc.stop(now + n.t + n.d + 0.05);
    });
  }

  // Metronome Click / Tala Clap Sound
  playTalaSound(type = "clap") {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    if (type === "clap") {
      // Woodblock / sharp clap
      osc.type = "triangle";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    } else if (type === "wave") {
      // Soft swoosh / gentle click
      osc.type = "sine";
      osc.frequency.setValueAtTime(450, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    } else {
      // Finger count click
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    }

    osc.connect(gain);
    gain.connect(this.soundEffectsGain);

    osc.start(now);
    osc.stop(now + 0.1);
  }
}

// Frequency Ratios for 12 Swarasthanas (Just Intonation / 12TET)
const SWARA_RATIOS = {
  "S": 1.0,           // Shadjam
  "R1": 16 / 15,      // Suddha Rishabham (1.0667)
  "R2": 9 / 8,        // Chatusruti Rishabham (1.125)
  "G1": 9 / 8,        // Suddha Gandharam
  "G2": 6 / 5,        // Sadharana Gandharam (1.2)
  "R3": 6 / 5,        // Shatsruti Rishabham
  "G3": 5 / 4,        // Antara Gandharam (1.25)
  "M1": 4 / 3,        // Suddha Madhyamam (1.333)
  "M2": 45 / 32,      // Prati Madhyamam (1.406)
  "P": 3 / 2,         // Panchamam (1.5)
  "D1": 8 / 5,        // Suddha Dhaivatham (1.6)
  "D2": 5 / 3,        // Chatusruti Dhaivatham (1.667)
  "N1": 5 / 3,        // Suddha Nishadham
  "N2": 9 / 5,        // Kaisiki Nishadham (1.8)
  "D3": 9 / 5,        // Shatsruti Dhaivatham
  "N3": 15 / 8,       // Kakali Nishadham (1.875)
  "Ṡ": 2.0            // Tara Shadjam
};

// Standard Katak / Shruti Pitches in Hz
const PITCH_MAP = {
  "C": 261.63,     // 1 கட்டை (1 Kattai)
  "C#": 277.18,    // 1.5 கட்டை
  "D": 293.66,     // 2 கட்டை
  "D#": 311.13,    // 2.5 கட்டை
  "E": 329.63,     // 3 கட்டை
  "F": 349.23,     // 4 கட்டை
  "F#": 369.99,    // 4.5 கட்டை
  "G": 392.00,     // 5 கட்டை
  "G#": 415.30,    // 5.5 கட்டை
  "A": 440.00      // 6 கட்டை
};

// Global audio instance
window.carnaticAudio = new CarnaticAudioEngine();
window.SWARA_RATIOS = SWARA_RATIOS;
window.PITCH_MAP = PITCH_MAP;
