'use client'

import React, { useState } from 'react'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 via-white to-indigo-50 text-gray-900 selection:bg-indigo-300 selection:text-white">
  <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-extrabold text-indigo-600 select-none">SilentLink</h1>
      <div className="hidden md:flex space-x-8 text-indigo-600 font-semibold">
        <a href="#how-it-works" className="hover:text-indigo-800 transition">How It Works</a>
        <a href="#perfect-for" className="hover:text-indigo-800 transition">Perfect For</a>
        <a href="#why-safe" className="hover:text-indigo-800 transition">Why It’s Safe</a>
        <a href="#testimonials" className="hover:text-indigo-800 transition">Testimonials</a>
      </div>
      <a href="#final-cta" className="hidden md:inline-block bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 text-white font-semibold rounded-lg px-5 py-2 transition shadow-md shadow-indigo-300">Create Free QR Code</a>
      <button aria-label="Open menu" className="md:hidden text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
      </button>
    </nav>
    <div id="mobile-menu" className="hidden md:hidden bg-white shadow-inner">
      <nav className="flex flex-col px-6 pb-4 space-y-3 text-indigo-700 font-semibold">
        <a href="#how-it-works" className="hover:text-indigo-900 transition" onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}>How It Works</a>
        <a href="#perfect-for" className="hover:text-indigo-900 transition" onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}>Perfect For</a>
        <a href="#why-safe" className="hover:text-indigo-900 transition" onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}>Why It’s Safe</a>
        <a href="#testimonials" className="hover:text-indigo-900 transition" onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}>Testimonials</a>
        <a href="#final-cta" className="mt-2 inline-block bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 text-white font-semibold rounded-lg px-5 py-2 transition shadow-md shadow-indigo-300 text-center" onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}>Create Free QR Code</a>
      </nav>
    </div>
  </header>

  <main className="flex-grow">
    <section id="hero" className="container mx-auto px-6 pt-20 pb-16 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
      <div className="max-w-xl text-center md:text-left space-y-6 animate-fadeIn">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-indigo-700">Let Them Connect — Without Giving Your Password.</h2>
        <p className="text-indigo-600 text-lg sm:text-xl max-w-md mx-auto md:mx-0">Share your Wi-Fi securely with a smart QR code. No typing, no hassle.</p>
        <form className="mt-6 flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto md:mx-0" onSubmit={e => e.preventDefault()}>
          <label htmlFor="email" className="sr-only">Email for early access</label>
          <input type="email" id="email" name="email" placeholder="Enter your email for early beta" required className="flex-grow rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 px-4 py-3 text-indigo-900 placeholder-indigo-400 transition" />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 text-white font-semibold rounded-lg px-6 py-3 transition shadow-md shadow-indigo-400 w-full sm:w-auto">Generate My QR Code</button>
        </form>
      </div>
      <div className="flex justify-center md:justify-end animate-fadeInUp">
        <div className="relative w-64 sm:w-80 md:w-96 rounded-xl shadow-2xl shadow-indigo-200 overflow-hidden bg-white ring-1 ring-indigo-100">
          <img
            src="https://images.unsplash.com/photo-1523475496153-3a5a9c0b9b07?auto=format&fit=crop&w=800&q=80"
            alt="Phone displaying Wi-Fi QR code next to router"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-3 left-3 bg-indigo-600 bg-opacity-90 text-white px-3 py-1 text-sm font-medium rounded-md select-none shadow">
            Scan to connect instantly
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" className="bg-indigo-50 py-16">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h3 className="text-3xl font-extrabold text-indigo-700 mb-12 animate-fadeInUp">How It Works</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-12">
          <article className="flex flex-col items-center text-indigo-800 max-w-xs animate-fadeIn delay-100">
            <div className="p-5 bg-white rounded-full shadow-lg ring-1 ring-indigo-200 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h4l3 8 4-16 3 8h4" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Input your Wi-Fi name + password</h4>
            <p className="text-indigo-700 text-sm">Quickly enter your network credentials safely on your device.</p>
          </article>
          <article className="flex flex-col items-center text-indigo-800 max-w-xs animate-fadeIn delay-200">
            <div className="p-5 bg-white rounded-full shadow-lg ring-1 ring-indigo-200 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a4 4 0 014-4h4a4 4 0 014 4v6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17h18" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">We create a secure QR code or link</h4>
            <p className="text-indigo-700 text-sm">Your info is encrypted and transformed instantly into a smart QR code.</p>
          </article>
          <article className="flex flex-col items-center text-indigo-800 max-w-xs animate-fadeIn delay-300">
            <div className="p-5 bg-white rounded-full shadow-lg ring-1 ring-indigo-200 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 12a10 10 0 1116 8.5" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Print, display, or send it — done!</h4>
            <p className="text-indigo-700 text-sm">Share your QR code physically or digitally for instant connections.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="perfect-for" className="py-16 container mx-auto px-6 max-w-4xl text-center">
      <h3 className="text-3xl font-extrabold text-indigo-700 mb-12 animate-fadeInUp">Perfect For</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-indigo-600 font-semibold animate-fadeIn delay-150">
        <li className="flex flex-col items-center space-y-2">
          <span className="text-4xl" aria-hidden="true">🏠</span>
          <span>Home guests &amp; family</span>
        </li>
        <li className="flex flex-col items-center space-y-2">
          <span className="text-4xl" aria-hidden="true">🏢</span>
          <span>Offices &amp; co-working spaces</span>
        </li>
        <li className="flex flex-col items-center space-y-2">
          <span className="text-4xl" aria-hidden="true">🏨</span>
          <span>Hotels &amp; Airbnb hosts</span>
        </li>
        <li className="flex flex-col items-center space-y-2">
          <span className="text-4xl" aria-hidden="true">☕</span>
          <span>Cafes &amp; restaurants</span>
        </li>
      </ul>
    </section>

    <section id="why-safe" className="bg-indigo-50 py-16">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h3 className="text-3xl font-extrabold text-indigo-700 mb-12 animate-fadeInUp">Why It’s Safe</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-indigo-800 animate-fadeIn delay-100">
          <div className="bg-white rounded-xl p-6 shadow-lg ring-1 ring-indigo-200 hover:shadow-indigo-400 transition cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 mx-auto mb-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2V7a2 2 0 10-4 0v2c0 1.104.896 2 2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 11c0 4 7 7 7 7s7-3 7-7v-2a7 7 0 10-14 0v2z" />
            </svg>
            <h4 className="font-semibold text-lg mb-1">Wi-Fi details are locally encrypted</h4>
            <p className="text-sm text-indigo-700">Your data never leaves your device in plain text.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg ring-1 ring-indigo-200 hover:shadow-indigo-400 transition cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 mx-auto mb-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m0 14v1m8-9h1M4 12H3m15.364-6.364l.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
              <circle cx="12" cy="12" r="3" stroke="none" />
            </svg>
            <h4 className="font-semibold text-lg mb-1">Password is never stored or shown</h4>
            <p className="text-sm text-indigo-700">Your network password stays private and secure.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg ring-1 ring-indigo-200 hover:shadow-indigo-400 transition cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 mx-auto mb-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M9 10l-4.553-2.276A2 2 0 002 9.618v4.764a2 2 0 002.447 1.894L9 14m0 0v6m6-6v6" />
            </svg>
            <h4 className="font-semibold text-lg mb-1">Works offline (download as image)</h4>
            <p className="text-sm text-indigo-700">Generate and save QR codes without internet connection.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" className="py-16 container mx-auto px-6 max-w-3xl text-center">
      <h3 className="text-3xl font-extrabold text-indigo-700 mb-10 animate-fadeInUp">What Early Users Say</h3>
      <figure className="bg-white rounded-xl p-8 shadow-lg ring-1 ring-indigo-200 max-w-xl mx-auto animate-fadeIn delay-150">
        <blockquote className="text-lg text-indigo-800 italic mb-6">“Took 10 seconds and my guests were online. Genius.”</blockquote>
        <figcaption className="text-indigo-600 font-semibold">— Liam, Airbnb Host</figcaption>
      </figure>
    </section>

    <section id="final-cta" className="sticky bottom-0 bg-indigo-600 bg-opacity-95 backdrop-blur-md py-6 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 z-40 shadow-lg animate-fadeInUp">
      <div className="text-white font-extrabold text-xl sm:text-2xl select-none">Your Wi-Fi, shared smarter.</div>
      <a href="#hero" className="bg-white text-indigo-700 font-semibold rounded-lg px-6 py-3 shadow-lg hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 transition whitespace-nowrap">Create Free QR Code</a>
    </section>
  </main>

  <footer className="bg-white border-t border-indigo-100 mt-12">
    <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-indigo-600 text-sm space-y-4 sm:space-y-0">
      <nav className="flex space-x-6 font-medium select-none" aria-label="Footer navigation">
        <a href="#" className="hover:text-indigo-900 transition">About</a>
        <a href="#" className="hover:text-indigo-900 transition">Privacy</a>
        <a href="#" className="hover:text-indigo-900 transition">Support</a>
      </nav>
      <div className="flex space-x-6">
        <a href="#" className="group flex items-center space-x-2 hover:text-indigo-800 transition" aria-label="Download Android app (Coming Soon)">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-500 group-hover:text-indigo-700 transition" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.523 8.76l-1.868-3.232a.75.75
  )
}