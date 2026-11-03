/* =========================================================
   DigiPatro — Storefront Configuration
   Headquarters: Biratnagar, Nepal
   Contact: +9779849782340 / order@digipatro.com
   ========================================================= */

window.SITE = {
  name: "DigiPatro",
  tagline: "Nepal’s Trusted Hub for Digital Subscriptions",
  whatsapp: "9779849782340",
  whatsappDisplay: "+9779849782340",
  phone: "+9779849782340",
  email: "order@digipatro.com",
  hours: "Every day · 8:00 AM – 11:00 PM NPT",
  location: "Biratnagar, Nepal",
  headquarter: "Main Road, Biratnagar, Nepal",
  trustStatement: "Trusted from all cities in Nepal and around the world",
  payments: ["eSewa", "Khalti", "Fonepay QR", "Bank Transfer"],
  socials: {
    facebook: "https://www.facebook.com/digipatro",
    instagram: "https://www.instagram.com/digipatro",
    tiktok: "https://www.tiktok.com/@digipatro",
    whatsapp: "https://wa.me/9779849782340",
  },
};

window.CATEGORIES = [
  {
    "id": "all",
    "label": "All (76)"
  },
  {
    "id": "streaming",
    "label": "OTT & Streaming (12)"
  },
  {
    "id": "ai",
    "label": "AI Tools (7)"
  },
  {
    "id": "cloud",
    "label": "Cloud Services (5)"
  },
  {
    "id": "academic",
    "label": "Academic Tools (8)"
  },
  {
    "id": "security",
    "label": "Antivirus & Security (6)"
  },
  {
    "id": "creative",
    "label": "Graphics & Creative (4)"
  },
  {
    "id": "software",
    "label": "Software & Licenses (9)"
  },
  {
    "id": "learning",
    "label": "Learning & Education (4)"
  },
  {
    "id": "developer",
    "label": "Developer Tools (5)"
  },
  {
    "id": "productivity",
    "label": "Productivity (3)"
  },
  {
    "id": "utilities",
    "label": "Utilities & Tools (12)"
  },
  {
    "id": "music",
    "label": "Music (1)"
  }
];

window.PRODUCTS = [
  {
    "id": "amazon-prime-video",
    "name": "Amazon Prime Video",
    "category": "streaming",
    "color": "#00A8E1",
    "mono": "PV",
    "tag": "50% OFF",
    "blurb": "4K Ultra HD \u00b7 Single Screen Plan",
    "discount": "50% OFF",
    "originalPrice": 300,
    "features": [
      "4K Ultra HD Quality",
      "Single Screen",
      "Offline Downloads"
    ],
    "popular": true,
    "featured": true,
    "plans": [
      {
        "label": "1 Month \u00b7 Single Screen",
        "price": 150,
        "originalPrice": 300
      }
    ],
    "officialPrice": "USD $8.99/mo (~NPR 1,200/mo) or NPR 300 / screen on OTT",
    "officialSource": "primevideo.com",
    "description": "Amazon Prime Video is one of the world's leading OTT streaming entertainment platforms, providing unlimited instant access to thousands of blockbuster movies, award-winning Amazon Originals (The Boys, Rings of Power, Reacher, Mirzapur), live sports, and regional content. DigiPatro provides full 4K Ultra HD single-screen private profiles with complete replacement guarantee and fast delivery on WhatsApp.",
    "specs": {
      "Quality": "4K Ultra HD / HDR",
      "Delivery": "10\u201330 Minutes on WhatsApp",
      "Warranty": "Full Term 100% Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer",
      "Region": "Nepal / Global Compatible"
    }
  },
  {
    "id": "netflix",
    "name": "Netflix Premium",
    "category": "streaming",
    "color": "#E50914",
    "mono": "N",
    "tag": "45% OFF",
    "blurb": "Single Screen \u00b7 4K Ultra HD Quality",
    "discount": "45% OFF",
    "originalPrice": 550,
    "features": [
      "4K Ultra HD Quality",
      "Single Screen",
      "Private Profile"
    ],
    "popular": true,
    "featured": true,
    "plans": [
      {
        "label": "1 Month \u00b7 Single Screen",
        "price": 300,
        "originalPrice": 550
      }
    ],
    "officialPrice": "USD $9.99/mo (Standard) to $22.99/mo (4K Premium) (~NPR 1,350 - NPR 3,100/mo)",
    "officialSource": "netflix.com",
    "description": "Netflix Premium 4K UHD plan offers unparalleled streaming quality across television, laptop, tablet, and mobile. Enjoy unlimited ad-free access to acclaimed international and local series, films, documentaries, and anime. Each profile is private with PIN lock support.",
    "specs": {
      "Quality": "4K Ultra HD + Dolby Atmos",
      "Screen": "Single Screen with Personal PIN",
      "Delivery": "Instant WhatsApp Delivery",
      "Warranty": "100% Replacement Warranty",
      "Payment": "eSewa / Khalti / Fonepay QR"
    }
  },
  {
    "id": "netflix-private-4k",
    "name": "Netflix 4K (Full Private)",
    "category": "streaming",
    "color": "#E50914",
    "mono": "N4K",
    "tag": "32% OFF",
    "blurb": "Private Personal Gmail \u00b7 4+1 Screens",
    "discount": "32% OFF",
    "originalPrice": 2200,
    "features": [
      "4+1 Screens",
      "Personal Gmail Account",
      "4K Ultra HD"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Full Private (4+1)",
        "price": 1499,
        "originalPrice": 2200
      }
    ],
    "officialPrice": "USD $22.99/mo (~NPR 3,100/mo, NPR 37,000/yr)",
    "officialSource": "netflix.com",
    "description": "Full private 4K Netflix account where you get the complete master email and password with 4+1 screens. Ideal for families, friend circles, or shared households. Change profiles, set personal PINs, and stream simultaneously on up to 4 devices at full 4K UHD quality.",
    "specs": {
      "Screens": "4+1 Complete Private Account",
      "Quality": "4K Ultra HD + Spatial Audio",
      "Access": "Master Email & Password",
      "Warranty": "Full Duration Warranty",
      "Payment": "Local Nepali Wallets & Bank QR"
    }
  },
  {
    "id": "netflix-prime-combo",
    "name": "Netflix + Prime Combo",
    "category": "streaming",
    "color": "#E50914",
    "mono": "N+",
    "tag": "47% OFF",
    "blurb": "Single Screen Shared \u00b7 2-in-1 Blockbuster",
    "discount": "47% OFF",
    "originalPrice": 750,
    "features": [
      "Netflix + Prime Video",
      "Single Screen",
      "Thousands of Movies"
    ],
    "popular": true,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Combo Bundle",
        "price": 399,
        "originalPrice": 750
      }
    ],
    "officialPrice": "Individual combined retail: NPR 1,800+ / mo",
    "officialSource": "netflix.com & primevideo.com",
    "description": "The ultimate binge-watcher combo pack combining Netflix Premium 4K Ultra HD and Amazon Prime Video at a massive discount. Enjoy the best of both entertainment universes with a single simple local payment on DigiPatro.",
    "specs": {
      "Included": "Netflix 4K UHD Profile + Prime Video 4K",
      "Screens": "Private Screen on each service",
      "Delivery": "Within 10\u201330 Minutes",
      "Warranty": "100% Duration Protection"
    }
  },
  {
    "id": "spotify",
    "name": "Spotify Premium",
    "category": "music",
    "color": "#1DB954",
    "mono": "S",
    "tag": "33% OFF",
    "blurb": "\ud83d\udeab No Ads. Just Music. \u00b7 100% Private Account",
    "discount": "33% OFF",
    "originalPrice": 1500,
    "features": [
      "100% Private Account",
      "Ad-Free Music (3 Months)",
      "Download Songs for Offline Listening"
    ],
    "popular": true,
    "featured": true,
    "plans": [
      {
        "label": "3 Months \u00b7 Private Account",
        "price": 999,
        "originalPrice": 1500
      }
    ],
    "officialPrice": "USD $11.99/mo (~NPR 1,600/mo, NPR 19,000/yr)",
    "officialSource": "spotify.com/premium",
    "description": "Spotify Premium delivers ad-free music listening, offline downloads, crystal-clear 320 kbps high fidelity audio, and unlimited skips across 100+ million tracks and podcasts on your phone, desktop, smart TV, or console.",
    "specs": {
      "Audio Quality": "Very High (320 kbps) + Lossless ready",
      "Offline Mode": "Download up to 10,000 songs",
      "Device Sync": "Spotify Connect across all devices",
      "Warranty": "Full Term Replacement"
    }
  },
  {
    "id": "youtube-premium",
    "name": "YouTube Premium",
    "category": "streaming",
    "color": "#FF0000",
    "mono": "YT",
    "tag": "38% OFF",
    "blurb": "Ad-Free Videos \u00b7 Background Play \u00b7 Music",
    "discount": "38% OFF",
    "originalPrice": 799,
    "features": [
      "Ad-Free Videos",
      "Background Play",
      "Offline Downloads"
    ],
    "popular": true,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Premium",
        "price": 499,
        "originalPrice": 799
      }
    ],
    "officialPrice": "USD $13.99/mo (~NPR 1,900/mo)",
    "officialSource": "youtube.com/premium",
    "description": "YouTube Premium removes all advertisements across YouTube, includes background playback while your phone screen is locked or while multitasking, offline video downloads, and grants full access to YouTube Music Premium.",
    "specs": {
      "Features": "100% Ad-Free YouTube + YouTube Music",
      "Background Play": "Yes, screen locked & PiP",
      "Downloads": "Full 1080p & 4K offline video",
      "Warranty": "Full Plan Warranty"
    }
  },
  {
    "id": "zee5-premium",
    "name": "Zee5 Premium",
    "category": "streaming",
    "color": "#8230C6",
    "mono": "Z5",
    "tag": "47% OFF",
    "blurb": "Private 3 Screens \u00b7 12 Months Access",
    "discount": "47% OFF",
    "originalPrice": 3200,
    "features": [
      "Private 3 Screens Only",
      "Full 12 Months Access",
      "Movies & Regional Web Series"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "12 Months \u00b7 Private 3 Screens",
        "price": 1700,
        "originalPrice": 3200
      }
    ],
    "officialPrice": "INR \u20b9999/yr (~NPR 1,600) + international card markup",
    "officialSource": "zee5.com",
    "description": "Zee5 Premium brings you 4,500+ movies, 200+ web series, live TV channels, and early access to popular TV serials before telecast. Enjoy blockbuster Hindi, South Indian dubs, and regional movies across multiple screens.",
    "specs": {
      "Screens": "Up to 3 Simultaneous Devices",
      "Audio/Video": "Full HD / 4K + Dolby 5.1",
      "Content": "Zee Originals, AltBalaji shows, Live News",
      "Warranty": "12 Months Replacement"
    }
  },
  {
    "id": "hbo-max",
    "name": "HBO Max",
    "category": "streaming",
    "color": "#7B2FF7",
    "mono": "HB",
    "tag": "41% OFF",
    "blurb": "4K Ultra HD \u00b7 100% Private Profile",
    "discount": "41% OFF",
    "originalPrice": 850,
    "features": [
      "4K Ultra HD Streaming",
      "100% Private Profile",
      "Ad-Free Watching"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Private Profile",
        "price": 500,
        "originalPrice": 850
      }
    ],
    "officialPrice": "USD $16.99/mo (~NPR 2,300/mo, NPR 27,600/yr)",
    "officialSource": "max.com",
    "description": "HBO Max (Max) streams the world's most prestigious television series and movies from HBO, Warner Bros., DC Universe, Discovery, and Cartoon Network. Watch Game of Thrones, House of the Dragon, Succession, and DC blockbusters in 4K.",
    "specs": {
      "Quality": "4K UHD with HDR10 & Dolby Vision",
      "Content": "HBO Originals, DC Universe, Warner Bros",
      "Profile": "Personal Private Profile",
      "Warranty": "100% Replacement Warranty"
    }
  },
  {
    "id": "crunchyroll",
    "name": "Crunchyroll Mega Fan",
    "category": "streaming",
    "color": "#F47521",
    "mono": "CR",
    "tag": "33% OFF",
    "blurb": "100% Private Account \u00b7 Ad-Free Anime & Offline Viewing",
    "discount": "33% OFF",
    "originalPrice": 1200,
    "features": [
      "100% Private Account",
      "Ad-Free Anime Streaming",
      "1080p Full HD Quality"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Private Account",
        "price": 800,
        "originalPrice": 1200
      }
    ],
    "officialPrice": "USD $9.99/mo (~NPR 1,350/mo, NPR 16,000/yr)",
    "officialSource": "crunchyroll.com",
    "description": "Crunchyroll Mega Fan is the anime enthusiast's dream, streaming ad-free simulcasts directly from Japan just 1 hour after broadcast. Enjoy 1,000+ anime titles with English sub/dub and offline viewing on up to 4 devices.",
    "specs": {
      "Library": "1,000+ Anime Series & Movies",
      "Simulcast": "Direct from Tokyo within 1 hour",
      "Offline Viewing": "Download on iOS & Android",
      "Screens": "Private Screen / Account"
    }
  },
  {
    "id": "canva-pro",
    "name": "Canva Pro",
    "category": "software",
    "color": "#00C4CC",
    "mono": "Ca",
    "tag": "60% OFF",
    "blurb": "Lifetime Access \u00b7 AI Design & Brand Kit",
    "discount": "60% OFF",
    "originalPrice": 2000,
    "features": [
      "100% Lifetime Pro Access",
      "Full Brand Kit & Custom Fonts",
      "AI Design & Magic Studio"
    ],
    "popular": true,
    "featured": true,
    "plans": [
      {
        "label": "Lifetime \u00b7 Lifetime Pro (Brand Kit)",
        "price": 800,
        "originalPrice": 2000
      }
    ],
    "officialPrice": "USD $119.99/yr (~NPR 16,200/yr)",
    "officialSource": "canva.com/pro",
    "description": "Canva Pro empowers creators, businesses, and students with unlimited access to 100M+ premium stock photos, graphics, videos, and audio. Unlock one-click background remover, Magic Resize, brand kits, and AI generative design tools.",
    "specs": {
      "Assets": "100M+ Premium Stock Images & Fonts",
      "AI Tools": "Magic Studio, Eraser & Resizer",
      "Brand Kits": "Unlimited Brand Assets & Palettes",
      "Access": "Official Lifetime Invite on your personal email"
    }
  },
  {
    "id": "microsoft-365",
    "name": "Microsoft 365 Pro",
    "category": "software",
    "color": "#00A4EF",
    "mono": "M",
    "tag": "42% OFF",
    "blurb": "100% Private Account \u00b7 Word, Excel, 1TB Cloud",
    "discount": "42% OFF",
    "originalPrice": 6000,
    "features": [
      "100% Private Account",
      "Word, Excel, PowerPoint, Outlook",
      "1 TB OneDrive Cloud Storage"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "12 Months \u00b7 Private Personal",
        "price": 3500,
        "originalPrice": 6000
      }
    ],
    "officialPrice": "USD $69.99/yr (~NPR 9,450/yr)",
    "officialSource": "microsoft.com/microsoft-365",
    "description": "Microsoft 365 Pro provides genuine desktop installations of Word, Excel, PowerPoint, Outlook, and OneNote for PC and Mac, paired with 1 TB of cloud storage on OneDrive with advanced security protection.",
    "specs": {
      "Office Apps": "Word, Excel, PowerPoint, Outlook, OneNote",
      "Cloud Storage": "1 TB OneDrive Secure Cloud",
      "Devices": "5 Devices simultaneously (PC, Mac, Mobile)",
      "Warranty": "Full 1 Year Active Warranty"
    }
  },
  {
    "id": "nordvpn",
    "name": "NordVPN Premium",
    "category": "software",
    "color": "#4687FF",
    "mono": "NV",
    "tag": "45% OFF",
    "blurb": "Ultra-Fast VPN \u00b7 3 Months Access \u00b7 Threat Protection",
    "discount": "45% OFF",
    "originalPrice": 1800,
    "features": [
      "100% Private Access",
      "Full 3 Months Duration",
      "High-Speed Global Servers"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "3 Months \u00b7 Premium Security",
        "price": 999,
        "originalPrice": 1800
      }
    ],
    "officialPrice": "USD $12.99/mo (~NPR 1,750/mo) or $59.88/yr (~NPR 8,100)",
    "officialSource": "nordvpn.com",
    "description": "NordVPN is the global gold standard in online privacy and cybersecurity. Connect to 6,000+ ultra-fast servers across 111 countries with next-gen NordLynx encryption, malware blocking with Threat Protection, and zero logs.",
    "specs": {
      "Encryption": "AES-256 / Next-Gen NordLynx",
      "Servers": "6,000+ Servers across 111 Countries",
      "Features": "Threat Protection, Double VPN, Kill Switch",
      "Compatibility": "Windows, Mac, iOS, Android, Linux"
    }
  },
  {
    "id": "google-gemini-ai-pro",
    "name": "Google Gemini AI Pro",
    "category": "ai",
    "color": "#4285F4",
    "mono": "G",
    "tag": "57% OFF",
    "blurb": "18 Months Access \u00b7 5 TB Cloud \u00b7 AI Advanced",
    "discount": "57% OFF",
    "originalPrice": 3500,
    "features": [
      "18 Months Long Access",
      "5 TB Cloud Storage",
      "Gemini AI Advanced"
    ],
    "popular": true,
    "featured": false,
    "plans": [
      {
        "label": "18 Months \u00b7 Private Account",
        "price": 1500,
        "originalPrice": 3500
      }
    ],
    "officialPrice": "USD $19.99/mo (~NPR 2,700/mo, NPR 32,400/yr)",
    "officialSource": "gemini.google.com/advanced",
    "description": "Google Gemini Advanced grants direct access to Google's most capable AI models (Gemini 1.5 Pro) with a massive 1-2 million token context window. Analyze massive documents, write complex software, and integrate seamlessly into Google Docs and Drive.",
    "specs": {
      "Model": "Gemini 1.5 Pro / Ultra Architecture",
      "Context Window": "1 Million+ Tokens (Upload 1,500-page PDFs)",
      "Integration": "Native Google Docs, Gmail & Drive AI",
      "Warranty": "Full Active Warranty Protection"
    }
  },
  {
    "id": "claude-ai-pro",
    "name": "Claude AI Pro",
    "category": "ai",
    "color": "#D97706",
    "mono": "C",
    "tag": "27% OFF",
    "blurb": "Fully Private \u00b7 Advanced AI Writing & Coding",
    "discount": "27% OFF",
    "originalPrice": 5500,
    "features": [
      "Fully Private & Personal",
      "Advanced AI Assistance",
      "Writing & Research Support"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Personal Account",
        "price": 4000,
        "originalPrice": 5500
      }
    ],
    "officialPrice": "USD $20.00/mo (~NPR 2,700/mo + international card fees)",
    "officialSource": "claude.ai",
    "description": "Claude Pro by Anthropic unlocks high-tier access to Claude 3.5 Sonnet, the highest rated coding and reasoning AI in the world. Includes 5x more usage, priority bandwidth during peak hours, and early access to new multimodal features.",
    "specs": {
      "Model": "Claude 3.5 Sonnet & Claude 3 Opus",
      "Artifacts": "Live Interactive Code & Diagram Preview",
      "Context": "200,000 Token Large Context Window",
      "Access": "Personal Private Account"
    }
  },
  {
    "id": "chatgpt-plus",
    "name": "ChatGPT Plus & Go",
    "category": "ai",
    "color": "#10A37F",
    "mono": "GP",
    "tag": "32% OFF",
    "blurb": "GPT-4o \u00b7 Voice \u00b7 DALL-E \u00b7 Advanced Analysis",
    "discount": "32% OFF",
    "originalPrice": 2200,
    "features": [
      "Fully Personal Account",
      "Enhanced AI Access",
      "Faster Responses"
    ],
    "popular": true,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 ChatGPT Go",
        "price": 1500,
        "originalPrice": 2200
      }
    ],
    "officialPrice": "USD $20.00/mo (~NPR 2,700/mo)",
    "officialSource": "chat.openai.com",
    "description": "ChatGPT Plus unlocks OpenAI's flagship GPT-4o and OpenAI o1 reasoning models with DALL-E 3 image generation, voice mode, web browsing, data analysis, file uploads, and custom GPT builders with zero wait time.",
    "specs": {
      "Models": "GPT-4o, OpenAI o1, Canvas, DALL-E 3",
      "Features": "Web Browsing, Advanced Data Analysis, Voice",
      "Limits": "High-capacity priority access",
      "Warranty": "Full Month Replacement Warranty"
    }
  },
  {
    "id": "capcut-pro",
    "name": "CapCut Pro",
    "category": "software",
    "color": "#E5E7EB",
    "mono": "CC",
    "tag": "39% OFF",
    "blurb": "AI Video Editing \u00b7 Premium Templates & Effects",
    "discount": "39% OFF",
    "originalPrice": 1400,
    "features": [
      "Fully Private & Personal",
      "AI-Powered Video Editing",
      "Premium Templates & Effects"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Personal Pro",
        "price": 850,
        "originalPrice": 1400
      }
    ],
    "officialPrice": "USD $9.99/mo (~NPR 1,350/mo, NPR 12,000/yr)",
    "officialSource": "capcut.com",
    "description": "CapCut Pro is the premier video editing platform for TikTok creators, YouTubers, and digital marketers. Unlock pro transitions, AI background removal, auto-captions with custom font styling, voice enhancement, and 4K 60fps export.",
    "specs": {
      "Video Export": "Up to 4K 60fps Ultra HD",
      "AI Features": "Auto-Captions, Body Effects, AI Face Retouch",
      "Transitions": "1,000+ Pro Transitions & Sound Effects",
      "Platforms": "PC, Mac, iPhone, iPad, Android"
    }
  },
  {
    "id": "sony-liv-premium",
    "name": "Sony LIV Premium",
    "category": "streaming",
    "color": "#F5B700",
    "mono": "SL",
    "tag": "32% OFF",
    "blurb": "Movies, Web Series, Sports & Live TV",
    "discount": "32% OFF",
    "originalPrice": 1900,
    "features": [
      "Fully Private & Personal",
      "Live Sports & Cricket",
      "Movies & Web Series"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Private & Personal",
        "price": 1300,
        "originalPrice": 1900
      }
    ],
    "officialPrice": "INR \u20b9999/yr (~NPR 1,600) + currency exchange markup",
    "officialSource": "sonyliv.com",
    "description": "Sony LIV Premium streams international cricket tournaments, UEFA Champions League, WWE live events, Sony SAB hit comedies, and award-winning originals like Scam 1992 and Rocket Boys in Full HD.",
    "specs": {
      "Live Sports": "UEFA, Cricket, Australian Open, WWE",
      "Quality": "Full HD 1080p with Dolby Audio",
      "Screens": "Personal Profile / Screen",
      "Warranty": "100% Active Duration Support"
    }
  },
  {
    "id": "ullu-premium",
    "name": "ULLU Premium",
    "category": "streaming",
    "color": "#D97706",
    "mono": "UL",
    "tag": "36% OFF",
    "blurb": "Fully Private & Personal Streaming Access",
    "discount": "36% OFF",
    "originalPrice": 1100,
    "features": [
      "Fully Private & Personal",
      "Watch on Personal Device",
      "Access to All Content"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Private & Personal",
        "price": 700,
        "originalPrice": 1100
      }
    ],
    "officialPrice": "INR \u20b9799/yr (~NPR 1,300)",
    "officialSource": "ullu.app",
    "description": "ULLU Premium provides unlimited access to romantic and dramatic web series, Hindi movies, and regional content with fast streaming and private account options.",
    "specs": {
      "Quality": "Full HD 1080p Streaming",
      "Access": "Private & Confidential Account",
      "Devices": "Android, iOS, Smart TV, Web",
      "Warranty": "Full Month Replacement"
    }
  },
  {
    "id": "linkedin-premium",
    "name": "LinkedIn Premium",
    "category": "productivity",
    "color": "#0A66C2",
    "mono": "in",
    "tag": "57% OFF",
    "blurb": "Career & Business \u00b7 3 Months Access",
    "discount": "57% OFF",
    "originalPrice": 3500,
    "features": [
      "3 Months Premium Access",
      "InMail Messaging Credits",
      "Who Viewed Your Profile"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "3 Months \u00b7 Premium Career / Business",
        "price": 1500,
        "originalPrice": 3500
      }
    ],
    "officialPrice": "USD $29.99 - $59.99/mo (~NPR 4,000 - NPR 8,100/mo)",
    "officialSource": "linkedin.com/premium",
    "description": "LinkedIn Premium Career & Business gives job seekers and professionals competitive insights, InMail direct messaging to hiring managers, full visibility into who viewed your profile, and complete access to 20,000+ LinkedIn Learning courses.",
    "specs": {
      "InMail": "Direct messaging to recruiters & leaders",
      "Who Viewed You": "Full 365-day profile viewer analytics",
      "Learning": "Free access to all LinkedIn Learning certificates",
      "Warranty": "Guaranteed active plan"
    }
  },
  {
    "id": "adobe-express",
    "name": "Adobe Express Premium",
    "category": "software",
    "color": "#FF3062",
    "mono": "Ae",
    "tag": "55% OFF",
    "blurb": "Design & Content Creation \u00b7 12 Months Access",
    "discount": "55% OFF",
    "originalPrice": 5500,
    "features": [
      "12 Months Full Premium Access",
      "Generative AI Firefly Credits",
      "Premium Templates & Fonts"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "12 Months \u00b7 Premium Annual",
        "price": 2500,
        "originalPrice": 5500
      }
    ],
    "officialPrice": "USD $9.99/mo (~NPR 1,350/mo, NPR 16,000/yr)",
    "officialSource": "adobe.com/express",
    "description": "Adobe Express Premium combines the best of Photoshop, Illustrator, and Premiere into an intuitive drag-and-drop design app. Access thousands of premium templates, Adobe Fonts, and Adobe Firefly generative AI tools.",
    "specs": {
      "AI Credits": "Monthly Adobe Firefly Generative Credits",
      "Brand Kits": "Custom logos, color themes & fonts",
      "Storage": "100 GB Adobe Cloud Storage",
      "Warranty": "12 Months Verified Access"
    }
  },
  {
    "id": "surfshark-vpn",
    "name": "Surfshark VPN",
    "category": "software",
    "color": "#17B794",
    "mono": "SS",
    "tag": "50% OFF",
    "blurb": "Ultra-Fast Secure VPN \u00b7 2 Months Access",
    "discount": "50% OFF",
    "originalPrice": 1599,
    "features": [
      "2 Months Full Access",
      "Unlimited Devices",
      "CleanWeb Ad & Malware Blocker"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "2 Months \u00b7 Secure VPN",
        "price": 799,
        "originalPrice": 1599
      }
    ],
    "officialPrice": "USD $15.45/mo or $47.76 for 2 yrs (~NPR 6,450)",
    "officialSource": "surfshark.com",
    "description": "Surfshark VPN allows unlimited simultaneous devices on a single subscription. Protect your entire home and office with CleanWeb ad blocking, multi-hop server chaining, IP masking, and streaming unblocking across 100 countries.",
    "specs": {
      "Devices": "Unlimited Simultaneous Devices",
      "Servers": "3,200+ RAM-only Servers in 100 Countries",
      "Ad Blocker": "Built-in CleanWeb malware & ad shield",
      "Warranty": "Full Duration Guarantee"
    }
  },
  {
    "id": "windows-11-pro",
    "name": "Windows 11 Professional",
    "category": "software",
    "color": "#0078D4",
    "mono": "W",
    "tag": "56% OFF",
    "blurb": "100% Genuine Retail Key \u00b7 Lifetime Validity",
    "discount": "56% OFF",
    "originalPrice": 4500,
    "features": [
      "Lifetime Activation (1 PC)",
      "100% Genuine Retail Key",
      "BitLocker & Advanced Security"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "Lifetime \u00b7 Lifetime License Key",
        "price": 2000,
        "originalPrice": 4500
      }
    ],
    "officialPrice": "USD $199.99 (~NPR 27,000 retail)",
    "officialSource": "microsoft.com/windows-11-pro",
    "description": "Genuine Microsoft Windows 11 Professional lifetime digital retail key. Unlock BitLocker device encryption, Windows Sandbox, Remote Desktop (RDP), Hyper-V virtualization, and official Windows security updates forever.",
    "specs": {
      "License": "100% Genuine Retail Digital Key",
      "Validity": "Lifetime Permanent Activation on 1 PC",
      "Reinstallation": "Re-usable on the same motherboard",
      "Language": "Multilingual Global Support"
    }
  },
  {
    "id": "perplexity-pro",
    "name": "Perplexity AI Pro",
    "category": "ai",
    "color": "#22B8CD",
    "mono": "PX",
    "tag": "29% OFF",
    "blurb": "Next-Gen AI Search & Research \u00b7 Monthly Plan",
    "discount": "29% OFF",
    "originalPrice": 3500,
    "features": [
      "1 Month Pro Subscription",
      "Unlimited Pro Search",
      "Claude 3.5 Sonnet & GPT-4o"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Pro Monthly",
        "price": 2500,
        "originalPrice": 3500
      }
    ],
    "officialPrice": "USD $20.00/mo (~NPR 2,700/mo, NPR 27,000/yr)",
    "officialSource": "perplexity.ai",
    "description": "Perplexity AI Pro is the conversational search engine that replaces Google. Perform unlimited Pro searches with cited web sources, switch between Claude 3.5 Sonnet, GPT-4o, and Sonar models, and upload unlimited documents for analysis.",
    "specs": {
      "Models": "Claude 3.5 Sonnet, GPT-4o, Grok & Sonar",
      "Search": "300+ Pro Guided Searches daily",
      "File Analysis": "Upload PDFs, CSVs, Images & Code",
      "Warranty": "Full Month Replacement"
    }
  },
  {
    "id": "lovable-lite",
    "name": "Lovable Lite",
    "category": "ai",
    "color": "#FF3366",
    "mono": "LL",
    "tag": "50% OFF",
    "blurb": "AI Full-Stack App Builder \u00b7 12 Months",
    "discount": "50% OFF",
    "originalPrice": 6000,
    "features": [
      "Full Lite Access (8\u20139 Months)",
      "5 Daily Credits",
      "One-Time 300 Bonus Credits"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "12 Months \u00b7 Lite 12M Package",
        "price": 3000,
        "originalPrice": 6000
      }
    ],
    "officialPrice": "USD $20.00/mo (~NPR 2,700/mo)",
    "officialSource": "lovable.dev",
    "description": "Lovable is the cutting-edge autonomous AI full-stack developer that turns natural language ideas into production-ready web applications with Supabase databases, authentication, and GitHub syncing.",
    "specs": {
      "Capabilities": "Full-Stack React + Vite + Supabase",
      "Sync": "GitHub 2-way sync & Custom Domain",
      "Speed": "Build complete apps in under 10 minutes",
      "Warranty": "Full Plan Duration Warranty"
    }
  },
  {
    "id": "faphouse",
    "name": "Faphouse Premium",
    "category": "streaming",
    "color": "#E11D48",
    "mono": "FH",
    "tag": "47% OFF",
    "blurb": "Full HD & 4K Streaming \u00b7 1 Month Access",
    "discount": "47% OFF",
    "originalPrice": 1500,
    "features": [
      "1 Month Private Access",
      "Full HD & 4K Streaming",
      "Unlimited Downloads"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Private 1 Month",
        "price": 800,
        "originalPrice": 1500
      }
    ],
    "officialPrice": "USD $14.99/mo (~NPR 2,000/mo)",
    "officialSource": "faphouse.com",
    "description": "Faphouse Premium offers ad-free adult entertainment in Full HD and 4K quality with high-speed private streaming and fast delivery.",
    "specs": {
      "Quality": "Full HD & 4K Ultra HD Streaming",
      "Privacy": "Discreet & Private Account Access",
      "Delivery": "Within 10\u201330 Minutes",
      "Warranty": "100% Plan Guarantee"
    }
  },
  {
    "id": "coursera-plus",
    "name": "Coursera Plus",
    "category": "productivity",
    "color": "#0056D2",
    "mono": "Co",
    "tag": "54% OFF",
    "blurb": "7,000+ Courses & Certificates \u00b7 12 Months Access",
    "discount": "54% OFF",
    "originalPrice": 6500,
    "features": [
      "12 Months Full Access",
      "7,000+ Courses & Projects",
      "Professional Certificates"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "12 Months \u00b7 Coursera Plus Annual",
        "price": 3000,
        "originalPrice": 6500
      }
    ],
    "officialPrice": "USD $59.00/mo or $399/yr (~NPR 54,000/yr)",
    "officialSource": "coursera.org/courseraplus",
    "description": "Coursera Plus gives you unlimited access to 7,000+ courses, guided projects, and Professional Certificates from Google, IBM, Stanford, Yale, and University of London. Earn resume-defining credentials with zero per-course fees.",
    "specs": {
      "Courses": "7,000+ World-Class University Courses",
      "Certificates": "Unlimited Shareable Industry Certificates",
      "Partners": "Google, IBM, Meta, Stanford, Yale",
      "Warranty": "1 Year Complete Warranty"
    }
  },
  {
    "id": "super-duolingo",
    "name": "Super Duolingo",
    "category": "productivity",
    "color": "#58CC02",
    "mono": "D",
    "tag": "49% OFF",
    "blurb": "Ad-Free Language Learning \u00b7 12 Months Access",
    "discount": "49% OFF",
    "originalPrice": 5900,
    "features": [
      "12 Months Super Access",
      "Unlimited Hearts",
      "No Ads Ever"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "12 Months \u00b7 Super Duolingo 12M",
        "price": 3000,
        "originalPrice": 5900
      }
    ],
    "officialPrice": "USD $83.88/yr (~NPR 11,300/yr)",
    "officialSource": "duolingo.com/super",
    "description": "Super Duolingo removes all interruptions from language learning with zero advertisements, unlimited hearts so you never pause for mistakes, personalized practice sessions, and offline course downloads.",
    "specs": {
      "Features": "Unlimited Hearts, Zero Ads, Mistake Review",
      "Languages": "Spanish, French, German, Japanese, 40+ more",
      "Offline Mode": "Download lessons directly on phone",
      "Warranty": "1 Year Active Subscription"
    }
  },
  {
    "id": "super-grok",
    "name": "Super Grok (xAI)",
    "category": "ai",
    "color": "#E5E5E5",
    "mono": "X",
    "tag": "40% OFF",
    "blurb": "Frontier Real-Time AI \u00b7 3 Months Priority Access",
    "discount": "40% OFF",
    "originalPrice": 15000,
    "features": [
      "3 Months Super Grok Access",
      "Real-Time X Integration",
      "Flux Image Generation"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "3 Months \u00b7 Super Grok 3M",
        "price": 9000,
        "originalPrice": 15000
      }
    ],
    "officialPrice": "USD $16.00/mo (~NPR 2,150/mo, NPR 25,000/yr)",
    "officialSource": "x.ai",
    "description": "Super Grok by xAI gives power users access to Grok 2 and Grok Vision, real-time knowledge synthesis from X (Twitter), uncensored generative reasoning, and state-of-the-art Flux image generation.",
    "specs": {
      "Engine": "Grok 2 + Real-Time Live X Data Feed",
      "Image Generation": "Flux.1 AI Photo Engine included",
      "Access": "X Premium+ / Grok Pro Tier",
      "Warranty": "Full Duration Warranty"
    }
  },
  {
    "id": "kuku-fm",
    "name": "Kuku FM & TV",
    "category": "streaming",
    "color": "#E23744",
    "mono": "KU",
    "tag": "44% OFF",
    "blurb": "Audiobooks, Stories & Kuku TV \u00b7 3 Months Access",
    "discount": "44% OFF",
    "originalPrice": 3200,
    "features": [
      "3 Months VIP Access",
      "Audiobooks & Kuku TV",
      "Offline Downloads"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "3 Months \u00b7 VIP 3 Months",
        "price": 1800,
        "originalPrice": 3200
      }
    ],
    "officialPrice": "INR \u20b9899/yr (~NPR 1,450)",
    "officialSource": "kukufm.com",
    "description": "Kuku FM & TV is India and South Asia's leading audio storytelling platform, featuring 10,000+ audiobooks, book summaries, motivation, spiritual stories, and regional language shows with offline listening.",
    "specs": {
      "Library": "10,000+ Audiobooks & Shows",
      "Languages": "Hindi, English, Marathi, Gujarati & more",
      "Offline Mode": "Download & listen anywhere",
      "Warranty": "3 Months Active Access"
    }
  },
  {
    "id": "google-veo-3-ultra",
    "name": "Google VEO 3 x20 Ultra Unlimited",
    "category": "ai",
    "color": "#4285F4",
    "mono": "VO",
    "tag": "47% OFF",
    "blurb": "Master Plan 30 Days \u00b7 Full Warranty & Unlimited AI Video",
    "discount": "47% OFF",
    "originalPrice": 7500,
    "features": [
      "30 Days Master Plan Access",
      "Veo 3.1 Lite Unlimited Videos",
      "Synchronized Audio & x20 Ultra"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "30 Days \u00b7 Master Plan 30D",
        "price": 4000,
        "originalPrice": 7500
      }
    ],
    "officialPrice": "Google DeepMind Enterprise Pilot Tier ($250+/mo)",
    "officialSource": "deepmind.google/technologies/veo",
    "description": "Google VEO 3 x20 Ultra gives creators high-tier access to Google DeepMind's flagship generative video model. Generate cinematic 1080p and 4K video clips from text prompts with visual consistency and film-grade physics.",
    "specs": {
      "Video Model": "Google VEO High Definition Engine",
      "Resolution": "1080p Full HD Video Generation",
      "Physics": "Realistic Fluid & Lighting Simulation",
      "Warranty": "30 Days Access Warranty"
    }
  },
  {
    "id": "static-website",
    "name": "Business Landing Page / Website",
    "category": "software",
    "color": "#3B82F6",
    "mono": "WEB",
    "tag": "38% OFF",
    "blurb": "Static Website for Business Landing Page \u00b7 Fast & SEO Ready",
    "discount": "38% OFF",
    "originalPrice": 8000,
    "features": [
      "Custom UI/UX Landing Page Design",
      "100% Mobile & Desktop Responsive",
      "Direct WhatsApp Chat & Order Integration",
      "Google Maps & Contact Form",
      "SEO & Social Meta Previews"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "Starter Business Landing Page",
        "price": 20000,
        "originalPrice": 30000
      },
      {
        "label": "Complete Business Website",
        "price": 35000,
        "originalPrice": 50000
      }
    ],
    "officialPrice": "NPR 12,000 - 25,000 agency standard in Nepal",
    "officialSource": "digipatro.com/websites",
    "description": "Custom coded, mobile-responsive business landing page built by DigiPatro Studio. Engineered for Nepali enterprises with WhatsApp ordering integration, Google Maps location, SEO optimization, and lightning-fast loading speed.",
    "specs": {
      "Turnaround": "Fast 3\u20135 Working Days",
      "Mobile Optimized": "100% Responsive on all screen sizes",
      "Integrations": "WhatsApp Direct Ordering & Contact Form",
      "SEO": "Meta Tags & Google Search Ready",
      "Starting Rate": "NPR 20,000"
    }
  },
  {
    "id": "saas-business",
    "name": "SaaS Complete for Business",
    "category": "software",
    "color": "#8B5CF6",
    "mono": "SaaS",
    "tag": "38% OFF",
    "blurb": "Full-Stack Custom Web Application & Business SaaS Solution",
    "discount": "38% OFF",
    "originalPrice": 24000,
    "features": [
      "Full-Stack Custom Web App (React / Next.js / Node.js)",
      "PostgreSQL / Supabase Database & User Auth",
      "Automated eSewa, Khalti & Fonepay Payment APIs",
      "Admin Analytics Dashboard & Order System",
      "60 Days Free Technical Support"
    ],
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "Complete Business Website (Multi-page)",
        "price": 35000,
        "originalPrice": 50000
      },
      {
        "label": "Custom SaaS & Enterprise App",
        "price": 90000,
        "originalPrice": 130000
      }
    ],
    "officialPrice": "NPR 45,000 - 100,000 standard software agency rate",
    "officialSource": "digipatro.com/websites",
    "description": "Complete full-stack web application designed for growing businesses. Includes database integration (Supabase / PostgreSQL), user authentication, admin dashboard, WhatsApp notification webhooks, and local payment gateways.",
    "specs": {
      "Architecture": "Modern React / Next.js / Node.js Stack",
      "Database": "PostgreSQL with Authentication & RBAC",
      "Payments": "eSewa & Khalti QR API Integration",
      "Support": "Full Source Code & 30-Day Maintenance",
      "Starting Rate": "NPR 35,000 \u2013 NPR 90,000"
    }
  },
  {
    "id": "google-one",
    "name": "Google One",
    "category": "cloud",
    "color": "#4285F4",
    "mono": "G1",
    "tag": "VERIFIED",
    "blurb": "Expanded cloud storage for Google Drive, Gmail & Photos with magic editing features.",
    "discount": "63% OFF",
    "originalPrice": 2700,
    "officialPrice": "USD $19.99/yr (~NPR 2,700)",
    "officialSource": "one.google.com",
    "description": "Google One is an essential tool in Cloud & Communication. Expanded cloud storage for Google Drive, Gmail & Photos with magic editing features. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "100 GB / 200 GB Cloud Storage",
      "Magic Editor & Google Photos Features",
      "Family Sharing (Up to 5 members)",
      "Google Experts Support",
      "VPN & Dark Web Monitoring"
    ],
    "specs": {
      "License Type": "Global \u00b7 Personal",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "one.google.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "100 GB \u00b7 1 Year Personal",
        "price": 1000,
        "originalPrice": 2700
      },
      {
        "label": "200 GB \u00b7 1 Year Personal",
        "price": 1800,
        "originalPrice": 4200
      }
    ]
  },
  {
    "id": "microsoft-onedrive",
    "name": "Microsoft OneDrive",
    "category": "cloud",
    "color": "#0078D4",
    "mono": "OD",
    "tag": "VERIFIED",
    "blurb": "Dedicated 1 TB cloud storage with seamless Windows PC and Office syncing.",
    "discount": "63% OFF",
    "originalPrice": 9400,
    "officialPrice": "USD $69.99/yr (~NPR 9,400)",
    "officialSource": "microsoft.com/onedrive",
    "description": "Microsoft OneDrive is an essential tool in Cloud & Communication. Dedicated 1 TB cloud storage with seamless Windows PC and Office syncing. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "1 TB Secure Cloud Storage",
      "Ransomware Detection & Recovery",
      "Personal Vault Protection",
      "Anywhere Access & Offline Folders",
      "Sync across Windows, Mac, iOS, Android"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "microsoft.com/onedrive",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 TB \u00b7 1 Year Account",
        "price": 3500,
        "originalPrice": 9400
      }
    ]
  },
  {
    "id": "zoom-pro",
    "name": "Zoom Pro",
    "category": "cloud",
    "color": "#2D8CFF",
    "mono": "ZM",
    "tag": "VERIFIED",
    "blurb": "Premium video conferencing removing the 40-minute limit for up to 100+ attendees.",
    "discount": "33% OFF",
    "originalPrice": 4500,
    "officialPrice": "USD $13.32/mo (~NPR 1,800/mo, NPR 21,500/yr)",
    "officialSource": "zoom.us",
    "description": "Zoom Pro is an essential tool in Cloud & Communication. Premium video conferencing removing the 40-minute limit for up to 100+ attendees. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Host up to 100 Participants",
      "Unlimited Group Meetings (up to 30h)",
      "5 GB Cloud Storage for Recordings",
      "Automated Meeting Captions & Summary",
      "Whiteboard & Advanced Reporting"
    ],
    "specs": {
      "License Type": "Global \u00b7 Personal",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "zoom.us",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Pro Personal",
        "price": 3000,
        "originalPrice": 4500
      },
      {
        "label": "1 Year \u00b7 Pro Personal",
        "price": 14000,
        "originalPrice": 22000
      }
    ]
  },
  {
    "id": "titan-mail",
    "name": "Titan Mail",
    "category": "cloud",
    "color": "#185ADB",
    "mono": "TM",
    "tag": "VERIFIED",
    "blurb": "Professional custom-domain business email suite with email tracking and calendar.",
    "discount": "46% OFF",
    "originalPrice": 6500,
    "officialPrice": "USD $24.00/yr (~NPR 3,250 - 6,500)",
    "officialSource": "titan.email",
    "description": "Titan Mail is an essential tool in Cloud & Communication. Professional custom-domain business email suite with email tracking and calendar. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Custom Business Domain Email",
      "Read Receipts & Open Tracking",
      "Send Later & Email Templates",
      "Integrated Calendar & Contacts",
      "Advanced Anti-Spam & Security"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "titan.email",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Professional Business Mail",
        "price": 3500,
        "originalPrice": 6500
      }
    ]
  },
  {
    "id": "google-meet-enterprise",
    "name": "Google Meet Enterprise",
    "category": "cloud",
    "color": "#00897B",
    "mono": "GM",
    "tag": "VERIFIED",
    "blurb": "Enterprise-grade HD video meetings with noise cancellation, recording & breakout rooms.",
    "discount": "72% OFF",
    "originalPrice": 29000,
    "officialPrice": "USD $18.00/user/mo (~NPR 29,000/yr)",
    "officialSource": "workspace.google.com/meet",
    "description": "Google Meet Enterprise is an essential tool in Cloud & Communication. Enterprise-grade HD video meetings with noise cancellation, recording & breakout rooms. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Up to 500 Participants per Meeting",
      "Cloud Recording direct to Google Drive",
      "Noise Cancellation & In-meeting Polling",
      "Breakout Rooms & Live Streaming",
      "Domain-wide Admin Security Controls"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "workspace.google.com/meet",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Enterprise Account",
        "price": 8000,
        "originalPrice": 29000
      }
    ]
  },
  {
    "id": "grammarly-premium",
    "name": "Grammarly Premium",
    "category": "academic",
    "color": "#15C39A",
    "mono": "GR",
    "tag": "VERIFIED",
    "blurb": "Real-time grammar, tone suggestions, clarity rewrites and plagiarism detector.",
    "discount": "72% OFF",
    "originalPrice": 1800,
    "officialPrice": "USD $144.00/yr (~NPR 19,500)",
    "officialSource": "grammarly.com",
    "description": "Grammarly Premium is an essential tool in Academic & Research. Real-time grammar, tone suggestions, clarity rewrites and plagiarism detector. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Full Sentence Clarity Rewrites",
      "Plagiarism Checker against 16B pages",
      "Tone & Formality Adjustments",
      "Vocabulary Enhancement",
      "GrammarlyGO AI Assistant"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "grammarly.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Premium Account",
        "price": 500,
        "originalPrice": 1800
      },
      {
        "label": "3 Months \u00b7 Premium Account",
        "price": 1200,
        "originalPrice": 4500
      },
      {
        "label": "1 Year \u00b7 Premium Account",
        "price": 2800,
        "originalPrice": 19500
      }
    ]
  },
  {
    "id": "quillbot-premium",
    "name": "Quillbot Premium",
    "category": "academic",
    "color": "#4FA65B",
    "mono": "QB",
    "tag": "VERIFIED",
    "blurb": "Leading AI paraphrasing tool with unlimited modes, summarizer, and citation builder.",
    "discount": "58% OFF",
    "originalPrice": 1200,
    "officialPrice": "USD $49.95/yr (~NPR 6,700)",
    "officialSource": "quillbot.com",
    "description": "Quillbot Premium is an essential tool in Academic & Research. Leading AI paraphrasing tool with unlimited modes, summarizer, and citation builder. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Unlimited Words in Paraphraser",
      "Custom & All 9 Paraphrasing Modes",
      "Freeze Words & Synonym Slider",
      "AI Detector & Plagiarism Scanner",
      "Citation Generator (APA, MLA, Chicago)"
    ],
    "specs": {
      "License Type": "Global \u00b7 Shared",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "quillbot.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Shared Account",
        "price": 500,
        "originalPrice": 1200
      },
      {
        "label": "6 Months \u00b7 Shared Account",
        "price": 1500,
        "originalPrice": 3500
      },
      {
        "label": "1 Year \u00b7 Shared Account",
        "price": 2500,
        "originalPrice": 6700
      }
    ]
  },
  {
    "id": "stealth-writer",
    "name": "Stealth Writer",
    "category": "academic",
    "color": "#3B82F6",
    "mono": "SW",
    "tag": "VERIFIED",
    "blurb": "Advanced AI text humanizer to rewrite and bypass Turnitin, GPTZero & Originality.",
    "discount": "29% OFF",
    "originalPrice": 3500,
    "officialPrice": "USD $20.00/mo (~NPR 2,700/mo)",
    "officialSource": "stealthwriter.ai",
    "description": "Stealth Writer is an essential tool in Academic & Research. Advanced AI text humanizer to rewrite and bypass Turnitin, GPTZero & Originality. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Ninja & Ghost Humanizer Engine",
      "Bypass Turnitin, CopyLeaks & GPTZero",
      "Maintains Original Meaning & Flow",
      "Built-in AI Detector",
      "SEO Optimized Natural Phrasing"
    ],
    "specs": {
      "License Type": "Global \u00b7 Shared",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "stealthwriter.ai",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Shared Access",
        "price": 2500,
        "originalPrice": 3500
      }
    ]
  },
  {
    "id": "paperpal-premium",
    "name": "Paperpal Premium",
    "category": "academic",
    "color": "#6366F1",
    "mono": "PP",
    "tag": "VERIFIED",
    "blurb": "Academic AI writing assistant tailored for scientific papers, journal submissions & citations.",
    "discount": "33% OFF",
    "originalPrice": 3000,
    "officialPrice": "USD $119.00/yr (~NPR 16,000)",
    "officialSource": "paperpal.com",
    "description": "Paperpal Premium is an essential tool in Academic & Research. Academic AI writing assistant tailored for scientific papers, journal submissions & citations. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Journal-ready Language Editing",
      "Academic Vocabulary Suggestions",
      "Direct Manuscript Submission Check",
      "Citation & Reference Verification",
      "MS Word & Web Extension Integration"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "paperpal.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Premium Account",
        "price": 2000,
        "originalPrice": 3000
      },
      {
        "label": "1 Year \u00b7 Premium Account",
        "price": 6500,
        "originalPrice": 16000
      }
    ]
  },
  {
    "id": "jenni-ai",
    "name": "Jenni AI",
    "category": "academic",
    "color": "#8B5CF6",
    "mono": "JA",
    "tag": "VERIFIED",
    "blurb": "AI research writing assistant with literature search, automated in-text citations & outlines.",
    "discount": "33% OFF",
    "originalPrice": 4500,
    "officialPrice": "USD $144.00/yr (~NPR 19,500)",
    "officialSource": "jenni.ai",
    "description": "Jenni AI is an essential tool in Academic & Research. AI research writing assistant with literature search, automated in-text citations & outlines. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Automated In-text Citations (APA, Harvard, etc.)",
      "AI Autocomplete tailored to research",
      "Library & PDF Chat for literature review",
      "Plagiarism Checker included",
      "Export to LaTeX & MS Word"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "jenni.ai",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Unlimited Plan",
        "price": 3000,
        "originalPrice": 4500
      }
    ]
  },
  {
    "id": "hix-ai-bypass",
    "name": "HIX AI Bypass",
    "category": "academic",
    "color": "#EC4899",
    "mono": "HX",
    "tag": "VERIFIED",
    "blurb": "Undetectable AI bypass tool converting generated drafts into human-like academic text.",
    "discount": "38% OFF",
    "originalPrice": 3200,
    "officialPrice": "USD $19.99/mo (~NPR 2,700)",
    "officialSource": "hix.ai",
    "description": "HIX AI Bypass is an essential tool in Academic & Research. Undetectable AI bypass tool converting generated drafts into human-like academic text. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "100% Undetectable AI Rewriter",
      "Bypasses Winston AI, ZeroGPT, Turnitin",
      "Flawless Grammar & Vocabulary",
      "Multiple Humanizer Modes",
      "Preserves Core Context & Facts"
    ],
    "specs": {
      "License Type": "Global \u00b7 Shared",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "hix.ai",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Shared Account",
        "price": 2000,
        "originalPrice": 3200
      }
    ]
  },
  {
    "id": "ai-plagiarism-checker",
    "name": "AI & Plagiarism Checker",
    "category": "academic",
    "color": "#10B981",
    "mono": "PC",
    "tag": "VERIFIED",
    "blurb": "Deep scanner checking similarity across academic databases and identifying AI text patterns.",
    "discount": "60% OFF",
    "originalPrice": 3000,
    "officialPrice": "USD $30.00/pack (~NPR 4,000)",
    "officialSource": "turnitin.com / copyleaks.com",
    "description": "AI & Plagiarism Checker is an essential tool in Academic & Research. Deep scanner checking similarity across academic databases and identifying AI text patterns. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Billion-page Web & Scholarly Index",
      "Detailed Similarity Percentage Report",
      "Sentence-by-sentence Source Highlighting",
      "AI Writing Probability Score",
      "Safe Non-repository File Scanning"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "turnitin.com / copyleaks.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Account Access",
        "price": 1200,
        "originalPrice": 3000
      }
    ]
  },
  {
    "id": "scribd-premium",
    "name": "Scribd Premium",
    "category": "academic",
    "color": "#F59E0B",
    "mono": "SC",
    "tag": "VERIFIED",
    "blurb": "Digital reading library with millions of ebooks, audiobooks, academic papers & documents.",
    "discount": "38% OFF",
    "originalPrice": 1600,
    "officialPrice": "USD $11.99/mo (~NPR 1,600/mo, NPR 19,000/yr)",
    "officialSource": "scribd.com",
    "description": "Scribd Premium is an essential tool in Academic & Research. Digital reading library with millions of ebooks, audiobooks, academic papers & documents. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Millions of Ebooks & Best-sellers",
      "Audiobooks with offline listening",
      "Academic Papers & Research Documents",
      "Sheet Music & Magazine Archive",
      "Available on Web, iOS & Android"
    ],
    "specs": {
      "License Type": "Global \u00b7 Shared",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "scribd.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Shared Account",
        "price": 1000,
        "originalPrice": 1600
      },
      {
        "label": "6 Months \u00b7 Shared Account",
        "price": 2800,
        "originalPrice": 9600
      }
    ]
  },
  {
    "id": "bitdefender-total-security",
    "name": "Bitdefender Total Security",
    "category": "security",
    "color": "#E11D48",
    "mono": "BD",
    "tag": "VERIFIED",
    "blurb": "Multi-layered real-time ransomware and malware protection with minimal PC impact.",
    "discount": "73% OFF",
    "originalPrice": 6700,
    "officialPrice": "USD $49.99/yr (~NPR 6,700)",
    "officialSource": "bitdefender.com",
    "description": "Bitdefender Total Security is an essential tool in Antivirus & Security. Multi-layered real-time ransomware and malware protection with minimal PC impact. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Complete Real-Time Data Protection",
      "Multi-Layer Ransomware Defense",
      "Network Threat Prevention",
      "Microphone & Webcam Shield",
      "Built-in VPN & Parental Control"
    ],
    "specs": {
      "License Type": "Global \u00b7 Key",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "bitdefender.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 1 Device License Key",
        "price": 1800,
        "originalPrice": 6700
      },
      {
        "label": "1 Year \u00b7 3 Devices License Key",
        "price": 3200,
        "originalPrice": 11000
      }
    ]
  },
  {
    "id": "eset-internet-security",
    "name": "ESET Internet Security",
    "category": "security",
    "color": "#0D9488",
    "mono": "ES",
    "tag": "VERIFIED",
    "blurb": "Legendary ultra-fast proactive antivirus defense engineered for power users and gamers.",
    "discount": "55% OFF",
    "originalPrice": 6700,
    "officialPrice": "USD $49.99/yr (~NPR 6,700)",
    "officialSource": "eset.com",
    "description": "ESET Internet Security is an essential tool in Antivirus & Security. Legendary ultra-fast proactive antivirus defense engineered for power users and gamers. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Legendary NOD32 Antivirus Engine",
      "Gamer Mode with Zero Popups",
      "Banking & Payment Protection",
      "Network Inspector & Botnet Shield",
      "Ultra-low CPU & RAM Usage"
    ],
    "specs": {
      "License Type": "Global \u00b7 Key",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "eset.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Genuine Retail Key",
        "price": 3000,
        "originalPrice": 6700
      }
    ]
  },
  {
    "id": "norton-360-security",
    "name": "Norton 360 Security",
    "category": "security",
    "color": "#FBBF24",
    "mono": "NT",
    "tag": "VERIFIED",
    "blurb": "All-in-one cyber safety with smart firewall, cloud backup, and dark web monitoring.",
    "discount": "73% OFF",
    "originalPrice": 6700,
    "officialPrice": "USD $49.99/yr (~NPR 6,700)",
    "officialSource": "norton.com",
    "description": "Norton 360 Security is an essential tool in Antivirus & Security. All-in-one cyber safety with smart firewall, cloud backup, and dark web monitoring. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Real-time Antivirus & Spyware Protection",
      "Smart Firewall for PC/Mac",
      "Secure VPN included",
      "Password Manager included",
      "PC Cloud Backup (10 GB+)"
    ],
    "specs": {
      "License Type": "Global \u00b7 Key",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "norton.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Digital Key",
        "price": 1800,
        "originalPrice": 6700
      }
    ]
  },
  {
    "id": "kaspersky-internet-security",
    "name": "Kaspersky Internet Security",
    "category": "security",
    "color": "#059669",
    "mono": "KS",
    "tag": "VERIFIED",
    "blurb": "Award-winning protection against trojans, rootkits, cryptojackers and phishing links.",
    "discount": "53% OFF",
    "originalPrice": 3200,
    "officialPrice": "NPR 3,200/yr",
    "officialSource": "kaspersky.com",
    "description": "Kaspersky Internet Security is an essential tool in Antivirus & Security. Award-winning protection against trojans, rootkits, cryptojackers and phishing links. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Proactive Virus & Worms Removal",
      "Safe Money Secure Browser",
      "Anti-Phishing & Anti-Spam",
      "Private Browsing & Ad Blocker",
      "Two-way Firewall"
    ],
    "specs": {
      "License Type": "Nepal \u00b7 Key",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "kaspersky.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Nepal Genuine Key",
        "price": 1500,
        "originalPrice": 3200
      }
    ]
  },
  {
    "id": "avg-internet-security",
    "name": "AVG Internet Security",
    "category": "security",
    "color": "#EA580C",
    "mono": "AV",
    "tag": "VERIFIED",
    "blurb": "Advanced threat defense with webcam protection, ransomware shield, and payment guard.",
    "discount": "52% OFF",
    "originalPrice": 6300,
    "officialPrice": "USD $46.99/yr (~NPR 6,300)",
    "officialSource": "avg.com",
    "description": "AVG Internet Security is an essential tool in Antivirus & Security. Advanced threat defense with webcam protection, ransomware shield, and payment guard. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Advanced Antivirus & Spyware Engine",
      "Ransomware Protection Shield",
      "Webcam Hijack Protection",
      "Fake Website / Phishing Defense",
      "Enhanced Firewall"
    ],
    "specs": {
      "License Type": "Global \u00b7 Key",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "avg.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Genuine Key",
        "price": 3000,
        "originalPrice": 6300
      }
    ]
  },
  {
    "id": "mcafee-total-protection",
    "name": "McAfee Total Protection",
    "category": "security",
    "color": "#DC2626",
    "mono": "MC",
    "tag": "VERIFIED",
    "blurb": "Comprehensive security suite combining antivirus, identity monitoring, and privacy VPN.",
    "discount": "54% OFF",
    "originalPrice": 5400,
    "officialPrice": "USD $39.99/yr (~NPR 5,400)",
    "officialSource": "mcafee.com",
    "description": "McAfee Total Protection is an essential tool in Antivirus & Security. Comprehensive security suite combining antivirus, identity monitoring, and privacy VPN. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Award-Winning Antivirus Engine",
      "Unlimited Device Security",
      "Identity Theft Monitoring",
      "Secure VPN included",
      "File Shredder & Password Keeper"
    ],
    "specs": {
      "License Type": "Global \u00b7 Key",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "mcafee.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Total Protection Key",
        "price": 2500,
        "originalPrice": 5400
      }
    ]
  },
  {
    "id": "adobe-creative-cloud",
    "name": "Adobe Creative Cloud",
    "category": "creative",
    "color": "#FF0000",
    "mono": "CC",
    "tag": "VERIFIED",
    "blurb": "Full suite access to 20+ Adobe creative apps including Photoshop, Illustrator, Premiere Pro.",
    "discount": "73% OFF",
    "originalPrice": 8100,
    "officialPrice": "USD $59.99/mo (~NPR 8,100/mo, NPR 97,000/yr)",
    "officialSource": "adobe.com/creativecloud",
    "description": "Adobe Creative Cloud is an essential tool in Creative & Design. Full suite access to 20+ Adobe creative apps including Photoshop, Illustrator, Premiere Pro. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "20+ Desktop & Mobile Creative Apps",
      "Photoshop, Illustrator, Premiere & After Effects",
      "100 GB Cloud Storage included",
      "Adobe Fonts & Stock Integration",
      "Generative Firefly AI Credits"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "adobe.com/creativecloud",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 All Apps Account",
        "price": 2200,
        "originalPrice": 8100
      },
      {
        "label": "3 Months \u00b7 All Apps Account",
        "price": 5500,
        "originalPrice": 24000
      },
      {
        "label": "1 Year \u00b7 All Apps Account",
        "price": 16000,
        "originalPrice": 97000
      }
    ]
  },
  {
    "id": "envato-elements",
    "name": "Envato Elements",
    "category": "creative",
    "color": "#81B441",
    "mono": "EE",
    "tag": "VERIFIED",
    "blurb": "Unlimited downloads of stock video, music, website templates, graphic mockups & fonts.",
    "discount": "45% OFF",
    "originalPrice": 2200,
    "officialPrice": "USD $16.50/mo (~NPR 2,200/mo, NPR 26,000/yr)",
    "officialSource": "elements.envato.com",
    "description": "Envato Elements is an essential tool in Creative & Design. Unlimited downloads of stock video, music, website templates, graphic mockups & fonts. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Unlimited Downloads of Millions of Assets",
      "Stock Video, Music & Sound Effects",
      "WordPress Themes & Graphic Templates",
      "Commercial Lifetime License per download",
      "Fonts, 3D Assets & Presentation Slides"
    ],
    "specs": {
      "License Type": "Global \u00b7 Mixed",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "elements.envato.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Unlimited Download Access",
        "price": 1200,
        "originalPrice": 2200
      },
      {
        "label": "3 Months \u00b7 Unlimited Download Access",
        "price": 3200,
        "originalPrice": 6600
      }
    ]
  },
  {
    "id": "adobe-photography-plan",
    "name": "Adobe Photography Plan",
    "category": "creative",
    "color": "#31A8FF",
    "mono": "LR",
    "tag": "VERIFIED",
    "blurb": "Specialized photo editing package with Photoshop, Lightroom, Lightroom Classic & Cloud.",
    "discount": "63% OFF",
    "originalPrice": 16200,
    "officialPrice": "USD $119.88/yr (~NPR 16,200)",
    "officialSource": "adobe.com/photography",
    "description": "Adobe Photography Plan is an essential tool in Creative & Design. Specialized photo editing package with Photoshop, Lightroom, Lightroom Classic & Cloud. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Photoshop on Desktop & iPad",
      "Lightroom & Lightroom Classic",
      "20 GB Cloud Storage for Photos",
      "Adobe Portfolio Website",
      "Generative AI Firefly Support"
    ],
    "specs": {
      "License Type": "Global \u00b7 Personal",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "adobe.com/photography",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Photography Personal Plan",
        "price": 6000,
        "originalPrice": 16200
      }
    ]
  },
  {
    "id": "coreldraw-graphics-suite",
    "name": "CorelDRAW Graphics Suite",
    "category": "creative",
    "color": "#76BC21",
    "mono": "CD",
    "tag": "VERIFIED",
    "blurb": "Professional vector illustration, layout, and photo editing software for designers.",
    "discount": "93% OFF",
    "originalPrice": 33600,
    "officialPrice": "USD $249.00/yr (~NPR 33,600)",
    "officialSource": "coreldraw.com",
    "description": "CorelDRAW Graphics Suite is an essential tool in Creative & Design. Professional vector illustration, layout, and photo editing software for designers. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "CorelDRAW Vector Illustration",
      "Corel PHOTO-PAINT Image Editing",
      "Typography & Font Management",
      "Non-destructive Bitmap Effects",
      "Print & Signmaking Production Ready"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "coreldraw.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Full Graphics Suite",
        "price": 2500,
        "originalPrice": 33600
      }
    ]
  },
  {
    "id": "udemy-personal-plan",
    "name": "Udemy Personal Plan",
    "category": "learning",
    "color": "#A435F0",
    "mono": "UD",
    "tag": "VERIFIED",
    "blurb": "Unlimited access to 11,000+ top-rated video courses on coding, business, IT and marketing.",
    "discount": "45% OFF",
    "originalPrice": 4000,
    "officialPrice": "USD $30.00/mo (~NPR 4,000/mo)",
    "officialSource": "udemy.com",
    "description": "Udemy Personal Plan is an essential tool in Learning & Education. Unlimited access to 11,000+ top-rated video courses on coding, business, IT and marketing. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "11,000+ Top-Rated Courses across All Fields",
      "Hands-on Coding Exercises & Practice Tests",
      "Certificates of Course Completion",
      "Offline Mobile App Access",
      "Monthly Fresh Content Additions"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "udemy.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 All-Course Access",
        "price": 2200,
        "originalPrice": 4000
      }
    ]
  },
  {
    "id": "skillshare-premium",
    "name": "Skillshare Premium",
    "category": "learning",
    "color": "#00FF84",
    "mono": "SS",
    "tag": "VERIFIED",
    "blurb": "Creative learning community covering illustration, animation, video production & design.",
    "discount": "60% OFF",
    "originalPrice": 2500,
    "officialPrice": "USD $168.00/yr (~NPR 22,600)",
    "officialSource": "skillshare.com",
    "description": "Skillshare Premium is an essential tool in Learning & Education. Creative learning community covering illustration, animation, video production & design. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "30,000+ Creative Masterclasses",
      "Project-based Interactive Learning",
      "Offline Video Downloads on Mobile",
      "Feedback from Professional Creators",
      "Ad-free High Quality Streaming"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "skillshare.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Premium Account",
        "price": 1000,
        "originalPrice": 2500
      },
      {
        "label": "1 Year \u00b7 Premium Account",
        "price": 4500,
        "originalPrice": 22600
      }
    ]
  },
  {
    "id": "linkedin-learning",
    "name": "LinkedIn Learning",
    "category": "learning",
    "color": "#0A66C2",
    "mono": "LL",
    "tag": "VERIFIED",
    "blurb": "Professional career development library with recognized completion badges & certifications.",
    "discount": "63% OFF",
    "originalPrice": 32400,
    "officialPrice": "USD $239.88/yr (~NPR 32,400)",
    "officialSource": "linkedin.com/learning",
    "description": "LinkedIn Learning is an essential tool in Learning & Education. Professional career development library with recognized completion badges & certifications. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "20,000+ Expert-led Career Courses",
      "Shareable Certifications directly on LinkedIn",
      "Includes Full LinkedIn Premium Career",
      "Learning Paths for Engineering & Management",
      "Exercise Files & Project Repos"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "linkedin.com/learning",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Full Learning + Premium",
        "price": 12000,
        "originalPrice": 32400
      }
    ]
  },
  {
    "id": "6000-kids-worksheets-bundle",
    "name": "6000+ Kids Worksheets Bundle",
    "category": "learning",
    "color": "#F43F5E",
    "mono": "KW",
    "tag": "VERIFIED",
    "blurb": "Comprehensive printable learning bundle covering math, phonics, cursive & activity sheets.",
    "discount": "85% OFF",
    "originalPrice": 3900,
    "officialPrice": "USD $29.00 (~NPR 3,900)",
    "officialSource": "curriculum-store",
    "description": "6000+ Kids Worksheets Bundle is an essential tool in Learning & Education. Comprehensive printable learning bundle covering math, phonics, cursive & activity sheets. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "6,000+ High-Resolution Printable Pages",
      "Math, Phonics, English & Logic Puzzles",
      "Preschool to Grade 5 Levels",
      "Instant Google Drive Lifetime Access",
      "Unlimited Reprinting Rights for Parents & Tutors"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "curriculum-store",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "Lifetime \u00b7 Complete Digital Pack",
        "price": 600,
        "originalPrice": 3900
      }
    ]
  },
  {
    "id": "jetbrains-all-products-pack",
    "name": "JetBrains All Products Pack",
    "category": "developer",
    "color": "#000000",
    "mono": "JB",
    "tag": "VERIFIED",
    "blurb": "Complete developer suite including IntelliJ IDEA, PyCharm, WebStorm, PhpStorm & CLion.",
    "discount": "92% OFF",
    "originalPrice": 39000,
    "officialPrice": "USD $289.00/yr (~NPR 39,000)",
    "officialSource": "jetbrains.com",
    "description": "JetBrains All Products Pack is an essential tool in Developer & Coding. Complete developer suite including IntelliJ IDEA, PyCharm, WebStorm, PhpStorm & CLion. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "All 16+ JetBrains Professional IDEs",
      "IntelliJ IDEA Ultimate, PyCharm & WebStorm",
      "PhpStorm, GoLand, CLion, Rider & DataGrip",
      "Full Database Tools & Profilers",
      "Offline & Remote Development Support"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "jetbrains.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 All Products Pack",
        "price": 3000,
        "originalPrice": 39000
      }
    ]
  },
  {
    "id": "datacamp-premium",
    "name": "DataCamp Premium",
    "category": "developer",
    "color": "#03EF62",
    "mono": "DC",
    "tag": "VERIFIED",
    "blurb": "Hands-on data science & AI learning platform covering Python, SQL, R, and PowerBI.",
    "discount": "43% OFF",
    "originalPrice": 3500,
    "officialPrice": "USD $149.00/yr (~NPR 20,000)",
    "officialSource": "datacamp.com",
    "description": "DataCamp Premium is an essential tool in Developer & Coding. Hands-on data science & AI learning platform covering Python, SQL, R, and PowerBI. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "400+ Interactive Data & AI Courses",
      "In-browser Coding Sandbox (No setup)",
      "Career Tracks for Data Analyst & ML Engineer",
      "Certifications recognized by tech employers",
      "Unlimited Practice Coding Challenges"
    ],
    "specs": {
      "License Type": "Global \u00b7 Personal",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "datacamp.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Premium Access",
        "price": 2000,
        "originalPrice": 3500
      },
      {
        "label": "1 Year \u00b7 Premium Access",
        "price": 6500,
        "originalPrice": 20000
      }
    ]
  },
  {
    "id": "educative-io-unlimited",
    "name": "Educative.io Unlimited",
    "category": "developer",
    "color": "#0B5FFF",
    "mono": "ED",
    "tag": "VERIFIED",
    "blurb": "Text-based, interactive software engineering & system design courses with embedded terminals.",
    "discount": "43% OFF",
    "originalPrice": 3500,
    "officialPrice": "USD $199.00/yr (~NPR 26,800)",
    "officialSource": "educative.io",
    "description": "Educative.io Unlimited is an essential tool in Developer & Coding. Text-based, interactive software engineering & system design courses with embedded terminals. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "System Design & Coding Interview Prep (Grokking)",
      "Interactive In-browser Code Execution",
      "No Video Scrubbing: 2x Faster Learning",
      "Certificates & Guided Learning Roadmaps",
      "Cloud Labs & Real Dev Environments"
    ],
    "specs": {
      "License Type": "Global \u00b7 Personal",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "educative.io",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Unlimited Access",
        "price": 2000,
        "originalPrice": 3500
      },
      {
        "label": "1 Year \u00b7 Unlimited Access",
        "price": 6000,
        "originalPrice": 26800
      }
    ]
  },
  {
    "id": "codedex-club",
    "name": "Codedex Club",
    "category": "developer",
    "color": "#FF5722",
    "mono": "CX",
    "tag": "VERIFIED",
    "blurb": "Gamified RPG-style coding adventure teaching Python, HTML/CSS, JavaScript & React.",
    "discount": "77% OFF",
    "originalPrice": 13300,
    "officialPrice": "USD $99.00/yr (~NPR 13,300)",
    "officialSource": "codedex.io",
    "description": "Codedex Club is an essential tool in Developer & Coding. Gamified RPG-style coding adventure teaching Python, HTML/CSS, JavaScript & React. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Interactive Pixel Art Story Quests",
      "Python, Web Dev, SQL & React Journeys",
      "Monthly Hackathons & Community Review",
      "Badges, Certificates & Portfolio Projects",
      "Fun & Beginner-friendly Curriculum"
    ],
    "specs": {
      "License Type": "Global \u00b7 Personal",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "codedex.io",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Club Membership",
        "price": 3000,
        "originalPrice": 13300
      }
    ]
  },
  {
    "id": "github-student-developer-pack",
    "name": "GitHub Student Developer Pack",
    "category": "developer",
    "color": "#24292E",
    "mono": "GH",
    "tag": "VERIFIED",
    "blurb": "Massive bundle of free cloud credits, domain names, Canva Pro, JetBrains & dev tools.",
    "discount": "67% OFF",
    "originalPrice": 15000,
    "officialPrice": "Free for Students / Valued at $200k+",
    "officialSource": "education.github.com",
    "description": "GitHub Student Developer Pack is an essential tool in Developer & Coding. Massive bundle of free cloud credits, domain names, Canva Pro, JetBrains & dev tools. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "DigitalOcean & Microsoft Azure Cloud Credits",
      "Free .me Domain Registration for 1 Year",
      "GitHub Copilot Free Access",
      "JetBrains All IDEs Free Subscription",
      "Frontend Masters, Namecheap, Stripe perks"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "education.github.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Verified Student Account",
        "price": 5000,
        "originalPrice": 15000
      }
    ]
  },
  {
    "id": "adobe-acrobat-pro",
    "name": "Adobe Acrobat Pro",
    "category": "utilities",
    "color": "#FF0000",
    "mono": "AP",
    "tag": "VERIFIED",
    "blurb": "Industry standard for editing PDF text, signing, organizing, OCR scan and Word conversion.",
    "discount": "91% OFF",
    "originalPrice": 32400,
    "officialPrice": "USD $239.88/yr (~NPR 32,400)",
    "officialSource": "adobe.com/acrobat",
    "description": "Adobe Acrobat Pro is an essential tool in Utilities & Tools. Industry standard for editing PDF text, signing, organizing, OCR scan and Word conversion. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Edit Text & Images directly inside PDFs",
      "Convert PDF to Word, Excel, PowerPoint",
      "Send & Collect Legally Binding E-Signatures",
      "OCR Optical Recognition for Scanned Documents",
      "Password Protect & Redact Sensitive Data"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "adobe.com/acrobat",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Full Pro Account",
        "price": 3000,
        "originalPrice": 32400
      }
    ]
  },
  {
    "id": "nitro-pdf-pro",
    "name": "Nitro PDF Pro",
    "category": "utilities",
    "color": "#FF6B00",
    "mono": "NP",
    "tag": "VERIFIED",
    "blurb": "Powerful desktop PDF creator, editor, converter and digital signing platform.",
    "discount": "90% OFF",
    "originalPrice": 24000,
    "officialPrice": "USD $179.99 (~NPR 24,000)",
    "officialSource": "gonitro.com",
    "description": "Nitro PDF Pro is an essential tool in Utilities & Tools. Powerful desktop PDF creator, editor, converter and digital signing platform. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Fast PDF Editing & Page Extraction",
      "Seamless Conversion to MS Office",
      "Fillable Forms & Digital Signature Stamp",
      "OCR Text Conversion in 20+ Languages",
      "Lightweight on System Resources"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "gonitro.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "Lifetime \u00b7 Pro Retail License",
        "price": 2500,
        "originalPrice": 24000
      }
    ]
  },
  {
    "id": "truecaller-premium",
    "name": "Truecaller Premium",
    "category": "utilities",
    "color": "#0087FF",
    "mono": "TC",
    "tag": "VERIFIED",
    "blurb": "Caller ID with advanced spam call & SMS blocking, who viewed my profile and zero ads.",
    "discount": "12% OFF",
    "originalPrice": 4000,
    "officialPrice": "USD $29.90/yr (~NPR 4,000)",
    "officialSource": "truecaller.com",
    "description": "Truecaller Premium is an essential tool in Utilities & Tools. Caller ID with advanced spam call & SMS blocking, who viewed my profile and zero ads. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Live Caller ID Identification",
      "Advanced Auto-Spam Call & Robocall Blocker",
      "Incognito View Profiles Without Alerts",
      "Who Viewed My Profile Tracker",
      "Ad-free Clean Interface & Premium Badge"
    ],
    "specs": {
      "License Type": "Global \u00b7 Personal",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "truecaller.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Premium Personal Plan",
        "price": 3500,
        "originalPrice": 4000
      }
    ]
  },
  {
    "id": "easeus-data-recovery-pro",
    "name": "EaseUS Data Recovery Pro",
    "category": "utilities",
    "color": "#00A4E4",
    "mono": "EU",
    "tag": "VERIFIED",
    "blurb": "Recovers permanently deleted, formatted or corrupted files, photos & partitions.",
    "discount": "71% OFF",
    "originalPrice": 19000,
    "officialPrice": "USD $69.95/mo (~NPR 9,400/mo, NPR 19,000/yr)",
    "officialSource": "easeus.com",
    "description": "EaseUS Data Recovery Pro is an essential tool in Utilities & Tools. Recovers permanently deleted, formatted or corrupted files, photos & partitions. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Recover 1,000+ File Formats (Docs, Video, Audio)",
      "Deep Scan for Formatted & RAW Drives",
      "Partition Loss & Crash System Recovery",
      "Preview Files before Recovery",
      "Supports HDD, SSD, USB & SD Cards"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "easeus.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Pro License",
        "price": 5500,
        "originalPrice": 19000
      }
    ]
  },
  {
    "id": "ccleaner-professional",
    "name": "CCleaner Professional",
    "category": "utilities",
    "color": "#E63946",
    "mono": "CC",
    "tag": "VERIFIED",
    "blurb": "Automated PC speed optimization, junk cleaner, driver updater and privacy protection.",
    "discount": "45% OFF",
    "originalPrice": 4000,
    "officialPrice": "USD $29.95/yr (~NPR 4,000)",
    "officialSource": "ccleaner.com",
    "description": "CCleaner Professional is an essential tool in Utilities & Tools. Automated PC speed optimization, junk cleaner, driver updater and privacy protection. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Driver Updater for 50M+ PC Drivers",
      "PC Health Check & Junk Cleaner",
      "Automatic Browser History & Tracker Purge",
      "Software Updater & Registry Optimizer",
      "Boosts Startup & System Performance"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "ccleaner.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Pro Account",
        "price": 2200,
        "originalPrice": 4000
      }
    ]
  },
  {
    "id": "cleanmymac-x",
    "name": "CleanMyMac X",
    "category": "utilities",
    "color": "#F72585",
    "mono": "CM",
    "tag": "VERIFIED",
    "blurb": "Award-winning Mac cleaner, RAM booster, malware scanner and software uninstaller.",
    "discount": "7% OFF",
    "originalPrice": 5400,
    "officialPrice": "USD $39.95/yr (~NPR 5,400)",
    "officialSource": "macpaw.com/cleanmymac",
    "description": "CleanMyMac X is an essential tool in Utilities & Tools. Award-winning Mac cleaner, RAM booster, malware scanner and software uninstaller. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Clean Tens of Gigabytes of System Junk",
      "Speed Up RAM & Run Maintenance Scripts",
      "Detect & Remove Mac-specific Malware",
      "Completely Uninstall Unwanted Apps",
      "Space Lens Visual Storage Analyzer"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "macpaw.com/cleanmymac",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 License for Mac",
        "price": 5000,
        "originalPrice": 5400
      }
    ]
  },
  {
    "id": "internet-download-manager-idm",
    "name": "Internet Download Manager (IDM)",
    "category": "utilities",
    "color": "#1E88E5",
    "mono": "ID",
    "tag": "VERIFIED",
    "blurb": "Accelerates download speeds up to 5x with resume capability and browser integration.",
    "discount": "26% OFF",
    "originalPrice": 3400,
    "officialPrice": "USD $24.95 (~NPR 3,400)",
    "officialSource": "internetdownloadmanager.com",
    "description": "Internet Download Manager (IDM) is an essential tool in Utilities & Tools. Accelerates download speeds up to 5x with resume capability and browser integration. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Up to 5x Faster Download Speeds",
      "Resume Broken / Interrupted Downloads",
      "Automatic Video Grabber from Websites",
      "Supports Chrome, Firefox, Edge & Brave",
      "Built-in Antivirus Download Check"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "internetdownloadmanager.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "Lifetime \u00b7 Genuine License",
        "price": 2500,
        "originalPrice": 3400
      }
    ]
  },
  {
    "id": "autodesk-apps-suite",
    "name": "Autodesk Apps Suite",
    "category": "utilities",
    "color": "#0696D7",
    "mono": "AD",
    "tag": "VERIFIED",
    "blurb": "Professional 3D design and engineering software suite including AutoCAD, Revit, 3ds Max.",
    "discount": "99% OFF",
    "originalPrice": 266000,
    "officialPrice": "USD $1,975/yr (~NPR 266,000)",
    "officialSource": "autodesk.com",
    "description": "Autodesk Apps Suite is an essential tool in Utilities & Tools. Professional 3D design and engineering software suite including AutoCAD, Revit, 3ds Max. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "AutoCAD 2D/3D Architecture Software",
      "Revit BIM Modeling Software",
      "3ds Max & Maya 3D Animation & Rendering",
      "Full Cloud Collaboration & Drawing Tools",
      "Official Autodesk Student / Education License"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "autodesk.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Education/Pro Account",
        "price": 2000,
        "originalPrice": 266000
      }
    ]
  },
  {
    "id": "speechelo-pro",
    "name": "Speechelo Pro",
    "category": "utilities",
    "color": "#9C27B0",
    "mono": "SP",
    "tag": "VERIFIED",
    "blurb": "Realistic AI voice generator creating human-sounding voiceovers in 30+ languages.",
    "discount": "85% OFF",
    "originalPrice": 13000,
    "officialPrice": "USD $97.00 (~NPR 13,000)",
    "officialSource": "speechelo.com",
    "description": "Speechelo Pro is an essential tool in Utilities & Tools. Realistic AI voice generator creating human-sounding voiceovers in 30+ languages. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Transform Any Text into Realistic Voiceover",
      "30+ Languages with Male & Female Voices",
      "Inflections: Normal, Joyful & Serious tones",
      "Export to High Quality MP3 format",
      "Commercial Video Rights included"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "speechelo.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "Lifetime \u00b7 Pro Tier Access",
        "price": 2000,
        "originalPrice": 13000
      }
    ]
  },
  {
    "id": "1password-premium",
    "name": "1Password Premium",
    "category": "utilities",
    "color": "#0A85EA",
    "mono": "1P",
    "tag": "VERIFIED",
    "blurb": "Military-grade password keeper for logins, 2FA codes, credit cards and secure notes.",
    "discount": "58% OFF",
    "originalPrice": 4800,
    "officialPrice": "USD $35.88/yr (~NPR 4,800)",
    "officialSource": "1password.com",
    "description": "1Password Premium is an essential tool in Utilities & Tools. Military-grade password keeper for logins, 2FA codes, credit cards and secure notes. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Unlimited Passwords & Sensitive Items",
      "Integrated Two-Factor (2FA) Authenticator",
      "Watchtower Alert for Compromised Passwords",
      "Travel Mode & Biometric Unlock",
      "Available on Mac, Windows, iOS, Android"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "1password.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Premium Account",
        "price": 2000,
        "originalPrice": 4800
      }
    ]
  },
  {
    "id": "dashlane-password-manager",
    "name": "Dashlane Password Manager",
    "category": "utilities",
    "color": "#0E768C",
    "mono": "DL",
    "tag": "VERIFIED",
    "blurb": "Encrypted credential keeper with automatic autofill, dark web alerts and password health.",
    "discount": "88% OFF",
    "originalPrice": 8000,
    "officialPrice": "USD $59.88/yr (~NPR 8,000)",
    "officialSource": "dashlane.com",
    "description": "Dashlane Password Manager is an essential tool in Utilities & Tools. Encrypted credential keeper with automatic autofill, dark web alerts and password health. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "Unlimited Password Storage & Sync",
      "Dark Web Monitoring & Breach Alerts",
      "One-Click Instant Autofill",
      "Zero-Knowledge Encryption Architecture",
      "Built-in Hotspot Shield VPN"
    ],
    "specs": {
      "License Type": "Global \u00b7 Account",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "dashlane.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Year \u00b7 Premium Account",
        "price": 1000,
        "originalPrice": 8000
      }
    ]
  },
  {
    "id": "expressvpn-premium",
    "name": "ExpressVPN Premium",
    "category": "utilities",
    "color": "#DA291C",
    "mono": "EX",
    "tag": "VERIFIED",
    "blurb": "Ultra-fast VPN with proprietary Lightway protocol across 105 countries with zero logs.",
    "discount": "50% OFF",
    "originalPrice": 3000,
    "officialPrice": "USD $99.95/yr (~NPR 13,500)",
    "officialSource": "expressvpn.com",
    "description": "ExpressVPN Premium is an essential tool in Utilities & Tools. Ultra-fast VPN with proprietary Lightway protocol across 105 countries with zero logs. DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
    "features": [
      "High-Speed Lightway Protocol",
      "Servers in 105 Countries Worldwide",
      "Best-in-class 256-bit AES Encryption",
      "Strict Audited No-Logs Policy",
      "Supports Windows, Mac, iOS, Android, Linux"
    ],
    "specs": {
      "License Type": "Global \u00b7 Key",
      "Delivery Time": "10\u201330 Minutes via WhatsApp",
      "Official Source": "expressvpn.com",
      "Warranty": "100% Active Duration Replacement",
      "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
    },
    "popular": false,
    "featured": false,
    "plans": [
      {
        "label": "1 Month \u00b7 Premium License",
        "price": 1500,
        "originalPrice": 3000
      },
      {
        "label": "1 Year \u00b7 Premium License",
        "price": 7500,
        "originalPrice": 13500
      }
    ]
  }
];

window.FAQS = [
  {
    q: "How fast will I receive my subscription?",
    a: "Most orders are delivered on WhatsApp within 10–30 minutes during working hours. Some custom account-upgrade products may take a bit longer — we will always inform you right away in chat.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept all major Nepali payment services: eSewa, Khalti, any Fonepay-compatible mobile banking app via QR, and direct bank transfers.",
  },
  {
    q: "What is your replacement warranty guarantee?",
    a: "Every eligible plan comes with a 100% replacement warranty for its entire validity. If your profile ever experiences access issues, message us on WhatsApp (+9779849782340) and we will resolve or replace it promptly.",
  },
  {
    q: "Where is DigiPatro headquartered?",
    a: "DigiPatro is headquartered in Biratnagar, Nepal, serving customers across Kathmandu, Pokhara, Lalitpur, Biratnagar, Dharan, Butwal, Chitwan, and Nepali diaspora communities worldwide.",
  },
  {
    q: "Can I order from outside Nepal (global customers)?",
    a: "Yes! We serve customers from around the world (Australia, UAE, USA, UK, Japan, etc.) through international wallets, remittance QR, or friends/family local payments.",
  },
  {
    q: "Do I need to register an account on the website to buy?",
    a: "No registration required! Simply pick your subscription, tap 'Order on WhatsApp', and your order is sent directly to our verified WhatsApp support.",
  },
];

window.TESTIMONIALS = [
  { name: "Aashish K.", city: "Biratnagar HQ", text: "Fastest subscription delivery in Nepal! Ordered Netflix and Canva, credentials arrived on WhatsApp in 12 minutes. Proud to support our local Biratnagar tech brand!", rating: 5 },
  { name: "Priyanka S.", city: "Kathmandu", text: "Super reliable. Paid via eSewa and had my ChatGPT Plus working before my coffee was ready. Professional support.", rating: 5 },
  { name: "Bikash B.", city: "Pokhara", text: "Got YouTube Premium and Spotify on my personal email. Zero issues for the past 6 months. 100% recommended!", rating: 5 },
  { name: "Suman G.", city: "Sydney, Australia (Global Client)", text: "Living in Australia, I still use DigiPatro to keep my family in Nepal sorted with streaming and OTT. Seamless communication on WhatsApp.", rating: 5 },
];

window.WEBSITE_PACKAGES = [
  {
    name: "Starter Business Landing",
    blurb: "High-converting modern landing page for startups, local businesses, clinics and personal brands.",
    price: 20000,
    period: "One-time investment",
    highlight: false,
    features: [
      "Custom UI/UX Landing Page Design",
      "100% Mobile & Tablet Responsive",
      "Direct WhatsApp Chat & Order Integration",
      "Google Maps Location & Contact Form",
      "On-Page SEO & Social Meta Previews",
      "Domain & Hosting Setup Assistance",
      "Fast 3–5 Days Turnaround Time"
    ],
  },
  {
    name: "Complete Business Website",
    blurb: "Multi-page corporate website for growing enterprises, service firms, hotels and agencies.",
    price: 35000,
    period: "One-time investment",
    highlight: true,
    features: [
      "Up to 5–8 Custom Designed Pages",
      "Content Management System (CMS) Setup",
      "Interactive Product & Service Showcase",
      "WhatsApp Lead & Inquiry Forms",
      "High Speed Optimization (95+ Google PageSpeed)",
      "Custom Domain Email Configuration (e.g. info@yourbiz.com)",
      "Google Analytics & Search Console Integration",
      "30 Days Free Maintenance & Updates"
    ],
  },
  {
    name: "Custom SaaS & Enterprise App",
    blurb: "Full-stack tailored web platform, customer portal, booking engine or ecommerce store.",
    price: 90000,
    period: "One-time investment",
    highlight: false,
    features: [
      "Full-Stack Web App (React / Next.js / Node.js)",
      "Nepali Payment Gateway Integration (eSewa, Khalti & Fonepay APIs)",
      "Relational Database (PostgreSQL / Supabase)",
      "User Authentication, Role-Based Access & Profiles",
      "Admin Analytics Dashboard & Order Management",
      "Automated WhatsApp & Email Transactional Notifications",
      "Custom API Endpoints & Third-Party Webhooks",
      "Complete Source Code Handover & 60-Day Tech Support"
    ],
  },
];
