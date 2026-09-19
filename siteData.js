/**
 * Az Meer (SMC-Private) Limited - Complete Website Data & Ecosystem
 * Scraped and structured directly from https://azmeersmcpvtltd.nichesite.org/
 */

const SITE_DATA = {
    company: {
        name: "Az Meer(SMC-Private) Limited",
        shortName: "Az Meer Limited",
        legalName: "Az Meer (SMC-Private) Limited",
        tagline: "Empowering Businesses Through Digital Excellence",
        subtitle: "Innovating your digital future with world-class software development and strategic digital solutions.",
        founded: "2024",
        registration: "SMC-Private Limited",
        address: "Raiwind Road, Lahore, Pakistan",
        phones: ["+92 332 8657885", "+92 370 0602339"],
        email: "teamabhpk@gmail.com",
        officeHours: {
            weekdays: "Mon - Friday 09:00 AM - 06:00 PM",
            saturday: "Saturday 10:00 AM - 02:00 PM",
            sunday: "Sunday Closed"
        },
        stats: {
            projectsDelivered: "500+",
            clientSatisfaction: "98%",
            globalCountries: "20+",
            expertTechs: "15+",
            appDownloads: "10K+",
            avgRating: "4.8/5",
            activeApps: "3+",
            responseTime: "< 2h"
        },
        currencies: {
            USD: { symbol: "$", rate: 1.0, label: "USD ($)" },
            PKR: { symbol: "Rs ", rate: 278.5, label: "PKR (Rs)" },
            GBP: { symbol: "£", rate: 0.79, label: "GBP (£)" }
        }
    },

    services: [
        {
            id: "web-dev",
            title: "Web Development",
            category: "Web",
            icon: "fa-code",
            tag: "Popular",
            priceUSD: 499,
            description: "Modern, responsive websites and enterprise web applications that convert visitors into loyal customers.",
            features: [
                "Custom React/Vue/HTML5 Architecture",
                "Mobile-First Responsive Layouts",
                "SEO & Performance Optimization",
                "CMS & Backend API Integration",
                "High-Level Security Standards"
            ]
        },
        {
            id: "mobile-apps",
            title: "Mobile Applications",
            category: "Mobile",
            icon: "fa-mobile-screen-button",
            tag: "Featured",
            priceUSD: 799,
            description: "Native and cross-platform mobile apps for iOS and Android with seamless user experience and performance.",
            features: [
                "Flutter & Native Android/iOS",
                "Intuitive Glassmorphic UI/UX",
                "Offline Support & Push Notifications",
                "Play Store & App Store Publishing",
                "Real-Time Database Connectivity"
            ]
        },
        {
            id: "ui-ux",
            title: "UI/UX Design",
            category: "Design",
            icon: "fa-pen-nib",
            tag: "Creative",
            priceUSD: 349,
            description: "User-centric design systems, wireframes, and interactive prototypes crafted for max engagement.",
            features: [
                "Figma & Adobe XD Wireframing",
                "Interactive 3D & Micro-Interactions",
                "Design System & Style Guide",
                "Usability Testing & Accessibility",
                "Pixel-Perfect Hand-Off"
            ]
        },
        {
            id: "digital-marketing",
            title: "Digital Marketing",
            category: "Marketing",
            icon: "fa-bullhorn",
            tag: "Growth",
            priceUSD: 299,
            description: "Data-driven marketing strategies, SEO optimization, and social media campaigns designed to scale.",
            features: [
                "Technical & On-Page SEO Audits",
                "Social Media Strategy & Content",
                "PPC & Conversion Rate Optimization",
                "Brand Positioning & PR",
                "Monthly Performance Analytics"
            ]
        },
        {
            id: "cloud-solutions",
            title: "Cloud Solutions & DevOps",
            category: "Cloud",
            icon: "fa-cloud",
            tag: "Enterprise",
            priceUSD: 899,
            description: "Scalable cloud infrastructure, automated CI/CD pipelines, and microservices architecture.",
            features: [
                "AWS / Google Cloud Setup",
                "Docker & Kubernetes Orchestration",
                "CI/CD Pipeline Automation",
                "Zero Downtime Deployment",
                "24/7 Monitoring & Backups"
            ]
        },
        {
            id: "cyber-security",
            title: "Cyber Security & Audits",
            category: "Security",
            icon: "fa-shield-halved",
            tag: "Essential",
            priceUSD: 599,
            description: "Comprehensive vulnerability assessments, penetration testing, and cryptographic data protection.",
            features: [
                "Application Code Audits",
                "Penetration Testing & Assessment",
                "GDPR & Data Compliance Setup",
                "Encrypted Storage Systems",
                "Incident Response Planning"
            ]
        }
    ],

    topServices: [
        {
            id: "elite-enterprise",
            title: "Enterprise Portal Engineering",
            category: "Enterprise",
            priceUSD: 2499,
            badge: "Elite Tier",
            speed: "Accelerated Priority",
            features: [
                "Dedicated Lead Architect & Senior Devs",
                "Custom AI Core & Analytics Engine",
                "Enterprise Security & SSO Integration",
                "Multi-Tenant Database Architecture",
                "24/7 VIP Direct Support & SLA"
            ],
            standardDiff: "Lead Architects vs Verified Devs | Priority Scheduling | Dedicated PM"
        },
        {
            id: "elite-devops",
            title: "Full-Stack DevOps Pipeline",
            category: "Infrastructure",
            priceUSD: 1899,
            badge: "Top Tier",
            speed: "Priority 48-Hour Setup",
            features: [
                "Multi-Cloud Automated Infrastructure",
                "Kubernetes Cluster Auto-Scaling",
                "Zero-Trust Security Protocols",
                "Real-time Telemetry & Anomaly Alerts",
                "Dedicated Infrastructure Manager"
            ],
            standardDiff: "Accelerated Pipeline | Automated Recovery | SLA Guarantee"
        },
        {
            id: "elite-ai-suite",
            title: "AI Integration & Automation Suite",
            category: "AI & ML",
            priceUSD: 1999,
            badge: "Innovative",
            speed: "Fast-Track Delivery",
            features: [
                "Custom LLM Fine-Tuning & RAG Setup",
                "Smart Workflow Automation Bots",
                "Predictive Analytics Dashboard",
                "API Gateway & Microservices",
                "Continuous Model Monitoring"
            ],
            standardDiff: "Tailored Model Training | Enterprise API Access | 24/7 Support"
        }
    ],

    portfolio: [
        {
            id: "enterprise-hub",
            title: "The Next-Gen Enterprise Hub",
            category: "Web Apps",
            client: "Global Logistics Leader",
            metrics: ["45% Increase in Operational Efficiency", "Zero Downtime Cloud Deployment", "Multi-platform Synchronization"],
            description: "A full-scale digital transformation project integrating AI-driven tracking, real-time analytics, and a seamless mobile experience for thousands of active enterprise users.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            tags: ["React", "Node.js", "AI Analytics", "AWS"]
        },
        {
            id: "fintech-pay",
            title: "FinTech Digital Wallet",
            category: "Mobile Apps",
            client: "PayGlobal Ltd",
            metrics: ["200K+ Active Users", "Bank-Grade Encryption", "Instant Multi-Currency Exchange"],
            description: "High-security mobile banking and digital wallet app built with Flutter and AES cryptographic protocols, providing instant cross-border payments.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
            tags: ["Flutter", "Cybersecurity", "Fintech", "AES-256"]
        },
        {
            id: "health-connect",
            title: "TeleHealth Care Portal",
            category: "UI/UX Design",
            client: "Medicare Network",
            metrics: ["99% Doctor Match Rate", "HIPAA Compliant", "Interactive 3D Anatomy Guides"],
            description: "User-friendly telemedicine portal connecting patients with certified specialists through secure video consultation and instant prescription delivery.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            tags: ["Figma UI/UX", "Telehealth", "WebRTC", "React"]
        },
        {
            id: "ecom-marketplace",
            title: "Omnichannel E-Commerce Hub",
            category: "Marketing",
            client: "TrendStyles Global",
            metrics: ["180% Sales Growth", "Top 1 SEO Ranking", "3.2x Campaign ROI"],
            description: "High-converting ecommerce platform coupled with automated social media marketing, SEO optimization, and personalized product recommendation algorithms.",
            image: "https://images.unsplash.com/photo-1556742049-0a67d848721c?auto=format&fit=crop&w=800&q=80",
            tags: ["Shopify/Node", "SEO Growth", "Digital Marketing", "Analytics"]
        }
    ],

    apps: [
        {
            id: "azcrypt",
            name: "AzCrypt",
            category: "Security & Tools",
            icon: "fa-lock-keyhole",
            downloads: "5,000+",
            rating: "4.9",
            playStoreUrl: "https://play.google.com/",
            description: "High-level encryption tool for securing your sensitive data with modern cryptographic algorithms. Protect your privacy with ease and military-grade encryption.",
            features: [
                "AES-256 & RSA Cryptographic Protocols",
                "Offline Safe Storage & Zero Cloud Logs",
                "Biometric Passcode Unlock",
                "Quick Share Encrypted Text & Files"
            ]
        },
        {
            id: "calculator",
            name: "Productivity Calculator",
            category: "Productivity",
            icon: "fa-calculator",
            downloads: "3,500+",
            rating: "4.8",
            playStoreUrl: "https://play.google.com/",
            description: "A versatile and elegant calculator designed for everyday & scientific use. Includes advanced mathematical functions, history logs, and sleek glass themes.",
            features: [
                "Standard & Scientific Calculation Modes",
                "Calculation History Log & Export",
                "Unit Converter (Currency, Length, Mass)",
                "Custom Themes & Glassmorphic UI"
            ]
        },
        {
            id: "sunflower-sim",
            name: "Sun Flower Simulator",
            category: "Simulation & Interactive",
            icon: "fa-sun",
            downloads: "2,000+",
            rating: "4.7",
            playStoreUrl: "https://play.google.com/",
            description: "An interactive relaxation and botanical simulation experience. Control sunlight, water growth cycles, and observe stunning 3D sunflower bloom physics.",
            features: [
                "Real-Time 3D Physics Simulation",
                "Relaxing Ambient Sounds & Visuals",
                "Weather & Sunlight Dynamics",
                "Interactive Growth Milestones"
            ]
        }
    ],

    team: [
        {
            name: "Azmeer Hussain",
            role: "Founder & Chief Executive Officer",
            bio: "Visionary tech leader with extensive experience driving software engineering, cloud solutions, and strategic digital transformations.",
            icon: "fa-user-gear",
            skills: ["Leadership", "Architecture", "Strategic Growth", "Product Strategy"]
        },
        {
            name: "Syed M. Ali",
            role: "Senior Full-Stack Lead Engineer",
            bio: "Specializes in scalable microservices, modern frontend frameworks, and high-performance cloud application architecture.",
            icon: "fa-code-branch",
            skills: ["React/Node.js", "Python/Django", "Cloud DevOps", "Database Systems"]
        },
        {
            name: "Ayesha Malik",
            role: "UI/UX Interaction Lead",
            bio: "Passionate about creating intuitive human-computer interfaces, 3D micro-interactions, and accessible enterprise design systems.",
            icon: "fa-palette",
            skills: ["Figma 3D", "Design Systems", "User Research", "Prototyping"]
        },
        {
            name: "Tariq Mahmood",
            role: "Cloud Security & Infrastructure Consultant",
            bio: "Dedicated to safeguarding enterprise assets, implementing zero-trust network protocols, and automating CI/CD deployments.",
            icon: "fa-shield-halved",
            skills: ["Cybersecurity", "AWS/GCP", "Docker/K8s", "Pen Testing"]
        }
    ],

    blogs: [
        {
            id: "blog-1",
            title: "The Future of Web Development: 3D Interactions & AI Integration",
            category: "Tech Trends",
            date: "May 15, 2024",
            author: "Azmeer Hussain",
            readTime: "5 min read",
            summary: "Discover how Three.js, WebGL, and on-device AI are reshaping modern web experiences, making websites more immersive and responsive than ever.",
            content: "Web development is evolving rapidly. Traditional flat layouts are giving way to interactive 3D dimensions and ambient intelligence..."
        },
        {
            id: "blog-2",
            title: "Securing Modern Enterprise Applications with Cryptographic Standards",
            category: "Cyber Security",
            date: "April 28, 2024",
            author: "Tariq Mahmood",
            readTime: "7 min read",
            summary: "A practical guide to implementing end-to-end encryption, OAuth2 SSO, and zero-trust security architecture in production web applications.",
            content: "Security is no longer an afterthought. With rising cyber threats, implementing AES-256 and proper key management is critical..."
        },
        {
            id: "blog-3",
            title: "How Cross-Platform Mobile Apps Save 40% Development Time",
            category: "Mobile Apps",
            date: "March 10, 2024",
            author: "Syed M. Ali",
            readTime: "4 min read",
            summary: "Comparing Flutter and React Native for enterprise mobility: How single-codebase frameworks deliver native performance across iOS and Android.",
            content: "Choosing between native iOS/Android development vs cross-platform frameworks can dictate your startup's speed to market..."
        }
    ],

    faqs: [
        {
            category: "Getting Started",
            question: "How do I start a project with Az Meer (SMC-Private) Limited?",
            answer: "Simply contact us through our Contact form or select a service from our Marketplace. Our senior project managers will schedule an initial discovery session within 24 hours to discuss your scope and requirements."
        },
        {
            category: "Getting Started",
            question: "What is your typical project delivery lifecycle?",
            answer: "We follow an agile 3-step lifecycle: 1) Discovery & Architecture, 2) Development & Iterative Testing, and 3) Final Quality Check & Deployment with ongoing maintenance."
        },
        {
            category: "Payments & Billing",
            question: "What payment options and currencies do you support?",
            answer: "We accept local bank transfers, international wire transfers, Credit/Debit cards, PayPal, and online gateways. You can switch currencies between USD ($), PKR (Rs), and GBP (£) anytime."
        },
        {
            category: "Payments & Billing",
            question: "Are there any hidden charges or surprise costs?",
            answer: "No. All our project quotes and service pricing are transparently stated before commencement, backed by official invoice statements and milestone delivery agreements."
        },
        {
            category: "Security & Privacy",
            question: "How do you protect project confidentiality and IP?",
            answer: "We execute strict non-disclosure agreements (NDAs) prior to project kick-off. All intellectual property (IP) and source code belong 100% to the client upon completion."
        },
        {
            category: "Support Guarantees",
            question: "What post-launch support and warranty do you provide?",
            answer: "All projects include a complimentary 30-day post-launch warranty for bug fixes and technical monitoring. Extended SLAs and 24/7 VIP maintenance plans are also available."
        }
    ],

    journeyTimeline: [
        { year: "2020", title: "The Spark", description: "It all began with a simple vision: to build technology that solves real-world problems for ambitious startups and businesses." },
        { year: "2022", title: "Global Expansion", description: "Expanded operations into mobile apps, cloud architecture, and cross-border digital solutions across Europe, USA, and UAE." },
        { year: "2024", title: "SMC-Private Limited", description: "Formally registered as Az Meer(SMC-Private) Limited, delivering AI-driven enterprise platforms and elite digital craftsmanship." }
    ]
};

// Export to window
if (typeof window !== 'undefined') {
    window.SITE_DATA = SITE_DATA;
}
