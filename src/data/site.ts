import globalCss from "../styles/global.css?raw";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const url = (path: string) => base + path;

export const siteName = "Cal Apigo";

export const defaultImage = "/img/card.webp";

const coral = /--color-coral-blue:\s*(#[0-9a-fA-F]{3,8})\b/.exec(globalCss)?.[1];
if (!coral) throw new Error("--color-coral-blue must be a hex value in src/styles/global.css");
export const defaultThemeColor = coral;

export const links = [
  { label: "Home", path: "/" },
  { label: "Bio", path: "/bio/" },
  { label: "Teaching Philosophy", path: "/teaching-philosophy/" },
  { label: "Resources", path: "/resources/" },
  { label: "Packets", path: "/packets/" },
  { label: "Socials", path: "/socials/" },
  { label: "Contact", path: "/contact/" },
].map((l) => ({ ...l, href: url(l.path) }));

export const isCurrent = (pathname: string, href: string) =>
  href === url("/") ? pathname === href : pathname.startsWith(href);
