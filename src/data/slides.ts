import { SlideData } from '../types';
import { TOPIC_QUESTIONS } from './topicQuestions';

export const FOUNDER_IMAGE_URL = 'https://i.ibb.co/0VDH0fXz/Whats-App-Image-2026-09-22-at-1-19-53-PM.jpg';
export const LOGO_IMAGE_URL = 'https://i.ibb.co/B2y8q6nR/Whats-App-Image-2026-09-22-at-1-19-55-PM.jpg';

const RAW_SLIDES: SlideData[] = [
  // =========================================================================
  // DAY 1: SYSTEM-AH PURINJIKUVOM (Slides 1 to 44)
  // =========================================================================

  // SECTION 1: VIMAL ARIMUGAM — 10 MINUTES
  {
    id: 1,
    day: 1,
    section: 'opening',
    sectionTitle: 'Aarambha Keynote',
    title: '2-Day Cyber Security Webinar',
    subtitle: 'System-ah Purinjikonga. Security Researcher Madhiri Yosinga.',
    type: 'cover',
    content: {
      academyName: 'EV CYBER ACADEMY',
      tagline: 'Building Cybersecurity Engineers',
      founderName: 'Vimal',
      founderRole: 'Founder & CEO',
      schedule: 'Day 1 & Day 2 Mulumaana Masterclass'
    },
    presenterNotes: [
      'Ellaraiyum EV Cyber Academy 2-Day Cyber Security Webinar-ku anbudan varaverkavum.',
      'Aarambathulaye sollanum: idhu ground zero-la irundhu aarambikkira interactive masterclass.',
      'Thelivaa sollunga: "Namma nokkam verum tool operators uruvaakkuradhu illa, first principles therinja unmaiyana Cybersecurity Engineers-ah uruvaakkuradhu."'
    ]
  },
  {
    id: 2,
    day: 1,
    section: 'opening',
    sectionTitle: 'Payapadatheenga — Basic-la Irundhu',
    title: 'Aarambikkum Munnadi',
    subtitle: 'Munnadi coding-o hacking-o theriyanum nu avasiyam illa — Zero-la irundhu build pannuvom',
    type: 'cards',
    content: {
      pillars: [
        { name: 'Prior Knowledge Thevai Illai', desc: 'Munnadiye coding, networking illa hacking tools theriyanum-nu avasiyam illa.' },
        { name: 'Beginner-ku Romba Easy', desc: 'Ovvoru technical concept-um real-life udhaarangal (analogies) vachu solli tharuvom.' },
        { name: 'Kelvigal Kelunga', desc: 'Webinar chat-la tharalama kelvi kelunga. Aaraaychi arivu thaan researcher-oda balam.' },
        { name: 'ZERO-la Irundhu Aarambam', desc: 'Computer epdi vela seiyudhu nu ungalukku puriyura maadhiri adippadaila irundhu katrutharuvom.' }
      ]
    },
    presenterNotes: [
      'Beginners-ku nambikkai kudunga. Neraya per "cybersecurity" nu sonnale bayapaduvanga.',
      'Avangalukku sollunga: "Unga kitta phone use panna therinjaalum, browser open panna therinjaalum podhum, neenga sariyaana idathula irukkeenga."',
      'Session mulukka chat-la interactive-ah kelvigal keka encourage pannunga.'
    ]
  },
  {
    id: 3,
    day: 1,
    section: 'opening',
    sectionTitle: 'Speaker Profile',
    title: 'Yaaru Indha Vimal?',
    subtitle: 'Founder & CEO — EV CYBER ACADEMY',
    type: 'founder',
    content: {
      name: 'Vimal',
      role: 'Founder & CEO',
      company: 'EV CYBER ACADEMY',
      journeyHighlights: [
        'Computers matrum networks ullukulla epdi velai seiyudhu nu thedi thedi kathukitta aarambam',
        'Verum buttons amukki tool use panradhukkum, unmaiyana engineering arivukkum irukra gap-ah udaikka EV Cyber Academy uruvaakkinaar',
        'Adutha generation cybersecurity defenders matrum researchers-ah uruvaakradhula periya passion'
      ]
    },
    presenterNotes: [
      'Unga personal journey-ah 2-3 minutes-la sollunga. Real-ah, unmaiyoda irukatum.',
      'EV Cyber Academy yen aarambichaanganu sollunga: neraya courses computer epdi vela seiyudhunu sollama verum Kali commands memorize panna vaikiraanga.',
      'Vision set pannunga: "Neenga oru true cybersecurity engineer-ah yosikka naan ungalukku kathuthara poren."'
    ]
  },
  {
    id: 4,
    day: 1,
    section: 'opening',
    sectionTitle: 'Periya Paarvai (The Big Picture)',
    title: 'Naama Yen Inga Vandhirukkom?',
    subtitle: 'Cybersecurity verum "hacking" mattum illa — adhoda scope romba perusu',
    type: 'cards',
    content: {
      headline: 'Digital ulagathula irukra ellaathayum purinjikittu paadhukaakkuradhu thaan Cybersecurity:',
      pillars: [
        { name: 'Computers', desc: 'Software-ah run panra physical machines matrum operating systems.' },
        { name: 'Networks', desc: 'Ulagathula irukra computers-ah inaikkura paarkka mudiyaatha digital highways.' },
        { name: 'Applications', desc: 'Makkal dhinamum use panra software, websites matrum mobile apps.' },
        { name: 'Data', desc: 'System kulla store aagi irukra ragaasiya personal, financial matrum business records.' },
        { name: 'People (Manushanga)', desc: 'Technology-ah use panra users matrum company aatkal.' },
        { name: 'Infrastructure', desc: 'Namma naattin power grids, cloud servers matrum communication towers.' }
      ]
    },
    presenterNotes: [
      'Dark room-la hoodie pottu okkanthu type panra cinema hacker myth-ah udainga.',
      'Sollunga: "Indha aaru thoonkalaiyum paadhukaakkuradhu thaan unmaiyana cybersecurity engineer-oda velai."'
    ]
  },
  {
    id: 5,
    day: 1,
    section: 'opening',
    sectionTitle: 'Two-Day Agenda',
    title: 'Indha 2 Naatkalil Enna Nadakkum?',
    subtitle: 'Day 1 System adippadai — Day 2 Operating System kulla deep dive',
    type: 'flow',
    content: {
      flowSteps: [
        { step: 'DAY 1', title: 'SYSTEM-AH PURINJIKUVOM', desc: 'Computer architecture, CPU, Memory, Storage, Process isolation matrum Client-Server adippadaigal.' },
        { step: 'NIGHT 1', title: 'CONCEPTS SYNTHESIS', desc: 'Day 1 topics-ah mind map panni adutha naalaikku ready aaguradhu.' },
        { step: 'DAY 2', title: 'OPERATING SYSTEM ULLA POGALAM', desc: 'Kernel space, Privilege Rings, System Calls, File Descriptors matrum Security Researcher mindset.' }
      ]
    },
    presenterNotes: [
      '2-day map-ah thelivaa kaatunga.',
      'Sollunga: "Day 1-la computer epdi vela seiyudhu nu purinjikaama, Day 2-la Kernel pathi pesina ungalukku puriyaadhu. So Day 1 romba mukkiyam!"'
    ]
  },

  // SECTION 2: CYBERSECURITY ARIMUGAM — 20 MINUTES
  {
    id: 6,
    day: 1,
    section: 'intro-mental-models',
    sectionTitle: 'Adippadai Definition',
    title: 'Mudhal Kelvi: Cybersecurity-na Enna?',
    subtitle: 'Cinema-la kaatra hoodie hacker myth-ah thandi...',
    type: 'concept-reveal',
    content: {
      question: 'Konjam Yosinga: Unga daily life-la cybersecurity unmaiyile edhai ellam paadhukaakudhu?',
      analogy: 'Veetta paadhukaakkura madhiri: Kathavai poottuvom, jannalai mooduvom, CCTV vaipom, nagai-panatha safe-ah veppom.',
      explanation: 'Cybersecurity-ngradhu namma computers, networks, software matrum data-va permission illadha aatkal thirudaamalum, azhikaamalum paathukaakra kalai.',
      technicalTerm: 'Information Security (InfoSec) & Digital Defense',
      cyberConnection: 'Thirudanga eppovum poottaadha kathavu (Open Ports) illa udanja jannal (Vulnerabilities) thedi thaan varuvaanga.'
    },
    presenterNotes: [
      'Chat-la kelunga: "Cybersecurity-nu sonna ungalukku mudhalla enna nyabagam varudhu?"',
      'Pala per "hacking" illa "password" nu solluvaanga. House analogy vachu avanga paarvaiya perisaakkunga.'
    ]
  },
  {
    id: 7,
    day: 1,
    section: 'intro-mental-models',
    sectionTitle: 'Mental Model 01',
    title: 'Veettu Udhaaranam (The House Analogy)',
    subtitle: 'Physical veetta paadhukaakradhum digital system-ah paadhukaakradhum onnu thaan',
    type: 'concept-reveal',
    content: {
      question: 'Oru veetla ethaavathu ottaiyo illa udanja pootto irundhaa thirudan enna pannuvaan?',
      analogy: 'Kathavu munnadi poottu pottutu, pin pakkathu jannalai thiranthu vacha thirudan ulla vandhuduvaan.',
      explanation: 'Digital security-layum idhey thaan: Firewall pottutu, oru open port-aiyo patch pannadha bug-aiyo vittu vecha hacker ulla nuzhainjuduvaan.',
      technicalTerm: 'Attack Surface & Entry Points (Thakkudhal Idhangal)',
      cyberConnection: 'Unmaiyana security engineer veettin ella pakkathaiyum (Ports, Services, Apps) sothithu muduvar.'
    },
    presenterNotes: [
      'House analogy-ah azhagaa explain pannunga.',
      'Doors and windows = Ports and network services. Lock = Authentication / Firewalls.'
    ]
  },
  {
    id: 8,
    day: 1,
    section: 'cybersecurity',
    sectionTitle: 'Digital Assets',
    title: 'Naama Ennathellam Paadhukaakkirom?',
    subtitle: 'Ovvoru company-layum irukra 6 mukkiya digital sothukkal (Assets)',
    type: 'cards',
    content: {
      assets: [
        { title: 'SYSTEM', icon: 'server', tag: 'Asset 01', desc: 'Workload-ah run panra physical computers, laptops matrum servers.' },
        { title: 'NETWORK', icon: 'network', tag: 'Asset 02', desc: 'Devices naduvula data-va kondu pora routers matrum cables.' },
        { title: 'APPLICATION', icon: 'code', tag: 'Asset 03', desc: 'Makkal interact panra software, web browsers matrum mobile apps.' },
        { title: 'DATA', icon: 'database', tag: 'Asset 04', desc: 'System kulla store aagi irukra passwords, bank records, photos matrum accounts.' },
        { title: 'USER (Manithargal)', icon: 'user', tag: 'Asset 05', desc: 'Emaathapatta koodiya illa impersonate panna koodiya manushanga.' },
        { title: 'INFRASTRUCTURE', icon: 'cloud', tag: 'Asset 06', desc: 'Ullukulla irukra cloud services, data centers matrum power systems.' }
      ]
    },
    presenterNotes: [
      '6 cards-aiyum explain pannunga. DATA thaan attackers-oda ultimate target nu azhuthama sollunga.',
      'USER (Manushanga) thaan phishing vazhiya easy-ah target aaguraanga nu kooda sollunga.'
    ]
  },
  {
    id: 9,
    day: 1,
    section: 'cybersecurity',
    sectionTitle: 'Real-World Architecture',
    title: 'Oru Simple Banking Udhaaranam',
    subtitle: 'Unga viral thodudhalla irundhu bank ledger record varaikkum journey',
    type: 'architecture',
    totalSteps: 2,
    content: {
      layers: [
        { name: '1. Neenga (Customer)', role: 'Smartphone-la "Transfer ₹1000" tap panreenga', sub: 'Human Input' },
        { name: '2. Mobile App', role: 'Transfer request-ah pack panni anuppudhu', sub: 'Client Application' },
        { name: '3. Internet Connection', role: 'Cell tower / Wi-Fi vazhiya encrypted signal anuppudhu', sub: 'Network Transit' },
        { name: '4. Bank Server', role: 'Service thara 24/7 kaathirukkum powerful computer', sub: 'Server (Service Provider)' },
        { name: '5. Bank Application', role: 'Unga balance check panni transaction run pannudhu', sub: 'Backend Software' },
        { name: '6. Bank Database', role: 'Accounts matrum ledger records-ah pathirama store pannudhu', sub: 'Database (Vault)' }
      ],
      coreQuestion: 'Indha rendu technical terms-ah kavanikkavum: SERVER matrum DATABASE',
      coreAnswer: 'SERVER = Mathavangalukku services thara kaathirukra computer. DATABASE = Information-ah olungupaduthi pathukakkum digital petti.'
    },
    presenterNotes: [
      'Server-na monitor illadha computer nu sollunga, adhu secure building-la irundhu requests-ku badhil sollum.',
      'Database-na bank-oda safe vault madhiri records vachirukkum nu solli thaanga.'
    ]
  },
  {
    id: 10,
    day: 1,
    section: 'cybersecurity',
    sectionTitle: 'Interactive Reflection',
    title: 'Idhula Security Enga Varum?',
    subtitle: 'Path-ah paathu yosinga: Idhula security enga thevaipatta koodum?',
    type: 'interactive-pipeline',
    totalSteps: 2,
    content: {
      initialQuestion: 'Banking chain-ah paarunga: Phone → Wi-Fi → App → Server → Database → Data. Idhula security enga thevai?',
      revealPrompt: 'Security researcher paarvaiya paarka Step-ah click pannunga',
      options: ['Phone-la mattum thaana?', 'Password screen-la mattum thaana?', 'Bank server-la mattum thaana?'],
      revealAnswer: 'Indha chain-oda OVVRORU SINGLE STEP-LAYUM Security Thevai!',
      explanation: 'Wi-Fi safe illana data-va thirudidalaam. Phone-la virus irundha password log aaidum. Server-la flaw irundha database motthama leak aaidum. Security end-to-end irukkanum.'
    },
    presenterNotes: [
      'Audience kitta kelunga: "Idhula security enga varum?"',
      '5 seconds yosikka vidunga.',
      'Aprom reveal pannunga: "Ovvoru link-layum thevai! Oru chain-oda balam adhoda weakest link-la thaan irukku."'
    ]
  },

  // SECTION 3: ETHICAL HACKING — 15 MINUTES
  {
    id: 11,
    day: 1,
    section: 'ethical-hacking',
    sectionTitle: 'Legal & Sattam Sampanthapattadhu',
    title: '"Hacking"-na Enna Artham?',
    subtitle: 'Oru system-la weakness kandupidicha udane adhu criminal velaiya?',
    type: 'concept-reveal',
    totalSteps: 3,
    content: {
      question: 'Oru system-la irukra ottaiyai/kuraipaatta kandupidipathe illegal-a?',
      questionContext: 'Digital flaw kandupidithaale avanga thirudana?',
      simpleExplanation: 'Kandippa Illai! Ottaiyai kandupidippadhu thappu illai. Permission matrum Intent (nokkam) thaan adhu chattapoorvamaanaadha nu mudivu pannudhu.',
      realLifeAnalogy: 'Veettu lock repair-ah locksmith solli tharuvar adhu udhavi. Aana rathiriyila kettu ulla nuzhaintha adhu thiruttu.',
      technicalTerm: 'CONTEXT & AUTHORIZATION (Anumathi & Nokkam)',
      technicalSubtitle: 'Legal security-kum cyber crime-kum naduvula irukra 4 mukkiya thoonkal',
      bulletPoints: [
        'Authorization: Ungalukku ezhuthuppoorvamaana permission irukka?',
        'Intent: Neenga paadhukaakka paakreengala illa thiruda paakreengala?',
        'Action: Flaw-ah company-kitta solreengala illa kaasu paakka misuse panreengala?',
        'Scope: Solla patta ellai kulla mattum thaan sothitheengala?'
      ]
    },
    presenterNotes: [
      'Ethical boundaries-ah aarambathulaye clear-ah sollunga.',
      'Sollunga: "Permission illama sothithaal adhu crime. Professional engineer eppovum written permission odu thaan test pannuvaar."'
    ]
  },
  {
    id: 12,
    day: 1,
    section: 'ethical-hacking',
    sectionTitle: 'Professional Testing',
    title: 'Ethical Hacking-na Enna?',
    subtitle: 'Thirudanga kandupidippatharku munnadiye kuraigalai kandupidithu sari seivadhu',
    type: 'concept-reveal',
    totalSteps: 3,
    content: {
      question: 'Companies epdi thanga security flaws-ah kettavanga kandupidikurathuku munnadiye therinjikuraanga?',
      questionContext: 'Oru bank thanga lock nallaa vela seiyudhunu epdi confirm pannum?',
      simpleExplanation: 'Nambikkaiyana professional-ah koopitu: "Enga permission odu enga locks-la ottai irukkanu paarunga, kandupidichu sonna naanga fix pannikuvom" nu solvaanga.',
      realLifeAnalogy: 'Pudhu building open panrathuku munnadi Fire safety inspector-ah vachu ellam seriyaa irukkanu check panra madhiri.',
      technicalTerm: 'ETHICAL HACKING (Anumadhiyodu Kuraigalai Kandupidippadhu)',
      technicalSubtitle: 'Defensive security-ah balapadutha offensive methods use panradhu',
      cyberConnection: 'Ethical hackers defenders-ah kaapathurathukaga attacker madhiri yosipaanga. Avanga final output detailed remediation report thaan, data theft illa.'
    },
    presenterNotes: [
      'Ethical hackers offensive tools use pannum defenders nu thelivaa sollunga.',
      '"Permission-odu weakness kandupidithu sari seivadhu" enbadhai highlight pannunga.'
    ]
  },
  {
    id: 13,
    day: 1,
    section: 'ethical-hacking',
    sectionTitle: 'Systematic Methodology',
    title: 'Ethical Hacking Seiyyum Murai',
    subtitle: 'Disciplined, engineering-first approach',
    type: 'flow',
    content: {
      flowSteps: [
        { step: '01', title: 'UNDERSTAND', desc: 'Target system, app matrum network saadhaaranama epdi velai seiyudhu nu padinga.' },
        { step: '02', title: 'ANALYZE', desc: 'Data flows, boundaries, inputs matrum components-ah aaraayunga.' },
        { step: '03', title: 'FIND WEAKNESS', desc: 'Code-la irukra kuraipaadugal illa missing checks-ah kandupidiyunga.' },
        { step: '04', title: 'VALIDATE', desc: 'Antha flaw unmaiyile damage create pannuma nu verify pannunga.' },
        { step: '05', title: 'REPORT', desc: 'Kandupudicha vishayatha steps-odu company engineers-ku thelivaa report pannunga.' },
        { step: '06', title: 'FIX', desc: 'Developers-kooda serndhu antha flaw-ah patch panni system-ah harden pannunga.' }
      ]
    },
    presenterNotes: [
      'Ethical hacker-oda 80% time UNDERSTAND matrum ANALYZE panradhula thaan pogumnu sollunga.',
      'Pudhusaa varavanga udane exploit panna ninaipaanga. Aana system-ah purinjikaama exploit panna mudiyaadhu.'
    ]
  },
  {
    id: 14,
    day: 1,
    section: 'ethical-hacking',
    sectionTitle: 'Mukkiya Vidhiyasasam',
    title: 'Hacker ≠ Tool Operator',
    subtitle: 'Oru tool-ah run panna therinjadhum yaarum engineer aayida mudiyaadhu',
    type: 'quote',
    content: {
      headline: 'Tools verum karuvigal thaan.\\nPurithal (Understanding) thaan unmaiyana Skill.',
      secondaryStatement: 'Nmap command type panna therivatharkkum, network packets enna pannudhunu purinthu kolvatharkkum periya vidhiyasasam irukku.',
      comparison: [
        { role: 'Tool Operator', text: 'YouTube-la paatha terminal command-ah copy-paste pannuvaaru. Oru error vandhaa enna aachunu theriyama muzhipaaru.' },
        { role: 'Security Researcher', text: 'TCP handshakes, ports matrum OS internals purinjikittu velai seivaaru. Avarukku tool verum helper thaan, moolai illai.' }
      ]
    },
    presenterNotes: [
      'Beginners-ku indha mindset shift romba mukkiyam.',
      'Sollunga: "Yaaru venaalum tool download panni command thattalaam. Aana antha packet enna pannudhunu oru engineer-ku mattum thaan theriyum."'
    ]
  },
  {
    id: 15,
    day: 1,
    section: 'ethical-hacking',
    sectionTitle: 'Industry Roles',
    title: 'Cybersecurity-la Enna Roles Irukku?',
    subtitle: 'Cybersecurity landscape-la irukra 5 mukkiya roles',
    type: 'cards',
    content: {
      roles: [
        { focus: 'Chattam Illaadhadhu', title: 'Black Hat', desc: 'Swantham laabathukaaga anubadhiyillaamal systems kulla nuzhaiyum thirudargal.' },
        { focus: 'Chathappoorva Paadhukaappu', title: 'Ethical Hacker', desc: 'Anumadhiyodu kuraigalai kandupidithu thirudargal varum mun thaduppavar.' },
        { focus: 'Corporate Testing', title: 'Penetration Tester', desc: 'Companies-oda overall defensive readiness-ah sothithu arikkai tharubavar.' },
        { focus: 'Crowdsourced Bug Hunting', title: 'Bug Bounty Hunter', desc: 'Public programs-la flaws kandupidithu legal rewards vaanguvar.' },
        { focus: 'Architecture & Engineering', title: 'Security Engineer', desc: 'Firewalls, secure systems matrum unbreakable defenses-ah design panni build pannubavar.' }
      ]
    },
    presenterNotes: [
      'Ovvoru role-kum oru simple line sollunga.',
      'EV Cyber Academy Security Engineers matrum Researchers uruvaakka concentrate pannudhu nu sollunga.'
    ]
  },

  // SECTION 4: SECURITY RESEARCHER MINDSET — 10 MINUTES
  {
    id: 16,
    day: 1,
    section: 'fundamentals',
    sectionTitle: 'Mindset Nilai 1',
    title: 'Level 1: Normal User',
    subtitle: 'Technology-ah surface level-la use panradhu mattum',
    type: 'quote',
    content: {
      headline: '“Work aana podhum.”',
      secondaryStatement: 'Normal user-ku button amukkina result varanumnu mattum thaan thonum.',
      reflection: 'WhatsApp-la "Send" amukkina message pogudhu. Wi-Fi packet, encryption key, RAM memory, server handshake pathi yosikka maataanga. Work aana podhum.'
    },
    presenterNotes: [
      'Chat-la kelunga: "Instagram use pannum pothu backend database pathi yosippeengala?"',
      'Normal user-ku adhu seri, aana security researcher vera madhiri yosikkanum.'
    ]
  },
  {
    id: 17,
    day: 1,
    section: 'fundamentals',
    sectionTitle: 'Mindset Nilai 2',
    title: 'Level 2: The Engineer',
    subtitle: 'Ullukulla mechanism epdi irukku nu aaraaiyum nilai',
    type: 'quote',
    content: {
      headline: '“Idhu epdi velai seiyudhu?”',
      secondaryStatement: 'Oru engineer-ku result pinnaadi irukra code, systems matrum architecture puriyanum.',
      reflection: 'Engineer yosippaar: "Message data enga pogudhu? Entha server receive pannudhu? Database epdi update aagudhu? Entha protocol payload-ah kondu pogudhu?"'
    },
    presenterNotes: [
      'Level 1-la irundhu Level 2 jump-ah explain pannunga.',
      'Engineers systems-ah build pannuvanga. Logic matrum architecture avangalukku theriyum.'
    ]
  },
  {
    id: 18,
    day: 1,
    section: 'fundamentals',
    sectionTitle: 'Mindset Nilai 3',
    title: 'Level 3: The Security Researcher',
    subtitle: 'Edhirpaaraadha inputs koduthu assumptions-ah check panradhu',
    type: 'concept-reveal',
    totalSteps: 3,
    content: {
      question: '“Ella conditions-layum indha system crt-aa thaan velai seiyudhaa?”',
      questionContext: 'Programmer ninaikaadha oru thappana input vandhaa system enna aagum?',
      simpleExplanation: 'Developers ellaa users-um nallavangalaa crt-aa use pannuvaanga nu ninaichi code ezhudhuvanga. Researcher edhirpaaraadha inputs thandhu check pannuvaaru.',
      realLifeAnalogy: 'Oru coin vending machine: Urundaiyaana coin pottal juice tharudhu. Aana oru washer-o, ice katti-o pottal enna aagum?',
      technicalTerm: 'UNEXPECTED INPUT TESTING',
      technicalSubtitle: 'Udhaaranam: Oru online form kekkudhu: "Enter your Age"',
      bulletPoints: [
        'Normal input: "21" (App smooth-aa velai seiyudhu)',
        'Unexpected text: "twenty-one" illa "letters" (Crash aagudha?)',
        'Unexpected number: "-5" illa "99999999" (Logic thappa pogudha?)',
        'Empty input: "" (Database error kaatridudhaa?)'
      ],
      cyberConnection: 'Vulnerabilities eppovum program thappana assumptions vachu inputs-ah check pannama vidumbodhu thaan uruvaagudhu.'
    },
    presenterNotes: [
      '"Age" form udhaaranatha methuvaa explain pannunga. Beginners-ku romba pudikkum.',
      'Researcher koba-pattu udaikka maataaru, logic assumptions-ah test pannuvaaru nu sollunga.'
    ]
  },
  {
    id: 19,
    day: 1,
    section: 'fundamentals',
    sectionTitle: 'Aaraaychi Loop',
    title: 'The Security Mindset Loop',
    subtitle: 'Unmaiyana researchers use panra 5 pazhakkangal',
    type: 'flow',
    content: {
      steps: [
        { label: 'UNDERSTAND', desc: 'Machine, protocol matrum software saadharanama epdi velai seiyudhunu padinga.' },
        { label: 'QUESTION', desc: 'Developers enna ellaam assume panni code eludhirupaanganu kelvi kelunga.' },
        { label: 'TEST', desc: 'Standard illaadha, edge-case inputs kuduthu paarunga.' },
        { label: 'OBSERVE', desc: 'Error messages, delays matrum unexpected outputs-ah kavanama paarkavum.' },
        { label: 'THINK', desc: 'System yen apdi respond pannuchu nu aaraainju kuraigalai thedungaa.' }
      ]
    },
    presenterNotes: [
      'Idhu oru continuous cycle nu sollunga. Web apps, mobile apps, hardware ellaathukkume idhey loop thaan.'
    ]
  },

  // SECTION 5: COMPUTER YEN THEVAI? — 15 MINUTES
  {
    id: 20,
    day: 1,
    section: 'fundamentals',
    sectionTitle: 'Hardware Unmai',
    title: 'Naama Oru App-ah Test Panna Porirom...',
    subtitle: 'Software unmaiyile enga irundhu run aagudhu?',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Oru app run aagum pothu adhu unmaiyile enga irundhu run aagudhu?',
      questionContext: 'Cloud-la kaathula parakkudha, illa physical machine-la run aagudha?',
      simpleExplanation: 'Ovvoru line code, website, mobile app matrum cyber attack ellaame physical hardware silicon chip mela thaan run aagudhu.',
      realLifeAnalogy: 'Current fan-aiyo TV-aiyo run pannum, aana velai seiyya physical copper wires matrum motor thevaipattukonde irukkum.',
      technicalTerm: 'A COMPUTER / PHYSICAL SYSTEM',
      technicalSubtitle: 'Software-ngradhu physical circuits execute panra instructions mattum thaan',
      cyberConnection: 'Physical machine-ah purinjikaama ungalala entha software-aiyum unmaiyaaga paadhukaakka mudiyaadhu.'
    },
    presenterNotes: [
      '"App unmaiyile enga run aagudhu?" nu oru nodi pause pannunga.',
      '"Cloud" nu solradhum vera yaaro vachirukra physical computer thaan nu thelivaa sollunga!'
    ]
  },
  {
    id: 21,
    day: 1,
    section: 'fundamentals',
    sectionTitle: 'Adippadai Definition',
    title: 'Computer-na Unmaiyile Enna?',
    subtitle: 'Universal electronic input-process-output machine',
    type: 'flow',
    content: {
      statement: 'Computer enbadhu input vaangi, process panni, memory-la store panni, output tharugira oru electronic machine.',
      flowSteps: [
        { step: '01', title: 'INPUT', desc: 'Manushanga illa network kitta irundhu signals vaangum (clicks, keys, packets).' },
        { step: '02', title: 'PROCESS', desc: 'Nanosecond vegathula calculations matrum instructions execute pannum.' },
        { step: '03', title: 'STORE', desc: 'Data-va temporary memory (RAM)-la illa permanent storage (SSD)-la save pannum.' },
        { step: '04', title: 'OUTPUT', desc: 'Screen, speaker vazhiya result kaattum illa network packet anuppum.' }
      ]
    },
    presenterNotes: [
      'Input → Process → Output model-ah romba simple-ah vachikonga.',
      'Phone, Smart TV, laptop, microwave ovvoru device-um idhey model thaan nu sollunga.'
    ]
  },
  {
    id: 22,
    day: 1,
    section: 'fundamentals',
    sectionTitle: 'Component Architecture',
    title: 'Computer Kulla Enna Irukku?',
    subtitle: 'Vera vera parts — ovvonnukkum thani thani poruppu',
    type: 'cards',
    content: {
      headline: 'Computer ore oru katta kedayadhu — adhu pala parts serndha oru team:',
      pillars: [
        { name: 'CPU (The Worker)', desc: 'Calculations pottu instructions-ah execute panra main worker processor.' },
        { name: 'RAM (The Desk)', desc: 'Ippo odura apps matrum tasks okkaarura vegamaana temporary working table.' },
        { name: 'STORAGE (The Cupboard)', desc: 'Power off aanaalum files-ah permanent-ah vachirukkum Biro / Cupboard (SSD/HDD).' },
        { name: 'INPUT / OUTPUT (The Senses)', desc: 'Veli ulagathula irundhu signals vaangura matrum tharugira sadhanangal (Mouse, Display).' }
      ]
    },
    presenterNotes: [
      'GHz, PCIe lines nu beginners-ah confuse panna vendam.',
      'Worker (CPU), Desk (RAM), Cupboard (Storage), Senses (I/O) nu simple pergalaiye vachikonga.'
    ]
  },
  {
    id: 23,
    day: 1,
    section: 'fundamentals',
    sectionTitle: 'Software vs Hardware',
    title: 'Application vs Computer',
    subtitle: 'Chrome open panna Chrome-eh computer aayiduma?',
    type: 'comparison',
    content: {
      left: {
        title: 'Application (Software)',
        status: 'Instructions',
        desc: 'Oru specific velaiyai seiyya ezhudhapatta instructions (e.g. Chrome web pages kaattum). Idhuku physical body illa; verum code thaan.'
      },
      right: {
        title: 'The Computer (Hardware)',
        status: 'Physical Resources',
        desc: 'Electrical power, memory, processor time matrum network chips tharugira physical machine.'
      },
      takeaway: 'Chrome enga run aagudhu? Computer mela. Chrome computer resources-ah kadan vaangi strict rules-kulla operate pannudhu.'
    },
    presenterNotes: [
      'Class kitta kelunga: "Chrome open panna Chrome computer aayiduma?"',
      'Chrome oru virundhinar (guest) madhiri computer resources mela run aagudhu nu sollunga.'
    ]
  },
  {
    id: 24,
    day: 1,
    section: 'fundamentals',
    sectionTitle: 'Hardware Boundaries',
    title: 'Chrome Direct-aa CPU-kooda Pesuma?',
    subtitle: 'Software machine-la irukra ellaathayum direct-aa control panna mudiyuma?',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Chrome-ku oru calculation thevai patta, Chrome direct-aa CPU pins-aiyo SSD-aiyo control panna mudiyuma?',
      questionContext: 'Download panra entha oru app-um direct-aa physical chips-ah thoda mudiyuma?',
      simpleExplanation: 'KANDIPPA MUDIYAADHU! Direct-aa thoda mudinja, Chrome-la oru bug vandhaa unga files motthama azhinjidum illa vera app password thirudidum.',
      realLifeAnalogy: 'Bank-la customer direct-aa vault kulla poi panam edukka mudiyaadhu. Cashier kitta token kuduthu avar thaan eduthu tharanum.',
      technicalTerm: 'HARDWARE ISOLATION & MEDIATION',
      technicalSubtitle: 'Apps-kum physical chips-kum naduvula oru powerful kaavalal irukkanum',
      cyberConnection: 'Indha kelvi thaan: "Namakku Operating System yen thevai?" nu thedalai uruvaakudhu!'
    },
    presenterNotes: [
      'Oruthar naduvula irundhu yes illa no sollanum nu sollunga.',
      '"Yaaru antha gatekeeper? Namma paarkka porom" nu suspense build pannunga.'
    ]
  },

  // SECTION 6: COMPUTER ARCHITECTURE — 25 MINUTES
  {
    id: 25,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Execution Pipeline',
    title: 'Oru Simple Kadhai: Chrome Open Panrom',
    subtitle: 'Icon-ah double click pannum pothu nerathai slow panni paarkalaam',
    type: 'flow',
    content: {
      statement: 'Mouse-ah Chrome icon mela vachu double-click panreenga. Machine kulla unmaiyile enna nadakkudhu?',
      flowSteps: [
        { step: '01', title: 'Mouse Nagargirathu', desc: 'Sensors unga kai asava desk mela detect pannudhu.' },
        { step: '02', title: 'Click Signal', desc: 'Microswitch electrical voltage maattrathai trigger pannudhu.' },
        { step: '03', title: 'Hardware Interrupt', desc: 'Motherboard antha input signal-ah udane receive pannudhu.' },
        { step: '04', title: 'Deep Journey Aarambam', desc: 'Indha 50 millisecond sambavathai slow panni ovvoru layer-aa paarkalaam.' }
      ]
    },
    presenterNotes: [
      'Storytelling tone vachikonga: "Dhinamum 100 thadava seira double click kulla 50 millisecond-la enna nadakkudhunu paarpom."'
    ]
  },
  {
    id: 26,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Input Dynamics',
    title: 'Click Pannum Pothu Enna Nadakkudhu?',
    subtitle: 'Manitha asavai electrical data-vaaga maattrum vidham',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Mouse mela viral pottu amukkina adhu computer-ku epdi puriyura data-va maarudhu?',
      questionContext: 'Physical action computer signal-aa epdi maarudhu?',
      simpleExplanation: 'Mouse kulla irukra switch moodi, wire illa Bluetooth vazhiya tiny electrical pulses-ah motherboard-ku anuppudhu.',
      realLifeAnalogy: 'Calling bell switch amukkina veetukulla bell adikkira electrical pulse madhiri.',
      technicalTerm: 'INPUT DATA (Ulvaangum Thagaval)',
      technicalSubtitle: 'Input = Veli ulagathula irundhu computer-kku tharappadum thagaval',
      bulletPoints: [
        'Coordinates: Cursor enga irundhuchu (X, Y pulligal)',
        'Event: Left click amukki vidappattadhu',
        'Target: Operating System antha coordinates-ah Chrome icon-odu poruthudhu'
      ]
    },
    presenterNotes: [
      '"Input = Computer-ku kodukkum thagaval" nu oru line-la thelivaa sollunga.'
    ]
  },
  {
    id: 27,
    day: 1,
    section: 'architecture',
    sectionTitle: 'The Conductor',
    title: 'Indha Input-ai Yaaru Handle Pannuvaa?',
    subtitle: 'Computer-oda ultimate coordinator arimugam',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Mouse coordinates anuppina, cursor-ah varaivadhum icon mela click aachunu mudivu panradhum yaaru?',
      questionContext: 'Monitor-a? Mouse-eh thaana? Illa vera edhaavatha?',
      simpleExplanation: 'Hardware components-ah coordinate panni apps-ah manage panra master software layer onnu irukku.',
      realLifeAnalogy: 'Orchestra conductor: Violins, drums ellam eppo vaasikkanumnu saikayil kaati isai uruvaakubavar.',
      technicalTerm: 'THE OPERATING SYSTEM (OS)',
      technicalSubtitle: 'Windows, macOS, Linux, Android, iOS',
      cyberConnection: 'Operating System thaan hardware matrum software-ah olungupaduthum. Day 2-la idhoda deep core-ah paarpom!'
    },
    presenterNotes: [
      'Operating System-ah ippo soft-ah introduce pannunga.',
      '"Naalaikku deep-aa paarpom, ippodhaikku idhu oru Master Manager nu nyabagam vechikonga."'
    ]
  },
  {
    id: 28,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Compute Engine',
    title: 'The CPU: Yaaru Unmaiyile Velai Seivaa?',
    subtitle: 'Instructions-ah execute panra electronic engine',
    type: 'concept-reveal',
    totalSteps: 3,
    content: {
      question: 'Computer-ku enna nadakkanum nu therinja pin, unmaiyile calculations pottu velai seivadhu yaaru?',
      questionContext: 'Heavy mathematical lifting panra worker yaaru?',
      simpleExplanation: 'Kodi kanakana microscopic switches irukra oru chinna silicon chip — instructions-ah follow panni imai poluthil calculations seiyyum.',
      realLifeAnalogy: 'Workshop master worker: Blueprint-ah paathu alandhu, cut panni, parts assemble panra velaiyaat.',
      technicalTerm: 'CPU (Central Processing Unit)',
      technicalSubtitle: 'Computer-oda "Moolai" (Brain) illa "Main Worker"',
      cyberConnection: 'Security researchers CPU execution-ah aaraainju logic flaws, race conditions kandupidipaargal.'
    },
    presenterNotes: [
      'Prompt rule: Udane "CPU executes instructions" nu solla koodadhu.',
      'Kelvi kettu, worker analogy solli, pinbu "CPU = Central Processing Unit" nu reveal pannunga.'
    ]
  },
  {
    id: 29,
    day: 1,
    section: 'architecture',
    sectionTitle: 'First Principles Units',
    title: 'Instruction-na Enna?',
    subtitle: 'Computer velaiyin atomic adippadai unit',
    type: 'cards',
    content: {
      headline: 'Instruction enbadhu computer-kku kodukkappadum chinna, thelivaana kattalai:',
      pillars: [
        { name: 'ADD', desc: 'Rendu enngalai kootu (e.g., 5 + 10 = 15).' },
        { name: 'MOVE', desc: 'Oru value-va oru idathula irundhu innoru idathukku copy pannu.' },
        { name: 'COMPARE', desc: 'Rendu values onnaanu paar (e.g., entered password == stored hash-a?).' },
        { name: 'LOAD', desc: 'RAM memory-la irundhu data-va eduthu CPU kulla vai.' },
        { name: 'STORE', desc: 'Calculation mudinja pin result-ah thirumba RAM-la pottu vai.' }
      ]
    },
    presenterNotes: [
      'Software magic illa — kodi kanakana indha chinna instructions serndhadhu thaan nu sollunga.',
      '"COMPARE" highlight pannunga: password checks and auth logic indha instruction moolamaaga thaan vela seiyudhu!'
    ]
  },
  {
    id: 30,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Parallelism',
    title: 'CPU: Cores',
    subtitle: 'Computer-la neraya workers irundhaa enna aagum?',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Oru worker ore nerathula oru instruction mattum execute panna mudiyumna, computer epdi paatu pottu, download panni, game run pannudhu?',
      questionContext: 'Modern computing multitasking epdi handle pannudhu?',
      simpleExplanation: 'Modern CPUs orey chip mela multiple thani thani worker units-ah vachirukkum, adhala pala tasks parallel-aa orey nerathil odum.',
      realLifeAnalogy: 'Oru hotel kitchen-la 4 illa 8 chefs thani thani stations-la ore nerathil samakkira madhiri.',
      technicalTerm: 'CPU CORES',
      technicalSubtitle: 'Core enbadhu CPU chip kulla irukra independent physical processing unit',
      bulletPoints: [
        'Single-Core: 1 worker tasks naduvula vegama maari maari seivaan',
        'Quad-Core (4 Cores): 4 workers unmaiyaave parallel-aa velai seivaanga',
        'Octa-Core (8 Cores): 8 workers periya periya workloads-ah thanga mudiyum'
      ]
    },
    presenterNotes: [
      'Kitchen analogy: 1 chef vs 4 chefs.',
      'Modern laptops-la 4, 8, 16 cores irukku nu point pannunga.'
    ]
  },
  {
    id: 31,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Execution Paths',
    title: 'CPU: Threads',
    subtitle: 'Workers-ku velai kodukka koodiya paadhaigal',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Oru worker (Core) irukkum pothu, antha worker kitta tasks vandhu serum execution queue enna?',
      questionContext: 'Oru app kulla chinna chinna tasks epdi parallel-aa odudhu?',
      simpleExplanation: 'Oru application chinna chinna execution paths-aa pirinji velai mudikkum — idhai thaan threads nu solrom.',
      realLifeAnalogy: 'Oru samayal master-ku rendu kaigal irukkira madhiri — rendu thavalaigalai orey nerathil kavanikalam.',
      technicalTerm: 'CPU THREADS',
      technicalSubtitle: 'Oru process kulla odum lightweight execution sequences',
      bulletPoints: [
        'Chrome Tab 1: Oru thread-la webpage render pannudhu',
        'Chrome Tab 2: Innoru thread-la video stream pannudhu',
        'Background: Innoru thread-la file download aagudhu'
      ]
    },
    presenterNotes: [
      'Process oru company madhiri, threads adhula vela seira workers madhiri nu sollunga.'
    ]
  },
  {
    id: 32,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Permanent Home',
    title: 'Chrome Off-la Irukkum Pothu Enga Irukkum?',
    subtitle: 'Namma computer-ah turn off pannum pothu programs enga thongudhu?',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Chrome open pannaatha pothu, adhoda files unga computer-la enga pathukakkappattirukku?',
      questionContext: 'Current off aanaalum programs azhiyaama enga irukkum?',
      simpleExplanation: 'Power illadha podhum files azhiyaama irukkira permanent magnetic illa flash memory storage-la irukkum.',
      realLifeAnalogy: 'Pusthaga alamaari (Bookshelf): Padippu mudinjudhaa books-ah alamaarila vachu pootiduvom, enaikkume azhiyaadhu.',
      technicalTerm: 'STORAGE (SSD / Hard Disk)',
      technicalSubtitle: 'Permanent Non-Volatile Storage',
      cyberConnection: 'Malware disk storage-la persistence create panni computer restart aanaalum thirumba run aaga paakkum.'
    },
    presenterNotes: [
      'Storage enbadhai Cupboard / Alamaari udhaaranathodu explain pannunga.'
    ]
  },
  {
    id: 33,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Storage Mechanics',
    title: 'Storage-na Unmaiyile Enna?',
    subtitle: 'Files-ah permanent-aa vachirukkira idham',
    type: 'cards',
    content: {
      headline: 'Storage enbadhu namma files matrum programs-ah eppovume pathukakkum idham:',
      pillars: [
        { name: 'Permanent (Nilaiyaanathu)', desc: 'Computer shut down aanaalum files apdiye safe-aa irukkum.' },
        { name: 'Periya Capacity', desc: '512GB, 1TB, 2TB alavukku kotikkanakana files vachikkalaam.' },
        { name: 'Slow Speed', desc: 'RAM-oda compare pannum pothu data edukkura speed konjam slow.' },
        { name: 'Inactive State', desc: 'Disk-la irukkum pothu app verum dead code file mattum thaan; CPU cycles edukkaadhu.' }
      ]
    },
    presenterNotes: [
      'Storage-oda key feature "Permanent" nu azhuthama sollunga.'
    ]
  },
  {
    id: 34,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Crucial Contrast',
    title: 'Storage vs RAM: Desk matrum Cupboard',
    subtitle: 'Beginners eppovum confuse panra mukkiya vidhiyasasam',
    type: 'ram-storage',
    content: {
      deskAnalogy: 'Padikkira Table (RAM) vs Veettu Biro (Storage)',
      ramPointers: [
        'Ultra fast read/write speed',
        'Current ponal data azhinjidum (Volatile)',
        'Ippo active-aa odura apps mattum thaan irukkum'
      ],
      storagePointers: [
        'Permanent non-volatile storage',
        'Current ponalum files azhiyaadhu',
        'Periya size aana RAM-ah vida slow'
      ]
    },
    presenterNotes: [
      'Indha slide-la Desk vs Cupboard visual diagram-ah explore panna sollunga.',
      'Beginner student-ku indha difference clear aanaale 50% confusion theerndhidum.'
    ]
  },
  {
    id: 35,
    day: 1,
    section: 'architecture',
    sectionTitle: 'The Launch Event',
    title: 'Chrome-ah Click Pannina Enna Nadakkudhu?',
    subtitle: 'Storage-la thoongura app RAM-ku paayum tharunam',
    type: 'flow',
    content: {
      flowSteps: [
        { step: '01', title: 'OS Recognizes Click', desc: 'Chrome icon click aachunu Operating System identify pannudhu.' },
        { step: '02', title: 'Fetch from SSD', desc: 'OS storage-la irundhu chrome.exe binary-ah thedi edukkudhu.' },
        { step: '03', title: 'Load into RAM', desc: 'Executable code-ah ultra-fast RAM memory kulla copy pannudhu.' },
        { step: '04', title: 'Allocate Resources', desc: 'Private memory space koduthu CPU instruction pointer set pannudhu.' },
        { step: '05', title: 'Process is Born!', desc: 'Dormant file ippo active running Process-aa maarudhu!' }
      ]
    },
    presenterNotes: [
      '5 steps-aiyum step-by-step kaatunga.',
      '"Double click = Storage-la irundhu RAM-ku copy panni CPU kitta koduppadhu" nu summarise pannunga.'
    ]
  },
  {
    id: 36,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Definition Shift',
    title: 'Program-na Enna?',
    subtitle: 'Disk-la thoongikittu irukra recipe file',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Storage-la chrome.exe nu oru file irukke, adhai naama technical-aa enna solluvom?',
      questionContext: 'Oru app run aagadhappo adhoda peyar enna?',
      simpleExplanation: 'Program enbadhu oru samayal kurippu pusthagam (Recipe book) madhiri — disk-la thoongittu irukkira instructions set.',
      realLifeAnalogy: 'Alamaarila irukra Cake recipe book: Adhu cake illai; cake epdi seiyanumnu ezhudhappatta instructions mattum thaan.',
      technicalTerm: 'A PROGRAM (Passive Executable File)',
      technicalSubtitle: 'Disk-la thoongum inactive file',
      cyberConnection: 'Antivirus software disk-la irukkira suspicious programs-ah scan panni signatures thedum.'
    },
    presenterNotes: [
      'Recipe book analogy: Program = Recipe book.',
      'Aduthu Process varapogudhu nu build up kudunga.'
    ]
  },
  {
    id: 37,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Living Entity',
    title: 'Process-na Enna?',
    subtitle: 'RAM-la active-aa uyiroda odura program instance',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Antha recipe book-ah kitchen table-la vachu active-aa cake bake panna aarambicha adhuku enna peyar?',
      questionContext: 'Program RAM-la load aagi CPU time vaangum pothu enna vaagudhu?',
      simpleExplanation: 'Process enbadhu oru running program! RAM memory eduthu, CPU cycles vaangi unmaiyile velai seigira oru living entity.',
      realLifeAnalogy: 'Kitchen oven-la active-aa bake aagittu irukra Cake! Ippo materials thevai, gas thevai, chef kavanikkanum.',
      technicalTerm: 'A PROCESS (Active Running Program)',
      technicalSubtitle: 'Process ID (PID), memory space matrum threads konda living entity',
      cyberConnection: 'Task Manager-la neenga paakkura ovvondrum oru Process. Attackers indha process memory-ah inject panna paapaanga.'
    },
    presenterNotes: [
      'Baking cake analogy: Process = Oven-la bake aagura cake.',
      'Task Manager-la irukra PID (Process ID) pathi sollunga.'
    ]
  },
  {
    id: 38,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Direct Comparison',
    title: 'Program vs Process',
    subtitle: 'Rendukkum naduvula irukra clear vidhiyasasam',
    type: 'flow',
    content: {
      flowSteps: [
        { step: 'PROGRAM', title: 'Disk-la Thoongum File', desc: 'Passive, memory edukaadhu, CPU use aagadhu, oru blueprint mattum thaan.' },
        { step: 'TRANSITION', title: 'OS Loads into RAM', desc: 'Double click seiyyum pothu OS RAM allocate panni PID kodukkudhu.' },
        { step: 'PROCESS', title: 'RAM-la Odura Entity', desc: 'Active, memory vachirukkum, CPU instructions execute pannum, living state.' }
      ]
    },
    presenterNotes: [
      'Program vs Process table-ah quick-aa summary pannunga.'
    ]
  },
  {
    id: 39,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Execution Loop',
    title: 'Oru App Epdi Run Aagudhu?',
    subtitle: 'Continuous Fetch-Decode-Execute cycle',
    type: 'flow',
    content: {
      flowSteps: [
        { step: '01. FETCH', title: 'RAM-la irundhu Instruction-ah Edutha', desc: 'CPU instruction pointer address-la irundhu adutha command-ah fetch pannudhu.' },
        { step: '02. DECODE', title: 'Instruction-ah Purinjiko', desc: 'Silicon decoder opcode-ah paathu enna operation (ADD/LOAD) nu decode pannudhu.' },
        { step: '03. EXECUTE', title: 'Calculations Seidhu Mudi', desc: 'ALU arithmetic logic unit calculation-ah execute panni result tharudhu.' },
        { step: '04. REPEAT', title: 'Seconds-la 3 Billion Thadava!', desc: 'Indha cycle nodikku 3 billion thadava continuous-aa heartbeat madhiri odudhu.' }
      ]
    },
    presenterNotes: [
      'CPU heartbeat: Fetch → Decode → Execute.',
      '3 GHz processor nodikku 3 billion thadava idhai seiyudhu nu solli amaze pannunga.'
    ]
  },
  {
    id: 40,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Memory Demand',
    title: 'Chrome-ku Yen RAM Thevai?',
    subtitle: 'Browsing data-va disk-la vekkama RAM-la yen vachikidhu?',
    type: 'cards',
    content: {
      headline: 'Chrome browsing pannum pothu ovvoru tab-kum vegamaana RAM thevaipaduudhu:',
      pillars: [
        { name: 'HTML & DOM Structure', desc: 'Webpage-oda buttons, text matrum layout trees-ah instant render panna.' },
        { name: 'Images & Media', desc: 'Uncompressed image pixels-ah display monitor-ku thara.' },
        { name: 'JavaScript Engine', desc: 'Variables, memory objects matrum scripts-ah nanosecond vegathula execute panna.' },
        { name: 'Tabs Isolation', desc: 'Ovvoru tab-um separate process-aa isolated memory sandbox-la odudhu.' }
      ]
    },
    presenterNotes: [
      'Chrome yen ivvalavu RAM sapududhu nu students-kitta kelunga — idho idhudhan unmaiyana kaaranam!'
    ]
  },
  {
    id: 41,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Security Boundary',
    title: 'Chrome Vera App-oda RAM-ah Padikkalaama?',
    subtitle: 'Chrome poi WhatsApp illa Bank app-oda memory-ah paarkka mudiyuma?',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Chrome browser unga laptop-la open-aa irukra innoru app-oda (e.g. Password Manager) RAM-ah direct-aa read panna mudiyuma?',
      questionContext: 'Oru app innoru app-oda memory data-va thirudalaama?',
      simpleExplanation: 'KANDIPPA MUDIYAADHU! Operating System ovvoru process-aiyum strict isolated sandbox kulla lock panni vachirukkum.',
      realLifeAnalogy: 'Apartment veedukal: Pakkathu veettu aal unga bedroom kulla vandhu unga beero-va thirakka mudiyadhu, suvargal thadukkum.',
      technicalTerm: 'PROCESS MEMORY ISOLATION',
      technicalSubtitle: 'Virtual Memory & Hardware MMU Protection',
      cyberConnection: 'Hacking attacks eppovum indha process isolation boundary-ah udaika thaan paarkkum (Buffer Overflow, Process Injection).'
    },
    presenterNotes: [
      'Apartment walls analogy: Process isolation.',
      'MMU (Memory Management Unit) hardware level-la check pannum nu sollunga.'
    ]
  },
  {
    id: 42,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Processor Orchestration',
    title: 'CPU Epdi Chrome-ah Run Pannudhu?',
    subtitle: 'Time-slicing matrum context switching adhisayam',
    type: 'flow',
    content: {
      flowSteps: [
        { step: '01', title: 'Time Slice Allocation', desc: 'OS scheduler Chrome process-ku 10 millisecond CPU time tharudhu.' },
        { step: '02', title: 'Registers Load', desc: 'CPU registers Chrome state-ah load panni instructions execute pannudhu.' },
        { step: '03', title: 'Context Switch', desc: 'Time mudinjadhum Chrome state save panni, Spotify app-ku CPU time maathudhu.' },
        { step: '04', title: 'Invisible Speed', desc: 'Manitha kannukku ellam orey nerathil odura madhiri thonum!' }
      ]
    },
    presenterNotes: [
      'Context switching = Juggler pala balls-ah thooki podura madhiri speed.'
    ]
  },
  {
    id: 43,
    day: 1,
    section: 'architecture',
    sectionTitle: 'The Full Picture',
    title: 'Ellathayum Inaipom: Complete System Picture',
    subtitle: 'Hardware, Memory, OS matrum Process-oda full landscape',
    type: 'flow',
    content: {
      flowSteps: [
        { step: '01. INPUT', title: 'Mouse / Keyboard / Network', desc: 'Physical signals computer hardware pins kulla varudhu.' },
        { step: '02. OS KERNEL', title: 'Central Gatekeeper & Manager', desc: 'Signals receive panni, memory assign panni, apps-ah govern pannudhu.' },
        { step: '03. CPU & RAM', title: 'Compute & Active Workspace', desc: 'Instructions execute aagi, memory isolated sandboxes-la odudhu.' },
        { step: '04. STORAGE', title: 'Permanent Vault', desc: 'All files and dormant programs safe-aa disk-la save aagudhu.' }
      ]
    },
    presenterNotes: [
      'Full Day 1 picture idhudhan! Students-ah appreciate pannunga.'
    ]
  },
  {
    id: 44,
    day: 1,
    section: 'architecture',
    sectionTitle: 'Day 1 Milestone',
    title: 'Day 1 Mudindhadhu — Bedrock Uruvaagiyadhu!',
    subtitle: 'Moththam 44 Topics mudichachu — First Principles adippadai ready!',
    type: 'day1-recap',
    content: {
      headline: 'Congratulations! Day 1 Complete!',
      summaryPoints: [
        'Cybersecurity-na verum tools illa, entire digital system-ah paadhukaakradhu nu therinjikittom',
        'Hardware, CPU, RAM, Storage Triangle-oda exact differences purinjikittom',
        'Program (disk file) vs Process (RAM running entity) thelivaa therinjiduchu',
        'Process isolation yen mukkiyam, apps yen direct-aa hardware thoda mudiyadhu nu kattukittom'
      ],
      nextDayTeaser: 'Day 2-la naama Operating System kulla irukra KERNEL, SYSTEM CALLS matrum PRIVILEGE RINGS kulla direct-aa dive panna porom!'
    },
    presenterNotes: [
      'Day 1-ah grand-aa finish pannunga! Audience-ah clap panna sollunga chat-la.',
      'Day 2 romba exciting-aa irukka pogudhu nu teaser kodunga.'
    ]
  },

  // =========================================================================
  // DAY 2: GO INSIDE THE OPERATING SYSTEM (Slides 45 to 60)
  // =========================================================================

  {
    id: 45,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'Day 2 Welcome',
    title: 'Day 2: OS Ulla Pogalaam — Welcome Back!',
    subtitle: 'Operating System-oda innermost secrets matrum Kernel mechanics',
    type: 'day1-recap',
    content: {
      headline: 'Welcome Back to Day 2 of EV Cyber Academy!',
      summaryPoints: [
        'Netru naama computer architecture matrum process basics mudithom',
        'Indru naama Operating System-oda heart: The Kernel pathi paarkka porom',
        'Apps epdi Kernel kitta permission kekkudhu (System Calls)',
        'Root privileges, File descriptors matrum Security Researcher mindset'
      ],
      nextDayTeaser: 'Ring 0 kulla dive pannuvom vaanga!'
    },
    presenterNotes: [
      'Day 2-ku ellarayum energetic-aa varaverkavum.',
      'Day 1 recap quiz kelvigal ketkavum.'
    ]
  },
  {
    id: 46,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'Recap & Bridge',
    title: 'Netru Paartha Kadhaiyin Thodarchi',
    subtitle: 'The Question: Apps yen direct-aa hardware thoda mudiyadhu?',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Netru namma mudicha mukkiya kelvi nyabagam irukka: Chrome direct-aa SSD-aiyo camera-vaiyo control panna mudiyadhu yen?',
      questionContext: 'Gatekeeper yaar?',
      simpleExplanation: 'Security kaaga! Oru master gatekeeper naduvula irundhu ovvoru hardware request-aiyum check pannanum.',
      realLifeAnalogy: 'Bank vault guard: Entha aalum direct-aa vault kulla kaiya vida mudiyadhu; manager check panni thaan kodupaar.',
      technicalTerm: 'MEDIATED HARDWARE ACCESS',
      technicalSubtitle: 'The Gatekeeper is the Operating System Kernel',
      cyberConnection: 'Indha gatekeeper-oda control-ah pidikkiradhu thaan attackers-oda ultimate goal (Privilege Escalation).'
    },
    presenterNotes: [
      'Day 1-oda cliffhanger kelviyodu Day 2-ah link pannunga.'
    ]
  },
  {
    id: 47,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'System Master',
    title: 'Operating System-na Enna?',
    subtitle: 'Hardware matrum software-ah inaikkum mahaa coordinator',
    type: 'cards',
    content: {
      headline: 'Operating System (Windows, Linux, macOS) seiyyum 4 mukkiya velavigal:',
      pillars: [
        { name: 'Hardware Management', desc: 'CPU, RAM, Storage, Wi-Fi matrum Display chips-ah direct-aa control pannum.' },
        { name: 'Process Scheduling', desc: 'Entha app eppo CPU time vaanganum nu milisecond kanakkil decide pannum.' },
        { name: 'Memory Protection', desc: 'Process isolation panni oru app innoru app memory-ah thodaama thadukkum.' },
        { name: 'Security & Access Control', desc: 'Users matrum programs-oda permissions (rwx) enforce pannum.' }
      ]
    },
    presenterNotes: [
      'OS-oda 4 pillars-ah simple-aa explain pannunga.'
    ]
  },
  {
    id: 48,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'The Core Engine',
    title: 'The Kernel: OS-oda Idhayam',
    subtitle: 'Operating System-kullaye supreme power vachirukra core program',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Operating System kulla irukra absolute core engine edhu? Adhuku enna powers irukku?',
      questionContext: 'Computer on aana udane boot aagura mudhal main program edhu?',
      simpleExplanation: 'Kernel enbadhu OS-oda central core program. Computer on aagumbodhe load aagi, shut down aagura varaikkum memory-la irundhu hardware-ah govern pannum.',
      realLifeAnalogy: 'Oru naattin mudhal amaichar (Prime Minister) illa Central Bank governor madhiri — full administrative authority.',
      technicalTerm: 'THE OS KERNEL',
      technicalSubtitle: 'Linux Kernel, Windows NT Kernel, XNU (macOS)',
      cyberConnection: 'Kernel level-la oru bug vandhaa (Kernel exploit), attacker mottha computer-aiyum complete-aa control eduthukalaam (Ring 0 compromise).'
    },
    presenterNotes: [
      '"The Kernel" enbadhai introduce pannunga. Most beginners idhai kelvipattirukka maattanga.',
      'Linux kernel, Windows NT kernel pathi mention pannunga.'
    ]
  },
  {
    id: 49,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'The Need for Kernel',
    title: 'Kernel Yen Irukkanum?',
    subtitle: 'Kernel illana computer ulagathula enna aagum?',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Kernel illama ella apps-ume direct-aa hardware use panna mudinjaa enna aagum?',
      questionContext: 'Rules illadha computer epdi irukkum?',
      simpleExplanation: 'Muttrilumaana CHAOS! Chrome Spotify memory-ah overwrite pannidum; oru game unga hard disk-ah format pannidum; endha app-um crash aagama irukaadhu.',
      realLifeAnalogy: 'Traffic signals matrum traffic police illadha periya junction — ovvoru vandi-yum onnuku onnu modhi periya accident aagum.',
      technicalTerm: 'ARBITRATION & PROTECTION',
      technicalSubtitle: 'The Kernel prevents digital civil war inside the machine',
      cyberConnection: 'Kernel thaan namma security-oda mudhal matrum kadaisi kavalal.'
    },
    presenterNotes: [
      'Traffic police analogy vachu explain pannunga. Romba visual-aa puriyum.'
    ]
  },
  {
    id: 50,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'The Great Divide',
    title: 'User Space vs Kernel Space',
    subtitle: 'Computer memory-la irukra irandu periya ulagangal',
    type: 'comparison',
    content: {
      left: {
        title: 'USER SPACE (Ring 3)',
        status: 'Restricted Sandbox',
        desc: 'Normal apps (Chrome, Zoom, Games) okkaarura idham. Direct hardware access kedayaadhu; memory isolated; crash aanaal antha app mattum moodidum.'
      },
      right: {
        title: 'KERNEL SPACE (Ring 0)',
        status: 'Privileged Zone',
        desc: 'Kernel matrum device drivers odura idham. Full hardware access; direct CPU control; crash aanaal Blue Screen of Death (BSOD) vandhudum.'
      },
      takeaway: 'User Space apps enna thevai pattaalum Kernel Space kitta permission kettu thaan aaganum!'
    },
    presenterNotes: [
      'Ring 3 vs Ring 0 visualization-ah explain pannunga.',
      'User Space = Customer counter; Kernel Space = Bank Manager vault.'
    ]
  },
  {
    id: 51,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'Crossing the Boundary',
    title: 'User App Epdi Kernel Kitta Udhavi Kekkum?',
    subtitle: 'Oru file padikkanumna User Space-la irundhu Kernel-ku epdi request pogum?',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Chrome-ku oru file-ah SSD-la irundhu read pannanum. Aana Chrome User Space-la irukku. Epdi antha file-ah vaangum?',
      questionContext: 'User app epdi boundary-ah cross panni request anuppum?',
      simpleExplanation: 'Direct-aa thoda mudiyadhu; official request counter window vazhiya Kernel kitta token koduthu kekkanum.',
      realLifeAnalogy: 'Bank-la customer counter window vazhiya cashier kitta withdrawal slip koduthu panam kekkura madhiri.',
      technicalTerm: 'SYSTEM CALL (SYSCALL)',
      technicalSubtitle: 'The programmatic bridge between User Space and Kernel Space',
      cyberConnection: 'Attackers syscall arguments-ah manipulate panni buffer overflows create panna paapaanga.'
    },
    presenterNotes: [
      'Bank counter window analogy: Syscall = Withdrawal slip.',
      'Adutha slide-la detailed syscall concept varudhu.'
    ]
  },
  {
    id: 52,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'System Call Mechanics',
    title: 'System Call (Syscall)-na Enna?',
    subtitle: 'User program Kernel services-ah kekkura official function call',
    type: 'cards',
    content: {
      headline: 'Common System Calls (Linux / POSIX):',
      pillars: [
        { name: 'read() / write()', desc: 'File illa network socket-la irundhu data vaanga / anuppa.' },
        { name: 'open() / close()', desc: 'Disk-la irukra file-ah thirakka matrum mooda.' },
        { name: 'fork() / execve()', desc: 'Pudhu process create panni vera program execute panna.' },
        { name: 'socket() / connect()', desc: 'Internet network connection open panni remote server-odu pesa.' }
      ]
    },
    presenterNotes: [
      '4 fundamental syscalls explain pannunga: read, write, open, socket.',
      'Students-ku programming bayam varaama "Idhu verum requests thaan" nu sollunga.'
    ]
  },
  {
    id: 53,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'Daily Life Examples',
    title: 'Dhinamum Neenga Seiyyum Syscalls',
    subtitle: 'Neenga seira ovvoru chinna action-kum pinnaadi Kernel syscalls odudhu',
    type: 'flow',
    content: {
      flowSteps: [
        { step: 'SAVE FILE', title: 'Word-la Save Click Panna', desc: 'sys_write() syscall SSD controller kitta poi data-va disk sectors-la ezhudhudhu.' },
        { step: 'OPEN YOUTUBE', title: 'Browser-la URL Type Panna', desc: 'sys_socket() matrum sys_connect() network card vazhiya packets anuppudhu.' },
        { step: 'TAKE PHOTO', title: 'Camera App Open Panna', desc: 'sys_ioctl() camera hardware sensor kitta frame stream start panna request pannudhu.' },
        { step: 'KEYBOARD PRESS', title: 'Password Type Panna', desc: 'sys_read() USB keyboard buffer-la irundhu keystrokes-ah fetch pannudhu.' }
      ]
    },
    presenterNotes: [
      'Real-world activities-odu syscalls-ah connect pannunga.',
      '"Neenga YouTube paathalum photo eduthaalum Kernel syscalls nadakudhu."'
    ]
  },
  {
    id: 54,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'Cyber Connection',
    title: 'Cybersecurity-la Syscalls Yen Ivvalavu Mukkiyam?',
    subtitle: 'Malware matrum Researchers syscalls-ah yen trace panraanga?',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Security tools (Antivirus, EDR) matrum Malware researchers syscalls-ah yen romba kavanama kankaanippaanga?',
      questionContext: 'Hacking detection-la syscalls enna role play pannudhu?',
      simpleExplanation: 'Malware enna thappu seiyyanumnaalum (file encrypt panradhu, password exfiltrate panradhu, backdoor create panradhu) kandippa Syscall vazhiya thaan poyaganum!',
      realLifeAnalogy: 'Bank-la thirudan cash edukka ninaichaalum cashier counter-ah thandi thaan poyaganum; cashier alert-aa irundha pidichidalaam.',
      technicalTerm: 'BEHAVIORAL MONITORING & SYSCALL TRACING',
      technicalSubtitle: 'strace (Linux), Process Monitor (Windows), Sysmon, EDR Hooks',
      cyberConnection: 'Ransomware files-ah encrypt panna lakshakkanakana write() syscalls anuppum pothu EDR udane detect panni kill pannidum.'
    },
    presenterNotes: [
      'EDR (Endpoint Detection and Response) epdi vela seiyudhunu explain pannunga.',
      'Ransomware example beginners-ku romba nallaa puriyum.'
    ]
  },
  {
    id: 55,
    day: 2,
    section: 'os-internals',
    sectionTitle: 'Full Journey Visualization',
    title: 'Oru Click-oda Mulumaana Payanam (The Full Journey)',
    subtitle: 'Hardware Pins → Mouse Driver → OS Kernel → Chrome Process',
    type: 'kernel-syscall',
    content: {
      architectureSteps: [
        { layer: 'USER SPACE', component: 'Chrome Browser', action: 'Displays webpage UI and receives click coordinates' },
        { layer: 'SYSTEM CALL', component: 'Syscall Interface', action: 'Crosses CPU privilege boundary from Ring 3 to Ring 0' },
        { layer: 'KERNEL SPACE', component: 'OS Kernel & Device Drivers', action: 'Coordinates hardware, validates permissions, schedules CPU' },
        { layer: 'HARDWARE', component: 'Physical Chips (CPU, RAM, SSD)', action: 'Executes electrical signals across silicon gates and buses' }
      ]
    },
    presenterNotes: [
      'Specialized KernelSyscallSlide visuals-ah walk-through pannunga.',
      'Students ippo full system-ah first principles adippadaila paarkiraanga.'
    ]
  },
  {
    id: 56,
    day: 2,
    section: 'cyber-mechanics',
    sectionTitle: 'Formal Definitions',
    title: 'Vulnerability: Unmaiyana Definition',
    subtitle: 'Code-la programmer theriyama vitta kuraipaadu',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Cybersecurity-la "Vulnerability" nu solraangale, adhoda first principles definition enna?',
      questionContext: 'Oru bug eppo vulnerability-aa maarudhu?',
      simpleExplanation: 'Vulnerability enbadhu system design, implementation illa configuration-la irukra kuraipaadu — adhala security boundaries meera mudiyum.',
      realLifeAnalogy: 'Veettu compound suvar-la oru idathula surangam thondappattirukku, aana poottu munnadi maattirukku.',
      technicalTerm: 'SECURITY VULNERABILITY (CVE / Weakness)',
      technicalSubtitle: 'Flaw in logic, boundary validation, or memory management',
      cyberConnection: 'Vulnerability irundhaa mattum pothuma? Athai misuse panna edhaavadhu thevaiya? Next slide-la paarunga!'
    },
    presenterNotes: [
      'Vulnerability definition-ah thelivaa sollunga.',
      'Next: Exploit pathi pesuvom.'
    ]
  },
  {
    id: 57,
    day: 2,
    section: 'cyber-mechanics',
    sectionTitle: 'Formal Definitions',
    title: 'Exploit: Unmaiyana Definition',
    subtitle: 'Antha kuraipaatta vachu ulla nuzhaiya create panna tool/command',
    type: 'concept-reveal',
    totalSteps: 2,
    content: {
      question: 'Vulnerability irundhaa pothum, adhai exploit panna attacker enna use pannuvaaru?',
      questionContext: 'Bug-kkum attack payload-kkum enna sambandham?',
      simpleExplanation: 'Exploit enbadhu antha specific kuraipaatta trigger panni, security boundary-ah breach panna specially craft seiyappatta input, code illa sequence.',
      realLifeAnalogy: 'Compound suvar ottai kulla correcta thooram pooi ulla nuzhaivaan paatheengala, antha thiruttu yuthie Exploit.',
      technicalTerm: 'SECURITY EXPLOIT (Proof-of-Concept / Weaponization)',
      technicalSubtitle: 'Crafted input forcing system to execute unintended behavior',
      cyberConnection: 'Vulnerability = Udanja poottu. Exploit = Antha pootta thirakka adikkira kambi.'
    },
    presenterNotes: [
      'Vulnerability vs Exploit differentiation romba mukkiyam.',
      'Poottu vs Kambi analogy vachu azhagaa recap pannunga.'
    ]
  },
  {
    id: 58,
    day: 2,
    section: 'mindset-closing',
    sectionTitle: 'Engineering Defense',
    title: 'System Purithal Yen Ungalai Great Defender Aakkum?',
    subtitle: 'First principles arivu eppovume automated tools-ah jeyikkum',
    type: 'cards',
    content: {
      headline: 'First principles arivu ungalukku tharum 4 super powers:',
      pillars: [
        { name: 'No More Guesswork', desc: 'Errors vandhaa bayapadama root cause ennanu network/OS level-la investigate pannuveenga.' },
        { name: 'Unbreakable Defenses', desc: 'System epdi execute aagudhunu therinju, attacks-ah early stage-laye architecturally block pannuveenga.' },
        { name: 'Tool Independent', desc: 'Pudhu tools vandhaalum 1 naalil kathupeenga, yenna adiyila irukra system basics ungalukku theriyum.' },
        { name: 'True Researcher Mindset', desc: 'Superficial scripts copy panradha vittutu, architecture and protocol flaws investigate pannuveenga.' }
      ]
    },
    presenterNotes: [
      'Students-ku self-belief build pannunga: "Neenga ippo tools mela depend aaga theva illa, system-ah purinjikitta engineer!"'
    ]
  },
  {
    id: 59,
    day: 2,
    section: 'mindset-closing',
    sectionTitle: 'Mindset Transformation',
    title: 'The Great Mindset Shift',
    subtitle: 'User → Engineer → Security Researcher',
    type: 'quote',
    content: {
      headline: 'User uses it.\\nEngineer builds it.\\nSecurity Researcher questions it.',
      secondaryStatement: 'Ulagathuku ippo copy-paste script kiddies theva illa. Systems purinja unmaiyana Cybersecurity Engineers thaan thevai.',
      reflection: 'Indha 2 naatkalil neenga verum tools commands paarkala — oru machine epdi yosikkudhu, epdi operate aagudhunu adippadaila irundhu kathukitteenga.'
    },
    presenterNotes: [
      'Inspiring closing message sollunga.',
      '"Ulagathuku script-kiddies theva illa. Ulagathuku unmaiyana Cybersecurity Engineers thevai."'
    ]
  },
  {
    id: 60,
    day: 2,
    section: 'mindset-closing',
    sectionTitle: 'Webinar Mudivu',
    title: 'EV CYBER ACADEMY',
    subtitle: 'Building Cybersecurity Engineers',
    type: 'closing',
    content: {
      company: 'EV CYBER ACADEMY',
      tagline: 'Building Cybersecurity Engineers',
      founderName: 'Vimal',
      founderRole: 'Founder & CEO',
      fourPillars: [
        { name: '01. Fundamentals', desc: 'Hardware & OS architecture adippadai' },
        { name: '02. Practical Skills', desc: 'Real-world laboratory analysis & labs' },
        { name: '03. Projects', desc: 'Hands-on defense & security testing' },
        { name: '04. Portfolio', desc: 'Industry-ready verification & career launch' }
      ],
      email: 'evcyberacademy@gmail.com'
    },
    presenterNotes: [
      'Rendu naatkalum arumaiyaana energy-odu irundha ellarukkum romba nandri sollunga.',
      'Chat-la kelvigal ketka aahvaanam vidunga.',
      'Contact details kuduthu EV Cyber Academy journey-odu thodarbu vechikollunga nu mudiyunga.'
    ]
  }
];

export const SLIDES: SlideData[] = RAW_SLIDES.map((slide) => ({
  ...slide,
  topicQuestion: TOPIC_QUESTIONS[slide.id]
}));
