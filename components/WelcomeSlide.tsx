import React from 'react';

const WelcomeSlide: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 text-white">
    <h1 className="text-6xl font-black mb-8">Welcome to Masjid TV</h1>
    <p className="text-3xl font-semibold mb-4">Stay tuned for community updates and events.</p>
    <span className="text-xl">Enjoy your visit!</span>
  </div>
);

export default WelcomeSlide;
