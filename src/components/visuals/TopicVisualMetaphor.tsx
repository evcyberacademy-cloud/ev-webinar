import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Server, 
  Database, 
  Shield, 
  ShieldAlert, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Key, 
  Mail, 
  FileText, 
  Cpu, 
  HardDrive, 
  Layers, 
  User, 
  AlertTriangle, 
  Search, 
  ArrowRight, 
  ArrowLeftRight,
  Terminal, 
  Zap, 
  CheckCircle2, 
  HelpCircle,
  Clock,
  DoorOpen,
  Wifi,
  Package,
  Eye,
  EyeOff,
  Flame,
  Binary
} from 'lucide-react';

interface TopicVisualMetaphorProps {
  slideId: number;
  currentStep?: number;
}

export const TopicVisualMetaphor: React.FC<TopicVisualMetaphorProps> = ({ slideId, currentStep = 0 }) => {
  // Bespoke visual diagrams for complete beginners based on slide ID

  // 1. WHAT IS A SERVER? (Slide 10, 20)
  if (slideId === 10 || slideId === 20) {
    return (
      <div className="w-full p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Katchi Udhaaranam: Hotel Sapadu Order
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
            Beginner Concept
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Customer */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-2 shadow-md">
              <Smartphone className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white">Unga Phone (Client)</span>
            <span className="text-[10px] text-cyan-300 font-medium mt-0.5">"Pasiyoda Irukra Customer"</span>
            <p className="text-[11px] text-slate-400 mt-1">Website-o bank balance-o kekkudhu</p>
          </div>

          {/* Waiter / Road */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center text-center relative">
            <div className="w-12 h-12 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mb-2 shadow-md">
              <ArrowLeftRight className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white">Internet (Network)</span>
            <span className="text-[10px] text-indigo-300 font-medium mt-0.5">"Order eduthu pora Waiter"</span>
            <p className="text-[11px] text-slate-400 mt-1">Kitchen-ku order kondu poi saapaadu thirumba tharudhu</p>
          </div>

          {/* Kitchen / Server */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex flex-col items-center text-center shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 mb-2 shadow-md">
              <Server className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white">Server (Computer)</span>
            <span className="text-[10px] text-cyan-300 font-medium mt-0.5">"24/7 Velai Seiyyum Kitchen"</span>
            <p className="text-[11px] text-slate-400 mt-1">Cook panni lakshakkanakana makkalukku anuppudhu</p>
          </div>
        </div>
      </div>
    );
  }

  // 2. RAM VS STORAGE (Slide 18, 34)
  if (slideId === 18 || slideId === 34) {
    return (
      <div className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Katchi Udhaaranam: Padikkira Table vs Biro / Cupboard
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
            Ippo Thevai vs Eppovum Pathiram
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Desk = RAM */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/40 flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-300 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-white">RAM (Memory)</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-900/60 text-cyan-300 font-mono font-bold">Vegam / Tharkaaliyam</span>
              </div>
              <span className="text-xs text-cyan-400 font-semibold block mt-0.5">Padikkira Table Madhiri 📝</span>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Ippo padikkira book mela irukkum. Romba vegam, aana thoonga pona (current ponal) table clean aaidum.
              </p>
            </div>
          </div>

          {/* Cupboard = Storage */}
          <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/40 flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/50 flex items-center justify-center text-indigo-300 shrink-0">
              <HardDrive className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-white">SSD / Storage</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-900/60 text-indigo-300 font-mono font-bold">Nilaiyaana Idham</span>
              </div>
              <span className="text-xs text-indigo-400 font-semibold block mt-0.5">Veettu Biro / Cupboard 🗄️</span>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Ella files-um permanent-ah irukkum. Eduthu vaikka 2 second aanaalum current ponalum azhiyaadhu!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. WHAT IS AN IP ADDRESS? (Slide 22)
  if (slideId === 22) {
    return (
      <div className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Katchi Udhaaranam: Thabaal Cover Address
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
            Ovvoru Device-kum Oru Address
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-300 font-bold block">ADDRESS:</span>
              <span className="text-lg font-mono font-extrabold text-white">142.250.190.46</span>
              <p className="text-xs text-slate-400 mt-0.5">Google-oda unmaiyana digital veetu address</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ArrowRight className="w-4 h-4 text-cyan-400" />
            <span>Address illana postman-ala letter kudukka mudiyadhu!</span>
          </div>
        </div>
      </div>
    );
  }

  // 4. WHAT IS A PORT NUMBER? (Slide 23)
  if (slideId === 23) {
    return (
      <div className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Katchi Udhaaranam: Apartment Veettu Kathavugal
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
            IP = Building, Port = Kathavu
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
            <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
              <DoorOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white font-mono">Kathavu 80</span>
            <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">HTTP (Saadhaarna Web)</span>
            <p className="text-[11px] text-slate-400 mt-1">Ellarum varakoodiya mun kathavu</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-center shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <div className="w-10 h-10 mx-auto rounded-lg bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 mb-2">
              <Lock className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white font-mono">Kathavu 443</span>
            <span className="text-[10px] text-cyan-300 font-semibold block mt-0.5">HTTPS (Pathukaappaana Web)</span>
            <p className="text-[11px] text-slate-400 mt-1">Poottu potta VIP security kathavu</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
            <div className="w-10 h-10 mx-auto rounded-lg bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-2">
              <Key className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white font-mono">Kathavu 22</span>
            <span className="text-[10px] text-purple-300 font-semibold block mt-0.5">SSH (Admin Kathavu)</span>
            <p className="text-[11px] text-slate-400 mt-1">Engineer mattum ragaasiya saavi vachu thirakkum backdoor</p>
          </div>
        </div>
      </div>
    );
  }

  // 5. WHAT IS A FIREWALL? (Slide 50 or Network Security)
  if (slideId === 50 || slideId === 12) {
    return (
      <div className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            Katchi Udhaaranam: Kottai Security Guard
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
            Ovvoru Visitor-aiyum Check Pannum
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs font-bold text-slate-300 block mb-1">Incoming Traffic</span>
            <span className="text-[11px] text-slate-400">Ulla vara paarkra visitors</span>
          </div>

          <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <div className="w-10 h-10 mx-auto rounded-lg bg-rose-950 border border-rose-500/50 flex items-center justify-center text-rose-400 mb-1.5">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-xs font-extrabold text-white">FIREWALL</span>
            <span className="text-[10px] text-rose-300 block mt-0.5">ID card & Kathavu number check pannum</span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
            <span className="text-xs font-bold text-emerald-300 block mb-1">Safe-ana Aatkal Ulla</span>
            <span className="text-[11px] text-slate-400">Thevailladha aniyaayangal block aagum!</span>
          </div>
        </div>
      </div>
    );
  }

  // 6. WHAT IS THE KERNEL & PROCESS? (Slide 37, 38, 47, 48, 55)
  if (slideId === 37 || slideId === 38 || slideId === 47 || slideId === 48 || slideId === 55) {
    return (
      <div className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Katchi Udhaaranam: Bank Cashier & Locker
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
            Apps Direct-ah Hardware Thoda Mudiyadhu
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/30 text-center">
            <div className="w-10 h-10 mx-auto rounded-lg bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-1.5">
              <Smartphone className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white">App (Chrome/Game)</span>
            <p className="text-[11px] text-slate-400 mt-1">Counter-la nikkira Customer</p>
          </div>

          <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/40 text-center shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <div className="w-10 h-10 mx-auto rounded-lg bg-purple-950/80 border border-purple-500/50 flex items-center justify-center text-purple-400 mb-1.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white">The Kernel (OS)</span>
            <p className="text-[11px] text-purple-200 mt-1">Vault saavi vachirukra Bank Manager</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
            <div className="w-10 h-10 mx-auto rounded-lg bg-slate-950 border border-slate-700 flex items-center justify-center text-cyan-400 mb-1.5">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white">Physical Hardware</span>
            <p className="text-[11px] text-slate-400 mt-1">Locker (SSD, Wi-Fi, Camera)</p>
          </div>
        </div>
      </div>
    );
  }

  // 7. WHAT IS ENCRYPTION / HTTPS? (Slide 15, 21, 51)
  if (slideId === 15 || slideId === 21 || slideId === 51) {
    return (
      <div className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            Katchi Udhaaranam: Postcard vs Poottu Potta Petti
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
            Open Text vs Rahasiya Code
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-950 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
              <Unlock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-300 block">HTTP = Thabaal Postcard ✉️</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Naduvula irukra yaaru venaalum unga password-ah apdiye vaasikka mudiyum!</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-300 block">HTTPS = Irumbu Petti 💼</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Rahasiya saavi pottu lock aayirukku. Thidangalukku puriyadha eluthukal thaan theriyum!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 8. WHAT IS A VULNERABILITY & EXPLOIT? (Slide 8, 14, 56, 57)
  if (slideId === 8 || slideId === 14 || slideId === 56 || slideId === 57) {
    return (
      <div className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            Katchi Udhaaranam: Udanja Jannal vs Thirudan
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
            Kuraipaadu vs Attack
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <DoorOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-300 block">Vulnerability = Udanja Poottu 🪟</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Programmer code-la theriyama vitta thavaru/kuraipaadu.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-950 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-300 block">Exploit = Jannal Vali Ulla Varadhu 🚪</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Antha kuraipaata vachu thirudan ulla vara use panra command.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT / UNIVERSAL VISUAL METAPHOR:
  // Shows an intuitive 3-step visual sequence for the topic
  return (
    <div className="w-full p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90 border border-slate-800 shadow-xl">
      <div className="flex items-center justify-between mb-3 px-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Interactive Visual Model
        </span>
        <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Adippadai Arivu
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Step 1: Real Life */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-2">
            <Eye className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-white">1. Nilavaram (Real World)</span>
          <span className="text-[10px] text-amber-300 font-medium mt-0.5">Neenga paakura vishayam</span>
        </div>

        {/* Step 2: Under the Hood */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 flex flex-col items-center text-center shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 mb-2">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-white">2. Computer Kulla</span>
          <span className="text-[10px] text-cyan-300 font-medium mt-0.5">Computer epdi handle pannudhu</span>
        </div>

        {/* Step 3: Security Impact */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-white">3. Cyber Defense</span>
          <span className="text-[10px] text-emerald-400 font-medium mt-0.5">Security ethuku thevai</span>
        </div>
      </div>
    </div>
  );
};
