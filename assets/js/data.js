/* Template marketplace catalogue.
   ponytail: plain array, no CMS. Move to an API when the list outgrows hand-editing.

   Optional per-template field:
     preview: 'https://demo.example.com'  // a live demo URL. When set, the card's
        button becomes "Live preview ↗" (opens in a new tab) and the detail page
        gains an "Open live demo" button. Omit it and the card shows "View details". */

const TEMPLATES = [
  {
    id: 'forex-pro-trading',
    name: 'ForexPro — Trading & Brokerage Platform',
    cat: 'Forex & Trading',
    desc: 'Complete forex brokerage front-end with live rate widgets, MT4/MT5 links, KYC onboarding and an investor dashboard.',
    buy: 289, rent: 39, was: 420,
    rating: 4.4, sales: 1842, badge: 'hot',
    stack: ['Next.js', 'Tailwind', 'Node.js', 'PostgreSQL'],
    pages: 34, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'Live currency & crypto rate tickers',
      'KYC / AML onboarding workflow',
      'Investor + IB (introducing broker) dashboards',
      'Deposit / withdrawal request flows',
      'MT4 & MT5 deep links and account sync hooks',
      'Multi-language and multi-currency ready'
    ]
  },
  {
    id: 'cryptoexchange-x',
    name: 'CryptoExchange X — Spot & P2P',
    cat: 'Crypto & Web3',
    desc: 'Exchange UI with order book, TradingView charts, P2P escrow flow, wallet management and admin console.',
    buy: 349, rent: 49, was: 499,
    rating: 4.6, sales: 1206, badge: 'top',
    stack: ['React', 'WebSocket', 'Node.js', 'Redis'],
    pages: 41, updated: 'Jun 2026', license: 'Extended available',
    features: [
      'Real-time order book & depth chart',
      'TradingView advanced charting',
      'P2P trading with escrow states',
      'Hot / cold wallet management screens',
      'Staking and launchpad modules',
      'Full admin & compliance console'
    ]
  },
  {
    id: 'saasify-cloud',
    name: 'SaaSify — Multi-Tenant SaaS Starter',
    cat: 'SaaS',
    desc: 'Production-ready multi-tenant SaaS shell: auth, teams, roles, Stripe billing, usage metering and settings.',
    buy: 259, rent: 35, was: 380,
    rating: 4.7, sales: 2310, badge: 'hot',
    stack: ['Next.js', 'Prisma', 'Stripe', 'PostgreSQL'],
    pages: 28, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'Multi-tenant workspace architecture',
      'Stripe subscriptions, trials and proration',
      'Role-based access control (owner/admin/member)',
      'Usage metering and plan limits',
      'Team invites, SSO-ready auth',
      'Customer-facing billing portal'
    ]
  },
  {
    id: 'medicare-hms',
    name: 'MediCare — Hospital Management System',
    cat: 'Healthcare',
    desc: 'HMS covering OPD/IPD, appointments, e-prescriptions, lab reports, pharmacy stock and billing.',
    buy: 319, rent: 45, was: 460,
    rating: 4.1, sales: 934, badge: '',
    stack: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
    pages: 46, updated: 'May 2026', license: 'Extended available',
    features: [
      'Doctor, patient and staff portals',
      'Appointment scheduling with queue tokens',
      'E-prescription and lab report modules',
      'Pharmacy inventory and expiry alerts',
      'Insurance claim and billing workflow',
      'Role-based audit logging'
    ]
  },
  {
    id: 'eduflow-lms',
    name: 'EduFlow — LMS & Online Academy',
    cat: 'Education',
    desc: 'Course marketplace with video lessons, quizzes, certificates, instructor payouts and live class scheduling.',
    buy: 229, rent: 32, was: 340,
    rating: 4.5, sales: 1675, badge: '',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Mux'],
    pages: 32, updated: 'Jun 2026', license: 'Extended available',
    features: [
      'Drip-content courses and curriculum builder',
      'Quizzes, assignments and auto-grading',
      'Certificate generator with verification',
      'Instructor revenue share & payouts',
      'Live class scheduling with reminders',
      'Progress tracking and gamified badges'
    ]
  },
  {
    id: 'estate-prime',
    name: 'EstatePrime — Real Estate Portal',
    cat: 'Real Estate',
    desc: 'Property listing marketplace with map search, agent CRM, virtual tours and mortgage calculators.',
    buy: 249, rent: 34, was: 360,
    rating: 3.9, sales: 1120, badge: '',
    stack: ['Vue 3', 'Laravel', 'MySQL', 'Mapbox'],
    pages: 30, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'Map-based radius and polygon search',
      'Agent and agency CRM with lead inbox',
      '360° virtual tour and floor-plan viewer',
      'Mortgage & EMI calculators',
      'Saved searches with email alerts',
      'Featured listing paid placements'
    ]
  },
  {
    id: 'shopnest-commerce',
    name: 'ShopNest — Multi-Vendor Marketplace',
    cat: 'E-commerce',
    desc: 'Multi-vendor storefront with seller onboarding, commission engine, shipping rules and coupon system.',
    buy: 299, rent: 42, was: 430,
    rating: 4.7, sales: 2085, badge: 'top',
    stack: ['Next.js', 'Medusa', 'PostgreSQL', 'Stripe'],
    pages: 38, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'Seller onboarding with KYC and payouts',
      'Commission and settlement engine',
      'Zone-based shipping and tax rules',
      'Coupons, flash sales and bundles',
      'Product reviews with media uploads',
      'Headless storefront + admin dashboard'
    ]
  },
  {
    id: 'fintech-neobank',
    name: 'NeoBank — Digital Banking Suite',
    cat: 'FinTech',
    desc: 'Neobank experience: onboarding, virtual cards, transfers, spend analytics and compliance dashboards.',
    buy: 379, rent: 55, was: 540,
    rating: 4.0, sales: 764, badge: 'new',
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Plaid'],
    pages: 44, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'Digital onboarding with document capture',
      'Virtual & physical card management',
      'Domestic and international transfers',
      'Spend categorisation and analytics',
      'Savings goals and round-ups',
      'Compliance, limits and fraud flags'
    ]
  },
  {
    id: 'logipath-tms',
    name: 'LogiPath — Logistics & Fleet TMS',
    cat: 'Logistics',
    desc: 'Transport management with live tracking, route optimisation, driver app screens and proof of delivery.',
    buy: 289, rent: 40, was: 410,
    rating: 3.6, sales: 612, badge: '',
    stack: ['Angular', 'Node.js', 'MongoDB', 'Google Maps'],
    pages: 35, updated: 'Apr 2026', license: 'Extended available',
    features: [
      'Live vehicle tracking and geofencing',
      'Route optimisation and trip planning',
      'Driver mobile app screens',
      'Proof of delivery with e-signature',
      'Fuel, maintenance and expense logs',
      'Client shipment tracking portal'
    ]
  },
  {
    id: 'aidesk-chatbot',
    name: 'AIDesk — AI Support Agent Platform',
    cat: 'AI & Automation',
    desc: 'Deploy AI support agents on web, WhatsApp and email with a knowledge base, handoff and analytics.',
    buy: 339, rent: 47, was: 490,
    rating: 4.8, sales: 1398, badge: 'hot',
    stack: ['Next.js', 'Claude API', 'pgvector', 'Node.js'],
    pages: 26, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'Multi-channel agents: web, WhatsApp, email',
      'RAG knowledge base with document ingest',
      'Human handoff with live inbox',
      'Conversation analytics & CSAT',
      'Prompt and guardrail configuration',
      'Model-agnostic: Claude, GPT, Gemini'
    ]
  },
  {
    id: 'pulse-admin',
    name: 'Pulse — Analytics Admin Dashboard',
    cat: 'Dashboards',
    desc: 'Dark-first admin kit: 60+ components, 25 chart types, data tables, RBAC screens and settings.',
    buy: 149, rent: 22, was: 220,
    rating: 4.8, sales: 3410, badge: 'top',
    stack: ['React', 'Tailwind', 'Recharts', 'TypeScript'],
    pages: 52, updated: 'Jul 2026', license: 'Extended available',
    features: [
      '60+ prebuilt UI components',
      '25 chart types with live data hooks',
      'Virtualised data tables with export',
      'Light / dark theming via tokens',
      'RBAC, audit log and settings screens',
      'Figma source file included'
    ]
  },
  {
    id: 'nfthub-market',
    name: 'NFTHub — NFT Marketplace',
    cat: 'Crypto & Web3',
    desc: 'Mint, list and auction NFTs with wallet connect, royalty splits, collections and creator profiles.',
    buy: 279, rent: 38, was: 400,
    rating: 3.4, sales: 588, badge: '',
    stack: ['Next.js', 'Solidity', 'Wagmi', 'IPFS'],
    pages: 29, updated: 'Mar 2026', license: 'Extended available',
    features: [
      'Wallet connect (EVM multi-chain)',
      'Lazy minting and batch collections',
      'English & Dutch auction flows',
      'Royalty splits for collaborators',
      'IPFS media pipeline',
      'Creator storefront pages'
    ]
  },
  {
    id: 'bookly-appointments',
    name: 'Bookly — Appointment & Booking Engine',
    cat: 'Business Automation',
    desc: 'Booking system with staff calendars, service catalogue, deposits, reminders and no-show protection.',
    buy: 169, rent: 24, was: 250,
    rating: 4.3, sales: 1493, badge: '',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio'],
    pages: 24, updated: 'Jun 2026', license: 'Extended available',
    features: [
      'Multi-staff, multi-location calendars',
      'Service catalogue with buffers & durations',
      'Deposits and prepayment options',
      'SMS / WhatsApp / email reminders',
      'Cancellation and no-show policies',
      'Embeddable booking widget'
    ]
  },
  {
    id: 'hoteliq-pms',
    name: 'HotelIQ — Hotel PMS & Booking',
    cat: 'Hospitality',
    desc: 'Property management with rate plans, channel manager hooks, housekeeping boards and direct booking site.',
    buy: 299, rent: 41, was: 420,
    rating: 3.7, sales: 507, badge: '',
    stack: ['Laravel', 'Vue 3', 'MySQL', 'Stripe'],
    pages: 37, updated: 'May 2026', license: 'Extended available',
    features: [
      'Room inventory, rate plans and seasons',
      'Direct booking engine with upsells',
      'Channel manager integration hooks',
      'Housekeeping and maintenance boards',
      'Folio, invoicing and night audit',
      'Guest CRM and review requests'
    ]
  },
  {
    id: 'swiftpos-retail',
    name: 'SwiftPOS — Retail POS & Inventory',
    cat: 'Software',
    desc: 'Offline-first POS with barcode scanning, multi-store stock, purchase orders and GST/VAT invoicing.',
    buy: 219, rent: 30, was: 320,
    rating: 4.4, sales: 1266, badge: '',
    stack: ['Electron', 'React', 'SQLite', 'Node.js'],
    pages: 27, updated: 'Jun 2026', license: 'Extended available',
    features: [
      'Offline-first sync with conflict handling',
      'Barcode scanning and label printing',
      'Multi-store stock transfers',
      'Purchase orders and supplier ledger',
      'GST / VAT compliant invoicing',
      'Shift, cash-drawer and Z-reports'
    ]
  },
  {
    id: 'talenthire-jobs',
    name: 'TalentHire — Job Board & ATS',
    cat: 'HR & Recruiting',
    desc: 'Job marketplace plus applicant tracking: pipelines, resume parsing, interview scheduling and scorecards.',
    buy: 239, rent: 33, was: 340,
    rating: 4.2, sales: 841, badge: '',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Elastic'],
    pages: 31, updated: 'Jun 2026', license: 'Extended available',
    features: [
      'Employer and candidate portals',
      'Kanban hiring pipelines',
      'Resume parsing and keyword search',
      'Interview scheduling with calendar sync',
      'Structured scorecards and feedback',
      'Featured job monetisation'
    ]
  },
  {
    id: 'insurex-portal',
    name: 'InsureX — Insurance Quote & Policy Portal',
    cat: 'Insurance',
    desc: 'Quote comparison, policy issuance, claims intake and agent commission tracking in one portal.',
    buy: 309, rent: 44, was: 440,
    rating: 3.3, sales: 396, badge: 'new',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL'],
    pages: 33, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'Multi-product quote comparison engine',
      'Digital policy issuance and documents',
      'Claims intake with document upload',
      'Agent hierarchy and commission tracking',
      'Renewal reminders and lapse alerts',
      'Underwriting rules configuration'
    ]
  },
  {
    id: 'fitcore-gym',
    name: 'FitCore — Gym & Membership Manager',
    cat: 'Health & Fitness',
    desc: 'Memberships, class booking, trainer scheduling, attendance kiosk and recurring billing.',
    buy: 179, rent: 25, was: 260,
    rating: 3.8, sales: 728, badge: '',
    stack: ['Laravel', 'Alpine.js', 'MySQL', 'Stripe'],
    pages: 25, updated: 'Apr 2026', license: 'Extended available',
    features: [
      'Membership plans with recurring billing',
      'Class and PT session booking',
      'QR / RFID attendance kiosk',
      'Trainer rosters and payroll hours',
      'Body metrics and progress tracking',
      'Automated lapse win-back campaigns'
    ]
  },
  {
    id: 'foodrush-delivery',
    name: 'FoodRush — Delivery & Restaurant Suite',
    cat: 'E-commerce',
    desc: 'Customer app, restaurant panel and rider tracking with live order states and commission settlement.',
    buy: 329, rent: 46, was: 470,
    rating: 4.5, sales: 1034, badge: 'hot',
    stack: ['Flutter', 'Node.js', 'MongoDB', 'Socket.IO'],
    pages: 40, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'Customer, restaurant and rider apps',
      'Live order status over sockets',
      'Rider assignment and route view',
      'Menu, modifiers and combo builder',
      'Commission and payout settlement',
      'Promo codes and loyalty wallet'
    ]
  },
  {
    id: 'lexpoint-legal',
    name: 'LexPoint — Law Firm & Case Manager',
    cat: 'Legal',
    desc: 'Matter management with case timelines, document vault, time tracking and client billing.',
    buy: 259, rent: 36, was: 370,
    rating: 3.5, sales: 342, badge: '',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'S3'],
    pages: 28, updated: 'May 2026', license: 'Extended available',
    features: [
      'Matter and case timeline management',
      'Encrypted document vault with versions',
      'Billable time tracking and rates',
      'Client portal with secure messaging',
      'Court date calendar and reminders',
      'Trust accounting summaries'
    ]
  },
  {
    id: 'voyager-travel',
    name: 'Voyager — Travel Booking Platform',
    cat: 'Travel',
    desc: 'Flights, hotels and packages with supplier APIs, itinerary builder and agent booking desk.',
    buy: 289, rent: 40, was: 410,
    rating: 3.9, sales: 655, badge: '',
    stack: ['Next.js', 'Node.js', 'Redis', 'Amadeus API'],
    pages: 36, updated: 'Jun 2026', license: 'Extended available',
    features: [
      'Flight, hotel and package search',
      'Supplier API adapters with caching',
      'Itinerary builder and e-vouchers',
      'B2B agent desk with markup rules',
      'Multi-currency pricing',
      'Cancellation and refund workflows'
    ]
  },
  {
    id: 'factoryops-erp',
    name: 'FactoryOps — Manufacturing ERP',
    cat: 'Manufacturing',
    desc: 'Production planning, BOM, work orders, quality checks and machine downtime analytics.',
    buy: 399, rent: 58, was: 560,
    rating: 4.0, sales: 289, badge: 'new',
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'MQTT'],
    pages: 48, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'BOM, routing and work order management',
      'Production scheduling and capacity view',
      'Quality checkpoints and NCR handling',
      'IoT machine telemetry over MQTT',
      'OEE and downtime analytics',
      'Procurement and raw material stock'
    ]
  },
  {
    id: 'launchfolio-agency',
    name: 'LaunchFolio — Agency & Portfolio Site',
    cat: 'Corporate',
    desc: 'High-conversion agency site: case studies, service pages, blog, careers and lead capture.',
    buy: 119, rent: 18, was: 180,
    rating: 4.8, sales: 2764, badge: 'top',
    stack: ['Astro', 'Tailwind', 'MDX', 'Vercel'],
    pages: 22, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'Case study and portfolio templates',
      'MDX blog with reading time and RSS',
      'Careers page with application form',
      'Lead capture with spam protection',
      '100/100 Lighthouse out of the box',
      'SEO schema and OG image generation'
    ]
  },
  {
    id: 'sentinel-secops',
    name: 'Sentinel — SecOps Monitoring Console',
    cat: 'Cybersecurity',
    desc: 'Security operations console: asset inventory, vulnerability tracking, alerts and compliance reporting.',
    buy: 359, rent: 50, was: 510,
    rating: 3.2, sales: 331, badge: 'new',
    stack: ['React', 'Node.js', 'ClickHouse', 'Grafana'],
    pages: 30, updated: 'Jul 2026', license: 'Extended available',
    features: [
      'Asset and exposure inventory',
      'Vulnerability tracking with CVSS scoring',
      'Alert triage queues and escalation',
      'Compliance report generation',
      'Log search over ClickHouse',
      'Integrations for scanners and SIEM feeds'
    ]
  }
];

const CATEGORIES = ['All', ...Array.from(new Set(TEMPLATES.map(t => t.cat))).sort()];
