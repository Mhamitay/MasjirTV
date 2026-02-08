# MasjirTV - Digital Signage System

A React-based digital signage system for masjid displays, featuring prayer times, news ticker, Ramadan Iftar calendar, and multimedia slides.

## 📁 Project Structure

```
MasjirTV/
├── components/          # React components
├── services/           # Data and API services
├── Media/             # Media assets
├── Admin/             # Admin dashboard (future)
├── App.tsx            # Main application
├── index.html         # HTML template
└── README.md          # This file
```

---

## 🔧 How to Modify Content

### 📰 **Change News Content**

**Location:** `services/mockData.ts`

Find the `MOCK_NEWS` array and edit the news items:

```typescript
export const MOCK_NEWS: NewsItem[] = [
  { 
    id: 'n1', 
    text: 'Your news message here', 
    category: 'PRAYER' // Options: PRAYER, CLASSES, COMMUNITY, RAMADAN, ZAKAT, MASJID, DEFAULT
  },
  // Add more news items...
];
```

**Categories Available:**
- `PRAYER` - Prayer-related announcements (Green)
- `CLASSES` - Educational programs (Blue)
- `COMMUNITY` - Community events (Violet)
- `RAMADAN` - Ramadan activities (Amber)
- `ZAKAT` - Charity/Zakat info (Rose)
- `MASJID` - Masjid operations/donations (Teal)
- `DEFAULT` - General notices (Gray)

---

### 🕌 **Change Prayer Times**

**Location:** `services/mockData.ts`

Update the `CALGARY_PRAYER_SCHEDULE` object:

```typescript
export const CALGARY_PRAYER_SCHEDULE = {
  fajr: { adhan: '6:33 AM', iqama: '7:00 AM' },
  sunrise: { adhan: '8:03 AM' },
  dhuhr: { adhan: '12:50 PM', iqama: '1:00 PM' },
  asr: { adhan: '3:11 PM', iqama: '3:30 PM' },
  maghrib: { adhan: '5:38 PM', iqama: '5:48 PM' },
  isha: { adhan: '7:08 PM', iqama: '7:30 PM' },
  date: '2026-02-07'
};
```

**Note:** Use 12-hour format with AM/PM. Sunrise typically doesn't have iqama time.

---

### 🖼️ **Change Images/Gallery**

**Location:** `services/mockData.ts`

Edit the `GALLERY_IMAGES` array:

```typescript
export const GALLERY_IMAGES: SlideItem[] = [
  {
    id: 'sample-image',
    type: MediaType.IMAGE,
    url: 'https://your-image-url.com/image.jpg',
    duration: 8000,  // Display time in milliseconds (8000 = 8 seconds)
    title: 'Image Title',
    description: 'Image description',
    source: 'Source Name',
    hideNewsBar: false  // Set to true to hide news bar for this slide
  },
  // Add more images...
];
```

---

### 📅 **Change Ramadan Iftar Bookings**

**Location:** `services/mockData.ts`

Update the `RAMADAN_IFTAR_BOOKINGS` array:

```typescript
export const RAMADAN_IFTAR_BOOKINGS = [
  { day: 1, sponsors: ['Ahmed Family', 'Fatima Khan'] },
  { day: 15, sponsors: ['Community Group'] },
  { day: 27, sponsors: ['Ahmed'] },
  // Add more bookings for days 1-30
];
```

**Note:** Only include booked days. Unbooked days will automatically show as available.

---

### 🎥 **Change Video Content**

**Location:** `App.tsx`

Find the video slide configuration (around line 42):

```typescript
items.push({
  id: 'video-slide',
  type: MediaType.CUSTOM_PAGE,
  duration: 3000,  // Duration in milliseconds (30000 = 30 seconds)
  source: 'YouTube',
  component: () => <VideoSlide videoUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" />,
  hideNewsBar: false
});
```

**Supported:** YouTube URLs only. Extract the video ID from the YouTube URL.

---

### ⏱️ **Adjust Slide Durations**

**Location:** `App.tsx`

Each slide has a `duration` property (in milliseconds):

```typescript
items.push({
  id: 'prayer-slide',
  type: MediaType.PRAYER_TABLE,
  duration: 15000,  // 15 seconds
  // ...
});
```

**Common durations:**
- `5000` = 5 seconds
- `10000` = 10 seconds
- `15000` = 15 seconds
- `30000` = 30 seconds

---

### 📰 **Adjust News Ticker Speed**

**Location:** `components/NewsTicker.tsx`

The scroll speed is automatically calculated based on content length. To adjust:

```typescript
const scrollDuration = useMemo(() => {
  const totalChars = activeItems.reduce((sum, item) => sum + item.text.length, 0);
  const duration = (totalChars * 0.8) + (activeItems.length * 10);
  return Math.max(60, Math.min(120, duration)); // Min: 60s, Max: 120s
}, [activeItems]);
```

**To make slower:** Increase `0.8` to `1.0` or higher  
**To make faster:** Decrease `0.8` to `0.5` or lower

---

### 🔕 **Adjust Silence Duration (Prayer Time Notification)**

**Location:** `App.tsx`

Find the SlideCarousel component (around line 137):

```typescript
<SlideCarousel
  items={allMediaItems}
  onSlideChange={setCurrentSlideIndex}
  onSilenceChange={setIsSilenceMode}
  silenceDuration={15}  // Duration in minutes (default: 15)
/>
```

**Note:** The silence page appears at adhan/iqama time (2-minute window) and stays for the configured duration.

---

### 🎨 **Modify Component Styling**

**Locations:**

- **Prayer Times Slide:** `components/PrayerTimesSlide.tsx`
- **News Ticker:** `components/NewsTicker.tsx`
- **Ramadan Calendar:** `components/RamadanIftarSlide.tsx`
- **Welcome Slide:** `components/WelcomeSlide.tsx`
- **Video Slide:** `components/VideoSlide.tsx`
- **Silence Phone Slide:** `components/SilencePhoneSlide.tsx`

All components use **Tailwind CSS** classes for styling.

---

### 🎨 **Change Color Themes**

**Prayer Times Colors:**  
Location: `components/PrayerTimesSlide.tsx`

```typescript
// Background colors
bg-[#c8dbd4]  // Mint background
bg-[#2d5f4f]  // Dark teal
bg-[#4a8577]  // Light teal
text-[#c99456] // Gold/bronze
```

**News Ticker Category Colors:**  
Location: `components/NewsTicker.tsx`

```typescript
const CATEGORY_CONFIG: Record<string, { label: string; color: string; bg: string; border: string }> = {
  'PRAYER': { 
    label: 'PRAYER TIMES', 
    color: 'text-emerald-400',   // Text color
    bg: 'bg-emerald-900',         // Background color
    border: 'border-emerald-500/30' 
  },
  // Edit other categories...
};
```

---

## 🚀 Running the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📋 Quick Reference

| What to Change | File Location |
|---------------|---------------|
| News content | `services/mockData.ts` → `MOCK_NEWS` |
| Prayer times | `services/mockData.ts` → `CALGARY_PRAYER_SCHEDULE` |
| Images | `services/mockData.ts` → `GALLERY_IMAGES` |
| Ramadan bookings | `services/mockData.ts` → `RAMADAN_IFTAR_BOOKINGS` |
| Video URL | `App.tsx` → video-slide configuration |
| Slide durations | `App.tsx` → each slide's `duration` property |
| News ticker speed | `components/NewsTicker.tsx` → `scrollDuration` calculation |
| Silence duration | `App.tsx` → `silenceDuration` prop |
| Component styles | `components/*.tsx` → Tailwind classes |

---

## 🔔 Automatic Features

### Prayer Time Notifications
- Automatically detects when it's adhan or iqama time
- Pauses carousel and shows "Silence Your Phone" page
- Plays notification sound
- Returns to normal display after configured duration

### News Ticker
- Automatically cycles through all news categories
- Adjusts scroll speed based on content length
- Hides during silence phone notifications

### Countdown Timer
- Shows time until next adhan or iqama
- Automatically switches to next day's Fajr after Isha

---

## 📞 Support

For questions or issues, contact the development team.

---

**Version:** 1.0  
**Last Updated:** February 7, 2026

---

## Deploy to Netlify

**Netlify Build Settings:**

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Configuration file:** `netlify.toml`

**Steps:**
1. Push your code to GitHub (or your preferred Git provider).
2. Go to [Netlify](https://app.netlify.com/) and create a new site from your repo.
3. Netlify will auto-detect Vite and use the correct build settings.
4. If needed, set environment variables (e.g., `GEMINI_API_KEY`) in Netlify's dashboard.
5. Deploy!
