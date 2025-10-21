// data.js
// NOTE: Replace link values with your OWN legal links.
// Do NOT paste pirated links here.
import { Movie, Category, VideoSong } from '../types';

export const categories: Category[] = [
  { id: '1', name: '4K Movies', slug: '4k' },
  { id: '2', name: '1080p Movies', slug: '1080p' },
  { id: '3', name: 'Anime', slug: 'anime' },
  { id: '4', name: 'Web Series', slug: 'web-series' },
  { id: '5', name: 'Songs', slug: 'songs' },
  { id: '6', name: 'Adults', slug: 'adults' },
  { id: '7', name: 'Kids', slug: 'kids' },
  { id: '8', name: 'Dovi - HDR', slug: '4k HDR' },
  { id: '8', name: '60 FPS', slug: '60 fps' },
  { id: '9', name: 'Series', slug: 'series' },
];

export const movies: Movie[] = [
{
  id: '749',
  title: 'J.S.K - Janaki v.v-S State of Kerala',
  year: 2025,
  poster: 'https://akamaividz2.zee5.com/image/upload/resources/0-0-1z5800733/portrait/720x1080withlogo293b3df2421647c1a44228c41c369428ad74e1b28a14498ab5e54a1a9b9e85e4',
  quality: ['2160p', '1080p', '720p'],
  size: '2.89GB',
  language: ['Hindi', 'Malayalam', 'Tamil', 'Kannada'],
  category: ['2160p', '1080p', '720p', 'WEB-DL', 'H.264', 'H.265', '4k'],
  description: "J.S.K - Janaki v.v-S State of Kerala (2025) ZEE5 WEB-DL releases available in 2160p, 1080p, and 720p qualities. Encoded in both H.264 and H.265 codecs. Audio includes Hindi, Malayalam, Tamil, and Kannada in Dolby Digital Plus 5.1 and Atmos.",
  rating: 7.6,
  releaseDate: '2025-08-14',
  downloadLinks: [
    { provider: 'HUBCLOUD', url: 'https://hubcloud.one/drive/xecs2s1zxsxelvs', quality: '720p ZEE5 WEB-DL H.265', size: '1.6GB' },
    { provider: 'HUBCLOUD', url: 'https://hubcloud.one/drive/gikcdi6x1l1qlrs', quality: '1080p ZEE5 WEB-DL H.265', size: '1.98GB' },
    { provider: 'HUBCLOUD', url: 'https://hubcloud.one/drive/bwd6f63daq3mlkb', quality: '2160p ZEE5 WEB-DL Multi H.265', size: '2.89GB' },
    { provider: 'HUBCLOUD', url: 'https://hubcloud.one/drive/3pjmaumv2ttp05v', quality: '1080p ZEE5 WEB-DL H.264 DDP5.1 Atmos', size: '2.73GB' },
    { provider: 'HUBCLOUD', url: 'https://hubcloud.one/drive/qn18sygkgazl1nl', quality: '2160p ZEE5 WEB-DL HEVC DDP5.1 Atmos', size: '2.79GB' },

    { provider: 'GDLINK', url: 'https://gdlink.dev/file/PpZe1ZgJEZhojsS', quality: '2160p ZEE5 WEB-DL Multi H.265', size: '2.89GB' },
    { provider: 'GDLINK', url: 'https://gdlink.dev/file/Kz1g9PPD1UHwJX2', quality: '1080p ZEE5 WEB-DL Multi H.265', size: '1.99GB' },
    { provider: 'GDLINK', url: 'https://gdlink.dev/file/XBInhDYOx7D6nsc', quality: '720p ZEE5 WEB-DL Multi H.265', size: '1.61GB' }
  ],
  videoSongs: [
    { title: 'Not Available', quality: '1080p', size: '1 GB', url: '#' },
    { title: 'Not Available', quality: '1080p', size: '1 GB', url: '#' },
    { title: 'Not Available', quality: '1080p', size: '1 GB', url: '#' },
    { title: 'Not Available', quality: '1080p', size: '1 GB', url: '#' }
  ]
},
export const movies = [
  {
    id: '741',
    title: 'Mission Impossible - The Final Reckoning',
    year: 2025,
    genre: ['Action','Thriller','Spy'],
    languages: ['English','Hindi','Tamil','Telugu'],
    rating: 8.7,
    duration: '2h 43m',
    director: 'Christopher McQuarrie',
    cast: ['Tom Cruise','Rebecca Ferguson','Simon Pegg','Hayley Atwell'],
    description: 'Sample description. Replace with your own legal description.',
    posterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/6b/33/00/6b3300f0-c016-1e4e-dd61-445a3a16cfef/MI8_EN_2000x3000.jpg/1680x2956.jpg',
    backdropUrl: '',
    trailerUrl: 'https://www.youtube.com/watch?v=avz06PDqDbM',
    views: 8246375,
    uploadDate: '2025-08-17',
    quality: [
      { format: '2160p', size: '19.20 GB', type: 'AMZN WEB-DL Multi DDP5.1 H.265', link: '#' },
      { format: '1080p', size: '14.11 GB', type: 'AMZN WEB-DL DDP5.1 H.264 - Multi', link: '#' }
    ],
    videoSongs: [
      { title: 'Song 1 Short', quality: '320kbps', size: '8 MB', url: '#' },
      { title: 'Song 2 Short', quality: '320kbps', size: '7 MB', url: '#' },
      { title: 'Song 3 Short', quality: '320kbps', size: '9 MB', url: '#' },
      { title: 'Song 4 Short', quality: '320kbps', size: '6 MB', url: '#' }
    ]
  },

  // Add more movie objects here, same structure.
];
