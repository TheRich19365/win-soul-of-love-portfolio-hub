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
    supportTitle: "AI Energy Interface",
    status: "Live",
    description: "à¸£à¸°à¸šà¸šà¸­à¹ˆà¸²à¸™à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¸›à¸£à¸°à¸ˆà¸³à¸§à¸±à¸™à¹€à¸Šà¸´à¸‡à¸ªà¸±à¸à¸¥à¸±à¸à¸©à¸“à¹Œ à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™ à¸­à¸­à¸£à¹ˆà¸² à¹à¸¥à¸°à¹„à¸žà¹ˆà¹€à¸‚à¹‰à¸²à¸à¸±à¸š AI à¹€à¸žà¸·à¹ˆà¸­à¸ˆà¸±à¸”à¸„à¸³à¸­à¹ˆà¸²à¸™ à¸šà¸—à¸„à¸§à¸²à¸¡ à¹à¸¥à¸°à¸žà¸£à¸­à¸¡à¸•à¹Œà¹‚à¸›à¸ªà¹€à¸•à¸­à¸£à¹Œà¸£à¸°à¸”à¸±à¸šà¸žà¸£à¸µà¹€à¸¡à¸µà¸¢à¸¡ à¹‚à¸”à¸¢à¹„à¸¡à¹ˆà¸Ÿà¸±à¸™à¸˜à¸‡à¸Šà¸°à¸•à¸²à¸Šà¸µà¸§à¸´à¸•",
    englishDescription: "AI-powered daily energy reading, aura, card symbolism, and premium poster prompt generator.",
    cta: "à¹€à¸›à¸´à¸” Daily Energy",
    supportingCta: "Explore Today's Energy",
    href: ecosystemLinks.dailyEnergy.url,
    icon: Sparkles,
    accent: "daily",
    tags: ["AI Energy", "Aura", "Card Symbolism", "Poster Prompt", "Daily Reflection"]
  },
  {
    name: "Matrix 9 Interface",
    supportTitle: "Living Soul Map Â· v2.0",
    status: "Live Application",
    description:
      "à¸£à¸°à¸šà¸šà¸ªà¸°à¸—à¹‰à¸­à¸™ Pattern à¸ˆà¸²à¸à¸§à¸±à¸™à¹€à¸”à¸·à¸­à¸™à¸›à¸µà¹€à¸à¸´à¸”à¸—à¸µà¹ˆà¹à¸¢à¸ Core Blueprint à¸­à¸­à¸à¸ˆà¸²à¸à¸žà¸¥à¸±à¸‡à¸•à¸²à¸¡à¸Šà¹ˆà¸§à¸‡à¹€à¸§à¸¥à¸² à¸žà¸£à¹‰à¸­à¸¡ Being Architecture, Current Cycle, Monthly Pulse à¹à¸¥à¸° Daily Signal",
    cta: "à¹€à¸›à¸´à¸” Matrix 9",
    displayDescription: "à¸£à¸°à¸šà¸šà¸ªà¸°à¸—à¹‰à¸­à¸™ Pattern à¸ˆà¸²à¸à¸§à¸±à¸™à¹€à¸”à¸·à¸­à¸™à¸›à¸µà¹€à¸à¸´à¸” à¹à¸¢à¸ Core Blueprint à¸­à¸­à¸à¸ˆà¸²à¸à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¸•à¸²à¸¡à¸Šà¹ˆà¸§à¸‡à¹€à¸§à¸¥à¸² à¸žà¸£à¹‰à¸­à¸¡ Being Architecture, Current Cycle, Monthly Pulse à¹à¸¥à¸° Daily Signal",
    displayCta: "à¹€à¸›à¸´à¸” Matrix 9",
    supportingCta: "Explore Your Living Soul Map",
    href: ecosystemLinks.matrix9.url,
    icon: Compass,
    featured: true,
    accent: "matrix",
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

const cp1252ReverseMap = {
  0x20ac: 0x80,
  0x201a: 0x82,
  0x0192: 0x83,
  0x201e: 0x84,
  0x2026: 0x85,
  0x2020: 0x86,
  0x2021: 0x87,
  0x02c6: 0x88,
  0x2030: 0x89,
  0x0160: 0x8a,
  0x2039: 0x8b,
  0x0152: 0x8c,
  0x017d: 0x8e,
  0x2018: 0x91,
  0x2019: 0x92,
  0x201c: 0x93,
  0x201d: 0x94,
  0x2022: 0x95,
  0x2013: 0x96,
  0x2014: 0x97,
  0x02dc: 0x98,
  0x2122: 0x99,
  0x0161: 0x9a,
  0x203a: 0x9b,
  0x0153: 0x9c,
  0x017e: 0x9e,
  0x0178: 0x9f
};

function text(value) {
  if (!value || !/[àÂâÃ]/.test(value)) return value;
  try {
    const encoded = [...value]
      .map((char) => {
        const code = char.charCodeAt(0);
        const byte = cp1252ReverseMap[code] ?? code;
        return `%${byte.toString(16).padStart(2, "0")}`;
      })
      .join("");
    return decodeURIComponent(encoded);
  } catch {
    return value;
  }
}

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
          <p className="hero-subtitle">AI Creator â€¢ Energy Interface Designer â€¢ Storyteller</p>
          <p className="hero-lead">
            à¸žà¸·à¹‰à¸™à¸—à¸µà¹ˆà¸£à¸§à¸¡à¸œà¸¥à¸‡à¸²à¸™ à¹‚à¸›à¸£à¹€à¸ˆà¸à¸•à¹Œ à¹à¸¥à¸°à¹€à¸ªà¹‰à¸™à¸—à¸²à¸‡à¸à¸²à¸£à¸ªà¸£à¹‰à¸²à¸‡à¸£à¸°à¸šà¸š Soul of Love â€” à¸ˆà¸²à¸à¸”à¸™à¸•à¸£à¸µ à¸„à¸­à¸™à¹€à¸—à¸™à¸•à¹Œ à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¸ à¸²à¸¢à¹ƒà¸™ à¹„à¸›à¸ªà¸¹à¹ˆ AI Spiritual Interface
          </p>
          <p className="hero-positioning">
            à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸‡à¸²à¸™à¸ªà¸£à¹‰à¸²à¸‡à¸ªà¸£à¸£à¸„à¹Œ à¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¸‚à¸­à¸‡à¸¡à¸™à¸¸à¸©à¸¢à¹Œ à¸£à¸°à¸šà¸š AI à¹à¸¥à¸°à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¸‚à¸­à¸‡à¹à¸šà¸£à¸™à¸”à¹Œ à¹ƒà¸«à¹‰à¸à¸¥à¸²à¸¢à¹€à¸›à¹‡à¸™à¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¸—à¸µà¹ˆà¹€à¸‚à¹‰à¸²à¸–à¸¶à¸‡à¹„à¸”à¹‰à¸ˆà¸£à¸´à¸‡
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href={ecosystemLinks.dailyEnergy.url} {...externalLinkProps}>
              Launch Daily Energy <ArrowUpRight size={18} />
            </a>
            <a className="secondary-cta matrix-cta" href={ecosystemLinks.matrix9.url} {...externalLinkProps}>
              {text("à¹€à¸›à¸´à¸” MATRIX 9")} <ArrowUpRight size={18} />
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
              <p>Daily Energy â€¢ Music â€¢ AI Interface â€¢ Journey of Light</p>
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
            <h2 id="matrix-featured-title">{text("Matrix 9 â€” Living Soul Map")}</h2>
            <p>{text("à¸„à¹‰à¸™à¸žà¸š Core Blueprint à¹à¸¥à¸°à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¸•à¸²à¸¡à¸Šà¹ˆà¸§à¸‡à¹€à¸§à¸¥à¸²à¸œà¹ˆà¸²à¸™ Pattern à¸ˆà¸²à¸à¸§à¸±à¸™à¹€à¸”à¸·à¸­à¸™à¸›à¸µà¹€à¸à¸´à¸”")}</p>
          </div>
          <a className="primary-cta matrix-launch" href={ecosystemLinks.matrix9.url} {...externalLinkProps}>
            {text("à¹€à¸›à¸´à¸” MATRIX 9")} <ArrowUpRight size={18} />
          </a>
        </GlassCard>
      </section>

      <section id="about" className="content-grid two-col">
        <SectionHeading eyebrow="About / Who I Am" title="à¸œà¸¹à¹‰à¸ªà¸£à¹‰à¸²à¸‡ ecosystem à¸—à¸µà¹ˆà¹€à¸Šà¸·à¹ˆà¸­à¸¡ AI, à¸”à¸™à¸•à¸£à¸µ, à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¸ à¸²à¸¢à¹ƒà¸™ à¹à¸¥à¸° visual storytelling" />
        <GlassCard className="about-card">
          <p>
            Win Soul of Love à¸„à¸·à¸­ creator à¸—à¸µà¹ˆà¸à¸³à¸¥à¸±à¸‡à¸ªà¸£à¹‰à¸²à¸‡à¸£à¸°à¸šà¸š Soul of Love à¹ƒà¸«à¹‰à¹€à¸›à¹‡à¸™à¸žà¸·à¹‰à¸™à¸—à¸µà¹ˆà¸£à¸§à¸¡à¸‡à¸²à¸™ AI, music,
            spiritual self-awareness, energy reading, visual storytelling à¹à¸¥à¸°à¸à¸²à¸£à¹€à¸”à¸´à¸™à¸—à¸²à¸‡à¸ªà¸¹à¹ˆà¸ªà¸–à¸²à¸™à¸—à¸µà¹ˆà¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™
            à¹‚à¸”à¸¢à¸­à¸­à¸à¹à¸šà¸šà¹ƒà¸«à¹‰à¹€à¸‚à¹‰à¸²à¹ƒà¸ˆà¸‡à¹ˆà¸²à¸¢ à¸­à¸šà¸­à¸¸à¹ˆà¸™ à¹à¸¥à¸°à¹ƒà¸Šà¹‰à¸‡à¸²à¸™à¹„à¸”à¹‰à¸ˆà¸£à¸´à¸‡à¸ªà¸³à¸«à¸£à¸±à¸šà¸œà¸¹à¹‰à¸„à¸™à¹ƒà¸™à¸¢à¸¸à¸„à¹ƒà¸«à¸¡à¹ˆ
          </p>
        </GlassCard>
      </section>

      <section id="projects" className="section-block">
        <SectionHeading eyebrow="Ecosystem / Projects" title="à¹‚à¸›à¸£à¹€à¸ˆà¸à¸•à¹Œà¹ƒà¸™à¸ˆà¸±à¸à¸£à¸§à¸²à¸¥ Soul of Love" />
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <GlassCard key={project.name} className={`ecosystem-card ${project.featured ? "matrix-project-card" : ""} ${project.accent ? `project-${project.accent}` : ""}`}>
                <div className="card-topline">
                  <span className="icon-chip"><Icon size={18} /></span>
                  <span className="status-pill">{project.status}</span>
                </div>
                <h3>{project.name}</h3>
                {project.supportTitle ? <p className="project-support-title">{text(project.supportTitle)}</p> : null}
                <p>{text(project.displayDescription || project.description)}</p>
                {project.englishDescription ? <p className="project-english-line">{text(project.englishDescription)}</p> : null}
                {project.tags ? (
                  <div className="project-tags" aria-label={`${project.name} tags`}>
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                ) : null}
                <a href={project.href} {...linkProps(project.href)}>
                  {text(project.displayCta || project.cta)} <ArrowUpRight size={16} />
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
            <SectionHeading eyebrow="WIN SOUL OF LOVE â€” MUSIC" title="Music Born from the Inner Journey" />
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
        <SectionHeading eyebrow="Journey Timeline" title="à¹€à¸ªà¹‰à¸™à¸—à¸²à¸‡à¸—à¸µà¹ˆà¸„à¹ˆà¸­à¸¢ à¹† à¸£à¸§à¸¡à¸à¸±à¸™à¹€à¸›à¹‡à¸™ Soul of Love" />
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
        <SectionHeading eyebrow="Visual Portfolio Preview" title="à¸ à¸²à¸žà¸£à¸§à¸¡à¸‡à¸²à¸™à¸­à¸­à¸à¹à¸šà¸š à¸„à¸­à¸™à¹€à¸—à¸™à¸•à¹Œ à¹à¸¥à¸°à¸£à¸°à¸šà¸šà¸ à¸²à¸žà¹ƒà¸™à¸­à¸™à¸²à¸„à¸•" />
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
        <SectionHeading eyebrow="Social Links" title="à¸•à¸´à¸”à¸•à¸²à¸¡à¸œà¸¥à¸‡à¸²à¸™ à¹€à¸žà¸¥à¸‡ à¹„à¸¥à¸Ÿà¹Œ à¹à¸¥à¸°à¹‚à¸›à¸£à¹€à¸ˆà¸à¸•à¹Œà¹ƒà¸«à¸¡à¹ˆ" />
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
          <h2>à¸žà¸¹à¸”à¸„à¸¸à¸¢ à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸‡à¸²à¸™ à¹à¸¥à¸°à¸•à¸´à¸”à¸•à¸²à¸¡ Soul of Love</h2>
          <p>
            à¸ªà¸­à¸šà¸–à¸²à¸¡à¸‡à¸²à¸™ à¸™à¸±à¸”à¸žà¸¹à¸”à¸„à¸¸à¸¢ à¹à¸ˆà¹‰à¸‡à¸›à¸±à¸à¸«à¸²à¸à¸²à¸£à¹ƒà¸Šà¹‰à¸‡à¸²à¸™ à¸«à¸£à¸·à¸­à¸•à¸´à¸”à¸•à¸²à¸¡à¸œà¸¥à¸‡à¸²à¸™à¹€à¸žà¸¥à¸‡ à¸šà¸—à¸„à¸§à¸²à¸¡ à¹à¸¥à¸°à¹‚à¸›à¸£à¹€à¸ˆà¸à¸•à¹Œà¹ƒà¸«à¸¡à¹ˆ à¹†
            à¸œà¹ˆà¸²à¸™à¸Šà¹ˆà¸­à¸‡à¸—à¸²à¸‡à¸«à¸¥à¸±à¸à¸‚à¸­à¸‡ Win Soul of Love à¹„à¸”à¹‰à¹‚à¸”à¸¢à¸•à¸£à¸‡
          </p>
          <p className="contact-helper">
            à¸ªà¸­à¸šà¸–à¸²à¸¡à¸‡à¸²à¸™ à¸™à¸±à¸”à¸žà¸¹à¸”à¸„à¸¸à¸¢ à¸«à¸£à¸·à¸­à¸ªà¹ˆà¸‡à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¹€à¸šà¸·à¹‰à¸­à¸‡à¸•à¹‰à¸™à¸œà¹ˆà¸²à¸™ LINE Official à¹„à¸”à¹‰à¹‚à¸”à¸¢à¸•à¸£à¸‡
          </p>
          <div className="contact-actions">
            <a className="primary-cta" href={ecosystemLinks.lineOa.url} {...externalLinkProps}>
              <MessageCircle size={18} />
              à¸žà¸¹à¸”à¸„à¸¸à¸¢à¸œà¹ˆà¸²à¸™ LINE Official
            </a>
            <a className="secondary-cta" href={ecosystemLinks.email.mailto}>
              Email / Contact
            </a>
            <a className="secondary-cta" href={ecosystemLinks.email.supportMailto}>
              à¹à¸ˆà¹‰à¸‡à¸›à¸±à¸à¸«à¸² Matrix 9
            </a>
          </div>
          <div className="contact-link-groups">
            <div>
              <h3>Primary Contact</h3>
              <a href={ecosystemLinks.lineOa.url} {...externalLinkProps}>LINE Official Â· {ecosystemLinks.lineOa.id}</a>
              <a href={ecosystemLinks.email.mailto}>{ecosystemLinks.email.address}</a>
            </div>
            <div>
              <h3>Social</h3>
              <a href={ecosystemLinks.facebook.url} {...externalLinkProps}>Facebook</a>
              <a href={ecosystemLinks.instagram.url} {...externalLinkProps}>Instagram Â· {ecosystemLinks.instagram.handle}</a>
            </div>
            <div>
              <h3>Creative Ecosystem</h3>
              {ecosystemContactLinks.map((item) => (
                <a key={item.label} href={item.href} {...linkProps(item.href)}>{item.label} Â· {item.value}</a>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      <footer className="footer">
        <span><Star size={14} /> Win Soul of Love</span>
        <span>Soul of Love Ecosystem</span>
        <span><Map size={14} /> Daily Energy â€¢ Matrix 9 â€¢ Music â€¢ AI Interface â€¢ Journey of Light</span>
        <nav className="footer-links" aria-label="Footer ecosystem links">
          <a className="footer-line-link" href={ecosystemLinks.lineOa.url} {...externalLinkProps}>LINE Official Â· {ecosystemLinks.lineOa.id}</a>
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
