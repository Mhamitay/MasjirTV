
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SlideItem, MediaType } from '../types';
import PrayerTimesSlide from './PrayerTimesSlide';
import ImageSlide from './ImageSlide';

interface SlideCarouselProps {
  items: SlideItem[];
  onSlideChange?: (index: number) => void;
}


const SlideCarousel: React.FC<SlideCarouselProps> = ({ items, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mediaError, setMediaError] = useState<{message: string, code?: number} | null>(null);
  const [pauseUntil, setPauseUntil] = useState<number | null>(null);
  const [showSilence, setShowSilence] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentItem = items[currentIndex];

  // Helper: parse time string (e.g., '6:30') to minutes since midnight
  const parseTime = (t: string) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };

  // Helper: get current time in minutes since midnight
  const getNowMinutes = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  };

  // Check if now matches any prayer time (within 0-2 min window)
  const isPrayerTime = (prayerData: any) => {
    if (!prayerData) return false;
    const now = getNowMinutes();
    const times = [prayerData.fajr, prayerData.dhuhr, prayerData.asr, prayerData.maghrib, prayerData.isha];
    return times.some(t => {
      if (!t) return false;
      const pt = parseTime(t);
      return now >= pt && now < pt + 2; // 2 min window for trigger
    });
  };

  // Pause logic: if prayer time, pause for 20 min and show silence message
  useEffect(() => {
    if (currentItem.type === MediaType.PRAYER_TABLE && isPrayerTime(currentItem.data)) {
      if (!pauseUntil || Date.now() > pauseUntil) {
        setPauseUntil(Date.now() + 20 * 60 * 1000); // 20 min from now
        setShowSilence(true);
      }
    } else if (pauseUntil && Date.now() > pauseUntil) {
      setPauseUntil(null);
      setShowSilence(false);
    }
  }, [currentItem, pauseUntil]);

  // Timer for slide transitions
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    // If paused, do not advance
    if (pauseUntil && Date.now() < pauseUntil) return;

    timerRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % items.length;
        setCurrentIndex(nextIndex);
        setIsTransitioning(false);
        setMediaError(null);
        if (onSlideChange) onSlideChange(nextIndex);
      }, 800);
    }, currentItem.duration || 10000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, currentItem, pauseUntil]);

  const handleMediaError = () => {
    let errorMessage = "Content Load Error";
    console.error(`Media Error on ${currentItem.url}`);
    setMediaError({ message: errorMessage });
    timerRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % items.length;
        setCurrentIndex(nextIndex);
        setIsTransitioning(false);
        setMediaError(null);
        if (onSlideChange) onSlideChange(nextIndex);
      }, 800);
    }, 5000);
  };

  return (
    <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
      <div className={`w-full h-full transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        
        {mediaError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 p-10">
            <h2 className="text-zinc-600 text-3xl font-bold uppercase tracking-widest mb-4">Content Load Error</h2>
          </div>
        ) : currentItem.type === MediaType.PRAYER_TABLE ? (
          <PrayerTimesSlide data={currentItem.data} showSilenceMessage={showSilence} />
        ) : currentItem.type === MediaType.IMAGE ? (
          <ImageSlide
            url={currentItem.url || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'}
            title={currentItem.title}
            description={currentItem.description}
            showTitle={true}
            showDescription={true}
          />
        ) : currentItem.type === MediaType.CUSTOM_PAGE && currentItem.component ? (
          <currentItem.component />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-950 p-10">
            <h2 className="text-zinc-600 text-3xl font-bold uppercase tracking-widest mb-4">Unsupported Slide Type</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideCarousel;
