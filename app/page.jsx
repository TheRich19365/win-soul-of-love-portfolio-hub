import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Compass,
  Cpu,
  Disc3,
  Globe2,
  Heart,
  Mail,
  Map,
  Music2,
  Route,
  Sparkles,
  Star,
  Wand2
} from "lucide-react";
import { GlassCard, SectionHeading, SignalBadge } from "../components/SoulUI.jsx";

const dailyEnergyUrl = "https://soul-of-love-daily-energy.vercel.app";
const sunoUrl = "https://suno.com/@souloflove6395";
const tiktokUrl = "https://www.tiktok.com/@souloflove6395.official";
const youtubeUrl = "https://www.youtube.com/@SourceSignalMusic";
const emailUrl = "mailto:Souloflove19365@gmail.com";

const projects = [
  {
    name: "Soul of Love Daily Energy",
    status: "Live",
    description: "AI-powered daily energy reading, aura, card symbolism, and premium poster prompt generator.",
    cta: "Launch App",
    href: dailyEnergyUrl,
    icon: Sparkles
  },
  {
    name: "Source Signal Music",
    status: "Active",
    description: "Original music, emotional awakening, hope, shadow, love, and self-return.",
    cta: "Open YouTube",
    href: youtubeUrl,
    icon: Music2
  },
  {
    name: "Journey of Light Thailand",
    status: "Research / Coming Soon",
    description: "Energy places, sacred travel notes, spiritual travel journal, and future Energy Tour ecosystem.",
    cta: "Coming Soon",
    href: "#",
    icon: Route
  },
  {
    name: "Matrix 9 Interface",
    status: "Future Module",
    description: "Personal energy map, archetype system, life path, and Soul of Love personal interface.",
    cta: "Coming Soon",
    href: "#",
    icon: Compass
  },
  {
    name: "System & Solution",
    status: "Portfolio",
    description: "AI workflow, dashboard, automation, analytics, UX system, prompt architecture, and product design.",
    cta: "View Work",
    href: "#",
    icon: Cpu
  }
];

const timeline = [
  "Factory / Production Planning",
  "IT / System / Data",
  "Network Business / Team Growth",
  "Creator / Music / Content",
  "Soul of Love / AI Energy Interface",
  "Future / Journey of Light & Matrix 9"
];

const visualPortfolio = [
  {
    title: "Daily Energy Poster",
    subtitle: "Cosmic card result, aura score, premium oracle layout",
    label: "Poster",
    image: "/images/portfolio/daily-energy-poster.webp",
    alt: "Premium Soul of Love Daily Energy poster altar with luminous oracle card and aura spectrum"
  },
  {
    title: "Soul of Love UI",
    subtitle: "Smoked glass interface, soft aura glow, spiritual-tech dashboard",
    label: "Interface",
    image: "/images/portfolio/soul-of-love-ui.webp",
    alt: "Luxury Soul of Love spiritual-tech dashboard with smoked glass modules and aura interface"
  },
  {
    title: "Music Cover",
    subtitle: "Source Signal emotion, cinematic light, sound as inner return",
    label: "Music",
    image: "/images/portfolio/music-cover.webp",
    alt: "Cinematic Source Signal Music studio scene with waveform light, microphone, and keyboard"
  },
  {
    title: "Journey of Light Visual",
    subtitle: "Sacred places, travel notes, warm field research energy",
    label: "Travel",
    image: "/images/portfolio/journey-of-light.webp",
    alt: "Traveler on a golden path toward a sacred Thailand temple silhouette at sunrise"
  },
  {
    title: "Matrix 9 Concept",
    subtitle: "Personal energy map, archetype grid, symbolic life interface",
    label: "Matrix",
    image: "/images/portfolio/matrix-9.webp",
    alt: "Refined luminous Matrix 9 grid with nine connected energy gates and sacred geometry"
  },
  {
    title: "AI Prompt System",
    subtitle: "Prompt architecture, brand DNA, image direction workflow",
    label: "Prompt",
    image: "/images/portfolio/ai-prompt-system.webp",
    alt: "Sophisticated AI prompt architecture workspace with connected workflow layers and visual previews"
  }
];

const socialLinks = [
  { label: "TikTok", value: "Soul of Love", href: tiktokUrl, icon: Disc3 },
  { label: "Suno", value: "Soul of Love Music", href: sunoUrl, icon: Music2 },
  { label: "YouTube", value: "Source Signal Music", href: youtubeUrl, icon: Music2 },
  { label: "Facebook", value: "Coming Soon", href: "#", icon: Globe2 },
  { label: "Contact", value: "Souloflove19365@gmail.com", href: emailUrl, icon: Mail }
];

export default function Page() {
  return (
    <main className="site-shell">
      <CosmicBackdrop />

      <header className="topbar">
        <a className="brand-mark" href="#home" aria-label="Win Soul of Love home">
          <span className="brand-sigil"><Heart size={18} /></span>
          <span>
            <strong>Win Soul of Love</strong>
            <small>Soul of Love Ecosystem</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#social">Social</a>
        </nav>
      </header>

      <section id="home" className="hero-section profile-hero">
        <div className="hero-copy">
          <SignalBadge icon={Sparkles}>Creator-Led Spiritual Tech</SignalBadge>
          <h1>Win Soul of Love</h1>
          <p className="hero-subtitle">AI Creator • Energy Interface Designer • Storyteller</p>
          <p className="hero-lead">
            พื้นที่รวมผลงาน โปรเจกต์ และเส้นทางการสร้างระบบ Soul of Love — จากดนตรี คอนเทนต์ พลังงานภายใน ไปสู่ AI Spiritual Interface
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href={dailyEnergyUrl} target="_blank" rel="noreferrer">
              Launch Daily Energy <ArrowUpRight size={18} />
            </a>
            <a className="secondary-cta" href="#projects">
              Explore Projects
            </a>
          </div>
        </div>

        <div className="brand-hero-card">
          <div className="brand-card-glow" />
          <div className="brand-card-frame">
            <div className="brand-depth-panel panel-one" />
            <div className="brand-depth-panel panel-two" />
            <div className="soul-ring" />
            <div className="vertical-axis" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="brand-aura-halo" />
            <div className="brand-logo-mark">
              <Image
                src="/images/brand/win-soul-of-love-logo.webp"
                alt="Win Soul of Love logo"
                fill
                sizes="(max-width: 759px) 58vw, 260px"
                className="brand-logo-image"
                priority
              />
            </div>
            <div className="brand-spark spark-one" />
            <div className="brand-spark spark-two" />
            <div className="brand-spark spark-three" />
            <div className="brand-card-copy">
              <span>WIN SOUL OF LOVE</span>
              <h2>Soul of Love Ecosystem</h2>
              <p>Daily Energy • Music • AI Interface • Journey of Light</p>
            </div>
            <div className="brand-card-footer">
              <small>Creator-Led Spiritual Tech</small>
              <small>Since 2026</small>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="content-grid two-col">
        <SectionHeading eyebrow="About / Who I Am" title="ผู้สร้าง ecosystem ที่เชื่อม AI, ดนตรี, พลังงานภายใน และ visual storytelling" />
        <GlassCard className="about-card">
          <p>
            Win Soul of Love คือ creator ที่กำลังสร้างระบบ Soul of Love ให้เป็นพื้นที่รวมงาน AI, music,
            spiritual self-awareness, energy reading, visual storytelling และการเดินทางสู่สถานที่พลังงาน
            โดยออกแบบให้เข้าใจง่าย อบอุ่น และใช้งานได้จริงสำหรับผู้คนในยุคใหม่
          </p>
        </GlassCard>
      </section>

      <section id="projects" className="section-block">
        <SectionHeading eyebrow="Ecosystem / Projects" title="โปรเจกต์ในจักรวาล Soul of Love" />
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <GlassCard key={project.name} className="ecosystem-card">
                <div className="card-topline">
                  <span className="icon-chip"><Icon size={18} /></span>
                  <span className="status-pill">{project.status}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.href} target={project.href === "#" ? undefined : "_blank"} rel={project.href === "#" ? undefined : "noreferrer"}>
                  {project.cta} <ArrowUpRight size={16} />
                </a>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section id="journey" className="section-block">
        <SectionHeading eyebrow="Journey Timeline" title="เส้นทางที่ค่อย ๆ รวมกันเป็น Soul of Love" />
        <div className="journey-list">
          {timeline.map((item, index) => (
            <GlassCard key={item} className="journey-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section-block">
        <SectionHeading eyebrow="Visual Portfolio Preview" title="ภาพรวมงานออกแบบ คอนเทนต์ และระบบภาพในอนาคต" />
        <div className="visual-grid">
          {visualPortfolio.map((item, index) => (
            <article key={item.title} className={`visual-tile mockup-tile tile-${index + 1}`}>
              <div className="mockup-art">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 759px) 100vw, 33vw"
                  className="mockup-image"
                />
                <span className="mockup-image-overlay" />
              </div>
              <div className="mockup-copy">
                <small>{item.label}</small>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="social" className="section-block">
        <SectionHeading eyebrow="Social Links" title="ติดตามผลงาน เพลง ไลฟ์ และโปรเจกต์ใหม่" />
        <div className="social-card-grid">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={`${item.label}-${item.value}`}
                className="social-card"
                href={item.href}
                target={item.href === "#" || item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href === "#" || item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                <span className="icon-chip"><Icon size={18} /></span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.value}</small>
                </span>
                <ArrowUpRight size={16} />
              </a>
            );
          })}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <GlassCard className="contact-card">
          <SignalBadge icon={Wand2}>Contact / Collaboration</SignalBadge>
          <h2>เชื่อมงานสร้างสรรค์เข้ากับระบบ AI และพลังงานของแบรนด์</h2>
          <p>
            สำหรับงานร่วมมือ โปรเจกต์คอนเทนต์ งานออกแบบระบบ AI / Spiritual Interface / Music / Energy Travel
            สามารถติดต่อผ่านช่องทางโซเชียลด้านล่างได้เลย
          </p>
          <p>Email: Souloflove19365@gmail.com</p>
          <div className="contact-actions">
            <a className="primary-cta" href={dailyEnergyUrl} target="_blank" rel="noreferrer">
              Launch Daily Energy <ArrowUpRight size={18} />
            </a>
            <a className="secondary-cta" href={emailUrl}>
              Email / Contact
            </a>
          </div>
        </GlassCard>
      </section>

      <footer className="footer">
        <span><Star size={14} /> Win Soul of Love</span>
        <span>Soul of Love Ecosystem</span>
        <span><Map size={14} /> Daily Energy • Music • AI Interface • Journey of Light</span>
      </footer>
    </main>
  );
}

function CosmicBackdrop() {
  return (
    <div className="cosmic-backdrop" aria-hidden="true">
      <div className="nebula nebula-one" />
      <div className="nebula nebula-two" />
      <div className="nebula nebula-three" />
      <div className="star-field" />
    </div>
  );
}
