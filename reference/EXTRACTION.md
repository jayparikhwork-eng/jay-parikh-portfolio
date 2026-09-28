# Jay Parikh Portfolio — Full Extraction Reference

Source: https://jayparikhportfolio.lovable.app (single-page app, hash navigation)
Captured: 2026-09-27

## Meta / SEO
- Title: `Jay Parikh — Product Manager Portfolio`
- Description: `Jay Parikh's product manager portfolio: experience, projects, and hobbies.`
- OG title: `Jay Parikh — Product Manager Portfolio`
- OG description: `Explore experience in tech consulting & GRC, a curated project gallery, and hobbies.`
- OG image on original points to Lovable default (to be replaced — see gaps)

## Navigation (sticky header, backdrop-blur, semi-transparent light bg, bottom border)
- Brand: "Jay Parikh" → #top
- About → #top
- Projects → #projects
- Experience → #experience
- Contact → #contact
- CTA "Let's Talk" → #contact (filled indigo button)

## HERO (dark navy bg hsl(222 47% 8%), radial glow behind avatar)
- Eyebrow: "Product Manager"
- H1: `Build for people.` <br> `Prove it with data.` (2nd line indigo hsl(234 89% 74%))
- Paragraph: "I'm Jay Parikh — a former tech consultant turned PM, obsessed with turning messy problems into clear, impactful products. Three years of working with cross-functional teams taught me that the best solutions start with listening, then shipping."
- Buttons: "Explore Projects" → #projects (filled) ; "See Experience" → #experience (secondary)
- Avatar: profile-jay.png (circular, 208px, shadow-2xl, glow ring)

## STATS BAR (dark bg, border-y white/10) — animated count-up
- 6 — Products Shipped
- 3 — AI Models Deployed
- 73% — Experiment Wins

## PHILOSOPHY ("How I Think") — light section, eyebrow "Philosophy"
1. User-First Thinking — "Every decision starts with understanding the person on the other side of the screen. I dig into user pain points before touching a roadmap."
2. Data-Informed Decisions — "Intuition opens the door; data keeps it open. I pair qualitative insights with quantitative signals to prioritize what actually moves the needle."
3. Ship Fast, Learn Faster — "Perfect is the enemy of shipped. I believe in tight feedback loops — launch the right slice, measure ruthlessly, and iterate with purpose."

## WORK EXPERIENCE (#experience) — heading indigo
Intro: "Tech consulting and Governance, Risk & Compliance (GRC) experience with a focus on measurable impact, structured decision-making, and cross-functional collaboration."
Links: "View full experience on LinkedIn" → https://www.linkedin.com/in/jayparikh14 ; "View Resume" → https://drive.google.com/file/d/1dEsrFp-K8X4jmaF3ACTOyTHkFM2VWNRm/view?usp=sharing
Timeline:
1. Consultant — Deloitte — May 2022 - June 2025 • 3 years
2. Product Marketing Intern — Receivables Exchange of India — May 2021 - September 2021 • 5 months
3. Software Developer Intern — Talentnow Technologies — May 2020 - June 2020 • 2 months

## EDUCATION — light section
Intro: "Academic foundation combining technology, management, and information systems to drive informed product decisions."
1. M.S. Information Management — University of Washington — September 2025 - June 2027 (logo uw-logo.png)
   "Specializing in product management, cybersecurity and business intelligence."
2. MBA Technology Management + B.Tech Computer Engineering — Narsee Monjee Institute of Management Studies — July 2017 - August 2022 (logo nmims-logo.png)
   "Dual degree combining technical engineering foundation with business strategy and technology management principles."

## PROJECT GALLERY (#projects) — eyebrow "Work"
Intro: "Click any card to explore the full case study — problem, process, decisions, and outcomes."
6 cards (click → inline expanding case-study panel with Problem / My Role / Process / Key Decisions / Outcome & Metrics / Learnings). Tags shown as pills. Each has link(s) + "Case study" affordance.

### 1. FootywithMe  (image footywithme-app.jpg)
Tags: Consumer, Mobile, 0→1
Blurb: "App to host, discover, and track local football matches."
Link: "View Figma" → https://www.figma.com/board/Io6cAJXRxyNpTq6Eyv5YMa/Footy-With-me?node-id=206-11725&t=FHarRZyMRTtSzfoo-1
- Problem: Amateur football players in urban areas struggle to find games, organize teams, and track personal stats — all fragmented across WhatsApp groups, Facebook events, and verbal agreements.
- My Role: Led end-to-end product design: defined the problem space, created user personas, designed information architecture, built wireframes and high-fidelity Figma prototypes, and facilitated user feedback sessions.
- Process: Started with 10 discovery interviews to map the current experience. Identified three core pain points: game discovery, RSVP reliability, and post-match stat tracking. Ran a prioritization workshop using RICE to narrow scope for an MVP. Iterated on prototypes through two rounds of usability testing.
- Key Decisions:
  - Chose a host-centric model (one user creates the match, others join) over a peer-to-peer model — simpler UX and cleaner accountability.
  - Deprioritized live GPS tracking for V1 to keep the scope tight and ship faster.
  - Added an in-app RSVP confirmation nudge after testing revealed a 40% no-show rate in the prototype flows.
- Outcome & Metrics: Delivered a complete Figma prototype covering match creation, discovery, RSVP, and stats dashboard flows. Validated with 15 target users; 12 said they'd switch from WhatsApp groups if the app existed.
- Learnings: The biggest insight was that players don't just want a scheduling tool — they want a sense of community and identity. The stat-tracking feature resonated far more than expected, pointing toward a potential social layer in V2.

### 2. ShuttleSquad  (image shuttlesquad-app.jpg)
Tags: Consumer, Web, 0→1
Blurb: "Social app to organize and join local badminton games."
Link: "View App" → https://shuttle-squad-club.lovable.app
- Problem: Recreational badminton players rely on scattered WhatsApp groups and word-of-mouth to find games, leading to inconsistent turnout, unbalanced skill matching, and no way to track playing history.
- My Role: Owned the full product lifecycle: identified the opportunity through personal experience, defined the feature set, designed the UI, and built the working app end-to-end.
- Process: Interviewed 12 casual and competitive players to map pain points. Prioritized three core loops — game creation, player discovery, and attendance tracking. Designed a dark-themed UI with a playful brand identity to appeal to a younger demographic. Built and shipped using Lovable with a cloud backend for auth and data persistence.
- Key Decisions:
  - Chose a username-based identity system over email-first auth to reduce sign-up friction — badminton groups skew casual and social.
  - Designed the app around 'squads' (persistent groups) rather than one-off games, encouraging repeat engagement and community building.
  - Went web-first instead of native to maximize accessibility — players share invite links in group chats, so zero-install mattered.
- Outcome & Metrics: Shipped a fully functional app with authentication, game scheduling, and squad management. Early testing with a local badminton group showed strong adoption with players preferring it over group chat coordination.
- Learnings: Building for a community you belong to gives you an unfair advantage in user empathy. The biggest surprise was how much players valued the social identity layer (profiles, stats) over pure scheduling utility.

### 3. Medical Inquiry Assistant  (image medical-inquiry-app.jpg)
Tags: HealthTech, AI/RAG, B2B
Blurb: "RAG-powered dashboard for managing and responding to medical inquiries."
Link: "View App" → https://medical-inquiry-assistant-production.up.railway.app/
- Problem: Medical information teams spend hours manually triaging and responding to healthcare provider inquiries, leading to slow response times, inconsistent answers, and no centralized analytics on inquiry patterns.
- My Role: Built the full-stack application end-to-end: designed the dashboard UI, implemented the RAG pipeline for intelligent response generation, and deployed the system on Railway for production use.
- Process: Mapped the medical inquiry workflow through interviews with medical information professionals. Identified key bottlenecks: manual search through drug databases, inconsistent response formatting, and lack of volume analytics. Designed a dashboard-first experience with inquiry creation, review queue, and analytics views.
- Key Decisions:
  - Chose RAG (Retrieval-Augmented Generation) over fine-tuned models to ensure responses are grounded in approved medical documents — critical for regulatory compliance.
  - Built a review queue workflow so AI-generated responses are always human-verified before delivery — balancing speed with accuracy.
  - Prioritized analytics dashboards to give managers visibility into inquiry volume, response times, and trending topics.
- Outcome & Metrics: Deployed a working production system with dashboard, inquiry management, review queue, and analytics. Average response time metric designed to track 65% improvement over manual processes.
- Learnings: In regulated industries, AI isn't about replacing humans — it's about augmenting them. The review queue was initially seen as friction, but became the most valued feature because it gave teams confidence to adopt AI-assisted workflows.

### 4. Watch&Share  (image watch-and-share-app.png)
Tags: Consumer, Web, Social
Blurb: "Watch videos together, share context in real time."
Links: "View Prototype" → https://preview--watch-and-share-hub.lovable.app/ ; "Read PRD" → https://docs.google.com/document/d/1fmgVqURK0YqVJNca1XyNUzEwGapPUJcO3LiCv3PRJbk/edit?usp=sharing
- Problem: Remote friends and colleagues watching videos separately lose the shared "aha" moment — reactions, timestamps, and context are all disconnected, making collaborative viewing feel hollow.
- My Role: Owned product ideation, wrote the full PRD, defined feature prioritization, and designed the core interface including the synchronized player, live chat rail, and bookmark system.
- Process: Mapped the current workaround behavior (screen share + Zoom + Discord) to find the friction points. Defined three user archetypes — the curator, the reactor, and the lurker — and designed flows for each. Wrote a PRD with prioritized feature list, success metrics, and risk log before building the prototype.
- Key Decisions:
  - Chose browser-based sync over a native app to lower the barrier to entry — no install required.
  - Added a 'reaction bookmarks' feature so viewers can tag moments without breaking flow — inspired by how people annotate PDFs.
  - Scoped the MVP to YouTube links only to validate the sync mechanic before adding multi-platform support.
- Outcome & Metrics: Shipped a working prototype with synchronized playback, real-time reactions, and shared bookmarks. PRD approved as a portfolio artifact demonstrating structured PM thinking.
- Learnings: Writing the PRD before designing forced me to pressure-test assumptions early. Defining success metrics upfront (e.g., session length, co-viewing sessions per user) shaped which features actually belonged in V1.

### 5. Product Strategy for Drug Zepanto  (image zepanto-strategy.jpg)
Tags: B2B, GTM, Healthcare
Blurb: "GTM strategy for Pantoprazole tablets entering the Indian pharma market."
Link: "View Case Study" → https://drive.google.com/file/d/1PYekAzc2yYFS35dzeJ-nzdgsrnv5wRoL/view?usp=sharing
- Problem: A pharmaceutical company launching Pantoprazole (branded as Zepanto) needed a go-to-market strategy to compete in a saturated generics market with established incumbents and thin margins.
- My Role: Led competitive analysis, customer segmentation, channel strategy design, and GTM roadmap development. Presented recommendations to a panel of industry mentors.
- Process: Conducted primary research through interviews with 5 medical representatives and secondary research across competitor pricing and distribution data. Mapped the prescription-to-purchase journey and identified gaps in channel coverage. Used a Porter's Five Forces lens to assess market attractiveness before designing the strategy.
- Key Decisions:
  - Identified surgeons as an underserved channel — most competitors focused only on GPs and gastroenterologists, leaving surgical pre/post-op prescriptions open.
  - Recommended a pull strategy through patient education materials alongside the traditional push via MRs, to build brand recall at the patient level.
  - Proposed tiered pricing across urban and semi-urban markets to balance margin and volume goals.
- Outcome & Metrics: Strategy was recognized for identifying the surgeon channel as a novel distribution opportunity. The GTM plan outlined a 12-month rollout with clear KPIs: market share target, MR coverage ratio, and prescription frequency per doctor.
- Learnings: B2B GTM in regulated markets requires understanding the full influence chain — from the prescriber to the chemist to the patient. The best insight often comes from the people closest to the transaction, not the data.

### 6. Pneumonia Detection Web App  (image pneumonia-detection.jpg)
Tags: HealthTech, Technical, ML
Blurb: "97%-accurate CNN model deployed as a real-time diagnostic tool."
Link: "View Project Report" → https://drive.google.com/file/d/1JppS-NJbf_jj9LrfjFbeRHg3PMxcRcGe/view?usp=sharing
- Problem: Pneumonia diagnosis from chest X-rays is time-intensive and prone to inter-radiologist variability, especially in under-resourced clinics where specialist access is limited.
- My Role: Wore both PM and technical hats: defined product requirements, conducted user research with medical professionals, trained and evaluated the CNN model, and designed the web interface for real-time uploads and results.
- Process: Started with 20+ interviews with doctors, radiologists, and hospital staff to understand workflow integration needs. Trained a convolutional neural network on a labeled X-ray dataset, iterating on model architecture to push accuracy. Designed wireframes and built the Django web app for end-to-end deployment.
- Key Decisions:
  - Chose to surface a probability score (e.g., '92% likelihood of pneumonia') rather than a binary result — clinicians wanted to stay in the loop, not be replaced.
  - Added an image preprocessing pipeline after discovering raw uploads varied significantly in brightness and contrast, skewing early predictions.
  - Prioritized web over mobile for V1 — clinic workflows were desktop-first, and model inference was too heavy for mobile at the time.
- Outcome & Metrics: Achieved 97% detection accuracy on the test set. Web app supported real-time image uploads with results returned in under 3 seconds. High-fidelity prototype accelerated the design phase by 30%. Validated with 15 clinical users who rated usability 4.3/5.
- Learnings: The hardest part wasn't the model — it was earning trust. Clinicians needed to understand why the model flagged an image, not just that it did. That insight pointed toward explainability features (heatmaps, confidence breakdowns) as critical for V2.

## FUN HOBBIES (#hobbies) — light section
Intro: "Outside of work, I like keeping it light and curious."
1. Watching Soccer (soccer-hobby.jpg) — "Big fan of European football—love analyzing tactics and player development."
2. Strategic Board Games (boardgames-hobby.jpg) — "Enjoy systems thinking and long-term planning—perfect practice for product trade-offs."
3. Experimenting with AI (ai-hobby.jpg) — "I test new tools, automate workflows, and explore how AI augments product discovery."

## CONTACT (#contact) — dark section, eyebrow "Let's connect"
- H2: "Open to opportunities & conversations"
- Paragraph: "Whether it's a PM role, a product collab, or just a chat about building things — my inbox is always open."
- Card: Email — jayparikhwork@gmail.com → mailto:jayparikhwork@gmail.com
- Card: LinkedIn — linkedin.com/in/jayparikh14 → https://www.linkedin.com/in/jayparikh14
- Button: "Send me a message" → opens contact dialog

### Contact dialog ("Get in Touch")
Fields:
- Your Email Address (email) placeholder "your.email@example.com"
- Purpose (text) placeholder "Collaboration, job opportunity, project discussion..."
- Message (textarea) placeholder "Tell me about your project, opportunity, or how we can work together..."
- Buttons: Cancel, Send Message
(Backend unknown — Lovable form. Rebuild as mailto: compose fallback.)

## FOOTER (dark)
- "© 2026 PM Portfolio. All rights reserved."
- Links: Experience → #experience ; Projects → #projects ; Hobbies → #hobbies

## DESIGN TOKENS (HSL)
- background: 320 15% 97% (section-b) ; section-a: 240 20% 96% ; card: 0 0% 100%
- section-dark: 222 47% 8% (hero/stats/contact/footer), text white
- foreground: 222.2 84% 4.9%
- primary: 234 89% 74% (indigo/periwinkle) ; primary-glow: 234 89% 84%
- secondary: 270 95% 95% (light purple) ; accent: 316 70% 95% (light pink)
- tertiary/success: 142 76% 36% (green)
- muted: 320 20% 94% ; muted-foreground: 215 16% 47%
- border/input: 320 25% 88% (border), 320 25% 88% (input)
- radius: 0.5rem (base) ; cards use rounded-2xl (1rem/16px)
- Gradients: primary 135deg indigo→light-indigo; warm 135deg pink→purple; rainbow 90deg multi
- Shadows: elegant/warm/cool = 0 4px 6px -1px hsl(222 84% 4.9% / .1); glow = 0 0 20px hsl(234 89% 74% / .2); avatar shadow-2xl
- Transitions: smooth all .3s cubic-bezier(.4,0,.2,1); bounce all .4s cubic-bezier(.68,-.55,.265,1.55)
- Fonts: DEFAULT system sans stack (ui-sans-serif, system-ui...). No custom webfont loaded.
- Header: sticky, bg rgba(248,246,248,0.8), backdrop-blur(8px), bottom border
- Project card: rounded-2xl, border, bg white, shadow-sm; hover: -translate-y-2, glow shadow hsl(234 89% 74% /.3), border-primary/30; image h-48 object-cover
- Section vertical padding: py-16 md:py-24
- Animations present: fade-in, scale-in, pulse, accordion (tailwindcss-animate); stat counters count up on view

## ASSET MAP (original → local /public/assets)
- /lovable-uploads/3f48f003-...png → profile-jay.png
- /assets/uw-logo-*.png → uw-logo.png
- /assets/nmims-logo-*.png → nmims-logo.png
- /assets/footywithme-app-*.jpg → footywithme-app.jpg
- /assets/shuttlesquad-app-*.jpg → shuttlesquad-app.jpg
- /assets/medical-inquiry-app-*.jpg → medical-inquiry-app.jpg
- /lovable-uploads/f4cc6f8a-...png → watch-and-share-app.png
- /assets/zepanto-strategy-*.jpg → zepanto-strategy.jpg
- /assets/pneumonia-detection-*.jpg → pneumonia-detection.jpg
- /assets/soccer-hobby-*.jpg → soccer-hobby.jpg
- /assets/boardgames-hobby-*.jpg → boardgames-hobby.jpg
- /assets/ai-hobby-*.jpg → ai-hobby.jpg

## GAPS / TO CONFIRM
- Favicon: original serves default Lovable favicon.ico — will generate a simple "JP" favicon.
- OG image: original uses Lovable default — will point to profile-jay.png or drop.
- Contact form backend: unknown (Lovable-hosted). Rebuild as mailto: compose. Confirm desired behavior.
- Stat counter final values captured mid-animation initially; final = 6 / 3 / 73%.
