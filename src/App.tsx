import React, {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  CheckCircle,
  Code2,
  Command,
  Disc3,
  Globe2,
  Mail,
  Menu,
  MessageCircle,
  Minus,
  Monitor,
  Plus,
  Send,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Video,
  Wrench,
  X,
  Zap,
} from "lucide-react";

/* =========================================================
   SIRJICLOUD — SINGLE FILE WEBSITE
   Everything is inside App.tsx
   No App.css required
========================================================= */

const ORANGE = "#ff6b00";
const BEIGE = "#f1ede5";
const BLACK = "#111111";

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    number: "01",
    icon: Server,
    title: "Discord",
    subtitle: "Server Setup",
    description:
      "Complete Discord server setup with channels, roles, permissions, bots, verification and a clean structure.",
    tags: ["Channels", "Roles", "Bots", "Security"],
  },
  {
    number: "02",
    icon: Bot,
    title: "Automation",
    subtitle: "Bot Integration",
    description:
      "Automate repetitive tasks and connect custom bots to make your community faster and easier to manage.",
    tags: ["Automation", "Custom Bots", "Commands"],
  },
  {
    number: "03",
    icon: Settings2,
    title: "Management",
    subtitle: "Moderation",
    description:
      "Ongoing moderation, staff systems, community management and daily server maintenance.",
    tags: ["Moderation", "Staff", "Growth"],
  },
  {
    number: "04",
    icon: Globe2,
    title: "Web",
    subtitle: "Website Development",
    description:
      "Modern responsive websites with smooth animations, strong visual identity and conversion-focused layouts.",
    tags: ["React", "Websites", "UI/UX"],
  },
  {
    number: "05",
    icon: Zap,
    title: "Growth",
    subtitle: "Community Growth",
    description:
      "Systems and strategies designed to improve engagement, activity and community growth.",
    tags: ["Engagement", "Strategy", "Community"],
  },
  {
    number: "06",
    icon: Command,
    title: "Bots",
    subtitle: "Custom Commands",
    description:
      "Custom Discord bots and commands built around your exact workflow and requirements.",
    tags: ["Python", "Discord", "Custom"],
  },
  {
    number: "07",
    icon: ShieldCheck,
    title: "Security",
    subtitle: "Security Setup",
    description:
      "Verification, anti-raid systems, moderation tools and permission structures for safer communities.",
    tags: ["Verification", "Anti-Raid", "Permissions"],
  },
  {
    number: "08",
    icon: Wrench,
    title: "Custom",
    subtitle: "Custom Development",
    description:
      "Have something specific in mind? Custom development can be designed around your idea.",
    tags: ["Ideas", "Systems", "Development"],
  },
  {
    number: "09",
    icon: Video,
    title: "Creative",
    subtitle: "Video Editing",
    description:
      "Short-form edits, promotional visuals and social media content designed to grab attention.",
    tags: ["Editing", "Reels", "Promos"],
  },
  {
    number: "10",
    icon: Monitor,
    title: "Tools",
    subtitle: "Resume Builder",
    description:
      "Useful custom web tools such as resume builders and simple productivity systems.",
    tags: ["Tools", "Web Apps", "Productivity"],
  },
];

const pricing = [
  {
    title: "Server Build",
    price: "₹3000",
    suffix: "ONE-TIME",
    featured: true,
    description: "Everything you need to launch a professional Discord server.",
    features: [
      "Complete server setup",
      "Channels & categories",
      "Roles & permissions",
      "Bot configuration",
      "Auto moderation",
      "Leveling & invite tracking",
      "Custom design",
      "Custom emojis & naming",
    ],
  },
  {
    title: "Admin Package",
    price: "CUSTOM",
    suffix: "MONTHLY",
    featured: false,
    description: "Ongoing management and growth for an active community.",
    features: [
      "Everything in Server Build",
      "Active server management",
      "Daily moderation",
      "Member engagement",
      "Server updates",
      "Growth strategies",
      "Flexible monthly plan",
      "Direct support",
    ],
  },
  {
    title: "Exchange Service",
    price: "VARIABLE",
    suffix: "FAST TRANSACTIONS",
    featured: false,
    description: "Crypto exchange service with simple and transparent rates.",
    features: [
      "INR ⇄ Crypto",
      "Minimum $31",
      "INR → Crypto ₹105/$",
      "Crypto → INR ₹102/$",
      "Crypto → Crypto 2.5%",
      "$151+ special offer",
      "Fast transactions",
      "Priority support",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "TELL ME",
    description:
      "Tell me what you want to build, improve or automate. No complicated brief required.",
  },
  {
    number: "02",
    title: "PLAN",
    description:
      "We break your idea into the exact features, structure and visual direction needed.",
  },
  {
    number: "03",
    title: "BUILD",
    description:
      "The actual server, website, bot or system gets designed and developed.",
  },
  {
    number: "04",
    title: "LAUNCH",
    description:
      "Everything is tested, refined and handed over ready to use.",
  },
];

const testimonials = [
  {
    quote:
      "SirJi completely transformed our Discord server. Everything feels organised, professional and much easier to manage.",
    name: "Community Owner",
    role: "Discord Server",
  },
  {
    quote:
      "The server was properly structured, the bots were configured and the entire setup was much cleaner than before.",
    name: "Server Client",
    role: "Community Management",
  },
  {
    quote:
      "The communication was straightforward and the final setup was tailored around exactly what we needed.",
    name: "Project Client",
    role: "Custom Development",
  },
];

const faqs = [
  {
    q: "What services does SirJiCloud provide?",
    a: "SirJiCloud works on Discord server setup, automation, moderation, custom bots, websites, community growth, security systems, creative work and custom development.",
  },
  {
    q: "Can a complete Discord server be built from scratch?",
    a: "Yes. A complete server can be structured with channels, categories, roles, permissions, bots, verification, moderation and other required systems.",
  },
  {
    q: "What is the starting price?",
    a: "The Server Build package starts at ₹3000 as a one-time setup.",
  },
  {
    q: "Is ongoing administration available?",
    a: "Yes. Ongoing administration and community management can be arranged through a custom monthly package.",
  },
  {
    q: "Can custom bots be created?",
    a: "Yes. Custom commands, automations and bot systems can be developed around your specific requirements.",
  },
  {
    q: "Does SirJiCloud build websites?",
    a: "Yes. Modern responsive websites and custom web tools can be designed and developed.",
  },
];

/* =========================================================
   GLOBAL STYLE
========================================================= */

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Manrope:wght@200..800&display=swap');

    :root {
      --orange: #ff6b00;
      --orange-light: #ff8a3d;
      --beige: #f1ede5;
      --black: #111111;
      --white: #ffffff;
      --gray: #6e6a65;
      --line: rgba(17,17,17,.13);
      --soft: rgba(255,255,255,.55);
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      padding: 0;
      background: var(--beige);
      color: var(--black);
      font-family: "Manrope", sans-serif;
      overflow-x: hidden;
    }

    body::-webkit-scrollbar {
      width: 8px;
    }

    body::-webkit-scrollbar-track {
      background: var(--beige);
    }

    body::-webkit-scrollbar-thumb {
      background: var(--black);
      border-radius: 20px;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      font: inherit;
    }

    ::selection {
      background: var(--orange);
      color: white;
    }

    .mono {
      font-family: "DM Mono", monospace;
    }

    .site {
      position: relative;
      min-height: 100vh;
      overflow: hidden;
    }

    .grain {
      pointer-events: none;
      position: fixed;
      inset: 0;
      z-index: 100;
      opacity: .055;
      mix-blend-mode: multiply;
      background-image:
        url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
    }

    .progress {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--orange);
      transform-origin: left;
      z-index: 1000;
    }

    .container {
      width: min(1240px, calc(100% - 40px));
      margin: 0 auto;
    }

    .section {
      position: relative;
      padding: 120px 0;
    }

    .section-dark {
      background: var(--black);
      color: white;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      font-family: "DM Mono", monospace;
      font-size: 11px;
      letter-spacing: .16em;
      text-transform: uppercase;
    }

    .eyebrow-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--orange);
      box-shadow: 0 0 0 5px rgba(255,107,0,.12);
    }

    .section-heading {
      font-size: clamp(46px, 7vw, 100px);
      line-height: .88;
      letter-spacing: -.065em;
      font-weight: 700;
      margin: 28px 0 0;
    }

    .section-heading span {
      color: var(--orange);
    }

    .muted {
      color: var(--gray);
    }

    /* NAV */

    .nav-wrap {
      position: fixed;
      top: 18px;
      left: 0;
      right: 0;
      z-index: 900;
      pointer-events: none;
    }

    .nav {
      pointer-events: auto;
      height: 62px;
      border: 1px solid rgba(17,17,17,.08);
      border-radius: 100px;
      background: rgba(241,237,229,.84);
      backdrop-filter: blur(20px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 7px 9px 7px 10px;
      box-shadow: 0 12px 40px rgba(17,17,17,.08);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 11px;
      font-weight: 800;
      letter-spacing: -.04em;
    }

    .logo-mark {
      width: 43px;
      height: 43px;
      display: grid;
      place-items: center;
      background: var(--orange);
      color: #111;
      border-radius: 14px;
      font-size: 16px;
      font-weight: 900;
    }

    .logo-text {
      font-size: 17px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .nav-link {
      border: 0;
      background: transparent;
      padding: 11px 14px;
      border-radius: 30px;
      cursor: pointer;
      color: #4e4b47;
      font-size: 12px;
      transition: .25s ease;
    }

    .nav-link:hover {
      background: rgba(17,17,17,.06);
      color: #111;
    }

    .nav-cta {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--black);
      color: white;
      border-radius: 100px;
      padding: 12px 17px;
      font-size: 12px;
      font-weight: 700;
    }

    .nav-cta svg {
      width: 14px;
    }

    .mobile-menu-button {
      width: 43px;
      height: 43px;
      border: 0;
      border-radius: 50%;
      background: var(--black);
      color: white;
      display: none;
      place-items: center;
      cursor: pointer;
    }

    .mobile-menu {
      position: fixed;
      top: 88px;
      left: 20px;
      right: 20px;
      z-index: 899;
      background: #111;
      color: white;
      border-radius: 28px;
      padding: 18px;
      box-shadow: 0 30px 70px rgba(0,0,0,.25);
    }

    .mobile-menu a {
      display: block;
      padding: 17px 12px;
      border-bottom: 1px solid rgba(255,255,255,.1);
      font-size: 16px;
    }

    /* HERO */

    .hero {
      min-height: 100vh;
      padding: 150px 0 80px;
      display: flex;
      align-items: center;
      position: relative;
    }

    .hero-grid {
      position: absolute;
      inset: 0;
      opacity: .38;
      background-image:
        linear-gradient(rgba(17,17,17,.055) 1px, transparent 1px),
        linear-gradient(90deg, rgba(17,17,17,.055) 1px, transparent 1px);
      background-size: 70px 70px;
      mask-image: linear-gradient(to bottom, black, transparent 90%);
    }

    .hero-glow {
      position: absolute;
      width: 620px;
      height: 620px;
      right: -160px;
      top: 50px;
      background: radial-gradient(circle, rgba(255,107,0,.24), transparent 68%);
      filter: blur(25px);
      pointer-events: none;
    }

    .hero-layout {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 1.1fr .9fr;
      gap: 60px;
      align-items: center;
    }

    .available {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-radius: 100px;
      border: 1px solid rgba(17,17,17,.14);
      background: rgba(255,255,255,.35);
      font-family: "DM Mono", monospace;
      font-size: 10px;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    .available-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #21a453;
      box-shadow: 0 0 0 5px rgba(33,164,83,.12);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%,100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(.7); opacity: .6; }
    }

    .hero-title {
      margin: 25px 0 22px;
      font-size: clamp(64px, 10vw, 145px);
      line-height: .8;
      letter-spacing: -.085em;
      font-weight: 800;
    }

    .hero-title .orange {
      color: var(--orange);
    }

    .hero-description {
      max-width: 570px;
      font-size: clamp(16px, 1.7vw, 20px);
      line-height: 1.55;
      color: #57534e;
      margin: 25px 0 0;
    }

    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 34px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 50px;
      padding: 0 20px;
      border-radius: 100px;
      border: 1px solid var(--black);
      cursor: pointer;
      font-size: 13px;
      font-weight: 700;
      transition: .3s ease;
    }

    .btn-dark {
      background: var(--black);
      color: white;
    }

    .btn-light {
      background: transparent;
      color: var(--black);
    }

    .btn:hover {
      transform: translateY(-3px);
    }

    .btn svg {
      width: 16px;
      height: 16px;
    }

    .hello-wrap {
      margin-top: 34px;
      color: var(--orange);
      width: min(420px, 75vw);
    }

    .hero-visual {
      position: relative;
      min-height: 520px;
      display: grid;
      place-items: center;
    }

    .visual-orbit {
      width: min(430px, 75vw);
      aspect-ratio: 1;
      border: 1px solid rgba(17,17,17,.15);
      border-radius: 50%;
      position: relative;
    }

    .visual-orbit::before,
    .visual-orbit::after {
      content: "";
      position: absolute;
      inset: 11%;
      border: 1px solid rgba(17,17,17,.09);
      border-radius: 50%;
    }

    .visual-orbit::after {
      inset: 22%;
    }

    .visual-core {
      position: absolute;
      inset: 29%;
      border-radius: 50%;
      background: var(--orange);
      display: grid;
      place-items: center;
      color: #111;
      box-shadow:
        0 30px 80px rgba(255,107,0,.25),
        inset 0 0 0 1px rgba(17,17,17,.12);
    }

    .visual-core span {
      font-size: clamp(40px, 6vw, 75px);
      font-weight: 800;
      letter-spacing: -.09em;
    }

    .orbit-dot {
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--black);
      box-shadow: 0 0 0 7px rgba(17,17,17,.08);
    }

    .dot-one {
      top: 8%;
      left: 42%;
    }

    .dot-two {
      bottom: 18%;
      right: 4%;
      background: var(--orange);
    }

    .dot-three {
      left: 7%;
      bottom: 28%;
    }

    .floating-card {
      position: absolute;
      border: 1px solid rgba(17,17,17,.1);
      background: rgba(255,255,255,.64);
      backdrop-filter: blur(16px);
      border-radius: 20px;
      padding: 15px;
      box-shadow: 0 20px 50px rgba(17,17,17,.08);
    }

    .floating-card.one {
      top: 7%;
      right: -2%;
    }

    .floating-card.two {
      bottom: 8%;
      left: -4%;
    }

    .floating-label {
      font-family: "DM Mono", monospace;
      font-size: 9px;
      letter-spacing: .12em;
      color: #77716b;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    .floating-value {
      font-size: 17px;
      font-weight: 800;
    }

    /* MARQUEE */

    .marquee {
      overflow: hidden;
      background: var(--black);
      color: white;
      border-top: 1px solid #222;
      border-bottom: 1px solid #222;
      padding: 17px 0;
    }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 24s linear infinite;
    }

    .marquee-item {
      display: flex;
      align-items: center;
      gap: 30px;
      padding-right: 30px;
      white-space: nowrap;
      font-size: 13px;
      font-family: "DM Mono", monospace;
      letter-spacing: .12em;
      text-transform: uppercase;
    }

    .marquee-item b {
      color: var(--orange);
      font-size: 18px;
    }

    @keyframes marquee {
      to {
        transform: translateX(-50%);
      }
    }

    /* SERVICES */

    .services-top {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      align-items: end;
      margin-bottom: 65px;
    }

    .services-intro {
      max-width: 420px;
      color: #66615b;
      line-height: 1.65;
      font-size: 15px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      border-top: 1px solid var(--line);
      border-left: 1px solid var(--line);
    }

    .service-card {
      position: relative;
      padding: 34px;
      min-height: 320px;
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      overflow: hidden;
      transition: .45s cubic-bezier(.2,.8,.2,1);
    }

    .service-card::before {
      content: "";
      position: absolute;
      width: 260px;
      height: 260px;
      border-radius: 50%;
      background: var(--orange);
      right: -180px;
      bottom: -180px;
      transition: .5s ease;
      opacity: .12;
    }

    .service-card:hover {
      background: rgba(255,255,255,.5);
      transform: translateY(-4px);
    }

    .service-card:hover::before {
      right: -100px;
      bottom: -100px;
      opacity: .24;
    }

    .service-number {
      font-family: "DM Mono", monospace;
      color: #8b857d;
      font-size: 11px;
    }

    .service-icon {
      width: 47px;
      height: 47px;
      border: 1px solid rgba(17,17,17,.13);
      border-radius: 14px;
      display: grid;
      place-items: center;
      margin: 35px 0 28px;
      transition: .3s ease;
    }

    .service-card:hover .service-icon {
      background: var(--orange);
      border-color: var(--orange);
      transform: rotate(-7deg);
    }

    .service-icon svg {
      width: 21px;
    }

    .service-title {
      font-size: clamp(26px, 3vw, 40px);
      line-height: .95;
      letter-spacing: -.05em;
      margin: 0;
    }

    .service-subtitle {
      color: var(--orange);
      font-size: 12px;
      font-family: "DM Mono", monospace;
      margin-top: 8px;
      text-transform: uppercase;
    }

    .service-description {
      color: #6d6861;
      font-size: 14px;
      line-height: 1.55;
      max-width: 470px;
      margin: 20px 0;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .tag {
      border: 1px solid rgba(17,17,17,.11);
      padding: 6px 9px;
      border-radius: 100px;
      font-family: "DM Mono", monospace;
      font-size: 9px;
      color: #69645e;
    }

    /* ANIMATED TEXT */

    .animated-text {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      line-height: .85;
      letter-spacing: -.075em;
      margin: 0;
      font-family: "Manrope", sans-serif;
      font-feature-settings: "wght";
    }

    .animated-char {
      display: inline-block;
      font-variation-settings: "wght" var(--min-weight);
      animation:
        breath var(--duration)
        alternate cubic-bezier(.37,0,.63,1)
        infinite;
      animation-delay: var(--delay);
      animation-fill-mode: both;
      white-space: pre;
    }

    @keyframes breath {
      0% {
        font-variation-settings: "wght" var(--min-weight);
      }
      100% {
        font-variation-settings: "wght" var(--max-weight);
      }
    }

    /* ABOUT */

    .about-grid {
      display: grid;
      grid-template-columns: .8fr 1.2fr;
      gap: 100px;
      align-items: center;
    }

    .about-copy {
      font-size: clamp(20px, 2.5vw, 34px);
      line-height: 1.25;
      letter-spacing: -.035em;
    }

    .about-copy strong {
      color: var(--orange);
    }

    .about-details {
      margin-top: 35px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      border-top: 1px solid var(--line);
    }

    .detail {
      padding: 20px 0;
      border-bottom: 1px solid var(--line);
    }

    .detail:nth-child(odd) {
      margin-right: 25px;
    }

    .detail-label {
      font-family: "DM Mono", monospace;
      color: #8b857d;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .1em;
    }

    .detail-value {
      font-size: 16px;
      font-weight: 700;
      margin-top: 7px;
    }

    /* PRICING */

    .pricing-header {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 30px;
      margin-bottom: 60px;
    }

    .pricing-note {
      max-width: 350px;
      color: #6e6a65;
      font-size: 14px;
      line-height: 1.6;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .price-card {
      background: white;
      border: 1px solid rgba(17,17,17,.1);
      border-radius: 28px;
      padding: 30px;
      min-height: 530px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      transition: .4s ease;
    }

    .price-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 30px 70px rgba(17,17,17,.12);
    }

    .price-card.featured {
      background: var(--black);
      color: white;
      transform: translateY(-15px);
      box-shadow: 0 35px 80px rgba(17,17,17,.2);
    }

    .price-card.featured:hover {
      transform: translateY(-21px);
    }

    .popular {
      position: absolute;
      top: 18px;
      right: 18px;
      padding: 7px 10px;
      background: var(--orange);
      color: #111;
      border-radius: 100px;
      font-family: "DM Mono", monospace;
      font-size: 9px;
      letter-spacing: .08em;
    }

    .price-title {
      font-size: 23px;
      letter-spacing: -.04em;
      font-weight: 800;
    }

    .price {
      margin-top: 55px;
      font-size: clamp(44px, 5vw, 66px);
      font-weight: 800;
      letter-spacing: -.07em;
      line-height: .9;
    }

    .price-suffix {
      font-family: "DM Mono", monospace;
      color: #8d8880;
      font-size: 9px;
      letter-spacing: .1em;
      margin-top: 8px;
    }

    .price-description {
      margin-top: 30px;
      color: #77716a;
      font-size: 13px;
      line-height: 1.55;
    }

    .price-card.featured .price-description {
      color: #aaa59e;
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 30px 0 0;
      display: grid;
      gap: 12px;
    }

    .feature-list li {
      display: flex;
      align-items: flex-start;
      gap: 9px;
      font-size: 12px;
      color: #55514c;
    }

    .price-card.featured .feature-list li {
      color: #d1cdc7;
    }

    .feature-list svg {
      width: 15px;
      height: 15px;
      flex: 0 0 auto;
      color: var(--orange);
      margin-top: 1px;
    }

    /* PROCESS */

    .process {
      background: var(--black);
      color: white;
      overflow: hidden;
    }

    .process::before {
      content: "";
      position: absolute;
      width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(255,107,0,.18), transparent 65%);
      right: -300px;
      top: -250px;
    }

    .process-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-top: 70px;
      border-top: 1px solid rgba(255,255,255,.13);
    }

    .process-step {
      padding: 28px 24px 20px 0;
      border-right: 1px solid rgba(255,255,255,.13);
      margin-right: 24px;
      min-height: 280px;
    }

    .process-step:last-child {
      border-right: 0;
      margin-right: 0;
    }

    .process-number {
      color: var(--orange);
      font-family: "DM Mono", monospace;
      font-size: 11px;
    }

    .process-title {
      margin-top: 80px;
      font-size: 26px;
      letter-spacing: -.04em;
    }

    .process-description {
      color: #99958f;
      font-size: 13px;
      line-height: 1.6;
      max-width: 220px;
    }

    /* TESTIMONIALS */

    .testimonials-grid {
      display: grid;
      grid-template-columns: 1.1fr .9fr;
      gap: 15px;
      margin-top: 70px;
    }

    .testimonial-main {
      background: var(--orange);
      border-radius: 30px;
      padding: 45px;
      min-height: 430px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .quote-mark {
      font-size: 80px;
      line-height: .6;
      font-weight: 800;
      opacity: .22;
    }

    .quote-text {
      font-size: clamp(24px, 3vw, 40px);
      line-height: 1.08;
      letter-spacing: -.045em;
      font-weight: 700;
      max-width: 720px;
    }

    .quote-author {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 20px;
      border-top: 1px solid rgba(17,17,17,.2);
      padding-top: 20px;
    }

    .author-name {
      font-size: 13px;
      font-weight: 800;
    }

    .author-role {
      color: rgba(17,17,17,.6);
      font-family: "DM Mono", monospace;
      font-size: 9px;
      margin-top: 4px;
    }

    .testimonial-side {
      display: grid;
      gap: 15px;
    }

    .mini-testimonial {
      background: #fff;
      border-radius: 30px;
      padding: 30px;
      border: 1px solid rgba(17,17,17,.08);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 207px;
    }

    .mini-testimonial p {
      margin: 0;
      font-size: 16px;
      line-height: 1.45;
      letter-spacing: -.02em;
    }

    /* FAQ */

    .faq-layout {
      display: grid;
      grid-template-columns: .7fr 1.3fr;
      gap: 90px;
    }

    .faq-list {
      border-top: 1px solid var(--line);
    }

    .faq-item {
      border-bottom: 1px solid var(--line);
    }

    .faq-question {
      width: 100%;
      border: 0;
      background: transparent;
      padding: 24px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      cursor: pointer;
      font-size: 17px;
      font-weight: 700;
    }

    .faq-icon {
      width: 35px;
      height: 35px;
      border: 1px solid rgba(17,17,17,.12);
      border-radius: 50%;
      display: grid;
      place-items: center;
      flex: 0 0 auto;
    }

    .faq-icon svg {
      width: 15px;
    }

    .faq-answer {
      overflow: hidden;
    }

    .faq-answer-inner {
      color: #706b64;
      line-height: 1.6;
      font-size: 14px;
      max-width: 700px;
      padding: 0 55px 25px 0;
    }

    /* CONTACT */

    .contact {
      background: var(--orange);
      overflow: hidden;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1.1fr .9fr;
      gap: 80px;
      align-items: end;
    }

    .contact-title {
      font-size: clamp(60px, 10vw, 140px);
      line-height: .78;
      letter-spacing: -.09em;
      font-weight: 800;
      margin: 30px 0 35px;
    }

    .contact-title span {
      display: block;
    }

    .contact-description {
      max-width: 500px;
      font-size: 16px;
      line-height: 1.55;
      color: rgba(17,17,17,.68);
    }

    .contact-links {
      display: grid;
      gap: 10px;
    }

    .contact-link {
      background: rgba(255,255,255,.22);
      border: 1px solid rgba(17,17,17,.14);
      border-radius: 20px;
      padding: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: .3s ease;
    }

    .contact-link:hover {
      background: rgba(255,255,255,.4);
      transform: translateX(6px);
    }

    .contact-link-left {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    .contact-link-icon {
      width: 40px;
      height: 40px;
      border-radius: 13px;
      background: #111;
      color: white;
      display: grid;
      place-items: center;
    }

    .contact-link-icon svg {
      width: 17px;
    }

    .contact-link-label {
      font-size: 11px;
      font-family: "DM Mono", monospace;
      color: rgba(17,17,17,.55);
      text-transform: uppercase;
    }

    .contact-link-value {
      font-size: 13px;
      font-weight: 700;
      margin-top: 3px;
      word-break: break-word;
    }

    /* FOOTER */

    footer {
      background: #111;
      color: white;
      padding: 35px 0;
    }

    .footer-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .footer-copy {
      color: #77736d;
      font-family: "DM Mono", monospace;
      font-size: 10px;
    }

    .footer-links {
      display: flex;
      gap: 20px;
    }

    .footer-links a {
      color: #aaa59e;
      font-family: "DM Mono", monospace;
      font-size: 10px;
      transition: .2s;
    }

    .footer-links a:hover {
      color: var(--orange);
    }

    /* RESPONSIVE */

    @media (max-width: 1000px) {
      .nav-links,
      .nav-cta {
        display: none;
      }

      .mobile-menu-button {
        display: grid;
      }

      .hero-layout,
      .about-grid,
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .hero-visual {
        min-height: 430px;
      }

      .about-grid {
        gap: 50px;
      }

      .pricing-grid {
        grid-template-columns: 1fr;
      }

      .price-card.featured {
        transform: none;
      }

      .price-card.featured:hover {
        transform: translateY(-8px);
      }

      .process-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .process-step:nth-child(2) {
        border-right: 0;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
      }

      .faq-layout {
        grid-template-columns: 1fr;
        gap: 50px;
      }
    }

    @media (max-width: 700px) {
      .container {
        width: min(100% - 28px, 1240px);
      }

      .section {
        padding: 85px 0;
      }

      .hero {
        padding: 130px 0 55px;
      }

      .hero-title {
        font-size: clamp(58px, 17vw, 100px);
      }

      .hero-visual {
        min-height: 360px;
      }

      .visual-orbit {
        width: min(330px, 80vw);
      }

      .floating-card.one {
        right: 0;
      }

      .floating-card.two {
        left: 0;
      }

      .services-top,
      .pricing-header {
        display: block;
      }

      .services-intro,
      .pricing-note {
        margin-top: 25px;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .service-card {
        min-height: auto;
        padding: 27px;
      }

      .about-details {
        grid-template-columns: 1fr;
      }

      .detail:nth-child(odd) {
        margin-right: 0;
      }

      .process-grid {
        grid-template-columns: 1fr;
      }

      .process-step,
      .process-step:nth-child(2) {
        border-right: 0;
        border-bottom: 1px solid rgba(255,255,255,.13);
        margin-right: 0;
        min-height: 230px;
      }

      .process-step:last-child {
        border-bottom: 0;
      }

      .process-title {
        margin-top: 55px;
      }

      .testimonial-main {
        padding: 30px;
        min-height: 420px;
      }

      .quote-text {
        font-size: 27px;
      }

      .faq-question {
        font-size: 15px;
      }

      .contact-title {
        font-size: clamp(64px, 19vw, 120px);
      }

      .footer-inner {
        align-items: flex-start;
        flex-direction: column;
      }

      .hello-wrap {
        width: 260px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
      }
    }
  `}</style>
);

/* =========================================================
   APPLE HELLO STYLE SVG EFFECT
========================================================= */

interface AppleHelloProps {
  speed?: number;
  className?: string;
}

function AppleHelloEnglishEffect({
  speed = 1,
  className = "",
}: AppleHelloProps) {
  const duration = (1 / speed).toFixed(2);

  return (
    <motion.svg
      viewBox="0 0 638 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: "100%", height: "auto" }}
      stroke="currentColor"
      strokeWidth="14"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* H */}
      <motion.path
        d="M45 25 C45 70 45 120 45 170 M45 105 C75 105 100 105 126 105 M126 25 C126 75 126 120 126 170"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: Number(duration) * 0.8,
          ease: "easeInOut",
        }}
      />

      {/* E */}
      <motion.path
        d="M205 28 C175 20 150 38 150 70 L150 125 C150 160 175 178 207 168 M154 103 L198 103 M153 30 L212 30"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: Number(duration) * 1.2,
          delay: Number(duration) * 0.25,
          ease: "easeInOut",
        }}
      />

      {/* L */}
      <motion.path
        d="M250 28 C250 75 250 122 250 168 C278 168 303 168 327 168"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: Number(duration) * 1,
          delay: Number(duration) * 0.45,
          ease: "easeInOut",
        }}
      />

      {/* L */}
      <motion.path
        d="M355 28 C355 75 355 122 355 168 C383 168 408 168 432 168"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: Number(duration) * 1,
          delay: Number(duration) * 0.65,
          ease: "easeInOut",
        }}
      />

      {/* O */}
      <motion.path
        d="M530 100 C530 147 506 174 470 174 C434 174 410 147 410 100 C410 53 434 26 470 26 C506 26 530 53 530 100 Z"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: Number(duration) * 1.5,
          delay: Number(duration) * 0.8,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}

/* =========================================================
   VARIABLE FONT ANIMATED TEXT
========================================================= */

interface AnimatedTextProps {
  text: string;
  fontSize?: string | number;
  minWeight?: number;
  maxWeight?: number;
  animationDuration?: number;
  delayMultiplier?: number;
  className?: string;
}

function AnimatedText({
  text,
  fontSize = 100,
  minWeight = 300,
  maxWeight = 800,
  animationDuration = 1.5,
  delayMultiplier = 0.1,
  className = "",
}: AnimatedTextProps) {
  const characters = text.split("");

  return (
    <div className={`animated-text ${className}`}>
      {characters.map((char, index) => {
        const mappedIndex = index - characters.length / 2;

        const style = {
          "--min-weight": minWeight,
          "--max-weight": maxWeight,
          "--duration": `${animationDuration}s`,
          "--delay": `${mappedIndex * delayMultiplier}s`,
          fontSize:
            typeof fontSize === "number" ? `${fontSize}px` : fontSize,
        } as CSSProperties;

        return (
          <span
            key={`${char}-${index}`}
            className="animated-char"
            style={style}
            aria-hidden="true"
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

/* =========================================================
   REVEAL COMPONENT
========================================================= */

function Reveal({
  children,
  delay = 0,
  y = 35,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 0, y }
      }
      whileInView={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0 }
      }
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.75,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   MAGNETIC BUTTON
========================================================= */

function MagneticButton({
  children,
  href,
  dark = true,
}: {
  children: ReactNode;
  href: string;
  dark?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 350,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 350,
    damping: 20,
  });

  return (
    <motion.a
      href={href}
      className={`btn ${dark ? "btn-dark" : "btn-light"}`}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}

/* =========================================================
   FAQ ITEM
========================================================= */

function FAQItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>

        <span className="faq-icon">
          {open ? <Minus /> : <Plus />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="faq-answer-inner">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const closeMobile = () => {
    setMobileMenu(false);
  };

  return (
    <div className="site">
      <GlobalStyles />

      {/* Grain */}
      <div className="grain" aria-hidden="true" />

      {/* Scroll Progress */}
      <motion.div
        className="progress"
        style={{
          scaleX: smoothProgress,
        }}
      />

      {/* Mouse Glow */}
      {!reducedMotion && (
        <motion.div
          aria-hidden="true"
          style={{
            position: "fixed",
            left: smoothMouseX,
            top: smoothMouseY,
            width: 220,
            height: 220,
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(255,107,0,.09), transparent 68%)",
            filter: "blur(10px)",
          }}
        />
      )}

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <div className="nav-wrap">
        <div className="container">
          <nav className="nav">
            <a href="#home" className="logo" onClick={closeMobile}>
              <span className="logo-mark">SJ</span>
              <span className="logo-text">SirJiCloud</span>
            </a>

            <div className="nav-links">
              <a className="nav-link" href="#services">
                Services
              </a>
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
              <a className="nav-link" href="#process">
                Process
              </a>
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </div>

            <a href="#contact" className="nav-cta">
              Let's Talk
              <ArrowUpRight />
            </a>

            <button
              className="mobile-menu-button"
              onClick={() => setMobileMenu((value) => !value)}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
          >
            <a href="#services" onClick={closeMobile}>
              Services
            </a>
            <a href="#pricing" onClick={closeMobile}>
              Pricing
            </a>
            <a href="#process" onClick={closeMobile}>
              Process
            </a>
            <a href="#testimonials" onClick={closeMobile}>
              Testimonials
            </a>
            <a href="#faq" onClick={closeMobile}>
              FAQ
            </a>
            <a href="#contact" onClick={closeMobile}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* ===================================================
            HERO
        =================================================== */}

        <section id="home" className="hero">
          <div className="hero-grid" />
          <div className="hero-glow" />

          <div className="container">
            <motion.div
              className="hero-layout"
              style={!reducedMotion ? { y: heroY } : undefined}
            >
              <div>
                <Reveal>
                  <div className="available">
                    <span className="available-dot" />
                    AVAILABLE FOR WORK
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <h1 className="hero-title">
                    BUILD.
                    <br />
                    <span className="orange">AUTOMATE.</span>
                    <br />
                    GROW.
                  </h1>
                </Reveal>

                <Reveal delay={0.16}>
                  <p className="hero-description">
                    SirJiCloud builds Discord communities, custom bots,
                    websites and digital systems that are designed to work
                    beautifully and efficiently.
                  </p>
                </Reveal>

                <Reveal delay={0.23}>
                  <div className="hero-buttons">
                    <MagneticButton href="#contact">
                      Start a Project
                      <ArrowUpRight />
                    </MagneticButton>

                    <MagneticButton href="#services" dark={false}>
                      Explore Services
                      <ArrowDown />
                    </MagneticButton>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="hello-wrap">
                    <AppleHelloEnglishEffect speed={1.1} />
                  </div>
                </Reveal>
              </div>

              <div className="hero-visual">
                <motion.div
                  className="visual-orbit"
                  animate={
                    reducedMotion
                      ? undefined
                      : {
                          rotate: [0, 4, 0, -4, 0],
                        }
                  }
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="visual-core"
                    animate={
                      reducedMotion
                        ? undefined
                        : {
                            scale: [1, 1.04, 1],
                          }
                    }
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span>SJ</span>
                  </motion.div>

                  <motion.div
                    className="orbit-dot dot-one"
                    animate={
                      reducedMotion
                        ? undefined
                        : {
                            y: [0, -20, 0],
                          }
                    }
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                  />

                  <motion.div
                    className="orbit-dot dot-two"
                    animate={
                      reducedMotion
                        ? undefined
                        : {
                            y: [0, 15, 0],
                          }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />

                  <motion.div
                    className="orbit-dot dot-three"
                    animate={
                      reducedMotion
                        ? undefined
                        : {
                            x: [0, 15, 0],
                          }
                    }
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                    }}
                  />

                  <div className="floating-card one">
                    <div className="floating-label">SYSTEM</div>
                    <div className="floating-value">ONLINE</div>
                  </div>

                  <div className="floating-card two">
                    <div className="floating-label">PROJECTS</div>
                    <div className="floating-value">BUILDING →</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================================================
            MARQUEE
        =================================================== */}

        <div className="marquee">
          <div className="marquee-track">
            {[1, 2].map((copy) => (
              <div className="marquee-item" key={copy}>
                <b>✦</b>
                DISCORD
                <b>✦</b>
                AUTOMATION
                <b>✦</b>
                WEB DEVELOPMENT
                <b>✦</b>
                CUSTOM BOTS
                <b>✦</b>
                COMMUNITY GROWTH
                <b>✦</b>
                CREATIVE
                <b>✦</b>
                SIRJICLOUD
                <b>✦</b>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================
            SERVICES
        =================================================== */}

        <section id="services" className="section">
          <div className="container">
            <div className="services-top">
              <div>
                <Reveal>
                  <div className="eyebrow">
                    <span className="eyebrow-dot" />
                    WHAT I DO
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <h2 className="section-heading">
                    SERVICES
                    <br />
                    <span>BUILT</span> TO WORK.
                  </h2>
                </Reveal>
              </div>

              <Reveal delay={0.15}>
                <p className="services-intro">
                  From Discord infrastructure to websites and automation,
                  every project is built around the actual problem you want
                  to solve.
                </p>
              </Reveal>
            </div>

            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal key={service.number} delay={(index % 2) * 0.08}>
                    <motion.article
                      className="service-card"
                      whileHover={
                        reducedMotion
                          ? undefined
                          : {
                              y: -5,
                            }
                      }
                    >
                      <div className="service-number">
                        {service.number}
                      </div>

                      <motion.div
                        className="service-icon"
                        whileHover={
                          reducedMotion
                            ? undefined
                            : {
                                rotate: -8,
                                scale: 1.05,
                              }
                        }
                      >
                        <Icon />
                      </motion.div>

                      <h3 className="service-title">
                        {service.title}
                      </h3>

                      <div className="service-subtitle">
                        {service.subtitle}
                      </div>

                      <p className="service-description">
                        {service.description}
                      </p>

                      <div className="tags">
                        {service.tags.map((tag) => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================
            ABOUT / ANIMATED TEXT
        =================================================== */}

        <section className="section" style={{ paddingTop: 50 }}>
          <div className="container">
            <div className="about-grid">
              <Reveal>
                <div>
                  <div className="eyebrow">
                    <span className="eyebrow-dot" />
                    THE APPROACH
                  </div>

                  <div style={{ marginTop: 30, overflow: "hidden" }}>
                    <AnimatedText
                      text="CREATE."
                      fontSize="clamp(55px, 8vw, 110px)"
                      minWeight={250}
                      maxWeight={800}
                      animationDuration={1.8}
                      delayMultiplier={0.08}
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div>
                  <p className="about-copy">
                    I don't just make things <strong>look good.</strong>
                    <br />
                    I build systems that are easier to use, easier to manage
                    and designed around the way you actually work.
                  </p>

                  <div className="about-details">
                    <div className="detail">
                      <div className="detail-label">Focus</div>
                      <div className="detail-value">
                        Digital Systems
                      </div>
                    </div>

                    <div className="detail">
                      <div className="detail-label">Style</div>
                      <div className="detail-value">
                        Clean + Animated
                      </div>
                    </div>

                    <div className="detail">
                      <div className="detail-label">Build</div>
                      <div className="detail-value">
                        Custom
                      </div>
                    </div>

                    <div className="detail">
                      <div className="detail-label">Support</div>
                      <div className="detail-value">
                        Direct
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===================================================
            PRICING
        =================================================== */}

        <section id="pricing" className="section">
          <div className="container">
            <div className="pricing-header">
              <Reveal>
                <div>
                  <div className="eyebrow">
                    <span className="eyebrow-dot" />
                    PRICING
                  </div>

                  <h2 className="section-heading">
                    SIMPLE.
                    <br />
                    <span>DIRECT.</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="pricing-note">
                  Clear starting points for common projects. Custom
                  requirements can be discussed directly.
                </p>
              </Reveal>
            </div>

            <div className="pricing-grid">
              {pricing.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <motion.article
                    className={`price-card ${
                      item.featured ? "featured" : ""
                    }`}
                    whileHover={
                      reducedMotion
                        ? undefined
                        : {
                            y: item.featured ? -21 : -8,
                          }
                    }
                  >
                    {item.featured && (
                      <div className="popular">
                        MOST REQUESTED
                      </div>
                    )}

                    <div className="price-title">
                      {item.title}
                    </div>

                    <div className="price">{item.price}</div>

                    <div className="price-suffix">
                      {item.suffix}
                    </div>

                    <div className="price-description">
                      {item.description}
                    </div>

                    <ul className="feature-list">
                      {item.features.map((feature) => (
                        <li key={feature}>
                          <Check />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            PROCESS
        =================================================== */}

        <section id="process" className="section process">
          <div className="container">
            <Reveal>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                HOW IT WORKS
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="section-heading">
                FROM IDEA
                <br />
                <span>TO LIVE.</span>
              </h2>
            </Reveal>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08}>
                  <div className="process-step">
                    <div className="process-number">
                      {step.number}
                    </div>

                    <div className="process-title">
                      {step.title}
                    </div>

                    <p className="process-description">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            TESTIMONIALS
        =================================================== */}

        <section id="testimonials" className="section">
          <div className="container">
            <Reveal>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                CLIENT FEEDBACK
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="section-heading">
                BUILT WITH
                <br />
                <span>PURPOSE.</span>
              </h2>
            </Reveal>

            <div className="testimonials-grid">
              <Reveal>
                <div className="testimonial-main">
                  <div className="quote-mark">“</div>

                  <div className="quote-text">
                    {testimonials[0].quote}
                  </div>

                  <div className="quote-author">
                    <div>
                      <div className="author-name">
                        {testimonials[0].name}
                      </div>
                      <div className="author-role">
                        {testimonials[0].role}
                      </div>
                    </div>

                    <CheckCircle size={25} />
                  </div>
                </div>
              </Reveal>

              <div className="testimonial-side">
                {testimonials.slice(1).map((item, index) => (
                  <Reveal key={item.name} delay={index * 0.1}>
                    <div className="mini-testimonial">
                      <p>“{item.quote}”</p>

                      <div>
                        <div className="author-name">
                          {item.name}
                        </div>
                        <div className="author-role">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            FAQ
        =================================================== */}

        <section id="faq" className="section">
          <div className="container">
            <div className="faq-layout">
              <Reveal>
                <div>
                  <div className="eyebrow">
                    <span className="eyebrow-dot" />
                    FAQ
                  </div>

                  <h2 className="section-heading">
                    GOT
                    <br />
                    <span>QUESTIONS?</span>
                  </h2>

                  <p
                    className="services-intro"
                    style={{ marginTop: 30 }}
                  >
                    Here are answers to some of the things clients usually
                    ask before starting a project.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <FAQItem
                      key={faq.q}
                      question={faq.q}
                      answer={faq.a}
                      open={openFaq === index}
                      onClick={() =>
                        setOpenFaq(
                          openFaq === index ? null : index
                        )
                      }
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section id="contact" className="section contact">
          <div className="container">
            <div className="contact-grid">
              <Reveal>
                <div>
                  <div className="eyebrow">
                    <span
                      className="eyebrow-dot"
                      style={{
                        background: "#111",
                        boxShadow:
                          "0 0 0 5px rgba(17,17,17,.1)",
                      }}
                    />
                    LET'S BUILD
                  </div>

                  <h2 className="contact-title">
                    <span>HAVE</span>
                    <span>AN IDEA?</span>
                  </h2>

                  <p className="contact-description">
                    Tell me what you're trying to build, improve or
                    automate. I'll help turn the idea into something
                    practical.
                  </p>

                  <div style={{ marginTop: 30 }}>
                    <a
                      href="https://discord.com/users/sir_ji_"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark"
                    >
                      Start a Conversation
                      <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="contact-links">
                  <a
                    href="https://discord.com/users/sir_ji_"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <div className="contact-link-left">
                      <div className="contact-link-icon">
                        <MessageCircle />
                      </div>

                      <div>
                        <div className="contact-link-label">
                          Discord
                        </div>
                        <div className="contact-link-value">
                          @sir_ji_
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight size={17} />
                  </a>

                  <a
                    href="https://t.me/Harsh_sir_ji"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <div className="contact-link-left">
                      <div className="contact-link-icon">
                        <Send />
                      </div>

                      <div>
                        <div className="contact-link-label">
                          Telegram
                        </div>
                        <div className="contact-link-value">
                          @Harsh_sir_ji
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight size={17} />
                  </a>

                  <a
                    href="mailto:harshit.itms@gmail.com"
                    className="contact-link"
                  >
                    <div className="contact-link-left">
                      <div className="contact-link-icon">
                        <Mail />
                      </div>

                      <div>
                        <div className="contact-link-label">
                          Email
                        </div>
                        <div className="contact-link-value">
                          harshit.itms@gmail.com
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-copy">
              © {new Date().getFullYear()} SIRJICLOUD — BUILD.
              AUTOMATE. GROW.
            </div>

            <div className="footer-links">
              <a href="#home">HOME</a>
              <a href="#services">SERVICES</a>
              <a href="#contact">CONTACT</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}