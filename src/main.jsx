import React from "react";
import ReactDOM from "react-dom/client";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight, Menu, X, Code2, Palette, Sparkles, Github,
  Linkedin, Mail, MapPin, ExternalLink, Download, Layers3,
  Smartphone, Globe2, Terminal, ChevronDown
} from "lucide-react";
import "./index.css";

const nav = ["Home", "About", "Skills", "Projects", "Experience", "Services", "Contact"];

const skills = [
  { icon: Code2, n: "01", title: "Frontend Development", text: "Website modern, responsive, accessible, dan interactive.", tags: ["HTML5", "CSS3", "JavaScript", "React"] },
  { icon: Palette, n: "02", title: "UI / UX Design", text: "Interface bersih dengan fokus pada hierarchy, usability, dan visual impact.", tags: ["UI Design", "UX", "Responsive"] },
  { icon: Sparkles, n: "03", title: "Creative AI", text: "Generative AI untuk visual, ideation, prompt engineering, dan creative workflows.", tags: ["GenAI", "Prompting", "Visual"] },
  { icon: Terminal, n: "04", title: "Development Tools", text: "Workflow terstruktur untuk membangun, menguji, dan mengelola proyek.", tags: ["Git", "GitHub", "API"] },
];

const projects = [
  { no: "01", type: "WEB DEVELOPMENT", title: "Rattan Company Profile", text: "Website company profile premium untuk perusahaan industri rotan dengan product showcase, gallery, dan responsive interface.", tags: ["React", "Tailwind", "JavaScript"], tone: "from-lime-300/20 via-zinc-900 to-black" },
  { no: "02", type: "DIGITAL EXPERIENCE", title: "Premium Invitation", text: "Digital experience elegan dengan countdown, gallery, RSVP, maps, music player, dan smooth interactions.", tags: ["React", "Motion", "UI/UX"], tone: "from-cyan-300/15 via-zinc-900 to-black" },
  { no: "03", type: "AI CREATIVE TECH", title: "Cinematic AI Visuals", text: "Eksplorasi prompt engineering untuk cinematic portrait, advertising, fashion editorial, fantasy, dan visual storytelling.", tags: ["GenAI", "Prompting", "Creative"], tone: "from-violet-300/15 via-zinc-900 to-black" },
];

const services = [
  ["01", "Website Development", "Company profile, portfolio, landing page, dan custom website."],
  ["02", "UI / UX & Visual Design", "Interface modern, responsive, dan berorientasi pada user experience."],
  ["03", "AI Creative Solutions", "Prompt engineering, AI visual concept, dan creative workflow."],
  ["04", "Digital Branding", "Konsep visual dan digital presence untuk personal maupun bisnis."],
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, children }) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{children}</h2>
    </Reveal>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const go = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#070708] text-zinc-100">
      <motion.div className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-lime-300" style={{ scaleX }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070708]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between px-6 lg:px-10">
          <button onClick={() => go("home")} className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-[10px] transition group-hover:border-lime-300">AN</span>
            Arya<span className="text-lime-300">.</span>
          </button>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <button key={item} onClick={() => go(item)} className="text-xs text-zinc-500 transition hover:text-white">{item}</button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="border-t border-white/5 bg-[#09090b] px-6 py-5 md:hidden">
            {nav.map((item) => <button key={item} onClick={() => go(item)} className="block w-full py-3 text-left text-sm text-zinc-400">{item}</button>)}
          </motion.nav>
        )}
      </header>

      <main>
        <section id="home" className="relative mx-auto flex min-h-screen max-w-[1320px] items-center px-6 pb-16 pt-32 lg:px-10">
          <div className="hero-grid absolute inset-0 -z-10 opacity-40" />
          <div className="grid w-full gap-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <Reveal><p className="eyebrow flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_18px_#bef264]" /> AVAILABLE FOR FREELANCE</p></Reveal>
              <Reveal delay={0.08}><h1 className="hero-title">Building digital <span>experiences</span> that matter.</h1></Reveal>
              <Reveal delay={0.16}><p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">IT enthusiast, Web Developer & Creative Technologist yang menggabungkan teknologi, desain, dan AI untuk menciptakan produk digital modern.</p></Reveal>
              <Reveal delay={0.22}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <button onClick={() => go("projects")} className="btn-primary">Lihat Portfolio <ArrowUpRight size={15}/></button>
                  <button onClick={() => go("contact")} className="btn-ghost">Hubungi Saya</button>
                </div>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-16 flex gap-8">
                  {["Web Development", "UI / UX Design", "AI Creative Tech"].map((x, i) => <div key={x} className="border-l border-white/15 pl-3"><b className="font-display text-[10px] text-zinc-600">0{i+1}</b><p className="mt-1 text-[10px] text-zinc-400">{x}</p></div>)}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="hidden lg:block">
              <div className="relative mx-auto h-[500px] w-[500px] max-w-full">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute inset-12 rounded-full border border-zinc-800 border-r-lime-300/60" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 42, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-zinc-900 border-l-white/30" />
                <div className="absolute inset-28 grid place-items-center rounded-full border border-white/10 bg-gradient-to-br from-zinc-800 to-black shadow-[0_0_100px_rgba(190,242,100,.08)]">
                  <div className="text-center"><div className="font-display text-7xl font-bold tracking-[-.08em]">AN</div><p className="mt-2 text-[9px] tracking-[.35em] text-lime-300">CREATIVE TECHNOLOGY</p></div>
                </div>
                <div className="absolute bottom-5 right-0 text-right text-[9px] leading-5 tracking-[.25em] text-zinc-700">WEB<br/>AI<br/>DESIGN</div>
              </div>
            </Reveal>
          </div>
          <button onClick={() => go("about")} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-700 transition hover:text-lime-300"><ChevronDown className="animate-bounce" size={18}/></button>
        </section>

        <section id="about" className="section-wrap border-t">
          <div className="section-layout">
            <div className="section-number">01 / ABOUT</div>
            <div><SectionTitle eyebrow="WHO I AM">Technology with a <span>creative edge.</span></SectionTitle>
              <div className="mt-10 grid gap-8 md:grid-cols-2 text-sm leading-7 text-zinc-500"><p>Saya adalah IT enthusiast yang berfokus pada pengembangan website, interface digital, dan creative technology. Saya menikmati proses mengubah ide menjadi pengalaman digital yang cepat, responsif, dan memorable.</p><p>Dengan pendekatan design-driven development dan AI-assisted workflow, saya membangun solusi yang tidak hanya terlihat bagus, tetapi juga memiliki struktur, usability, dan tujuan yang jelas.</p></div>
              <div className="mt-16 grid grid-cols-3 gap-5 border-t border-white/10 pt-6">{[["10+","Creative Projects"],["5+","Core Technologies"],["100%","Passion for Tech"]].map(([n,t])=><div key={t}><b className="font-display text-3xl">{n}</b><p className="mt-1 text-[10px] text-zinc-600">{t}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap border-y bg-[#0b0c0e]">
          <div className="section-layout">
            <div className="section-number">02 / SKILLS</div>
            <div><SectionTitle eyebrow="MY TOOLKIT">Skills that turn ideas into <span>products.</span></SectionTitle>
              <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
                {skills.map((s,i)=>{const Icon=s.icon; return <Reveal delay={i*.05} key={s.title}><article className="group min-h-[250px] bg-[#0b0c0e] p-7 transition hover:bg-[#111216]"><div className="flex justify-between"><Icon className="text-lime-300" size={21}/><b className="text-[10px] text-zinc-700">{s.n}</b></div><h3 className="mt-12 font-display text-xl">{s.title}</h3><p className="mt-3 max-w-md text-xs leading-6 text-zinc-600">{s.text}</p><div className="mt-6 flex flex-wrap gap-1.5">{s.tags.map(t=><span className="chip" key={t}>{t}</span>)}</div></article></Reveal>})}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-wrap">
          <div className="section-layout">
            <div className="section-number">03 / PROJECTS</div>
            <div><SectionTitle eyebrow="SELECTED WORK">Projects built with <span>purpose.</span></SectionTitle>
              <div className="mt-12 space-y-24">{projects.map((p,i)=><Reveal key={p.title} delay={i*.05}><article className={`grid items-center gap-10 lg:grid-cols-2 ${i%2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className={`project-visual bg-gradient-to-br ${p.tone}`}><span className="absolute left-5 top-5 text-[10px] text-zinc-600">{p.no}</span><div className="mx-auto w-4/5 rounded border border-white/10 bg-black/50 p-4 shadow-2xl backdrop-blur"><div className="flex gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-zinc-700"/><i className="h-1.5 w-1.5 rounded-full bg-zinc-700"/><i className="h-1.5 w-1.5 rounded-full bg-zinc-700"/></div><div className="mt-7 h-32 rounded bg-gradient-to-br from-white/10 to-transparent"/></div></div>
                <div><p className="eyebrow">{p.type}</p><h3 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">{p.title}</h3><p className="mt-5 max-w-lg text-sm leading-7 text-zinc-600">{p.text}</p><div className="mt-6 flex flex-wrap gap-2">{p.tags.map(t=><span className="chip" key={t}>{t}</span>)}</div><button className="mt-7 flex items-center gap-2 text-xs text-zinc-400 transition hover:text-lime-300">View project <ExternalLink size={13}/></button></div>
              </article></Reveal>)}</div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-wrap border-y bg-[#0b0c0e]">
          <div className="section-layout">
            <div className="section-number">04 / EXPERIENCE</div>
            <div><SectionTitle eyebrow="CAREER PATH">Always learning.<br/>Always <span>building.</span></SectionTitle>
              <div className="mt-10 border-t border-white/10">{[["2026 — NOW","Freelance IT & Digital Creative","Membangun website, digital branding, UI/UX, dan creative AI projects untuk berbagai kebutuhan digital."],["2026","Web Development Projects","Mengerjakan company profile, landing page, portfolio, dan digital experience berbasis modern web technologies."],["ONGOING","Creative Technology","Mengembangkan workflow AI-assisted untuk mempercepat ideation, visual development, dan content production."]].map(([year,title,text])=><div className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[170px_1fr]" key={title}><span className="text-[10px] tracking-widest text-zinc-600">{year}</span><div><h3 className="font-display text-xl">{title}</h3><p className="mt-3 max-w-2xl text-xs leading-6 text-zinc-600">{text}</p></div></div>)}</div>
            </div>
          </div>
        </section>

        <section id="services" className="section-wrap">
          <div className="section-layout">
            <div className="section-number">05 / SERVICES</div>
            <div><SectionTitle eyebrow="WHAT I DO">Digital solutions made <span>simple.</span></SectionTitle>
              <div className="mt-10 border-t border-white/10">{services.map(([n,title,text])=><motion.div whileHover={{x:8}} key={n} className="grid grid-cols-[45px_1fr_30px] gap-4 border-b border-white/10 py-7 md:grid-cols-[70px_1fr_1fr_30px]"><b className="text-[10px] text-zinc-600">{n}</b><h3 className="font-display text-lg md:text-xl">{title}</h3><p className="hidden text-xs leading-6 text-zinc-600 md:block">{text}</p><ArrowUpRight size={16} className="text-lime-300"/></motion.div>)}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t bg-[#101114] px-6 py-36 text-center lg:px-10">
          <Reveal><p className="eyebrow">06 / CONTACT</p><h2 className="contact-title">Have an idea?<br/><span>Let's build it.</span></h2><p className="mx-auto max-w-lg text-sm leading-7 text-zinc-600">Terbuka untuk freelance, kolaborasi, project website, dan creative technology.</p><a href="mailto:yourname@email.com" className="mt-10 inline-flex items-center gap-3 border-b border-zinc-700 pb-2 font-display text-xl transition hover:border-lime-300 hover:text-lime-300">yourname@email.com <ArrowUpRight size={18}/></a><div className="mt-12 flex justify-center gap-7 text-xs text-zinc-600"><a href="#" className="hover:text-white">GitHub</a><a href="#" className="hover:text-white">LinkedIn</a><a href="#" className="hover:text-white">Instagram</a></div></Reveal>
        </section>
      </main>

      <footer className="flex flex-col justify-between gap-3 border-t border-white/5 px-6 py-7 text-[10px] text-zinc-700 md:flex-row lg:px-10"><span>© 2026 Arya Negoro</span><span>React · Vite · Tailwind CSS · Framer Motion</span></footer>
    </div>
  );
}

export default App;