export function SignalBadge({ icon: Icon, children }) {
  return (
    <span className="signal-badge">
      {Icon ? <Icon size={15} /> : null}
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export function GlassCard({ children, className = "" }) {
  return <article className={`glass-card ${className}`}>{children}</article>;
}
