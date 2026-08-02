(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();window.PORTFOLIO_DATA={profile:{name:"Leo Saputra",title:"Senior Full-Stack Engineer & Solutions Architect",tagline:"Building resilient cloud-native applications, scalable microservices, and elegant web experiences.",bio:"Passionate software engineer with over 8 years of experience leading full-stack development, cloud architecture, and high-performance engineering teams. Specialized in TypeScript, React, Node.js, Python, and AWS/GCP infrastructure.",status:"Available for Senior & Staff Engineering Roles",location:"San Francisco, CA (Open to Remote)",email:"alex.rivera.dev@example.com",phone:"+1 (555) 382-9102",github:"https://github.com/leosaputra-219/",linkedin:"#",twitter:"#",codepen:"#",yearsExperience:8,projectsCompleted:45,clientsServed:28,certificationsCount:6,avatarUrl:"images/avatar7.jpg",resumeUrl:"#download-resume"},values:[{title:"Clean Architecture & Scalability",description:"Writing maintainable, loosely-coupled systems designed to handle growth gracefully with high availability.",icon:"cpu"},{title:"User-Centric Engineering",description:"Bridging technical capability with user intent to deliver snappy, intuitive, accessible digital products.",icon:"layout"},{title:"Security & Observability",description:"Implementing zero-trust architecture, robust auth models, comprehensive tracing, and proactive monitoring.",icon:"shield-check"},{title:"Continuous Learning & Mentorship",description:"Elevating team engineering culture through clear code reviews, documentation, and technical workshops.",icon:"book-open"}],goals:["Architect next-generation distributed systems powered by cloud-native infrastructure.","Drive frontend performance optimization to achieve sub-second zero-CLS rendering.","Lead high-impact engineering initiatives while fostering inclusive technical growth."],skills:[{category:"Programming Languages",items:[{name:"TypeScript / JavaScript",level:95,exp:"8 yrs",badge:"Expert"},{name:"Python",level:90,exp:"6 yrs",badge:"Advanced"},{name:"Go (Golang)",level:82,exp:"3 yrs",badge:"Proficient"},{name:"SQL (PostgreSQL / MySQL)",level:88,exp:"7 yrs",badge:"Advanced"},{name:"HTML5 & Modern CSS3",level:98,exp:"8 yrs",badge:"Expert"}]},{category:"Frontend Engineering",items:[{name:"React.js / Next.js",level:96,exp:"7 yrs",badge:"Expert"},{name:"State Mgmt (Zustand, Redux)",level:92,exp:"6 yrs",badge:"Expert"},{name:"Tailwind CSS & SASS",level:95,exp:"5 yrs",badge:"Expert"},{name:"Web API & Performance",level:90,exp:"7 yrs",badge:"Advanced"},{name:"Vanilla JS / DOM API",level:98,exp:"8 yrs",badge:"Master"}]},{category:"Backend & APIs",items:[{name:"Node.js (Express / Fastify)",level:94,exp:"7 yrs",badge:"Expert"},{name:"Python (FastAPI / Django)",level:88,exp:"5 yrs",badge:"Advanced"},{name:"GraphQL & RESTful APIs",level:92,exp:"6 yrs",badge:"Expert"},{name:"gRPC & Protocol Buffers",level:80,exp:"3 yrs",badge:"Proficient"},{name:"Microservices Architecture",level:90,exp:"5 yrs",badge:"Advanced"}]},{category:"Database & Caching",items:[{name:"PostgreSQL",level:92,exp:"7 yrs",badge:"Expert"},{name:"MongoDB / Firestore",level:88,exp:"6 yrs",badge:"Advanced"},{name:"Redis Caching",level:86,exp:"5 yrs",badge:"Advanced"},{name:"ORM (Prisma / Drizzle)",level:90,exp:"4 yrs",badge:"Advanced"}]},{category:"Cloud, DevOps & Tools",items:[{name:"AWS (ECS, Lambda, S3, RDS)",level:88,exp:"5 yrs",badge:"Advanced"},{name:"Google Cloud Platform",level:85,exp:"4 yrs",badge:"Advanced"},{name:"Docker & Containerization",level:92,exp:"6 yrs",badge:"Expert"},{name:"CI/CD Pipelines (GitHub Actions)",level:90,exp:"5 yrs",badge:"Advanced"},{name:"Git, Vite, Webpack, Vitest",level:95,exp:"8 yrs",badge:"Expert"}]}],experience:[{company:"Nexus Cloud Systems",role:"Lead Full-Stack Architect",period:"2023 - Present",location:"San Francisco, CA",description:"Spearheading cloud platform modernization, micro-frontend architecture, and developer workflow efficiency across 4 engineering teams.",responsibilities:["Architected an enterprise multi-tenant analytics engine serving over 2.4 million daily telemetry events with <45ms p99 latency.","Migrated legacy monolithic API into Node.js microservices hosted on AWS ECS with Docker and Redis caching, cutting server costs by 38%.","Mentored a team of 12 full-stack engineers and established strict CI/CD linting, automated testing, and security scanning."],achievements:["Achieved 99.99% operational uptime across high-concurrency API services.","Engineered zero-downtime deployment pipeline reducing release cycles from bi-weekly to 6 times per day."],skillsUsed:["TypeScript","Node.js","React","PostgreSQL","AWS ECS","Docker","Redis","GraphQL"]},{company:"Pulse Analytics Inc.",role:"Senior Full-Stack Engineer",period:"2020 - 2023",location:"San Jose, CA",description:"Designed core web dashboard products, real-time data visualizers, and backend API infrastructures for enterprise SaaS clients.",responsibilities:["Engineered real-time collaboration canvas using WebSockets and Canvas API, supporting up to 50 concurrent editors per session.","Designed and published reusable UI component library adopted across 5 product lines, reducing design system tech debt by 60%.","Integrated secure OAuth 2.0 / OIDC authentication with fine-grained RBAC permissions for enterprise single sign-on."],achievements:["Recognized with 'Engineering Excellence Award' for redesigning state streaming engine.","Increased Lighthouse performance score from 62 to 98 across core analytics portal."],skillsUsed:["React","TypeScript","Python FastAPI","WebSockets","D3.js","Tailwind CSS","Docker"]},{company:"Vanguard Tech Labs",role:"Software Engineer",period:"2018 - 2020",location:"Austin, TX",description:"Developed customer-facing web applications, payment processing modules, and RESTful web microservices.",responsibilities:["Built resilient Stripe integration handling recurring enterprise subscriptions and webhooks with automated retries.","Developed responsive web dashboards using modern HTML5, CSS3, and JavaScript.","Optimized relational database queries and indexed large MySQL tables, improving search response time by 4.5x."],achievements:["Successfully integrated 3rd-party financial APIs with zero security compliance defects."],skillsUsed:["JavaScript","Node.js","Express","MySQL","Stripe API","REST APIs","HTML/CSS"]}],projects:[{id:"proj-1",title:"AuraCloud - Micro-Frontend SaaS Dashboard",category:"Full Stack",subtitle:"High-concurrency analytics platform with real-time streaming charts and cloud resource monitoring.",description:"A comprehensive enterprise SaaS platform designed to monitor multi-cloud server metrics, API throughput, and infrastructure costs in real-time. Features modular widget configurations, dark UI theme with high-contrast data visualization, and instant push notifications.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",technologies:["TypeScript","React","Node.js","WebSockets","D3.js","Tailwind CSS","AWS ECS"],githubUrl:"https://github.com/leosaputra-219/auracloud-dashboard",liveUrl:"https://auracloud-demo.example.com",featured:!0,metrics:{latency:"<35ms",dailyUsers:"150K+",uptime:"99.99%"}},{id:"proj-2",title:"FlowState - Collaborative Canvas Engine",category:"Full Stack",subtitle:"Ultra-fast infinite canvas engine supporting multiplayer drawing, node wiring, and workflow export.",description:"Interactive browser canvas built with high-performance WebGL & Vanilla JS rendering pipeline. Supports real-time peer-to-peer multiplayer collaboration via WebSockets, automatic state syncing, and SVG/PDF export options.",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",technologies:["Vanilla JS","HTML5 Canvas","WebSockets","Node.js","Redis","CSS3"],githubUrl:"https://github.com/leosaputra-219/flowstate-canvas",liveUrl:"https://flowstate-canvas.example.com",featured:!0,metrics:{fps:"60 FPS locked",maxNodes:"10,000+",syncSpeed:"<12ms"}},{id:"proj-3",title:"NeuralOps - AI Log Analyzer & Threat Detector",category:"Cloud & AI",subtitle:"Automated security log triage tool powered by vector search and automated anomaly detection.",description:"DevOps security tool that ingest system syslog streams, parses structured JSON logs, and automatically highlights security anomalies, DDoS patterns, and credential leaks using machine learning algorithms.",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",technologies:["Python","FastAPI","React","Vector Database","Docker","PyTorch"],githubUrl:"https://github.com/leosaputra-219/neuralops-analyzer",liveUrl:"https://neuralops.example.com",featured:!0,metrics:{ingestionRate:"50K log/sec",accuracy:"98.4%",costReduction:"45%"}},{id:"proj-4",title:"OmniCart - Headless E-Commerce Gateway",category:"Enterprise",subtitle:"High-speed multi-currency checkout engine integrated with global payment gateways.",description:"Modular e-commerce API gateway and frontend storefront built for fast page speeds and low shopping cart abandonment. Includes inventory synchronization, Stripe / PayPal webhooks, and localized currency calculation.",image:"https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&q=80&w=1000",technologies:["Node.js","Express","TypeScript","PostgreSQL","Stripe API","GraphQL"],githubUrl:"https://github.com/leosaputra-219/omnicart-gateway",liveUrl:"https://omnicart-store.example.com",featured:!1,metrics:{checkoutTime:"1.8s avg",conversionBoost:"+22%"}},{id:"proj-5",title:"PulseSync - Mobile Fitness & Health Tracker",category:"Mobile",subtitle:"Cross-platform mobile dashboard for biometric telemetry and habit tracking.",description:"Clean mobile application featuring offline-first storage, Bluetooth HR sensor pairing, dynamic workout progress graphs, and encrypted local database sync.",image:"https://images.unsplash.com/photo-1510519138161-58446232811f?auto=format&fit=crop&q=80&w=1000",technologies:["JavaScript","React Native","SQLite","Bluetooth LE API","REST"],githubUrl:"https://github.com/leosaputra-219/pulsesync-app",liveUrl:"https://pulsesync.example.com",featured:!1,metrics:{appRating:"4.9 / 5.0",downloads:"80,000+"}},{id:"proj-6",title:"DevMetrics - Open-Source GitHub Insights CLI",category:"Cloud & AI",subtitle:"Developer analytics tool for evaluating PR velocity, reviewer latency, and code churn.",description:"CLI utility and companion web report generator that analyzes GitHub organization repositories to visualize pull request review turnaround times and spot team bottlenecks.",image:"https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&q=80&w=1000",technologies:["Go (Golang)","GraphQL API","HTML5","Chart.js"],githubUrl:"https://github.com/leosaputra-219/devmetrics-cli",liveUrl:"https://devmetrics.example.com",featured:!1,metrics:{githubStars:"1,200+",forks:"180+"}}],certificates:[{id:"cert-1",title:"AWS Certified Solutions Architect – Professional",issuer:"Amazon Web Services (AWS)",issueDate:"Jan 2024",expiryDate:"Jan 2027",credentialId:"AWS-PSA-90823411",verifyUrl:"https://aws.amazon.com/verification",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",badge:"Cloud Architecture"},{id:"cert-2",title:"Google Cloud Professional Cloud Architect",issuer:"Google Cloud Certification",issueDate:"Nov 2023",expiryDate:"Nov 2025",credentialId:"GCP-PCA-449102",verifyUrl:"https://cloud.google.com/certification",image:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600",badge:"GCP Specialist"},{id:"cert-3",title:"Certified Kubernetes Administrator (CKA)",issuer:"Cloud Native Computing Foundation (CNCF)",issueDate:"May 2023",expiryDate:"May 2026",credentialId:"CKA-8819203",verifyUrl:"https://cncf.io/certification/cka",image:"https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=600",badge:"DevOps & K8s"},{id:"cert-4",title:"Meta Professional Senior Frontend Architect",issuer:"Meta / Coursera Specialization",issueDate:"Aug 2022",expiryDate:"Lifetime",credentialId:"META-FE-772910",verifyUrl:"https://coursera.org/verify/meta-fe",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",badge:"Frontend Lead"}],education:[{degree:"Master of Science in Computer Science & Distributed Systems",institution:"Stanford University",period:"2016 - 2018",gpa:"3.92 / 4.00",description:"Focused on distributed algorithms, operating systems, cloud database design, and high-performance computing.",highlights:["Graduate Teaching Assistant for CS106B","Dean's List with Distinction","Published paper on Distributed consensus algorithms"]},{degree:"Bachelor of Science in Software Engineering",institution:"University of California, Berkeley",period:"2012 - 2016",gpa:"3.88 / 4.00",description:"Comprehensive coursework in Data Structures & Algorithms, Computer Architecture, Web Engineering, and Linear Algebra.",highlights:["Lead President of Association for Computing Machinery (ACM)","First Place in Annual Hackathon 2015"]}],blogArticles:[{id:"post-1",slug:"building-resilient-microservices-nodejs",title:"Building Resilient Microservices with Node.js & Circuit Breakers",category:"Architecture",readTime:"7 min read",date:"July 18, 2026",summary:"Explore how to implement production-grade resilience patterns, circuit breakers, rate limiters, and graceful fallback mechanisms in high-throughput Node.js microservice clusters.",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",featured:!0,content:`
        <p class="article-lead">In distributed backend architectures, service failures are inevitable. Network jitters, database locks, and third-party API outages can cascade quickly if your Node.js services are not architected with defensive resilience patterns.</p>
        
        <h3>The Anatomy of Cascading Failures</h3>
        <p>When Service A calls Service B with a standard timeout of 30 seconds, a bottleneck in Service B causes requests in Service A to stack up. Threads or event loop handles fill up, leading to exhaustion of memory and CPU across your entire backend topology.</p>

        <h3>Implementing the Circuit Breaker Pattern</h3>
        <p>A circuit breaker acts as an automatic electrical switch. It wraps external calls and tracks error thresholds over a sliding time window. It has three primary states:</p>
        <ul>
          <li><strong>Closed:</strong> Normal operating state. Requests flow freely.</li>
          <li><strong>Open:</strong> Error rate exceeded the threshold. Calls fail fast immediately without waiting for timeouts.</li>
          <li><strong>Half-Open:</strong> Periodically tests if the downstream dependency has recovered.</li>
        </ul>

        <div class="code-block-wrapper">
          <pre><code>// Example Circuit Breaker implementation in Node.js
class CircuitBreaker {
  constructor(requestFn, options = {}) {
    this.requestFn = requestFn;
    this.failureThreshold = options.failureThreshold || 5;
    this.cooldownPeriod = options.cooldownPeriod || 10000;
    this.state = 'CLOSED';
    this.failureCount = 0;
    this.lastStateChange = Date.now();
  }

  async execute(...args) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastStateChange > this.cooldownPeriod) {
        this.state = 'HALF-OPEN';
      } else {
        throw new Error('CircuitBreaker: Call blocked (Circuit is OPEN)');
      }
    }

    try {
      const response = await this.requestFn(...args);
      this.reset();
      return response;
    } catch (err) {
      this.recordFailure();
      throw err;
    }
  }

  recordFailure() {
    this.failureCount++;
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
      this.lastStateChange = Date.now();
    }
  }

  reset() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }
}</code></pre>
        </div>

        <h3>Key Takeaways for Production</h3>
        <p>1. Always set strict connection timeouts on every outbound HTTP or gRPC request.<br/>
        2. Pair circuit breakers with exponential backoff retries and jitter.<br/>
        3. Expose circuit state metrics via Prometheus endpoints for real-time alerting.</p>
      `},{id:"post-2",slug:"mastering-vanilla-javascript-dom-performance",title:"Mastering Vanilla JavaScript: Zero-Dependency High Performance UI",category:"Frontend",readTime:"9 min read",date:"June 24, 2026",summary:"Why writing modern native Vanilla JavaScript without framework overhead leads to superior Core Web Vitals, instant hydration, and unmatched application speed.",image:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",featured:!0,content:`
        <p class="article-lead">While modern frameworks like React, Vue, and Angular provide helpful abstractions, native browser APIs have evolved dramatically. Modern Vanilla JavaScript offers hardware-accelerated performance, zero build bundle bloat, and pure control over DOM mutations.</p>

        <h3>1. Direct DOM Manipulation with DocumentFragment</h3>
        <p>When appending multiple DOM nodes, updating the DOM inside a loop causes repeated browser reflows and repaints. Utilizing <code>DocumentFragment</code> batches changes into a single paint cycle:</p>

        <div class="code-block-wrapper">
          <pre><code>// Batching updates in Vanilla JS
const fragment = document.createDocumentFragment();
items.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = item.name;
  fragment.appendChild(card);
});
document.getElementById('grid-container').appendChild(fragment);</code></pre>
        </div>

        <h3>2. Utilizing Event Delegation for Memory Optimization</h3>
        <p>Instead of binding individual click listeners to hundreds of list items or project cards, attach a single listener to the parent container and leverage <code>event.target.closest()</code>.</p>

        <h3>3. IntersectionObserver for Fluid Scroll Animations</h3>
        <p>Scroll event listeners run on every frame and can degrade scrolling smoothness. Replacing scroll event handlers with <code>IntersectionObserver</code> offloads scroll detection directly to the browser compositor thread.</p>
      `},{id:"post-3",slug:"demystifying-web-security-oauth2-oidc-pkce",title:"Demystifying Web Security: OAuth 2.0, OIDC, and PKCE Flow",category:"Security",readTime:"11 min read",date:"May 12, 2026",summary:"A practical breakdown of how single sign-on (SSO), Authorization Code Flow with PKCE, and JWT verification protect web applications against modern attack vectors.",image:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",featured:!1,content:`
        <p class="article-lead">Security is not an afterthought—it is the bedrock of modern application engineering. Proof Key for Code Exchange (PKCE) is now the gold standard security flow for single-page applications and mobile clients.</p>
        <p>By generating a dynamic <code>code_verifier</code> and <code>code_challenge</code> pair for every authentication request, PKCE prevents authorization code injection and man-in-the-middle attacks even if client secrets are exposed.</p>
      `},{id:"post-4",slug:"optimizing-postgresql-query-indexing-strategies",title:"Optimizing PostgreSQL: Indexing Strategies for Large Scale Tables",category:"Database",readTime:"6 min read",date:"April 05, 2026",summary:"Learn how B-Tree, GIN, and BRIN indexes work in PostgreSQL, and how to analyze EXPLAIN ANALYZE queries to slash query execution time by 90%.",image:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",featured:!1,content:`
        <p class="article-lead">As database tables grow beyond millions of records, sequential table scans destroy query performance. Choosing the right index type is crucial for database scaling.</p>
        <p>This guide covers composite B-Tree indexes, partial indexing for filtered status queries, and GIN indexes for JSONB document columns in PostgreSQL.</p>
      `}],testimonials:[{quote:"Alex is one of the rare software architects who combines deep technical expertise in cloud infrastructure with exceptional product vision. He transformed our core telemetry platform, enabling us to handle 3x user scale with zero latency degradation.",name:"Marcus Vance",title:"VP of Engineering",company:"Nexus Cloud Systems",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",rating:5},{quote:"Working with Alex on our collaborative canvas engine was an incredible experience. His mastery of browser rendering, WebSockets, and clean code architecture elevated the entire engineering team's output standard.",name:"Dr. Elena Rostova",title:"Head of Product",company:"Pulse Analytics",avatar:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",rating:5},{quote:"Alex delivered our complex micro-services platform ahead of schedule with flawless test coverage and clear documentation. His leadership and problem-solving mindset make him an asset to any organization.",name:"David Sterling",title:"CTO & Co-Founder",company:"Vanguard Tech Labs",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",rating:5}]};window.COMPONENTS={showToast:(t,e="success")=>{let i=document.getElementById("toast-container");i||(i=document.createElement("div"),i.id="toast-container",i.className="toast-container",document.body.appendChild(i));const r=document.createElement("div");r.className=`toast toast-${e}`,r.innerHTML=`
      <i data-lucide="${e==="success"?"check-circle":"alert-circle"}"></i>
      <span>${t}</span>
    `,i.appendChild(r),window.lucide&&window.lucide.createIcons(),setTimeout(()=>{r.style.opacity="0",r.style.transform="translateX(100%)",setTimeout(()=>r.remove(),300)},4e3)},openModal:(t,e)=>{let i=document.getElementById("global-modal");i||(i=document.createElement("div"),i.id="global-modal",i.className="modal-backdrop",i.innerHTML=`
        <div class="modal-content-box">
          <button class="modal-close-btn" id="modal-close-trigger" aria-label="Close modal">
            <i data-lucide="x"></i>
          </button>
          <div id="modal-body-content"></div>
        </div>
      `,document.body.appendChild(i),i.addEventListener("click",s=>{(s.target===i||s.target.closest("#modal-close-trigger"))&&window.COMPONENTS.closeModal()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&i.classList.contains("active")&&window.COMPONENTS.closeModal()}));const r=document.getElementById("modal-body-content");r.innerHTML=`
      <h2 class="gradient-text" style="margin-bottom: 1.5rem; font-size: 1.8rem;">${t}</h2>
      <div>${e}</div>
    `,i.classList.add("active"),document.body.style.overflow="hidden",window.lucide&&window.lucide.createIcons();const a=i.querySelector(".modal-content-box");a&&a.animate([{opacity:0,transform:"translateY(16px) scale(0.95)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:260,easing:"cubic-bezier(0.34, 1.56, 0.64, 1)",fill:"both"})},closeModal:()=>{const t=document.getElementById("global-modal");t&&(t.classList.remove("active"),document.body.style.overflow="auto")}};window.PROJECTS_MODULE={init:()=>{const t=document.getElementById("projects-grid"),e=document.getElementById("projects-filter-bar"),i=document.getElementById("project-search-input");if(!t||!window.PORTFOLIO_DATA)return;let r="All",a="";const s=()=>{const n=window.PORTFOLIO_DATA.projects.filter(o=>{const c=r==="All"||o.category===r,d=o.title.toLowerCase().includes(a.toLowerCase())||o.description.toLowerCase().includes(a.toLowerCase())||o.technologies.some(l=>l.toLowerCase().includes(a.toLowerCase()));return c&&d});if(n.length===0){t.innerHTML=`
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
            <i data-lucide="folder-search" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 1rem;"></i>
            <h3>No projects match your search criteria</h3>
            <p style="color: var(--text-muted); margin-top: 0.5rem;">Try refining your category or search term.</p>
          </div>
        `,window.lucide&&window.lucide.createIcons();return}t.innerHTML=n.map(o=>`
        <article class="project-card" data-project-id="${o.id}">
          <div class="project-img-wrapper">
            <img src="${o.image}" alt="${o.title}" class="project-img" loading="lazy" />
            <span class="project-category-badge">${o.category}</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">${o.title}</h3>
            <p class="project-subtitle">${o.subtitle}</p>
            
            <div class="tech-tags">
              ${o.technologies.map(c=>`<span class="tech-tag">${c}</span>`).join("")}
            </div>

            <div class="project-footer">
              <button class="btn btn-sm btn-secondary view-project-btn" data-id="${o.id}">
                <i data-lucide="eye"></i> Case Study
              </button>
              <div class="project-links">
                <a href="${o.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="View Source Code" aria-label="GitHub Source Code">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="${o.liveUrl}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="Live Application Demo" aria-label="Live Demo">
                  <i data-lucide="external-link"></i>
                </a>
              </div>
            </div>
          </div>
        </article>
      `).join(""),window.lucide&&window.lucide.createIcons(),t.querySelectorAll(".view-project-btn").forEach(o=>{o.addEventListener("click",()=>{const c=o.getAttribute("data-id");window.PROJECTS_MODULE.openProjectModal(c)})})};e&&e.querySelectorAll(".filter-btn").forEach(n=>{n.addEventListener("click",()=>{e.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),n.classList.add("active"),r=n.getAttribute("data-category"),s()})}),i&&i.addEventListener("input",n=>{a=n.target.value,s()}),s()},openProjectModal:t=>{const e=window.PORTFOLIO_DATA.projects.find(r=>r.id===t);if(!e)return;const i=`
      <div style="margin-bottom: 1.5rem;">
        <img src="${e.image}" alt="${e.title}" style="width: 100%; height: 320px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 1.5rem;" />
        
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem; flex-wrap: wrap;">
          <span class="project-category-badge" style="position: static;">${e.category}</span>
          <span style="color: var(--text-muted); font-size: 0.9rem;">Architected & Developed by Leo Saputra</span>
        </div>

        <p style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 1.5rem; line-height: 1.7;">
          ${e.description}
        </p>

        <h4 style="margin-bottom: 0.75rem; color: var(--accent-primary);">Key Architectural Metrics</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem; background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          ${Object.entries(e.metrics).map(([r,a])=>`
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">${r}</div>
              <div style="font-size: 1.25rem; font-weight: 700; color: var(--accent-emerald);">${a}</div>
            </div>
          `).join("")}
        </div>

        <h4 style="margin-bottom: 0.75rem;">Technologies & Stack</h4>
        <div class="tech-tags" style="margin-bottom: 2rem;">
          ${e.technologies.map(r=>`<span class="tech-tag" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;">${r}</span>`).join("")}
        </div>

        <div style="display: flex; gap: 1rem;">
          <a href="${e.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i data-lucide="external-link"></i> Launch Live Demo
          </a>
          <a href="${e.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <i data-lucide="github"></i> View Repository
          </a>
        </div>
      </div>
    `;window.COMPONENTS.openModal(e.title,i)}};window.BLOG_MODULE={init:()=>{const t=document.getElementById("blog-grid"),e=document.getElementById("blog-search-input"),i=document.getElementById("blog-category-filter");if(!t||!window.PORTFOLIO_DATA)return;let r="All",a="";const s=()=>{const n=window.PORTFOLIO_DATA.blogArticles.filter(o=>{const c=r==="All"||o.category===r,d=o.title.toLowerCase().includes(a.toLowerCase())||o.summary.toLowerCase().includes(a.toLowerCase())||o.category.toLowerCase().includes(a.toLowerCase());return c&&d});if(n.length===0){t.innerHTML=`
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
            <i data-lucide="book-open" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 1rem;"></i>
            <h3>No articles found</h3>
            <p style="color: var(--text-muted); margin-top: 0.5rem;">Try adjusting your search query or topic filter.</p>
          </div>
        `,window.lucide&&window.lucide.createIcons();return}t.innerHTML=n.map(o=>`
        <article class="blog-card" data-post-id="${o.id}">
          <img src="${o.image}" alt="${o.title}" class="blog-img" loading="lazy" />
          <div class="blog-body">
            <div class="blog-meta">
              <span style="color: var(--accent-primary); font-weight: 600;">${o.category}</span>
              <span>•</span>
              <span>${o.readTime}</span>
              <span>•</span>
              <span>${o.date}</span>
            </div>
            <h3 class="blog-title">${o.title}</h3>
            <p class="blog-summary">${o.summary}</p>
            <button class="btn btn-sm btn-secondary read-article-btn" data-id="${o.id}">
              Read Full Article <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </article>
      `).join(""),window.lucide&&window.lucide.createIcons(),t.querySelectorAll(".read-article-btn").forEach(o=>{o.addEventListener("click",()=>{const c=o.getAttribute("data-id");window.BLOG_MODULE.openArticleModal(c)})})};i&&i.querySelectorAll(".filter-btn").forEach(n=>{n.addEventListener("click",()=>{i.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),n.classList.add("active"),r=n.getAttribute("data-category"),s()})}),e&&e.addEventListener("input",n=>{a=n.target.value,s()}),s()},openArticleModal:t=>{const e=window.PORTFOLIO_DATA.blogArticles.find(r=>r.id===t);if(!e)return;const i=`
      <div style="margin-bottom: 2rem;">
        <img src="${e.image}" alt="${e.title}" style="width: 100%; height: 320px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 1.5rem;" />
        
        <div class="blog-meta" style="margin-bottom: 1.5rem;">
          <span style="color: var(--accent-primary); font-weight: 600;">${e.category}</span>
          <span>•</span>
          <span>${e.readTime}</span>
          <span>•</span>
          <span>${e.date}</span>
        </div>

        <div class="article-body-text" style="line-height: 1.8; color: var(--text-secondary);">
          ${e.content}
        </div>

        <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
          <div style="font-size: 0.9rem; color: var(--text-muted);">Written by <strong>Leo Saputra</strong></div>
          <button class="btn btn-sm btn-secondary" onclick="window.COMPONENTS.closeModal()">
            <i data-lucide="arrow-left"></i> Back to Articles
          </button>
        </div>
      </div>
    `;window.COMPONENTS.openModal(e.title,i)}};window.EXPERIENCE_MODULE={init:()=>{window.EXPERIENCE_MODULE.renderSkills(),window.EXPERIENCE_MODULE.renderExperienceTimeline(),window.EXPERIENCE_MODULE.renderEducation(),window.EXPERIENCE_MODULE.renderCertificates()},renderSkills:()=>{const t=document.getElementById("skills-categories-grid");!t||!window.PORTFOLIO_DATA||(t.innerHTML=window.PORTFOLIO_DATA.skills.map(e=>`
      <div class="skill-category-card">
        <div class="skill-category-header">
          <i data-lucide="code" style="color: var(--accent-primary);"></i>
          <h3>${e.category}</h3>
        </div>

        <div class="skill-tags">
          ${e.items.map(i=>`
            <span class="skill-chip">${i.name}${i.badge?`<span class="chip-badge">${i.badge}</span>`:""}</span>
          `).join("")}
        </div>
      </div>
    `).join(""),window.lucide&&window.lucide.createIcons())},renderExperienceTimeline:()=>{const t=document.getElementById("experience-timeline");!t||!window.PORTFOLIO_DATA||(t.innerHTML=window.PORTFOLIO_DATA.experience.map(e=>`
      <div class="timeline-item">
        <div class="timeline-dot">
          <i data-lucide="briefcase" style="width: 14px; height: 14px; color: var(--accent-primary);"></i>
        </div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <div class="timeline-role">${e.role}</div>
              <div class="timeline-company">${e.company} • ${e.location}</div>
            </div>
            <span class="timeline-period">${e.period}</span>
          </div>
          
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${e.description}</p>
          
          <ul class="timeline-list">
            ${e.responsibilities.map(i=>`<li>${i}</li>`).join("")}
          </ul>

          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-subtle);">
            <div style="font-size: 0.82rem; font-weight: 600; color: var(--accent-emerald); margin-bottom: 0.35rem;">Key Achievements:</div>
            ${e.achievements.map(i=>`<div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.25rem;">⚡ ${i}</div>`).join("")}
          </div>

          <div class="tech-tags">
            ${e.skillsUsed.map(i=>`<span class="tech-tag">${i}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join(""),window.lucide&&window.lucide.createIcons())},renderEducation:()=>{const t=document.getElementById("education-grid");!t||!window.PORTFOLIO_DATA||(t.innerHTML=window.PORTFOLIO_DATA.education.map(e=>`
      <div class="timeline-card" style="margin-bottom: 1.5rem;">
        <div class="timeline-header">
          <div>
            <div class="timeline-role">${e.degree}</div>
            <div class="timeline-company">${e.institution}</div>
          </div>
          <span class="timeline-period">${e.period} • GPA: ${e.gpa}</span>
        </div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${e.description}</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.75rem;">
          ${e.highlights.map(i=>`<span class="tech-tag" style="background: rgba(56, 189, 248, 0.08); color: var(--accent-primary); border-color: rgba(56, 189, 248, 0.2);">${i}</span>`).join("")}
        </div>
      </div>
    `).join(""))},renderCertificates:()=>{const t=document.getElementById("certs-grid");!t||!window.PORTFOLIO_DATA||(t.innerHTML=window.PORTFOLIO_DATA.certificates.map(e=>`
      <div class="cert-card">
        <img src="${e.image}" alt="${e.title}" class="cert-thumb" loading="lazy" />
        <span class="skill-badge" style="margin-bottom: 0.5rem; display: inline-block;">${e.badge}</span>
        <h4 class="cert-title">${e.title}</h4>
        <div class="cert-issuer">${e.issuer}</div>
        <div class="cert-meta">Issued: ${e.issueDate} • Credential ID: ${e.credentialId}</div>
        
        <div style="margin-top: 1.25rem;">
          <a href="${e.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" style="width: 100%;">
            <i data-lucide="award"></i> Verify Credential
          </a>
        </div>
      </div>
    `).join(""),window.lucide&&window.lucide.createIcons())}};window.CONTACT_MODULE={init:()=>{const t=document.getElementById("contact-form");t&&t.addEventListener("submit",e=>{e.preventDefault();const i=document.getElementById("contact-name"),r=document.getElementById("contact-email"),a=document.getElementById("contact-subject"),s=document.getElementById("contact-message");let n=!0;document.querySelectorAll(".form-error-text").forEach(l=>l.classList.remove("active")),document.querySelectorAll(".form-control").forEach(l=>l.classList.remove("error")),i.value.trim()||(window.CONTACT_MODULE.showError("name-error","Please enter your full name."),i.classList.add("error"),n=!1);const o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if((!r.value.trim()||!o.test(r.value.trim()))&&(window.CONTACT_MODULE.showError("email-error","Please enter a valid email address."),r.classList.add("error"),n=!1),a.value.trim()||(window.CONTACT_MODULE.showError("subject-error","Please enter a subject line."),a.classList.add("error"),n=!1),(!s.value.trim()||s.value.trim().length<10)&&(window.CONTACT_MODULE.showError("message-error","Please enter a message (at least 10 characters)."),s.classList.add("error"),n=!1),!n)return;const c=t.querySelector('button[type="submit"]'),d=c.innerHTML;c.disabled=!0,c.innerHTML='<i data-lucide="loader-2" class="spin"></i> Sending message...',window.lucide&&window.lucide.createIcons(),setTimeout(()=>{c.disabled=!1,c.innerHTML=d,window.lucide&&window.lucide.createIcons(),window.COMPONENTS.showToast("Thank you! Your message has been transmitted successfully.","success"),window.COMPONENTS.openModal("Message Received!",`
          <div style="text-align: center; padding: 1rem 0;">
            <div style="width: 60px; height: 60px; background: rgba(16, 185, 129, 0.1); color: var(--accent-emerald); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
              <i data-lucide="check-circle-2" style="width: 36px; height: 36px;"></i>
            </div>
            <h3 style="margin-bottom: 0.75rem;">Thanks for reaching out, ${i.value.trim()}!</h3>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
              Your inquiry regarding <strong>"${a.value.trim()}"</strong> has been logged. Alex will review your message and reply to <strong>${r.value.trim()}</strong> within 24 hours.
            </p>
            <button class="btn btn-primary" onclick="window.COMPONENTS.closeModal()">
              Done
            </button>
          </div>
        `),t.reset()},1200)})},showError:(t,e)=>{const i=document.getElementById(t);i&&(i.textContent=e,i.classList.add("active"))}};window.RESUME_MODULE={init:()=>{document.querySelectorAll(".trigger-cv-modal").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),window.RESUME_MODULE.openResumeModal()})})},buildCVBody:()=>{const t=window.PORTFOLIO_DATA.profile,e=window.PORTFOLIO_DATA.experience,i=window.PORTFOLIO_DATA.education;return`
      <div id="printable-cv" style="color: var(--text-primary); font-family: var(--font-family);">
        <!-- CV Header -->
        <div style="text-align: center; border-bottom: 2px solid var(--border-subtle); padding-bottom: 1.5rem; margin-bottom: 2rem;">
          <h1 style="font-size: 2.2rem; margin-bottom: 0.25rem;" class="gradient-text">${t.name}</h1>
          <div style="font-size: 1.1rem; color: var(--accent-primary); font-weight: 600; margin-bottom: 0.75rem;">${t.title}</div>
          <div style="font-size: 0.9rem; color: var(--text-muted); display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <span>📍 ${t.location}</span>
            <span>✉️ ${t.email}</span>
            <span>📞 ${t.phone}</span>
            <span>🔗 ${t.github.replace("https://","")}</span>
          </div>
        </div>

        <!-- Executive Summary -->
        <div style="margin-bottom: 2rem;">
          <h3 style="color: var(--accent-primary); border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.4rem; margin-bottom: 0.75rem;">Executive Summary</h3>
          <p style="color: var(--text-secondary); line-height: 1.6;">${t.bio}</p>
        </div>

        <!-- Professional Experience -->
        <div style="margin-bottom: 2rem;">
          <h3 style="color: var(--accent-primary); border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.4rem; margin-bottom: 1rem;">Work Experience</h3>
          ${e.map(r=>`
            <div style="margin-bottom: 1.5rem;">
              <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.05rem;">
                <span>${r.role} — <span style="color: var(--accent-primary);">${r.company}</span></span>
                <span style="color: var(--text-muted); font-size: 0.9rem;">${r.period}</span>
              </div>
              <ul style="margin: 0.5rem 0 0.5rem 1.25rem; color: var(--text-secondary); font-size: 0.92rem;">
                ${r.responsibilities.map(a=>`<li style="margin-bottom: 0.35rem;">${a}</li>`).join("")}
              </ul>
            </div>
          `).join("")}
        </div>

        <!-- Education -->
        <div style="margin-bottom: 2rem;">
          <h3 style="color: var(--accent-primary); border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.4rem; margin-bottom: 1rem;">Education</h3>
          ${i.map(r=>`
            <div style="margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; font-weight: 700;">
                <span>${r.degree}</span>
                <span style="color: var(--text-muted); font-size: 0.9rem;">${r.period}</span>
              </div>
              <div style="color: var(--text-secondary); font-size: 0.92rem;">${r.institution} • GPA: ${r.gpa}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `},openResumeModal:()=>{const t=`
      ${window.RESUME_MODULE.buildCVBody()}

      <!-- Action Controls -->
      <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
        <button class="btn btn-primary" onclick="window.RESUME_MODULE.downloadOfficialCV()">
          <i data-lucide="download"></i> Download Official CV (.pdf)
        </button>
      </div>
    `;window.COMPONENTS.openModal("Curriculum Vitae",t)},downloadOfficialCV:()=>{const t=window.PORTFOLIO_DATA.profile,e=window.open("","_blank","width=900,height=700");if(!e){window.COMPONENTS.showToast("Pop-up blocked — allow pop-ups to download the CV","error");return}const i=["--text-primary:#111827","--text-secondary:#374151","--text-muted:#6b7280","--border-subtle:#d1d5db","--accent-primary:#2563eb","--font-family:inherit"].join("; ");e.document.write(`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${t.name.replace(/\s+/g,"_")}_CV</title>
  <style>
    @page { size: A4; margin: 0; }
    body { margin: 0; padding: 32px; background: #fff; }
    @media print {
      html { font-size: 14px; }
      body { padding: 9mm; }
      #printable-cv > div { margin-bottom: 0.8rem !important; }
      #printable-cv p, #printable-cv li { line-height: 1.3 !important; }
      #printable-cv h3 { margin: 0.6rem 0 0.4rem !important; padding-bottom: 0.2rem !important; }
      * { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>
  <div id="printable-cv" style="${i}; max-width: 820px; margin: 0 auto;">
    ${window.RESUME_MODULE.buildCVBody()}
  </div>
  <script>
    window.onload = () => setTimeout(() => window.print(), 300);
  <\/script>
</body>
</html>`),e.document.close()}};window.PARTICLES_ENGINE={init:()=>{const t=document.getElementById("bg-canvas");if(!t)return;const e=t.getContext("2d");let i=t.width=window.innerWidth,r=t.height=window.innerHeight;const a=[],s=Math.min(Math.floor(i/25),55);class n{constructor(){this.reset()}reset(){this.x=Math.random()*i,this.y=Math.random()*r,this.radius=Math.random()*2+.5,this.vx=(Math.random()-.5)*.35,this.vy=(Math.random()-.5)*.35,this.alpha=Math.random()*.5+.1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>i||this.y<0||this.y>r)&&this.reset()}draw(){e.beginPath(),e.arc(this.x,this.y,this.radius,0,Math.PI*2),e.fillStyle=`rgba(56, 189, 248, ${this.alpha})`,e.fill()}}for(let c=0;c<s;c++)a.push(new n);const o=()=>{e.clearRect(0,0,i,r),a.forEach(c=>{c.update(),c.draw()});for(let c=0;c<a.length;c++)for(let d=c+1;d<a.length;d++){const l=a[c].x-a[d].x,m=a[c].y-a[d].y,u=Math.sqrt(l*l+m*m);u<110&&(e.beginPath(),e.moveTo(a[c].x,a[c].y),e.lineTo(a[d].x,a[d].y),e.strokeStyle=`rgba(56, 189, 248, ${.12*(1-u/110)})`,e.lineWidth=.5,e.stroke())}requestAnimationFrame(o)};o(),window.addEventListener("resize",()=>{i=t.width=window.innerWidth,r=t.height=window.innerHeight})}};document.addEventListener("DOMContentLoaded",()=>{window.lucide&&window.lucide.createIcons(),window.PARTICLES_ENGINE&&window.PARTICLES_ENGINE.init(),window.PROJECTS_MODULE&&window.PROJECTS_MODULE.init(),window.BLOG_MODULE&&window.BLOG_MODULE.init(),window.EXPERIENCE_MODULE&&window.EXPERIENCE_MODULE.init(),window.CONTACT_MODULE&&window.CONTACT_MODULE.init(),window.RESUME_MODULE&&window.RESUME_MODULE.init();const t=document.querySelector(".navbar"),e=document.querySelectorAll("section[id]"),i=document.querySelectorAll(".nav-link"),r=document.getElementById("scroll-progress"),a=document.getElementById("back-to-top");window.addEventListener("scroll",()=>{if(window.scrollY>30?t==null||t.classList.add("scrolled"):t==null||t.classList.remove("scrolled"),r){const p=document.documentElement.scrollHeight-window.innerHeight;r.style.width=`${p>0?window.scrollY/p*100:0}%`}a==null||a.classList.toggle("show",window.scrollY>400);let g="";e.forEach(p=>{const h=p.offsetTop-120,f=p.offsetHeight;window.scrollY>=h&&window.scrollY<h+f&&(g=p.getAttribute("id"))}),i.forEach(p=>{p.classList.remove("active"),p.getAttribute("href")===`#${g}`&&p.classList.add("active")})}),a==null||a.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));const s=document.getElementById("mobile-menu-toggle"),n=document.getElementById("mobile-nav-drawer"),o=document.getElementById("drawer-overlay"),c=document.getElementById("close-drawer-btn"),d=()=>{n==null||n.classList.add("open"),o==null||o.classList.add("active")},l=()=>{n==null||n.classList.remove("open"),o==null||o.classList.remove("active")};s==null||s.addEventListener("click",d),c==null||c.addEventListener("click",l),o==null||o.addEventListener("click",l),document.querySelectorAll(".mobile-nav-links a").forEach(g=>{g.addEventListener("click",l)});const m=document.getElementById("theme-toggle-btn");localStorage.getItem("portfolio_theme")==="light"&&document.body.classList.add("light-theme"),m==null||m.addEventListener("click",()=>{document.body.classList.toggle("light-theme");const g=document.body.classList.contains("light-theme");localStorage.setItem("portfolio_theme",g?"light":"dark"),window.COMPONENTS.showToast(`Switched to ${g?"Light":"Dark"} Theme`,"info")}),window.initTypewriter(),window.initCardTilt(),window.initTestimonials(),window.initMarquee(),window.initCursorGlow(),window.initStatCounters()});window.initTypewriter=()=>{const t=document.getElementById("hero-typed");if(!t)return;const e=["Senior Full-Stack Engineer","Solutions Architect","Cloud-Native Specialist","Distributed Systems Builder"];if(matchMedia("(prefers-reduced-motion: reduce)").matches){t.textContent=e[0];return}let i=0,r=0,a=!1;const s=()=>{const n=e[i];t.textContent=n.slice(0,r);let o=a?45:90;!a&&r===n.length?(o=1600,a=!0):a&&r===0&&(a=!1,i=(i+1)%e.length,o=400),r+=a?-1:1,setTimeout(s,o)};s()};window.initCardTilt=()=>{matchMedia("(prefers-reduced-motion: reduce)").matches||document.querySelectorAll(".project-card").forEach(t=>{const e=t.querySelector(".project-img-wrapper");e&&(t.addEventListener("mousemove",i=>{const r=t.getBoundingClientRect(),a=(i.clientX-r.left)/r.width-.5,s=(i.clientY-r.top)/r.height-.5;e.style.transform=`rotateY(${(a*12).toFixed(2)}deg) rotateX(${(-s*12).toFixed(2)}deg)`,t.style.setProperty("--mx",`${(i.clientX-r.left)/r.width*100}%`),t.style.setProperty("--my",`${(i.clientY-r.top)/r.height*100}%`)}),t.addEventListener("mouseleave",()=>{e.style.transform="rotateX(0deg) rotateY(0deg)"}))})};window.initMarquee=()=>{const t=document.getElementById("tech-marquee-track");if(!t||!window.PORTFOLIO_DATA)return;const i=window.PORTFOLIO_DATA.skills.flatMap(r=>r.items.map(a=>a.name)).map(r=>`<span class="marquee-chip">${r}</span>`).join("");t.innerHTML=`<div class="marquee-segment">${i}</div><div class="marquee-segment">${i}</div>`};window.initCursorGlow=()=>{const t=document.getElementById("cursor-glow");if(!t||matchMedia("(prefers-reduced-motion: reduce)").matches||!matchMedia("(pointer: fine)").matches)return;let e=null;window.addEventListener("pointermove",i=>{e||(e=requestAnimationFrame(()=>{e=null,t.style.transform=`translate3d(${i.clientX}px, ${i.clientY}px, 0)`}))},{passive:!0})};window.initStatCounters=()=>{const t=document.querySelectorAll(".stat-item-number");if(!t.length||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=r=>{const a=r.match(/^([\d.]+)(.*)$/);return a?{target:parseFloat(a[1]),suffix:a[2],decimals:(a[1].split(".")[1]||"").length}:null},i=new IntersectionObserver(r=>{r.forEach(a=>{if(!a.isIntersecting)return;const s=a.target,n=e(s.textContent);if(i.unobserve(s),!n)return;const o=performance.now(),c=1200,d=l=>{const m=Math.min((l-o)/c,1),u=1-Math.pow(1-m,3);s.textContent=(n.target*u).toFixed(n.decimals)+n.suffix,m<1&&requestAnimationFrame(d)};requestAnimationFrame(d)})},{threshold:.4});t.forEach(r=>i.observe(r))};window.initTestimonials=()=>{const t=document.getElementById("testimonials-container");if(!t||!window.PORTFOLIO_DATA)return;const e=window.PORTFOLIO_DATA.testimonials;let i=0,r=null;const a=()=>{r&&(clearInterval(r),r=null)},s=()=>{a(),!(e.length<2||matchMedia("(prefers-reduced-motion: reduce)").matches)&&(r=setInterval(()=>{i=(i+1)%e.length,n(i)},5e3))},n=o=>{var d,l,m;const c=e[o];t.innerHTML=`
      <div class="testimonial-card">
        <i data-lucide="quote" class="quote-icon"></i>
        <p class="testimonial-text">"${c.quote}"</p>
        <div class="testimonial-author">
          <img src="${c.avatar}" alt="${c.name}" class="author-avatar" />
          <div class="author-info">
            <h4>${c.name}</h4>
            <p>${c.title} — ${c.company}</p>
            <div style="color: var(--accent-amber); font-size: 0.85rem; margin-top: 0.2rem;">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
      
      <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1.5rem;">
        <button class="btn btn-sm btn-secondary" id="prev-testimonial">
          <i data-lucide="chevron-left"></i> Previous
        </button>
        <button class="btn btn-sm btn-secondary" id="next-testimonial">
          Next <i data-lucide="chevron-right"></i>
        </button>
      </div>
    `,window.lucide&&window.lucide.createIcons(),(d=t.querySelector(".testimonial-card"))==null||d.animate([{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}],{duration:400,fill:"both"}),(l=document.getElementById("prev-testimonial"))==null||l.addEventListener("click",()=>{i=(i-1+e.length)%e.length,n(i),s()}),(m=document.getElementById("next-testimonial"))==null||m.addEventListener("click",()=>{i=(i+1)%e.length,n(i),s()})};n(i),s()};function y(t,e,i){if(t instanceof EventTarget)return[t];{const a=document.querySelectorAll(t);return a?Array.from(a):[]}}const v={some:0,all:1};function w(t,e,{root:i,margin:r,amount:a="some"}={}){const s=y(t),n=new WeakMap,o=d=>{d.forEach(l=>{const m=n.get(l.target);if(l.isIntersecting!==!!m)if(l.isIntersecting){const u=e(l.target,l);typeof u=="function"?n.set(l.target,u):c.unobserve(l.target)}else typeof m=="function"&&(m(l),n.delete(l.target))})},c=new IntersectionObserver(o,{root:i,rootMargin:r,threshold:typeof a=="number"?a:v[a]});return s.forEach(d=>c.observe(d)),()=>c.disconnect()}document.addEventListener("DOMContentLoaded",()=>{const t=".section-header, .project-card, .blog-card, .skill-category-card, .timeline-card, .cert-card, .value-card",e=matchMedia("(prefers-reduced-motion: reduce)").matches,i=Array.from(document.querySelectorAll(t));e||(i.forEach(r=>{r.style.opacity="0",r.style.transform="translateY(24px)"}),w(t,r=>{if(r.dataset.revealed)return;r.dataset.revealed="1";const s=(r.parentElement?Array.from(r.parentElement.children):[r]).indexOf(r),n=s>0?Math.min(s,8)*70:0,o=r.animate([{opacity:0,transform:"translateY(24px)"},{opacity:1,transform:"translateY(0)"}],{duration:600,delay:n,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"both"});o.onfinish=()=>{r.style.opacity="1",r.style.transform="",o.cancel()}},{margin:"0px 0px -50px 0px"}))});
