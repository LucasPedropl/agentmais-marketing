import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ComparisonTable from './components/ComparisonTable';
import Journey from './components/Journey';
import FeedbackSection from './components/FeedbackSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ComparisonTable />
        <Journey />
        <FeedbackSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;