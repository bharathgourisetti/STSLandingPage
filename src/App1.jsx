import React, { useState, useEffect } from 'react';

// =========================================================================
// 1. MASTER CENTRAL CONFIGURATION
// Manages all social links, location, contacts, timings, text & translations
// =========================================================================
const SHOP_CONFIG = {
  // Destinations
  landingPageUrl: "https://sritraditionalsarees.in", // Scanned QR code standee destination
  onlineStoreUrl: "https://sritraditionalsarees.com", // Online store catalog hero button
  googleMapsUrl: "https://maps.google.com/?q=Sri+Traditional+Sarees+5-500%2FA41+Mangalagiri+Bypass+Service+Road+Mangalagiri+to+Tenali+Flyover+Down+Guntur+District+522503",

  // Brand Information
  names: {
    en: "Sri Traditional Sarees",
    te: "శ్రీ ట్రెడిషనల్ శారీస్",
  },
  subtitles: {
    en: "Handloom Clothing House",
    te: "చేనేత వస్త్రాలయం",
  },
  taglines: {
    en: "Pure Handwoven Silks & Mangalagiri Cottons Directly from Master Weavers",
    te: "నిఖార్సైన చేనేత పట్టు & మంగళగిరి కాటన్ చీరలు నేరుగా నేతన్నల నుండి",
  },
  established: {
    en: "Est. 1989",
    te: "స్థాపన 1989",
  },
  badgeText: {
    en: "100% Certified Handloom Mark",
    te: "100% స్వచ్ఛమైన చేనేత గుర్తింపు",
  },
  footerNote: {
    en: "Direct Weaver Support • 100% Genuine Handlooms",
    te: "నేతన్నలకు ప్రత్యక్ష ప్రోత్సాహం • 100% అసలైన చేనేత వస్త్రాలు",
  },

  // Contact Information
  contact: {
    phone: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    secondaryPhone: "+91 86452 34567",
    whatsappNumber: "919876543210",
    whatsappPrefill: "Namaskaram! I visited your store / scanned your QR code and would like to see your latest handloom saree collections.",
    smsNumber: "+919876543210",
    smsPrefill: "Hello Sri Traditional Sarees, please send me details about your latest saree collections.",
    email: "contact@sritraditionalsarees.com",
  },

  // Showroom Location
  location: {
    shopNo: {
      en: "5-500/A41, Mangalagiri Bypass Service Road",
      te: "5-500/A41, మంగళగిరి బైపాస్ సర్వీస్ రోడ్",
    },
    landmark: {
      en: "Mangalagiri to Tenali Flyover Down",
      te: "మంగళగిరి నుండి తెనాలి ఫ్లైఓవర్ దిగువన",
    },
    area: {
      en: "Mangalagiri",
      te: "మంగళగిరి",
    },
    district: {
      en: "Guntur District",
      te: "గుంటూరు జిల్లా",
    },
    state: {
      en: "Andhra Pradesh",
      te: "ఆంధ్రప్రదేశ్",
    },
    pincode: "522503",
  },

  // Timings
  timings: {
    display: {
      en: "Monday to Sunday: 9:30 AM – 9:00 PM",
      te: "సోమవారం నుండి ఆదివారం: ఉదయం 9:30 – రాత్రి 9:00",
    },
    days: {
      en: "Mon - Sun (All 7 Days Open)",
      te: "సోమ - ఆది (వారం లోని 7 రోజులూ తెరిచి ఉండును)",
    },
    openHour: 9.5,
    closeHour: 21.0,
  },

  statusBadges: {
    openNow: {
      en: "Showroom Open (9:30 AM – 9:00 PM)",
      te: "షోరూమ్ తెరిచి ఉంది (ఉదయం 9:30 – రాత్రి 9:00)",
    },
    opensLater: {
      en: "Opens at 9:30 AM",
      te: "ఉదయం 9:30కి తెరవబడును",
    },
  },

  // Multilingual UI Labels
  ui: {
    languageSwitchBtn: {
      en: "తెలుగులోకి మార్చండి",
      te: "Switch to English",
    },
    showStoreQrBtn: {
      en: "Show Store QR",
      te: "స్టోర్ క్యూఆర్ చూపించు",
    },
    shareShopBtn: {
      en: "Share Store",
      te: "షాప్ లింక్ షేర్ చేయండి",
    },
    visitOnlineStore: {
      title: {
        en: "Visit Online Store",
        te: "ఆన్‌లైన్ స్టోర్ సందర్శించండి",
      },
      tag: {
        en: "Shop Now",
        te: "షాపింగ్ చేయండి",
      },
      subtitle: {
        en: "Browse pure silk & Mangalagiri cotton sarees online",
        te: "స్వచ్ఛమైన పట్టు మరియు మంగళగిరి కాటన్ చీరల కలెక్షన్",
      },
    },
    whatsappBtn: { en: "WhatsApp", te: "వాట్సాప్" },
    callUsBtn: { en: "Call Us", te: "కాల్ చేయండి" },
    directionsBtn: { en: "Directions", te: "దారి" },
    smsBtn: { en: "SMS", te: "ఎస్.ఎం.ఎస్" },
    socialHeader: {
      en: "Connect on Social Media",
      te: "మా సోషల్ మీడియా ఖాతాలు",
    },
    socialCountBadge: {
      en: "8 Channels",
      te: "8 మాధ్యమాలు",
    },
    showroomDetailsHeader: {
      en: "Showroom Details & Timings",
      te: "షోరూమ్ చిరునామా & సమయాలు",
    },
    copyAddressBtn: {
      en: "Copy Address",
      te: "చిరునామా కాపీ చేయండి",
    },
    landmarkLabel: {
      en: "Landmark:",
      te: "గుర్తు:",
    },
    openInMapsBtn: {
      en: "Open in Google Maps",
      te: "గూగుల్ మ్యాప్స్‌లో దారి",
    },
    aboutLoomsBtn: {
      en: "About Our Looms",
      te: "చేనేత విశేషాలు",
    },
    termsPoliciesBtn: {
      en: "Terms & Policies",
      te: "నిబంధనలు & షరతులు",
    },
    toastAddressCopied: {
      en: "Showroom address copied to clipboard!",
      te: "షోరూమ్ చిరునామా కాపీ చేయబడింది!",
    },
    toastLinkCopied: {
      en: "Store link copied to clipboard!",
      te: "స్టోర్ లింక్ కాపీ చేయబడింది!",
    },
    closeBtn: { en: "Close", te: "ముగించు" },
    gotItBtn: { en: "Got It", te: "సరే" },
  },

  // QR Standee Modal
  qrModal: {
    topBadge: {
      en: "Official Store QR Standee",
      te: "షోరూమ్ స్టోర్ క్యూఆర్ స్టాండీ",
    },
    scanInstructions: {
      en: "Scan this QR code with any smartphone camera or Google Lens to immediately open our store landing page (sritraditionalsarees.in) on your phone.",
      te: "ఈ క్యూఆర్ కోడ్‌ను మీ మొబైల్ కెమెరాతో స్కాన్ చేసి నేరుగా మా షోరూమ్ ల్యాండింగ్ పేజీని (sritraditionalsarees.in) తెరవండి.",
    },
    targetUrlNotice: {
      en: "Points strictly to: https://sritraditionalsarees.in",
      te: "స్కాన్ చేయగానే నేరుగా: https://sritraditionalsarees.in కి వెళుతుంది",
    },
    printStandeeBtn: {
      en: "Print Standee",
      te: "స్టాండీ ప్రింట్",
    },
    shareQrLinkBtn: {
      en: "Share QR Link",
      te: "క్యూఆర్ లింక్ షేర్",
    },
  },

  // 8 Distinct Social Media Channels
  socialMedia: [
    {
      id: "whatsapp",
      name: "WhatsApp",
      url: "https://wa.me/919876543210?text=Namaskaram!%20I%20would%20like%20to%20know%20more.",
      color: "#25D366",
    },
    {
      id: "instagram",
      name: "Instagram",
      url: "https://instagram.com",
      color: "#E1306C",
    },
    {
      id: "facebook",
      name: "Facebook",
      url: "https://facebook.com",
      color: "#1877F2",
    },
    {
      id: "youtube",
      name: "YouTube",
      url: "https://youtube.com",
      color: "#FF0000",
    },
    {
      id: "twitter",
      name: "X (Twitter)",
      url: "https://twitter.com",
      color: "#111111",
    },
    {
      id: "telegram",
      name: "Telegram",
      url: "https://t.me",
      color: "#229ED9",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "#0A66C2",
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:contact@sritraditionalsarees.com?subject=Inquiry%20from%20Website",
      color: "#7B1122",
    },
  ],

  // About Us Content
  aboutUs: {
    titleEn: "Heritage of Master Weavers",
    titleTe: "మా చేనేత సాంప్రదాయ ప్రస్థానం",
    paragraph1En:
      "Welcome to Sri Traditional Sarees - Handloom Clothing House. Located in the world-renowned weaving hub of Mangalagiri, Andhra Pradesh, we are dedicated to preserving and celebrating the timeless art of genuine handwoven textiles. For more than three decades, we have bridged the gap between authentic artisan families and saree connoisseurs worldwide.",
    paragraph1Te:
      "శ్రీ ట్రెడిషనల్ శారీస్ - చేనేత వస్త్రాలయానికి స్వాగతం. ప్రపంచ ప్రసిద్ధి గాంచిన చేనేత రాజధాని మంగళగిరి నడిబొడ్డున వెలసిన మా సంస్థ, మూడు దశాబ్దాలుగా స్వచ్ఛమైన చేనేత కళను మరియు నైపుణ్యం కలిగిన నేతన్నల ప్రతిభను మీ ముందుకు తీసుకువస్తోంది.",
    paragraph2En:
      "Every piece in our collection—from lustrous bridal pattu sarees and intricate Kuppadam weaves to breezy 80s-count Mangalagiri cottons with Nizam borders—is crafted using certified natural yarns, skin-safe organic dyes, and genuine zari. When you buy from us, you directly support artisan handloom families.",
    paragraph2Te:
      "మా వద్ద లభించే ప్రతి చీర - కల్యాణ పట్టు చీరలు, కుప్పడం పట్టు, నిజాం బోర్డర్ మంగళగిరి కాటన్స్ - స్వచ్ఛమైన జరీ మరియు సహజ రంగులతో రూపొందించబడినవి. మీ కొనుగోలు నేరుగా నేత కార్మికుల కుటుంబాలకు చేయూతనిస్తుంది.",
    highlights: [
      {
        titleEn: "Silk Mark & Handloom Certified",
        titleTe: "100% స్వచ్ఛమైన చేనేత సర్టిఫైడ్",
        descEn: "Guaranteed authentic pure silk and combed cotton yarns.",
        descTe: "స్వచ్ఛమైన పట్టు మరియు నాణ్యమైన నూలుతో నేసిన వస్త్రాలు.",
      },
      {
        titleEn: "Direct From Weavers",
        titleTe: "నేరుగా నేతన్నల నుండి",
        descEn: "No middlemen markups, honest artisanal pricing.",
        descTe: "దళారులు లేని సరసమైన ధరలు, నేతన్నలకు న్యాయమైన వేతనం.",
      },
      {
        titleEn: "Worldwide Safe Dispatch",
        titleTe: "ప్రపంచవ్యాప్త డెలివరీ సదుపాయం",
        descEn: "Tamper-proof insured shipping across India & abroad.",
        descTe: "భారతదేశం అంతటా మరియు విదేశాలకు అత్యంత సురక్షితమైన పార్సెల్.",
      },
    ],
  },

  // Terms and Conditions
  terms: {
    tabs: {
      offline: {
        en: "Offline Showroom",
        te: "షోరూమ్ కొనుగోలు (ఆఫ్‌లైన్)",
      },
      online: {
        en: "Online & Courier",
        te: "ఆన్‌లైన్ & వాట్సాప్ ఆర్డర్లు",
      },
    },
    notice: {
      en: "For any order clarifications or custom orders, please message us on WhatsApp or call our desk.",
      te: "ఏవైనా సందేహాలుంటే దయచేసి మా వాట్సాప్ లేదా ఫోన్ ద్వారా సంప్రదించండి.",
    },
    offline: {
      tagEn: "In-Store Showroom Purchases",
      tagTe: "షోరూమ్ కొనుగోలు నిబంధనలు (ఆఫ్‌లైన్)",
      pointsEn: [
        "Exchange is permitted within 7 days of purchase only upon producing the original billing invoice and with all barcode tags intact.",
        "Sarees on which fall/pico is completed, tassels made, or blouse piece has been cut are strictly non-exchangeable.",
        "Dry cleaning is strongly advised for all pure silk, zari, and delicate vegetable-dyed handloom fabrics.",
        "We accept Cash, UPI (GPay/PhonePe/Paytm), Debit/Credit Cards, and Direct Bank Transfers at the counter without any extra surcharge.",
        "Natural variations in weaving slubs, warp ends, and zari motifs are intrinsic hallmarks of authentic handmade sarees, not manufacturing defects.",
      ],
      pointsTe: [
        "కొనుగోలు చేసిన 7 రోజులలోపు అసలు బిల్లు రసీదు మరియు ట్యాగ్‌లతో మాత్రమే ఎక్స్ఛేంజ్ సదుపాయం కలదు.",
        "ఫాల్, పికో కుట్టిన లేదా బ్లౌజ్ కట్ చేసిన చీరలు తిరిగి తీసుకోబడవు / ఎక్స్ఛేంజ్ చేయబడవు.",
        "అన్ని పట్టు మరియు జరీ చీరలను డ్రై క్లీన్ మాత్రమే చేయించాలని సూచించడమైనది.",
        "నగదు, యూపీఐ (UPI), క్రెడిట్ మరియు డెబిట్ కార్డుల చెల్లింపులు ఎలాంటి అదనపు ఛార్జీలు లేకుండా స్వీకరించబడును.",
        "చేనేత నేతలో వచ్చే స్వల్ప సహజ తేడాలు అసలైన చేతిపనితనానికి నిదర్శనం, లోపాలు కావు.",
      ],
    },
    online: {
      tagEn: "Online Orders & Courier Dispatch",
      tagTe: "ఆన్‌లైన్ & వాట్సాప్ ఆర్డర్ నిబంధనలు",
      pointsEn: [
        "All prepaid orders are dispatched within 24 to 48 business hours via premium express couriers with tracking details shared automatically.",
        "Slight color variation of 5% to 10% may occur due to studio photography lighting and individual smartphone screen calibrations.",
        "In the rare event of transit damage, an uncut, continuous 360-degree parcel opening video from seal-break to full reveal is strictly mandatory.",
        "Exchange or replacement requests must be submitted via our official WhatsApp support within 48 hours of parcel delivery.",
        "International duties, customs clearance fees, and destination country taxes (if applicable) are payable directly by the recipient.",
      ],
      pointsTe: [
        "ఆర్డర్లు 24 నుండి 48 గంటల్లో ప్రీమియం కొరియర్ ద్వారా పంపబడును మరియు లైవ్ ట్రాకింగ్ లింక్ అందించబడుతుంది.",
        "మొబైల్ స్క్రీన్ బ్రైట్‌నెస్ మరియు ఫోటోగ్రఫీ కాంతి వల్ల 5% నుండి 10% రంగు వ్యత్యాసం ఉండే అవకాశం కలదు.",
        "పార్సెల్ అన్‌బాక్సింగ్ వీడియో (ఎడిటింగ్ లేని పూర్తి వీడియో) లేకుండా ఎటువంటి డ్యామేజ్ రిటర్న్ లేదా రీప్లేస్‌మెంట్ అంగీకరించబడదు.",
        "డెలివరీ జరిగిన 48 గంటలలోపు మా అధికారిక వాట్సాప్ ద్వారా తెలియజేయాలి.",
        "అంతర్జాతీయ ఆర్డర్ల కస్టమ్స్ డ్యూటీలు ఏవైనా ఉంటే కొనుగోలుదారే చెల్లించవలసి ఉంటుంది.",
      ],
    },
  },
};

// =========================================================================
// 2. EMBEDDED HIGH-FIDELITY BRAND LOGO VECTOR (EN & TE)
// Faithfully replicates the woman weaving on handloom with traditional motifs
// =========================================================================
function BrandLogoVector({ isTelugu }) {
  return (
    <div className="w-full max-w-[480px] mx-auto select-none">
      <svg 
        viewBox="0 0 680 280" 
        className="w-full h-auto drop-shadow-sm filter contrast-105"
        style={{ mixBlendMode: 'multiply' }}
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFB76C" />
            <stop offset="50%" stopColor="#C59B27" />
            <stop offset="100%" stopColor="#8A6715" />
          </linearGradient>
          <linearGradient id="sareeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B1E2D" />
            <stop offset="100%" stopColor="#C41E3A" />
          </linearGradient>
          <linearGradient id="sareeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DAA520" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
          <linearGradient id="sareeGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* Circular Medallion Left */}
        <g transform="translate(140, 140)">
          {/* Ornate Rings */}
          <circle cx="0" cy="0" r="120" stroke="url(#goldGrad)" strokeWidth="6" fill="#FFFDF8" />
          <circle cx="0" cy="0" r="110" stroke="#8B1E2D" strokeWidth="2" strokeDasharray="5 3" fill="none" />
          <circle cx="0" cy="0" r="102" stroke="url(#goldGrad)" strokeWidth="3" fill="none" />

          {/* Medallion Floral Border Accents (8 Petals) */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <g key={i} transform={`rotate(${angle}) translate(0, -111)`}>
              <ellipse cx="0" cy="0" rx="4" ry="7" fill="#8B1E2D" />
              <circle cx="0" cy="0" r="2" fill="#DFB76C" />
            </g>
          ))}

          {/* Pit Loom Structure */}
          <g transform="translate(-10, -5)">
            {/* Wooden Loom Frame Posts */}
            <rect x="-65" y="-55" width="8" height="105" rx="2" fill="#582C12" />
            <rect x="52" y="-55" width="8" height="105" rx="2" fill="#582C12" />
            <rect x="-75" y="-48" width="140" height="9" rx="2" fill="#783D19" />
            <rect x="-70" y="38" width="135" height="9" rx="2" fill="#582C12" />
            
            {/* Hanging Spools */}
            <line x1="-50" y1="-48" x2="-50" y2="-25" stroke="#999" strokeWidth="1" />
            <line x1="-35" y1="-48" x2="-35" y2="-20" stroke="#999" strokeWidth="1" />
            <rect x="-54" y="-25" width="8" height="15" rx="2" fill="#0D9488" />
            <rect x="-39" y="-20" width="8" height="15" rx="2" fill="#DC2626" />

            <line x1="35" y1="-48" x2="35" y2="-22" stroke="#999" strokeWidth="1" />
            <line x1="48" y1="-48" x2="48" y2="-28" stroke="#999" strokeWidth="1" />
            <rect x="31" y="-22" width="8" height="15" rx="2" fill="#2563EB" />
            <rect x="44" y="-28" width="8" height="15" rx="2" fill="#D97706" />

            {/* Handloom Weaver Woman */}
            <g transform="translate(0, -18)">
              {/* Hair Bun with Jasmine Flowers */}
              <circle cx="-1" cy="-24" r="14" fill="#1C1917" />
              <circle cx="-9" cy="-28" r="7" fill="#1C1917" />
              <ellipse cx="-10" cy="-26" rx="8" ry="4" fill="#FDFBF7" stroke="#E2E8F0" strokeWidth="1" />
              
              {/* Face and Traditional Bindi */}
              <circle cx="1" cy="-20" r="9" fill="#DEB887" />
              <circle cx="6" cy="-21" r="1.5" fill="#8B1E2D" />

              {/* Saree Blouse (Forest Green) & Handloom Saree drape */}
              <path d="M-12 -9 C -10 -15, 12 -15, 15 -9 L 16 12 L -14 12 Z" fill="#166534" />
              <path d="M-12 -2 Q 2 15 16 -2 L 18 14 Q 2 24 -14 14 Z" fill="url(#sareeGrad1)" />

              {/* Arms extended to the shuttle/beater */}
              <path d="M-10 -4 Q 0 10 18 6" stroke="#DEB887" strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M12 -4 Q 20 5 32 4" stroke="#DEB887" strokeWidth="5" strokeLinecap="round" fill="none" />
              {/* Gold bangles */}
              <circle cx="16" cy="6" r="3" fill="#D4AF37" />
              <circle cx="30" cy="4" r="3" fill="#D4AF37" />
            </g>

            {/* Reed / Beater Bar */}
            <rect x="-25" y="8" width="68" height="6" rx="2" fill="#3E200C" />

            {/* Traditional Charkha / Spinning Wheel (Left) */}
            <g transform="translate(-62, 18)">
              <circle cx="0" cy="0" r="19" stroke="#92400E" strokeWidth="2.5" fill="none" />
              <circle cx="0" cy="0" r="4" fill="#783D19" />
              {[0, 45, 90, 135].map((a, i) => (
                <line key={i} x1="-18" y1="0" x2="18" y2="0" stroke="#92400E" strokeWidth="1.2" transform={`rotate(${a})`} />
              ))}
              <rect x="-6" y="15" width="12" height="14" fill="#582C12" />
            </g>

            {/* Handwoven Saree Fabric flowing out in 3 vibrant handloom bands */}
            <path d="M-22 14 C -10 35, 15 50, 62 48 L 78 88 C 15 88, -25 70, -42 42 Z" fill="url(#sareeGrad1)" opacity="0.95" />
            <path d="M-12 14 C 2 38, 25 50, 72 48 L 84 88 C 28 88, -12 70, -28 42 Z" fill="url(#sareeGrad2)" opacity="0.95" />
            <path d="M-2 14 C 14 38, 35 50, 82 48 L 92 88 C 42 88, 2 70, -14 42 Z" fill="url(#sareeGrad3)" opacity="0.95" />

            {/* Zari Brocade Highlights on Border */}
            <path d="M60 48 Q 45 68 80 88" stroke="#FFE082" strokeWidth="3" strokeDasharray="3 2" fill="none" />
          </g>
        </g>

        {/* Dynamic Decorative Calligraphy Ribbons */}
        <path d="M220 85 C 280 40, 360 110, 520 65 S 620 75, 650 82" fill="none" stroke="#8B1E2D" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M240 180 C 310 220, 390 160, 530 195 S 620 180, 645 170" fill="none" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" />
        <path d="M210 130 C 260 120, 310 140, 370 125" fill="none" stroke="#C59B27" strokeWidth="2" strokeLinecap="round" />

        {/* Brand Name & Subtitle Typography */}
        {isTelugu ? (
          <g>
            <text 
              x="455" 
              y="132" 
              textAnchor="middle" 
              fill="#7B1122" 
              fontFamily="'Noto Sans Telugu', 'Inter', serif" 
              fontSize="44" 
              fontWeight="900" 
              letterSpacing="0.5"
            >
              శ్రీ ట్రెడిషనల్ శారీస్
            </text>
            {/* Traditional ornament bar */}
            <path d="M280 150 Q 455 160 630 150" stroke="#C59B27" strokeWidth="1.5" fill="none" />
            <circle cx="455" cy="155" r="3" fill="#8B1E2D" />
            <text 
              x="455" 
              y="182" 
              textAnchor="middle" 
              fill="#166534" 
              fontFamily="'Noto Sans Telugu', 'Inter', serif" 
              fontSize="24" 
              fontWeight="800" 
              letterSpacing="2"
            >
              ❧ చేనేత వస్త్రాలయం ☙
            </text>
          </g>
        ) : (
          <g>
            <text 
              x="455" 
              y="128" 
              textAnchor="middle" 
              fill="#7B1122" 
              fontFamily="'Cinzel', Georgia, serif" 
              fontSize="38" 
              fontWeight="900" 
              letterSpacing="1"
            >
              SRI TRADITIONAL SAREES
            </text>
            <path d="M275 145 Q 455 155 635 145" stroke="#C59B27" strokeWidth="1.5" fill="none" />
            <circle cx="455" cy="150" r="3" fill="#8B1E2D" />
            <text 
              x="455" 
              y="178" 
              textAnchor="middle" 
              fill="#166534" 
              fontFamily="'Cinzel', Georgia, serif" 
              fontSize="20" 
              fontWeight="800" 
              letterSpacing="3"
            >
              ❧ HANDLOOM CLOTHING HOUSE ☙
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

// =========================================================================
// 3. SOCIAL MEDIA ICONS
// =========================================================================
const SOCIAL_ICONS = {
  whatsapp: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.012 2C6.486 2 2 6.486 2 12.012c0 1.956.565 3.784 1.543 5.337L2.1 22l4.823-1.408A9.96 9.96 0 0 0 12.012 22C17.538 22 22 17.514 22 12.012 22 6.486 17.538 2 12.012 2zm.006 18.286a8.24 8.24 0 0 1-4.223-1.157l-.303-.18-2.863.836.852-2.79-.197-.314a8.27 8.27 0 0 1-1.272-4.669c0-4.57 3.717-8.286 8.286-8.286 4.568 0 8.285 3.716 8.285 8.286 0 4.569-3.717 8.286-8.285 8.286zm4.536-6.195c-.249-.125-1.472-.726-1.7-.809-.229-.083-.395-.125-.561.125-.166.249-.644.809-.789.975-.145.166-.291.187-.54.062s-1.05-.387-2.001-1.234c-.74-.66-1.24-1.475-1.385-1.724-.145-.249-.015-.384.11-.508.112-.112.249-.291.374-.436.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.436s-.561-1.35-.769-1.849c-.202-.486-.407-.42-.561-.428l-.478-.008c-.166 0-.436.062-.664.311s-.872.852-.872 2.077c0 1.225.893 2.41 1.018 2.576.125.166 1.756 2.682 4.255 3.762.595.257 1.059.41 1.422.525.598.19 1.142.163 1.572.099.48-.072 1.472-.602 1.68-1.184.208-.582.208-1.08.146-1.184-.063-.104-.229-.166-.478-.291z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  facebook: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  telegram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.913z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  email: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

// =========================================================================
// 4. MAIN APP COMPONENT
// =========================================================================
export default function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [modalState, setModalState] = useState({ qr: false, about: false, terms: false });
  const [termsTab, setTermsTab] = useState('offline');
  const [toastMsg, setToastMsg] = useState(null);

  const isTe = currentLang === 'te';
  const langKey = currentLang;

  // Real-time opening calculation
  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;
  const isOpen = currentHour >= SHOP_CONFIG.timings.openHour && currentHour < SHOP_CONFIG.timings.closeHour;

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'te' : 'en'));
  };

  // Copy Address to clipboard
  const handleCopyAddress = () => {
    const text = `${SHOP_CONFIG.names[langKey]} (${SHOP_CONFIG.subtitles[langKey]})\n${SHOP_CONFIG.location.shopNo[langKey]}\n${SHOP_CONFIG.ui.landmarkLabel[langKey]} ${SHOP_CONFIG.location.landmark[langKey]}\n${SHOP_CONFIG.location.area[langKey]}, ${SHOP_CONFIG.location.district[langKey]}, ${SHOP_CONFIG.location.state[langKey]} - ${SHOP_CONFIG.location.pincode}\nPhone: ${SHOP_CONFIG.contact.phoneDisplay}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        triggerToast(SHOP_CONFIG.ui.toastAddressCopied[langKey]);
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    triggerToast(SHOP_CONFIG.ui.toastAddressCopied[langKey]);
  };

  // Web Share or Clipboard Fallback
  const handleShare = () => {
    const shareUrl = SHOP_CONFIG.landingPageUrl;
    if (navigator.share) {
      navigator.share({
        title: `${SHOP_CONFIG.names[langKey]} - ${SHOP_CONFIG.subtitles[langKey]}`,
        text: `${SHOP_CONFIG.taglines[langKey]} • Ph: ${SHOP_CONFIG.contact.phoneDisplay}`,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(shareUrl).then(() => {
        triggerToast(SHOP_CONFIG.ui.toastLinkCopied[langKey]);
      });
    }
  };

  const waUrl = `https://wa.me/${SHOP_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(SHOP_CONFIG.contact.whatsappPrefill)}`;
  const smsUrl = `sms:${SHOP_CONFIG.contact.smsNumber}?body=${encodeURIComponent(SHOP_CONFIG.contact.smsPrefill)}`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=380x380&data=${encodeURIComponent(SHOP_CONFIG.landingPageUrl)}&margin=1&format=png`;

  return (
    <div 
      className="min-h-screen text-[#382315] antialiased selection:bg-[#7B1122] selection:text-white relative font-sans"
      style={{
        backgroundColor: '#F8F4EA',
        backgroundImage: `
          radial-gradient(#C59B27 0.65px, transparent 0.65px),
          radial-gradient(#8B1E2D 0.5px, #F8F4EA 0.5px)
        `,
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0, 12px 12px',
      }}
    >
      {/* Parchment texture gradient overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-gradient-to-b from-[#FAF6ED] via-transparent to-[#EFE3C6]" />

      {/* Main Single Column Container */}
      <main className="relative mx-auto max-w-xl min-h-screen flex flex-col px-3 sm:px-6 py-4 sm:py-6">
        
        {/* ============================================================ */}
        {/* TOP BAR: Language Switcher & QR / Share Actions */}
        {/* ============================================================ */}
        <header className="flex items-center justify-between py-2 px-1 mb-2">
          {/* Multilingual Toggle Button */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9] border border-[#D4AF37] shadow-sm text-xs font-bold text-[#7B1122] hover:bg-[#F4ECE1] transition active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span>{SHOP_CONFIG.ui.languageSwitchBtn[langKey]}</span>
          </button>

          {/* Right Header Actions */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setModalState({ ...modalState, qr: true })}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#FFFDF9] border border-[#D4AF37] text-xs font-bold text-[#7B1122] hover:bg-[#F4ECE1] shadow-sm transition active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#7B1122]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span className="hidden sm:inline">{SHOP_CONFIG.ui.showStoreQrBtn[langKey]}</span>
            </button>

            <button 
              onClick={handleShare} 
              className="p-2 rounded-full bg-[#FFFDF9] border border-[#D4AF37] text-[#7B1122] hover:bg-[#F4ECE1] shadow-sm transition active:scale-95 cursor-pointer"
              title={SHOP_CONFIG.ui.shareShopBtn[langKey]}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </header>

        {/* ============================================================ */}
        {/* BRAND HERO CARD WITH BLENDED HANDLOOM WEAVER LOGO */}
        {/* ============================================================ */}
        <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#D4AF37]/80 shadow-lg p-4 sm:p-6 text-center relative overflow-hidden">
          <div className="absolute top-2 left-2 text-[#C59B27] opacity-60 text-sm select-none">❖</div>
          <div className="absolute top-2 right-2 text-[#C59B27] opacity-60 text-sm select-none">❖</div>

          {/* Logo Illustration Container */}
          <div className="w-full flex items-center justify-center py-2 px-1">
            <BrandLogoVector isTelugu={isTe} />
          </div>

          {/* Tagline */}
          <p className="mt-2 text-xs sm:text-sm text-stone-700 max-w-md mx-auto leading-relaxed font-medium">
            {SHOP_CONFIG.taglines[langKey]}
          </p>

          {/* Traditional Ornamental Divider */}
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

          {/* Primary Action Buttons */}
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
                    <span className="text-base sm:text-lg font-bold tracking-wide font-serif">
                      {SHOP_CONFIG.ui.visitOnlineStore.title[langKey]}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-[#D4AF37] text-[#422006]">
                      {SHOP_CONFIG.ui.visitOnlineStore.tag[langKey]}
                    </span>
                  </div>
                  <p className="text-xs text-amber-100/90 mt-0.5">
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
                  {SOCIAL_ICONS.whatsapp}
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

        {/* ============================================================ */}
        {/* CONNECT ON SOCIAL MEDIA (8 CHANNELS GRID) */}
        {/* ============================================================ */}
        <section className="mt-4 bg-[#FFFDF9] rounded-3xl border border-[#D4AF37]/70 p-4 sm:p-5 shadow-md">
          <div className="flex items-center justify-between mb-3 border-b border-[#F0E6D2] pb-2">
            <h3 className="text-xs sm:text-sm font-bold font-serif text-[#7B1122] uppercase tracking-wider">
              {SHOP_CONFIG.ui.socialHeader[langKey]}
            </h3>
            <span className="text-[11px] font-semibold text-stone-500 bg-[#FAF5EB] px-2 py-0.5 rounded-full border border-[#EADBCA]">
              {SHOP_CONFIG.ui.socialCountBadge[langKey]}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {SHOP_CONFIG.socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#FAF5EB] hover:bg-[#F2E7D3] border border-[#EADBCA] text-stone-700 transition transform hover:-translate-y-0.5 active:scale-95 group"
                title={social.name}
              >
                <div className="mb-1 transition group-hover:scale-110" style={{ color: social.color }}>
                  {SOCIAL_ICONS[social.id]}
                </div>
                <span className="text-[10px] font-semibold text-stone-800 truncate w-full text-center">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SHOWROOM ADDRESS & BUSINESS TIMINGS */}
        {/* ============================================================ */}
        <section className="mt-4 bg-[#FFFDF9] rounded-3xl border border-[#D4AF37]/70 p-5 shadow-md text-left">
          <div className="flex items-center justify-between border-b border-[#F0E6D2] pb-2.5 mb-3">
            <div className="flex items-center space-x-2 text-[#7B1122] font-serif font-bold text-sm sm:text-base">
              <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{SHOP_CONFIG.ui.showroomDetailsHeader[langKey]}</span>
            </div>
            <button 
              onClick={handleCopyAddress}
              className="text-[11px] font-bold text-[#7B1122] hover:underline flex items-center space-x-1 cursor-pointer"
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

            {/* Phones */}
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
              onClick={() => setModalState({ ...modalState, qr: true })}
              className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-[#FAF5EB] border border-[#D4AF37]/70 text-[#7B1122] text-xs font-semibold hover:bg-[#F2E7D3] transition cursor-pointer"
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

        {/* ============================================================ */}
        {/* ABOUT US & TERMS BUTTONS */}
        {/* ============================================================ */}
        <section className="mt-4 grid grid-cols-2 gap-3">
          <button 
            onClick={() => setModalState({ ...modalState, about: true })}
            className="flex items-center justify-center space-x-2 p-3 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/70 text-stone-800 hover:bg-[#FAF4E9] shadow-sm transition active:scale-95 text-xs sm:text-sm font-bold font-serif cursor-pointer"
          >
            <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>{SHOP_CONFIG.ui.aboutLoomsBtn[langKey]}</span>
          </button>

          <button 
            onClick={() => setModalState({ ...modalState, terms: true })}
            className="flex items-center justify-center space-x-2 p-3 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/70 text-stone-800 hover:bg-[#FAF4E9] shadow-sm transition active:scale-95 text-xs sm:text-sm font-bold font-serif cursor-pointer"
          >
            <svg className="w-4 h-4 text-[#7B1122]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{SHOP_CONFIG.ui.termsPoliciesBtn[langKey]}</span>
          </button>
        </section>

        {/* ============================================================ */}
        {/* FOOTER */}
        {/* ============================================================ */}
        <footer className="mt-8 mb-4 text-center text-xs text-stone-500">
          <div className="flex items-center justify-center space-x-2 mb-2 select-none">
            <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
            <span className="text-[#B8860B]">❖</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
          </div>
          <p className="font-serif font-bold text-[#7B1122] text-sm">
            {SHOP_CONFIG.names[langKey]} • {SHOP_CONFIG.subtitles[langKey]}
          </p>
          <p className="text-[11px] text-stone-600 mt-0.5">
            {/* {SHOP_CONFIG.established[langKey]} • {SHOP_CONFIG.location.area[langKey]}, {SHOP_CONFIG.location.district[langKey]}, {SHOP_CONFIG.location.state[langKey]} */}
            {SHOP_CONFIG.location.area[langKey]}, {SHOP_CONFIG.location.district[langKey]}, {SHOP_CONFIG.location.state[langKey]}
          </p>
          <p className="text-[10px] text-stone-400 mt-2">
            {SHOP_CONFIG.footerNote[langKey]}
          </p>
        </footer>
      </main>

      {/* ============================================================ */}
      {/* MODAL 1: STORE QR STANDEE MODAL */}
      {/* Explicitly encoded for https://sritraditionalsarees.in */}
      {/* ============================================================ */}
      {modalState.qr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#FFFDF9] border-2 border-[#D4AF37] w-full max-w-sm rounded-3xl p-6 shadow-2xl relative text-center">
            <button 
              onClick={() => setModalState({ ...modalState, qr: false })} 
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="text-xs uppercase tracking-widest text-[#B8860B] font-bold mb-1">
              {SHOP_CONFIG.qrModal.topBadge[langKey]}
            </div>
            <h3 className="text-xl font-bold font-serif text-[#7B1122]">
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
                className="py-2.5 px-3 rounded-xl bg-[#FAF5EB] border border-[#D4AF37] text-[#7B1122] text-xs font-bold hover:bg-[#F2E7D3] transition flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2m-8 0v4h8v-4H8z"/>
                </svg>
                <span>{SHOP_CONFIG.qrModal.printStandeeBtn[langKey]}</span>
              </button>
              <button 
                onClick={handleShare} 
                className="py-2.5 px-3 rounded-xl bg-[#7B1122] text-white text-xs font-bold hover:bg-[#630E1B] transition flex items-center justify-center space-x-1.5 shadow cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
                <span>{SHOP_CONFIG.qrModal.shareQrLinkBtn[langKey]}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 2: ABOUT US */}
      {/* ============================================================ */}
      {modalState.about && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#FFFDF9] border-t-2 sm:border-2 border-[#D4AF37] w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[85vh] overflow-y-auto p-6 shadow-2xl relative text-left">
            <button 
              onClick={() => setModalState({ ...modalState, about: false })} 
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#7B1122] text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold font-serif text-[#7B1122]">
                  {isTe ? SHOP_CONFIG.aboutUs.titleTe : SHOP_CONFIG.aboutUs.titleEn}
                </h2>
                <p className="text-xs text-stone-500">{SHOP_CONFIG.names[langKey]} - {SHOP_CONFIG.subtitles[langKey]}</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>{isTe ? SHOP_CONFIG.aboutUs.paragraph1Te : SHOP_CONFIG.aboutUs.paragraph1En}</p>
              <p>{isTe ? SHOP_CONFIG.aboutUs.paragraph2Te : SHOP_CONFIG.aboutUs.paragraph2En}</p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-2.5 mt-5">
              {SHOP_CONFIG.aboutUs.highlights.map((hl, i) => (
                <div key={i} className="flex items-start space-x-3 p-3 rounded-xl bg-[#FAF5EB] border border-[#EEDBCA]">
                  <div className="p-1.5 rounded-lg bg-[#7B1122] text-white mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#7B1122]">{isTe ? hl.titleTe : hl.titleEn}</h4>
                    <p className="text-xs text-stone-600">{isTe ? hl.descTe : hl.descEn}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setModalState({ ...modalState, about: false })} 
              className="mt-6 w-full py-2.5 rounded-xl bg-[#7B1122] text-white font-semibold text-sm hover:bg-[#630E1B] transition cursor-pointer"
            >
              {SHOP_CONFIG.ui.closeBtn[langKey]}
            </button>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 3: TERMS & POLICIES (OFFLINE & ONLINE TABS) */}
      {/* ============================================================ */}
      {modalState.terms && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#FFFDF9] border-t-2 sm:border-2 border-[#D4AF37] w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[85vh] overflow-y-auto p-6 shadow-2xl relative text-left">
            <button 
              onClick={() => setModalState({ ...modalState, terms: false })} 
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-5 h-5 text-[#7B1122]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-lg font-bold font-serif text-[#7B1122]">
                {SHOP_CONFIG.ui.termsPoliciesBtn[langKey]}
              </h2>
            </div>

            {/* Offline vs Online Tab Switcher */}
            <div className="flex p-1 rounded-xl bg-stone-200/80 mb-4">
              <button 
                onClick={() => setTermsTab('offline')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer ${
                  termsTab === 'offline' ? 'bg-[#FFFDF9] text-[#7B1122] shadow' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>{SHOP_CONFIG.terms.tabs.offline[langKey]}</span>
              </button>
              <button 
                onClick={() => setTermsTab('online')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer ${
                  termsTab === 'online' ? 'bg-[#FFFDF9] text-[#7B1122] shadow' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>{SHOP_CONFIG.terms.tabs.online[langKey]}</span>
              </button>
            </div>

            {/* Selected Terms Point List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">
                {termsTab === 'offline'
                  ? (isTe ? SHOP_CONFIG.terms.offline.tagTe : SHOP_CONFIG.terms.offline.tagEn)
                  : (isTe ? SHOP_CONFIG.terms.online.tagTe : SHOP_CONFIG.terms.online.tagEn)}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                {(termsTab === 'offline'
                  ? (isTe ? SHOP_CONFIG.terms.offline.pointsTe : SHOP_CONFIG.terms.offline.pointsEn)
                  : (isTe ? SHOP_CONFIG.terms.online.pointsTe : SHOP_CONFIG.terms.online.pointsEn)
                ).map((pt, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#8B1E2D] font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notice Info Box */}
            <div className="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-start space-x-2 text-xs text-amber-900">
              <svg className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              <span>{SHOP_CONFIG.terms.notice[langKey]}</span>
            </div>

            <button 
              onClick={() => setModalState({ ...modalState, terms: false })} 
              className="mt-5 w-full py-2.5 rounded-xl bg-[#7B1122] text-white font-semibold text-sm hover:bg-[#630E1B] transition cursor-pointer"
            >
              {SHOP_CONFIG.ui.gotItBtn[langKey]}
            </button>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TOAST NOTIFICATION POPUP */}
      {/* ============================================================ */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#7B1122] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-2xl flex items-center space-x-2 border border-[#D4AF37] animate-bounce">
          <svg className="w-4 h-4 text-[#E5C158]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}