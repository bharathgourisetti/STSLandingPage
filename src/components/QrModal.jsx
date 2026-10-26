import React from 'react';
import { SHOP_CONFIG } from '../config/shopConfig';

export default function QrModal({ isOpen, onClose, currentLang, onShare }) {
  if (!isOpen) return null;
  const langKey = currentLang;

  // Encoded QR pointing directly to sritraditionalsarees.in
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=380x380&data=${encodeURIComponent(SHOP_CONFIG.landingPageUrl)}&margin=1&format=png`;

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4">
      <div className="bg-[#FFFDF9] border-2 border-[#D4AF37] w-full max-w-sm rounded-3xl p-6 shadow-2xl relative text-center">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div className="text-xs uppercase tracking-widest text-[#B8860B] font-bold mb-1">
          {SHOP_CONFIG.qrModal.topBadge[langKey]}
        </div>
        <h3 className="text-xl font-bold font-traditional text-[#7B1122]">
          {SHOP_CONFIG.names[langKey]}
        </h3>
        <p className="text-xs text-stone-600 mb-4">{SHOP_CONFIG.subtitles[langKey]}</p>

        {/* High-Resolution QR */}
        <div className="bg-white p-4 rounded-2xl border-2 border-[#D4AF37] shadow-inner inline-block mx-auto mb-2">
          <img 
            src={qrImageUrl} 
            alt="Store QR Code" 
            className="w-52 h-52 mx-auto object-contain"
          />
        </div>

        <p className="text-[11px] font-mono text-[#7B1122] font-semibold bg-[#FAF5EB] py-1 px-2 rounded-md border border-[#D4AF37]/50 inline-block mb-3">
          {SHOP_CONFIG.qrModal.targetUrlNotice[langKey]}
        </p>

        <p className="text-xs text-stone-700 font-medium px-2 mb-4 leading-relaxed">
          {SHOP_CONFIG.qrModal.scanInstructions[langKey]}
        </p>

        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => window.print()} 
            className="py-2.5 px-3 rounded-xl bg-[#FAF5EB] border border-[#D4AF37] text-[#7B1122] text-xs font-bold hover:bg-[#F2E7D3] transition flex items-center justify-center space-x-1.5"
          >
            <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2m-8 0v4h8v-4H8z"/>
            </svg>
            <span>{SHOP_CONFIG.qrModal.printStandeeBtn[langKey]}</span>
          </button>
          <button 
            onClick={onShare} 
            className="py-2.5 px-3 rounded-xl bg-[#7B1122] text-white text-xs font-bold hover:bg-[#630E1B] transition flex items-center justify-center space-x-1.5 shadow"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            <span>{SHOP_CONFIG.qrModal.shareQrLinkBtn[langKey]}</span>
          </button>
        </div>
      </div>
    </div>
  );
}