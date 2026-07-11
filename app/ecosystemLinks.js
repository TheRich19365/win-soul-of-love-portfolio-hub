const supportSubject = "แจ้งปัญหาการใช้งาน Matrix 9";

function buildMailto(address, params = {}) {
  const query = Object.entries(params)
    .filter(([, value]) => value)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
  return `mailto:${address}${query ? `?${query}` : ""}`;
}

const emailAddress = "Souloflove19365@gmail.com";

export const ecosystemLinks = {
  dailyEnergy: {
    url: "https://soul-of-love-daily-energy.vercel.app",
    label: "Soul of Love Daily Energy",
    enabled: true
  },
  thaiWisdom: {
    url: "https://soul-of-love-daily-energy.vercel.app/thai-wisdom",
    label: "ฤกษ์ดี · Thai Wisdom",
    productLine: "Soul of Love Thai Wisdom · MVP 0.1",
    enabled: true
  },
  matrix9: {
    url: "https://matrix9-interface.vercel.app",
    label: "Matrix 9 Interface",
    enabled: true
  },
  lineOa: {
    id: "@514wppkc",
    url: "https://line.me/R/ti/p/%40514wppkc",
    label: "LINE Official",
    enabled: true
  },
  email: {
    address: emailAddress,
    mailto: buildMailto(emailAddress),
    supportMailto: buildMailto(emailAddress, { subject: supportSubject }),
    enabled: true
  },
  facebook: {
    url: "https://www.facebook.com/share/1D1UK69eAk/",
    label: "Facebook",
    enabled: true
  },
  instagram: {
    url: "https://www.instagram.com/souloflove19365",
    label: "Instagram",
    handle: "@souloflove19365",
    enabled: true
  },
  youtube: {
    url: "https://www.youtube.com/@SourceSignalMusic",
    label: "YouTube Music",
    enabled: true
  },
  suno: {
    url: "https://suno.com/@souloflove6395",
    label: "Suno Music",
    enabled: true
  },
  tiktok: {
    url: "https://www.tiktok.com/@souloflove6395.official",
    label: "TikTok",
    enabled: true
  },
  portfolio: {
    url: "https://win-soul-of-love-portfolio-hub.vercel.app",
    label: "Portfolio Hub",
    enabled: true
  }
};

export const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer noopener"
};
