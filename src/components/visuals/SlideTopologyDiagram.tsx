import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Laptop, 
  Globe, 
  Server, 
  Database, 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  Cpu, 
  HardDrive, 
  Layers, 
  Lock, 
  Unlock, 
  Key, 
  ArrowRight, 
  ArrowLeftRight, 
  Terminal, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  User, 
  RefreshCw, 
  Eye, 
  Flame, 
  Binary, 
  FileCode, 
  Activity, 
  Network,
  DoorOpen,
  Wifi,
  Package,
  Sparkles,
  Bug,
  HelpCircle,
  Home,
  Check,
  X,
  Radio,
  FileCheck
} from 'lucide-react';

interface SlideTopologyDiagramProps {
  slideId: number;
  currentStep?: number;
  onStepForward?: () => void;
  compact?: boolean;
}

export const SlideTopologyDiagram: React.FC<SlideTopologyDiagramProps> = ({
  slideId,
  currentStep = 0,
  onStepForward,
  compact = false
}) => {
  const [activeMode, setActiveMode] = useState<'normal' | 'attack' | 'inspect'>('normal');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [packetTick, setPacketTick] = useState(0);

  // Smooth continuous packet loop
  useEffect(() => {
    const timer = setInterval(() => {
      setPacketTick(prev => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  // Determine topology type based on slideId
  const getTopologyType = (id: number): string => {
    if (id === 9 || id === 10 || id === 20) return 'banking-pipeline';
    if (id === 11) return 'database-vault';
    if (id === 12) return 'firewall-bouncer';
    if (id === 13) return 'api-gateway';
    if (id === 14 || id === 41) return 'buffer-overflow';
    if (id === 15) return 'encryption-matrix';
    if (id === 16 || id === 17 || id === 24) return 'hardware-bus';
    if (id === 18 || id === 34) return 'ram-vs-storage';
    if (id === 19 || id === 33 || id === 37 || id === 38) return 'os-conductor';
    if (id === 21) return 'http-vs-https';
    if (id === 22 || id === 23) return 'ip-ports';
    if (id === 25 || id === 26 || id === 27) return 'binary-registers';
    if (id === 28 || id === 29 || id === 30) return 'program-vs-process';
    if (id === 31 || id === 32) return 'multitasking-cpu';
    if (id === 35 || id === 36) return 'cpu-cycle';
    if (id === 39 || id === 40) return 'memory-isolation';
    if (id === 42 || id === 43) return 'auth-least-privilege';
    if (id === 46 || id === 47 || id === 48) return 'privilege-rings';
    if (id === 49 || id === 50 || id === 55) return 'kernel-syscall-gate';
    if (id === 51 || id === 52) return 'file-descriptors';
    if (id === 53 || id === 54) return 'privilege-escalation';
    if (id === 56 || id === 57) return 'process-injection';
    if (id === 58) return 'network-socket-stack';
    if (id === 7 || id === 8) return 'house-risk';
    if (id === 4 || id === 5) return 'agenda-pillars';
    if (id === 59 || id === 60) return 'researcher-mindset';
    return 'generic-system';
  };

  const topologyType = getTopologyType(slideId);

  return (
    <div className={`w-full rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-md transition-all ${compact ? 'p-3' : 'p-4 sm:p-5'}`}>
      
      {/* ========================================================================= */}
      {/* 1. BANKING 3-TIER PIPELINE (Slides 9, 10, 20) */}
      {/* ========================================================================= */}
      {topologyType === 'banking-pipeline' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                {slideId === 10 ? 'SERVER 24/7 DAEMON TOPOLOGY' : slideId === 20 ? 'CLIENT-SERVER REQUEST/RESPONSE PIPELINE' : 'END-TO-END BANKING ARCHITECTURE'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveMode('normal')}
                className={`px-2.5 py-0.5 rounded font-medium transition-all ${
                  activeMode === 'normal' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400'
                }`}
              >
                Normal Flow
              </button>
              <button
                onClick={() => setActiveMode('attack')}
                className={`px-2.5 py-0.5 rounded font-medium transition-all ${
                  activeMode === 'attack' ? 'bg-red-500/20 text-red-300 border border-red-500/40' : 'text-slate-400'
                }`}
              >
                Attacker MITM
              </button>
            </div>
          </div>

          <div className="relative py-2">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 relative z-10">
              {/* Node 1: Client */}
              <div 
                onClick={() => setSelectedNode('client')}
                className={`cursor-pointer p-3 rounded-xl border text-center transition-all ${
                  selectedNode === 'client' ? 'bg-cyan-950/80 border-cyan-400 ring-2 ring-cyan-500/30' : 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-1.5">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white block">Client App</span>
                <span className="text-[10px] text-cyan-400 font-mono">Mobile / Browser</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">"Kekira Aalu"</span>
              </div>

              {/* Node 2: Network / Wi-Fi */}
              <div 
                onClick={() => setSelectedNode('network')}
                className={`cursor-pointer p-3 rounded-xl border text-center transition-all ${
                  selectedNode === 'network' ? 'bg-blue-950/80 border-blue-400 ring-2 ring-blue-500/30' : 'bg-slate-900/90 border-slate-800 hover:border-blue-500/40'
                }`}
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-1.5 relative">
                  <Wifi className="w-5 h-5" />
                  {activeMode === 'attack' && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  )}
                </div>
                <span className="text-xs font-bold text-white block">Network Link</span>
                <span className="text-[10px] text-blue-400 font-mono">TLS 1.3 Wire</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">{activeMode === 'attack' ? 'Sniffer Intercept!' : 'Order Courier'}</span>
              </div>

              {/* Node 3: Firewall / WAF */}
              <div 
                onClick={() => setSelectedNode('firewall')}
                className={`cursor-pointer p-3 rounded-xl border text-center transition-all ${
                  selectedNode === 'firewall' ? 'bg-amber-950/80 border-amber-400 ring-2 ring-amber-500/30' : 'bg-slate-900/90 border-slate-800 hover:border-amber-500/40'
                }`}
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-1.5">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white block">Firewall</span>
                <span className="text-[10px] text-amber-400 font-mono">Port & Rule Check</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Security Bouncer</span>
              </div>

              {/* Node 4: Server */}
              <div 
                onClick={() => setSelectedNode('server')}
                className={`cursor-pointer p-3 rounded-xl border text-center transition-all ${
                  selectedNode === 'server' ? 'bg-purple-950/80 border-purple-400 ring-2 ring-purple-500/30' : 'bg-slate-900/90 border-slate-800 hover:border-purple-500/40'
                }`}
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-1.5">
                  <Server className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white block">Bank Server</span>
                <span className="text-[10px] text-purple-400 font-mono">24/7 Compute Logic</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Kitchen / Chef</span>
              </div>

              {/* Node 5: Database Vault */}
              <div 
                onClick={() => setSelectedNode('database')}
                className={`cursor-pointer p-3 rounded-xl border text-center transition-all col-span-2 sm:col-span-1 ${
                  selectedNode === 'database' ? 'bg-emerald-950/80 border-emerald-400 ring-2 ring-emerald-500/30' : 'bg-slate-900/90 border-slate-800 hover:border-emerald-500/40'
                }`}
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-1.5">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white block">Database Vault</span>
                <span className="text-[10px] text-emerald-400 font-mono">ACID Ledger</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Bank Locker Safe</span>
              </div>
            </div>
          </div>

          {/* Tactical Bottom Strip */}
          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                {selectedNode === 'client' && 'Client Layer: Phone screen-la button amukkinaal request dispatch aagum.'}
                {selectedNode === 'network' && 'Network Layer: Wi-Fi wire vazhiya packet pogum — encryption illana sniffer thirudidum.'}
                {selectedNode === 'firewall' && 'Firewall Layer: Unwanted attacks-ah filter panni good packets mattum ulla vidum.'}
                {selectedNode === 'server' && 'Server Layer: 24/7 thoongaama run aagi authentication & balance check pannum.'}
                {selectedNode === 'database' && 'Database Layer: Unmaiyana balance permanent-ah safe-aa store aagi irukkum.'}
                {!selectedNode && '⚡ First Principle: Client request anuppum, Server process panni badhil tharum. Naduvula security guard thadukkum!'}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono hidden sm:inline shrink-0">Click node to inspect</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. DATABASE VAULT & ACID STORAGE (Slide 11) */}
      {/* ========================================================================= */}
      {topologyType === 'database-vault' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                DATABASE ARCHITECTURE: TRANSACTION INTEGRITY & VAULT
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              ACID Compliant
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <Server className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <span className="text-xs font-bold text-white block">Query Engine</span>
              <span className="text-[10px] text-cyan-400 font-mono">SELECT * FROM accounts</span>
              <p className="text-[11px] text-slate-400 mt-1">App server anuppum structured request</p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center shadow-lg">
              <Database className="w-8 h-8 text-emerald-400 mx-auto mb-2 animate-pulse" />
              <span className="text-xs font-bold text-white block">ACID Ledger Engine</span>
              <span className="text-[10px] text-emerald-400 font-mono">Atomicity & Consistency</span>
              <p className="text-[11px] text-slate-400 mt-1">Paadhi transaction aanaal ROLLBACK pannum</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <Lock className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <span className="text-xs font-bold text-white block">Security & Access Control</span>
              <span className="text-[10px] text-amber-400 font-mono">Least Privilege Grants</span>
              <p className="text-[11px] text-slate-400 mt-1">Direct public access strictly banned</p>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-emerald-400 font-bold font-mono">⚡ Takeaway:</span>
            <span>Database oru digital locker madhiri. Data permanent-ah irukkanum, lock pottu safe-aa vechirukkanum!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. FIREWALL BOUNCER & TRAFFIC FILTERING (Slide 12) */}
      {/* ========================================================================= */}
      {topologyType === 'firewall-bouncer' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                FIREWALL PACKET FILTERING & BOUNCER TOPOLOGY
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400">Rule Table Inspection</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1 items-center">
            {/* Incoming Packets */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 font-mono text-xs">
              <span className="text-[10px] text-slate-400 block font-sans">INCOMING TRAFFIC:</span>
              <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-800/30 text-emerald-300 flex justify-between text-[11px]">
                <span>Port 443 [HTTPS]</span>
                <span className="text-emerald-400 font-bold">ACCEPT</span>
              </div>
              <div className="p-1.5 rounded bg-red-950/40 border border-red-800/30 text-red-300 flex justify-between text-[11px]">
                <span>Port 23 [Telnet Scan]</span>
                <span className="text-red-400 font-bold">DROP</span>
              </div>
              <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-800/30 text-emerald-300 flex justify-between text-[11px]">
                <span>Port 80 [HTTP]</span>
                <span className="text-emerald-400 font-bold">ACCEPT</span>
              </div>
            </div>

            {/* Firewall Bouncer */}
            <div className="p-4 rounded-xl bg-cyan-950/50 border border-cyan-500/50 text-center shadow-lg">
              <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-1.5 animate-pulse" />
              <span className="text-xs font-bold text-white block">SECURITY BOUNCER</span>
              <span className="text-[10px] text-cyan-300 font-mono block">Stateful Inspection</span>
              <p className="text-[10px] text-slate-300 mt-1">Unwanted kathavugal-ah thirakka vidaadhu</p>
            </div>

            {/* Protected Internal Servers */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-center">
              <Server className="w-8 h-8 text-emerald-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-white block">Protected Network</span>
              <span className="text-[10px] text-emerald-400 font-mono">Zero Direct Exposure</span>
              <p className="text-[10px] text-slate-400 mt-1">Clean verified traffic only</p>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-cyan-400 font-bold font-mono">⚡ Rule:</span>
            <span>Firewall oru night club bouncer madhiri. List-la per illadha (unauthorized port) yaarayum ulla vidaadhu!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. API GATEWAY & WAITER ENDPOINTS (Slide 13) */}
      {/* ========================================================================= */}
      {topologyType === 'api-gateway' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase">
                API GATEWAY TOPOLOGY: REST ENDPOINTS & WAITER
              </span>
            </div>
            <span className="text-[11px] font-mono text-blue-300">JSON Contract</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1 items-center">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <Smartphone className="w-8 h-8 text-cyan-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-white block">Frontend App</span>
              <span className="text-[10px] text-cyan-400 font-mono">Calls API URL</span>
              <p className="text-[10px] text-slate-400 mt-1">"Menu card-la irundhu order pannudhu"</p>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/50 text-center shadow-lg">
              <ArrowLeftRight className="w-8 h-8 text-blue-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-white block">API Waiter (Gateway)</span>
              <span className="text-[10px] text-blue-300 font-mono block">/api/v1/transfer</span>
              <p className="text-[10px] text-slate-300 mt-1">Kitchen-kum Customer-kum naduvula connector</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-center">
              <Database className="w-8 h-8 text-emerald-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-white block">Backend Database</span>
              <span className="text-[10px] text-emerald-400 font-mono">Business Logic & Data</span>
              <p className="text-[10px] text-slate-400 mt-1">Samayal panni badhil ready pannum</p>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-blue-400 font-bold font-mono">⚡ API Insight:</span>
            <span>App-kum Database-kum direct connection kidayadhu. API thaan safe contract language!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. BUFFER OVERFLOW & EXPLOITATION (Slides 14, 41) */}
      {/* ========================================================================= */}
      {topologyType === 'buffer-overflow' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase">
                EXPLOITATION MECHANICS: STACK BUFFER OVERFLOW
              </span>
            </div>
            <span className="text-[11px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">
              EIP Overwrite
            </span>
          </div>

          <div className="py-1 space-y-3">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
              <div className="col-span-2 p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/40">
                <span className="text-[10px] text-cyan-400 block font-bold">BUFFER (64 BYTES)</span>
                <span className="text-slate-300 text-xs">"AAAA AAAA AAAA AAAA"</span>
                <span className="text-[9px] text-slate-400 block mt-1">Normal allocated memory container</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/40">
                <span className="text-[10px] text-amber-400 block font-bold">SAVED EBP</span>
                <span className="text-slate-300 text-xs">[0x7FFFFFFE]</span>
                <span className="text-[9px] text-slate-400 block mt-1">Stack frame base</span>
              </div>
              <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/60 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <span className="text-[10px] text-red-400 block font-bold">RETURN EIP</span>
                <span className="text-red-300 font-bold text-xs">[0xDEADBEEF]</span>
                <span className="text-[9px] text-red-400 block mt-1">Target hijacked!</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-900 border border-red-500/30 flex items-center justify-between text-xs font-mono">
              <span className="text-red-400 font-bold flex items-center gap-1.5">
                <Bug className="w-4 h-4" /> Overflow Stream:
              </span>
              <span className="text-slate-300 truncate px-2">"A"*64 + "BBBB" + [SHELLCODE_POINTER]</span>
              <span className="text-red-400 text-[10px] bg-red-950 px-2 py-0.5 rounded border border-red-800">
                Crash / Hijack
              </span>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-red-400 font-bold font-mono">⚡ Exploit Rule:</span>
            <span>Tumbler-la alavukku adhigama thanni oothina overflow aagi pakathula irukra book nanaivadhupol, memory boundary thandina crash aagum!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. ENCRYPTION MATRIX & KEY (Slide 15) */}
      {/* ========================================================================= */}
      {topologyType === 'encryption-matrix' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                CRYPTOGRAPHIC TOPOLOGY: PLAINTEXT TO CIPHERTEXT
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400">AES-256 Symmetric Key</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1 items-center text-center">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono block">1. PLAINTEXT</span>
              <span className="text-sm font-bold text-white block mt-1">"SecretPassword123"</span>
              <span className="text-[10px] text-red-400 font-mono mt-1 block">Human Readable (Vulnerable)</span>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/50 shadow-lg">
              <Key className="w-8 h-8 text-cyan-400 mx-auto mb-1 animate-pulse" />
              <span className="text-xs font-bold text-white block">Secret Key Math (XOR / AES)</span>
              <span className="text-[10px] text-cyan-300 font-mono block mt-0.5">256-bit Key Seed</span>
              <p className="text-[10px] text-slate-400 mt-1">Kodi kanakana combinations</p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <span className="text-[10px] text-emerald-400 font-mono block">3. CIPHERTEXT</span>
              <span className="text-xs font-mono text-emerald-300 font-bold block mt-1 break-all">
                #9f$2a@8x!0b...
              </span>
              <span className="text-[10px] text-emerald-400 font-mono mt-1 block">Unreadable Scramble (Safe)</span>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-cyan-400 font-bold font-mono">⚡ Principle:</span>
            <span>Encryption data-va locked box-aa maathidum. Sariyaana Key irundha mattum thaan unlock panna mudiyum!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. HARDWARE CORE TRIANGLE & BUS (Slides 16, 17, 18, 24, 34) */}
      {/* ========================================================================= */}
      {(topologyType === 'hardware-bus' || topologyType === 'ram-vs-storage') && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                {slideId === 34 ? 'RAM VS STORAGE: DESK VS CUPBOARD DEEP DIVE' : 'HARDWARE TRIANGLE: CPU, RAM & STORAGE BUS'}
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Latency: CPU (0.3ns) &lt; RAM (10ns) &lt; SSD (100μs)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1">
            {/* CPU */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-center flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-2">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-xs font-bold text-white block">CPU (Worker Brain)</span>
              <span className="text-[10px] text-cyan-400 font-mono">Fetch-Decode-Execute</span>
              <div className="w-full mt-2 pt-2 border-t border-slate-800 text-[11px] text-left text-slate-400 space-y-0.5">
                <div>Speed: <span className="text-cyan-300 font-mono font-bold">Sub-nanosecond</span></div>
                <div>Role: <span className="text-slate-200">Kattalaigalai seiyyum aalu</span></div>
              </div>
            </div>

            {/* RAM */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-center flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-emerald-950/60 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-2">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-white block">RAM (Volatile Desk)</span>
              <span className="text-[10px] text-emerald-400 font-mono">10-50 Nanoseconds</span>
              <div className="w-full mt-2 pt-2 border-t border-slate-800 text-[11px] text-left text-slate-400 space-y-0.5">
                <div>State: <span className="text-red-400 font-mono font-bold">Current ponaal pochu</span></div>
                <div>Role: <span className="text-slate-200">Padikkira table madhiri</span></div>
              </div>
            </div>

            {/* Storage */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/40 text-center flex flex-col items-center">
              <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-2">
                <HardDrive className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-white block">Storage (Persistent Cupboard)</span>
              <span className="text-[10px] text-purple-400 font-mono">100 Microseconds</span>
              <div className="w-full mt-2 pt-2 border-t border-slate-800 text-[11px] text-left text-slate-400 space-y-0.5">
                <div>State: <span className="text-emerald-400 font-mono font-bold">Nilaiyaana idham</span></div>
                <div>Role: <span className="text-slate-200">Veettu biro cupboard</span></div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-amber-400 font-bold font-mono">⚡ Pipeline:</span>
            <span>Programs disk-la thoongum → Double click panninaal RAM desk-ku varum → CPU execute pannum!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. HTTP VS HTTPS WIRE COMPARISON (Slide 21) */}
      {/* ========================================================================= */}
      {topologyType === 'http-vs-https' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                WIRE TRANSMISSION: HTTP (PLAIN) VS HTTPS (TLS ENCRYPTED)
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400">Port 80 vs Port 443</span>
          </div>

          <div className="space-y-3 py-1">
            {/* HTTP Lane */}
            <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/40">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                  <Unlock className="w-4 h-4" /> HTTP (Port 80) — Postcard Wire
                </span>
                <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-700/50">
                  DANGER: Plaintext Leak
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 p-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono">
                <span className="text-slate-300">Client: "pass=secret123"</span>
                <span className="text-red-400 font-bold flex items-center gap-1 animate-pulse">
                  <Eye className="w-3.5 h-3.5" /> Sniffer Reads Password!
                </span>
                <span className="text-slate-300">Server</span>
              </div>
            </div>

            {/* HTTPS Lane */}
            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/40">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Lock className="w-4 h-4" /> HTTPS (Port 443) — TLS 1.3 Locked Box
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700/50">
                  SECURE: AES-256 GCM
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 p-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono">
                <span className="text-slate-300">Client: [Locked Box]</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 8f3a9e2c... Scrambled Cipher
                </span>
                <span className="text-slate-300">Server: [Decrypted with Key]</span>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-cyan-400 font-bold font-mono">⚡ Rule:</span>
            <span>Public Wi-Fi-la saadha HTTP use panna passwords thirudalaam. HTTPS connection kandippa thevai!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 9. IP ADDRESS & PORT DOORS (Slides 22, 23) */}
      {/* ========================================================================= */}
      {topologyType === 'ip-ports' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                {slideId === 22 ? 'IP ADDRESS: GLOBAL HOST ROUTING TOPOLOGY' : 'PORT NUMBERS: APARTMENT DOORWAYS (80, 443, 22)'}
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">Host IP vs Service Port</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-center">
              <DoorOpen className="w-7 h-7 text-emerald-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-white font-mono block">Kathavu 80</span>
              <span className="text-[10px] text-emerald-300 font-semibold block">HTTP (Saadha Web)</span>
              <p className="text-[10px] text-slate-400 mt-1">Mun kathavu — plain traffic</p>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/50 text-center shadow-lg">
              <Lock className="w-7 h-7 text-cyan-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-white font-mono block">Kathavu 443</span>
              <span className="text-[10px] text-cyan-300 font-semibold block">HTTPS (Protected Web)</span>
              <p className="text-[10px] text-slate-300 mt-1">Poottu potta safe VIP kathavu</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/30 text-center">
              <Key className="w-7 h-7 text-purple-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-white font-mono block">Kathavu 22</span>
              <span className="text-[10px] text-purple-300 font-semibold block">SSH (Admin Terminal)</span>
              <p className="text-[10px] text-slate-400 mt-1">Thani secret key irundha mattum access</p>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-emerald-400 font-bold font-mono">⚡ Analogy:</span>
            <span>IP address-ngradhu Apartment Building address. Port number-ngradhu andha building-la irukra Flat door numbers!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 10. PRIVILEGE RINGS & SYSTEM CALLS (Slides 37, 38, 46, 47, 48, 49, 50, 55) */}
      {/* ========================================================================= */}
      {(topologyType === 'privilege-rings' || topologyType === 'kernel-syscall-gate' || topologyType === 'os-conductor') && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                {slideId === 48 ? 'X86 PRIVILEGE RINGS: RING 3 VS RING 0' : 'SYSTEM CALL BOUNDARY & KERNEL SUPERVISOR'}
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
              Trap 0x80 / sysenter
            </span>
          </div>

          <div className="space-y-2.5 py-1">
            {/* User Space Ring 3 */}
            <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/40">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 text-[10px] font-mono font-bold">
                    RING 3
                  </span>
                  User Space (Apps Sandbox)
                </span>
                <span className="text-[10px] text-red-400 font-mono">Hardware thoda mudiyaadhu</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300">Chrome</div>
                <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300">VS Code</div>
                <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300">Terminal</div>
                <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300">Game App</div>
              </div>
            </div>

            {/* Syscall Token Gate */}
            <div className="p-2 rounded-xl bg-amber-950/30 border border-amber-500/50 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-amber-300">
                <DoorOpen className="w-4 h-4 text-amber-400" />
                <span>SYSCALL COUNTER GATE (read, write, open, socket, fork)</span>
              </div>
              <span className="text-[10px] text-amber-400 bg-amber-950 px-2 py-0.5 rounded">
                Trap Token Verification
              </span>
            </div>

            {/* Kernel Space Ring 0 */}
            <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/40">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-red-950 text-red-300 text-[10px] font-mono font-bold">
                    RING 0
                  </span>
                  Kernel Space (Supreme OS Supervisor)
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">Full Silicon Control</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-red-400 font-mono text-[11px]">MMU Memory</div>
                <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-red-400 font-mono text-[11px]">CPU Sched</div>
                <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-red-400 font-mono text-[11px]">VFS Disk</div>
                <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-red-400 font-mono text-[11px]">NIC Driver</div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-cyan-400 font-bold font-mono">⚡ Kernel Law:</span>
            <span>User apps direct-aa hardware-ah thoda mudiyaadhu. Syscall token koduthu permission vaanginaal thaan Kernel vela seiyyum!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 11. PROCESS ISOLATION & VIRTUAL MEMORY (Slides 28, 29, 30, 39, 40) */}
      {/* ========================================================================= */}
      {(topologyType === 'program-vs-process' || topologyType === 'memory-isolation') && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                VIRTUAL MEMORY SANDBOX & PROCESS BOUNDARY
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">PID 1024 vs PID 2048</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
            {/* Sandbox A */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-cyan-500/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  Process A (Browser)
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded">PID 1042</span>
              </div>
              <div className="space-y-1 font-mono text-[10px]">
                <div className="p-1 rounded bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">STACK</span>
                  <span className="text-cyan-300">Local variables</span>
                </div>
                <div className="p-1 rounded bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">HEAP</span>
                  <span className="text-cyan-300">Dynamic malloc</span>
                </div>
                <div className="p-1 rounded bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">CODE</span>
                  <span className="text-cyan-300">Machine instructions</span>
                </div>
              </div>
            </div>

            {/* Sandbox B */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  Process B (Password Vault)
                </span>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-950 px-1.5 py-0.5 rounded">PID 2891</span>
              </div>
              <div className="space-y-1 font-mono text-[10px]">
                <div className="p-1 rounded bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">STACK</span>
                  <span className="text-purple-300">Secret master key</span>
                </div>
                <div className="p-1 rounded bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">HEAP</span>
                  <span className="text-purple-300">Encrypted records</span>
                </div>
                <div className="p-1 rounded bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">CODE</span>
                  <span className="text-purple-300">Auth algorithms</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Process A crash aanaalum Process B thodarndhu safe-aa odum. Oru app innoru app memory-ah peep panna mudiyadhu!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 12. MULTITASKING & CONTEXT SWITCHING (Slides 31, 32) */}
      {/* ========================================================================= */}
      {topologyType === 'multitasking-cpu' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                CPU TIME SLICING & CONTEXT SWITCHING TOPOLOGY
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400">10ms Time Slice</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 py-1 text-center items-center">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-white block">Slice 1: Chrome</span>
              <span className="text-[10px] text-cyan-400 font-mono">Render Web Tab</span>
            </div>
            <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/50 shadow-md">
              <Cpu className="w-6 h-6 text-cyan-400 mx-auto mb-1 animate-spin" />
              <span className="text-xs font-bold text-white block">CPU Core Engine</span>
              <span className="text-[10px] text-cyan-300 font-mono">Save & Restore Registers</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-white block">Slice 2: Spotify</span>
              <span className="text-[10px] text-emerald-400 font-mono">Decode Audio Stream</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-white block">Slice 3: Terminal</span>
              <span className="text-[10px] text-purple-400 font-mono">Wait for Keystroke</span>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-cyan-400 font-bold font-mono">⚡ Context Switch:</span>
            <span>CPU oru second-la 100 thadava apps maathi maathi run pannudhu — namakku ellame ore nerathula odura madhiri theriyum!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 13. HOUSE ANALOGY & RISK EQUATION (Slides 7, 8) */}
      {/* ========================================================================= */}
      {topologyType === 'house-risk' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                THE DIGITAL HOUSE ANALOGY: THREAT, VULNERABILITY & RISK
              </span>
            </div>
            <span className="text-[11px] font-mono text-amber-400">Risk = T × V × Impact</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-1 text-center">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <DoorOpen className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
              <span className="text-xs font-bold text-white block">Front Door</span>
              <span className="text-[10px] text-cyan-400 font-mono">Firewall & Ports</span>
            </div>
            <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/40">
              <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-1 animate-pulse" />
              <span className="text-xs font-bold text-white block">Open Window</span>
              <span className="text-[10px] text-red-400 font-mono">Vulnerability (Bug)</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/40">
              <Eye className="w-6 h-6 text-amber-400 mx-auto mb-1" />
              <span className="text-xs font-bold text-white block">Prowling Thief</span>
              <span className="text-[10px] text-amber-400 font-mono">Threat (Attacker)</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/40">
              <Lock className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
              <span className="text-xs font-bold text-white block">Jewelry Locker</span>
              <span className="text-[10px] text-emerald-400 font-mono">Data Asset (Risk)</span>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-amber-400 font-bold font-mono">⚡ Core Insight:</span>
            <span>Thief irukkaaru (Threat) aana janallam pootti irukku (No Vulnerability) endraal Risk kammi. Rendum sernthaal thaan Danger!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 14. PRIVILEGE ESCALATION (Slides 53, 54) */}
      {/* ========================================================================= */}
      {topologyType === 'privilege-escalation' && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase">
                PRIVILEGE ESCALATION TOPOLOGY: UID 1000 TO ROOT (UID 0)
              </span>
            </div>
            <span className="text-[11px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">
              SUID Abuse
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1 items-center text-center">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <User className="w-7 h-7 text-slate-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-white block">Normal User</span>
              <span className="text-[10px] text-slate-400 font-mono">UID 1000</span>
              <p className="text-[10px] text-slate-400 mt-1">Limited to /home/user directory</p>
            </div>

            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 shadow-lg">
              <Flame className="w-7 h-7 text-red-400 mx-auto mb-1.5 animate-pulse" />
              <span className="text-xs font-bold text-white block">SUID Misconfiguration / Exploit</span>
              <span className="text-[10px] text-red-400 font-mono block">chmod u+s /bin/vulnerable</span>
              <p className="text-[10px] text-slate-300 mt-1">Execution boundary hijack</p>
            </div>

            <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30">
              <ShieldAlert className="w-7 h-7 text-red-400 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-red-300 block">ROOT PRIVILEGES</span>
              <span className="text-[10px] text-red-400 font-mono">UID 0 (Superuser)</span>
              <p className="text-[10px] text-slate-400 mt-1">Full control of entire OS & hardware</p>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-red-400 font-bold font-mono">⚡ Defense:</span>
            <span>Unnecessary SUID permissions-ah remove pannanum. Principle of Least Privilege thaan root takeover-ah thadukkum!</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 15. DEFAULT INTERACTIVE TOPOLOGY FOR ALL OTHER SLIDES */}
      {/* ========================================================================= */}
      {![
        'banking-pipeline', 
        'database-vault', 
        'firewall-bouncer', 
        'api-gateway', 
        'buffer-overflow', 
        'encryption-matrix', 
        'hardware-bus', 
        'ram-vs-storage', 
        'http-vs-https', 
        'ip-ports', 
        'privilege-rings', 
        'kernel-syscall-gate', 
        'os-conductor', 
        'program-vs-process', 
        'memory-isolation', 
        'multitasking-cpu', 
        'house-risk', 
        'privilege-escalation'
      ].includes(topologyType) && (
        <div>
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                SYSTEM ARCHITECTURE & SECURITY VERIFICATION
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400">First-Principles Model</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-1 text-center">
            <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30">
              <Smartphone className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
              <span className="text-xs font-bold text-white block">Input Signal</span>
              <span className="text-[10px] text-cyan-300 font-mono">User / Network</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30">
              <Shield className="w-6 h-6 text-amber-400 mx-auto mb-1" />
              <span className="text-xs font-bold text-white block">Permission Gate</span>
              <span className="text-[10px] text-amber-300 font-mono">Boundary Check</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-blue-500/30">
              <Cpu className="w-6 h-6 text-blue-400 mx-auto mb-1" />
              <span className="text-xs font-bold text-white block">Kernel Engine</span>
              <span className="text-[10px] text-blue-300 font-mono">Hardware Action</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30">
              <Database className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
              <span className="text-xs font-bold text-white block">Verified Storage</span>
              <span className="text-[10px] text-emerald-300 font-mono">Protected State</span>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <span className="text-cyan-400 font-bold font-mono">⚡ First Principle:</span>
            <span>Cybersecurity verum tools copy-paste panradhu illa. Oru machine kulla data epdi move aagudhu endra mechanics-ah aaraivathu thaan!</span>
          </div>
        </div>
      )}

    </div>
  );
};
