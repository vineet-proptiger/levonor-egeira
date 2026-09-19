const fs = require('fs');
const path = './lib/images.js';
let content = fs.readFileSync(path, 'utf8');

// Replace galleryImages
content = content.replace(/export const galleryImages = \[([\s\S]*?)\]/g, `export const galleryImages = [
  { 
    src: '/images/gallery/g1.webp', 
    img: '/images/gallery/g1.webp', 
    alt: 'Levonor Egeira - Luxurious Master Bedroom', 
    title: 'Luxurious Master Bedroom', 
    label: 'Luxurious Master Bedroom', 
    desc: 'Spacious master bedroom with warm lighting, premium bed, and an expansive balcony.' 
  },
  { 
    src: '/images/gallery/g2.webp', 
    img: '/images/gallery/g2.webp', 
    alt: 'Levonor Egeira - Grand Entrance Gate', 
    title: 'Grand Entrance Gate', 
    label: 'Grand Entrance Gate', 
    desc: 'Majestic architectural entrance gate with an impressive canopy and welcoming arrival boulevard.' 
  },
  { 
    src: '/images/gallery/g3.webp', 
    img: '/images/gallery/g3.webp', 
    alt: 'Levonor Egeira - Central Courtyard & Drop-off Plaza', 
    title: 'Central Courtyard & Drop-off Plaza', 
    label: 'Central Courtyard & Drop-off Plaza', 
    desc: 'Elegant central courtyard featuring a prominent EGEIRA water sculpture and circular patterned driveway.' 
  },
  { 
    src: '/images/gallery/g4.webp', 
    img: '/images/gallery/g4.webp', 
    alt: 'Levonor Egeira - Grand Double-Height Lobby', 
    title: 'Grand Double-Height Lobby', 
    label: 'Grand Double-Height Lobby', 
    desc: 'Stunning illuminated double-height residential tower lobby entrance adorned with a grand chandelier.' 
  },
  { 
    src: '/images/gallery/g5.webp', 
    img: '/images/gallery/g5.webp', 
    alt: 'Levonor Egeira - Main Entrance Gate at Twilight', 
    title: 'Main Entrance Gate at Twilight', 
    label: 'Main Entrance Gate at Twilight', 
    desc: 'Breathtaking twilight view of the main entrance gate showcasing beautiful architectural lighting.' 
  },
  { 
    src: '/images/gallery/g6.webp', 
    img: '/images/gallery/g6.webp', 
    alt: 'Levonor Egeira - Tower Elevation against the Skyline', 
    title: 'Tower Elevation against the Skyline', 
    label: 'Tower Elevation against the Skyline', 
    desc: 'Striking high-rise residential towers beautifully illuminated against a golden sunset sky.' 
  }
]`);

// Replace amenityImages
content = content.replace(/export const amenityImages = \[([\s\S]*?)\]/g, `export const amenityImages = [
  { 
    img: '/images/amenities/a1.webp', 
    src: '/images/amenities/a1.webp', 
    label: 'Multipurpose Sports Courts & Recreational Zones', 
    title: 'Multipurpose Sports Courts & Recreational Zones', 
    alt: 'Levonor Egeira - Sports Courts', 
    desc: 'Vibrant outdoor sports courts, cycling track, and recreational zones nestled amidst green landscapes.' 
  },
  { 
    img: '/images/amenities/a2.webp', 
    src: '/images/amenities/a2.webp', 
    label: 'Apex Grand Clubhouse', 
    title: 'Apex Grand Clubhouse', 
    alt: 'Levonor Egeira - Apex Grand Clubhouse', 
    desc: 'Magnificent multi-level Apex clubhouse featuring striking modern architecture and extensive greenery.' 
  },
  { 
    img: '/images/amenities/a3.webp', 
    src: '/images/amenities/a3.webp', 
    label: 'Open-Air Amphitheatre & Landscaped Gardens', 
    title: 'Open-Air Amphitheatre & Landscaped Gardens', 
    alt: 'Levonor Egeira - Open-Air Amphitheatre', 
    desc: 'Tiered outdoor amphitheatre seating under a beautiful floral pergola surrounded by lush gardens.' 
  },
  { 
    img: '/images/amenities/a4.webp', 
    src: '/images/amenities/a4.webp', 
    label: 'Premium Modular Kitchen & Dining Setup', 
    title: 'Premium Modular Kitchen & Dining Setup', 
    alt: 'Levonor Egeira - Premium Kitchen', 
    desc: 'Ultra-luxurious, sunlit modular kitchen showcasing premium fittings, marble finishes, and an elegant island.' 
  },
  { 
    img: '/images/amenities/a5.webp', 
    src: '/images/amenities/a5.webp', 
    label: 'Terrace Infinity Swimming Pool', 
    title: 'Terrace Infinity Swimming Pool', 
    alt: 'Levonor Egeira - Terrace Infinity Pool', 
    desc: 'Spectacular terrace-level infinity swimming pool offering panoramic views at sunset.' 
  },
  { 
    img: '/images/amenities/a6.webp', 
    src: '/images/amenities/a6.webp', 
    label: 'Club Harmony - Gym, Spa & Cafe', 
    title: 'Club Harmony - Gym, Spa & Cafe', 
    alt: 'Levonor Egeira - Club Harmony', 
    desc: 'The grand Club Harmony featuring world-class facilities including a gym, spa, indoor games, and cafe.' 
  }
]`);

fs.writeFileSync(path, content);
console.log('Updated lib/images.js');
