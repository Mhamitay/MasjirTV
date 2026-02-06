
export enum MediaType {
  IMAGE = 'image',
  PRAYER_TABLE = 'prayer_table',
  VIDEO = 'video',
  CUSTOM_PAGE = 'custom_page',
}

export interface PrayerSchedule {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  date?: string;
}

export interface SlideItem {
  id: string;
  type: MediaType;
  url?: string; // Optional for custom pages/videos
  duration: number; // Duration in milliseconds
  title?: string;
  description?: string;
  source: string; // Origin identifier for verification
  data?: any; // For custom component data
  component?: React.ComponentType<any>; // For custom React pages
}

export interface NewsItem {
  id: string;
  text: string;
  category: string;
}
