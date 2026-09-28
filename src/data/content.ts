/**
 * Single source of truth for every piece of text and every link on the site.
 * Edit copy and URLs here — no need to touch components.
 *
 * Image paths are relative to /public and resolved through asset() in
 * src/lib/asset.ts so they work at any deploy base path.
 */

export const site = {
  title: "Jay Parikh — Product Manager Portfolio",
  description:
    "Jay Parikh's product manager portfolio: experience, projects, and hobbies.",
  brand: "Jay Parikh",
  email: "jayparikhwork@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/jayparikh14",
  linkedinLabel: "linkedin.com/in/jayparikh14",
  resumeUrl:
    "https://drive.google.com/file/d/1dEsrFp-K8X4jmaF3ACTOyTHkFM2VWNRm/view?usp=sharing",
  footerCopyright: "© 2026 PM Portfolio. All rights reserved.",
};

export const nav = {
  links: [
    { label: "About", href: "#top" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Let's Talk", href: "#contact" },
};

export const hero = {
  eyebrow: "Product Manager",
  headingLine1: "Build for people.",
  headingLine2: "Prove it with data.",
  body: "I'm Jay Parikh — a former tech consultant turned PM, obsessed with turning messy problems into clear, impactful products. Three years of working with cross-functional teams taught me that the best solutions start with listening, then shipping.",
  primaryCta: { label: "Explore Projects", href: "#projects" },
  secondaryCta: { label: "See Experience", href: "#experience" },
  image: "assets/profile-jay.png",
  imageAlt: "Jay Parikh",
};

export const stats = [
  { value: 6, suffix: "", label: "Products Shipped" },
  { value: 3, suffix: "", label: "AI Models Deployed" },
  { value: 73, suffix: "%", label: "Experiment Wins" },
];

export const philosophy = {
  eyebrow: "Philosophy",
  heading: "How I Think",
  items: [
    {
      title: "User-First Thinking",
      body: "Every decision starts with understanding the person on the other side of the screen. I dig into user pain points before touching a roadmap.",
    },
    {
      title: "Data-Informed Decisions",
      body: "Intuition opens the door; data keeps it open. I pair qualitative insights with quantitative signals to prioritize what actually moves the needle.",
    },
    {
      title: "Ship Fast, Learn Faster",
      body: "Perfect is the enemy of shipped. I believe in tight feedback loops — launch the right slice, measure ruthlessly, and iterate with purpose.",
    },
  ],
};

export const experience = {
  heading: "Work Experience",
  intro:
    "Tech consulting and Governance, Risk & Compliance (GRC) experience with a focus on measurable impact, structured decision-making, and cross-functional collaboration.",
  links: [
    {
      label: "View full experience on LinkedIn",
      ariaLabel: "View full work experience on LinkedIn",
      href: site.linkedinUrl,
    },
    {
      label: "View Resume",
      ariaLabel: "View resume PDF",
      href: site.resumeUrl,
    },
  ],
  roles: [
    {
      title: "Consultant",
      company: "Deloitte",
      period: "May 2022 - June 2025 • 3 years",
    },
    {
      title: "Product Marketing Intern",
      company: "Receivables Exchange of India",
      period: "May 2021 - September 2021 • 5 months",
    },
    {
      title: "Software Developer Intern",
      company: "Talentnow Technologies",
      period: "May 2020 - June 2020 • 2 months",
    },
  ],
};

export const education = {
  heading: "Education",
  intro:
    "Academic foundation combining technology, management, and information systems to drive informed product decisions.",
  items: [
    {
      degree: "M.S. Information Management",
      school: "University of Washington",
      period: "September 2025 - June 2027",
      detail:
        "Specializing in product management, cybersecurity and business intelligence.",
      logo: "assets/uw-logo.png",
      logoAlt: "University of Washington logo",
    },
    {
      degree: "MBA Technology Management + B.Tech Computer Engineering",
      school: "Narsee Monjee Institute of Management Studies",
      period: "July 2017 - August 2022",
      detail:
        "Dual degree combining technical engineering foundation with business strategy and technology management principles.",
      logo: "assets/nmims-logo.png",
      logoAlt: "Narsee Monjee Institute of Management Studies logo",
    },
  ],
};

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  blurb: string;
  links: ProjectLink[];
  caseStudy: {
    problem: string;
    role: string;
    process: string;
    decisions: string[];
    outcome: string;
    learnings: string;
  };
};

export const projects = {
  eyebrow: "Work",
  heading: "Project Gallery",
  intro:
    "Click any card to explore the full case study — problem, process, decisions, and outcomes.",
  items: [
    {
      id: "footywithme",
      title: "FootywithMe",
      image: "assets/footywithme-app.jpg",
      tags: ["Consumer", "Mobile", "0→1"],
      blurb: "App to host, discover, and track local football matches.",
      links: [
        {
          label: "View Figma",
          href: "https://www.figma.com/board/Io6cAJXRxyNpTq6Eyv5YMa/Footy-With-me?node-id=206-11725&t=FHarRZyMRTtSzfoo-1",
        },
      ],
      caseStudy: {
        problem:
          "Amateur football players in urban areas struggle to find games, organize teams, and track personal stats — all fragmented across WhatsApp groups, Facebook events, and verbal agreements.",
        role: "Led end-to-end product design: defined the problem space, created user personas, designed information architecture, built wireframes and high-fidelity Figma prototypes, and facilitated user feedback sessions.",
        process:
          "Started with 10 discovery interviews to map the current experience. Identified three core pain points: game discovery, RSVP reliability, and post-match stat tracking. Ran a prioritization workshop using RICE to narrow scope for an MVP. Iterated on prototypes through two rounds of usability testing.",
        decisions: [
          "Chose a host-centric model (one user creates the match, others join) over a peer-to-peer model — simpler UX and cleaner accountability.",
          "Deprioritized live GPS tracking for V1 to keep the scope tight and ship faster.",
          "Added an in-app RSVP confirmation nudge after testing revealed a 40% no-show rate in the prototype flows.",
        ],
        outcome:
          "Delivered a complete Figma prototype covering match creation, discovery, RSVP, and stats dashboard flows. Validated with 15 target users; 12 said they'd switch from WhatsApp groups if the app existed.",
        learnings:
          "The biggest insight was that players don't just want a scheduling tool — they want a sense of community and identity. The stat-tracking feature resonated far more than expected, pointing toward a potential social layer in V2.",
      },
    },
    {
      id: "shuttlesquad",
      title: "ShuttleSquad",
      image: "assets/shuttlesquad-app.jpg",
      tags: ["Consumer", "Web", "0→1"],
      blurb: "Social app to organize and join local badminton games.",
      links: [{ label: "View App", href: "https://shuttle-squad-club.lovable.app" }],
      caseStudy: {
        problem:
          "Recreational badminton players rely on scattered WhatsApp groups and word-of-mouth to find games, leading to inconsistent turnout, unbalanced skill matching, and no way to track playing history.",
        role: "Owned the full product lifecycle: identified the opportunity through personal experience, defined the feature set, designed the UI, and built the working app end-to-end.",
        process:
          "Interviewed 12 casual and competitive players to map pain points. Prioritized three core loops — game creation, player discovery, and attendance tracking. Designed a dark-themed UI with a playful brand identity to appeal to a younger demographic. Built and shipped using Lovable with a cloud backend for auth and data persistence.",
        decisions: [
          "Chose a username-based identity system over email-first auth to reduce sign-up friction — badminton groups skew casual and social.",
          "Designed the app around 'squads' (persistent groups) rather than one-off games, encouraging repeat engagement and community building.",
          "Went web-first instead of native to maximize accessibility — players share invite links in group chats, so zero-install mattered.",
        ],
        outcome:
          "Shipped a fully functional app with authentication, game scheduling, and squad management. Early testing with a local badminton group showed strong adoption with players preferring it over group chat coordination.",
        learnings:
          "Building for a community you belong to gives you an unfair advantage in user empathy. The biggest surprise was how much players valued the social identity layer (profiles, stats) over pure scheduling utility.",
      },
    },
    {
      id: "medical-inquiry",
      title: "Medical Inquiry Assistant",
      image: "assets/medical-inquiry-app.jpg",
      tags: ["HealthTech", "AI/RAG", "B2B"],
      blurb:
        "RAG-powered dashboard for managing and responding to medical inquiries.",
      links: [
        {
          label: "View App",
          href: "https://medical-inquiry-assistant-production.up.railway.app/",
        },
      ],
      caseStudy: {
        problem:
          "Medical information teams spend hours manually triaging and responding to healthcare provider inquiries, leading to slow response times, inconsistent answers, and no centralized analytics on inquiry patterns.",
        role: "Built the full-stack application end-to-end: designed the dashboard UI, implemented the RAG pipeline for intelligent response generation, and deployed the system on Railway for production use.",
        process:
          "Mapped the medical inquiry workflow through interviews with medical information professionals. Identified key bottlenecks: manual search through drug databases, inconsistent response formatting, and lack of volume analytics. Designed a dashboard-first experience with inquiry creation, review queue, and analytics views.",
        decisions: [
          "Chose RAG (Retrieval-Augmented Generation) over fine-tuned models to ensure responses are grounded in approved medical documents — critical for regulatory compliance.",
          "Built a review queue workflow so AI-generated responses are always human-verified before delivery — balancing speed with accuracy.",
          "Prioritized analytics dashboards to give managers visibility into inquiry volume, response times, and trending topics.",
        ],
        outcome:
          "Deployed a working production system with dashboard, inquiry management, review queue, and analytics. Average response time metric designed to track 65% improvement over manual processes.",
        learnings:
          "In regulated industries, AI isn't about replacing humans — it's about augmenting them. The review queue was initially seen as friction, but became the most valued feature because it gave teams confidence to adopt AI-assisted workflows.",
      },
    },
    {
      id: "watch-and-share",
      title: "Watch&Share",
      image: "assets/watch-and-share-app.png",
      tags: ["Consumer", "Web", "Social"],
      blurb: "Watch videos together, share context in real time.",
      links: [
        {
          label: "View Prototype",
          href: "https://preview--watch-and-share-hub.lovable.app/",
        },
        {
          label: "Read PRD",
          href: "https://docs.google.com/document/d/1fmgVqURK0YqVJNca1XyNUzEwGapPUJcO3LiCv3PRJbk/edit?usp=sharing",
        },
      ],
      caseStudy: {
        problem:
          'Remote friends and colleagues watching videos separately lose the shared "aha" moment — reactions, timestamps, and context are all disconnected, making collaborative viewing feel hollow.',
        role: "Owned product ideation, wrote the full PRD, defined feature prioritization, and designed the core interface including the synchronized player, live chat rail, and bookmark system.",
        process:
          "Mapped the current workaround behavior (screen share + Zoom + Discord) to find the friction points. Defined three user archetypes — the curator, the reactor, and the lurker — and designed flows for each. Wrote a PRD with prioritized feature list, success metrics, and risk log before building the prototype.",
        decisions: [
          "Chose browser-based sync over a native app to lower the barrier to entry — no install required.",
          "Added a 'reaction bookmarks' feature so viewers can tag moments without breaking flow — inspired by how people annotate PDFs.",
          "Scoped the MVP to YouTube links only to validate the sync mechanic before adding multi-platform support.",
        ],
        outcome:
          "Shipped a working prototype with synchronized playback, real-time reactions, and shared bookmarks. PRD approved as a portfolio artifact demonstrating structured PM thinking.",
        learnings:
          "Writing the PRD before designing forced me to pressure-test assumptions early. Defining success metrics upfront (e.g., session length, co-viewing sessions per user) shaped which features actually belonged in V1.",
      },
    },
    {
      id: "zepanto",
      title: "Product Strategy for Drug Zepanto",
      image: "assets/zepanto-strategy.jpg",
      tags: ["B2B", "GTM", "Healthcare"],
      blurb:
        "GTM strategy for Pantoprazole tablets entering the Indian pharma market.",
      links: [
        {
          label: "View Case Study",
          href: "https://drive.google.com/file/d/1PYekAzc2yYFS35dzeJ-nzdgsrnv5wRoL/view?usp=sharing",
        },
      ],
      caseStudy: {
        problem:
          "A pharmaceutical company launching Pantoprazole (branded as Zepanto) needed a go-to-market strategy to compete in a saturated generics market with established incumbents and thin margins.",
        role: "Led competitive analysis, customer segmentation, channel strategy design, and GTM roadmap development. Presented recommendations to a panel of industry mentors.",
        process:
          "Conducted primary research through interviews with 5 medical representatives and secondary research across competitor pricing and distribution data. Mapped the prescription-to-purchase journey and identified gaps in channel coverage. Used a Porter's Five Forces lens to assess market attractiveness before designing the strategy.",
        decisions: [
          "Identified surgeons as an underserved channel — most competitors focused only on GPs and gastroenterologists, leaving surgical pre/post-op prescriptions open.",
          "Recommended a pull strategy through patient education materials alongside the traditional push via MRs, to build brand recall at the patient level.",
          "Proposed tiered pricing across urban and semi-urban markets to balance margin and volume goals.",
        ],
        outcome:
          "Strategy was recognized for identifying the surgeon channel as a novel distribution opportunity. The GTM plan outlined a 12-month rollout with clear KPIs: market share target, MR coverage ratio, and prescription frequency per doctor.",
        learnings:
          "B2B GTM in regulated markets requires understanding the full influence chain — from the prescriber to the chemist to the patient. The best insight often comes from the people closest to the transaction, not the data.",
      },
    },
    {
      id: "pneumonia",
      title: "Pneumonia Detection Web App",
      image: "assets/pneumonia-detection.jpg",
      tags: ["HealthTech", "Technical", "ML"],
      blurb: "97%-accurate CNN model deployed as a real-time diagnostic tool.",
      links: [
        {
          label: "View Project Report",
          href: "https://drive.google.com/file/d/1JppS-NJbf_jj9LrfjFbeRHg3PMxcRcGe/view?usp=sharing",
        },
      ],
      caseStudy: {
        problem:
          "Pneumonia diagnosis from chest X-rays is time-intensive and prone to inter-radiologist variability, especially in under-resourced clinics where specialist access is limited.",
        role: "Wore both PM and technical hats: defined product requirements, conducted user research with medical professionals, trained and evaluated the CNN model, and designed the web interface for real-time uploads and results.",
        process:
          "Started with 20+ interviews with doctors, radiologists, and hospital staff to understand workflow integration needs. Trained a convolutional neural network on a labeled X-ray dataset, iterating on model architecture to push accuracy. Designed wireframes and built the Django web app for end-to-end deployment.",
        decisions: [
          "Chose to surface a probability score (e.g., '92% likelihood of pneumonia') rather than a binary result — clinicians wanted to stay in the loop, not be replaced.",
          "Added an image preprocessing pipeline after discovering raw uploads varied significantly in brightness and contrast, skewing early predictions.",
          "Prioritized web over mobile for V1 — clinic workflows were desktop-first, and model inference was too heavy for mobile at the time.",
        ],
        outcome:
          "Achieved 97% detection accuracy on the test set. Web app supported real-time image uploads with results returned in under 3 seconds. High-fidelity prototype accelerated the design phase by 30%. Validated with 15 clinical users who rated usability 4.3/5.",
        learnings:
          "The hardest part wasn't the model — it was earning trust. Clinicians needed to understand why the model flagged an image, not just that it did. That insight pointed toward explainability features (heatmaps, confidence breakdowns) as critical for V2.",
      },
    },
  ] as Project[],
};

export const hobbies = {
  heading: "Fun Hobbies",
  intro: "Outside of work, I like keeping it light and curious.",
  items: [
    {
      title: "Watching Soccer",
      body: "Big fan of European football—love analyzing tactics and player development.",
      image: "assets/soccer-hobby.jpg",
      imageAlt: "Watching Soccer hobby illustration",
    },
    {
      title: "Strategic Board Games",
      body: "Enjoy systems thinking and long-term planning—perfect practice for product trade-offs.",
      image: "assets/boardgames-hobby.jpg",
      imageAlt: "Strategic Board Games hobby illustration",
    },
    {
      title: "Experimenting with AI",
      body: "I test new tools, automate workflows, and explore how AI augments product discovery.",
      image: "assets/ai-hobby.jpg",
      imageAlt: "Experimenting with AI hobby illustration",
    },
  ],
};

export const contact = {
  eyebrow: "Let's connect",
  heading: "Open to opportunities & conversations",
  body: "Whether it's a PM role, a product collab, or just a chat about building things — my inbox is always open.",
  cards: [
    {
      kind: "email" as const,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      kind: "linkedin" as const,
      label: "LinkedIn",
      value: site.linkedinLabel,
      href: site.linkedinUrl,
    },
  ],
  cta: "Send me a message",
  dialog: {
    title: "Get in Touch",
    fields: {
      email: {
        label: "Your Email Address",
        placeholder: "your.email@example.com",
      },
      purpose: {
        label: "Purpose",
        placeholder: "Collaboration, job opportunity, project discussion...",
      },
      message: {
        label: "Message",
        placeholder:
          "Tell me about your project, opportunity, or how we can work together...",
      },
    },
    cancel: "Cancel",
    submit: "Send Message",
  },
};

export const footer = {
  copyright: site.footerCopyright,
  links: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Hobbies", href: "#hobbies" },
  ],
};
