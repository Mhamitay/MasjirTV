import React from 'react';

const AnnouncementSlide: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-yellow-900 via-orange-900 to-yellow-900 text-white">
    <h1 className="text-5xl font-black mb-8">Community Announcement</h1>
    <p className="text-2xl font-semibold mb-4">Friday prayer will start at 1:30 PM this week.</p>
    <span className="text-lg">Please arrive early and follow parking instructions.</span>
  </div>
);

export default AnnouncementSlide;
