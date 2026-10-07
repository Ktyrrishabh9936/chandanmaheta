import { useState, type FormEvent } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

const offerings = [
  {
    number: '01',
    title: 'Strategic Wellbeing Partnership',
    description:
      'I work with your leadership to build wellbeing into the heart of your organisation or space—not as another programme, but as the way you operate.',
    note: 'For the long view',
    color: '#e3ece2',
    icon: 'root',
  },
  {
    number: '02',
    title: 'Curated Wellbeing Engagement',
    description:
      'From a single session to a programme or retreat, shaped around your people. Practical experiences that stay with them long after the session.',
    note: 'For a shared experience',
    color: '#f1dfd6',
    icon: 'branch',
  },
  {
    number: '03',
    title: 'Personal Wellbeing Journey',
    description:
      'Twelve sessions over four months, personally guided and shaped around your life, your pressures and your goals.',
    note: 'One-to-one · 4 months',
    color: '#e4ecec',
    icon: 'leaf',
  },
];

const audiences = [
  {
    n: '01',
    title: 'Hospitality, Wellbeing & Living Spaces',
    copy: 'Together, we design a stay where mornings begin with breath and yoga, the mind settles through meditation, and nourishing evenings leave guests truly rested.',
  },
  {
    n: '02',
    title: 'Organisations & Institutions',
    copy: 'Practical wellbeing programmes, from a single session to a full retreat, shaped around your people and led personally, so the practices stay with them long after the session.',
  },
  {
    n: '03',
    title: 'Networks & Member Communities',
    copy: 'Shared experiences that bring members together around something that truly nourishes them.',
  },
  {
    n: '04',
    title: 'Leaders & Individuals',
    copy: 'A guided path back to your own rhythm, with better sleep, less stress and a steadier mind.',
  },
];

const practices = [
  { title: 'Applied Yogic Science & Pranayama', association: 'Kaivalyadhama', tone: '#dce9df' },
  { title: 'Nutrition & Lifestyle', association: 'BFY', tone: '#f3ded7' },
  { title: 'Transcendental Meditation', association: 'Signature offering', tone: '#f0dfaf' },
  { title: 'Coaching & Guidance', association: 'Jack Canfield', tone: '#dce9ec' },
];

function BrandMark() {
  return (
    <a href="#top" aria-label="Chandan Mehta Wellbeing home" className="flex items-center gap-3" data-testid="link-brand-home">
      <span className="flex items-center gap-3 text-[#503a2e]">
        <img src="/chandan-logo-mark.png" alt="" className="h-10 w-10 shrink-0 object-contain" width="328" height="292" />
        <span className="leading-tight">
          <span className="serif block text-[1.23rem] tracking-[-.02em]">Chandan Mehta</span>
          <span className="block text-[.54rem] font-semibold uppercase tracking-[.28em]">Wellbeing</span>
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ['Who I work with', '#who'],
    ['Work together', '#work'],
    ['The Approach', '#approach'],
    ['About', '#about'],
  ];
  return (
    <header className="absolute left-0 right-0 top-0 z-20 bg-[#ECB538] shadow-[0_1px_0_rgba(80,58,46,.12)]">
      <div className="site-wrap flex h-[92px] items-center justify-between">
        <BrandMark />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {nav.map(([label, href]) => <a key={label} className="nav-link" href={href}>{label}</a>)}
          <span className="nav-link cursor-default opacity-60" aria-disabled="true" title="Journal is coming soon">Journal <span className="text-[.6rem]">· SOON</span></span>
          <a href="#contact" className="rounded-full bg-[#503a2e] px-5 py-3 text-[.78rem] font-semibold text-[#fffdf4] transition-transform hover:-translate-y-0.5" data-testid="link-contact-nav">Get in touch <ArrowUpRight className="ml-1 inline h-4 w-4" /></a>
        </nav>
        <button className="rounded-full border border-[#503a2e]/15 p-2 md:hidden" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)} data-testid="button-mobile-menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && <nav aria-label="Mobile navigation" className="site-wrap mt-2 flex flex-col gap-4 rounded-2xl border border-[#503a2e]/15 bg-[#fffefa] p-5 shadow-lg md:hidden">
        {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="nav-link py-1">{label}</a>)}
        <span className="nav-link cursor-default py-1 opacity-60" aria-disabled="true">Journal · coming soon</span>
        <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-[#ECB538] px-5 py-3 text-center text-sm font-semibold">Get in touch</a>
      </nav>}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[740px] items-end overflow-hidden bg-[#ede4d1] pb-20 pt-32 md:min-h-[790px] md:pb-28">
      <img src="/wellbeing-garden.jpg" alt="A quiet garden path, warmed by early morning light" className="absolute inset-0 h-full w-full object-cover object-center" width="1800" height="1200" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f6ef]/95 via-[#f8f6ef]/75 to-[#f8f6ef]/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4b3425]/10 to-transparent" />
      <div className="site-wrap relative z-10">
        <div className="max-w-[700px]">
          <p className="eyebrow mb-7 reveal">Wellbeing, rooted in real life</p>
          <h1 className="serif max-w-[680px] text-[clamp(3.6rem,8vw,7.3rem)] leading-[.91] tracking-[-.045em] text-[#503a2e] reveal reveal-delay">Your anchor for a steadier, fuller life.</h1>
          <p className="mt-8 max-w-[465px] text-[1.02rem] leading-7 text-[#67574c] reveal reveal-late">Two decades in corporate India. A lifelong yogic practice. The only certified female Transcendental Meditation teacher in Maharashtra.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5 reveal reveal-late">
            <a href="#work" className="cta inline-flex items-center gap-3 rounded-full bg-[#ECB538] px-6 py-4 text-sm font-semibold text-[#503a2e]" data-testid="link-explore-work">Explore working together <ArrowRight size={17} /></a>
            <a href="#who" className="inline-flex items-center gap-2 text-sm font-medium text-[#624b3d]">Find your starting point <ArrowDown size={15} /></a>
          </div>
        </div>
        <div className="mt-16 flex items-center gap-4 border-t border-[#503a2e]/15 pt-5 text-[.67rem] font-semibold uppercase tracking-[.16em] text-[#755f4e] md:mt-24">
          <span className="h-2 w-2 rounded-full bg-[#ECB538]" /> Grounded in practice <span className="hidden text-[#b9aa9a] sm:inline">/</span><span className="hidden sm:inline">Made for everyday life</span>
        </div>
      </div>
      <div className="absolute bottom-0 right-[8%] hidden h-32 w-px bg-[#fffefa]/80 md:block" />
    </section>
  );
}

function AudienceSection() {
  return (
    <section id="who" className="bg-[#fffefa] py-24 md:py-32">
      <div className="site-wrap">
        <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-24">
          <div>
            <p className="eyebrow">A practice for real life</p>
            <h2 className="serif mt-5 max-w-sm text-5xl leading-[.98] tracking-[-.03em] md:text-6xl">Who I work with</h2>
            <p className="mt-6 max-w-sm text-[.94rem] leading-7 text-[#78685d]">Wellbeing looks different in every room, workplace and season of life. The work begins by listening.</p>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {audiences.map((item) => (
              <article key={item.n} className="border-t border-[#e8e1d5] py-6">
                <div className="mb-4 flex items-center justify-between"><span className="text-[.65rem] font-semibold tracking-[.17em] text-[#b38b43]">{item.n}</span><span className="h-1.5 w-1.5 rounded-full bg-[#d7b25d]" /></div>
                <h3 className="serif text-[1.7rem] leading-[1.05]">{item.title}</h3>
                <p className="mt-3 text-[.85rem] leading-6 text-[#78685d]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section id="work" className="bg-[#f8f6ef] py-24 md:py-32">
      <div className="site-wrap">
        <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
          <div><p className="eyebrow">A beginning, shaped around you</p><h2 className="serif mt-5 text-5xl tracking-[-.03em] md:text-6xl">How we can work together</h2></div>
          <p className="max-w-[340px] text-sm leading-6 text-[#78685d]">A lasting partnership, a considered experience or a more personal path—choose the scale that feels right.</p>
        </div>
        <div className="space-y-4">
          {offerings.map((item) => (
            <article key={item.number} className="group relative grid min-h-[270px] overflow-hidden rounded-[1.6rem] md:grid-cols-[.72fr_1.28fr]" style={{ backgroundColor: item.color }}>
              <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden md:min-h-[280px]">
                {item.icon === 'root' && <svg aria-hidden="true" viewBox="0 0 260 220" className="h-[85%] w-[85%]"><g fill="none" stroke="#557464" strokeWidth="1.25" opacity=".75"><path d="M130 18v82m0-26L94 37m36 34 37-37M130 72 72 63m58 21 76-21m-76 22-43 52m43-44 45 72m-45-80-78 64m78-59 90 57M130 100v103m-48-66-20 45m34-52 4 63m82-48-8 51m23-53 24 29M94 37 64 26m30 11-4-27m77 0-4 23m4-23 29 0M72 63 39 50m33 13-5-32m139 11 25-18m-25 18 4-34"/></g></svg>}
                {item.icon === 'branch' && <svg aria-hidden="true" viewBox="0 0 260 220" className="h-[88%] w-[88%]"><g fill="none" stroke="#9c6959" strokeWidth="1.35" opacity=".68"><path d="M125 204c1-45-4-95 9-177m-9 137c-19-27-42-45-72-61m75 29c26-33 45-52 78-73M133 83c-20-21-34-33-56-43m56 25c21-21 36-31 58-41m-66 90c-28-3-50 0-75 11m82-4c30-8 48-6 76 0"/><path d="M72 103c-13-17-28-18-40-13 8 16 21 23 40 13Zm58-22c-3-20 7-31 22-37 4 18-3 31-22 37Zm48-3c8-18 23-23 39-20-5 18-18 27-39 20ZM78 42C66 26 69 12 80 1c11 15 11 28-2 41Zm112-18c1-19 12-29 28-33 0 19-9 30-28 33ZM59 115c-19-10-32-5-42 7 16 10 30 9 42-7Zm161 1c16-14 30-13 43-4-13 14-27 17-43 4Z"/></g></svg>}
                {item.icon === 'leaf' && <img src="/personal-wellbeing-journey.webp" alt="A woman reflecting while writing in her journal" className="absolute inset-0 h-full w-full object-cover object-[52%_center]" width="1200" height="1500" loading="lazy" />}
                <span className="absolute left-6 top-6 text-[.65rem] font-semibold tracking-[.18em] text-[#503a2e]/65">{item.number}</span>
              </div>
              <div className="flex flex-col justify-center px-7 py-9 md:px-12 md:py-12">
                <p className="eyebrow !text-[#806c52]">{item.note}</p>
                <h3 className="serif mt-3 max-w-[520px] text-4xl leading-[.98] tracking-[-.02em] md:text-5xl">{item.title}</h3>
                <p className="mt-5 max-w-[510px] text-sm leading-6 text-[#6b5b50]">{item.description}</p>
                <a href="#contact" className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold" data-testid={`link-${item.number}-enquiry`}>Start a conversation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-5 border-t border-[#e8e1d5] pt-7 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow">A thoughtful process, from first conversation to everyday practice</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[.62rem] font-semibold uppercase tracking-[.12em] text-[#78685d]">
            {['Understand', 'Architect', 'Curate', 'Implement', 'Integrate', 'Evolve'].map((step, i) => <span key={step} className="flex items-center gap-3">{i > 0 && <span className="text-[#c9bcae]">—</span>}{step}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function VibrationRings({ tone, position }: { tone: string; position: 'top' | 'bottom' }) {
  const sizes = [96, 136, 180, 228, 282, 344, 414];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${position === 'top' ? '-right-[200px] -top-[200px]' : '-bottom-[200px] -right-[200px]'} h-[430px] w-[430px]`}
    >
      {sizes.map((size, index) => (
        <span
          key={size}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: size,
            height: size,
            border: `${index % 3 === 0 ? 2 : index % 2 === 0 ? 1.5 : 1}px solid ${tone}`,
            opacity: 0.3 - index * 0.022,
            transform: `translate(-50%, -50%) translate(${index % 2 === 0 ? index * 1.2 : -index}px, ${index}px)`,
          }}
        />
      ))}
    </div>
  );
}

function ApproachSection() {
  return (
    <section id="approach" className="bg-[#fffefa] py-24 md:py-32">
      <div className="site-wrap">
        <div className="grid gap-12 md:grid-cols-[.75fr_1.25fr] md:gap-20">
          <div className="md:sticky md:top-12 md:self-start">
            <p className="eyebrow">The approach</p>
            <h2 className="serif mt-5 text-5xl leading-[.98] tracking-[-.03em] md:text-6xl">Many practices.<br /><em>One whole</em> you.</h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#78685d]">Each practice offers a different way in. Together, they meet the whole person—body, mind and the life around them.</p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Talk about your needs <ArrowRight size={16} /></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {practices.map((practice, i) => <article key={practice.title} className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[1.4rem] p-7 md:min-h-[310px] md:p-8" style={{ backgroundColor: practice.tone }}>
              {i === 0 && <VibrationRings tone="#557464" position="top" />}
              {i === 1 && <img src="/dew-leaf.jpg" alt="A dew-covered leaf representing natural nourishment" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-multiply" loading="lazy" width="800" height="1000" />}
              {i === 2 && <img src="/signature-meditation.webp" alt="A woman meditating peacefully in a bright, calm room" className="absolute inset-0 h-full w-full object-cover object-center opacity-55 mix-blend-multiply" loading="lazy" width="1200" height="1200" />}
              {i === 3 && <VibrationRings tone="#496a73" position="bottom" />}
              <span className="relative z-10 text-[.66rem] font-semibold tracking-[.18em] text-[#503a2e]/65">0{i + 1} <span className="mx-2">/</span> {practice.association}</span>
              <div className="relative z-10 flex items-end justify-between gap-3">
                <h3 className="serif max-w-[270px] text-[2rem] leading-[.98] tracking-[-.015em]">{practice.title}</h3>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#503a2e]/20 transition-colors group-hover:bg-[#fffefa]/50"><ArrowUpRight size={17} /></span>
              </div>
            </article>)}
          </div>
        </div>
        <p className="mt-8 text-xs text-[#78685d]">Practice experience and affiliations include Kaivalyadhama, BFY and Jack Canfield.</p>
      </div>
    </section>
  );
}

function MeditationSection() {
  return (
    <section id="meditation" className="relative overflow-hidden bg-[#e7eee7] py-24 md:py-32">
      <img src="/still-pond.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-[.13] mix-blend-multiply" loading="lazy" width="1800" height="1200" />
      <div className="site-wrap relative grid items-center gap-10 md:grid-cols-[1fr_.75fr] md:gap-20">
        <div>
          <p className="eyebrow">A signature practice</p>
          <h2 className="serif mt-6 max-w-[700px] text-[clamp(3.6rem,7vw,6.8rem)] leading-[.88] tracking-[-.04em]">You do not need to empty your mind.</h2>
          <p className="mt-7 max-w-[510px] text-base leading-7 text-[#5f675f]">Transcendental Meditation is effortless. A simple, natural practice that fits into the life you already have.</p>
          <div className="mt-9 grid max-w-[560px] grid-cols-2 gap-x-7 gap-y-5 border-t border-[#697667]/25 pt-6 sm:grid-cols-4">
            {[
              ['10M+', 'people learned TM'],
              ['100+', 'countries'],
              ['480+', 'peer-reviewed studies'],
              ['50+', 'years of study'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="serif text-3xl leading-none">{value}</p>
                <p className="mt-2 text-[.65rem] leading-4 text-[#626a5f]">{label}</p>
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ECB538] px-6 py-4 text-sm font-semibold text-[#503a2e]">Ask about learning TM <ArrowRight size={16} /></a>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[430px] overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(73,93,77,.18)]">
          <img src="/signature-meditation.webp" alt="A woman meditating peacefully in a bright, calm room" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" width="1200" height="1200" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#31453a]/65 via-transparent to-[#fffefa]/10" />
          <div className="absolute bottom-6 left-6 rounded-[1.4rem] border border-[#fffefa]/45 bg-[#fffefa]/90 px-6 py-5 text-[#503a2e] shadow-lg backdrop-blur-sm">
            <div className="flex items-end gap-3">
              <span className="serif text-6xl leading-[.8]">20</span>
              <span className="pb-1 text-[.66rem] font-semibold uppercase tracking-[.2em]">minutes</span>
            </div>
            <span className="mt-3 block text-sm text-[#6b6047]">twice a day</span>
          </div>
          <span className="absolute right-5 top-5 rounded-full bg-[#fffefa]/88 px-4 py-2 text-[.62rem] font-semibold uppercase tracking-[.12em] text-[#503a2e] backdrop-blur-sm">No empty mind required</span>
        </div>
        <div className="md:col-span-2 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#697667]/25 pt-5 text-[.68rem] uppercase tracking-[.14em] text-[#626a5f]">
          <span>Personal instruction</span><span>Certified teacher</span><span>Maharashtra, India</span><span>Learn at your own pace</span>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-[#f4e9dc] py-24 md:py-32">
      <div className="site-wrap grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center md:gap-24">
        <div className="relative min-h-[390px] overflow-hidden rounded-[48%_48%_1.5rem_1.5rem] bg-[#e5d9c8] md:min-h-[520px]">
          <img src="/wellbeing-garden.jpg" alt="Sun filtering through a peaceful garden" className="absolute inset-0 h-full w-full object-cover object-[60%_center]" loading="lazy" width="1800" height="1200" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#553f30]/30 via-transparent to-[#fffefa]/5" />
          <div className="absolute bottom-7 left-7 rounded-full bg-[#fffefa]/85 px-5 py-3 text-xs font-medium text-[#503a2e]">A practice grounded in life, not away from it</div>
        </div>
        <div className="py-4">
          <p className="eyebrow">A little about me</p>
          <h2 className="serif mt-5 text-5xl leading-[.96] tracking-[-.03em] md:text-6xl">Wellbeing is not a detour from life.</h2>
          <p className="mt-7 text-base leading-7 text-[#6d5d50]">It is how we meet it. My work brings together two decades in corporate India and a lifelong yogic practice—with care for the realities of people, teams and the places they share.</p>
          <p className="mt-4 text-base leading-7 text-[#6d5d50]">As a certified female TM teacher in Maharashtra, I also guide people into a simple daily practice that can become a steady anchor.</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">A conversation is a good place to start <ArrowRight size={16} /></a>
          <blockquote className="mt-12 border-l-2 border-[#ECB538] pl-6">
            <p className="eyebrow">In good company</p>
            <p className="serif mt-3 text-3xl">Knight Frank India</p>
            <footer className="mt-2 text-xs text-[#78685d]">Testimonial reference · words to be added with approval</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();
    if (!name || !email || !message) {
      setError('Please add your name, email and a short message to continue.');
      return;
    }
    const subject = encodeURIComponent(`A wellbeing conversation with ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}\nMobile: ${String(form.get('mobile') || 'Not provided')}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setError('');
    setSent(true);
  }
  return (
    <section id="contact" className="bg-[#fffefa] py-24 md:py-32">
      <div className="site-wrap grid gap-12 md:grid-cols-[.85fr_1.15fr] md:gap-24">
        <div>
          <p className="eyebrow">Let's talk</p>
          <h2 className="serif mt-5 max-w-md text-6xl leading-[.92] tracking-[-.04em] md:text-7xl">A steadier life can start here.</h2>
          <p className="mt-7 max-w-sm text-sm leading-7 text-[#78685d]">Tell me what you are looking for. We can start with a simple, no-pressure conversation.</p>
          <div className="mt-10 border-t border-[#e8e1d5] pt-5">
            <p className="eyebrow">Based in</p><p className="mt-2 text-sm">Mumbai, India · working across Maharashtra</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-[1.5rem] bg-[#f8f6ef] p-6 md:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-semibold">Your name<input required name="name" autoComplete="name" placeholder="How should I address you?" className="mt-2 w-full rounded-xl border border-[#e4dccf] bg-[#fffefa] px-4 py-3.5 text-sm font-normal outline-none transition focus:border-[#c09539] focus:ring-2 focus:ring-[#ecb538]/20" data-testid="input-contact-name" /></label>
            <label className="text-xs font-semibold">Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-[#e4dccf] bg-[#fffefa] px-4 py-3.5 text-sm font-normal outline-none transition focus:border-[#c09539] focus:ring-2 focus:ring-[#ecb538]/20" data-testid="input-contact-email" /></label>
            <label className="text-xs font-semibold sm:col-span-2">Mobile <span className="font-normal text-[#938477]">(optional)</span><input type="tel" name="mobile" autoComplete="tel" placeholder="+91" className="mt-2 w-full rounded-xl border border-[#e4dccf] bg-[#fffefa] px-4 py-3.5 text-sm font-normal outline-none transition focus:border-[#c09539] focus:ring-2 focus:ring-[#ecb538]/20" data-testid="input-contact-mobile" /></label>
            <label className="text-xs font-semibold sm:col-span-2">What would you like to explore?<textarea required name="message" rows={4} placeholder="A little about what brings you here..." className="mt-2 w-full resize-y rounded-xl border border-[#e4dccf] bg-[#fffefa] px-4 py-3.5 text-sm font-normal outline-none transition focus:border-[#c09539] focus:ring-2 focus:ring-[#ecb538]/20" data-testid="input-contact-message" /></label>
          </div>
          {error && <p role="alert" className="mt-4 text-sm text-[#a44435]" data-testid="status-contact-error">{error}</p>}
          {sent && <p role="status" className="mt-4 text-sm text-[#4e745a]" data-testid="status-contact-sent">Your email app should open with your enquiry prepared. Add Chandan’s email address before sending. Thank you for reaching out.</p>}
          <button type="submit" className="cta mt-6 inline-flex items-center gap-3 rounded-full bg-[#ECB538] px-6 py-4 text-sm font-semibold" data-testid="button-send-enquiry">Prepare enquiry email <ArrowRight size={16} /></button>
          <p className="mt-4 text-[.68rem] leading-5 text-[#8b7a6b]">This opens a draft in your email app. Chandan’s email address will be added here before the site launches.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#503a2e] py-12 text-[#f8f3e9]">
      <div className="site-wrap">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <a href="#top" className="serif text-3xl" data-testid="link-footer-home">Chandan Mehta</a>
            <p className="mt-1 text-[.62rem] uppercase tracking-[.26em] text-[#e4c77e]">Wellbeing</p>
            <p className="mt-5 text-xs text-[#ded1c0]">Mumbai, India</p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-[#f1e8da]">
            <a href="#who" className="hover:text-[#ECB538]">Who I work with</a><a href="#work" className="hover:text-[#ECB538]">Work together</a>
            <a href="#approach" className="hover:text-[#ECB538]">The Approach</a><a href="#about" className="hover:text-[#ECB538]">About</a>
            <a href="#contact" className="hover:text-[#ECB538]">Get in touch</a><span className="text-[#bdae9c]" aria-disabled="true">Journal · coming soon</span>
            <span className="text-[#bdae9c]" aria-disabled="true">Privacy policy · coming soon</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-sm text-[#f1e8da]" aria-label="LinkedIn profile link to be added">LinkedIn profile to be added <ArrowUpRight size={15} /></span>
        </div>
        <div className="mt-12 border-t border-[#f8f3e9]/20 pt-6">
          <p className="max-w-4xl text-[.68rem] leading-5 text-[#d8cbbb]"><strong className="font-semibold text-[#f1e8da]">Wellbeing disclaimer.</strong> Information on this website is for general wellbeing and educational purposes only. It is not medical advice, diagnosis or treatment, and is not a substitute for care from a qualified health professional. Please consult your healthcare provider about individual health concerns.</p>
          <div className="mt-6 flex flex-col justify-between gap-3 text-[.66rem] text-[#bdae9c] sm:flex-row"><span>© {new Date().getFullYear()} Chandan Mehta Wellbeing</span><span>Made for a fuller life.</span></div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AudienceSection />
        <WorkSection />
        <ApproachSection />
        <MeditationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></WouterRouter>;
}

export default App;
