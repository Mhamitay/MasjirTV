
import { MediaType, SlideItem, NewsItem } from '../types';

// Static fallback prayer times (Calgary example)
export const CALGARY_PRAYER_SCHEDULE = {
  fajr: { adhan: '6:33 AM', iqama: '7:00 AM' },
  sunrise: { adhan: '8:03 AM' },
  dhuhr: { adhan: '12:50 PM', iqama: '1:00 PM' },
  asr: { adhan: '3:11 PM', iqama: '3:30 PM' },
  maghrib: { adhan: '5:38 PM', iqama: '5:48 PM' },
  isha: { adhan: '7:08 PM', iqama: '7:30 PM' },
  date: '2026-02-07'
};

export const GALLERY_IMAGES: SlideItem[] = [
  {
    id: 'sample-image',
    type: MediaType.IMAGE,
    url: 'https://d1dncmkdpaif79.cloudfront.net/public/dev.hamitay@gmail.com/image/donation4.gif',
    duration: 30000,
    title: '',
    description: '.',
    source: '',
     hideNewsBar: false,
     show: true,
     order: 4  // This image will show fourth
  },//,
  // {
  //   id: 'g1',
  //   type: MediaType.IMAGE,
  //   url: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1920&h=1080',
  //   duration: 8000,
  //   title: 'Community Gallery',
  //   description: 'Recent highlights from our library.',
  //   source: 'Cloud Assets'
  // },
 {
   id: 'g4',
   type: MediaType.IMAGE,
   url: 'https://d1dncmkdpaif79.cloudfront.net/public/dev.hamitay@gmail.com/image/Masjid%20parking%20area.png',
   duration: 30000,
   title: '',
   description: '',
   source: 'ministry pass',
   hideNewsBar: false,
   show: true,
   order: 5  // This image will show fifth
 }
  //   id: 'g2',
  //   type: MediaType.IMAGE,
  //   url: 'https://d1dncmkdpaif79.cloudfront.net/public/dev.hamitay@gmail.com/image/Masjid%20parking%20area.png',
  //   duration: 20000,
  //   title: 'Collaborative Spaces',
  //   description: 'Enhancing productivity through design.',
  //   source: 'Local Folder',
  //   hideNewsBar: false
  // },
  // {
  //   id: 'g3',
  //   type: MediaType.IMAGE,
  //   url: 'https://tse4.mm.bing.net/th/id/OIP.0raxKyzINQZvN3b_Z-YksQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
  //   duration: 8000,
  //   title: 'Modern Architecture',
  //   description: 'Our new facility extension.',
  //   source: 'Cloud Assets'fff
  // }
];

export const MOCK_NEWS: NewsItem[] = [
  // PRAYER category (3 items)
  //{ id: 'n1', text: 'Prayer times adjusted for the coming week. Please check the latest schedule.', category: 'PRAYER' },
  //{ id: 'n2', text: 'Jumuah prayer starts at 1:00 PM. Please arrive early to find parking.', category: 'PRAYER' },
  //{ id: 'n3', text: 'Taraweeh prayers during Ramadan will be at 9:00 PM every night.', category: 'PRAYER' },
  
  // CLASSES category (3 items)
  // { id: 'n4', text: 'New educational classes starting this Monday for all ages. Register online.', category: 'CLASSES' },
  // { id: 'n5', text: 'Arabic language course for beginners begins next week. Limited seats available.', category: 'CLASSES' },
  // { id: 'n6', text: 'Weekend Islamic studies program for youth registration now open.', category: 'CLASSES' },
  
  // COMMUNITY category (3 items)
  // { id: 'n7', text: 'Annual community meeting moved to Hall B at 7 PM tonight.', category: 'COMMUNITY' },
  { id: 'n8', text: 'Al Azhar your center, Where we build a stronger community, together', category: 'COMMUNITY' },
  { id: 'n9', text: 'Volunteer opportunities available for community outreach programs.', category: 'COMMUNITY' },
  
  // RAMADAN category (3 items)
  { id: 'n10', text: 'Ramadan 2026 preparations are underway. Volunteer opportunities available.', category: 'RAMADAN' },
  { id: 'n11', text: 'Sponsor an Iftar Day! Earn immense rewards by feeding fasting brothers and sisters. Contact the office.', category: 'RAMADAN' },
  // { id: 'n12', text: 'Ramadan night programs include Quran recitation and spiritual lectures.', category: 'RAMADAN' },
  
  // ZAKAT category (3 items)
  // { id: 'n13', text: 'Zakat collection for local families in need. Donate today to help our community.', category: 'ZAKAT' },
  // { id: 'n14', text: 'Calculate your Zakat online using our new Zakat calculator tool.', category: 'ZAKAT' },
  // { id: 'n15', text: 'Zakat al-Fitr due before Eid prayer. Amount is $12 per person this year.', category: 'ZAKAT' },
  
  // MASJID category (3 items)
  { id: 'n16', text: 'Support Your Masjid: Contribute to the monthly rent by Setting up a recurring donation today.', category: 'MASJID' },
   { id: 'n19', text: 'Please make sure to follow the parking rules and park only in designated areas.', category: 'MASJID' },

  // { id: 'n17', text: 'Sponsor an Iftar Day! Earn immense rewards by feeding fasting brothers and sisters.', category: 'MASJID' },
  // { id: 'n18', text: 'Masjid expansion project launched. Help us build a bigger prayer hall for our growing community.', category: 'MASJID' },
  
  // DEFAULT category (3 items)
  // { id: 'n20', text: 'Weekly maintenance scheduled for Sunday at 12:00 AM. Systems may be offline.', category: 'DEFAULT' },
  // { id: 'n21', text: 'Lost and found items available at the front desk. Please check for your belongings.', category: 'DEFAULT' },
];

// Ramadan Iftar Bookings .. In a real app, this would come from an API/database
export const RAMADAN_IFTAR_BOOKINGS = [
  { day: 27, sponsors: ['Ahmed'] },
];
