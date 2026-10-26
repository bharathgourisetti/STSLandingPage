export default function Header({ currentLang, onToggleLang, onOpenQr, onShare }) {
  const isTe = currentLang === 'te';

  return (
    <header className="flex items-center justify-between py-2 px-1 mb-2">
      {/* Bilingual Toggle Button */}
      <button 
        onClick={onToggleLang}
        className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9] border border-[#D4AF37] shadow-sm text-xs font-bold text-[#7B1122] hover:bg-[#F4ECE1] transition active:scale-95"
      >
        <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span>{isTe ? "Switch to English" : "తెలుగులోకి మార్చండి"}</span>
      </button>

      {/* Right Header Actions */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={onOpenQr}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#FFFDF9] border border-[#D4AF37] text-xs font-bold text-[#7B1122] hover:bg-[#F4ECE1] shadow-sm transition active:scale-95"
        >
          <svg className="w-4 h-4 text-[#7B1122]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span className="hidden sm:inline">{isTe ? "స్టోర్ క్యూఆర్" : "Show Store QR"}</span>
        </button>

        <button 
          onClick={onShare} 
          className="p-2 rounded-full bg-[#FFFDF9] border border-[#D4AF37] text-[#7B1122] hover:bg-[#F4ECE1] shadow-sm transition active:scale-95"
          title="Share Store"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      </div>
    </header>
  );
}