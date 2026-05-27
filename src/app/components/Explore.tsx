import { useState } from 'react';
import { Coffee, Calendar, ShoppingBag, Trophy, TrendingUp, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const categories = [
  { id: 'all', label: 'All', icon: TrendingUp },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'cafes', label: 'Cafes', icon: Coffee },
  { id: 'malls', label: 'Malls', icon: ShoppingBag },
  { id: 'stadiums', label: 'Stadiums', icon: Trophy },
];

const trendingPlaces = [
  {
    id: 5,
    name: 'Downtown Plaza',
    category: 'malls',
    crowdLevel: 90,
    popularTime: '5:30 PM - 8:30 PM',
    description: 'Major shopping event happening today. Expect high crowds.',
    trend: 'up',
    visitors: '1800+',
  },
  {
    id: 1,
    name: 'Central Mall',
    category: 'malls',
    crowdLevel: 85,
    popularTime: '6:00 PM - 8:00 PM',
    description: 'Weekend sale attracting large crowds to all stores.',
    trend: 'up',
    visitors: '850+',
  },
  {
    id: 2,
    name: 'City Stadium',
    category: 'stadiums',
    crowdLevel: 72,
    popularTime: '7:00 PM - 9:00 PM',
    description: 'Championship match tonight. Get there early!',
    trend: 'stable',
    visitors: '3600+',
  },
  {
    id: 7,
    name: 'Verandah Cafe (Vijayawada)',
    category: 'cafes',
    crowdLevel: 52,
    popularTime: '7:00 PM - 9:00 PM',
    description: 'Popular evening spot with riverside seating. Great ambiance!',
    trend: 'up',
    visitors: '42+',
  },
  {
    id: 3,
    name: 'Tech Hub Cafe',
    category: 'cafes',
    crowdLevel: 45,
    popularTime: '12:00 PM - 2:00 PM',
    description: 'Perfect for remote work with excellent WiFi and coffee.',
    trend: 'stable',
    visitors: '45+',
  },
  {
    id: 6,
    name: 'Coders Cafe',
    category: 'cafes',
    crowdLevel: 38,
    popularTime: '3:00 PM - 5:00 PM',
    description: 'Tech-friendly workspace with coding community meetups.',
    trend: 'up',
    visitors: '23+',
  },
  {
    id: 8,
    name: 'Summer Music Festival',
    category: 'events',
    crowdLevel: 88,
    popularTime: '4:00 PM - 11:00 PM',
    description: 'Outdoor festival with live performances all evening.',
    trend: 'up',
    visitors: '5200+',
  },
];

export function Explore() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPlaces =
    selectedCategory === 'all'
      ? trendingPlaces
      : trendingPlaces.filter((place) => place.category === selectedCategory);

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-soft-white mb-2">Nearby Places</h1>
          <p className="text-soft-white/60">Discover popular locations and events happening now</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-cyan/20 border-cyan/40 text-cyan'
                    : 'bg-cyan/5 border-cyan/20 text-soft-white/70 hover:border-cyan/30'
                }`}
                style={isActive ? { boxShadow: '0 4px 16px rgba(0, 229, 255, 0.3)' } : {}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                {category.label}
              </motion.button>
            );
          })}
        </div>

        {/* Trending Places Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place, index) => (
            <PlaceCard key={place.id} place={place} index={index} />
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <p className="text-soft-white/60">No trending places in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function PlaceCard({ place, index }: { place: any; index: number }) {
  const getCrowdColor = (level: number) => {
    if (level >= 80) return '#FF4D4D';
    if (level >= 50) return '#FFC857';
    return '#2ECC71';
  };

  const crowdColor = getCrowdColor(place.crowdLevel);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={place.id <= 5 ? `/location/${place.id}` : '#'}>
        <div
          className="group relative rounded-2xl p-6 border border-cyan/20 bg-navy/40 backdrop-blur-xl hover:border-cyan/40 transition-all cursor-pointer overflow-hidden"
          style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
        >
          {/* Background Glow */}
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
            style={{ backgroundColor: crowdColor }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl text-soft-white mb-1 group-hover:text-cyan transition-colors">
                  {place.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div
                    className="px-3 py-1 rounded-full text-xs border"
                    style={{
                      backgroundColor: `${crowdColor}20`,
                      borderColor: `${crowdColor}40`,
                      color: crowdColor,
                    }}
                  >
                    {place.crowdLevel}% Capacity
                  </div>
                  {place.trend === 'up' && (
                    <TrendingUp className="w-4 h-4 text-alert-red" />
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-soft-white/70 mb-4">{place.description}</p>

            {/* Stats */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-cyan" />
                <span className="text-soft-white/60">Popular:</span>
                <span className="text-soft-white">{place.popularTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-cyan" />
                <span className="text-soft-white/60">Visitors:</span>
                <span className="text-soft-white">{place.visitors}</span>
              </div>
            </div>

            {/* Crowd Level Bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-soft-white/60 mb-2">
                <span>Crowd Level</span>
                <span>{place.crowdLevel}%</span>
              </div>
              <div className="h-2 bg-cyan/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: crowdColor }}
                  initial={{ width: 0 }}
                  animate={{ width: `${place.crowdLevel}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}