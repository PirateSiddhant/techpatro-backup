import json, re

categories_raw = [
    {
        "id": "cloud",
        "label": "Cloud & Communication",
        "items": [
            {
                "name": "Google One",
                "price": 1000,
                "type": "Global · Personal",
                "blurb": "Expanded cloud storage for Google Drive, Gmail & Photos with magic editing features.",
                "officialPrice": "USD $19.99/yr (~NPR 2,700)",
                "officialSource": "one.google.com",
                "features": ["100 GB / 200 GB Cloud Storage", "Magic Editor & Google Photos Features", "Family Sharing (Up to 5 members)", "Google Experts Support", "VPN & Dark Web Monitoring"],
                "color": "#4285F4",
                "mono": "G1",
                "plans": [{"label": "100 GB · 1 Year Personal", "price": 1000, "originalPrice": 2700}, {"label": "200 GB · 1 Year Personal", "price": 1800, "originalPrice": 4200}]
            },
            {
                "name": "Microsoft OneDrive",
                "price": 3500,
                "type": "Global · Account",
                "blurb": "Dedicated 1 TB cloud storage with seamless Windows PC and Office syncing.",
                "officialPrice": "USD $69.99/yr (~NPR 9,400)",
                "officialSource": "microsoft.com/onedrive",
                "features": ["1 TB Secure Cloud Storage", "Ransomware Detection & Recovery", "Personal Vault Protection", "Anywhere Access & Offline Folders", "Sync across Windows, Mac, iOS, Android"],
                "color": "#0078D4",
                "mono": "OD",
                "plans": [{"label": "1 TB · 1 Year Account", "price": 3500, "originalPrice": 9400}]
            },
            {
                "name": "Zoom Pro",
                "price": 3000,
                "type": "Global · Personal",
                "blurb": "Premium video conferencing removing the 40-minute limit for up to 100+ attendees.",
                "officialPrice": "USD $13.32/mo (~NPR 1,800/mo, NPR 21,500/yr)",
                "officialSource": "zoom.us",
                "features": ["Host up to 100 Participants", "Unlimited Group Meetings (up to 30h)", "5 GB Cloud Storage for Recordings", "Automated Meeting Captions & Summary", "Whiteboard & Advanced Reporting"],
                "color": "#2D8CFF",
                "mono": "ZM",
                "plans": [{"label": "1 Month · Pro Personal", "price": 3000, "originalPrice": 4500}, {"label": "1 Year · Pro Personal", "price": 14000, "originalPrice": 22000}]
            },
            {
                "name": "Titan Mail",
                "price": 3500,
                "type": "Global · Account",
                "blurb": "Professional custom-domain business email suite with email tracking and calendar.",
                "officialPrice": "USD $24.00/yr (~NPR 3,250 - 6,500)",
                "officialSource": "titan.email",
                "features": ["Custom Business Domain Email", "Read Receipts & Open Tracking", "Send Later & Email Templates", "Integrated Calendar & Contacts", "Advanced Anti-Spam & Security"],
                "color": "#185ADB",
                "mono": "TM",
                "plans": [{"label": "1 Year · Professional Business Mail", "price": 3500, "originalPrice": 6500}]
            },
            {
                "name": "Google Meet Enterprise",
                "price": 8000,
                "type": "Global · Account",
                "blurb": "Enterprise-grade HD video meetings with noise cancellation, recording & breakout rooms.",
                "officialPrice": "USD $18.00/user/mo (~NPR 29,000/yr)",
                "officialSource": "workspace.google.com/meet",
                "features": ["Up to 500 Participants per Meeting", "Cloud Recording direct to Google Drive", "Noise Cancellation & In-meeting Polling", "Breakout Rooms & Live Streaming", "Domain-wide Admin Security Controls"],
                "color": "#00897B",
                "mono": "GM",
                "plans": [{"label": "1 Year · Enterprise Account", "price": 8000, "originalPrice": 29000}]
            }
        ]
    },
    {
        "id": "academic",
        "label": "Academic & Research",
        "items": [
            {
                "name": "Grammarly Premium",
                "price": 500,
                "type": "Global · Account",
                "blurb": "Real-time grammar, tone suggestions, clarity rewrites and plagiarism detector.",
                "officialPrice": "USD $144.00/yr (~NPR 19,500)",
                "officialSource": "grammarly.com",
                "features": ["Full Sentence Clarity Rewrites", "Plagiarism Checker against 16B pages", "Tone & Formality Adjustments", "Vocabulary Enhancement", "GrammarlyGO AI Assistant"],
                "color": "#15C39A",
                "mono": "GR",
                "plans": [{"label": "1 Month · Premium Account", "price": 500, "originalPrice": 1800}, {"label": "3 Months · Premium Account", "price": 1200, "originalPrice": 4500}, {"label": "1 Year · Premium Account", "price": 2800, "originalPrice": 19500}]
            },
            {
                "name": "Quillbot Premium",
                "price": 500,
                "type": "Global · Shared",
                "blurb": "Leading AI paraphrasing tool with unlimited modes, summarizer, and citation builder.",
                "officialPrice": "USD $49.95/yr (~NPR 6,700)",
                "officialSource": "quillbot.com",
                "features": ["Unlimited Words in Paraphraser", "Custom & All 9 Paraphrasing Modes", "Freeze Words & Synonym Slider", "AI Detector & Plagiarism Scanner", "Citation Generator (APA, MLA, Chicago)"],
                "color": "#4FA65B",
                "mono": "QB",
                "plans": [{"label": "1 Month · Shared Account", "price": 500, "originalPrice": 1200}, {"label": "6 Months · Shared Account", "price": 1500, "originalPrice": 3500}, {"label": "1 Year · Shared Account", "price": 2500, "originalPrice": 6700}]
            },
            {
                "name": "Stealth Writer",
                "price": 2500,
                "type": "Global · Shared",
                "blurb": "Advanced AI text humanizer to rewrite and bypass Turnitin, GPTZero & Originality.",
                "officialPrice": "USD $20.00/mo (~NPR 2,700/mo)",
                "officialSource": "stealthwriter.ai",
                "features": ["Ninja & Ghost Humanizer Engine", "Bypass Turnitin, CopyLeaks & GPTZero", "Maintains Original Meaning & Flow", "Built-in AI Detector", "SEO Optimized Natural Phrasing"],
                "color": "#3B82F6",
                "mono": "SW",
                "plans": [{"label": "1 Month · Shared Access", "price": 2500, "originalPrice": 3500}]
            },
            {
                "name": "Paperpal Premium",
                "price": 2000,
                "type": "Global · Account",
                "blurb": "Academic AI writing assistant tailored for scientific papers, journal submissions & citations.",
                "officialPrice": "USD $119.00/yr (~NPR 16,000)",
                "officialSource": "paperpal.com",
                "features": ["Journal-ready Language Editing", "Academic Vocabulary Suggestions", "Direct Manuscript Submission Check", "Citation & Reference Verification", "MS Word & Web Extension Integration"],
                "color": "#6366F1",
                "mono": "PP",
                "plans": [{"label": "1 Month · Premium Account", "price": 2000, "originalPrice": 3000}, {"label": "1 Year · Premium Account", "price": 6500, "originalPrice": 16000}]
            },
            {
                "name": "Jenni AI",
                "price": 3000,
                "type": "Global · Account",
                "blurb": "AI research writing assistant with literature search, automated in-text citations & outlines.",
                "officialPrice": "USD $144.00/yr (~NPR 19,500)",
                "officialSource": "jenni.ai",
                "features": ["Automated In-text Citations (APA, Harvard, etc.)", "AI Autocomplete tailored to research", "Library & PDF Chat for literature review", "Plagiarism Checker included", "Export to LaTeX & MS Word"],
                "color": "#8B5CF6",
                "mono": "JA",
                "plans": [{"label": "1 Month · Unlimited Plan", "price": 3000, "originalPrice": 4500}]
            },
            {
                "name": "HIX AI Bypass",
                "price": 2000,
                "type": "Global · Shared",
                "blurb": "Undetectable AI bypass tool converting generated drafts into human-like academic text.",
                "officialPrice": "USD $19.99/mo (~NPR 2,700)",
                "officialSource": "hix.ai",
                "features": ["100% Undetectable AI Rewriter", "Bypasses Winston AI, ZeroGPT, Turnitin", "Flawless Grammar & Vocabulary", "Multiple Humanizer Modes", "Preserves Core Context & Facts"],
                "color": "#EC4899",
                "mono": "HX",
                "plans": [{"label": "1 Month · Shared Account", "price": 2000, "originalPrice": 3200}]
            },
            {
                "name": "AI & Plagiarism Checker",
                "price": 1200,
                "type": "Global · Account",
                "blurb": "Deep scanner checking similarity across academic databases and identifying AI text patterns.",
                "officialPrice": "USD $30.00/pack (~NPR 4,000)",
                "officialSource": "turnitin.com / copyleaks.com",
                "features": ["Billion-page Web & Scholarly Index", "Detailed Similarity Percentage Report", "Sentence-by-sentence Source Highlighting", "AI Writing Probability Score", "Safe Non-repository File Scanning"],
                "color": "#10B981",
                "mono": "PC",
                "plans": [{"label": "1 Month · Account Access", "price": 1200, "originalPrice": 3000}]
            },
            {
                "name": "Scribd Premium",
                "price": 1000,
                "type": "Global · Shared",
                "blurb": "Digital reading library with millions of ebooks, audiobooks, academic papers & documents.",
                "officialPrice": "USD $11.99/mo (~NPR 1,600/mo, NPR 19,000/yr)",
                "officialSource": "scribd.com",
                "features": ["Millions of Ebooks & Best-sellers", "Audiobooks with offline listening", "Academic Papers & Research Documents", "Sheet Music & Magazine Archive", "Available on Web, iOS & Android"],
                "color": "#F59E0B",
                "mono": "SC",
                "plans": [{"label": "1 Month · Shared Account", "price": 1000, "originalPrice": 1600}, {"label": "6 Months · Shared Account", "price": 2800, "originalPrice": 9600}]
            }
        ]
    },
    {
        "id": "security",
        "label": "Antivirus & Security",
        "items": [
            {
                "name": "Bitdefender Total Security",
                "price": 1800,
                "type": "Global · Key",
                "blurb": "Multi-layered real-time ransomware and malware protection with minimal PC impact.",
                "officialPrice": "USD $49.99/yr (~NPR 6,700)",
                "officialSource": "bitdefender.com",
                "features": ["Complete Real-Time Data Protection", "Multi-Layer Ransomware Defense", "Network Threat Prevention", "Microphone & Webcam Shield", "Built-in VPN & Parental Control"],
                "color": "#E11D48",
                "mono": "BD",
                "plans": [{"label": "1 Year · 1 Device License Key", "price": 1800, "originalPrice": 6700}, {"label": "1 Year · 3 Devices License Key", "price": 3200, "originalPrice": 11000}]
            },
            {
                "name": "ESET Internet Security",
                "price": 3000,
                "type": "Global · Key",
                "blurb": "Legendary ultra-fast proactive antivirus defense engineered for power users and gamers.",
                "officialPrice": "USD $49.99/yr (~NPR 6,700)",
                "officialSource": "eset.com",
                "features": ["Legendary NOD32 Antivirus Engine", "Gamer Mode with Zero Popups", "Banking & Payment Protection", "Network Inspector & Botnet Shield", "Ultra-low CPU & RAM Usage"],
                "color": "#0D9488",
                "mono": "ES",
                "plans": [{"label": "1 Year · Genuine Retail Key", "price": 3000, "originalPrice": 6700}]
            },
            {
                "name": "Norton 360 Security",
                "price": 1800,
                "type": "Global · Key",
                "blurb": "All-in-one cyber safety with smart firewall, cloud backup, and dark web monitoring.",
                "officialPrice": "USD $49.99/yr (~NPR 6,700)",
                "officialSource": "norton.com",
                "features": ["Real-time Antivirus & Spyware Protection", "Smart Firewall for PC/Mac", "Secure VPN included", "Password Manager included", "PC Cloud Backup (10 GB+)"],
                "color": "#FBBF24",
                "mono": "NT",
                "plans": [{"label": "1 Year · Digital Key", "price": 1800, "originalPrice": 6700}]
            },
            {
                "name": "Kaspersky Internet Security",
                "price": 1500,
                "type": "Nepal · Key",
                "blurb": "Award-winning protection against trojans, rootkits, cryptojackers and phishing links.",
                "officialPrice": "NPR 3,200/yr",
                "officialSource": "kaspersky.com",
                "features": ["Proactive Virus & Worms Removal", "Safe Money Secure Browser", "Anti-Phishing & Anti-Spam", "Private Browsing & Ad Blocker", "Two-way Firewall"],
                "color": "#059669",
                "mono": "KS",
                "plans": [{"label": "1 Year · Nepal Genuine Key", "price": 1500, "originalPrice": 3200}]
            },
            {
                "name": "AVG Internet Security",
                "price": 3000,
                "type": "Global · Key",
                "blurb": "Advanced threat defense with webcam protection, ransomware shield, and payment guard.",
                "officialPrice": "USD $46.99/yr (~NPR 6,300)",
                "officialSource": "avg.com",
                "features": ["Advanced Antivirus & Spyware Engine", "Ransomware Protection Shield", "Webcam Hijack Protection", "Fake Website / Phishing Defense", "Enhanced Firewall"],
                "color": "#EA580C",
                "mono": "AV",
                "plans": [{"label": "1 Year · Genuine Key", "price": 3000, "originalPrice": 6300}]
            },
            {
                "name": "McAfee Total Protection",
                "price": 2500,
                "type": "Global · Key",
                "blurb": "Comprehensive security suite combining antivirus, identity monitoring, and privacy VPN.",
                "officialPrice": "USD $39.99/yr (~NPR 5,400)",
                "officialSource": "mcafee.com",
                "features": ["Award-Winning Antivirus Engine", "Unlimited Device Security", "Identity Theft Monitoring", "Secure VPN included", "File Shredder & Password Keeper"],
                "color": "#DC2626",
                "mono": "MC",
                "plans": [{"label": "1 Year · Total Protection Key", "price": 2500, "originalPrice": 5400}]
            }
        ]
    },
    {
        "id": "creative",
        "label": "Creative & Design",
        "items": [
            {
                "name": "Adobe Creative Cloud",
                "price": 2200,
                "type": "Global · Account",
                "blurb": "Full suite access to 20+ Adobe creative apps including Photoshop, Illustrator, Premiere Pro.",
                "officialPrice": "USD $59.99/mo (~NPR 8,100/mo, NPR 97,000/yr)",
                "officialSource": "adobe.com/creativecloud",
                "features": ["20+ Desktop & Mobile Creative Apps", "Photoshop, Illustrator, Premiere & After Effects", "100 GB Cloud Storage included", "Adobe Fonts & Stock Integration", "Generative Firefly AI Credits"],
                "color": "#FF0000",
                "mono": "CC",
                "plans": [{"label": "1 Month · All Apps Account", "price": 2200, "originalPrice": 8100}, {"label": "3 Months · All Apps Account", "price": 5500, "originalPrice": 24000}, {"label": "1 Year · All Apps Account", "price": 16000, "originalPrice": 97000}]
            },
            {
                "name": "Envato Elements",
                "price": 1200,
                "type": "Global · Mixed",
                "blurb": "Unlimited downloads of stock video, music, website templates, graphic mockups & fonts.",
                "officialPrice": "USD $16.50/mo (~NPR 2,200/mo, NPR 26,000/yr)",
                "officialSource": "elements.envato.com",
                "features": ["Unlimited Downloads of Millions of Assets", "Stock Video, Music & Sound Effects", "WordPress Themes & Graphic Templates", "Commercial Lifetime License per download", "Fonts, 3D Assets & Presentation Slides"],
                "color": "#81B441",
                "mono": "EE",
                "plans": [{"label": "1 Month · Unlimited Download Access", "price": 1200, "originalPrice": 2200}, {"label": "3 Months · Unlimited Download Access", "price": 3200, "originalPrice": 6600}]
            },
            {
                "name": "Adobe Photography Plan",
                "price": 6000,
                "type": "Global · Personal",
                "blurb": "Specialized photo editing package with Photoshop, Lightroom, Lightroom Classic & Cloud.",
                "officialPrice": "USD $119.88/yr (~NPR 16,200)",
                "officialSource": "adobe.com/photography",
                "features": ["Photoshop on Desktop & iPad", "Lightroom & Lightroom Classic", "20 GB Cloud Storage for Photos", "Adobe Portfolio Website", "Generative AI Firefly Support"],
                "color": "#31A8FF",
                "mono": "LR",
                "plans": [{"label": "1 Year · Photography Personal Plan", "price": 6000, "originalPrice": 16200}]
            },
            {
                "name": "CorelDRAW Graphics Suite",
                "price": 2500,
                "type": "Global · Account",
                "blurb": "Professional vector illustration, layout, and photo editing software for designers.",
                "officialPrice": "USD $249.00/yr (~NPR 33,600)",
                "officialSource": "coreldraw.com",
                "features": ["CorelDRAW Vector Illustration", "Corel PHOTO-PAINT Image Editing", "Typography & Font Management", "Non-destructive Bitmap Effects", "Print & Signmaking Production Ready"],
                "color": "#76BC21",
                "mono": "CD",
                "plans": [{"label": "1 Year · Full Graphics Suite", "price": 2500, "originalPrice": 33600}]
            }
        ]
    },
    {
        "id": "learning",
        "label": "Learning & Education",
        "items": [
            {
                "name": "Udemy Personal Plan",
                "price": 2200,
                "type": "Global · Account",
                "blurb": "Unlimited access to 11,000+ top-rated video courses on coding, business, IT and marketing.",
                "officialPrice": "USD $30.00/mo (~NPR 4,000/mo)",
                "officialSource": "udemy.com",
                "features": ["11,000+ Top-Rated Courses across All Fields", "Hands-on Coding Exercises & Practice Tests", "Certificates of Course Completion", "Offline Mobile App Access", "Monthly Fresh Content Additions"],
                "color": "#A435F0",
                "mono": "UD",
                "plans": [{"label": "1 Month · All-Course Access", "price": 2200, "originalPrice": 4000}]
            },
            {
                "name": "Skillshare Premium",
                "price": 1000,
                "type": "Global · Account",
                "blurb": "Creative learning community covering illustration, animation, video production & design.",
                "officialPrice": "USD $168.00/yr (~NPR 22,600)",
                "officialSource": "skillshare.com",
                "features": ["30,000+ Creative Masterclasses", "Project-based Interactive Learning", "Offline Video Downloads on Mobile", "Feedback from Professional Creators", "Ad-free High Quality Streaming"],
                "color": "#00FF84",
                "mono": "SS",
                "plans": [{"label": "1 Month · Premium Account", "price": 1000, "originalPrice": 2500}, {"label": "1 Year · Premium Account", "price": 4500, "originalPrice": 22600}]
            },
            {
                "name": "LinkedIn Learning",
                "price": 12000,
                "type": "Global · Account",
                "blurb": "Professional career development library with recognized completion badges & certifications.",
                "officialPrice": "USD $239.88/yr (~NPR 32,400)",
                "officialSource": "linkedin.com/learning",
                "features": ["20,000+ Expert-led Career Courses", "Shareable Certifications directly on LinkedIn", "Includes Full LinkedIn Premium Career", "Learning Paths for Engineering & Management", "Exercise Files & Project Repos"],
                "color": "#0A66C2",
                "mono": "LL",
                "plans": [{"label": "1 Year · Full Learning + Premium", "price": 12000, "originalPrice": 32400}]
            },
            {
                "name": "6000+ Kids Worksheets Bundle",
                "price": 600,
                "type": "Global · Account",
                "blurb": "Comprehensive printable learning bundle covering math, phonics, cursive & activity sheets.",
                "officialPrice": "USD $29.00 (~NPR 3,900)",
                "officialSource": "curriculum-store",
                "features": ["6,000+ High-Resolution Printable Pages", "Math, Phonics, English & Logic Puzzles", "Preschool to Grade 5 Levels", "Instant Google Drive Lifetime Access", "Unlimited Reprinting Rights for Parents & Tutors"],
                "color": "#F43F5E",
                "mono": "KW",
                "plans": [{"label": "Lifetime · Complete Digital Pack", "price": 600, "originalPrice": 3900}]
            }
        ]
    },
    {
        "id": "developer",
        "label": "Developer & Coding",
        "items": [
            {
                "name": "JetBrains All Products Pack",
                "price": 3000,
                "type": "Global · Account",
                "blurb": "Complete developer suite including IntelliJ IDEA, PyCharm, WebStorm, PhpStorm & CLion.",
                "officialPrice": "USD $289.00/yr (~NPR 39,000)",
                "officialSource": "jetbrains.com",
                "features": ["All 16+ JetBrains Professional IDEs", "IntelliJ IDEA Ultimate, PyCharm & WebStorm", "PhpStorm, GoLand, CLion, Rider & DataGrip", "Full Database Tools & Profilers", "Offline & Remote Development Support"],
                "color": "#000000",
                "mono": "JB",
                "plans": [{"label": "1 Year · All Products Pack", "price": 3000, "originalPrice": 39000}]
            },
            {
                "name": "DataCamp Premium",
                "price": 2000,
                "type": "Global · Personal",
                "blurb": "Hands-on data science & AI learning platform covering Python, SQL, R, and PowerBI.",
                "officialPrice": "USD $149.00/yr (~NPR 20,000)",
                "officialSource": "datacamp.com",
                "features": ["400+ Interactive Data & AI Courses", "In-browser Coding Sandbox (No setup)", "Career Tracks for Data Analyst & ML Engineer", "Certifications recognized by tech employers", "Unlimited Practice Coding Challenges"],
                "color": "#03EF62",
                "mono": "DC",
                "plans": [{"label": "1 Month · Premium Access", "price": 2000, "originalPrice": 3500}, {"label": "1 Year · Premium Access", "price": 6500, "originalPrice": 20000}]
            },
            {
                "name": "Educative.io Unlimited",
                "price": 2000,
                "type": "Global · Personal",
                "blurb": "Text-based, interactive software engineering & system design courses with embedded terminals.",
                "officialPrice": "USD $199.00/yr (~NPR 26,800)",
                "officialSource": "educative.io",
                "features": ["System Design & Coding Interview Prep (Grokking)", "Interactive In-browser Code Execution", "No Video Scrubbing: 2x Faster Learning", "Certificates & Guided Learning Roadmaps", "Cloud Labs & Real Dev Environments"],
                "color": "#0B5FFF",
                "mono": "ED",
                "plans": [{"label": "1 Month · Unlimited Access", "price": 2000, "originalPrice": 3500}, {"label": "1 Year · Unlimited Access", "price": 6000, "originalPrice": 26800}]
            },
            {
                "name": "Codedex Club",
                "price": 3000,
                "type": "Global · Personal",
                "blurb": "Gamified RPG-style coding adventure teaching Python, HTML/CSS, JavaScript & React.",
                "officialPrice": "USD $99.00/yr (~NPR 13,300)",
                "officialSource": "codedex.io",
                "features": ["Interactive Pixel Art Story Quests", "Python, Web Dev, SQL & React Journeys", "Monthly Hackathons & Community Review", "Badges, Certificates & Portfolio Projects", "Fun & Beginner-friendly Curriculum"],
                "color": "#FF5722",
                "mono": "CX",
                "plans": [{"label": "1 Year · Club Membership", "price": 3000, "originalPrice": 13300}]
            },
            {
                "name": "GitHub Student Developer Pack",
                "price": 5000,
                "type": "Global · Account",
                "blurb": "Massive bundle of free cloud credits, domain names, Canva Pro, JetBrains & dev tools.",
                "officialPrice": "Free for Students / Valued at $200k+",
                "officialSource": "education.github.com",
                "features": ["DigitalOcean & Microsoft Azure Cloud Credits", "Free .me Domain Registration for 1 Year", "GitHub Copilot Free Access", "JetBrains All IDEs Free Subscription", "Frontend Masters, Namecheap, Stripe perks"],
                "color": "#24292E",
                "mono": "GH",
                "plans": [{"label": "1 Year · Verified Student Account", "price": 5000, "originalPrice": 15000}]
            }
        ]
    },
    {
        "id": "utilities",
        "label": "Utilities & Tools",
        "items": [
            {
                "name": "Adobe Acrobat Pro",
                "price": 3000,
                "type": "Global · Account",
                "blurb": "Industry standard for editing PDF text, signing, organizing, OCR scan and Word conversion.",
                "officialPrice": "USD $239.88/yr (~NPR 32,400)",
                "officialSource": "adobe.com/acrobat",
                "features": ["Edit Text & Images directly inside PDFs", "Convert PDF to Word, Excel, PowerPoint", "Send & Collect Legally Binding E-Signatures", "OCR Optical Recognition for Scanned Documents", "Password Protect & Redact Sensitive Data"],
                "color": "#FF0000",
                "mono": "AP",
                "plans": [{"label": "1 Year · Full Pro Account", "price": 3000, "originalPrice": 32400}]
            },
            {
                "name": "Nitro PDF Pro",
                "price": 2500,
                "type": "Global · Account",
                "blurb": "Powerful desktop PDF creator, editor, converter and digital signing platform.",
                "officialPrice": "USD $179.99 (~NPR 24,000)",
                "officialSource": "gonitro.com",
                "features": ["Fast PDF Editing & Page Extraction", "Seamless Conversion to MS Office", "Fillable Forms & Digital Signature Stamp", "OCR Text Conversion in 20+ Languages", "Lightweight on System Resources"],
                "color": "#FF6B00",
                "mono": "NP",
                "plans": [{"label": "Lifetime · Pro Retail License", "price": 2500, "originalPrice": 24000}]
            },
            {
                "name": "Truecaller Premium",
                "price": 3500,
                "type": "Global · Personal",
                "blurb": "Caller ID with advanced spam call & SMS blocking, who viewed my profile and zero ads.",
                "officialPrice": "USD $29.90/yr (~NPR 4,000)",
                "officialSource": "truecaller.com",
                "features": ["Live Caller ID Identification", "Advanced Auto-Spam Call & Robocall Blocker", "Incognito View Profiles Without Alerts", "Who Viewed My Profile Tracker", "Ad-free Clean Interface & Premium Badge"],
                "color": "#0087FF",
                "mono": "TC",
                "plans": [{"label": "1 Year · Premium Personal Plan", "price": 3500, "originalPrice": 4000}]
            },
            {
                "name": "EaseUS Data Recovery Pro",
                "price": 5500,
                "type": "Global · Account",
                "blurb": "Recovers permanently deleted, formatted or corrupted files, photos & partitions.",
                "officialPrice": "USD $69.95/mo (~NPR 9,400/mo, NPR 19,000/yr)",
                "officialSource": "easeus.com",
                "features": ["Recover 1,000+ File Formats (Docs, Video, Audio)", "Deep Scan for Formatted & RAW Drives", "Partition Loss & Crash System Recovery", "Preview Files before Recovery", "Supports HDD, SSD, USB & SD Cards"],
                "color": "#00A4E4",
                "mono": "EU",
                "plans": [{"label": "1 Year · Pro License", "price": 5500, "originalPrice": 19000}]
            },
            {
                "name": "CCleaner Professional",
                "price": 2200,
                "type": "Global · Account",
                "blurb": "Automated PC speed optimization, junk cleaner, driver updater and privacy protection.",
                "officialPrice": "USD $29.95/yr (~NPR 4,000)",
                "officialSource": "ccleaner.com",
                "features": ["Driver Updater for 50M+ PC Drivers", "PC Health Check & Junk Cleaner", "Automatic Browser History & Tracker Purge", "Software Updater & Registry Optimizer", "Boosts Startup & System Performance"],
                "color": "#E63946",
                "mono": "CC",
                "plans": [{"label": "1 Year · Pro Account", "price": 2200, "originalPrice": 4000}]
            },
            {
                "name": "CleanMyMac X",
                "price": 5000,
                "type": "Global · Account",
                "blurb": "Award-winning Mac cleaner, RAM booster, malware scanner and software uninstaller.",
                "officialPrice": "USD $39.95/yr (~NPR 5,400)",
                "officialSource": "macpaw.com/cleanmymac",
                "features": ["Clean Tens of Gigabytes of System Junk", "Speed Up RAM & Run Maintenance Scripts", "Detect & Remove Mac-specific Malware", "Completely Uninstall Unwanted Apps", "Space Lens Visual Storage Analyzer"],
                "color": "#F72585",
                "mono": "CM",
                "plans": [{"label": "1 Year · License for Mac", "price": 5000, "originalPrice": 5400}]
            },
            {
                "name": "Internet Download Manager (IDM)",
                "price": 2500,
                "type": "Global · Account",
                "blurb": "Accelerates download speeds up to 5x with resume capability and browser integration.",
                "officialPrice": "USD $24.95 (~NPR 3,400)",
                "officialSource": "internetdownloadmanager.com",
                "features": ["Up to 5x Faster Download Speeds", "Resume Broken / Interrupted Downloads", "Automatic Video Grabber from Websites", "Supports Chrome, Firefox, Edge & Brave", "Built-in Antivirus Download Check"],
                "color": "#1E88E5",
                "mono": "ID",
                "plans": [{"label": "Lifetime · Genuine License", "price": 2500, "originalPrice": 3400}]
            },
            {
                "name": "Autodesk Apps Suite",
                "price": 2000,
                "type": "Global · Account",
                "blurb": "Professional 3D design and engineering software suite including AutoCAD, Revit, 3ds Max.",
                "officialPrice": "USD $1,975/yr (~NPR 266,000)",
                "officialSource": "autodesk.com",
                "features": ["AutoCAD 2D/3D Architecture Software", "Revit BIM Modeling Software", "3ds Max & Maya 3D Animation & Rendering", "Full Cloud Collaboration & Drawing Tools", "Official Autodesk Student / Education License"],
                "color": "#0696D7",
                "mono": "AD",
                "plans": [{"label": "1 Year · Education/Pro Account", "price": 2000, "originalPrice": 266000}]
            },
            {
                "name": "Speechelo Pro",
                "price": 2000,
                "type": "Global · Account",
                "blurb": "Realistic AI voice generator creating human-sounding voiceovers in 30+ languages.",
                "officialPrice": "USD $97.00 (~NPR 13,000)",
                "officialSource": "speechelo.com",
                "features": ["Transform Any Text into Realistic Voiceover", "30+ Languages with Male & Female Voices", "Inflections: Normal, Joyful & Serious tones", "Export to High Quality MP3 format", "Commercial Video Rights included"],
                "color": "#9C27B0",
                "mono": "SP",
                "plans": [{"label": "Lifetime · Pro Tier Access", "price": 2000, "originalPrice": 13000}]
            },
            {
                "name": "1Password Premium",
                "price": 2000,
                "type": "Global · Account",
                "blurb": "Military-grade password keeper for logins, 2FA codes, credit cards and secure notes.",
                "officialPrice": "USD $35.88/yr (~NPR 4,800)",
                "officialSource": "1password.com",
                "features": ["Unlimited Passwords & Sensitive Items", "Integrated Two-Factor (2FA) Authenticator", "Watchtower Alert for Compromised Passwords", "Travel Mode & Biometric Unlock", "Available on Mac, Windows, iOS, Android"],
                "color": "#0A85EA",
                "mono": "1P",
                "plans": [{"label": "1 Year · Premium Account", "price": 2000, "originalPrice": 4800}]
            },
            {
                "name": "Dashlane Password Manager",
                "price": 1000,
                "type": "Global · Account",
                "blurb": "Encrypted credential keeper with automatic autofill, dark web alerts and password health.",
                "officialPrice": "USD $59.88/yr (~NPR 8,000)",
                "officialSource": "dashlane.com",
                "features": ["Unlimited Password Storage & Sync", "Dark Web Monitoring & Breach Alerts", "One-Click Instant Autofill", "Zero-Knowledge Encryption Architecture", "Built-in Hotspot Shield VPN"],
                "color": "#0E768C",
                "mono": "DL",
                "plans": [{"label": "1 Year · Premium Account", "price": 1000, "originalPrice": 8000}]
            },
            {
                "name": "ExpressVPN Premium",
                "price": 1500,
                "type": "Global · Key",
                "blurb": "Ultra-fast VPN with proprietary Lightway protocol across 105 countries with zero logs.",
                "officialPrice": "USD $99.95/yr (~NPR 13,500)",
                "officialSource": "expressvpn.com",
                "features": ["High-Speed Lightway Protocol", "Servers in 105 Countries Worldwide", "Best-in-class 256-bit AES Encryption", "Strict Audited No-Logs Policy", "Supports Windows, Mac, iOS, Android, Linux"],
                "color": "#DA291C",
                "mono": "EX",
                "plans": [{"label": "1 Month · Premium License", "price": 1500, "originalPrice": 3000}, {"label": "1 Year · Premium License", "price": 7500, "originalPrice": 13500}]
            }
        ]
    }
]

print("Category count:", len(categories_raw))
total_items = sum(len(c["items"]) for c in categories_raw)
print("Total new items prepared:", total_items)
