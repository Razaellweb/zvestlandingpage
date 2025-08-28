"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight, Smartphone, ShieldCheck, TrendingUp, Users, CheckCircle, Download } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <TrendingUp className="w-7 h-7 text-blue-700" aria-hidden="true" />, 
    title: "Automated Savings",
    desc: "Discipline your growth with effortless, recurring savings tailored to your goals."
  },
  {
    icon: <Smartphone className="w-7 h-7 text-blue-700" aria-hidden="true" />, 
    title: "Flexible Investments",
    desc: "Choose from a range of investment options with competitive returns, all in one app."
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-blue-700" aria-hidden="true" />, 
    title: "Goal-Based Saving",
    desc: "Set, track, and achieve your dreams with personalized saving plans."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-700" aria-hidden="true" />, 
    title: "Secure & Transparent",
    desc: "Your money is safe. Trusted by thousands across Africa for reliability and clarity."
  },
];

const testimonials = [
  {
    name: "Amina O.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "z-vest made saving for my business so easy. I love the flexibility and the peace of mind!"
  },
  {
    name: "Kwame B.",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "I reached my travel goals faster than I thought possible. The app is super intuitive."
  },
  {
    name: "Chidinma E.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Investing always felt risky, but z-vest makes it simple and trustworthy. Highly recommend!"
  },
];

const faqs = [
  {
    q: "Is my money safe with z-vest?",
    a: "Absolutely. We use bank-level security and your funds are insured and protected."
  },
  {
    q: "Can I withdraw anytime?",
    a: "Yes, you have full control. Withdraw or invest your savings whenever you want."
  },
  {
    q: "Are there any hidden fees?",
    a: "No hidden fees. All charges are transparent and shown upfront."
  },
  {
    q: "How do I get started?",
    a: "Just sign up, set your goals, and start saving or investing in minutes!"
  },
];

export default function LandingPage() {
  return (
    <main className="bg-gradient-to-b from-[#f1f5f9] via-white to-[#e0e7ef] min-h-screen text-[#0f172a] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#1e293b]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-16 lg:px-32 bg-transparent">
        <div className="flex items-center gap-2">
          <span className="inline-block rounded-full bg-blue-700 w-8 h-8 mr-2" aria-hidden="true"></span>
          <span className="font-bold text-xl tracking-tight text-blue-900">z-vest</span>
        </div>
        <div className="flex gap-3">
          <Button variant="ghost" asChild>
            <a href="/signin" aria-label="Sign In">Sign In</a>
          </Button>
          <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors" asChild>
            <a href="/signup" aria-label="Sign Up">Sign Up</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-12 md:py-20 gap-10 md:gap-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-900 dark:text-white mb-2">
            Save Smart.<br />Invest Confidently.
          </h1>
          <p className="text-lg md:text-xl text-blue-800 dark:text-blue-200 max-w-xl">
            z-vest empowers young Africans to build wealth effortlessly through automated savings and investment options tailored for emerging markets.
          </p>
          <Button
            size="lg"
            className="mt-4 w-fit px-8 py-4 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 transition-colors flex items-center gap-2 text-lg"
            asChild
          >
            <a href="/signup" aria-label="Start Saving Today">
              Start Saving Today <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <div className="flex items-center gap-4 mt-6">
            <Users className="w-6 h-6 text-blue-700" aria-hidden="true" />
            <span className="text-blue-900 dark:text-blue-100 font-medium">Trusted by 50,000+ young Africans</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-[320px] h-[420px] md:w-[360px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-blue-700 via-blue-400 to-blue-200 flex items-end">
            <Image
              src="/app-mockup.png"
              alt="z-vest mobile app mockup"
              fill
              className="object-cover object-bottom"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent h-32" aria-hidden="true"></div>
          </div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="flex flex-col items-center gap-2 py-6 md:py-8">
        <span className="uppercase text-xs tracking-widest text-blue-700 font-semibold">As featured in</span>
        <div className="flex flex-wrap justify-center gap-6 mt-2 opacity-80">
          <Image src="/logos/techcabal.svg" alt="TechCabal" width={90} height={28} className="h-7 w-auto" />
          <Image src="/logos/guardian.svg" alt="The Guardian" width={90} height={28} className="h-7 w-auto" />
          <Image src="/logos/venturesafrica.svg" alt="Ventures Africa" width={90} height={28} className="h-7 w-auto" />
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="px-6 md:px-16 lg:px-32 py-12 md:py-20 bg-white dark:bg-[#1e293b] rounded-3xl mx-2 md:mx-8 shadow-lg mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-8 text-center">Why Choose z-vest?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/30 dark:to-blue-900/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <span>{f.icon}</span>
              <h3 className="font-semibold text-lg text-blue-900 dark:text-white">{f.title}</h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-16 lg:px-32 py-14 md:py-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-2">How It Works</h2>
          <ol className="list-decimal list-inside text-blue-800 dark:text-blue-200 space-y-3">
            <li>Sign up and set your savings or investment goals.</li>
            <li>Automate deposits or invest manually—your choice.</li>
            <li>Track your progress and watch your wealth grow.</li>
            <li>Withdraw or reinvest anytime, with full transparency.</li>
          </ol>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-[320px] h-[420px] md:w-[360px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-blue-700 via-blue-400 to-blue-200 flex items-end"
          >
            <Image
              src="/app-dashboard.png"
              alt="z-vest dashboard screenshot"
              fill
              className="object-cover object-bottom"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent h-32" aria-hidden="true"></div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-16 lg:px-32 py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/30 dark:to-blue-900/10 rounded-3xl mx-2 md:mx-8 shadow-lg mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-8 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white dark:bg-blue-900/40 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={t.avatar}
                alt={`Avatar of ${t.name}`}
                width={64}
                height={64}
                className="rounded-full border-2 border-blue-700 shadow"
              />
              <p className="text-blue-800 dark:text-blue-200 text-base italic">“{t.text}”</p>
              <span className="font-semibold text-blue-900 dark:text-white">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section className="px-6 md:px-16 lg:px-32 py-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-2">Get the z-vest App</h2>
          <p className="text-blue-800 dark:text-blue-200 max-w-md mb-4">Download our mobile app and manage your savings and investments on the go. Available for iOS and Android.</p>
          <div className="flex gap-4 mt-2">
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white flex items-center gap-2" asChild>
              <a href="#" aria-label="Download on App Store">
                <Download className="w-5 h-5" /> App Store
              </a>
            </Button>
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white flex items-center gap-2" asChild>
              <a href="#" aria-label="Download on Google Play">
                <Download className="w-5 h-5" /> Google Play
              </a>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/app-mockup.png"
            alt="z-vest app preview"
            width={280}
            height={420}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-16 lg:px-32 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="bg-white dark:bg-blue-900/40 rounded-xl shadow p-6">
              <h3 className="font-semibold text-blue-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-blue-800 dark:text-blue-200">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Conversion Block */}
      <section className="flex flex-col items-center justify-center py-12 md:py-20 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 rounded-3xl mx-2 md:mx-8 shadow-lg mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Ready to build your future?</h2>
        <p className="text-blue-100 mb-6 text-center max-w-xl">Join thousands of young Africans taking control of their finances with z-vest. Start your journey to financial freedom today.</p>
        <Button
          size="lg"
          className="w-fit px-8 py-4 bg-white text-blue-700 rounded-full shadow-lg hover:bg-blue-100 hover:text-blue-900 transition-colors flex items-center gap-2 text-lg"
          asChild
        >
          <a href="/signup" aria-label="Start Saving Today">
            Start Saving Today <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-8 mt-8 border-t border-blue-100 dark:border-blue-900/40 text-blue-800 dark:text-blue-200 bg-transparent">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="inline-block rounded-full bg-blue-700 w-7 h-7 mr-2" aria-hidden="true"></span>
          <span className="font-bold text-lg tracking-tight text-blue-900 dark:text-white">z-vest</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline" aria-label="Privacy Policy">Privacy Policy</a>
          <a href="#" className="hover:underline" aria-label="Terms of Service">Terms of Service</a>
          <a href="#" className="hover:underline" aria-label="Contact">Contact</a>
        </div>
        <span className="text-xs text-blue-400 mt-4 md:mt-0">&copy; {new Date().getFullYear()} z-vest. All rights reserved.</span>
      </footer>
    </main>
  );
}
