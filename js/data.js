/**
 * Carnatic Music Theory - Grade 2 (அறிமுறை தரம் - 2)
 * Comprehensive syllabus content, questions, flashcards, and exam papers
 * Carnatic Music Vocal Theory Grade 2 Syllabus.
 */

const SYLLABUS_DATA = {
  grade: "Grade 2 / தரம் - 2",
  titleTamil: "அறிமுறை தரம் - 2 (Theory Grade - 2)",
  titleEnglish: "Carnatic Music Theory Grade - 2",
  institution: "கர்நாடக சங்கீத அறிமுறை (Carnatic Music Theory)",

  // ==========================================
  // TOPIC 1: INTRODUCTORY DEFINITIONS (அறிமுக விளக்கம்)
  // ==========================================
  topics: [
    {
      id: "topic1",
      number: 1,
      titleTamil: "1. அறிமுக விளக்கம்",
      titleEnglish: "1. Introductory Definitions & Terminology",
      description: "சங்கீதத்தின் அடிப்படை வரைவிலக்கணங்களும் கருத்துக்களும் (Basic definitions and concepts of music).",
      items: [
        {
          term: "சங்கீதம்",
          translit: "Sangeetham",
          definitionTamil: "மனதுக்கும் செவிக்கும் இன்பத்தைத் தரும் ஒழுங்கான இனிமையான ஒலி சங்கீதம் எனப்படும். 'சம்யக் கீதம் இதி சங்கீதம்'. கீதம் (பாடல்), வாத்தியம் (இசைக்கருவி), நிருத்தம் (நடனம்) ஆகிய மூன்றும் சேர்ந்தது சங்கீதம் ஆகும் ('கீதம் வாத்யம் ததா நிருத்யம் த்ரயம் சங்கீத முச்யதே').",
          definitionEnglish: "Sound that is melodious, pleasing to the ear and mind, and systematically arranged is called Sangeetham. It is a harmonious combination of three arts: Geetham (vocal music), Vaadhyam (instrumental music), and Nrithyam (dance).",
          keyPoints: ["கீதம் + வாத்தியம் + நிருத்தம் = சங்கீதம்", "Geetham + Vaadhyam + Nrithyam = Sangeetham"]
        },
        {
          term: "நாதம்",
          translit: "Naadham",
          definitionTamil: "சங்கீதத்திற்கு அடிப்படையானதும், செவிக்கு இனிமை தருவதுமான இசை ஒலி நாதம் ஆகும். இது உடம்பிலுள்ள பிராணன் (காற்று) மற்றும் அக்னி (சூடு) ஆகியவற்றின் சேர்க்கையினால் நாபியிலிருந்து உற்பத்தியாகிறது. நாதம் 2 வகைப்படும்: 1) ஆஹத நாதம் (மனித முயற்சியால் உண்டாக்கப்பட்டு கேட்கக்கூடிய ஒலி), 2) அனாஹத நாதம் (முயற்சியின்றி இயற்கையாய் ஒலிக்கும் யோகிகள் கேட்கும் பிரணவ ஒலி).",
          definitionEnglish: "Naadham is the sweet musical sound that forms the foundation of music. It originates when Praana (life air) combines with Agni (fire/energy) from the navel. It is of 2 kinds: 1) Aahatha Naadham (struck sound created by effort, heard by humans), 2) Anaahatha Naadham (unstruck cosmic sound heard only by sages/yogis).",
          keyPoints: ["பிராணன் + அக்னி = நாதம்", "2 வகைகள்: ஆஹத நாதம், அனாஹத நாதம்"]
        },
        {
          term: "ஸ்ருதி",
          translit: "Sruti",
          definitionTamil: "செவியினால் தெளிவாகக் கேட்டு உணரக்கூடிய மிகச் சிறிய இசை நுட்ப ஒலி ஸ்ருதி எனப்படும். 'ஸ்ருதி மாதா, லய பிதா' என்பர். இது இசையின் ஆதார சுருதி (அடிப்படைத் தொனி) ஆகும். பாடகர்கள் தமக்கேற்ற ஒரு ஸ்தாயி ஆதார ஷட்ஜத்தை ஸ்ருதியாகக் கொண்டு பாடுவர்.",
          definitionEnglish: "Sruti is the smallest interval of pitch perceptible to the human ear. It is the keynote, tonic reference pitch or drone (Tambura) for a singer. 'Sruti is the Mother, Laya is the Father' of music.",
          keyPoints: ["ஸ்ருதி மாதா, லய பிதா", "ஆதார சுருதி (Tonic Drone)"]
        },
        {
          term: "ஸ்வரம்",
          translit: "Swaram",
          definitionTamil: "தனது இயல்பினாலேயே கேட்பவர் மனதை மகிழ்விக்கக்கூடிய இசை ஒலி ஸ்வரம் எனப்படும். 'ஸ்வதோ ரஞ்ஜயதி இதி ஸ்வரஹ'. இசையின் அடிப்படை அலகுகள் ஸப்த ஸ்வரங்கள் (ஸ, ரி, க, ம, ப, த, நி) ஆகும்.",
          definitionEnglish: "A musical note that naturally pleases the mind of the listener by its own virtue is called Swaram ('Swatho ranjayathi ithi swarah'). The 7 fundamental notes are the Sapta Swaras.",
          keyPoints: ["ஸ்வதோ ரஞ்ஜயதி இதி ஸ்வரஹ", "அடிப்படை ஸ்வரங்கள் 7 (Sapta Swaras)"]
        },
        {
          term: "லயம்",
          translit: "Layam",
          definitionTamil: "இசைக்கப்படும் காலத்தின் சீரான சம இடைவெளி அல்லது ஒழுங்கான காலப் பிரமாணம் லயம் எனப்படும். 'லய பிதா' என்பர். லயம் 3 வகைப்படும்: 1) விளம்ப லயம் (மெதுவான வேகம் / Slow), 2) மத்யம லயம் (நடுத்தர வேகம் / Medium), 3) துரித லயம் (வேகமான நடை / Fast).",
          definitionEnglish: "Layam is the uniform, steady tempo or rhythmic continuity in music. 'Laya is the Father'. There are 3 main speeds (Layams): Vilamba layam (slow tempo), Madhyama layam (medium tempo), Dhruta layam (fast tempo).",
          keyPoints: ["விளம்ப லயம் (Slow)", "மத்யம லயம் (Medium)", "துரித லயம் (Fast)"]
        },
        {
          term: "தாளம்",
          translit: "Thalam",
          definitionTamil: "இசையினை அளவிட உதவும் கால அளவீட்டு அமைப்பு தாளம் ஆகும். கைத்தட்டு, வீச்சு மற்றும் விரல் எண்ணுதல் மூலம் தாளம் போடப்படும். சிவனின் 'தாண்டவம்' என்பதிலுள்ள 'தா'வும், பார்வதியின் 'லாஸ்யம்' என்பதிலுள்ள 'ல'வும் இணைந்து 'தாளம்' என்ற சொல் தோன்றியது.",
          definitionEnglish: "Thalam is the rhythmic meter that measures musical time using hand claps, finger counts, and waves. Etymology: 'Tha' from Lord Shiva's Tandava + 'La' from Goddess Parvati's Lasya = Thalam.",
          keyPoints: ["தாண்டவம் (தா) + லாஸ்யம் (ல) = தாளம்", "காலத்தை அளவிடும் கருவி"]
        },
        {
          term: "ஸ்தாயி",
          translit: "Sthayi",
          definitionTamil: "ஆதார ஷட்ஜம் (ஸ) முதல் நிஷாதம் (நி) வரையுள்ள தொடர்ச்சியான ஏழு ஸ்வரங்களின் வரிசை அல்லது சுருதி எல்லை ஸ்தாயி (Octave) எனப்படும். சங்கீதத்தில் 5 ஸ்தாயிகள் கூறப்படினும் பொதுவாக 3 ஸ்தாயிகள் பாடப்படுகின்றன: 1) மந்த்ர ஸ்தாயி (கீழ் ஸ்தாயி), 2) மத்ய ஸ்தாயி (நடு ஸ்தாயி), 3) தார ஸ்தாயி (மேல் ஸ்தாயி).",
          definitionEnglish: "An octave or pitch range extending from Shadjam (Sa) to Nishadham (Ni). Carnatic music defines 5 sthayis, of which 3 are normally used in singing: 1) Mandra Sthayi (lower octave), 2) Madhya Sthayi (middle octave), 3) Thaara Sthayi (higher octave).",
          keyPoints: ["மந்த்ர ஸ்தாயி (கீழ்)", "மத்ய ஸ்தாயி (நடு)", "தார ஸ்தாயி (மேல்)"]
        },
        {
          term: "ஆரோகணம்",
          translit: "Arohanam",
          definitionTamil: "ஸ்வரங்கள் கீழ் ஸ்தாயியிலிருந்து மேல் நோக்கி ஏறிச் செல்லும் ஒழுங்கான வரிசை ஆரோகணம் எனப்படும் (உதாரணம்: ஸ ரி க ம ப த நி ஸ்).",
          definitionEnglish: "The ascending series of notes in a raga from lower to higher pitch (e.g., Sa Ri Ga Ma Pa Dha Ni Ṡ).",
          keyPoints: ["கீழிருந்து மேல் நோக்கி ஏறுவது (Ascending)"]
        },
        {
          term: "அவரோகணம்",
          translit: "Avarohanam",
          definitionTamil: "ஸ்வரங்கள் மேல் ஸ்தாயியிலிருந்து கீழ் நோக்கி இறங்கி வரும் ஒழுங்கான வரிசை அவரோகணம் எனப்படும் (உதாரணம்: ஸ் நி த ப ம க ரி ஸ).",
          definitionEnglish: "The descending series of notes in a raga from higher to lower pitch (e.g., Ṡ Ni Dha Pa Ma Ga Ri Sa).",
          keyPoints: ["மேலிருந்து கீழ் நோக்கி இறங்குவது (Descending)"]
        },
        {
          term: "ஆவர்த்தம்",
          translit: "Avarthanam",
          definitionTamil: "ஒரு தாளத்தின் முதல் அங்கம் அல்லது சமத்தில் தொடங்கி, அனைத்து அங்கங்களையும் முறையாகப் பூர்த்தி செய்து முடிக்கும் ஒரு முழுமையான சுற்று ஆவர்த்தம் எனப்படும்.",
          definitionEnglish: "One complete cycle of a tala, beginning at the first beat (Sama) and concluding at the end of all prescribed angas.",
          keyPoints: ["தாளத்தின் ஒரு முழுச் சுற்று (One complete tala cycle)"]
        },
        {
          term: "பூர்வாங்கம்",
          translit: "Poorvangam",
          definitionTamil: "முற்பகுதி அல்லது முதல் பாதி என்று பொருள்படும். 1) சப்தகத்தில் முதல் நான்கு ஸ்வரங்கள் (ஸ, ரி, க, ம) பூர்வாங்கம் எனப்படும். 2) வர்ணத்தில் பல்லவி, அனுபல்லவி, முக்தாயிஸ்வரம் அடங்கிய முற்பகுதி பூர்வாங்கம் எனப்படும்.",
          definitionEnglish: "The first half. 1) In the saptaka, the first four notes (Sa, Ri, Ga, Ma). 2) In a Varnam, the first section comprising Pallavi, Anupallavi, and Mukthayi Swaram.",
          keyPoints: ["ஸ, ரி, க, ம (முதல் 4 ஸ்வரங்கள்)", "வர்ணத்தின் முற்பகுதி (பல்லவி, அனுபல்லவி, முக்தாயிஸ்வரம்)"]
        },
        {
          term: "உத்தராங்கம்",
          translit: "Uttharangam",
          definitionTamil: "பிற்பகுதி அல்லது இரண்டாம் பாதி என்று பொருள்படும். 1) சப்தகத்தில் இறுதி மூன்று அல்லது நான்கு ஸ்வரங்கள் (ப, த, நி, ஸ்) உத்தராங்கம் எனப்படும். 2) வர்ணத்தில் சரணமும் சரண ஸ்வரங்களும் அடங்கிய பிற்பகுதி உத்தராங்கம் எனப்படும்.",
          definitionEnglish: "The second half. 1) In the saptaka, the later notes (Pa, Dha, Ni, Ṡ). 2) In a Varnam, the second section comprising Charanam and Charana swaras.",
          keyPoints: ["ப, த, நி, ஸ் (பிற்பகுதி ஸ்வரங்கள்)", "வர்ணத்தின் பிற்பகுதி (சரணம், சிட்டைஸ்வரங்கள்)"]
        },
        {
          term: "சப்தகம்",
          translit: "Saptakam",
          definitionTamil: "'ஸப்த' என்றால் ஏழு. ஸ முதல் நி வரையுள்ள ஏழு ஸ்வரங்களின் தொகுப்பு சப்தகம் எனப்படும் (ஸ, ரி, க, ம, ப, த, நி).",
          definitionEnglish: "A series or set of the 7 basic notes from Sa to Ni (Sa, Ri, Ga, Ma, Pa, Dha, Ni). 'Sapta' means seven.",
          keyPoints: ["ஏழு ஸ்வரங்களின் தொகுதி (7 notes: Sa to Ni)"]
        },
        {
          term: "அஷ்டகம்",
          translit: "Ashtakam",
          definitionTamil: "'அஷ்ட' என்றால் எட்டு. ஸ முதல் மேல் ஸ்தாயி ஸ வரையுள்ள எட்டு ஸ்வரங்களின் தொகுப்பு அஷ்டகம் எனப்படும் (ஸ, ரி, க, ம, ப, த, நி, ஸ்).",
          definitionEnglish: "A set of 8 notes including the upper octave Sa (Sa, Ri, Ga, Ma, Pa, Dha, Ni, Ṡ). 'Ashta' means eight.",
          keyPoints: ["எட்டு ஸ்வரங்களின் தொகுதி (8 notes: Sa to Tara Sa)"]
        },
        {
          term: "நிபந்தம்",
          translit: "Nibaddham",
          definitionTamil: "தாளக் கட்டுக்கோப்புக்கும், காலப் பிரமாணத்திற்கும் கட்டுப்பட்டு இயற்றப்பட்டு பாடப்படும் இசை நிபந்த சங்கீதம் எனப்படும். (உதாரணம்: கீதம், ஸ்வரஜதி, வர்ணம், கீர்த்தனை).",
          definitionEnglish: "Music structured and bound within a definite rhythmic meter (Tala) and tempo. Examples: Geetham, Swarajathi, Varnam, Keerthanam.",
          keyPoints: ["தாளக் கட்டுக்கு உட்பட்ட இசை (Metered / structured music)", "எ.கா: கீதம், வர்ணம், கீர்த்தனை"]
        },
        {
          term: "அநிபந்தம்",
          translit: "Anibaddham",
          definitionTamil: "தாளக் கட்டுக்கோப்பு இன்றி, தாள வரையறையின்றி சுதந்திரமாகப் பாடப்படும் மனோதர்ம இசை அநிபந்த சங்கீதம் எனப்படும். (உதாரணம்: ராக ஆலாபனை, விருத்தம், சுலோகம்).",
          definitionEnglish: "Music that is free from the constraints of tala and strict rhythm; improvisational music. Examples: Raga Alapana, Viruttham, Slokam.",
          keyPoints: ["தாளக் கட்டுக்கு உட்படாத இசை (Unmetered / free rhythm)", "எ.கா: ராக ஆலாபனை, விருத்தம்"]
        },
        {
          term: "ப்ரக்ருதி ஸ்வரங்கள்",
          translit: "Prakruti Swaras",
          definitionTamil: "எவ்வித மாறுபாடுகளும் (விகாரங்களும்) இன்றி எப்போதும் நிலையாக ஒரே ஸ்வரஸ்தானத்தில் ஒலிக்கும் மாறாத ஸ்வரங்கள் ப்ரக்ருதி ஸ்வரங்கள் அல்லது அசல ஸ்வரங்கள் எனப்படும். அவை இரண்டு: 1) ஷட்ஜம் (ஸ), 2) பஞ்சமம் (ப).",
          definitionEnglish: "Fixed, invariant notes that have no variants or pitch alterations. There are 2 Prakruti (or Achala) swaras: Shadjam (Sa) and Panchamam (Pa).",
          keyPoints: ["மாறாத ஸ்வரங்கள் 2: ஸ (Sa), ப (Pa)", "அசல ஸ்வரங்கள்"]
        },
        {
          term: "விக்ருதி ஸ்வரங்கள்",
          translit: "Vikruti Swaras",
          definitionTamil: "ஒலியில் மாறுதல்களை (விகாரங்களை) உடைய, பல ஸ்வரஸ்தான பேதங்களைக் கொண்ட ஸ்வரங்கள் விக்ருதி ஸ்வரங்கள் அல்லது சல ஸ்வரங்கள் எனப்படும். அவை ஐந்து: ரி, க, ம, த, நி (இவை பன்னிரண்டு ஸ்வரஸ்தானங்களாக விரியும்).",
          definitionEnglish: "Modified or variable notes that have pitch variants. There are 5 Vikruti (or Chala) swaras: Rishabham (Ri), Gandharam (Ga), Madhyamam (Ma), Dhaivatham (Dha), and Nishadham (Ni).",
          keyPoints: ["மாற்றமுள்ள ஸ்வரங்கள் 5: ரி, க, ம, த, நி", "சல ஸ்வரங்கள்"]
        }
      ]
    },

    // ==========================================
    // TOPIC 2: SAPTA SWARAS & TAMIL NAMES (ஸப்தஸ்வரங்களும் தமிழ்ப் பெயர்களும்)
    // ==========================================
    {
      id: "topic2",
      number: 2,
      titleTamil: "2. ஸப்தஸ்வரங்களின் பெயர்களும் அதன் தமிழ்ப் பெயர்களும்",
      titleEnglish: "2. Sapta Swaras and their Ancient Tamil Names",
      description: "ஏழு ஸ்வரங்களின் முழுப் பெயர்கள், எழுத்துரு மற்றும் பண்டைய பழந்தமிழிசைப் பெயர்கள், பறவை/விலங்கு ஒலிகள்.",
      swaras: [
        {
          shortName: "ஸ",
          fullName: "ஷட்ஜம்",
          translit: "Shadjam",
          tamilName: "குரல்",
          tamilTranslit: "Kural",
          meaning: "தொண்டையிலிருந்து பிறப்பது; முதல் ஸ்வரம் (Throat voice)",
          animal: "மயில் (Peacock)",
          nature: "ப்ரக்ருதி (மாறாதது / Achala)",
          color: "வெள்ளை / White"
        },
        {
          shortName: "ரி",
          fullName: "ரிஷபம்",
          translit: "Rishabham",
          tamilName: "துத்தம்",
          tamilTranslit: "Thuttham",
          meaning: "தலையிலிருந்து பிறப்பது (Head resonance)",
          animal: "காளை / ரிஷபம் (Bull / Ox)",
          nature: "விக்ருதி (மாறுபாடுடையது)",
          color: "பச்சை / Green"
        },
        {
          shortName: "க",
          fullName: "காந்தாரம்",
          translit: "Gandharam",
          tamilName: "கைக்கிளை",
          tamilTranslit: "Kaikkizhai",
          meaning: "மூக்கிலிருந்து ஒலிப்பது (Nasal sweetness)",
          animal: "ஆடு (Goat / Sheep)",
          nature: "விக்ருதி (மாறுபாடுடையது)",
          color: "தங்கம் / Golden"
        },
        {
          shortName: "ம",
          fullName: "மத்யமம்",
          translit: "Madhyamam",
          tamilName: "உழை",
          tamilTranslit: "Uzhai",
          meaning: "மார்பிலிருந்து பிறப்பது; நடு ஸ்வரம் (Middle note)",
          animal: "கொக்கு / அன்னம் / கிரௌஞ்சம் (Heron / Crane)",
          nature: "விக்ருதி (மாறுபாடுடையது)",
          color: "வெண்மை / Pale Red"
        },
        {
          shortName: "ப",
          fullName: "பஞ்சமம்",
          translit: "Panchamam",
          tamilName: "இளி",
          tamilTranslit: "Ili",
          meaning: "ஐந்தாவது ஸ்வரம்; உடலின் ஐந்து பாகங்களிலிருந்து ஒலிப்பது",
          animal: "குயில் (Cuckoo)",
          nature: "ப்ரக்ருதி (மாறாதது / Achala)",
          color: "நீலம் / Blue"
        },
        {
          shortName: "த",
          fullName: "தைவதம்",
          translit: "Dhaivatham",
          tamilName: "விளரி",
          tamilTranslit: "Vilari",
          meaning: "நெற்றியிலிருந்து பிறப்பது",
          animal: "குதிரை / தவளை (Horse / Frog)",
          nature: "விக்ருதி (மாறுபாடுடையது)",
          color: "மஞ்சள் / Yellow"
        },
        {
          shortName: "நி",
          fullName: "நிஷாதம்",
          translit: "Nishadham",
          tamilName: "தாரம்",
          tamilTranslit: "Thaaram",
          meaning: "உச்சி மண்டையிலிருந்து பிறப்பது; உயர்ந்த ஒலி",
          animal: "யானை (Elephant)",
          nature: "விக்ருதி (மாறுபாடுடையது)",
          color: "கருப்பு / Dark"
        }
      ],
      mnemonic: "குரல், துத்தம், கைக்கிளை, உழை, இளி, விளரி, தாரம் (கு-து-கை-உ-இ-வி-தா)"
    },

    // ==========================================
    // TOPIC 3: 12 SWARASTHANAS (12 ஸ்வரஸ்தான விபரம்)
    // ==========================================
    {
      id: "topic3",
      number: 3,
      titleTamil: "3. 12 ஸ்வரஸ்தான விபரம்",
      titleEnglish: "3. Details of the 12 Swarasthanas",
      description: "ஒரு ஸ்தாயியில் உள்ள பன்னிரண்டு ஸ்வர நிலைகள் மற்றும் பதினாறு பெயர்கள் (12 Swara positions and 16 names).",
      explanation: "ஒரு ஸ்தாயியில் 12 குறிப்பிட்ட ஒலி ஸ்தானங்கள் (சுர நிலைகள்) உள்ளன. இதில் மாறாத ஸ்வரங்கள் 2 (ஸ, ப). மத்யமம் 2 வகையாகும் (சுத்த ம, பிரதி ம). எஞ்சிய ரி, க, த, நி ஆகிய நான்கு ஸ்வரங்களும் பல வகைகளாகப் பிரிந்து, சில ஸ்தானங்களை ஒன்றுக்கொன்று பகிர்வதால் 12 ஸ்வரஸ்தானங்களில் 16 பெயர்கள் உண்டாகின்றன.",
      positions: [
        {
          pos: 1,
          westernSemitone: "C",
          names: [
            { nameTamil: "ஷட்ஜம் (ஸ)", nameEnglish: "Shadjam (Sa)", code: "ஸ", abbr: "S" }
          ],
          type: "ப்ரக்ருதி (Achala)"
        },
        {
          pos: 2,
          westernSemitone: "C# / Db",
          names: [
            { nameTamil: "சுத்த ரிஷபம்", nameEnglish: "Suddha Rishabham (R1)", code: "சு.ரி", abbr: "R1" }
          ],
          type: "விக்ருதி"
        },
        {
          pos: 3,
          westernSemitone: "D",
          names: [
            { nameTamil: "சதுஸ்ருதி ரிஷபம்", nameEnglish: "Chatusruti Rishabham (R2)", code: "ச.ரி", abbr: "R2" },
            { nameTamil: "சுத்த காந்தாரம்", nameEnglish: "Suddha Gandharam (G1)", code: "சு.க", abbr: "G1" }
          ],
          type: "விக்ருதி (R2 = G1)"
        },
        {
          pos: 4,
          westernSemitone: "D# / Eb",
          names: [
            { nameTamil: "சாதாரண காந்தாரம்", nameEnglish: "Sadharana Gandharam (G2)", code: "சா.க", abbr: "G2" },
            { nameTamil: "ஷட்ச்ருதி ரிஷபம்", nameEnglish: "Shatsruti Rishabham (R3)", code: "ஷ.ரி", abbr: "R3" }
          ],
          type: "விக்ருதி (G2 = R3)"
        },
        {
          pos: 5,
          westernSemitone: "E",
          names: [
            { nameTamil: "அந்தர காந்தாரம்", nameEnglish: "Antara Gandharam (G3)", code: "அ.க", abbr: "G3" }
          ],
          type: "விக்ருதி"
        },
        {
          pos: 6,
          westernSemitone: "F",
          names: [
            { nameTamil: "சுத்த மத்யமம்", nameEnglish: "Suddha Madhyamam (M1)", code: "சு.ம", abbr: "M1" }
          ],
          type: "விக்ருதி"
        },
        {
          pos: 7,
          westernSemitone: "F#",
          names: [
            { nameTamil: "பிரதி மத்யமம்", nameEnglish: "Prati Madhyamam (M2)", code: "பி.ம", abbr: "M2" }
          ],
          type: "விக்ருதி"
        },
        {
          pos: 8,
          westernSemitone: "G",
          names: [
            { nameTamil: "பஞ்சமம் (ப)", nameEnglish: "Panchamam (Pa)", code: "ப", abbr: "P" }
          ],
          type: "ப்ரக்ருதி (Achala)"
        },
        {
          pos: 9,
          westernSemitone: "G# / Ab",
          names: [
            { nameTamil: "சுத்த தைவதம்", nameEnglish: "Suddha Dhaivatham (D1)", code: "சு.த", abbr: "D1" }
          ],
          type: "விக்ருதி"
        },
        {
          pos: 10,
          westernSemitone: "A",
          names: [
            { nameTamil: "சதுஸ்ருதி தைவதம்", nameEnglish: "Chatusruti Dhaivatham (D2)", code: "ச.த", abbr: "D2" },
            { nameTamil: "சுத்த நிஷாதம்", nameEnglish: "Suddha Nishadham (N1)", code: "சு.நி", abbr: "N1" }
          ],
          type: "விக்ருதி (D2 = N1)"
        },
        {
          pos: 11,
          westernSemitone: "A# / Bb",
          names: [
            { nameTamil: "கைசிக நிஷாதம்", nameEnglish: "Kaisiki Nishadham (N2)", code: "கை.நி", abbr: "N2" },
            { nameTamil: "ஷட்ச்ருதி தைவதம்", nameEnglish: "Shatsruti Dhaivatham (D3)", code: "ஷ.த", abbr: "D3" }
          ],
          type: "விக்ருதி (N2 = D3)"
        },
        {
          pos: 12,
          westernSemitone: "B",
          names: [
            { nameTamil: "காகலி நிஷாதம்", nameEnglish: "Kakali Nishadham (N3)", code: "கா.நி", abbr: "N3" }
          ],
          type: "விக்ருதி"
        }
      ]
    },

    // ==========================================
    // TOPIC 4: SAPTA TALAS & ANGAS (ஸப்த தாளங்களும் அங்க அடையாளங்களும்)
    // ==========================================
    {
      id: "topic4",
      number: 4,
      titleTamil: "4. ஸப்த தாளங்களும் அதன் அங்க அடையாளங்களும்",
      titleEnglish: "4. The 7 Principal Talas (Sapta Talas) & Anga Symbols",
      description: "தாளத்தின் முக்கிய மூன்று அங்கங்கள் மற்றும் சூளாதி ஸப்த தாளங்களின் அமைப்புகள்.",
      angas: [
        {
          nameTamil: "அனுத்ருதம்",
          nameEnglish: "Anudhrutam",
          symbol: "U",
          actionTamil: "ஒரு தட்டு (Clap once)",
          actionEnglish: "One beat / clap with palm",
          aksharas: 1,
          note: "மாறாத கால அளவு: 1 அக்ஷரம்"
        },
        {
          nameTamil: "த்ருதம்",
          nameEnglish: "Dhrutam",
          symbol: "O",
          actionTamil: "ஒரு தட்டு + ஒரு வீச்சு (Clap and Wave)",
          actionEnglish: "One beat + one wave of the hand",
          aksharas: 2,
          note: "மாறாத கால அளவு: 2 அக்ஷரங்கள்"
        },
        {
          nameTamil: "லகு",
          nameEnglish: "Laghu",
          symbol: "I",
          actionTamil: "ஒரு தட்டு + விரல் எண்ணுதல் (Clap + Finger counts)",
          actionEnglish: "One beat + counting fingers according to Jathi",
          aksharas: "3, 4, 5, 7, அல்லது 9",
          note: "ஜாதிக்கு ஏற்ப கால அளவு மாறுபடும்"
        }
      ],
      talas: [
        {
          id: 1,
          nameTamil: "துருவ தாளம்",
          nameEnglish: "Dhruva Thalam",
          angasTamil: "லகு - த்ருதம் - லகு - லகு",
          angasEnglish: "Laghu - Dhrutam - Laghu - Laghu",
          symbol: "I O I I",
          totalAngas: 4,
          chaturasraCount: "4 + 2 + 4 + 4 = 14 அக்ஷரங்கள்"
        },
        {
          id: 2,
          nameTamil: "மத்ய தாளம்",
          nameEnglish: "Matya Thalam",
          angasTamil: "லகு - த்ருதம் - லகு",
          angasEnglish: "Laghu - Dhrutam - Laghu",
          symbol: "I O I",
          totalAngas: 3,
          chaturasraCount: "4 + 2 + 4 = 10 அக்ஷரங்கள்"
        },
        {
          id: 3,
          nameTamil: "ரூபக தாளம்",
          nameEnglish: "Rupaka Thalam",
          angasTamil: "த்ருதம் - லகு",
          angasEnglish: "Dhrutam - Laghu",
          symbol: "O I",
          totalAngas: 2,
          chaturasraCount: "2 + 4 = 6 அக்ஷரங்கள்"
        },
        {
          id: 4,
          nameTamil: "ஜம்பை தாளம்",
          nameEnglish: "Jhampa Thalam",
          angasTamil: "லகு - அனுத்ருதம் - த்ருதம்",
          angasEnglish: "Laghu - Anudhrutam - Dhrutam",
          symbol: "I U O",
          totalAngas: 3,
          misraCount: "7 + 1 + 2 = 10 அக்ஷரங்கள் (மிஸ்ர ஜம்பை பொதுவானது)"
        },
        {
          id: 5,
          nameTamil: "திரிபுட தாளம்",
          nameEnglish: "Triputa Thalam",
          angasTamil: "லகு - த்ருதம் - த்ருதம்",
          angasEnglish: "Laghu - Dhrutam - Dhrutam",
          symbol: "I O O",
          totalAngas: 3,
          chaturasraCount: "4 + 2 + 2 = 8 அக்ஷரங்கள் (இதுவே ஆதி தாளம்!)"
        },
        {
          id: 6,
          nameTamil: "அட தாளம்",
          nameEnglish: "Ata Thalam",
          angasTamil: "லகு - லகு - த்ருதம் - த்ருதம்",
          angasEnglish: "Laghu - Laghu - Dhrutam - Dhrutam",
          symbol: "I I O O",
          totalAngas: 4,
          khandaCount: "5 + 5 + 2 + 2 = 14 அக்ஷரங்கள் (கண்ட ஜாதி அடதாள வர்ணம் பிரபலம்)"
        },
        {
          id: 7,
          nameTamil: "ஏக தாளம்",
          nameEnglish: "Eka Thalam",
          angasTamil: "லகு",
          angasEnglish: "Laghu",
          symbol: "I",
          totalAngas: 1,
          chaturasraCount: "4 அக்ஷரங்கள்"
        }
      ],
      talaShlokam: "துருவோ மத்ய ததா ரூபஹ ஜம்பஸ்ச த்ரிபுட ஏவச | அடதாள ஏகதாளஸ்ச ஸப்த தாளாஹ பிரகீர்த்திதாஹ ||"
    },

    // ==========================================
    // TOPIC 5: 5 JATHIS (5 ஜாதிகளின் விபரம்)
    // ==========================================
    {
      id: "topic5",
      number: 5,
      titleTamil: "5. 5 ஜாதிகளின் விபரம்",
      titleEnglish: "5. Details of the 5 Jathis",
      description: "லகுவின் கால அளவை மாற்றும் ஐந்து ஜாதிகள் (Tisra, Chaturasra, Khanda, Misra, Sankeerna).",
      jathis: [
        {
          nameTamil: "திஸ்ர ஜாதி",
          nameEnglish: "Tisra Jathi",
          aksharas: 3,
          laghuSymbol: "I₃",
          actionTamil: "1 தட்டு + 2 விரல்கள் (சுண்டு விரல், மோதிர விரல்)",
          actionEnglish: "1 Clap + 2 finger counts (Little, Ring)"
        },
        {
          nameTamil: "சதுரஸ்ர ஜாதி",
          nameEnglish: "Chaturasra Jathi",
          aksharas: 4,
          laghuSymbol: "I₄",
          actionTamil: "1 தட்டு + 3 விரல்கள் (சுண்டு விரல், மோதிர விரல், நடு விரல்)",
          actionEnglish: "1 Clap + 3 finger counts (Little, Ring, Middle)"
        },
        {
          nameTamil: "கண்ட ஜாதி",
          nameEnglish: "Khanda Jathi",
          aksharas: 5,
          laghuSymbol: "I₅",
          actionTamil: "1 தட்டு + 4 விரல்கள் (சுண்டு, மோதிரம், நடு, சுட்டு விரல்கள்)",
          actionEnglish: "1 Clap + 4 finger counts (Little, Ring, Middle, Index)"
        },
        {
          nameTamil: "மிஸ்ர ஜாதி",
          nameEnglish: "Misra Jathi",
          aksharas: 7,
          laghuSymbol: "I₇",
          actionTamil: "1 தட்டு + 6 விரல் எண்ணிக்கை (திஸ்ரம் 3 + சதுரஸ்ரம் 4 = மிஸ்ரம் 7)",
          actionEnglish: "1 Clap + 6 finger counts (Tisra 3 + Chaturasra 4 = 7)"
        },
        {
          nameTamil: "சங்கீர்ண ஜாதி",
          nameEnglish: "Sankeerna Jathi",
          aksharas: 9,
          laghuSymbol: "I₉",
          actionTamil: "1 தட்டு + 8 விரல் எண்ணிக்கை (சதுரஸ்ரம் 4 + கண்டம் 5 = சங்கீர்ணம் 9)",
          actionEnglish: "1 Clap + 8 finger counts (Chaturasra 4 + Khanda 5 = 9)"
        }
      ],
      totalTalasFormula: "7 தாளங்கள் × 5 ஜாதிகள் = 35 தாளங்கள் (Thirty-Five Talas)!"
    },

    // ==========================================
    // TOPIC 6: MUSICAL NOTATION & SYMBOLS (இசைக் குறியீடுகள்)
    // ==========================================
    {
      id: "topic6",
      number: 6,
      titleTamil: "6. இசைக் குறியீடுகள்",
      titleEnglish: "6. Musical Notation and Symbols",
      description: "சங்கீதக் குறிப்புப் புத்தகங்களில் பயன்படுத்தப்படும் குறியீடுகளின் விளக்கம்.",
      categories: [
        {
          categoryNameTamil: "ஸ்தாயிக் குறிகள் (Sthayi Marks)",
          categoryNameEnglish: "Octave Symbols",
          symbols: [
            {
              symbol: "ஸ ரி க ம",
              nameTamil: "மத்ய ஸ்தாயி (Madhya Sthayi)",
              nameEnglish: "Middle Octave",
              descriptionTamil: "ஸ்வரத்தின் மேல் அல்லது கீழ் எந்தப் புள்ளியும் இருக்காது (எழுத்து வடிவம் மட்டும்)."
            },
            {
              symbol: "ஸ̇  ரி̇  க̇ (மேல் புள்ளி)",
              nameTamil: "தார ஸ்தாயி (Thaara Sthayi)",
              nameEnglish: "Higher Octave",
              descriptionTamil: "ஸ்வரத்திற்கு மேலே ஒரு புள்ளி வைக்கப்பட்டிருக்கும்."
            },
            {
              symbol: "ஸ̣  ரி̣  க̣ (கீழ் புள்ளி)",
              nameTamil: "மந்த்ர ஸ்தாயி (Mandra Sthayi)",
              nameEnglish: "Lower Octave",
              descriptionTamil: "ஸ்வரத்திற்குக் கீழே ஒரு புள்ளி வைக்கப்பட்டிருக்கும்."
            },
            {
              symbol: "ஸ̈ (இரு மேல் புள்ளிகள்)",
              nameTamil: "அதி தார ஸ்தாயி (Athi Thaara)",
              nameEnglish: "Highest Octave",
              descriptionTamil: "ஸ்வரத்திற்கு மேலே இரண்டு புள்ளிகள் வைக்கப்பட்டிருக்கும்."
            },
            {
              symbol: "ஸ̤ (இரு கீழ் புள்ளிகள்)",
              nameTamil: "அனு மந்த்ர ஸ்தாயி (Anu Mandra)",
              nameEnglish: "Lowest Octave",
              descriptionTamil: "ஸ்வரத்திற்குக் கீழே இரண்டு புள்ளிகள் வைக்கப்பட்டிருக்கும்."
            }
          ]
        },
        {
          categoryNameTamil: "காலப் பிரமாணக் குறிகள் (Speed Marks)",
          categoryNameEnglish: "Speed / Tempo Indicators",
          symbols: [
            {
              symbol: "ஸ  ரி  க  ம",
              nameTamil: "முதற்காலம் (First Speed)",
              nameEnglish: "Prathama Kaalam",
              descriptionTamil: "ஸ்வரங்களின் மேல் எந்தக் கோடும் இருக்காது. ஒரு அக்ஷரத்திற்கு ஒரு ஸ்வரம் பாடப்படும்."
            },
            {
              symbol: "͞ஸ͞ரி  ͞க͞ம (மேல் ஒற்றைக் கோடு)",
              nameTamil: "இரண்டாம் காலம் (Second Speed)",
              nameEnglish: "Dviteeya Kaalam",
              descriptionTamil: "ஸ்வரங்களின் மேல் ஒரு கிடைக்கோடிட்டுக் காட்டப்படும். ஒரு அக்ஷரத்திற்கு 2 ஸ்வரங்கள் பாடப்படும்."
            },
            {
              symbol: "̿ஸ̿ரி̿க̿ம (மேல் இரட்டைக் கோடு)",
              nameTamil: "மூன்றாம் காலம் (Third Speed)",
              nameEnglish: "Triteeya Kaalam",
              descriptionTamil: "ஸ்வரங்களின் மேல் இரண்டு கிடைக்கோடுகள் இருக்கும். ஒரு அக்ஷரத்திற்கு 4 ஸ்வரங்கள் பாடப்படும்."
            }
          ]
        },
        {
          categoryNameTamil: "கார்வைக் குறிகள் (Rest / Elongation Marks)",
          categoryNameEnglish: "Pause & Sustained Note Symbols",
          symbols: [
            {
              symbol: "காற்புள்ளி / கமா (,)",
              nameTamil: "கமா (Comma)",
              nameEnglish: "One Akshara Rest / Elongation",
              descriptionTamil: "முந்திய ஸ்வரத்தை ஒரு அக்ஷர காலம் நீட்டிப் பாட வேண்டும் (1 மாத்திரை நீடிப்பு)."
            },
            {
              symbol: "அரைப்புள்ளி / செமிகோலன் (;)",
              nameTamil: "செமிகோலன் (Semicolon)",
              nameEnglish: "Two Aksharas Rest / Elongation",
              descriptionTamil: "முந்திய ஸ்வரத்தை இரண்டு அக்ஷர காலம் நீட்டிப் பாட வேண்டும் (2 மாத்திரைகள் நீடிப்பு)."
            }
          ]
        },
        {
          categoryNameTamil: "அங்க மற்றும் முடிவுக் குறிகள்",
          categoryNameEnglish: "Anga and Section Completion Marks",
          symbols: [
            {
              symbol: "| (ஒற்றைக் கோடு)",
              nameTamil: "அங்கப் பிரிவு அல்லது ஆவர்த்த முடிவு",
              nameEnglish: "Single Bar Line",
              descriptionTamil: "தாளத்தின் ஓர் அங்கம் அல்லது ஆவர்த்தப் பிரிவைக் குறிக்கப் பயன்படும்."
            },
            {
              symbol: "|| (இரட்டைக் கோடு)",
              nameTamil: "பாட்டின் முடிவு அல்லது பகுதி முடிவு",
              nameEnglish: "Double Bar Line",
              descriptionTamil: "பாடல் அல்லது பல்லவி, சரணம் போன்ற முழு பகுதியின் நிறைவைக் குறிக்கப் பயன்படும்."
            },
            {
              symbol: "I , O , U",
              nameTamil: "லகு (I), த்ருதம் (O), அனுத்ருதம் (U)",
              nameEnglish: "Laghu, Dhrutam, Anudhrutam",
              descriptionTamil: "தாளத்தின் அங்கங்களை எழுதும் குறியீடுகள்."
            }
          ]
        }
      ]
    }
  ],

  // ==========================================
  // FLASHCARDS (நினைவு அட்டைகள்)
  // ==========================================
  flashcards: [
    {
      id: "fc1",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "சங்கீதம் என்றால் என்ன? அதில் அடங்கியுள்ள மூன்று கலைகள் யாவை?",
      back: "செவிக்கும் மனதுக்கும் இன்பம் தரும் ஒழுங்கான ஒலி சங்கீதம் ஆகும்.\nமூன்று கலைகள்: கீதம் (பாடல்), வாத்தியம் (கருவி), நிருத்தம் (நடனம்).\n'கீதம் வாத்யம் ததா நிருத்யம் த்ரயம் சங்கீத முச்யதே'."
    },
    {
      id: "fc2",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "நாதம் எவ்வாறு உற்பத்தியாகிறது? அதன் இரு வகைகள் யாவை?",
      back: "உடம்பில் உள்ள பிராணன் (காற்று) மற்றும் அக்னி (சூடு) ஆகியவற்றின் சேர்க்கையினால் நாபியிலிருந்து உற்பத்தியாகிறது.\nவகைகள்:\n1) ஆஹத நாதம் (மனித முயற்சியால் உண்டாக்கும் ஒலி)\n2) அனாஹத நாதம் (இயற்கையான யோகிகள் கேட்கும் ஒலி)."
    },
    {
      id: "fc3",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "இசையில் 'தாயும் தந்தையும்' என அழைக்கப்படுபவை எவை?",
      back: "'ஸ்ருதி மாதா, லய பிதா'\n• ஸ்ருதி = தாய் (Mother)\n• லயம் = தந்தை (Father)"
    },
    {
      id: "fc4",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "ஸ்வரம் என்றால் என்ன? வடமொழி வரைவிலக்கணம் யாது?",
      back: "தனது இயல்பினாலேயே கேட்பவர் மனதை மகிழ்விக்கக்கூடிய இசை ஒலி ஸ்வரம் எனப்படும்.\nவடமொழி வாக்கியம்: 'ஸ்வதோ ரஞ்ஜயதி இதி ஸ்வரஹ'."
    },
    {
      id: "fc5",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "லயம் என்றால் என்ன? அதன் மூன்று வகைகள் யாவை?",
      back: "சீரான சம கால இடைவெளி லயம் எனப்படும்.\nமூன்று வகைகள்:\n1) விளம்ப லயம் (Slow)\n2) மத்யம லயம் (Medium)\n3) துரித லயம் (Fast)."
    },
    {
      id: "fc6",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "'தாளம்' என்ற சொல் எவ்வாறு தோன்றியது?",
      back: "சிவனின் 'தாண்டவம்' என்பதிலுள்ள 'தா' என்ற சொல்லும்,\nபார்வதியின் 'லாஸ்யம்' என்பதிலுள்ள 'ல' என்ற சொல்லும் இணைந்து 'தாளம்' என உருவானது."
    },
    {
      id: "fc7",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "ஆரோகணம் மற்றும் அவரோகணம் வேறுபடுத்துக.",
      back: "• ஆரோகணம்: ஸ்வரங்கள் கீழிருந்து மேல் நோக்கி ஏறிச் செல்வது (ஸ ரி க ம ப த நி ஸ்).\n• அவரோகணம்: ஸ்வரங்கள் மேலிருந்து கீழ் நோக்கி இறங்கி வருவது (ஸ் நி த ப ம க ரி ஸ)."
    },
    {
      id: "fc8",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "பூர்வாங்கம் மற்றும் உத்தராங்கம் என்றால் என்ன?",
      back: "• பூர்வாங்கம்: முற்பகுதி (ஸ ரி க ம அல்லது வர்ணத்தின் பல்லவி, அனுபல்லவி, முக்தாயிஸ்வரம்).\n• உத்தராங்கம்: பிற்பகுதி (ப த நி ஸ் அல்லது வர்ணத்தின் சரணம், சரணஸ்வரங்கள்)."
    },
    {
      id: "fc9",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "சப்தகம் மற்றும் அஷ்டகம் என்றால் என்ன?",
      back: "• சப்தகம்: ஸ முதல் நி வரையுள்ள 7 ஸ்வரங்களின் தொகுதி.\n• அஷ்டகம்: ஸ முதல் மேல் ஸ்தாயி ஸ வரையுள்ள 8 ஸ்வரங்களின் தொகுதி."
    },
    {
      id: "fc10",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "நிபந்த சங்கீதம் மற்றும் அநிபந்த சங்கீதம் வேறுபடுத்துக.",
      back: "• நிபந்தம்: தாளக் கட்டுக்குள் அமைந்த இசை (கீதம், வர்ணம், கீர்த்தனை).\n• அநிபந்தம்: தாளக் கட்டு இல்லாத சுயேச்சை இசை (ராக ஆலாபனை, விருத்தம், சுலோகம்)."
    },
    {
      id: "fc11",
      topicId: "topic1",
      topicTitle: "அறிமுக விளக்கம்",
      front: "ப்ரக்ருதி ஸ்வரங்கள் மற்றும் விக்ருதி ஸ்வரங்கள் யாவை?",
      back: "• ப்ரக்ருதி ஸ்வரங்கள் (அசல ஸ்வரங்கள்): எவ்வித மாற்றமும் இல்லாத மாறாத ஸ்வரங்கள். அவை 2: ஸ (ஷட்ஜம்), ப (பஞ்சமம்).\n• விக்ருதி ஸ்வரங்கள் (சல ஸ்வரங்கள்): மாற்றங்களுடைய ஸ்வரங்கள். அவை 5: ரி, க, ம, த, நி."
    },
    {
      id: "fc12",
      topicId: "topic2",
      topicTitle: "ஸப்தஸ்வரங்களும் தமிழ்ப் பெயர்களும்",
      front: "ஸப்த ஸ்வரங்களின் பெயர்களையும் அதன் தமிழ்ப் பெயர்களையும் வரிசையாகக் கூறுக.",
      back: "1. ஸ - ஷட்ஜம் = குரல்\n2. ரி - ரிஷபம் = துத்தம்\n3. க - காந்தாரம் = கைக்கிளை\n4. ம - மத்யமம் = உழை\n5. ப - பஞ்சமம் = இளி\n6. த - தைவதம் = விளரி\n7. நி - நிஷாதம் = தாரம்"
    },
    {
      id: "fc13",
      topicId: "topic2",
      topicTitle: "ஸப்தஸ்வரங்களும் தமிழ்ப் பெயர்களும்",
      front: "ஸ்வரங்களுடன் தொடர்புடைய விலங்கு/பறவை ஒலிகள் யாவை?",
      back: "• ஸ (ஷட்ஜம்) = மயில் (Peacock)\n• ரி (ரிஷபம்) = காளை (Bull)\n• க (காந்தாரம்) = ஆடு (Goat)\n• ம (மத்யமம்) = கொக்கு / கிரௌஞ்சம் (Heron)\n• ப (பஞ்சமம்) = குயில் (Cuckoo)\n• த (தைவதம்) = குதிரை / தவளை (Horse)\n• நி (நிஷாதம்) = யானை (Elephant)"
    },
    {
      id: "fc14",
      topicId: "topic3",
      topicTitle: "12 ஸ்வரஸ்தான விபரம்",
      front: "ஒரு ஸ்தாயியில் எத்தனை ஸ்வரஸ்தானங்கள் உள்ளன? ஏன் 16 பெயர்கள் உண்டாகின்றன?",
      back: "ஒரு ஸ்தாயியில் 12 ஸ்வரஸ்தானங்கள் உள்ளன.\nஸ, ப இரண்டும் மாறாதவை (2).\nமத்யமம் 2 வகை (சுத்த ம, பிரதி ம).\nரி, க, த, நி ஆகிய நான்கு ஸ்வரங்களும் ஒவ்வொன்றும் 3 வகைகளாகி சில ஸ்தானங்களை ஒன்றுக்கொன்று பகிர்வதால் 12 ஸ்தானங்களில் 16 பெயர்கள் உண்டாகின்றன."
    },
    {
      id: "fc15",
      topicId: "topic3",
      topicTitle: "12 ஸ்வரஸ்தான விபரம்",
      front: "ஒரே ஸ்தானத்தைப் பகிர்ந்து கொள்ளும் ஸ்வர ஜோடிகள் யாவை?",
      back: "1. சதுஸ்ருதி ரிஷபம் (R2) = சுத்த காந்தாரம் (G1)\n2. ஷட்ச்ருதி ரிஷபம் (R3) = சாதாரண காந்தாரம் (G2)\n3. சதுஸ்ருதி தைவதம் (D2) = சுத்த நிஷாதம் (N1)\n4. ஷட்ச்ருதி தைவதம் (D3) = கைசிக நிஷாதம் (N2)"
    },
    {
      id: "fc16",
      topicId: "topic4",
      topicTitle: "ஸப்த தாளங்கள் & அங்கங்கள்",
      front: "தாளத்தின் மூன்று முக்கிய அங்கங்களின் பெயர், அடையாளம் மற்றும் மாத்திரை யாவை?",
      back: "1. அனுத்ருதம் = U (1 தட்டு) = 1 அக்ஷரம்\n2. த்ருதம் = O (1 தட்டு + 1 வீச்சு) = 2 அக்ஷரங்கள்\n3. லகு = I (1 தட்டு + விரல் எண்ணுதல்) = ஜாதிக்கு ஏற்ப (3, 4, 5, 7, 9) மாறும்."
    },
    {
      id: "fc17",
      topicId: "topic4",
      topicTitle: "ஸப்த தாளங்கள் & அங்கங்கள்",
      front: "ஸப்த தாளங்களின் பெயர்களையும் அவற்றின் அங்க அடையாளங்களையும் கூறுக.",
      back: "1. துருவ தாளம் = I O I I\n2. மத்ய தாளம் = I O I\n3. ரூபக தாளம் = O I\n4. ஜம்பை தாளம் = I U O\n5. திரிபுட தாளம் = I O O\n6. அட தாளம் = I I O O\n7. ஏக தாளம் = I"
    },
    {
      id: "fc18",
      topicId: "topic4",
      topicTitle: "ஸப்த தாளங்கள் & அங்கங்கள்",
      front: "ஆதி தாளத்தின் தாளப் பெயர், ஜாதி மற்றும் அங்க அடையாளம் என்ன?",
      back: "ஆதி தாளம் என்பது 'சதுரஸ்ர ஜாதி திரிபுட தாளம்' ஆகும்.\nஅங்க அடையாளம்: I₄ O O\nஅக்ஷர அளவு: 4 + 2 + 2 = 8 அக்ஷரங்கள்."
    },
    {
      id: "fc19",
      topicId: "topic5",
      topicTitle: "5 ஜாதிகள்",
      front: "5 ஜாதிகளின் பெயர்கள் மற்றும் அவற்றின் அக்ஷர எண்ணிக்கைகள் யாவை?",
      back: "1. திஸ்ர ஜாதி = 3 அக்ஷரங்கள் (I₃)\n2. சதுரஸ்ர ஜாதி = 4 அக்ஷரங்கள் (I₄)\n3. கண்ட ஜாதி = 5 அக்ஷரங்கள் (I₅)\n4. மிஸ்ர ஜாதி = 7 அக்ஷரங்கள் (I₇)\n5. சங்கீர்ண ஜாதி = 9 அக்ஷரங்கள் (I₉)\n7 தாளங்கள் × 5 ஜாதிகள் = 35 தாளங்கள்."
    },
    {
      id: "fc20",
      topicId: "topic6",
      topicTitle: "இசைக் குறியீடுகள்",
      front: "ஸ்வரங்களில் கமா (,) மற்றும் செமிகோலன் (;) எதைக் குறிக்கின்றன?",
      back: "• கமா (,) = 1 அக்ஷர காலம் நீட்டிப் பாடுதல் (1 மாத்திரை கார்வை).\n• செமிகோலன் (;) = 2 அக்ஷர காலம் நீட்டிப் பாடுதல் (2 மாத்திரை கார்வை)."
    },
    {
      id: "fc21",
      topicId: "topic6",
      topicTitle: "இசைக் குறியீடுகள்",
      front: "தார ஸ்தாயி மற்றும் மந்த்ர ஸ்தாயி ஸ்வரங்கள் எவ்வாறு அடையாளப்படுத்தப்படுகின்றன?",
      back: "• தார ஸ்தாயி (மேல் ஸ்தாயி): ஸ்வரத்திற்கு மேலே புள்ளி (ஸ̇ , ரி̇).\n• மந்த்ர ஸ்தாயி (கீழ் ஸ்தாயி): ஸ்வரத்திற்குக் கீழே புள்ளி (ஸ̣ , ரி̣).\n• மத்ய ஸ்தாயி (நடு): புள்ளி ஏதுமில்லை (ஸ , ரி)."
    },
    {
      id: "fc22",
      topicId: "topic6",
      topicTitle: "இசைக் குறியீடுகள்",
      front: "முதற்காலம், இரண்டாம் காலம், மூன்றாம் காலம் எவ்வாறு குறிக்கப்படுகின்றன?",
      back: "• முதற்காலம்: மேற்கோடு இல்லை (ஸ ரி க ம) - 1 அக்ஷரத்திற்கு 1 ஸ்வரம்.\n• இரண்டாம் காலம்: ஒற்றை மேற்கோடு (͞ஸ͞ரி) - 1 அக்ஷரத்திற்கு 2 ஸ்வரங்கள்.\n• மூன்றாம் காலம்: இரட்டை மேற்கோடு (̿ஸ̿ரி) - 1 அக்ஷரத்திற்கு 4 ஸ்வரங்கள்."
    }
  ],

  // ==========================================
  // MCQ QUESTION BANK (பலவுள் தெரிவு வினாக்கள்)
  // ==========================================
  mcqQuestions: [
    {
      id: "mcq1",
      topicId: "topic1",
      questionTamil: "சங்கீதத்தில் அடங்கியுள்ள மூன்று கலைகள் யாவை?",
      questionEnglish: "Which three fine arts comprise Sangeetham?",
      optionsTamil: [
        "கீதம், வாத்தியம், நிருத்தம்",
        "இயல், இசை, நாடகம்",
        "ராகம், தாளம், பல்லவி",
        "ஸ்வரம், லயம், ஸ்ருதி"
      ],
      optionsEnglish: [
        "Geetham, Vaadhyam, Nrithyam",
        "Iyal, Isai, Naadagam",
        "Ragam, Thalam, Pallavi",
        "Swaram, Layam, Sruti"
      ],
      correctIndex: 0,
      explanation: "கீதம் (பாடல்), வாத்தியம் (இசைக்கருவி), நிருத்தம் (நடனம்) ஆகிய மூன்றும் சேர்ந்ததே சங்கீதம் ஆகும் ('கீதம் வாத்யம் ததா நிருத்யம் த்ரயம் சங்கீத முச்யதே')."
    },
    {
      id: "mcq2",
      topicId: "topic1",
      questionTamil: "நாதம் உடலின் எவற்றின் சேர்க்கையினால் உண்டாகிறது?",
      questionEnglish: "Naadham is produced by the combination of which two elements in the body?",
      optionsTamil: [
        "பிராணன் மற்றும் அக்னி (காற்று மற்றும் வெப்பம்)",
        "மண் மற்றும் நீர்",
        "ஆகாயம் மற்றும் காற்று",
        "இரத்தம் மற்றும் மூச்சு"
      ],
      optionsEnglish: [
        "Praana and Agni (Air and Heat)",
        "Earth and Water",
        "Ether and Air",
        "Blood and Breath"
      ],
      correctIndex: 0,
      explanation: "உடம்பில் உள்ள பிராணன் (காற்று) மற்றும் அக்னி (சூடு) ஆகியவற்றின் சேர்க்கையினால் நாபியிலிருந்து நாதம் உற்பத்தியாகிறது."
    },
    {
      id: "mcq3",
      topicId: "topic1",
      questionTamil: "'ஸ்ருதி மாதா, லய ...' பழமொழியை நிறைவு செய்க.",
      questionEnglish: "Complete the adage: 'Sruti Mata, Laya ...'",
      optionsTamil: [
        "பிதா (Father)",
        "குரு (Guru)",
        "தேவன் (God)",
        "சகோதரன் (Brother)"
      ],
      optionsEnglish: [
        "Pitha (Father)",
        "Guru (Teacher)",
        "Devan (God)",
        "Brother"
      ],
      correctIndex: 0,
      explanation: "சங்கீதத்தில் ஸ்ருதி தாயாகவும், லயம் தந்தையாகவும் போற்றப்படுகின்றது ('ஸ்ருதி மாதா, லய பிதா')."
    },
    {
      id: "mcq4",
      topicId: "topic1",
      questionTamil: "தனது இயல்பினாலேயே கேட்பவர் மனதை மகிழ்விக்கக்கூடிய இசை ஒலி எது?",
      questionEnglish: "Which musical tone naturally pleases the mind of the listener by its own virtue?",
      optionsTamil: [
        "ஸ்வரம் (Swaram)",
        "தாளம் (Thalam)",
        "கார்வை (Karvai)",
        "ஆவர்த்தம் (Avarthanam)"
      ],
      optionsEnglish: [
        "Swaram",
        "Thalam",
        "Karvai",
        "Avarthanam"
      ],
      correctIndex: 0,
      explanation: "'ஸ்வதோ ரஞ்ஜயதி இதி ஸ்வரஹ' - தனது சுபாவத்தினாலேயே மனதைக் கவரக்கூடியது ஸ்வரம் ஆகும்."
    },
    {
      id: "mcq5",
      topicId: "topic1",
      questionTamil: "லயம் எத்தனை வகைப்படும்?",
      questionEnglish: "How many main types of Layam (tempo) are there?",
      optionsTamil: [
        "3 (விளம்பம், மத்யமம், துரிதம்)",
        "5 (திஸ்ரம், சதுரஸ்ரம், கண்டம், மிஸ்ரம், சங்கீர்ணம்)",
        "7 (ஸப்த லயங்கள்)",
        "2 (ஆரோகணம், அவரோகணம்)"
      ],
      optionsEnglish: [
        "3 (Vilambam, Madhyamam, Dhrutam)",
        "5 (Tisram, Chaturasram, Khandam, Misram, Sankeernam)",
        "7 (Sapta Layams)",
        "2 (Arohanam, Avarohanam)"
      ],
      correctIndex: 0,
      explanation: "லயம் 3 வகைப்படும்: விளம்ப லயம் (மெதுவான நடை), மத்யம லயம் (நடுத்தர நடை), துரித லயம் (வேகமான நடை)."
    },
    {
      id: "mcq6",
      topicId: "topic1",
      questionTamil: "'தாளம்' என்ற சொல்லில் 'தா' மற்றும் 'ல' எவற்றைக் குறிக்கின்றன?",
      questionEnglish: "In the word 'Thalam', what do 'Tha' and 'La' originate from?",
      optionsTamil: [
        "தாண்டவம் (சிவன்) மற்றும் லாஸ்யம் (பார்வதி)",
        "தட்டு மற்றும் லகு",
        "தாளம் மற்றும் லயம்",
        "தாரம் மற்றும் லகு"
      ],
      optionsEnglish: [
        "Tandavam (Shiva) and Lasyam (Parvati)",
        "Thattu and Laghu",
        "Thalam and Layam",
        "Thaaram and Laghu"
      ],
      correctIndex: 0,
      explanation: "சிவபெருமானின் தாண்டவத்தில் உள்ள 'தா'வும், பார்வதி தேவியின் லாஸ்யத்தில் உள்ள 'ல'வும் இணைந்து 'தாளம்' என்ற பெயர் பிறந்தது."
    },
    {
      id: "mcq7",
      topicId: "topic1",
      questionTamil: "ஸ்வரங்கள் கீழ் ஸ்தாயியிலிருந்து மேல் நோக்கி ஏறிச் செல்வது எவ்வாறு அழைக்கப்படும்?",
      questionEnglish: "What is the ascending progression of swaras from lower to higher pitch called?",
      optionsTamil: [
        "ஆரோகணம் (Arohanam)",
        "அவரோகணம் (Avarohanam)",
        "ஆவர்த்தம் (Avarthanam)",
        "உத்தராங்கம் (Uttharangam)"
      ],
      optionsEnglish: [
        "Arohanam",
        "Avarohanam",
        "Avarthanam",
        "Uttharangam"
      ],
      correctIndex: 0,
      explanation: "ஸ்வரங்கள் கீழிருந்து மேல் நோக்கி ஏறுவது ஆரோகணம்; மேலிருந்து கீழ் நோக்கி இறங்குவது அவரோகணம்."
    },
    {
      id: "mcq8",
      topicId: "topic1",
      questionTamil: "சப்தகத்தில் முதல் நான்கு ஸ்வரங்கள் (ஸ, ரி, க, ம) எவ்வாறு அழைக்கப்படுகின்றன?",
      questionEnglish: "What are the first four swaras (Sa, Ri, Ga, Ma) in a saptaka called?",
      optionsTamil: [
        "பூர்வாங்கம் (Poorvangam)",
        "உத்தராங்கம் (Uttharangam)",
        "அஷ்டகம் (Ashtakam)",
        "நிபந்தம் (Nibaddham)"
      ],
      optionsEnglish: [
        "Poorvangam",
        "Uttharangam",
        "Ashtakam",
        "Nibaddham"
      ],
      correctIndex: 0,
      explanation: "முற்பகுதி நான்கு ஸ்வரங்கள் பூர்வாங்கம் எனவும், பிற்பகுதி ஸ்வரங்கள் (ப, த, நி) உத்தராங்கம் எனவும் அழைக்கப்படும்."
    },
    {
      id: "mcq9",
      topicId: "topic1",
      questionTamil: "மாற்றமில்லாத 'ப்ரக்ருதி ஸ்வரங்கள்' (அசல ஸ்வரங்கள்) எத்தனை? அவை யாவை?",
      questionEnglish: "How many Prakruti (Achala / invariant) swaras are there, and which are they?",
      optionsTamil: [
        "2 (ஸ, ப)",
        "5 (ரி, க, ம, த, நி)",
        "7 (ஸ, ரி, க, ம, ப, த, நி)",
        "1 (ஸ மட்டும்)"
      ],
      optionsEnglish: [
        "2 (Sa, Pa)",
        "5 (Ri, Ga, Ma, Dha, Ni)",
        "7 (All Sapta Swaras)",
        "1 (Sa only)"
      ],
      correctIndex: 0,
      explanation: "எவ்வித விகாரமும் இல்லாமல் எப்போதும் ஒரே ஸ்தானத்தில் ஒலிக்கும் ப்ரக்ருதி ஸ்வரங்கள் இரண்டு: ஷட்ஜம் (ஸ) மற்றும் பஞ்சமம் (ப)."
    },
    {
      id: "mcq10",
      topicId: "topic1",
      questionTamil: "தாளக் கட்டுப்பாடு இன்றி சுதந்திரமாகப் பாடப்படும் இசை எது?",
      questionEnglish: "Which form of music is sung freely without tala restrictions?",
      optionsTamil: [
        "அநிபந்த சங்கீதம் (எ.கா: ராக ஆலாபனை)",
        "நிபந்த சங்கீதம் (எ.கா: கீதம்)",
        "வர்ணம்",
        "ஸ்வரஜதி"
      ],
      optionsEnglish: [
        "Anibaddham (e.g. Raga Alapana)",
        "Nibaddham (e.g. Geetham)",
        "Varnam",
        "Swarajathi"
      ],
      correctIndex: 0,
      explanation: "தாளக் கட்டுப்பாட்டுக்கு அடங்காமல் பாடப்படும் ராக ஆலாபனை, விருத்தம் போன்றவை அநிபந்த சங்கீதம் ஆகும்."
    },
    {
      id: "mcq11",
      topicId: "topic2",
      questionTamil: "ரிஷபம் (ரி) என்ற ஸ்வரத்தின் பழந்தமிழ்ப் பெயர் என்ன?",
      questionEnglish: "What is the ancient Tamil name for the swaram Rishabham (Ri)?",
      optionsTamil: [
        "துத்தம் (Thuttham)",
        "குரல் (Kural)",
        "கைக்கிளை (Kaikkizhai)",
        "உழை (Uzhai)"
      ],
      optionsEnglish: [
        "Thuttham",
        "Kural",
        "Kaikkizhai",
        "Uzhai"
      ],
      correctIndex: 0,
      explanation: "ஸ = குரல், ரி = துத்தம், க = கைக்கிளை, ம = உழை, ப = இளி, த = விளரி, நி = தாரம்."
    },
    {
      id: "mcq12",
      topicId: "topic2",
      questionTamil: "'இளி' என்பது எந்த ஸ்வரத்தின் தமிழ்ப் பெயர்?",
      questionEnglish: "'Ili' is the Tamil name of which Swaram?",
      optionsTamil: [
        "பஞ்சமம் (ப / Pa)",
        "மத்யமம் (ம / Ma)",
        "ஷட்ஜம் (ஸ / Sa)",
        "தைவதம் (த / Dha)"
      ],
      optionsEnglish: [
        "Panchamam (Pa)",
        "Madhyamam (Ma)",
        "Shadjam (Sa)",
        "Dhaivatham (Dha)"
      ],
      correctIndex: 0,
      explanation: "பஞ்சமம் (ப) என்ற ஐந்தாவது ஸ்வரத்தின் பழந்தமிழ்ப் பெயர் 'இளி' ஆகும்."
    },
    {
      id: "mcq13",
      topicId: "topic2",
      questionTamil: "நிஷாதம் (நி) என்ற ஸ்வரத்தின் தமிழ்ப் பெயர் என்ன?",
      questionEnglish: "What is the ancient Tamil name for Nishadham (Ni)?",
      optionsTamil: [
        "தாரம் (Thaaram)",
        "விளரி (Vilari)",
        "உழை (Uzhai)",
        "குரல் (Kural)"
      ],
      optionsEnglish: [
        "Thaaram",
        "Vilari",
        "Uzhai",
        "Kural"
      ],
      correctIndex: 0,
      explanation: "நிஷாதம் (நி) என்பதன் தமிழ்ப் பெயர் 'தாரம்' ஆகும். தைவதம் (த) = விளரி."
    },
    {
      id: "mcq14",
      topicId: "topic2",
      questionTamil: "பஞ்சமம் (ப) ஸ்வரம் எந்தப் பறவையின் ஒலியுடன் ஒப்பிடப்படுகிறது?",
      questionEnglish: "Which bird's call is associated with the swaram Panchamam (Pa)?",
      optionsTamil: [
        "குயில் (Cuckoo)",
        "மயில் (Peacock)",
        "கொக்கு (Heron)",
        "கிளி (Parrot)"
      ],
      optionsEnglish: [
        "Cuckoo (Kuyil)",
        "Peacock (Mayil)",
        "Heron (Kokku)",
        "Parrot"
      ],
      correctIndex: 0,
      explanation: "பஞ்சமத்திற்கு குயிலும், ஷட்ஜத்திற்கு மயிலும், மத்யமத்திற்கு கொக்கும் உவமைகளாகக் கூறப்படுகின்றன."
    },
    {
      id: "mcq15",
      topicId: "topic3",
      questionTamil: "ஒரு ஸ்தாயியில் உள்ள மொத்த ஸ்வரஸ்தானங்கள் எத்தனை?",
      questionEnglish: "How many swarasthanas (pitch positions) are there in an octave?",
      optionsTamil: [
        "12 ஸ்வரஸ்தானங்கள்",
        "7 ஸ்வரஸ்தானங்கள்",
        "16 ஸ்வரஸ்தானங்கள்",
        "22 ஸ்வரஸ்தானங்கள்"
      ],
      optionsEnglish: [
        "12 Swarasthanas",
        "7 Swarasthanas",
        "16 Swarasthanas",
        "22 Swarasthanas"
      ],
      correctIndex: 0,
      explanation: "ஒரு ஸ்தாயியில் 12 ஸ்வரஸ்தானங்கள் உள்ளன. கர்நாடக இசையில் அவற்றுக்கு 16 பெயர்கள் வழங்கப்படுகின்றன."
    },
    {
      id: "mcq16",
      topicId: "topic3",
      questionTamil: "சதுஸ்ருதி ரிஷபத்தின் (R2) அதே ஸ்தானத்தைப் பகிர்ந்து கொள்ளும் காந்தாரம் எது?",
      questionEnglish: "Which Gandharam shares the same swarasthana as Chatusruti Rishabham (R2)?",
      optionsTamil: [
        "சுத்த காந்தாரம் (G1)",
        "சாதாரண காந்தாரம் (G2)",
        "அந்தர காந்தாரம் (G3)",
        "பிரதி காந்தாரம்"
      ],
      optionsEnglish: [
        "Suddha Gandharam (G1)",
        "Sadharana Gandharam (G2)",
        "Antara Gandharam (G3)",
        "Prati Gandharam"
      ],
      correctIndex: 0,
      explanation: "3-வது ஸ்வரஸ்தானத்தில் சதுஸ்ருதி ரிஷபமும் (R2), சுத்த காந்தாரமும் (G1) சமமான சுருதி ஸ்தானத்தைக் கொண்டுள்ளன."
    },
    {
      id: "mcq17",
      topicId: "topic3",
      questionTamil: "மத்யமத்தில் உள்ள இரண்டு பேதங்கள் யாவை?",
      questionEnglish: "What are the two varieties of Madhyamam?",
      optionsTamil: [
        "சுத்த மத்யமம், பிரதி மத்யமம் (M1, M2)",
        "சுத்த மத்யமம், சதுஸ்ருதி மத்யமம்",
        "சாதாரண மத்யமம், அந்தர மத்யமம்",
        "கைசிக மத்யமம், காகலி மத்யமம்"
      ],
      optionsEnglish: [
        "Suddha Madhyamam, Prati Madhyamam (M1, M2)",
        "Suddha Madhyamam, Chatusruti Madhyamam",
        "Sadharana Madhyamam, Antara Madhyamam",
        "Kaisiki Madhyamam, Kakali Madhyamam"
      ],
      correctIndex: 0,
      explanation: "மத்யமத்திற்கு சுத்த மத்யமம் (M1 - 6வது ஸ்தானம்), பிரதி மத்யமம் (M2 - 7வது ஸ்தானம்) என இரு பேதங்கள் உண்டு."
    },
    {
      id: "mcq18",
      topicId: "topic4",
      questionTamil: "அனுத்ருதத்தின் அடையாளம் மற்றும் அக்ஷரக் காலம் என்ன?",
      questionEnglish: "What is the symbol and akshara count of an Anudhrutam?",
      optionsTamil: [
        "U (அரைவட்டம்) - 1 அக்ஷரம்",
        "O (வட்டம்) - 2 அக்ஷரங்கள்",
        "I (கோடு) - 4 அக்ஷரங்கள்",
        "; (செமிகோலன்) - 2 அக்ஷரங்கள்"
      ],
      optionsEnglish: [
        "U (Crescent/half-circle) - 1 akshara",
        "O (Circle) - 2 aksharas",
        "I (Vertical stroke) - 4 aksharas",
        "; (Semicolon) - 2 aksharas"
      ],
      correctIndex: 0,
      explanation: "அனுத்ருதத்தின் குறியீடு 'U' ஆகும். அதன் செயல் ஒரு தட்டு, அதன் கால அளவு 1 அக்ஷரம்."
    },
    {
      id: "mcq19",
      topicId: "topic4",
      questionTamil: "த்ருதத்தின் (O) தாள கிரியை (செயல்) என்ன?",
      questionEnglish: "What is the hand gesture/action for a Dhrutam (O)?",
      optionsTamil: [
        "ஒரு தட்டு + ஒரு வீச்சு (1 clap + 1 wave)",
        "ஒரு தட்டு மட்டும் (1 clap only)",
        "ஒரு தட்டும் விரல் எண்ணுதலும்",
        "இரண்டு தட்டுகள்"
      ],
      optionsEnglish: [
        "One clap + one wave of the hand",
        "One clap only",
        "One clap and finger counts",
        "Two claps"
      ],
      correctIndex: 0,
      explanation: "த்ருதம் என்பது ஒரு தட்டும், ஒரு வீச்சும் (மறுதட்டு) கொண்ட 2 அக்ஷர கால அங்கமாகும்."
    },
    {
      id: "mcq20",
      topicId: "topic4",
      questionTamil: "ரூபக தாளத்தின் அங்க அமைப்பு என்ன?",
      questionEnglish: "What is the anga structure of Rupaka Thalam?",
      optionsTamil: [
        "O I (த்ருதம், லகு)",
        "I O I (லகு, த்ருதம், லகு)",
        "I O O (லகு, த்ருதம், த்ருதம்)",
        "I U O (லகு, அனுத்ருதம், த்ருதம்)"
      ],
      optionsEnglish: [
        "O I (Dhrutam, Laghu)",
        "I O I (Laghu, Dhrutam, Laghu)",
        "I O O (Laghu, Dhrutam, Dhrutam)",
        "I U O (Laghu, Anudhrutam, Dhrutam)"
      ],
      correctIndex: 0,
      explanation: "ரூபக தாளம் ஒரு த்ருதமும் ஒரு லகுவும் உடையது (O I)."
    },
    {
      id: "mcq21",
      topicId: "topic4",
      questionTamil: "திரிபுட தாளத்தின் அங்க அமைப்பு என்ன?",
      questionEnglish: "What is the anga structure of Triputa Thalam?",
      optionsTamil: [
        "I O O (லகு, த்ருதம், த்ருதம்)",
        "I O I (லகு, த்ருதம், லகு)",
        "I I O O (லகு, லகு, த்ருதம், த்ருதம்)",
        "I U O (லகு, அனுத்ருதம், த்ருதம்)"
      ],
      optionsEnglish: [
        "I O O (Laghu, Dhrutam, Dhrutam)",
        "I O I (Laghu, Dhrutam, Laghu)",
        "I I O O (Laghu, Laghu, Dhrutam, Dhrutam)",
        "I U O (Laghu, Anudhrutam, Dhrutam)"
      ],
      correctIndex: 0,
      explanation: "திரிபுட தாளத்தின் அடையாளம் I O O (ஒரு லகு, இரண்டு த்ருதங்கள்). இதுவே சதுரஸ்ர ஜாதியில் பிரபல ஆதி தாளம் (I4 O O) ஆகும்!"
    },
    {
      id: "mcq22",
      topicId: "topic4",
      questionTamil: "ஜம்பை தாளத்தில் உள்ள அங்கங்கள் யாவை?",
      questionEnglish: "What are the angas present in Jhampa Thalam?",
      optionsTamil: [
        "லகு, அனுத்ருதம், த்ருதம் (I U O)",
        "லகு, த்ருதம், லகு (I O I)",
        "லகு, த்ருதம், த்ருதம் (I O O)",
        "லகு, லகு, த்ருதம், த்ருதம் (I I O O)"
      ],
      optionsEnglish: [
        "Laghu, Anudhrutam, Dhrutam (I U O)",
        "Laghu, Dhrutam, Laghu (I O I)",
        "Laghu, Dhrutam, Dhrutam (I O O)",
        "Laghu, Laghu, Dhrutam, Dhrutam (I I O O)"
      ],
      correctIndex: 0,
      explanation: "ஸப்த தாளங்களில் அனுத்ருதம் (U) இடம்பெறும் ஒரே தாளம் ஜம்பை தாளம் (I U O) ஆகும்."
    },
    {
      id: "mcq23",
      topicId: "topic5",
      questionTamil: "மிஸ்ர ஜாதியில் லகுவின் அக்ஷர எண்ணிக்கை எத்தனை?",
      questionEnglish: "How many aksharas does a Laghu have in Misra Jathi?",
      optionsTamil: [
        "7 அக்ஷரங்கள்",
        "5 அக்ஷரங்கள்",
        "4 அக்ஷரங்கள்",
        "9 அக்ஷரங்கள்"
      ],
      optionsEnglish: [
        "7 aksharas",
        "5 aksharas",
        "4 aksharas",
        "9 aksharas"
      ],
      correctIndex: 0,
      explanation: "திஸ்ரம் = 3, சதுரஸ்ரம் = 4, கண்டம் = 5, மிஸ்ரம் = 7, சங்கீர்ணம் = 9."
    },
    {
      id: "mcq24",
      topicId: "topic5",
      questionTamil: "7 தாளங்களும் 5 ஜாதிகளினால் பெருக்கப்படும் போது மொத்தம் எத்தனை தாளங்கள் உருவாகின்றன?",
      questionEnglish: "How many talas are formed when the 7 talas are multiplied by the 5 jathis?",
      optionsTamil: [
        "35 தாளங்கள் (7 × 5 = 35)",
        "72 தாளங்கள்",
        "108 தாளங்கள்",
        "12 தாளங்கள்"
      ],
      optionsEnglish: [
        "35 Talas (7 × 5 = 35)",
        "72 Talas",
        "108 Talas",
        "12 Talas"
      ],
      correctIndex: 0,
      explanation: "7 ஸப்த தாளங்களும் 5 ஜாதிகளுடன் கூடி முப்பத்தைந்து (35) தாளங்களாக விரிகின்றன."
    },
    {
      id: "mcq25",
      topicId: "topic5",
      questionTamil: "ஆதி தாளத்தில் (சதுரஸ்ர ஜாதி திரிபுட தாளம்) ஒரு ஆவர்த்தத்திற்கு எத்தனை அக்ஷரங்கள் உள்ளன?",
      questionEnglish: "How many aksharas are in one cycle of Adi Thalam (Chaturasra Jathi Triputa Thalam)?",
      optionsTamil: [
        "8 அக்ஷரங்கள் (4 + 2 + 2 = 8)",
        "10 அக்ஷரங்கள்",
        "6 அக்ஷரங்கள்",
        "14 அக்ஷரங்கள்"
      ],
      optionsEnglish: [
        "8 aksharas (4 + 2 + 2 = 8)",
        "10 aksharas",
        "6 aksharas",
        "14 aksharas"
      ],
      correctIndex: 0,
      explanation: "ஆதி தாளம் = I4 + O + O = 4 + 2 + 2 = 8 அக்ஷரங்கள் ஆகும்."
    },
    {
      id: "mcq26",
      topicId: "topic6",
      questionTamil: "தார ஸ்தாயி (மேல் ஸ்தாயி) ஸ்வரத்தை எப்படிக் குறிப்பார்கள்?",
      questionEnglish: "How is a note in Thaara Sthayi (higher octave) denoted?",
      optionsTamil: [
        "ஸ்வரத்தின் மேலே புள்ளி இட்டு (ஸ̇)",
        "ஸ்வரத்திற்குக் கீழே புள்ளி இட்டு (ஸ̣)",
        "ஸ்வரத்திற்கு மேல் கிடைக்கோடிட்டு",
        "ஸ்வரத்திற்குப் பின் கமா இட்டு"
      ],
      optionsEnglish: [
        "With a dot above the note (Ṡ)",
        "With a dot below the note (Ṣ)",
        "With a horizontal line above",
        "With a comma after the note"
      ],
      correctIndex: 0,
      explanation: "மேல் ஸ்தாயிக்கு ஸ்வரத்தின் மேல் புள்ளி (ஸ̇), கீழ் ஸ்தாயிக்கு கீழே புள்ளி (ஸ̣), நடு ஸ்தாயிக்கு புள்ளி இல்லை (ஸ)."
    },
    {
      id: "mcq27",
      topicId: "topic6",
      questionTamil: "சங்கீதக் குறிப்பில் ஒரு காற்புள்ளி (கமா ,) எத்தனை மாத்திரை நீடிப்பைக் குறிக்கும்?",
      questionEnglish: "In musical notation, what duration does a comma (,) represent?",
      optionsTamil: [
        "1 அக்ஷர காலம் நீடிப்பு (1 மாத்திரை)",
        "2 அக்ஷர கால நீடிப்பு",
        "அரை மாத்திரை",
        "4 மாத்திரைகள்"
      ],
      optionsEnglish: [
        "1 akshara rest / elongation",
        "2 aksharas elongation",
        "Half akshara",
        "4 aksharas"
      ],
      correctIndex: 0,
      explanation: "கமா (,) என்பது 1 மாத்திரை கார்வை; செமிகோலன் (;) என்பது 2 மாத்திரை கார்வை ஆகும்."
    },
    {
      id: "mcq28",
      topicId: "topic6",
      questionTamil: "ஸ்வரங்களின் மேல் ஒரு கிடைக்கோடிட்டால் (͞ஸ͞ரி) அது எத்தனையாவது காலத்தைக் குறிக்கும்?",
      questionEnglish: "What speed does a single horizontal line over notes represent?",
      optionsTamil: [
        "இரண்டாம் காலம் (2nd Speed)",
        "முதற்காலம் (1st Speed)",
        "மூன்றாம் காலம் (3rd Speed)",
        "நான்காம் காலம்"
      ],
      optionsEnglish: [
        "Second Speed (2nd Speed)",
        "First Speed (1st Speed)",
        "Third Speed (3rd Speed)",
        "Fourth Speed"
      ],
      correctIndex: 0,
      explanation: "கோடு இன்றி எழுதப்படுவது முதற்காலம்; ஒரு கோடு இரண்டாம் காலம்; இரு கோடு மூன்றாம் காலம்."
    }
  ],

  // ==========================================
  // SHORT ANSWER & FILL-IN QUESTIONS (எழுத்துப் பயிற்சி)
  // "where he can write the answers... very small questions"
  // ==========================================
  writeQuestions: [
    {
      id: "wq1",
      topicId: "topic1",
      questionTamil: "சங்கீதத்தில் அடங்கியுள்ள மூன்று கலைகள் யாவை?",
      questionEnglish: "Name the three arts that comprise Sangeetham.",
      hint: "பாடல், இசைக்கருவி, நடனம் ஆகியவற்றின் வடமொழிப் பெயர்கள்",
      acceptableAnswers: [
        "கீதம் வாத்தியம் நிருத்தம்",
        "கீதம், வாத்தியம், நிருத்தம்",
        "geetham vaadhyam nrithyam",
        "geetham, vadhyam, nrithyam",
        "geetam vadyam nrityam"
      ],
      modelAnswerTamil: "கீதம் (பாடல்), வாத்தியம் (கருவி), நிருத்தம் (நடனம்).",
      modelAnswerEnglish: "Geetham (Vocal), Vaadhyam (Instruments), Nrithyam (Dance)."
    },
    {
      id: "wq2",
      topicId: "topic1",
      questionTamil: "'ஸ்ருதி மாதா, லய ...' பழமொழியை நிறைவு செய்க.",
      questionEnglish: "Complete the saying: 'Sruti Mata, Laya ...'",
      hint: "தந்தை என்பதன் வடமொழிச் சொல்",
      acceptableAnswers: [
        "பிதா",
        "பிதா.",
        "pitha",
        "pithaa",
        "pita"
      ],
      modelAnswerTamil: "பிதா (ஸ்ருதி மாதா, லய பிதா).",
      modelAnswerEnglish: "Pitha ('Sruti is Mother, Laya is Father')."
    },
    {
      id: "wq3",
      topicId: "topic1",
      questionTamil: "நாதத்தின் இரு வகைகள் யாவை?",
      questionEnglish: "What are the two kinds of Naadham?",
      hint: "ஆ... நாதம், அனா... நாதம்",
      acceptableAnswers: [
        "ஆஹத நாதம் அனாஹத நாதம்",
        "ஆஹதம் அனாஹதம்",
        "ஆஹத நாதம், அனாஹத நாதம்",
        "aahatha naadham anaahatha naadham",
        "aahatham anaahatham",
        "ahata anahata"
      ],
      modelAnswerTamil: "1) ஆஹத நாதம், 2) அனாஹத நாதம்.",
      modelAnswerEnglish: "1) Aahatha Naadham, 2) Anaahatha Naadham."
    },
    {
      id: "wq4",
      topicId: "topic1",
      questionTamil: "லயம் எத்தனை வகைப்படும்? அவை யாவை?",
      questionEnglish: "What are the 3 types of Layam?",
      hint: "விளம்பம், மத்யமம், துரிதம்",
      acceptableAnswers: [
        "விளம்ப லயம் மத்யம லயம் துரித லயம்",
        "விளம்பம் மத்யமம் துரிதம்",
        "vilamba madhyama dhruta",
        "vilambam madhyamam dhrutham",
        "vilamba layam, madhyama layam, dhruta layam"
      ],
      modelAnswerTamil: "3 வகைப்படும்: விளம்ப லயம் (Slow), மத்யம லயம் (Medium), துரித லயம் (Fast).",
      modelAnswerEnglish: "3 types: Vilamba layam (slow), Madhyama layam (medium), Dhruta layam (fast)."
    },
    {
      id: "wq5",
      topicId: "topic1",
      questionTamil: "மாறாத 'ப்ரக்ருதி ஸ்வரங்கள்' (அசல ஸ்வரங்கள்) இரண்டையும் எழுதுக.",
      questionEnglish: "Name the two invariant Prakruti (Achala) swaras.",
      hint: "ஸ மற்றும்...",
      acceptableAnswers: [
        "ஸ ப",
        "ஸ, ப",
        "ஷட்ஜம் பஞ்சமம்",
        "sa pa",
        "sa, pa",
        "shadjam panchamam"
      ],
      modelAnswerTamil: "ஷட்ஜம் (ஸ), பஞ்சமம் (ப).",
      modelAnswerEnglish: "Shadjam (Sa) and Panchamam (Pa)."
    },
    {
      id: "wq6",
      topicId: "topic1",
      questionTamil: "மாற்றங்களுடைய 'விக்ருதி ஸ்வரங்கள்' ஐந்தையும் எழுதுக.",
      questionEnglish: "Name the five variable Vikruti swaras.",
      hint: "ரி, க, ம, த, நி",
      acceptableAnswers: [
        "ரி க ம த நி",
        "ரி, க, ம, த, நி",
        "ri ga ma dha ni",
        "ri, ga, ma, dha, ni"
      ],
      modelAnswerTamil: "ரிஷபம் (ரி), காந்தாரம் (க), மத்யமம் (ம), தைவதம் (த), நிஷாதம் (நி).",
      modelAnswerEnglish: "Rishabham (Ri), Gandharam (Ga), Madhyamam (Ma), Dhaivatham (Dha), Nishadham (Ni)."
    },
    {
      id: "wq7",
      topicId: "topic2",
      questionTamil: "ஷட்ஜம் (ஸ) என்ற ஸ்வரத்தின் தமிழ்ப் பெயர் என்ன?",
      questionEnglish: "What is the ancient Tamil name for Shadjam (Sa)?",
      hint: "தொண்டை ஒலி",
      acceptableAnswers: [
        "குரல்",
        "kural"
      ],
      modelAnswerTamil: "குரல் (Kural).",
      modelAnswerEnglish: "Kural."
    },
    {
      id: "wq8",
      topicId: "topic2",
      questionTamil: "ரிஷபம் (ரி) என்ற ஸ்வரத்தின் தமிழ்ப் பெயர் என்ன?",
      questionEnglish: "What is the ancient Tamil name for Rishabham (Ri)?",
      hint: "து...",
      acceptableAnswers: [
        "துத்தம்",
        "thuttham",
        "thuttam",
        "duttam"
      ],
      modelAnswerTamil: "துத்தம் (Thuttham).",
      modelAnswerEnglish: "Thuttham."
    },
    {
      id: "wq9",
      topicId: "topic2",
      questionTamil: "காந்தாரம் (க) என்ற ஸ்வரத்தின் தமிழ்ப் பெயர் என்ன?",
      questionEnglish: "What is the ancient Tamil name for Gandharam (Ga)?",
      hint: "கை...",
      acceptableAnswers: [
        "கைக்கிளை",
        "kaikkilai",
        "kaikkizhai",
        "kaikilai"
      ],
      modelAnswerTamil: "கைக்கிளை (Kaikkizhai).",
      modelAnswerEnglish: "Kaikkizhai."
    },
    {
      id: "wq10",
      topicId: "topic2",
      questionTamil: "மத்யமம் (ம) என்ற ஸ்வரத்தின் தமிழ்ப் பெயர் என்ன?",
      questionEnglish: "What is the ancient Tamil name for Madhyamam (Ma)?",
      hint: "உ...",
      acceptableAnswers: [
        "உழை",
        "uzhai",
        "ulai"
      ],
      modelAnswerTamil: "உழை (Uzhai).",
      modelAnswerEnglish: "Uzhai."
    },
    {
      id: "wq11",
      topicId: "topic2",
      questionTamil: "பஞ்சமம் (ப) என்ற ஸ்வரத்தின் தமிழ்ப் பெயர் என்ன?",
      questionEnglish: "What is the ancient Tamil name for Panchamam (Pa)?",
      hint: "இ...",
      acceptableAnswers: [
        "இளி",
        "ili"
      ],
      modelAnswerTamil: "இளி (Ili).",
      modelAnswerEnglish: "Ili."
    },
    {
      id: "wq12",
      topicId: "topic2",
      questionTamil: "தைவதம் (த) என்ற ஸ்வரத்தின் தமிழ்ப் பெயர் என்ன?",
      questionEnglish: "What is the ancient Tamil name for Dhaivatham (Dha)?",
      hint: "வி...",
      acceptableAnswers: [
        "விளரி",
        "vilari"
      ],
      modelAnswerTamil: "விளரி (Vilari).",
      modelAnswerEnglish: "Vilari."
    },
    {
      id: "wq13",
      topicId: "topic2",
      questionTamil: "நிஷாதம் (நி) என்ற ஸ்வரத்தின் தமிழ்ப் பெயர் என்ன?",
      questionEnglish: "What is the ancient Tamil name for Nishadham (Ni)?",
      hint: "தா...",
      acceptableAnswers: [
        "தாரம்",
        "thaaram",
        "tharam",
        "taram"
      ],
      modelAnswerTamil: "தாரம் (Thaaram).",
      modelAnswerEnglish: "Thaaram."
    },
    {
      id: "wq14",
      topicId: "topic3",
      questionTamil: "ஒரு ஸ்தாயியில் எத்தனை ஸ்வரஸ்தானங்கள் உள்ளன?",
      questionEnglish: "How many Swarasthanas are there in an octave?",
      hint: "பன்னிரண்டு",
      acceptableAnswers: [
        "12",
        "பன்னிரண்டு",
        "12 ஸ்வரஸ்தானங்கள்",
        "twelve",
        "12 swarasthanas"
      ],
      modelAnswerTamil: "12 ஸ்வரஸ்தானங்கள் (12 Swarasthanas).",
      modelAnswerEnglish: "12 Swarasthanas."
    },
    {
      id: "wq15",
      topicId: "topic4",
      questionTamil: "அனுத்ருதம் மற்றும் த்ருதத்தின் அடையாளங்களை எழுதுக.",
      questionEnglish: "Write the symbols for Anudhrutam and Dhrutam.",
      hint: "U மற்றும் O",
      acceptableAnswers: [
        "U O",
        "U, O",
        "u o",
        "u, o"
      ],
      modelAnswerTamil: "அனுத்ருதம் = U , த்ருதம் = O.",
      modelAnswerEnglish: "Anudhrutam = U, Dhrutam = O."
    },
    {
      id: "wq16",
      topicId: "topic4",
      questionTamil: "ரூபக தாளத்தின் அங்க அடையாளத்தை எழுதுக.",
      questionEnglish: "Write the anga symbols of Rupaka Thalam.",
      hint: "த்ருதம், லகு",
      acceptableAnswers: [
        "O I",
        "O, I",
        "o i",
        "OI"
      ],
      modelAnswerTamil: "O I (த்ருதம், லகு).",
      modelAnswerEnglish: "O I (Dhrutam, Laghu)."
    },
    {
      id: "wq17",
      topicId: "topic4",
      questionTamil: "திரிபுட தாளத்தின் அங்க அடையாளத்தை எழுதுக.",
      questionEnglish: "Write the anga symbols of Triputa Thalam.",
      hint: "லகு, த்ருதம், த்ருதம்",
      acceptableAnswers: [
        "I O O",
        "IOO",
        "I, O, O",
        "i o o"
      ],
      modelAnswerTamil: "I O O (லகு, த்ருதம், த்ருதம்).",
      modelAnswerEnglish: "I O O (Laghu, Dhrutam, Dhrutam)."
    },
    {
      id: "wq18",
      topicId: "topic4",
      questionTamil: "துருவ தாளத்தின் அங்க அடையாளத்தை எழுதுக.",
      questionEnglish: "Write the anga symbols of Dhruva Thalam.",
      hint: "லகு, த்ருதம், லகு, லகு",
      acceptableAnswers: [
        "I O I I",
        "IOII",
        "I, O, I, I",
        "i o i i"
      ],
      modelAnswerTamil: "I O I I (லகு, த்ருதம், லகு, லகு).",
      modelAnswerEnglish: "I O I I (Laghu, Dhrutam, Laghu, Laghu)."
    },
    {
      id: "wq19",
      topicId: "topic4",
      questionTamil: "ஜம்பை தாளத்தின் அங்க அடையாளத்தை எழுதுக.",
      questionEnglish: "Write the anga symbols of Jhampa Thalam.",
      hint: "லகு, அனுத்ருதம், த்ருதம்",
      acceptableAnswers: [
        "I U O",
        "IUO",
        "I, U, O",
        "i u o"
      ],
      modelAnswerTamil: "I U O (லகு, அனுத்ருதம், த்ருதம்).",
      modelAnswerEnglish: "I U O (Laghu, Anudhrutam, Dhrutam)."
    },
    {
      id: "wq20",
      topicId: "topic5",
      questionTamil: "5 ஜாதிகளின் பெயர்களையும் வரிசையாக எழுதுக.",
      questionEnglish: "Write the names of the 5 Jathis in order.",
      hint: "திஸ்ரம், சதுரஸ்ரம், கண்டம், மிஸ்ரம், சங்கீர்ணம்",
      acceptableAnswers: [
        "திஸ்ரம் சதுரஸ்ரம் கண்டம் மிஸ்ரம் சங்கீர்ணம்",
        "திஸ்ர சதுரஸ்ர கண்ட மிஸ்ர சங்கீர்ண",
        "tisra chaturasra khanda misra sankeerna",
        "tisram chaturasram khandam misram sankeernam"
      ],
      modelAnswerTamil: "1) திஸ்ரம் (3), 2) சதுரஸ்ரம் (4), 3) கண்டம் (5), 4) மிஸ்ரம் (7), 5) சங்கீர்ணம் (9).",
      modelAnswerEnglish: "Tisra (3), Chaturasra (4), Khanda (5), Misra (7), Sankeerna (9)."
    },
    {
      id: "wq21",
      topicId: "topic5",
      questionTamil: "ஆதி தாளத்தின் தாள அமைப்பையும் மொத்த அக்ஷரங்களையும் எழுதுக.",
      questionEnglish: "Write the anga structure and total aksharas of Adi Thalam.",
      hint: "I4 O O = 4 + 2 + 2",
      acceptableAnswers: [
        "8",
        "8 அக்ஷரங்கள்",
        "I4 O O = 8",
        "4 + 2 + 2 = 8",
        "8 aksharas"
      ],
      modelAnswerTamil: "I₄ O O = 4 + 2 + 2 = 8 அக்ஷரங்கள் (சதுரஸ்ர ஜாதி திரிபுட தாளம்).",
      modelAnswerEnglish: "I₄ O O = 4 + 2 + 2 = 8 aksharas (Chaturasra Jathi Triputa Thalam)."
    },
    {
      id: "wq22",
      topicId: "topic6",
      questionTamil: "சங்கீதக் குறிப்பில் கமா (,) மற்றும் செமிகோலன் (;) எவற்றைக் குறிக்கும்?",
      questionEnglish: "What do comma (,) and semicolon (;) indicate in Carnatic notation?",
      hint: "1 மாத்திரை மற்றும் 2 மாத்திரை நீடிப்பு",
      acceptableAnswers: [
        "1 மாத்திரை 2 மாத்திரை",
        "1 அக்ஷரம் 2 அக்ஷரம்",
        "1 மாத்திரை நீடிப்பு 2 மாத்திரை நீடிப்பு",
        "1 akshara 2 aksharas",
        "1 matra 2 matras"
      ],
      modelAnswerTamil: "கமா (,) = 1 மாத்திரை நீடிப்பு; செமிகோலன் (;) = 2 மாத்திரைகள் நீடிப்பு.",
      modelAnswerEnglish: "Comma (,) = 1 akshara rest/elongation; Semicolon (;) = 2 aksharas rest/elongation."
    }
  ],

  // ==========================================
  // FULL TRIAL EXAM PAPERS (மாதிரிப் பரீட்சை வினாத்தாள்கள்)
  // Structured authentic 100-mark paper for Grade 2
  // ==========================================
  trialExams: [
    {
      id: "exam1",
      titleTamil: "மாதிரிப் பரீட்சை - 1 (Trial Exam 1)",
      titleEnglish: "Model Examination Paper - Grade 2 (100 Marks)",
      durationMinutes: 30,
      totalMarks: 100,
      sections: [
        {
          id: "secA",
          titleTamil: "பகுதி 'அ' - பலவுள் தெரிவு வினாக்கள் (10 × 2 = 20 புள்ளிகள்)",
          titleEnglish: "Section A - Multiple Choice Questions (10 × 2 = 20 Marks)",
          type: "mcq",
          questionIds: ["mcq1", "mcq3", "mcq4", "mcq6", "mcq9", "mcq11", "mcq15", "mcq18", "mcq20", "mcq27"]
        },
        {
          id: "secB",
          titleTamil: "பகுதி 'ஆ' - கோடிட்ட இடங்களை நிரப்புக (10 × 2 = 20 புள்ளிகள்)",
          titleEnglish: "Section B - Fill in the Blanks (10 × 2 = 20 Marks)",
          type: "fillBlanks",
          questions: [
            {
              id: "fb1",
              questionTamil: "'ஸ்ருதி மாதா, லய _________'",
              questionEnglish: "'Sruti Mata, Laya _________'",
              answer: "பிதா",
              translit: "Pitha"
            },
            {
              id: "fb2",
              questionTamil: "ஷட்ஜம் (ஸ) என்ற ஸ்வரத்தின் தமிழ்ப் பெயர் _________ ஆகும்.",
              questionEnglish: "The Tamil name for Shadjam (Sa) is _________.",
              answer: "குரல்",
              translit: "Kural"
            },
            {
              id: "fb3",
              questionTamil: "பஞ்சமம் (ப) என்ற ஸ்வரத்தின் தமிழ்ப் பெயர் _________ ஆகும்.",
              questionEnglish: "The Tamil name for Panchamam (Pa) is _________.",
              answer: "இளி",
              translit: "Ili"
            },
            {
              id: "fb4",
              questionTamil: "மாறாத ப்ரக்ருதி ஸ்வரங்கள் _________ மற்றும் _________ ஆகும்.",
              questionEnglish: "The two invariant Prakruti swaras are _________ and _________.",
              answer: "ஸ, ப",
              translit: "Sa, Pa"
            },
            {
              id: "fb5",
              questionTamil: "ரூபக தாளத்தின் அங்கக் குறியீடு _________ ஆகும்.",
              questionEnglish: "The anga symbol for Rupaka Thalam is _________.",
              answer: "O I",
              translit: "O I"
            },
            {
              id: "fb6",
              questionTamil: "த்ருதத்தின் கால அளவு _________ அக்ஷரங்கள்.",
              questionEnglish: "The duration of a Dhrutam is _________ aksharas.",
              answer: "2",
              translit: "2"
            },
            {
              id: "fb7",
              questionTamil: "கண்ட ஜாதியில் லகுவின் அக்ஷர எண்ணிக்கை _________.",
              questionEnglish: "The akshara count of Laghu in Khanda Jathi is _________.",
              answer: "5",
              translit: "5"
            },
            {
              id: "fb8",
              questionTamil: "7 தாளங்களும் 5 ஜாதிகளினால் பெருகி மொத்தம் _________ தாளங்கள் உருவாகின்றன.",
              questionEnglish: "The 7 talas multiplied by 5 jathis yield _________ talas.",
              answer: "35",
              translit: "35"
            },
            {
              id: "fb9",
              questionTamil: "சங்கீதக் குறிப்பில் செமிகோலன் (;) என்பது _________ மாத்திரை நீடிப்பைக் குறிக்கும்.",
              questionEnglish: "In musical notation, a semicolon (;) indicates a rest of _________ matras.",
              answer: "2",
              translit: "2"
            },
            {
              id: "fb10",
              questionTamil: "ஸ்வரத்திற்கு மேலே ஒரு புள்ளி வைத்தால் அது _________ ஸ்தாயியைக் குறிக்கும்.",
              questionEnglish: "A dot placed above a swara indicates _________ Sthayi.",
              answer: "தார",
              translit: "Thaara"
            }
          ]
        },
        {
          id: "secC",
          titleTamil: "பகுதி 'இ' - பொருத்துக (10 × 1 = 10 புள்ளிகள்)",
          titleEnglish: "Section C - Match the Following (10 × 1 = 10 Marks)",
          type: "match",
          pairs: [
            { left: "ஸ (ஷட்ஜம்)", right: "குரல் (Kural)" },
            { left: "ரி (ரிஷபம்)", right: "துத்தம் (Thuttham)" },
            { left: "க (காந்தாரம்)", right: "கைக்கிளை (Kaikkizhai)" },
            { left: "ம (மத்யமம்)", right: "உழை (Uzhai)" },
            { left: "ப (பஞ்சமம்)", right: "இளி (Ili)" },
            { left: "த (தைவதம்)", right: "விளரி (Vilari)" },
            { left: "நி (நிஷாதம்)", right: "தாரம் (Thaaram)" },
            { left: "அனுத்ருதம்", right: "U (1 அக்ஷரம்)" },
            { left: "த்ருதம்", right: "O (2 அக்ஷரங்கள்)" },
            { left: "திஸ்ர ஜாதி லகு", right: "I₃ (3 அக்ஷரங்கள்)" }
          ]
        },
        {
          id: "secD",
          titleTamil: "பகுதி 'ஈ' - தாள அக்ஷரக் கணக்கீடுகள் (5 × 4 = 20 புள்ளிகள்)",
          titleEnglish: "Section D - Tala Akshara Calculations (5 × 4 = 20 Marks)",
          type: "math",
          problems: [
            {
              questionTamil: "சதுரஸ்ர ஜாதி திரிபுட தாளம் (ஆதி தாளம்) = ?",
              questionEnglish: "Calculate aksharas for Chaturasra Jathi Triputa Thalam (Adi Thalam):",
              formula: "I₄ + O + O = 4 + 2 + 2",
              answer: "8",
              explanationTamil: "லகு(4) + த்ருதம்(2) + த்ருதம்(2) = 8 அக்ஷரங்கள்"
            },
            {
              questionTamil: "திஸ்ர ஜாதி ஏக தாளம் = ?",
              questionEnglish: "Calculate aksharas for Tisra Jathi Eka Thalam:",
              formula: "I₃ = 3",
              answer: "3",
              explanationTamil: "லகு மட்டும் = 3 அக்ஷரங்கள்"
            },
            {
              questionTamil: "சதுரஸ்ர ஜாதி ரூபக தாளம் = ?",
              questionEnglish: "Calculate aksharas for Chaturasra Jathi Rupaka Thalam:",
              formula: "O + I₄ = 2 + 4",
              answer: "6",
              explanationTamil: "த்ருதம்(2) + லகு(4) = 6 அக்ஷரங்கள்"
            },
            {
              questionTamil: "மிஸ்ர ஜாதி ஜம்பை தாளம் = ?",
              questionEnglish: "Calculate aksharas for Misra Jathi Jhampa Thalam:",
              formula: "I₇ + U + O = 7 + 1 + 2",
              answer: "10",
              explanationTamil: "லகு(7) + அனுத்ருதம்(1) + த்ருதம்(2) = 10 அக்ஷரங்கள்"
            },
            {
              questionTamil: "கண்ட ஜாதி அட தாளம் = ?",
              questionEnglish: "Calculate aksharas for Khanda Jathi Ata Thalam:",
              formula: "I₅ + I₅ + O + O = 5 + 5 + 2 + 2",
              answer: "14",
              explanationTamil: "லகு(5) + லகு(5) + த்ருதம்(2) + த்ருதம்(2) = 14 அக்ஷரங்கள்"
            }
          ]
        },
        {
          id: "secE",
          titleTamil: "பகுதி 'உ' - சிறு வினாக்களுக்கு விடையளித்தல் (6 × 5 = 30 புள்ளிகள்)",
          titleEnglish: "Section E - Short Answer Explanations (6 × 5 = 30 Marks)",
          type: "essay",
          questions: [
            {
              id: "sq1",
              questionTamil: "1. 'சங்கீதம்' வரைவிலக்கணம் தருக. அதில் உள்ள மூன்று கலைகள் யாவை?",
              questionEnglish: "Define 'Sangeetham' and state the three fine arts in it.",
              rubric: [
                "இன்பம் தரும் ஒழுங்கான ஒலி என்ற வரைவிலக்கணம் (2 புள்ளிகள்)",
                "கீதம் (பாடல்), வாத்தியம் (கருவி), நிருத்தம் (நடனம்) என்ற மூன்று கலைகள் (3 புள்ளிகள்)"
              ],
              modelAnswerTamil: "செவிக்கும் மனதுக்கும் இன்பம் தரும் ஒழுங்கான இனிமையான ஒலி சங்கீதம் எனப்படும். சங்கீதத்தில் கீதம் (பாடல்), வாத்தியம் (இசைக்கருவி), நிருத்தம் (நடனம்) ஆகிய மூன்று கலைகள் அடங்கியுள்ளன."
            },
            {
              id: "sq2",
              questionTamil: "2. நாதம் என்றால் என்ன? அதன் இரண்டு வகைகளையும் விளக்குக.",
              questionEnglish: "What is Naadham? Explain its two types.",
              rubric: [
                "நாதம் வரைவிலக்கணம் & தோற்றம் (பிராணன் + அக்னி) (2 புள்ளிகள்)",
                "ஆஹத நாதம் விளக்கம் (மனித முயற்சியால் பிறப்பது) (1.5 புள்ளிகள்)",
                "அனாஹத நாதம் விளக்கம் (இயற்கையாய் ஒலிப்பது, யோகிகள் கேட்பது) (1.5 புள்ளிகள்)"
              ],
              modelAnswerTamil: "சங்கீதத்திற்கு அடிப்படையான இனிய ஒலி நாதம் ஆகும். இது பிராணன் மற்றும் அக்னி சேர்க்கையால் பிறக்கிறது.\n1) ஆஹத நாதம்: மனித முயற்சியினால் எழுப்பப்பட்டு காதால் கேட்கக்கூடிய ஒலி.\n2) அனாஹத நாதம்: எவ்வித முயற்சியுமின்றி இயற்கையாய் ஒலித்து யோகிகளால் மட்டுமே கேட்கக்கூடிய ஒலி."
            },
            {
              id: "sq3",
              questionTamil: "3. ஆரோகணம், அவரோகணம் வேறுபடுத்துக.",
              questionEnglish: "Differentiate Arohanam and Avarohanam.",
              rubric: [
                "ஆரோகணம் - கீழ் ஸ்தாயியிலிருந்து மேல் நோக்கி ஏறுவது (2.5 புள்ளிகள்)",
                "அவரோகணம் - மேல் ஸ்தாயியிலிருந்து கீழ் நோக்கி இறங்குவது (2.5 புள்ளிகள்)"
              ],
              modelAnswerTamil: "• ஆரோகணம்: ஸ்வரங்கள் கீழ் ஸ்தாயியிலிருந்து மேல் நோக்கி ஏறிச் செல்லும் ஒழுங்கான வரிசை ஆகும் (எ.கா: ஸ ரி க ம ப த நி ஸ்).\n• அவரோகணம்: ஸ்வரங்கள் மேல் ஸ்தாயியிலிருந்து கீழ் நோக்கி இறங்கி வரும் ஒழுங்கான வரிசை ஆகும் (எ.கா: ஸ் நி த ப ம க ரி ஸ)."
            },
            {
              id: "sq4",
              questionTamil: "4. ப்ரக்ருதி மற்றும் விக்ருதி ஸ்வரங்களை விளக்குக.",
              questionEnglish: "Explain Prakruti and Vikruti Swaras.",
              rubric: [
                "ப்ரக்ருதி ஸ்வரங்கள் வரைவிலக்கணம் + ஸ, ப (2.5 புள்ளிகள்)",
                "விக்ருதி ஸ்வரங்கள் வரைவிலக்கணம் + ரி, க, ம, த, நி (2.5 புள்ளிகள்)"
              ],
              modelAnswerTamil: "• ப்ரக்ருதி ஸ்வரங்கள் (அசல ஸ்வரங்கள்): எவ்வித மாற்றமும் இல்லாத மாறாத ஸ்வரங்கள். அவை இரண்டு: ஷட்ஜம் (ஸ), பஞ்சமம் (ப).\n• விக்ருதி ஸ்வரங்கள் (சல ஸ்வரங்கள்): ஸ்வரஸ்தான வேறுபாடுகள் உடைய மாற்றமுள்ள ஸ்வரங்கள். அவை ஐந்து: ரிஷபம் (ரி), காந்தாரம் (க), மத்யமம் (ம), தைவதம் (த), நிஷாதம் (நி)."
            },
            {
              id: "sq5",
              questionTamil: "5. ஸப்த தாளங்களின் பெயர்களையும் அவற்றின் அங்க அடையாளங்களையும் எழுதுக.",
              questionEnglish: "Write the names and anga symbols of the 7 Talas.",
              rubric: [
                "7 தாளங்களின் பெயர்கள் (2.5 புள்ளிகள்)",
                "அவற்றின் அங்கக் குறியீடுகள் (I O I I, I O I, O I, I U O, I O O, I I O O, I) (2.5 புள்ளிகள்)"
              ],
              modelAnswerTamil: "1. துருவ தாளம்: I O I I\n2. மத்ய தாளம்: I O I\n3. ரூபக தாளம்: O I\n4. ஜம்பை தாளம்: I U O\n5. திரிபுட தாளம்: I O O\n6. அட தாளம்: I I O O\n7. ஏக தாளம்: I"
            },
            {
              id: "sq6",
              questionTamil: "6. சங்கீதக் குறிப்புகளில் பயன்படுத்தப்படும் ஸ்தாயி மற்றும் காலக் குறிகளை விளக்குக.",
              questionEnglish: "Explain the notation used for Sthayis and Speeds (Kaalam).",
              rubric: [
                "மத்ய, தார, மந்த்ர ஸ்தாயி குறிகள் (மேல் புள்ளி, கீழ் புள்ளி) (2.5 புள்ளிகள்)",
                "முதற்காலம், இரண்டாம் காலம், மூன்றாம் காலம் குறிகள் (மேற்கோடு) (2.5 புள்ளிகள்)"
              ],
              modelAnswerTamil: "• ஸ்தாயிக் குறிகள்:\n  - மத்ய ஸ்தாயி: புள்ளி இல்லை (ஸ ரி க)\n  - தார ஸ்தாயி: ஸ்வரத்தின் மேல் புள்ளி (ஸ̇ ரி̇)\n  - மந்த்ர ஸ்தாயி: ஸ்வரத்திற்குக் கீழே புள்ளி (ஸ̣ ரி̣)\n• காலக் குறிகள்:\n  - முதற்காலம்: மேற்கோடு இல்லை (ஸ ரி)\n  - இரண்டாம் காலம்: ஒற்றை மேற்கோடு (͞ஸ͞ரி)\n  - மூன்றாம் காலம்: இரட்டை மேற்கோடு (̿ஸ̿ரி)"
            }
          ]
        }
      ]
    }
  ]
};

// Expose globally
if (typeof window !== "undefined") {
  window.SYLLABUS_DATA = SYLLABUS_DATA;
}
