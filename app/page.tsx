"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Avatar } from "../components/ui/avatar";
import { CheckIcon, DownloadIcon, LockClosedIcon, StarFilledIcon } from "@radix-ui/react-icons";

const features = [
  {
    icon: <CheckIcon className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    title: "Automated savings tailored to your goals",
    desc: "Set your targets and let z-vest do the rest. Save effortlessly with automation that adapts to your lifestyle.",
  },
  {
    icon: <StarFilledIcon className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    title: "Diverse investment options",
    desc: "Choose from a range of investment plans designed for every risk profile—grow your wealth your way.",
  },
  {
    icon: <DownloadIcon className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    title: "Earn competitive interest",
    desc: "Every deposit earns you more. Watch your savings grow with some of the best rates in the market.",
  },
  {
    icon: <LockClosedIcon className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    title: "Secure, easy withdrawals",
    desc: "Withdraw funds anytime with full transparency and robust security. Your money, always accessible.",
  },
];

const testimonials = [
  {
    name: "Amina O.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "z-vest made saving so easy! I reached my first goal in just 6 months. The app feels safe and looks amazing.",
    location: "Lagos, Nigeria",
  },
  {
    name: "Kwame B.",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "I love the investment options. I started small and now my money is working for me. Highly recommend!",
    location: "Accra, Ghana",
  },
  {
    name: "Zanele M.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "The interest rates are great and withdrawals are always smooth. I trust z-vest with my future.",
    location: "Johannesburg, South Africa",
  },
];

const faqs = [
  {
    q: "Is my money safe with z-vest?",
    a: "Absolutely. We use bank-level encryption and strict security protocols to keep your funds and data secure.",
  },
  {
    q: "How do I start investing?",
    a: "Sign up, complete your profile, and choose an investment plan that fits your goals. It’s that simple!",
  },
  {
    q: "Are there any hidden fees?",
    a: "No hidden fees. All charges are transparent and clearly displayed before you commit.",
  },
  {
    q: "Can I withdraw anytime?",
    a: "Yes, you can withdraw your funds at any time, subject to the terms of your chosen plan.",
  },
];

const socialProof = [
  {
    logo: "https://randomuser.me/api/portraits/men/12.jpg",
    alt: "TechCrunch",
    label: "Featured in TechCrunch",
  },
  {
    logo: "https://randomuser.me/api/portraits/women/21.jpg",
    alt: "Forbes Africa",
    label: "Forbes Africa Top 30 Startup",
  },
  {
    logo: "https://randomuser.me/api/portraits/men/34.jpg",
    alt: "Guardian Nigeria",
    label: "Guardian Nigeria Recommended",
  },
];

export default function LandingPage() {
  return (
    <main className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 min-h-screen text-slate-50 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-16 bg-transparent">
        <Link href="/" aria-label="z-vest Home" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-blue-700 to-blue-400 flex items-center justify-center font-bold text-xl text-white shadow-lg">z</span>
          <span className="font-bold text-2xl tracking-tight text-white">z-vest</span>
        </Link>
        <div className="flex gap-4">
          <Link href="/signin" className="text-slate-200 hover:text-white transition-colors font-medium">Sign In</Link>
          <Button asChild variant="outline" className="border-white text-white hover:bg-blue-700 hover:text-white transition-colors font-semibold">
            <Link href="/signup" aria-label="Sign up for z-vest">Sign Up</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-28 gap-10 md:gap-20 overflow-hidden">
        {/* Left: Text */}
        <div className="flex-1 z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            Save Smart.<br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Invest Easy.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-8 max-w-xl">
            z-vest empowers young Africans to achieve their financial goals with automated savings, flexible investments, and secure, interest-earning accounts.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-blue-900 font-bold shadow-xl hover:scale-105 transition-transform focus:ring-4 focus:ring-yellow-300">
            <Link href="/signup" aria-label="Start Saving Now">
              Start Saving Now
            </Link>
          </Button>
        </div>
        {/* Right: Visual */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-tr from-blue-700 via-blue-400 to-yellow-300 shadow-2xl flex items-center justify-center overflow-hidden animate-fade-in">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Happy African youth using z-vest app"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-xl z-10 animate-float"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-70 animate-pulse" aria-hidden="true" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-pink-400 rounded-full blur-2xl opacity-60 animate-pulse" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="flex flex-col items-center gap-4 py-6 md:py-10">
        <span className="uppercase text-xs tracking-widest text-slate-300 mb-2">As seen in</span>
        <div className="flex gap-8 md:gap-16 items-center flex-wrap justify-center">
          {socialProof.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <img src={item.logo} alt={item.alt} className="w-12 h-12 rounded-full object-cover border-2 border-blue-700 shadow-md" />
              <span className="text-xs text-slate-200 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 rounded-3xl mx-2 md:mx-16 shadow-xl mt-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">Why Choose z-vest?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-5 p-6 rounded-xl bg-blue-900/60 hover:bg-blue-800/80 transition-colors shadow-lg">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-200 text-base">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-6 md:px-16 flex flex-col items-center gap-10 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">How It Works</h2>
        <ol className="flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-5xl justify-center">
          <li className="flex-1 flex flex-col items-center text-center">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 to-blue-400 text-blue-900 font-bold text-2xl shadow-lg mb-4">1</span>
            <span className="text-lg font-semibold text-white mb-2">Sign Up & Set Goals</span>
            <span className="text-slate-200">Create your account and define your savings or investment targets.</span>
          </li>
          <li className="flex-1 flex flex-col items-center text-center">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-400 to-blue-400 text-blue-900 font-bold text-2xl shadow-lg mb-4">2</span>
            <span className="text-lg font-semibold text-white mb-2">Automate & Invest</span>
            <span className="text-slate-200">Set up automated deposits and pick investment plans that suit you.</span>
          </li>
          <li className="flex-1 flex flex-col items-center text-center">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 to-yellow-400 text-blue-900 font-bold text-2xl shadow-lg mb-4">3</span>
            <span className="text-lg font-semibold text-white mb-2">Grow & Withdraw</span>
            <span className="text-slate-200">Watch your money grow and withdraw securely whenever you need.</span>
          </li>
        </ol>
      </section>

      {/* Testimonials & Reviews */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-3xl mx-2 md:mx-16 shadow-xl mt-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center bg-blue-800/70 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform">
              <Avatar>
                <img src={t.avatar} alt={`Avatar of ${t.name}`} className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400 shadow-md" />
              </Avatar>
              <p className="text-slate-100 mt-6 mb-4 text-center">“{t.text}”</p>
              <span className="font-semibold text-white">{t.name}</span>
              <span className="text-xs text-slate-300">{t.location}</span>
            </div>
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 animate-fade-in-up">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get the z-vest App</h2>
          <p className="text-lg text-slate-200 mb-6 max-w-lg">Save, invest, and manage your money on the go. Download the z-vest app for iOS and Android.</p>
          <div className="flex gap-4">
            <Button asChild variant="outline" className="border-white text-white hover:bg-blue-700 hover:text-white transition-colors font-semibold">
              <a href="#" aria-label="Download on App Store">
                <svg className="w-6 h-6 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.564 13.307c-.019-2.019 1.652-2.99 1.727-3.035-0.942-1.376-2.406-1.566-2.922-1.588-1.244-.126-2.428.728-3.063.728-.635 0-1.613-.71-2.656-.69-1.366.02-2.634.793-3.34 2.017-1.43 2.478-.364 6.145 1.025 8.157.68.98 1.49 2.08 2.553 2.04 1.03-.04 1.417-.66 2.662-.66 1.245 0 1.59.66 2.662.64 1.104-.02 1.797-1 2.474-1.98.78-1.13 1.104-2.23 1.122-2.29-.025-.012-2.16-.83-2.18-3.29zm-2.09-6.07c.56-.68.94-1.63.84-2.58-.81.03-1.78.54-2.36 1.22-.52.6-.98 1.56-.81 2.48.86.07 1.77-.44 2.33-1.12z"/></svg>
                App Store
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-blue-700 hover:text-white transition-colors font-semibold">
              <a href="#" aria-label="Get it on Google Play">
                <svg className="w-6 h-6 mr-2 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.654 2.978c-.23.13-.37.37-.37.63v16.78c0 .26.14.5.37.63.11.06.23.09.35.09.13 0 .25-.03.36-.1l10.13-6.39-10.13-6.39c-.22-.13-.36-.37-.36-.64zm13.13 7.41-2.6-1.64-1.89 1.19 4.49 2.83 1.89-1.19-1.89-1.19zm-2.6 1.64-10.13 6.39 10.13 6.39c.11.07.23.1.36.1.12 0 .24-.03.35-.09.23-.13.37-.37.37-.63v-16.78c0-.26-.14-.5-.37-.63-.11-.06-.23-.09-.35-.09-.13 0-.25.03-.36.1z"/></svg>
                Google Play
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="African youth using z-vest app on phone" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-8 border-blue-700" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto bg-blue-900/60 rounded-xl shadow-lg divide-y divide-blue-800">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-lg font-semibold text-white hover:text-yellow-400 focus:outline-none">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-200 text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Conversion Block */}
      <section className="py-16 md:py-24 px-6 md:px-16 flex flex-col items-center bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-3xl mx-2 md:mx-16 shadow-2xl mt-8 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">Ready to build your future?</h2>
        <p className="text-lg text-blue-900 mb-8 text-center max-w-xl">Join thousands of young Africans saving and investing with confidence. Start your journey with z-vest today.</p>
        <Button asChild size="lg" className="bg-blue-900 text-yellow-400 font-bold shadow-xl hover:scale-105 transition-transform focus:ring-4 focus:ring-yellow-300">
          <Link href="/signup" aria-label="Start Saving Now">
            Start Saving Now
          </Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300 mt-12">
        <div className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-blue-700 to-blue-400 flex items-center justify-center font-bold text-xl text-white shadow-lg">z</span>
          <span className="font-bold text-xl tracking-tight text-white">z-vest</span>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
          <a href="mailto:support@z-vest.com" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>
        <span className="text-xs">© {new Date().getFullYear()} z-vest. All rights reserved.</span>
      </footer>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @media (prefers-color-scheme: dark) {
          body { background: #0f172a; }
        }
      `}</style>
    </main>
  );
}
