import json, re

# Read data.js
with open("assets/js/data.js", "r") as f:
    text = f.read()

# Load existing products
m = re.search(r'window\.PRODUCTS\s*=\s*(\[.*?\]);', text, re.DOTALL)
existing_products = json.loads(m.group(1))

# Official pricing reference lookup for existing 32 items
existing_official = {
    "amazon-prime-video": {
        "officialPrice": "USD $8.99/mo (~NPR 1,200/mo) or NPR 300 / screen on OTT",
        "officialSource": "primevideo.com",
        "description": "Amazon Prime Video is one of the world's leading OTT streaming entertainment platforms, providing unlimited instant access to thousands of blockbuster movies, award-winning Amazon Originals (The Boys, Rings of Power, Reacher, Mirzapur), live sports, and regional content. DigiPatro provides full 4K Ultra HD single-screen private profiles with complete replacement guarantee and fast delivery on WhatsApp.",
        "specs": {"Quality": "4K Ultra HD / HDR", "Delivery": "10–30 Minutes on WhatsApp", "Warranty": "Full Term 100% Replacement", "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer", "Region": "Nepal / Global Compatible"}
    },
    "netflix": {
        "officialPrice": "USD $9.99/mo (Standard) to $22.99/mo (4K Premium) (~NPR 1,350 - NPR 3,100/mo)",
        "officialSource": "netflix.com",
        "description": "Netflix Premium 4K UHD plan offers unparalleled streaming quality across television, laptop, tablet, and mobile. Enjoy unlimited ad-free access to acclaimed international and local series, films, documentaries, and anime. Each profile is private with PIN lock support.",
        "specs": {"Quality": "4K Ultra HD + Dolby Atmos", "Screen": "Single Screen with Personal PIN", "Delivery": "Instant WhatsApp Delivery", "Warranty": "100% Replacement Warranty", "Payment": "eSewa / Khalti / Fonepay QR"}
    },
    "netflix-private-4k": {
        "officialPrice": "USD $22.99/mo (~NPR 3,100/mo, NPR 37,000/yr)",
        "officialSource": "netflix.com",
        "description": "Full private 4K Netflix account where you get the complete master email and password with 4+1 screens. Ideal for families, friend circles, or shared households. Change profiles, set personal PINs, and stream simultaneously on up to 4 devices at full 4K UHD quality.",
        "specs": {"Screens": "4+1 Complete Private Account", "Quality": "4K Ultra HD + Spatial Audio", "Access": "Master Email & Password", "Warranty": "Full Duration Warranty", "Payment": "Local Nepali Wallets & Bank QR"}
    },
    "netflix-prime-combo": {
        "officialPrice": "Individual combined retail: NPR 1,800+ / mo",
        "officialSource": "netflix.com & primevideo.com",
        "description": "The ultimate binge-watcher combo pack combining Netflix Premium 4K Ultra HD and Amazon Prime Video at a massive discount. Enjoy the best of both entertainment universes with a single simple local payment on DigiPatro.",
        "specs": {"Included": "Netflix 4K UHD Profile + Prime Video 4K", "Screens": "Private Screen on each service", "Delivery": "Within 10–30 Minutes", "Warranty": "100% Duration Protection"}
    },
    "spotify": {
        "officialPrice": "USD $11.99/mo (~NPR 1,600/mo, NPR 19,000/yr)",
        "officialSource": "spotify.com/premium",
        "description": "Spotify Premium delivers ad-free music listening, offline downloads, crystal-clear 320 kbps high fidelity audio, and unlimited skips across 100+ million tracks and podcasts on your phone, desktop, smart TV, or console.",
        "specs": {"Audio Quality": "Very High (320 kbps) + Lossless ready", "Offline Mode": "Download up to 10,000 songs", "Device Sync": "Spotify Connect across all devices", "Warranty": "Full Term Replacement"}
    },
    "youtube-premium": {
        "officialPrice": "USD $13.99/mo (~NPR 1,900/mo)",
        "officialSource": "youtube.com/premium",
        "description": "YouTube Premium removes all advertisements across YouTube, includes background playback while your phone screen is locked or while multitasking, offline video downloads, and grants full access to YouTube Music Premium.",
        "specs": {"Features": "100% Ad-Free YouTube + YouTube Music", "Background Play": "Yes, screen locked & PiP", "Downloads": "Full 1080p & 4K offline video", "Warranty": "Full Plan Warranty"}
    },
    "zee5-premium": {
        "officialPrice": "INR ₹999/yr (~NPR 1,600) + international card markup",
        "officialSource": "zee5.com",
        "description": "Zee5 Premium brings you 4,500+ movies, 200+ web series, live TV channels, and early access to popular TV serials before telecast. Enjoy blockbuster Hindi, South Indian dubs, and regional movies across multiple screens.",
        "specs": {"Screens": "Up to 3 Simultaneous Devices", "Audio/Video": "Full HD / 4K + Dolby 5.1", "Content": "Zee Originals, AltBalaji shows, Live News", "Warranty": "12 Months Replacement"}
    },
    "hbo-max": {
        "officialPrice": "USD $16.99/mo (~NPR 2,300/mo, NPR 27,600/yr)",
        "officialSource": "max.com",
        "description": "HBO Max (Max) streams the world's most prestigious television series and movies from HBO, Warner Bros., DC Universe, Discovery, and Cartoon Network. Watch Game of Thrones, House of the Dragon, Succession, and DC blockbusters in 4K.",
        "specs": {"Quality": "4K UHD with HDR10 & Dolby Vision", "Content": "HBO Originals, DC Universe, Warner Bros", "Profile": "Personal Private Profile", "Warranty": "100% Replacement Warranty"}
    },
    "crunchyroll": {
        "officialPrice": "USD $9.99/mo (~NPR 1,350/mo, NPR 16,000/yr)",
        "officialSource": "crunchyroll.com",
        "description": "Crunchyroll Mega Fan is the anime enthusiast's dream, streaming ad-free simulcasts directly from Japan just 1 hour after broadcast. Enjoy 1,000+ anime titles with English sub/dub and offline viewing on up to 4 devices.",
        "specs": {"Library": "1,000+ Anime Series & Movies", "Simulcast": "Direct from Tokyo within 1 hour", "Offline Viewing": "Download on iOS & Android", "Screens": "Private Screen / Account"}
    },
    "canva-pro": {
        "officialPrice": "USD $119.99/yr (~NPR 16,200/yr)",
        "officialSource": "canva.com/pro",
        "description": "Canva Pro empowers creators, businesses, and students with unlimited access to 100M+ premium stock photos, graphics, videos, and audio. Unlock one-click background remover, Magic Resize, brand kits, and AI generative design tools.",
        "specs": {"Assets": "100M+ Premium Stock Images & Fonts", "AI Tools": "Magic Studio, Eraser & Resizer", "Brand Kits": "Unlimited Brand Assets & Palettes", "Access": "Official Lifetime Invite on your personal email"}
    },
    "microsoft-365": {
        "officialPrice": "USD $69.99/yr (~NPR 9,450/yr)",
        "officialSource": "microsoft.com/microsoft-365",
        "description": "Microsoft 365 Pro provides genuine desktop installations of Word, Excel, PowerPoint, Outlook, and OneNote for PC and Mac, paired with 1 TB of cloud storage on OneDrive with advanced security protection.",
        "specs": {"Office Apps": "Word, Excel, PowerPoint, Outlook, OneNote", "Cloud Storage": "1 TB OneDrive Secure Cloud", "Devices": "5 Devices simultaneously (PC, Mac, Mobile)", "Warranty": "Full 1 Year Active Warranty"}
    },
    "nordvpn": {
        "officialPrice": "USD $12.99/mo (~NPR 1,750/mo) or $59.88/yr (~NPR 8,100)",
        "officialSource": "nordvpn.com",
        "description": "NordVPN is the global gold standard in online privacy and cybersecurity. Connect to 6,000+ ultra-fast servers across 111 countries with next-gen NordLynx encryption, malware blocking with Threat Protection, and zero logs.",
        "specs": {"Encryption": "AES-256 / Next-Gen NordLynx", "Servers": "6,000+ Servers across 111 Countries", "Features": "Threat Protection, Double VPN, Kill Switch", "Compatibility": "Windows, Mac, iOS, Android, Linux"}
    },
    "google-gemini-ai-pro": {
        "officialPrice": "USD $19.99/mo (~NPR 2,700/mo, NPR 32,400/yr)",
        "officialSource": "gemini.google.com/advanced",
        "description": "Google Gemini Advanced grants direct access to Google's most capable AI models (Gemini 1.5 Pro) with a massive 1-2 million token context window. Analyze massive documents, write complex software, and integrate seamlessly into Google Docs and Drive.",
        "specs": {"Model": "Gemini 1.5 Pro / Ultra Architecture", "Context Window": "1 Million+ Tokens (Upload 1,500-page PDFs)", "Integration": "Native Google Docs, Gmail & Drive AI", "Warranty": "Full Active Warranty Protection"}
    },
    "claude-ai-pro": {
        "officialPrice": "USD $20.00/mo (~NPR 2,700/mo + international card fees)",
        "officialSource": "claude.ai",
        "description": "Claude Pro by Anthropic unlocks high-tier access to Claude 3.5 Sonnet, the highest rated coding and reasoning AI in the world. Includes 5x more usage, priority bandwidth during peak hours, and early access to new multimodal features.",
        "specs": {"Model": "Claude 3.5 Sonnet & Claude 3 Opus", "Artifacts": "Live Interactive Code & Diagram Preview", "Context": "200,000 Token Large Context Window", "Access": "Personal Private Account"}
    },
    "chatgpt-plus": {
        "officialPrice": "USD $20.00/mo (~NPR 2,700/mo)",
        "officialSource": "chat.openai.com",
        "description": "ChatGPT Plus unlocks OpenAI's flagship GPT-4o and OpenAI o1 reasoning models with DALL-E 3 image generation, voice mode, web browsing, data analysis, file uploads, and custom GPT builders with zero wait time.",
        "specs": {"Models": "GPT-4o, OpenAI o1, Canvas, DALL-E 3", "Features": "Web Browsing, Advanced Data Analysis, Voice", "Limits": "High-capacity priority access", "Warranty": "Full Month Replacement Warranty"}
    },
    "capcut-pro": {
        "officialPrice": "USD $9.99/mo (~NPR 1,350/mo, NPR 12,000/yr)",
        "officialSource": "capcut.com",
        "description": "CapCut Pro is the premier video editing platform for TikTok creators, YouTubers, and digital marketers. Unlock pro transitions, AI background removal, auto-captions with custom font styling, voice enhancement, and 4K 60fps export.",
        "specs": {"Video Export": "Up to 4K 60fps Ultra HD", "AI Features": "Auto-Captions, Body Effects, AI Face Retouch", "Transitions": "1,000+ Pro Transitions & Sound Effects", "Platforms": "PC, Mac, iPhone, iPad, Android"}
    },
    "sony-liv-premium": {
        "officialPrice": "INR ₹999/yr (~NPR 1,600) + currency exchange markup",
        "officialSource": "sonyliv.com",
        "description": "Sony LIV Premium streams international cricket tournaments, UEFA Champions League, WWE live events, Sony SAB hit comedies, and award-winning originals like Scam 1992 and Rocket Boys in Full HD.",
        "specs": {"Live Sports": "UEFA, Cricket, Australian Open, WWE", "Quality": "Full HD 1080p with Dolby Audio", "Screens": "Personal Profile / Screen", "Warranty": "100% Active Duration Support"}
    },
    "ullu-premium": {
        "officialPrice": "INR ₹799/yr (~NPR 1,300)",
        "officialSource": "ullu.app",
        "description": "ULLU Premium provides unlimited access to romantic and dramatic web series, Hindi movies, and regional content with fast streaming and private account options.",
        "specs": {"Quality": "Full HD 1080p Streaming", "Access": "Private & Confidential Account", "Devices": "Android, iOS, Smart TV, Web", "Warranty": "Full Month Replacement"}
    },
    "linkedin-premium": {
        "officialPrice": "USD $29.99 - $59.99/mo (~NPR 4,000 - NPR 8,100/mo)",
        "officialSource": "linkedin.com/premium",
        "description": "LinkedIn Premium Career & Business gives job seekers and professionals competitive insights, InMail direct messaging to hiring managers, full visibility into who viewed your profile, and complete access to 20,000+ LinkedIn Learning courses.",
        "specs": {"InMail": "Direct messaging to recruiters & leaders", "Who Viewed You": "Full 365-day profile viewer analytics", "Learning": "Free access to all LinkedIn Learning certificates", "Warranty": "Guaranteed active plan"}
    },
    "adobe-express": {
        "officialPrice": "USD $9.99/mo (~NPR 1,350/mo, NPR 16,000/yr)",
        "officialSource": "adobe.com/express",
        "description": "Adobe Express Premium combines the best of Photoshop, Illustrator, and Premiere into an intuitive drag-and-drop design app. Access thousands of premium templates, Adobe Fonts, and Adobe Firefly generative AI tools.",
        "specs": {"AI Credits": "Monthly Adobe Firefly Generative Credits", "Brand Kits": "Custom logos, color themes & fonts", "Storage": "100 GB Adobe Cloud Storage", "Warranty": "12 Months Verified Access"}
    },
    "surfshark-vpn": {
        "officialPrice": "USD $15.45/mo or $47.76 for 2 yrs (~NPR 6,450)",
        "officialSource": "surfshark.com",
        "description": "Surfshark VPN allows unlimited simultaneous devices on a single subscription. Protect your entire home and office with CleanWeb ad blocking, multi-hop server chaining, IP masking, and streaming unblocking across 100 countries.",
        "specs": {"Devices": "Unlimited Simultaneous Devices", "Servers": "3,200+ RAM-only Servers in 100 Countries", "Ad Blocker": "Built-in CleanWeb malware & ad shield", "Warranty": "Full Duration Guarantee"}
    },
    "windows-11-pro": {
        "officialPrice": "USD $199.99 (~NPR 27,000 retail)",
        "officialSource": "microsoft.com/windows-11-pro",
        "description": "Genuine Microsoft Windows 11 Professional lifetime digital retail key. Unlock BitLocker device encryption, Windows Sandbox, Remote Desktop (RDP), Hyper-V virtualization, and official Windows security updates forever.",
        "specs": {"License": "100% Genuine Retail Digital Key", "Validity": "Lifetime Permanent Activation on 1 PC", "Reinstallation": "Re-usable on the same motherboard", "Language": "Multilingual Global Support"}
    },
    "perplexity-pro": {
        "officialPrice": "USD $20.00/mo (~NPR 2,700/mo, NPR 27,000/yr)",
        "officialSource": "perplexity.ai",
        "description": "Perplexity AI Pro is the conversational search engine that replaces Google. Perform unlimited Pro searches with cited web sources, switch between Claude 3.5 Sonnet, GPT-4o, and Sonar models, and upload unlimited documents for analysis.",
        "specs": {"Models": "Claude 3.5 Sonnet, GPT-4o, Grok & Sonar", "Search": "300+ Pro Guided Searches daily", "File Analysis": "Upload PDFs, CSVs, Images & Code", "Warranty": "Full Month Replacement"}
    },
    "lovable-lite": {
        "officialPrice": "USD $20.00/mo (~NPR 2,700/mo)",
        "officialSource": "lovable.dev",
        "description": "Lovable is the cutting-edge autonomous AI full-stack developer that turns natural language ideas into production-ready web applications with Supabase databases, authentication, and GitHub syncing.",
        "specs": {"Capabilities": "Full-Stack React + Vite + Supabase", "Sync": "GitHub 2-way sync & Custom Domain", "Speed": "Build complete apps in under 10 minutes", "Warranty": "Full Plan Duration Warranty"}
    },
    "faphouse": {
        "officialPrice": "USD $14.99/mo (~NPR 2,000/mo)",
        "officialSource": "faphouse.com",
        "description": "Faphouse Premium offers ad-free adult entertainment in Full HD and 4K quality with high-speed private streaming and fast delivery.",
        "specs": {"Quality": "Full HD & 4K Ultra HD Streaming", "Privacy": "Discreet & Private Account Access", "Delivery": "Within 10–30 Minutes", "Warranty": "100% Plan Guarantee"}
    },
    "coursera-plus": {
        "officialPrice": "USD $59.00/mo or $399/yr (~NPR 54,000/yr)",
        "officialSource": "coursera.org/courseraplus",
        "description": "Coursera Plus gives you unlimited access to 7,000+ courses, guided projects, and Professional Certificates from Google, IBM, Stanford, Yale, and University of London. Earn resume-defining credentials with zero per-course fees.",
        "specs": {"Courses": "7,000+ World-Class University Courses", "Certificates": "Unlimited Shareable Industry Certificates", "Partners": "Google, IBM, Meta, Stanford, Yale", "Warranty": "1 Year Complete Warranty"}
    },
    "super-duolingo": {
        "officialPrice": "USD $83.88/yr (~NPR 11,300/yr)",
        "officialSource": "duolingo.com/super",
        "description": "Super Duolingo removes all interruptions from language learning with zero advertisements, unlimited hearts so you never pause for mistakes, personalized practice sessions, and offline course downloads.",
        "specs": {"Features": "Unlimited Hearts, Zero Ads, Mistake Review", "Languages": "Spanish, French, German, Japanese, 40+ more", "Offline Mode": "Download lessons directly on phone", "Warranty": "1 Year Active Subscription"}
    },
    "super-grok": {
        "officialPrice": "USD $16.00/mo (~NPR 2,150/mo, NPR 25,000/yr)",
        "officialSource": "x.ai",
        "description": "Super Grok by xAI gives power users access to Grok 2 and Grok Vision, real-time knowledge synthesis from X (Twitter), uncensored generative reasoning, and state-of-the-art Flux image generation.",
        "specs": {"Engine": "Grok 2 + Real-Time Live X Data Feed", "Image Generation": "Flux.1 AI Photo Engine included", "Access": "X Premium+ / Grok Pro Tier", "Warranty": "Full Duration Warranty"}
    },
    "kuku-fm": {
        "officialPrice": "INR ₹899/yr (~NPR 1,450)",
        "officialSource": "kukufm.com",
        "description": "Kuku FM & TV is India and South Asia's leading audio storytelling platform, featuring 10,000+ audiobooks, book summaries, motivation, spiritual stories, and regional language shows with offline listening.",
        "specs": {"Library": "10,000+ Audiobooks & Shows", "Languages": "Hindi, English, Marathi, Gujarati & more", "Offline Mode": "Download & listen anywhere", "Warranty": "3 Months Active Access"}
    },
    "google-veo-3-ultra": {
        "officialPrice": "Google DeepMind Enterprise Pilot Tier ($250+/mo)",
        "officialSource": "deepmind.google/technologies/veo",
        "description": "Google VEO 3 x20 Ultra gives creators high-tier access to Google DeepMind's flagship generative video model. Generate cinematic 1080p and 4K video clips from text prompts with visual consistency and film-grade physics.",
        "specs": {"Video Model": "Google VEO High Definition Engine", "Resolution": "1080p Full HD Video Generation", "Physics": "Realistic Fluid & Lighting Simulation", "Warranty": "30 Days Access Warranty"}
    },
    "static-website": {
        "officialPrice": "NPR 12,000 - 25,000 agency standard in Nepal",
        "officialSource": "digipatro.com/websites",
        "description": "Custom coded, mobile-responsive business landing page built by DigiPatro Studio. Engineered for Nepali enterprises with WhatsApp ordering integration, Google Maps location, SEO optimization, and lightning-fast loading speed.",
        "specs": {"Turnaround": "Fast 3–5 Working Days", "Mobile Optimized": "100% Responsive on all screen sizes", "Integrations": "WhatsApp Direct Ordering & Contact Form", "SEO": "Meta Tags & Google Search Ready"}
    },
    "saas-business": {
        "officialPrice": "NPR 45,000 - 100,000 standard software agency rate",
        "officialSource": "digipatro.com/websites",
        "description": "Complete full-stack web application designed for growing businesses. Includes database integration (Supabase / PostgreSQL), user authentication, admin dashboard, WhatsApp notification webhooks, and local payment gateways.",
        "specs": {"Architecture": "Modern React / Next.js / Node.js Stack", "Database": "PostgreSQL with Authentication & RBAC", "Payments": "eSewa & Khalti QR API Integration", "Support": "Full Source Code & 30-Day Maintenance"}
    }
}

# Update existing products with official pricing & rich description
for p in existing_products:
    pid = p["id"]
    if pid in existing_official:
        info = existing_official[pid]
        p["officialPrice"] = info["officialPrice"]
        p["officialSource"] = info["officialSource"]
        p["description"] = info["description"]
        p["specs"] = info["specs"]
    else:
        p["officialPrice"] = f"NPR {p.get('originalPrice', p['plans'][0]['price'] * 2):,}"
        p["officialSource"] = "official website"
        p["description"] = f"{p['name']} is available in Nepal through DigiPatro with instant delivery and full warranty."
        p["specs"] = {"Delivery": "10–30 Minutes", "Warranty": "100% Replacement Warranty", "Payment": "eSewa, Khalti, Fonepay QR"}

# Load the new Toolsmandu items from parse_toolsmandu.py
import parse_toolsmandu
new_categories_data = parse_toolsmandu.categories_raw

slug_seen = {p["id"] for p in existing_products}

new_products_to_add = []

for cat in new_categories_data:
    cat_id = cat["id"]
    for item in cat["items"]:
        name = item["name"]
        # Generate slug
        slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
        if slug in slug_seen:
            slug = f"{slug}-toolsmandu"
        slug_seen.add(slug)
        
        orig_p = item["plans"][0]["originalPrice"] if item["plans"] else item["price"] * 2
        
        new_prod = {
            "id": slug,
            "name": name,
            "category": cat_id,
            "color": item["color"],
            "mono": item["mono"],
            "tag": "VERIFIED",
            "blurb": item["blurb"],
            "discount": f"{round((1 - item['price'] / orig_p) * 100)}% OFF" if orig_p > item["price"] else "BEST VALUE",
            "originalPrice": orig_p,
            "officialPrice": item["officialPrice"],
            "officialSource": item["officialSource"],
            "description": f"{name} is an essential tool in {cat['label']}. {item['blurb']} DigiPatro delivers genuine credentials and licenses directly to your WhatsApp with full replacement warranty and local Nepali payment (eSewa, Khalti, Fonepay QR, Bank Transfer).",
            "features": item["features"],
            "specs": {
                "License Type": item["type"],
                "Delivery Time": "10–30 Minutes via WhatsApp",
                "Official Source": item["officialSource"],
                "Warranty": "100% Active Duration Replacement",
                "Payment": "eSewa, Khalti, Fonepay QR, Bank Transfer"
            },
            "popular": False,
            "featured": False,
            "plans": item["plans"]
        }
        new_products_to_add.append(new_prod)

all_products = existing_products + new_products_to_add

# Categories definition
# Count products per category
cat_counts = {}
for p in all_products:
    c = p["category"]
    cat_counts[c] = cat_counts.get(c, 0) + 1

categories_master = [
    {"id": "all", "label": f"All ({len(all_products)})"},
    {"id": "streaming", "label": f"OTT & Streaming ({cat_counts.get('streaming', 0)})"},
    {"id": "ai", "label": f"AI Tools ({cat_counts.get('ai', 0)})"},
    {"id": "cloud", "label": f"Cloud Services ({cat_counts.get('cloud', 0)})"},
    {"id": "academic", "label": f"Academic Tools ({cat_counts.get('academic', 0)})"},
    {"id": "security", "label": f"Antivirus & Security ({cat_counts.get('security', 0)})"},
    {"id": "creative", "label": f"Graphics & Creative ({cat_counts.get('creative', 0)})"},
    {"id": "software", "label": f"Software & Licenses ({cat_counts.get('software', 0)})"},
    {"id": "learning", "label": f"Learning & Education ({cat_counts.get('learning', 0)})"},
    {"id": "developer", "label": f"Developer Tools ({cat_counts.get('developer', 0)})"},
    {"id": "productivity", "label": f"Productivity ({cat_counts.get('productivity', 0)})"},
    {"id": "utilities", "label": f"Utilities & Tools ({cat_counts.get('utilities', 0)})"},
    {"id": "music", "label": f"Music ({cat_counts.get('music', 0)})"}
]

print(f"Total products now: {len(all_products)}")
for c in categories_master:
    print(f"- {c['label']} (id: {c['id']})")

# Write out the new data.js file
header_part = text[:text.find("window.CATEGORIES = [")]
new_categories_json = json.dumps(categories_master, indent=2)
new_products_json = json.dumps(all_products, indent=2)

footer_idx = text.find("window.FAQS = [")
footer_part = text[footer_idx:]

new_data_js = f"{header_part}window.CATEGORIES = {new_categories_json};\n\nwindow.PRODUCTS = {new_products_json};\n\n{footer_part}"

with open("assets/js/data.js", "w") as f:
    f.write(new_data_js)

print("assets/js/data.js written successfully!")
