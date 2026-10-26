import { useState } from 'react';
import { SHOP_CONFIG } from '../config/shopConfig';

export default function BrandHero({ currentLang }) {
  const [imgError, setImgError] = useState(false);
  const langKey = currentLang;

  // Real-time opening calculation
  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;
  const isOpen = currentHour >= SHOP_CONFIG.timings.openHour && currentHour < SHOP_CONFIG.timings.closeHour;

  const logoSrc = currentLang === 'te' ? SHOP_CONFIG.logoImages.te : SHOP_CONFIG.logoImages.en;

  const waUrl = `https://wa.me/${SHOP_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(SHOP_CONFIG.contact.whatsappPrefill)}`;
  const smsUrl = `sms:${SHOP_CONFIG.contact.smsNumber}?body=${encodeURIComponent(SHOP_CONFIG.contact.smsPrefill)}`;

  return (
    <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#D4AF37]/80 shadow-lg p-4 sm:p-6 text-center relative overflow-hidden">
      <div className="absolute top-2 left-2 text-[#C59B27] opacity-60 text-sm select-none">❖</div>
      <div className="absolute top-2 right-2 text-[#C59B27] opacity-60 text-sm select-none">❖</div>

      {/* Language-specific brand logo */}
      <div className="w-full flex items-center justify-center select-none">
        <div className="relative w-full max-w-md mx-auto flex items-center justify-center">
          {!imgError ? (
            <img 
              key={logoSrc}
              src={logoSrc} 
              alt={SHOP_CONFIG.names[langKey]}
              className="block w-full h-auto object-contain transition-transform duration-300"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Standalone crisp vector fallback */
            <svg viewBox="0 0 650 250" className="w-full h-auto blend-logo drop-shadow-sm py-2">
              <g transform="translate(130, 125)">
                <circle cx="0" cy="0" r="105" stroke="#C59B27" strokeWidth="5" fill="#FDFBF5" />
                <circle cx="0" cy="0" r="97" stroke="#7B1122" strokeWidth="2" strokeDasharray="4 3" fill="none" />
                <rect x="-60" y="-45" width="8" height="90" rx="2" fill="#5A3319" />
                <rect x="45" y="-45" width="8" height="90" rx="2" fill="#5A3319" />
                <rect x="-70" y="-40" width="125" height="8" rx="2" fill="#754422" />
                <circle cx="-55" cy="20" r="20" stroke="#B8860B" strokeWidth="2.5" fill="none" />
                <path d="M-40 10 Q 0 0 40 10 L 55 55 Q 0 75 -55 55 Z" fill="#D4AF37" />
                <path d="M-45 22 Q 0 30 48 22 L 50 48 Q 0 68 -50 48 Z" fill="#7B1122" />
              </g>
              <text x="415" y="125" textAnchor="middle" fill="#7B1122" fontFamily="'Cinzel', Georgia, serif" fontSize={currentLang === 'te' ? "38" : "34"} fontWeight="900">
                {SHOP_CONFIG.names[langKey]}
              </text>
              <text x="415" y="165" textAnchor="middle" fill="#1E5631" fontFamily="'Cinzel', Georgia, serif" fontSize="18" fontWeight="bold">
                ❧ {SHOP_CONFIG.subtitles[langKey]} ☙
              </text>
            </svg>
          )}
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-2 text-xs sm:text-sm text-stone-700 max-w-md mx-auto leading-relaxed font-medium">
        {SHOP_CONFIG.taglines[langKey]}
      </p>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center space-x-2 my-3 select-none">
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C59B27] to-[#8B1E2D]"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-[#7B1122]"></div>
        <div className="text-[#C59B27] text-xs">❖</div>
        <div className="w-1.5 h-1.5 rotate-45 bg-[#7B1122]"></div>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C59B27] to-[#8B1E2D]"></div>
      </div>

      {/* Status Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="inline-flex items-center px-3 py-1 rounded-full font-medium bg-emerald-50 text-emerald-800 border border-emerald-300">
          <span className="w-2 h-2 rounded-full mr-1.5 bg-emerald-600 animate-pulse"></span>
          <span>{isOpen ? SHOP_CONFIG.statusBadges.openNow[langKey] : SHOP_CONFIG.statusBadges.opensLater[langKey]}</span>
        </span>

        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF5EB] text-[#7B1122] border border-[#D4AF37]/70 font-semibold">
          <svg className="w-3.5 h-3.5 text-[#C59B27] mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <span>{SHOP_CONFIG.badgeText[langKey]}</span>
        </span>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 space-y-2.5">
        {/* HERO BUTTON: VISIT ONLINE STORE (Redirects to sritraditionalsarees.com) */}
        <a 
          href={SHOP_CONFIG.onlineStoreUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between w-full p-4 rounded-2xl bg-gradient-to-r from-[#7B1122] via-[#8B1E2D] to-[#991B1B] text-white shadow-md hover:shadow-xl transition-all duration-200 border-2 border-[#D4AF37] transform active:scale-[0.99]"
        >
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#590C18] border border-[#D4AF37]/50 flex items-center justify-center text-[#E5C158] shadow-inner group-hover:scale-105 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-1.5">
                <span className={`${currentLang === 'te' ? 'text-[0.9rem] sm:text-[0.9125rem]' : 'text-base sm:text-lg'} font-bold font-traditional tracking-wide`}>
                  {SHOP_CONFIG.ui.visitOnlineStore.title[langKey]}
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#D4AF37] text-[#422006]">
                  {SHOP_CONFIG.ui.visitOnlineStore.tag[langKey]}
                </span>
              </div>
              <p className={`${currentLang === 'te' ? 'text-[0.8rem]' : 'text-xs'} text-amber-100/90 mt-0.5`}>
                {SHOP_CONFIG.ui.visitOnlineStore.subtitle[langKey]}
              </p>
            </div>
          </div>
          <svg className="w-5 h-5 text-[#E5C158] group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>

        {/* 4 ACTION BUTTONS: WhatsApp, Call, Directions, SMS */}
        <div className="grid grid-cols-4 gap-2 pt-1">
          {/* WhatsApp */}
          <a 
            href={waUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-[#E8F8EE] border border-[#BDE8CC] text-[#075E54] hover:bg-[#D4F4DF] transition transform active:scale-95 group shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center mb-1 group-hover:scale-110 transition shadow">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.012 2C6.486 2 2 6.486 2 12.012c0 1.956.565 3.784 1.543 5.337L2.1 22l4.823-1.408A9.96 9.96 0 0 0 12.012 22C17.538 22 22 17.514 22 12.012 22 6.486 17.538 2 12.012 2zm.006 18.286a8.24 8.24 0 0 1-4.223-1.157l-.303-.18-2.863.836.852-2.79-.197-.314a8.27 8.27 0 0 1-1.272-4.669c0-4.57 3.717-8.286 8.286-8.286 4.568 0 8.285 3.716 8.285 8.286 0 4.569-3.717 8.286-8.285 8.286zm4.536-6.195c-.249-.125-1.472-.726-1.7-.809-.229-.083-.395-.125-.561.125-.166.249-.644.809-.789.975-.145.166-.291.187-.54.062s-1.05-.387-2.001-1.234c-.74-.66-1.24-1.475-1.385-1.724-.145-.249-.015-.384.11-.508.112-.112.249-.291.374-.436.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.436s-.561-1.35-.769-1.849c-.202-.486-.407-.42-.561-.428l-.478-.008c-.166 0-.436.062-.664.311s-.872.852-.872 2.077c0 1.225.893 2.41 1.018 2.576.125.166 1.756 2.682 4.255 3.762.595.257 1.059.41 1.422.525.598.19 1.142.163 1.572.099.48-.072 1.472-.602 1.68-1.184.208-.582.208-1.08.146-1.184-.063-.104-.229-.166-.478-.291z" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-[#075E54]">{SHOP_CONFIG.ui.whatsappBtn[langKey]}</span>
          </a>

          {/* Call */}
          <a 
            href={`tel:${SHOP_CONFIG.contact.phone}`}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-[#FBF6ED] border border-[#E8DBBE] text-[#7B1122] hover:bg-[#F3E7CD] transition transform active:scale-95 group shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#7B1122] text-white flex items-center justify-center mb-1 group-hover:scale-110 transition shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
            </div>
            <span className="text-[11px] font-bold">{SHOP_CONFIG.ui.callUsBtn[langKey]}</span>
          </a>

          {/* Directions */}
          <a 
            href={SHOP_CONFIG.googleMapsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-[#FBF6ED] border border-[#E8DBBE] text-[#8B1E2D] hover:bg-[#F3E7CD] transition transform active:scale-95 group shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#B8860B] text-white flex items-center justify-center mb-1 group-hover:scale-110 transition shadow">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
            </div>
            <span className="text-[11px] font-bold text-[#6B4611]">{SHOP_CONFIG.ui.directionsBtn[langKey]}</span>
          </a>

          {/* SMS */}
          <a 
            href={smsUrl}
            className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-[#FBF6ED] border border-[#E8DBBE] text-[#1E5631] hover:bg-[#F3E7CD] transition transform active:scale-95 group shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#1E5631] text-white flex items-center justify-center mb-1 group-hover:scale-110 transition shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-[#1E5631]">{SHOP_CONFIG.ui.smsBtn[langKey]}</span>
          </a>
        </div>
      </div>
    </div>
  );
}