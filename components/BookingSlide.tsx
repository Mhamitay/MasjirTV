import React from 'react';

const BookingSlide: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 text-white">
    <h1 className="text-5xl font-black mb-8">Iftar Booking</h1>
    <p className="text-2xl font-semibold mb-4">Reserve your spot for community iftar.</p>
    <span className="text-lg">Visit the admin page or scan the QR code below.</span>
    <div className="mt-8">
      <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://masjidtv.example.com/booking&size=150x150" alt="Booking QR" className="rounded-xl shadow-lg" />
    </div>
  </div>
);

export default BookingSlide;
