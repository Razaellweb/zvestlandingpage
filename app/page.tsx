"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { ArrowRight, CheckCircle, Shield, TrendingUp, Users, Smartphone, Star } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-7 h-7 text-blue-700" aria-hidden="true" />,
    title: "Automated Savings",
    desc: "Set your goals and let z-vest grow your savings automatically.",
  },
  {
    icon: <Shield className="w-7 h-7 text-blue-700" aria-hidden="true" />,
    title: "Secure & Transparent",
    desc: "Your funds are protected with bank-level security and full transparency.",
  },
  {
    icon: <Users className="w-7 h-7 text-blue-700" aria-hidden="true" />,
    title: "Diverse Investments",
    desc: "Choose from a range of investment options for every risk appetite.",
  },
  {
    icon: <Star className="w-7 h-7 text-blue-700" aria-hidden="true" />,
    title: "Competitive Returns",
    desc: "Earn attractive interest rates and watch your money grow.",
  },
];

const testimonials = [
  {
    name: "Chinwe O.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "z-vest made saving for my first car so easy! The app is beautiful and I feel secure.",
    title: "Product Designer, Lagos",
  },
  {
    name: "Tunde A.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I love the investment options. My money is finally working for me.",
    title: "Software Engineer, Abuja",
  },
  {
    name: "Amina S.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The automated savings plans are a game changer. Highly recommend!",
    title: "Entrepreneur, Kano",
  },
];

const faqs = [
  {
    q: "Is my money safe with z-vest?",
    a: "Absolutely. We use bank-level security and your funds are insured and protected.",
  },
  {
    q: "How do I start investing?",
    a: "Sign up, set your goals, and choose from our curated investment options. It's that easy!",
  },
  {
    q: "Are there any fees?",
    a: "No hidden fees. We believe in full transparency. All charges are clearly stated upfront.",
  },
  {
    q: "Can I withdraw anytime?",
    a: "Yes, you can withdraw your savings or investments at any time, subject to plan terms.",
  },
];

const socialProof = [
  {
    stat: "50,000+",
    label: "Active Users",
  },
  {
    stat: "₦2B+",
    label: "Assets Managed",
  },
  {
    stat: "4.9/5",
    label: "App Store Rating",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-slate-50 relative overflow-x-hidden">
      {/* African-inspired geometric accent */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-400 via-pink-500 to-blue-600 opacity-30 rounded-full blur-3xl z-0" />
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-16">
        <Link href="/" aria-label="z-vest Home" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-blue-700 via-blue-400 to-yellow-400 flex items-center justify-center font-bold text-xl text-white shadow-lg">z</span>
          <span className="font-extrabold text-2xl tracking-tight text-white">z-vest</span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/signin" className="text-slate-200 hover:text-white font-medium transition-colors">Sign In</Link>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 transition-colors font-semibold px-6 py-2 rounded-lg">
            <Link href="/signup" aria-label="Sign Up">Sign Up</Link>
          </Button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-12 md:pt-24 pb-16 md:pb-32 gap-10">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            Save Smart. <span className="text-yellow-400">Invest Easy.</span> <br className="hidden md:block" /> Secure Your Future.
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-8 font-medium">
            z-vest empowers young Africans to build wealth effortlessly with automated savings, flexible investments, and goal-based financial planning—all in a secure, easy-to-use platform.
          </p>
          <Button asChild size="lg" className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-300 transition-colors text-lg flex items-center gap-2">
            <Link href="/signup" aria-label="Start Saving Now">
              Start Saving Now <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <div className="mt-8 flex gap-4 items-center">
            <Shield className="w-6 h-6 text-green-400" aria-hidden="true" />
            <span className="text-slate-200 text-base">Safe, transparent, and trusted by thousands</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          {/* App visual mockup */}
          <div className="w-72 h-96 bg-gradient-to-br from-blue-800 via-blue-600 to-yellow-400 rounded-3xl shadow-2xl border-4 border-white/10 flex flex-col items-center justify-center relative overflow-hidden animate-fade-in">
            <Smartphone className="w-24 h-24 text-white/80 mb-4" aria-hidden="true" />
            <span className="text-white text-xl font-bold">Your Wealth, Your Way</span>
            <span className="mt-2 text-slate-200 text-base">All-in-one savings & investments</span>
            {/* Decorative African pattern */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('/african-pattern.svg')] bg-repeat-x opacity-30" aria-hidden="true" />
          </div>
        </div>
      </section>
      {/* Social Proof */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-8 md:py-12">
        {socialProof.map((item, idx) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold text-yellow-400 drop-shadow-lg">{item.stat}</span>
            <span className="text-slate-200 text-base md:text-lg mt-1">{item.label}</span>
          </div>
        ))}
      </section>
      {/* Features & Benefits */}
      <section className="relative z-10 px-6 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 text-center">Why Choose <span className="text-yellow-400">z-vest</span>?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={feature.title} className="bg-blue-800/80 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200 group">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2 text-center">{feature.title}</h3>
              <p className="text-slate-200 text-center text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* How It Works */}
      <section className="relative z-10 px-6 md:px-16 py-12 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-3xl mx-2 md:mx-0 mt-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-7 h-7 text-yellow-400 mt-1" aria-hidden="true" />
              <div>
                <h4 className="text-lg font-semibold text-white">Sign Up & Set Your Goals</h4>
                <p className="text-slate-200">Create an account in minutes and define your savings or investment targets.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-7 h-7 text-yellow-400 mt-1" aria-hidden="true" />
              <div>
                <h4 className="text-lg font-semibold text-white">Automate & Invest</h4>
                <p className="text-slate-200">Set up automated savings or pick from curated investment plans tailored for you.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-7 h-7 text-yellow-400 mt-1" aria-hidden="true" />
              <div>
                <h4 className="text-lg font-semibold text-white">Track & Grow</h4>
                <p className="text-slate-200">Monitor your progress and watch your wealth grow, all in one place.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-64 h-80 bg-gradient-to-br from-yellow-400 via-blue-700 to-blue-900 rounded-2xl shadow-xl flex flex-col items-center justify-center relative overflow-hidden animate-fade-in">
              <Smartphone className="w-16 h-16 text-white/90 mb-4" aria-hidden="true" />
              <span className="text-white text-lg font-bold">Get Started in Minutes</span>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="relative z-10 px-6 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="bg-blue-800/80 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-200">
              <Avatar className="mb-4 w-16 h-16">
                <AvatarImage src={t.image} alt={`Avatar of ${t.name}`} />
                <AvatarFallback>{t.name[0]}</AvatarFallback>
              </Avatar>
              <p className="text-slate-100 text-base text-center mb-4">“{t.text}”</p>
              <span className="text-yellow-400 font-semibold text-sm">{t.name}</span>
              <span className="text-slate-300 text-xs mt-1">{t.title}</span>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="relative z-10 px-6 md:px-16 py-12 md:py-20 bg-blue-900/80 rounded-3xl mx-2 md:mx-0 mt-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqs.map((faq, idx) => (
            <AccordionItem key={faq.q} value={`faq-${idx}`}>
              <AccordionTrigger className="text-lg font-semibold text-yellow-400">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-slate-200 text-base">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      {/* App Download & Contact Section */}
      <section className="relative z-10 px-6 md:px-16 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Download the z-vest App</h2>
          <p className="text-slate-200 mb-6">Start your journey to financial freedom. Available soon on iOS & Android.</p>
          <div className="flex gap-4">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 transition-colors font-semibold px-6 py-2 rounded-lg opacity-60 cursor-not-allowed" disabled>
              Coming Soon to App Store
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 transition-colors font-semibold px-6 py-2 rounded-lg opacity-60 cursor-not-allowed" disabled>
              Coming Soon to Play Store
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <form className="bg-blue-800/80 rounded-2xl p-8 flex flex-col gap-4 max-w-md" aria-label="Contact form">
            <label htmlFor="name" className="text-slate-200 font-medium">Name</label>
            <input id="name" name="name" type="text" required className="rounded-lg px-4 py-2 bg-blue-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your Name" aria-label="Your Name" />
            <label htmlFor="email" className="text-slate-200 font-medium">Email</label>
            <input id="email" name="email" type="email" required className="rounded-lg px-4 py-2 bg-blue-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="you@email.com" aria-label="Your Email" />
            <label htmlFor="message" className="text-slate-200 font-medium">Message</label>
            <textarea id="message" name="message" required rows={3} className="rounded-lg px-4 py-2 bg-blue-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="How can we help you?" aria-label="Your Message" />
            <Button type="submit" className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg mt-2 hover:bg-yellow-300 transition-colors">Send Message</Button>
          </form>
        </div>
      </section>
      {/* CTA Conversion Block */}
      <section className="relative z-10 px-6 md:px-16 py-12 md:py-20 flex flex-col items-center justify-center">
        <div className="bg-gradient-to-tr from-yellow-400 via-blue-700 to-blue-900 rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center w-full max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">Ready to Secure Your Future?</h2>
          <p className="text-slate-200 mb-8 text-center">Join thousands of young Africans building wealth with z-vest.</p>
          <Button asChild size="lg" className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-300 transition-colors text-lg flex items-center gap-2">
            <Link href="/signup" aria-label="Start Saving Now">
              Start Saving Now <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between border-t border-blue-800/60 mt-8">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-blue-700 via-blue-400 to-yellow-400 flex items-center justify-center font-bold text-xl text-white shadow-lg">z</span>
          <span className="font-extrabold text-xl tracking-tight text-white">z-vest</span>
        </div>
        <div className="text-slate-300 text-sm">© {new Date().getFullYear()} z-vest. All rights reserved.</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors text-sm">Privacy Policy</Link>
          <Link href="/terms" className="text-slate-300 hover:text-white transition-colors text-sm">Terms of Service</Link>
        </div>
      </footer>
      {/* SEO Meta Tags */}
      <head>
        <title>z-vest | Save Smart. Invest Easy. Secure Your Future.</title>
        <meta name="description" content="z-vest empowers young Africans to build wealth effortlessly with automated savings, flexible investments, and goal-based financial planning—all in a secure, easy-to-use platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="z-vest | Save Smart. Invest Easy. Secure Your Future." />
        <meta property="og:description" content="z-vest empowers young Africans to build wealth effortlessly with automated savings, flexible investments, and goal-based financial planning—all in a secure, easy-to-use platform." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="z-vest" />
      </head>
    </main>
  );
}
