"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Card } from "../components/ui/card";
import { Avatar } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { ArrowRight, CheckCircle, Star, Smartphone, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-7 h-7 text-blue-700" aria-hidden="true" />,
    title: "Automated Savings",
    desc: "Set your goals and let z-vest automate your savings journey.",
  },
  {
    icon: <Smartphone className="w-7 h-7 text-blue-700" aria-hidden="true" />,
    title: "Flexible Investments",
    desc: "Choose from a range of investment options tailored to your risk profile.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-700" aria-hidden="true" />,
    title: "Secure & Trusted",
    desc: "Your funds are protected with bank-level security and transparency.",
  },
  {
    icon: <Star className="w-7 h-7 text-blue-700" aria-hidden="true" />,
    title: "Competitive Returns",
    desc: "Earn attractive interest rates and grow your wealth faster.",
  },
];

const testimonials = [
  {
    name: "Adaeze O.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "z-vest made saving so easy! I love how I can invest with just a few taps and watch my money grow.",
    location: "Lagos, Nigeria",
  },
  {
    name: "Kwame B.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The automated savings feature keeps me disciplined. I feel secure knowing my funds are safe.",
    location: "Accra, Ghana",
  },
  {
    name: "Zinhle M.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Finally, a platform that understands young Africans! The returns are great and withdrawals are smooth.",
    location: "Johannesburg, South Africa",
  },
];

const faqs = [
  {
    q: "Is my money safe with z-vest?",
    a: "Absolutely. We use bank-level security and all investments are transparently managed.",
  },
  {
    q: "How do I withdraw my savings?",
    a: "Withdrawals are easy and can be done anytime from your dashboard, with built-in discipline features to help you stay on track.",
  },
  {
    q: "What investment options are available?",
    a: "From low-risk savings to high-growth investments, z-vest offers a range of options for every risk profile.",
  },
  {
    q: "Who can use z-vest?",
    a: "z-vest is designed for young Africans looking to build wealth simply and securely.",
  },
];

const partners = [
  {
    name: "Flutterwave",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flutterwave_Logo.png",
    alt: "Flutterwave logo",
  },
  {
    name: "PiggyVest",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/PiggyVest_Logo.png",
    alt: "PiggyVest logo",
  },
  {
    name: "Chime",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Chime_logo.png",
    alt: "Chime logo",
  },
];

export default function LandingPage() {
  return (
    <main className="bg-gradient-to-b from-blue-900 via-blue-800 to-slate-50 min-h-screen text-slate-900 dark:text-slate-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-16 bg-transparent z-20 relative">
        <Link href="/" className="flex items-center gap-2" aria-label="z-vest home">
          <span className="inline-block bg-gradient-to-r from-blue-700 to-blue-400 rounded-full w-9 h-9 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#1e3a8a" /><path d="M8 15l4-6 4 6" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="font-bold text-xl tracking-tight text-blue-900 dark:text-blue-200">z-vest</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/signin" className="text-blue-800 hover:underline font-medium">Sign In</Link>
          <Button asChild variant="outline" className="border-blue-700 text-blue-800 hover:bg-blue-700 hover:text-white transition-colors">
            <Link href="/signup" aria-label="Sign up for z-vest">
              Sign Up <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-12 md:pt-24 pb-12 md:pb-24 gap-10 md:gap-20">
        <div className="flex-1 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-blue-900 dark:text-blue-100 mb-6">
            Save Smart.<br className="hidden md:block" /> Invest Easy.
          </h1>
          <p className="text-lg md:text-2xl text-blue-800 dark:text-blue-200 mb-8 max-w-xl">
            z-vest empowers young Africans to build wealth effortlessly with automated savings and flexible investment options.
          </p>
          <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all focus:ring-4 focus:ring-blue-300">
            <Link href="/signup" aria-label="Start Saving Today">
              Start Saving Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          {/* Custom SVG Illustration */}
          <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-tr from-blue-700 via-blue-400 to-blue-200 shadow-xl flex items-center justify-center animate-fade-in">
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" aria-hidden="true">
              <circle cx="110" cy="110" r="100" fill="#f1f5f9" />
              <path d="M60 150 Q110 80 160 150" stroke="#1e3a8a" strokeWidth="8" fill="none" />
              <circle cx="110" cy="110" r="30" fill="#1e3a8a" />
              <circle cx="110" cy="110" r="18" fill="#f1f5f9" />
              <circle cx="110" cy="110" r="8" fill="#1e3a8a" />
              <path d="M110 110 L110 60" stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round" />
              <circle cx="110" cy="60" r="7" fill="#38bdf8" />
            </svg>
          </div>
        </div>
      </section>

      {/* Social Proof / Partners */}
      <section className="px-6 md:px-16 py-6 md:py-10 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mb-2 md:mb-0">Trusted by leading fintech partners</span>
          <div className="flex items-center gap-8">
            {partners.map((p) => (
              <img
                key={p.name}
                src={p.logo}
                alt={p.alt}
                className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-16 py-16 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">Why Choose z-vest?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <Card key={i} className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-900 border-0 shadow-md hover:shadow-xl transition-shadow group">
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg text-blue-800 dark:text-blue-200 mb-2 text-center">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-center text-sm">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 md:px-16 py-16 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Badge className="bg-blue-700 text-white mb-4">1</Badge>
              <h4 className="font-semibold text-lg mb-2 text-blue-800 dark:text-blue-200">Sign Up & Set Goals</h4>
              <p className="text-slate-600 dark:text-slate-300 text-center">Create your account and define your savings or investment goals.</p>
            </div>
            <div className="flex flex-col items-center">
              <Badge className="bg-blue-700 text-white mb-4">2</Badge>
              <h4 className="font-semibold text-lg mb-2 text-blue-800 dark:text-blue-200">Automate & Invest</h4>
              <p className="text-slate-600 dark:text-slate-300 text-center">Automate your savings or choose investments that fit your risk profile.</p>
            </div>
            <div className="flex flex-col items-center">
              <Badge className="bg-blue-700 text-white mb-4">3</Badge>
              <h4 className="font-semibold text-lg mb-2 text-blue-800 dark:text-blue-200">Grow & Withdraw</h4>
              <p className="text-slate-600 dark:text-slate-300 text-center">Watch your wealth grow and withdraw easily when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-16 py-16 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-10 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900 border-0 shadow-md hover:shadow-xl transition-shadow">
                <Avatar src={t.avatar} alt={`Avatar of ${t.name}`} className="w-16 h-16 mb-4" />
                <p className="italic text-slate-700 dark:text-slate-300 text-center mb-4">“{t.quote}”</p>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-blue-800 dark:text-blue-200">{t.name}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{t.location}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-16 py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-blue-800 dark:text-blue-200 font-medium text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300 text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* App Download / CTA Section */}
      <section className="px-6 md:px-16 py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 text-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Secure Your Financial Future?</h2>
        <p className="mb-8 text-lg md:text-xl">Join thousands of young Africans growing their wealth with z-vest.</p>
        <Button asChild size="lg" className="bg-white text-blue-800 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-100 transition-all focus:ring-4 focus:ring-blue-300">
          <Link href="/signup" aria-label="Start Saving Today">
            Start Saving Today <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-8 bg-blue-900 text-slate-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block bg-gradient-to-r from-blue-700 to-blue-400 rounded-full w-7 h-7 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#1e3a8a" /><path d="M8 15l4-6 4 6" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="font-bold text-lg tracking-tight">z-vest</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <a href="mailto:support@z-vest.com" className="hover:underline">Contact</a>
          </div>
          <span className="text-xs text-slate-300">© {new Date().getFullYear()} z-vest. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
