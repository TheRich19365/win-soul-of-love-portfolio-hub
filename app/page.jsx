import Image from "next/image";
import {
  ArrowUpRight,
  Compass,
  Cpu,
  Disc3,
  Globe2,
  Heart,
  Mail,
  Map,
  MessageCircle,
  Music2,
  Route,
  Sparkles,
  Star,
  Wand2
} from "lucide-react";
import { ecosystemLinks, externalLinkProps } from "./ecosystemLinks.js";
import { GlassCard, SectionHeading, SignalBadge } from "../components/SoulUI.jsx";
import { MusicExperiencePlayer } from "../components/MusicExperiencePlayer.jsx";

const projects = [
  {
    name: "Soul of Love Daily Energy",
    status: "Live",
    description: "AI-powered daily energy reading, aura, card symbolism, and premium poster prompt generator.",
    cta: "Launch App",
    href: ecosystemLinks.dailyEnergy.url,
    icon: Sparkles
  },
  {
    name: "Matrix 9 Interface",
    supportTitle: "Living Soul Map",
    status: "Live Application",
    description:
      "ระบบสะท้อน Pattern จากวันเดือนปีเกิดที่แยก Core Blueprint ออกจากพลังตามช่วงเวลา พร้อม Being Architecture, Current Cycle, Monthly Pulse และ Daily Signal",
    cta: "เปิด Matrix 9",
    supportingCta: "Explore Your Living Soul Map",
    href: ecosystemLinks.matrix9.url,
    icon: Compass,
    featured: true,
    tags: ["React", "Living Soul Map", "Symbolic System", "Current Cycle", "Personal Experience"]
  },
  {
    name: "Source Signal Music",
    status: "Active",
    description: "Original music, emotional awakening, hope, shadow, love, and self-return.",
    cta: "Enter Music Journey",
    href: "#music-experience",
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
    name: "System & Solution",
    status: "Portfolio",
    description: "AI workflow, dashboard, automation, analytics, UX system, prompt architecture, and product design.",
    cta: "View Work",
    href: "#portfolio",
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
  { label: "LINE Official", value: ecosystemLinks.lineOa.id, href: ecosystemLinks.lineOa.url, icon: MessageCircle, primary: true },
  { label: "Email", value: ecosystemLinks.email.address, href: ecosystemLinks.email.mailto, icon: Mail },
  { label: "Facebook", value: "Soul of Love", href: ecosystemLinks.facebook.url, icon: Globe2 },
  { label: "Instagram", value: ecosystemLinks.instagram.handle, href: ecosystemLinks.instagram.url, icon: Globe2 },
  { label: "TikTok", value: "Soul of Love", href: ecosystemLinks.tiktok.url, icon: Disc3 },
  { label: "Suno", value: "Soul of Love Music", href: ecosystemLinks.suno.url, icon: Music2 },
  { label: "YouTube", value: "Source Signal Music", href: ecosystemLinks.youtube.url, icon: Music2 }
];

const ecosystemContactLinks = [
  { label: "Matrix 9", value: "Living Soul Map", href: ecosystemLinks.matrix9.url, icon: Compass },
  { label: "YouTube Music", value: "Source Signal Music", href: ecosystemLinks.youtube.url, icon: Music2 },
  { label: "Suno Music", value: "Soul of Love Music", href: ecosystemLinks.suno.url, icon: Music2 }
];

function linkProps(href) {
  if (!href || href === "#" || href.startsWith("#") || href.startsWith("mailto:")) return {};
  return externalLinkProps;
}

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
          <a href={ecosystemLinks.matrix9.url} {...externalLinkProps}>Matrix 9</a>
          <a href="#projects">Projects</a>
          <a href="#music-experience">Music</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="topbar-actions">
          <a className="line-oa-button" href={ecosystemLinks.lineOa.url} {...externalLinkProps} aria-label={`Open LINE Official ${ecosystemLinks.lineOa.id}`}>
            <MessageCircle size={16} />
            LINE OA
          </a>
        </div>
      </header>

      <section id="home" className="hero-section profile-hero">
        <div className="hero-copy">
          <SignalBadge icon={Sparkles}>Creator-Led Spiritual Tech</SignalBadge>
          <h1>Win Soul of Love</h1>
          <p className="hero-subtitle">AI Creator • Energy Interface Designer • Storyteller</p>
          <p className="hero-lead">
            พื้นที่รวมผลงาน โปรเจกต์ และเส้นทางการสร้างระบบ Soul of Love — จากดนตรี คอนเทนต์ พลังงานภายใน ไปสู่ AI Spiritual Interface
          </p>
          <p className="hero-positioning">
            เชื่อมงานสร้างสรรค์ ประสบการณ์ของมนุษย์ ระบบ AI และพลังงานของแบรนด์ ให้กลายเป็นประสบการณ์ที่เข้าถึงได้จริง
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href={ecosystemLinks.dailyEnergy.url} {...externalLinkProps}>
              Launch Daily Energy <ArrowUpRight size={18} />
            </a>
            <a className="secondary-cta matrix-cta" href={ecosystemLinks.matrix9.url} {...externalLinkProps}>
              สำรวจ Matrix 9 <ArrowUpRight size={18} />
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

      <section className="featured-experience" aria-labelledby="matrix-featured-title">
        <GlassCard className="matrix-feature-card">
          <div className="matrix-motif" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, index) => <span key={index} />)}
          </div>
          <div className="matrix-feature-copy">
            <SignalBadge icon={Compass}>Live Application</SignalBadge>
            <h2 id="matrix-featured-title">Matrix 9 — Living Soul Map</h2>
            <p>ตัวตนหลักยังคงอยู่ แต่พลังที่ชีวิตกำลังกระตุ้นสามารถเปลี่ยนไปตามช่วงเวลา</p>
          </div>
          <a className="primary-cta matrix-launch" href={ecosystemLinks.matrix9.url} {...externalLinkProps}>
            สำรวจ Matrix 9 <ArrowUpRight size={18} />
          </a>
        </GlassCard>
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
              <GlassCard key={project.name} className={`ecosystem-card ${project.featured ? "matrix-project-card" : ""}`}>
                <div className="card-topline">
                  <span className="icon-chip"><Icon size={18} /></span>
                  <span className="status-pill">{project.status}</span>
                </div>
                <h3>{project.name}</h3>
                {project.supportTitle ? <p className="project-support-title">{project.supportTitle}</p> : null}
                <p>{project.description}</p>
                {project.tags ? (
                  <div className="project-tags" aria-label="Matrix 9 tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                ) : null}
                <a href={project.href} {...linkProps(project.href)}>
                  {project.cta} <ArrowUpRight size={16} />
                </a>
                {project.supportingCta ? <small className="project-supporting-cta">{project.supportingCta}</small> : null}
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section id="music-experience" className="section-block music-experience-section">
        <div className="music-experience-grid">
          <div className="music-story">
            <SectionHeading eyebrow="WIN SOUL OF LOVE — MUSIC" title="Music Born from the Inner Journey" />
            <GlassCard className="music-story-card">
              <p>
                Original songs shaped from love, shadow, healing, awakening, and the courage to return to the Authentic Self.
              </p>
              <p>
                Win Soul of Love is the creator heart of this ecosystem. Source Signal Music is the channel where the music journey is published, collected, and shared.
              </p>
              <div className="music-signal-list" aria-label="Music themes">
                <span>Love</span>
                <span>Shadow</span>
                <span>Healing</span>
                <span>Awakening</span>
                <span>Authentic Self</span>
              </div>
            </GlassCard>
          </div>

          <MusicExperiencePlayer />
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
                className={`social-card ${item.primary ? "primary-social-card" : ""}`}
                href={item.href}
                {...linkProps(item.href)}
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
          <h2>พูดคุย เชื่อมงาน และติดตาม Soul of Love</h2>
          <p>
            สอบถามงาน นัดพูดคุย แจ้งปัญหาการใช้งาน หรือติดตามผลงานเพลง บทความ และโปรเจกต์ใหม่ ๆ
            ผ่านช่องทางหลักของ Win Soul of Love ได้โดยตรง
          </p>
          <p className="contact-helper">
            สอบถามงาน นัดพูดคุย หรือส่งรายละเอียดเบื้องต้นผ่าน LINE Official ได้โดยตรง
          </p>
          <div className="contact-actions">
            <a className="primary-cta" href={ecosystemLinks.lineOa.url} {...externalLinkProps}>
              <MessageCircle size={18} />
              พูดคุยผ่าน LINE Official
            </a>
            <a className="secondary-cta" href={ecosystemLinks.email.mailto}>
              Email / Contact
            </a>
            <a className="secondary-cta" href={ecosystemLinks.email.supportMailto}>
              แจ้งปัญหา Matrix 9
            </a>
          </div>
          <div className="contact-link-groups">
            <div>
              <h3>Primary Contact</h3>
              <a href={ecosystemLinks.lineOa.url} {...externalLinkProps}>LINE Official · {ecosystemLinks.lineOa.id}</a>
              <a href={ecosystemLinks.email.mailto}>{ecosystemLinks.email.address}</a>
            </div>
            <div>
              <h3>Social</h3>
              <a href={ecosystemLinks.facebook.url} {...externalLinkProps}>Facebook</a>
              <a href={ecosystemLinks.instagram.url} {...externalLinkProps}>Instagram · {ecosystemLinks.instagram.handle}</a>
            </div>
            <div>
              <h3>Creative Ecosystem</h3>
              {ecosystemContactLinks.map((item) => (
                <a key={item.label} href={item.href} {...linkProps(item.href)}>{item.label} · {item.value}</a>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      <footer className="footer">
        <span><Star size={14} /> Win Soul of Love</span>
        <span>Soul of Love Ecosystem</span>
        <span><Map size={14} /> Daily Energy • Matrix 9 • Music • AI Interface • Journey of Light</span>
        <nav className="footer-links" aria-label="Footer ecosystem links">
          <a className="footer-line-link" href={ecosystemLinks.lineOa.url} {...externalLinkProps}>LINE Official · {ecosystemLinks.lineOa.id}</a>
          <a href={ecosystemLinks.matrix9.url} {...externalLinkProps}>Matrix 9</a>
          <a href={ecosystemLinks.email.mailto}>Email</a>
          <a href={ecosystemLinks.facebook.url} {...externalLinkProps}>Facebook</a>
          <a href={ecosystemLinks.instagram.url} {...externalLinkProps}>Instagram</a>
          <a href={ecosystemLinks.youtube.url} {...externalLinkProps}>YouTube Music</a>
          <a href={ecosystemLinks.suno.url} {...externalLinkProps}>Suno Music</a>
        </nav>
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
