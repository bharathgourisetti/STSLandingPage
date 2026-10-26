import React from 'react';
import { SHOP_CONFIG } from '../config/shopConfig';

export default function ShowroomDetails({ currentLang, onCopyAddress, onOpenQr }) {
  const langKey = currentLang;

  return (
    <section className="mt-4 bg-[#FFFDF9] rounded-3xl border border-[#D4AF37]/70 p-5 shadow-md text-left">
      <div className="flex items-center justify-between border-b border-[#F0E6D2] pb-2.5 mb-3">
        <div className="flex items-center space-x-2 text-[#7B1122] font-traditional font-bold text-sm sm:text-base">
          <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span>{SHOP_CONFIG.ui.showroomDetailsHeader[langKey]}</span>
        </div>
        <button 
          onClick={onCopyAddress}
          className="text-[11px] font-bold text-[#7B1122] hover:underline flex items-center space-x-1"
        >
          <svg className="w-3.5 h-3.5 text-[#B8860B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span>{SHOP_CONFIG.ui.copyAddressBtn[langKey]}</span>
        </button>
      </div>

      <div className="space-y-3 text-xs sm:text-sm text-stone-700">
        {/* Address */}
        <div className="flex items-start space-x-3">
          <svg className="w-4 h-4 text-[#7B1122] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="font-semibold text-stone-900">{SHOP_CONFIG.location.shopNo[langKey]}</p>
            <p className="text-stone-600 text-xs mt-0.5">
              <span className="font-medium text-[#7B1122]">{SHOP_CONFIG.ui.landmarkLabel[langKey]}</span>{" "}
              {SHOP_CONFIG.location.landmark[langKey]}
            </p>
            <p className="text-stone-700">
              {`${SHOP_CONFIG.location.area[langKey]}, ${SHOP_CONFIG.location.district[langKey]}, ${SHOP_CONFIG.location.state[langKey]} - ${SHOP_CONFIG.location.pincode}`}
            </p>
          </div>
        </div>

        {/* Timings */}
        <div className="flex items-center space-x-3 pt-0.5">
          <svg className="w-4 h-4 text-[#B8860B] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <div>
            <span className="font-semibold text-stone-900">{SHOP_CONFIG.timings.days[langKey]}: </span>
            <span>{SHOP_CONFIG.timings.display[langKey]}</span>
          </div>
        </div>

        {/* Telephones */}
        <div className="flex items-center space-x-3 pt-0.5">
          <svg className="w-4 h-4 text-[#1E5631] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
          </svg>
          <div className="flex items-center space-x-2">
            <a href={`tel:${SHOP_CONFIG.contact.phone}`} className="font-semibold text-[#7B1122] hover:underline">
              {SHOP_CONFIG.contact.phoneDisplay}
            </a>
            <span className="text-stone-400">|</span>
            <a href={`tel:${SHOP_CONFIG.contact.secondaryPhone}`} className="text-stone-600 hover:underline">
              {SHOP_CONFIG.contact.secondaryPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Action Row */}
      <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#F0E6D2]">
        <a 
          href={SHOP_CONFIG.googleMapsUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-[#7B1122] text-white text-xs font-semibold hover:bg-[#630E1B] transition shadow-sm"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          <span>{SHOP_CONFIG.ui.openInMapsBtn[langKey]}</span>
        </a>
        <button 
          onClick={onOpenQr}
          className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-[#FAF5EB] border border-[#D4AF37]/70 text-[#7B1122] text-xs font-semibold hover:bg-[#F2E7D3] transition"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>{SHOP_CONFIG.ui.showStoreQrBtn[langKey]}</span>
        </button>
      </div>
    </section>
  );
}