import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Philosophy } from './components/sections/Philosophy';
import { FeaturedProducts } from './components/sections/FeaturedProducts';
import { WhyUs } from './components/sections/WhyUs';
import { Testimonials } from './components/sections/Testimonials';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-black text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <FeaturedProducts />
        <WhyUs />
        <Testimonials />
        <section className="py-32 bg-brand-red text-white text-center">
            <div className="container mx-auto px-6">
                <h2 className="font-display font-black text-4xl md:text-7xl mb-8 uppercase leading-none">
                    Your future self<br/>is watching.
                </h2>
                <button className="bg-white text-brand-red px-10 py-4 font-bold text-lg uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
                    Join the movement
                </button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;