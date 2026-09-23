export interface TopicQuestion {
  slideId: number;
  topicName: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const TOPIC_QUESTIONS: Record<number, TopicQuestion> = {
  1: {
    slideId: 1,
    topicName: '2-Day Cyber Security Webinar',
    question: 'EV Cyber Academy-oda mukkiya nokkam (mission) enna?',
    options: [
      'Kali Linux-la tools commands mattum memorize panna vaikka',
      'First-principles adippadaila system-ah purinjikra unmaiyana Cybersecurity Engineers uruvaakka',
      'Banks-ku software licenses vikka',
      'Social media passwords crack panna solli thara'
    ],
    correctIndex: 1,
    explanation: 'EV Cyber Academy-oda core vision "Building Cybersecurity Engineers" — computers, networks, matrum OS epdi velai seiyuthunu adippadaila irunthu solli tharuvom.'
  },
  2: {
    slideId: 2,
    topicName: 'Before We Start',
    question: 'Cybersecurity kathukka munnadiye coding-o illa hacking experience-o kandippa theriyanuma?',
    options: [
      'Aama, C++ matrum Python munnadiye nalla theriyanum',
      'Thevaiye illa! ZERO-la irunthu real-life analogies vachu adippadaila irunthu kathukalaam',
      'Aama, Linux certification irunthaa mattum thaan mudiyum',
      'Coding theva illa, aana computer assemble panna theriyanum'
    ],
    correctIndex: 1,
    explanation: 'Endha munnubavamum thevai illa. Ella technical concepts-um everyday life examples vachu zero-la irundhe solli tharuvom.'
  },
  3: {
    slideId: 3,
    topicName: 'Who is Vimal?',
    question: 'Vimal ethukaga EV Cyber Academy-ah thuvanginaar?',
    options: [
      'Automated scanning tools promote panna mattum',
      'Tools pinnaadi irukra unmaiyana architecture purinjikitta engineers-ah uruvaakka',
      'General web design course nadatha',
      'College degrees-ah thadukka'
    ],
    correctIndex: 1,
    explanation: 'Summa buttons thukki hacking panrathukkum, unmaiyana engineering arivukkum naduvula irukra gap-ah udaikka Vimal EV Cyber Academy-ah aarambichaaru.'
  },
  4: {
    slideId: 4,
    topicName: 'Why Are We Here?',
    question: 'Cybersecurity-la "hacking" thavira vera enna ellam mukkiyamana vishayangal varudhu?',
    options: [
      'Phone call scam mattum thadukradhu',
      'Computers, Networks, Applications, Data, People matrum Infrastructure ellaame',
      'Windows-la antivirus install panradhu mattum thaan',
      'Enterprise routers-ku firewall eluthuradhu mattum'
    ],
    correctIndex: 1,
    explanation: 'Cybersecurity entha oru single tool-oda mudiyadhu — computer, network, app, data, manushanga matrum digital infrastructure ellaathayume paadhukaakradhu thaan.'
  },
  5: {
    slideId: 5,
    topicName: 'What Will Happen In These 2 Days?',
    question: 'Indha 2-Day Webinar-oda Day 1 matrum Day 2-oda mukkiya themes enna?',
    options: [
      'Day 1: Kali Linux / Day 2: Wi-Fi Cracking',
      'Day 1: Understand the System / Day 2: Go Inside the Operating System',
      'Day 1: Python Basics / Day 2: Web Scraping',
      'Day 1: Theory Exam / Day 2: Job Interviews'
    ],
    correctIndex: 1,
    explanation: 'Day 1-la computer system adippadai (CPU, RAM, Storage, Process); Day 2-la Operating System ulla (Kernel, Syscalls, Privilege Rings) deep-ah paarpom.'
  },
  6: {
    slideId: 6,
    topicName: 'First Question: What is Cybersecurity?',
    question: 'Cybersecurity-na yen verum "Kali Linux illa password crack panradhu" mattum kedayadhu?',
    options: [
      'Yenna Kali Linux ippo work aagadhu',
      'Yenna passwords ippo yaarum use panradhilla',
      'Yenna security-ngradhu digital systems-oda moththa design, defense matrum architecture-ah paathukaakradhu',
      'Yenna cybersecurity verum veettu poottu sambanthapattadhu'
    ],
    correctIndex: 2,
    explanation: 'Tools matrum passwords oru chinna part mattum thaan. Digital systems-ah build panni, defend panni, verify panradhu thaan unmaiyana cybersecurity.'
  },
  7: {
    slideId: 7,
    topicName: 'The House Analogy',
    question: 'Namma veettu udhaaranathula (House Analogy), digital system-oda "ports matrum communication channels"-ku edhu samam?',
    options: [
      'Veettu adithalam (Foundation concrete)',
      'Nalla lock pottu kankanikka vendiya Munnadi Kathavu matrum Jannalgal',
      'Veettu koorai (Roof tiles)',
      'Samayal arai gas aduppu'
    ],
    correctIndex: 1,
    explanation: 'Veetla kathavu matrum jannal vazhiya thaan aatkal varuvaanga, athukku lock thevai. Adhey madhiri digital network-la ports thaan entry points — athukku firewall thevai.'
  },
  8: {
    slideId: 8,
    topicName: 'Vulnerability vs Threat vs Risk',
    question: 'Security-la Vulnerability, Threat, Risk — idhoda sarina real-life uruvagam (analogy) edhu?',
    options: [
      'Vulnerability = Kaavalal, Threat = Veedu, Risk = Petti',
      'Vulnerability = Udanja Poottu, Threat = Thirudan, Risk = Thiru poga koodiya Vaappu',
      'Vulnerability = Thangam, Threat = Poottu, Risk = Saavi',
      'Vulnerability = Saavi, Threat = Kottai, Risk = Kannaadi'
    ],
    correctIndex: 1,
    explanation: 'Vulnerability-na code-la irukra kuraipaadu (Udanja poottu); Threat-na thappu seiyya ninaikra aal (Thirudan); Risk-na athanaala ungalukku aaga koodiya naashtam (Loss chance).'
  },
  9: {
    slideId: 9,
    topicName: 'Banking Application Architecture',
    question: 'Banking App 3-tier architecture-la "Database"-oda mukkiya velai enna?',
    options: [
      'Phone screen-la buttons render panradhu',
      'Unmaiyana bank balance matrum transaction records-ah permanent-ah pathukappana vault-la store panni vekkradhu',
      'Network speed-ah increase panradhu',
      'Phone battery-ah charge panradhu'
    ],
    correctIndex: 1,
    explanation: 'Database thaan central vault. Phone app (Frontend) balance kaattum, Server logic verify pannum, Database thaan unmaiyana panatha record panni pathukakkum.'
  },
  10: {
    slideId: 10,
    topicName: 'What is a Server?',
    question: 'Server-na unmaiyile enna? Normal computer-kum server-kum enna vidhiyasasam?',
    options: [
      'Adhu oru magic cloud box, computer-eh kedayadhu',
      'Adhuvum oru computer thaan, aana 24/7 off aagama lakshakkanakana perukku services thara ready-ah irukkum',
      'Adhu internet cable mattum thaan',
      'Adhula monitor illa naala adhu computer illai'
    ],
    correctIndex: 1,
    explanation: 'Server-um namma computer madhiri CPU, RAM, Storage irukra machine thaan. Aana 24/7 on-la irunthu kodi kanakana requests-ku badhil tharudhala athukku "Server" nu peru.'
  },
  11: {
    slideId: 11,
    topicName: 'What is a Database?',
    question: 'Data-va text file-la vekkama dedicated Database-la yen store panrom?',
    options: [
      'Text file create panna mudiyadhu naala',
      'Database fast search, concurrent transactions, security matrum data integrity tharudhu',
      'Database-ku internet connection theva illa naala',
      'Text files romba costly aagi pochu'
    ],
    correctIndex: 1,
    explanation: 'Orey nerathula laksham per balance check panna text file thangaadhu. Database ultra-fast querying, locking matrum strict ACID protection tharudhu.'
  },
  12: {
    slideId: 12,
    topicName: 'What is a Firewall?',
    question: 'Digital network-la Firewall enna mukkiya velai paakkudhu?',
    options: [
      'Computer heat aana cool pannum',
      'Rules adippadaila network traffic-ah check panni unwanted illa dangerous connections-ah block pannum',
      'Internet speed-ah double aakkum',
      'Corrupted hard drive-ah repair pannum'
    ],
    correctIndex: 1,
    explanation: 'Firewall oru security guard madhiri. Ovvoru incoming packet-oda IP matrum port-ah check panni, permission iruntha mattum thaan ulla vidum.'
  },
  13: {
    slideId: 13,
    topicName: 'What is an API?',
    question: 'API-ah restaurant menu-voda compare pannuvom — yen?',
    options: [
      'Yenna API-la food photos irukkum',
      'Yenna kitchen kulla direct-ah pogama, menu vazhiya specific order panni result vaangikalam',
      'Yenna API use panna cash kudukanum',
      'Yenna API kitchen stove madhiri sooda irukkum'
    ],
    correctIndex: 1,
    explanation: 'Kitchen kulla customer direct-ah poga koodadhu; waiter kitta menu vazhiya order kekkanum. App-um backend database-ah direct-ah thodama API endpoint vazhiya thaan pesum.'
  },
  14: {
    slideId: 14,
    topicName: 'What is an Exploit?',
    question: 'Vulnerability-kkum Exploit-kkum enna unmaiyana vidhiyasasam?',
    options: [
      'Randumey orey vishayam thaan',
      'Vulnerability oru software kuraipaadu (weakness); Exploit-ngradhu antha kuraipaatta use panni attack panra command/code',
      'Vulnerability attack pannum, Exploit protect pannum',
      'Vulnerability hardware, Exploit software'
    ],
    correctIndex: 1,
    explanation: 'Code-la irukra ottai/thavaru thaan vulnerability. Antha ottai vazhiya thirudan ulla nuzhaiya create panna tool/payload thaan exploit.'
  },
  15: {
    slideId: 15,
    topicName: 'What is Encryption?',
    question: 'Encryption seiyyum pothu data-ku enna aagudhu?',
    options: [
      'Data hard disk-la irunthu delete aaidum',
      'Plaintext data secret key vachu scramble aagi, key illadha yaarukkume puriyadha ciphertext-ah maaridum',
      'Data file size zero aaidum',
      'Adhu PDF file-ah convert aagum'
    ],
    correctIndex: 1,
    explanation: 'Encryption unga data-va locked box madhiri maathum. Secret key irukra aal mattum thaan unlock panni vaasikka mudiyum.'
  },
  16: {
    slideId: 16,
    topicName: 'What is a Computer?',
    question: 'First principles adippadaila, computer-oda absolute core function enna?',
    options: [
      'Gaming games run panradhu mattum',
      'Input vaangi, instructions adippadaila CPU/Memory-la process panni, Output tharudhu',
      'Internet browse panradhu mattum',
      'Electricity-ah heat-ah maathuradhu'
    ],
    correctIndex: 1,
    explanation: 'Every computer: Input -> Process -> Store -> Output. Indha simple cycle thaan supercomputer varaikkum ellaathukkume adippadai.'
  },
  17: {
    slideId: 17,
    topicName: 'Hardware vs Software',
    question: 'Hardware matrum Software idhula irukra unmaiyana sambandham enna?',
    options: [
      'Hardware-eh illama software run aagum',
      'Hardware physical body (silicon, wires); Software-ngradhu antha physical circuits-ku enna pannanumnu solra instructions',
      'Software thaan wires, Hardware thaan code',
      'Randum computers-la thevaiye illa'
    ],
    correctIndex: 1,
    explanation: 'Hardware physical engine madhiri; software adhai eppadi ottanumnu kaatradhu driver/recipe madhiri.'
  },
  18: {
    slideId: 18,
    topicName: 'The Triangle: CPU, RAM, Storage',
    question: 'Triangle model-la CPU, RAM matrum Storage-oda role enna?',
    options: [
      'CPU = Storage, RAM = Monitor, Storage = Keyboard',
      'CPU = Sinthikra Brain, RAM = Ippo velai seira Desk, Storage = Permanent Cupboard/Biro',
      'CPU = Fan, RAM = Battery, Storage = Wire',
      'Moondrume orey velai thaan seiyyum'
    ],
    correctIndex: 1,
    explanation: 'CPU instructions execute pannum, RAM ippo thevaiana data-va ultra-fast access-la vachirukkum, Storage permanent-ah files pathukakkum.'
  },
  19: {
    slideId: 19,
    topicName: 'What is an Operating System?',
    question: 'Operating System illana namma phone-lo laptop-lo apps epdi run aagum?',
    options: [
      'Romba vegama run aagum',
      'Run aagave aagadhu — apps ellam screen, memory, disk-kaga onnuku onnu sanda pottu crash aaidum',
      'Adhe madhiri thaan run aagum, vidhiyasasam theriyadhu',
      'Internet mattum irundha podhum'
    ],
    correctIndex: 1,
    explanation: 'OS oru master traffic controller. Memory assign panradhu, hardware control panradhu, apps-ah coordinate panradhu OS thaan.'
  },
  20: {
    slideId: 20,
    topicName: 'Client vs Server Model',
    question: 'Client vs Server interaction-la unga phone Google.com open panna Client enna seiyyum?',
    options: [
      'Server-kitta poi direct-ah files-ah eduthu varum',
      'Server-ku HTTP request anuppum; Server process panni response thirumba anuppum',
      'Client internet-ah off pannidum',
      'Client kitchen kulla direct-ah thoongum'
    ],
    correctIndex: 1,
    explanation: 'Client thaan request kekkra customer. Server request process panni HTML/data response-ah client-ku thirumba kudukkum.'
  },
  21: {
    slideId: 21,
    topicName: 'HTTP vs HTTPS',
    question: 'Public Wi-Fi-la HTTP site use pannaa enna risk irukku?',
    options: [
      'Browser color green aaidum',
      'Network-la irukra yaaru venaalum passwords matrum personal details-ah clear text-la padikka mudiyum',
      'Wi-Fi router explode aaidum',
      'Endha risk-um illa, HTTP thaan romba safe'
    ],
    correctIndex: 1,
    explanation: 'HTTP unencrypted postcard madhiri. Naduvula irukra hacker Wi-Fi packet sniffing panni sensitive passwords-ah apdiye vaasikka mudiyum.'
  },
  22: {
    slideId: 22,
    topicName: 'What is an IP Address?',
    question: 'IP address (udhaaranathuku 142.250.190.46) computer-ku ethukaga thevai?',
    options: [
      'Computer password create panna',
      'Global network-la ovvoru device-aiyum uniquely identify panni data packets deliver panna',
      'Monitor brightness adjust panna',
      'USB pen drive read panna'
    ],
    correctIndex: 1,
    explanation: 'Veetuku address illana thabaal kaaran letter thara mudiyadhu madhiri, network-la destination IP address illana data packets reach aagadhu.'
  },
  23: {
    slideId: 23,
    topicName: 'What is a Port Number?',
    question: 'IP address oru apartment building-na, Port number enna?',
    options: [
      'Building-oda paint color',
      'Antha building-la irukra specific veettu kathavu (Apartment door / service entrance)',
      'Building mela irukra flag',
      'Building pakathula irukra maram'
    ],
    correctIndex: 1,
    explanation: 'IP machine-ah kandupidikkum; Port number antha machine-kulla entha application/service kitta data poganumnu mudivu pannum (e.g. 80=Web, 443=Secure Web).'
  },
  24: {
    slideId: 24,
    topicName: 'Input and Output Devices',
    question: 'Pinvarubavattril edhu Input Device mattum thaan?',
    options: [
      'Monitor',
      'Speaker',
      'Keyboard matrum Mouse',
      'Printer'
    ],
    correctIndex: 2,
    explanation: 'Keyboard matrum Mouse human intentions-ah electrical signals-ah maathi computer kulla input-ah anuppudhu.'
  },
  25: {
    slideId: 25,
    topicName: 'What is a Bit and Byte?',
    question: 'Oru Byte-la ethanai Bits irukku?',
    options: [
      '2 bits',
      '4 bits',
      '8 bits',
      '16 bits'
    ],
    correctIndex: 2,
    explanation: '1 Byte = 8 Bits. Ovvoru bit-um 0 illa 1 (on/off). 8 bits senthaa 256 values represent panna mudiyum (oru character).'
  },
  26: {
    slideId: 26,
    topicName: 'Binary Language',
    question: 'Computers yen English-o Tamil-o purinjikaama verum 0 matrum 1 mattum purinjikidhu?',
    options: [
      'English keyboard illadha naala',
      'Physical microchips-la transistors switch-ah vela seiyyum — current irundhaa ON (1), current illana OFF (0)',
      'Programmers-ku math theriyadhu naala',
      '0 and 1 graphics card-ku mattum thaan theriyum'
    ],
    correctIndex: 1,
    explanation: 'Silicon chip-la kotikkanakana transistors switch madhiri on/off aagudhu. Antha high/low voltage thaan binary (0 matrum 1).'
  },
  27: {
    slideId: 27,
    topicName: 'Machine Code',
    question: 'CPU direct-ah execute panra unmaiyana code edhu?',
    options: [
      'Python scripts',
      'HTML tags',
      'Machine Code (Raw binary opcodes & operands)',
      'Word documents'
    ],
    correctIndex: 2,
    explanation: 'High-level languages (C, Python) compile aagi machine code (hex/binary opcodes)-ah maarum pothu thaan CPU silicon execution unit-ala run panna mudiyum.'
  },
  28: {
    slideId: 28,
    topicName: 'What is a Program?',
    question: 'Program-ngradhu disk-la irukkum pothu adhoda state enna?',
    options: [
      'Adhu active-ah CPU use pannittu irukkum',
      'Adhu passive files/instructions — samayal pusthagam madhiri disk-la thoongittu irukkum',
      'Adhu internet-la mattum thaan irukkum',
      'Adhu RAM-la full space eduthu irukkum'
    ],
    correctIndex: 1,
    explanation: 'Program disk-la irukra inactive executable file. Double-click panra varaikkum adhu memory-o CPU-o edukaadhu.'
  },
  29: {
    slideId: 29,
    topicName: 'What is a Process?',
    question: 'Program-kum Process-kum enna mukkiya vidhiyasasam?',
    options: [
      'Program active, Process passive',
      'Program disk-la irukra dormant code; Process-ngradhu RAM-la load aagi active-ah CPU time vaangura running instance',
      'Process-ku memory thevaiye illa',
      'Program thaan Task Manager-la kaattum'
    ],
    correctIndex: 1,
    explanation: 'Recipe book program madhiri; antha recipe-ah vachu kitchen-la active-ah samakkira process thaan Process. Running state-la irukradhu Process.'
  },
  30: {
    slideId: 30,
    topicName: 'Program vs Process Difference',
    question: 'Orey program-ah (e.g. Chrome browser) renu thadava open panna enna aagum?',
    options: [
      'Computer hang aaidum',
      'Orey program file irundhaalum, renu thani thani Process IDs (PID) create aagi thani memory space-la run aagum',
      'Second time open aagave aagadhu',
      'Disk size double aaidum'
    ],
    correctIndex: 1,
    explanation: 'Single binary program on disk can launch multiple independent processes, each with its own memory allocation and unique Process ID (PID).'
  },
  31: {
    slideId: 31,
    topicName: 'Multitasking: How CPU Runs Many Apps',
    question: 'Single CPU core epdi orey nerathula music pottu, download panni, game run pannudhu?',
    options: [
      'Adhuku 100 kaigal irukkum',
      'Time-slicing vazhiya millisecond gap-la ovvoru app-kum maathi maathi super-fast-ah switch pannudhu (Context Switching)',
      'Adhu fake, unmaiyila orey oru app thaan run aagudhu',
      'Storage thaan CPU velaiya paakkudhu'
    ],
    correctIndex: 1,
    explanation: 'CPU microsecond kanakkula apps naduvula context switch pannum. Namma kanukku ellam orey nerathula nadakra madhiri thonum.'
  },
  32: {
    slideId: 32,
    topicName: 'What is a Thread?',
    question: 'Process kulla Thread-oda mukkiya function enna?',
    options: [
      'Adhu mouse cable',
      'Process-oda memory-ah share panni chinna chinna tasks-ah parallel-ah run panra lightweight execution unit',
      'Adhu permanent storage disk',
      'Adhu internet bandwidth booster'
    ],
    correctIndex: 1,
    explanation: 'Process oru veedu madhiri, threads antha veetla vela seira aatkal madhiri. Orey memory space-ah share panni veganga velai mudipaanga.'
  },
  33: {
    slideId: 33,
    topicName: 'What If There Was No Operating System?',
    question: 'OS illadha oru computer-la programmers epdi code elutha vendiyirukkum?',
    options: [
      'Romba easy-ah eluthalaam',
      'Ovvoru hardware component-kum direct machine commands manual-ah eluthanum, endha apps-um share panna mudiyadhu',
      'Web browser mattum automatic-ah run aagum',
      'Code elutha thevaiye irukkaadhu'
    ],
    correctIndex: 1,
    explanation: 'OS illana, screen-la pixel pooduradhukkum hard drive head-ah move panradhukkum neengale raw code eluthanum. Chaos thaan micham!'
  },
  34: {
    slideId: 34,
    topicName: 'RAM vs Storage Deep Dive',
    question: 'Computer power sudden-ah cut aana RAM matrum SSD-kulla enna aagum?',
    options: [
      'RAM-la ellam safe-ah irukkum, SSD erase aaidum',
      'RAM volatile aana naala adhirundha data ellam udane azhinjidum; SSD non-volatile naala files permanent-ah irukkum',
      'Randumey full-ah azhinjidum',
      'Computer automatic-ah battery on pannidum'
    ],
    correctIndex: 1,
    explanation: 'RAM-ku current ponal memory vanish aaidum (Volatile). Storage (SSD/HDD) magnetic/flash memory vachu data-va eppovum vachirukkum (Persistent).'
  },
  35: {
    slideId: 35,
    topicName: 'How Does an App Start? (Double Click)',
    question: 'Desktop-la icon-ah double click pannum pothu OS mudhalla enna pannum?',
    options: [
      'Monitor-ah shut down pannum',
      'Binary-ah disk-la irundhu RAM-ku copy panni, memory allocate panni, CPU instruction pointer-ah program entry point-ku set pannum',
      'Internet speed check pannum',
      'Keyboard-ah lock pannum'
    ],
    correctIndex: 1,
    explanation: 'Double click = OS executable-ah fetch panni RAM-la podum, address space create pannum, CPU-kitta "idho indha address-la irundhu run pannu" nu sollum.'
  },
  36: {
    slideId: 36,
    topicName: 'The CPU Cycle: Fetch, Decode, Execute',
    question: 'CPU-oda unmaiyana heartbeat loop edhu?',
    options: [
      'Click, Double Click, Drag',
      'Fetch (RAM-la irunthu edupathu), Decode (Purinthukolvathu), Execute (Karyam Seivathu)',
      'Upload, Download, Refresh',
      'Save, Exit, Restart'
    ],
    correctIndex: 1,
    explanation: 'The CPU Fetch-Decode-Execute cycle is the continuous heartbeat of all computation across billions of cycles per second.'
  },
  37: {
    slideId: 37,
    topicName: 'Why Apps Cannot Touch Hardware Directly',
    question: 'Normal app (Chrome illa Game) direct-ah hardware register-ah write panna mudiyadhu yen?',
    options: [
      'Hardware romba sooda irukkum nu',
      'Oru malicious app full disk-aiyo illa vera app-oda confidential memory-aiyo azhichida koodadhu nu OS thadukkum',
      'Cables disconnect aaidum nu',
      'Chrome-ku graphics pidikkaadhu nu'
    ],
    correctIndex: 1,
    explanation: 'Strict isolation! Direct hardware access irundha endha virus venaalum unga camera-va on pannalam, disk-ah format pannalam. Adhanaala Kernel thaan naduvula nikkudhu.'
  },
  38: {
    slideId: 38,
    topicName: 'The 3 Layers: App, Kernel, Hardware',
    question: 'Computer-oda 3 essential security layers endha order-la varum?',
    options: [
      'Hardware -> App -> Kernel',
      'User App -> OS Kernel -> Physical Hardware',
      'Kernel -> User App -> Hardware',
      'Hardware -> Internet -> Monitor'
    ],
    correctIndex: 1,
    explanation: 'Apps top layer (User Space); Kernel middle supervisor layer; Hardware bottom physical layer. All requests must go through the Kernel.'
  },
  39: {
    slideId: 39,
    topicName: 'What is Memory (RAM) Allocation?',
    question: 'OS ovvoru process-kum memory allocate pannum pothu Virtual Memory yen use pannudhu?',
    options: [
      'Physical RAM poyyaa kaatta',
      'Ovvoru process-kum adhudhan moththa computer memory-layum irukkura maadhiri isolated private address space thara',
      'Game graphics semmaya irukka',
      'RAM chip velaiya kurakka'
    ],
    correctIndex: 1,
    explanation: 'Virtual Memory creates isolated memory sandbox for each process. Process A cannot simply read or write into Process B\'s memory addresses.'
  },
  40: {
    slideId: 40,
    topicName: 'Memory Isolation & Protection',
    question: 'Oru tab browser-la crash aanaalum laptop full-ah crash aagama irukka enna kaaranam?',
    options: [
      'Laptop battery nallaa irukku',
      'OS memory isolation vachu ovvoru process-aiyum isolated sandboxes-la vechirukkudhu',
      'Monitor automatic refresh aagudhu',
      'Google internet fast-ah irukku'
    ],
    correctIndex: 1,
    explanation: 'Memory isolation prevents faulty or malicious code in one process from corrupting the address space or execution of other processes.'
  },
  41: {
    slideId: 41,
    topicName: 'Buffer Overflow: The Basic Concept',
    question: 'Buffer Overflow vulnerability epdi uruvaagudhu?',
    options: [
      'Monitor-la dust padinjaa',
      'Programmer allocate panna memory buffer-oda size-ah vida athigamaana data-va boundary check pannama copy pannumbodhu',
      'Hard disk space full aana udane',
      'Fan speed slow aanaal'
    ],
    correctIndex: 1,
    explanation: '200ml cup-la 500ml thanni oothuna pakathula irukra table-la sinthuradhu madhiri, buffer limit thandinaal pakathu memory registers overwrite aagi exploit aagum.'
  },
  42: {
    slideId: 42,
    topicName: 'Authentication vs Authorization',
    question: 'Authentication-kum Authorization-kum enna unmaiyana vidhiyasasam?',
    options: [
      'Randumey username password mattum thaan',
      'Authentication = Neenga yaaru (Identity verify panradhu); Authorization = Ungalukku enna permission irukku (Access rights)',
      'Authentication file save pannum, Authorization print pannum',
      'Authentication hacker velai, Authorization police velai'
    ],
    correctIndex: 1,
    explanation: 'ID card kaatti office kulla nuzhaiyadhu Authentication. Server room kulla poga ungalukku permission irukkanu badge check panradhu Authorization.'
  },
  43: {
    slideId: 43,
    topicName: 'Principle of Least Privilege',
    question: 'Principle of Least Privilege cybersecurity-la yen oru golden rule?',
    options: [
      'Ella user-kum full Admin password thara vendum',
      'Oru user illa app-ku avanga velai seiyya thevaiana MINIMUM permissions mattum thara vendum',
      'Yaarukkume computer access thara koodadhu',
      'Monthly once password matha koodadhu'
    ],
    correctIndex: 1,
    explanation: 'Least privilege ensures that if an account or application gets hacked, the attacker only gets limited access and cannot destroy the whole system.'
  },
  44: {
    slideId: 44,
    topicName: 'Day 1 Recap & Milestone Check',
    question: 'Day 1 mudikkum pothu namma master panna core takeaway enna?',
    options: [
      'Kali Linux terminal font matha kathukittom',
      'Computer systems adippadai (Hardware, Memory, OS, Process isolation, Security boundaries) first principles vazhiya purinjikittom',
      'Social media accounts-ah block panna kathukittom',
      'Gaming PC assemble panna kathukittom'
    ],
    correctIndex: 1,
    explanation: 'Day 1 builds the unshakable bedrock: understanding the physical machine, operating systems, and process mechanics from ground zero.'
  },
  45: {
    slideId: 45,
    topicName: 'Day 2 Opening & Welcome Back',
    question: 'Day 2-la namma enna deep technical layers-ah explore panna porom?',
    options: [
      'Graphic design templates',
      'Operating System kulla irukra Kernel, System Calls, Privilege Rings matrum Exploitation mechanics',
      'Video editing tools',
      'HTML web design'
    ],
    correctIndex: 1,
    explanation: 'Day 2 moves from general systems architecture into deep low-level OS internals: Kernel, Syscalls, Rings, and defensive security engineering.'
  },
  46: {
    slideId: 46,
    topicName: 'What is the Operating System Kernel?',
    question: 'Operating System-oda "Kernel"-ku enna power irukku?',
    options: [
      'Adhu verum oru wallpaper image',
      'Adhu OS-oda heart & brain — Ring 0-la run aagi hardware, memory matrum CPU-ah direct-ah govern pannum',
      'Adhu external USB flash drive',
      'Adhu verum mouse pointer speed controller'
    ],
    correctIndex: 1,
    explanation: 'Kernel is the core engine of the OS. It has supreme authority over hardware, CPU, memory, and devices.'
  },
  47: {
    slideId: 47,
    topicName: 'User Space vs Kernel Space',
    question: 'User Space-la run aagura application (e.g. Media Player) yen direct-ah SSD-la write panna mudiyadhu?',
    options: [
      'SSD speed adhigamaa irukkum nu',
      'User Space restricted sandbox; unsafe actions thadukka Kernel Space permission vazhiya thaan nadakkanum',
      'Media player-ku paatu paada mattum thaan theriyum',
      'Computer screen off aaidum nu'
    ],
    correctIndex: 1,
    explanation: 'Separating User Space and Kernel Space isolates unprivileged user software from core operating system integrity.'
  },
  48: {
    slideId: 48,
    topicName: 'Privilege Rings: Ring 3 vs Ring 0',
    question: 'x86 architecture-la Ring 3 matrum Ring 0-oda difference enna?',
    options: [
      'Ring 3 super fast, Ring 0 slow',
      'Ring 3 (Least Privileged) user apps run aagum; Ring 0 (Most Privileged) Kernel run aagi hardware control pannum',
      'Ring 3-la kernel irukkum, Ring 0-la apps irukkum',
      'Randum computer fans-oda rings'
    ],
    correctIndex: 1,
    explanation: 'Hardware CPU enforces Privilege Rings. Ring 3 instructions cannot execute privileged CPU opcodes like disabling interrupts or direct I/O.'
  },
  49: {
    slideId: 49,
    topicName: 'What is a System Call (Syscall)?',
    question: 'System Call-ah bank counter token-oda compare panrom — yen?',
    options: [
      'Bank-la AC nallaa irukkum nu',
      'User app direct-ah vault kulla poga koodadhu; Counter window (Syscall) vazhiya Kernel kitta request panni thaan hardware access vaanganum',
      'Syscall use panna panam kattanum',
      'Syscall ATM card madhiri vela seiyyum'
    ],
    correctIndex: 1,
    explanation: 'A System Call (syscall) is the programmatic gate where user apps request kernel-level privileged services like reading a file or opening a network socket.'
  },
  50: {
    slideId: 50,
    topicName: 'Why System Calls Matter in Cybersecurity',
    question: 'Cybersecurity researchers syscalls-ah yen romba kavanama monitor panraanga?',
    options: [
      'Yenna syscalls keyboard light-ah on pannum',
      'Yenna malware ethavathu thappu seiyyanumna (file write, network send, process spawn) kandippa syscall vazhiya thaan poyaganum',
      'Syscalls monitor panna internet free-ah kedaikkum',
      'Syscalls Windows-la mattum thaan irukkum'
    ],
    correctIndex: 1,
    explanation: 'Every malicious behavior (ransomware encrypting files, trojan exfiltrating data) must make syscalls. Intercepting syscalls reveals malicious actions.'
  },
  51: {
    slideId: 51,
    topicName: 'File Descriptors & File Operations',
    question: 'Linux / Unix operating system-la "Everything is a file" na enna artham?',
    options: [
      'Ella files-um PDF format-la irukkum',
      'Files, network sockets, keyboard, display ellaame integer file descriptors (FDs) vazhiya standard API-la handle aagum',
      'Hard disk-la verum notepad files mattum thaan irukkum',
      'Folders-eh irukkaadhu nu artham'
    ],
    correctIndex: 1,
    explanation: 'In Unix philosophy, devices, network sockets, and pipes are represented as file descriptors with standard read(), write(), close() operations.'
  },
  52: {
    slideId: 52,
    topicName: 'Permissions & File Security (r-w-x)',
    question: 'Linux-la permission string "rwx r-x r--" la "r-x" enna kurikkidhu?',
    options: [
      'Read, Write, Delete',
      'Read matrum Execute permission irukku, aana Write permission illa',
      'Restart, Wait, Exit',
      'Read only'
    ],
    correctIndex: 1,
    explanation: 'r = Read (vaasikka), w = Write (thirutha), x = Execute (run panna). r-x means read and execute are allowed, but writing is blocked.'
  },
  53: {
    slideId: 53,
    topicName: 'Root / Administrator Privileges',
    question: 'Operating system-la "Root / Administrator" account-ku enna special power irukku?',
    options: [
      'Internet bill automatic-ah pay pannidum',
      'Full unrestricted privileges — entha file-aiyum read, modify, delete panna mudiyum, entha process-aiyum kill panna mudiyum',
      'Computer screen resolution-ah change panna mudiyadhu',
      'Verum games mattum thaan install panna mudiyum'
    ],
    correctIndex: 1,
    explanation: 'Root/Administrator is the superuser with total system sovereignty, bypassing all ordinary permission checks.'
  },
  54: {
    slideId: 54,
    topicName: 'Privilege Escalation',
    question: 'Privilege Escalation attack-na unmaiyile enna nadakkudhu?',
    options: [
      'Computer RAM size increase aagum',
      'Standard low-privilege user account-la nuzhainja attacker oru vulnerability use panni Root/Admin privileges-ah thiruttu thanama vaanguraar',
      'Wi-Fi password automatic-ah crack aagum',
      'Monitor brightness maximize aagum'
    ],
    correctIndex: 1,
    explanation: 'Privilege escalation occurs when an adversary exploits a flaw in a privileged program to ascend from normal user privileges to root/admin authority.'
  },
  55: {
    slideId: 55,
    topicName: 'Linux Architecture Overview',
    question: 'Linux architecture-la Shell-oda mukkiya velai enna?',
    options: [
      'Adhu physical plastic cover',
      'User kodukkura text commands-ah interpret panni Kernel kitta execute panna request anuppudhu',
      'Adhu computer sound card',
      'Adhu internet router'
    ],
    correctIndex: 1,
    explanation: 'Shell is a command interpreter (like bash or zsh) that acts as the human interface to the operating system kernel.'
  },
  56: {
    slideId: 56,
    topicName: 'Windows vs Linux Security Model',
    question: 'Security architecture-la Windows matrum Linux-kulla irukra oru key difference enna?',
    options: [
      'Linux-ku internet connection theva illa',
      'Windows complex Access Control Lists (ACLs) & Registry use pannudhu; Linux simple permissions (rwx) & file hierarchy use pannudhu',
      'Windows-la hackerse varamudiyadhu',
      'Linux-la mouse click pannave mudiyadhu'
    ],
    correctIndex: 1,
    explanation: 'Windows utilizes fine-grained Access Control Lists (ACLs) and Registry; Linux uses the everything-is-a-file model with traditional and extended POSIX permissions.'
  },
  57: {
    slideId: 57,
    topicName: 'Process Injection & Hooking',
    question: 'Attacker process injection use panni malicious code-ah yen legitimate app (e.g. explorer.exe) kulla thukki podraaru?',
    options: [
      'File size-ah kurakka',
      'Antivirus matrum EDR detection-la irunthu thappichu, legitimate app-oda disguise-la secret-ah operate panna',
      'Computer speed-ah double aakka',
      'Monitor color-ah enhance panna'
    ],
    correctIndex: 1,
    explanation: 'Process injection runs malicious payloads inside the memory address space of trusted processes to evade security tools and borrow trusted privileges.'
  },
  58: {
    slideId: 58,
    topicName: 'Network Sockets & OS Networking Stack',
    question: 'Network socket create aagum pothu OS enna connection setup pannudhu?',
    options: [
      'Screen-la new window create pannum',
      'Network data packets-ah IP + Port combo vachu specific application process memory-kooda link pannum',
      'Power cord-ah lock pannum',
      'Hard drive-ah compress pannum'
    ],
    correctIndex: 1,
    explanation: 'A network socket connects physical network interfaces to software processes using IP address, port, and transport protocol (TCP/UDP).'
  },
  59: {
    slideId: 59,
    topicName: 'Thinking Like a Security Researcher',
    question: 'Script Kiddie-kum real Security Researcher-kum enna unmaiyana vidhiyasasam?',
    options: [
      'Script Kiddie suit poduvaaru, Researcher hoodie poduvaaru',
      'Script Kiddie puriyaama download panna tool buttons click pannuvaaru; Researcher system epdi velai seiyuthunu first principles aaraainju kuraigalai kandupidipaaru',
      'Researcher tools use panna maatargu',
      'Script Kiddie-ku typing speed adhigam'
    ],
    correctIndex: 1,
    explanation: 'True security researchers do not blindly run automated tools; they dissect system logic, verify boundaries, and understand architecture.'
  },
  60: {
    slideId: 60,
    topicName: 'Final Roadmap: Becoming a Cyber Engineer',
    question: 'EV Cyber Academy-oda 2-Day webinar muditha pin, next step roadmap enna?',
    options: [
      'Random YouTube videos paathu confuse aaguradhu',
      'Hands-on Linux mastery, deep networking protocols, systems programming, and continuous defensive engineering labs',
      'Social media hacking groups-la join panradhu',
      'Padikkuradha stop panradhu'
    ],
    correctIndex: 1,
    explanation: 'The journey to becoming a Cybersecurity Engineer continues with disciplined hands-on labs, Linux fluency, networking mastery, and first-principles curiosity.'
  }
};
