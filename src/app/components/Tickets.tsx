import { useState } from 'react';
import { Ticket, Film, Music, Trophy, Calendar, MapPin, Users, ExternalLink, Clock, Star } from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  { id: 'all', label: 'All Events', icon: Ticket },
  { id: 'movies', label: 'Movies', icon: Film },
  { id: 'concerts', label: 'Concerts', icon: Music },
  { id: 'sports', label: 'Sports', icon: Trophy },
];

const events = [
  {
    id: 1,
    title: 'The Grand Symphony',
    category: 'concerts',
    venue: 'City Concert Hall',
    date: 'March 22, 2026',
    time: '7:00 PM',
    price: '$45 - $120',
    crowdExpected: 85,
    rating: 4.8,
    partner: 'TicketMaster',
    image: 'concert',
  },
  {
    id: 2,
    title: 'Interstellar: IMAX Re-release',
    category: 'movies',
    venue: 'Mega Cineplex',
    date: 'March 20, 2026',
    time: '9:00 PM',
    price: '$15 - $25',
    crowdExpected: 70,
    rating: 4.9,
    partner: 'BookMyShow',
    image: 'movie',
  },
  {
    id: 3,
    title: 'Championship Finals',
    category: 'sports',
    venue: 'City Stadium',
    date: 'March 25, 2026',
    time: '6:30 PM',
    price: '$30 - $200',
    crowdExpected: 95,
    rating: 4.7,
    partner: 'SportsTickets',
    image: 'sports',
  },
  {
    id: 4,
    title: 'Indie Music Festival',
    category: 'concerts',
    venue: 'Open Air Arena',
    date: 'March 28, 2026',
    time: '4:00 PM - 11:00 PM',
    price: '$60 - $150',
    crowdExpected: 90,
    rating: 4.6,
    partner: 'EventBrite',
    image: 'festival',
  },
  {
    id: 5,
    title: 'The Quantum Heist',
    category: 'movies',
    venue: 'Premium Theaters',
    date: 'March 19, 2026',
    time: '8:30 PM',
    price: '$12 - $20',
    crowdExpected: 60,
    rating: 4.5,
    partner: 'BookMyShow',
    image: 'movie',
  },
];

export function Tickets() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents =
    selectedCategory === 'all'
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-soft-white mb-2">Book Tickets</h1>
          <p className="text-soft-white/60">Find events and book tickets with crowd insights</p>
        </div>

        {/* Partnership Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 rounded-2xl border border-cyan/30 bg-gradient-to-r from-cyan/10 to-cyan/5 backdrop-blur-xl"
          style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.2)' }}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan/20 rounded-xl">
              <Ticket className="w-8 h-8 text-cyan" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg text-soft-white mb-1">Partner Benefits</h3>
              <p className="text-sm text-soft-white/70">
                Book with our partners and get real-time crowd predictions + exclusive deals
              </p>
            </div>
            <div className="hidden sm:flex gap-4">
              <PartnerLogo name="TicketMaster" />
              <PartnerLogo name="BookMyShow" />
              <PartnerLogo name="EventBrite" />
            </div>
          </div>
        </motion.div>

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

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="px-4 py-2 bg-navy/60 border border-cyan/20 rounded-lg">
      <span className="text-xs text-cyan">{name}</span>
    </div>
  );
}

function EventCard({ event, index }: { event: any; index: number }) {
  const getCrowdColor = (level: number) => {
    if (level >= 80) return '#FF4D4D';
    if (level >= 60) return '#FFC857';
    return '#2ECC71';
  };

  const crowdColor = getCrowdColor(event.crowdExpected);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden border border-cyan/20 bg-navy/40 backdrop-blur-xl hover:border-cyan/40 transition-all"
      style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
    >
      {/* Event Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-cyan/20 to-navy/40 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {event.category === 'movies' && <Film className="w-16 h-16 text-cyan/40" />}
          {event.category === 'concerts' && <Music className="w-16 h-16 text-cyan/40" />}
          {event.category === 'sports' && <Trophy className="w-16 h-16 text-cyan/40" />}
        </div>
        
        {/* Crowd Alert Badge */}
        {event.crowdExpected >= 80 && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-alert-red/90 backdrop-blur-sm rounded-full text-xs text-soft-white border border-alert-red/50">
            High Crowd Expected
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg text-soft-white group-hover:text-cyan transition-colors flex-1">
            {event.title}
          </h3>
          <div className="flex items-center gap-1 text-warning-yellow">
            <Star className="w-4 h-4 fill-warning-yellow" />
            <span className="text-sm text-soft-white">{event.rating}</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-soft-white/70">
            <MapPin className="w-4 h-4 text-cyan" />
            {event.venue}
          </div>
          <div className="flex items-center gap-2 text-sm text-soft-white/70">
            <Calendar className="w-4 h-4 text-cyan" />
            {event.date}
          </div>
          <div className="flex items-center gap-2 text-sm text-soft-white/70">
            <Clock className="w-4 h-4 text-cyan" />
            {event.time}
          </div>
        </div>

        {/* Crowd Prediction */}
        <div className="mb-4 p-3 rounded-xl bg-cyan/5 border border-cyan/10">
          <div className="flex items-center justify-between text-xs text-soft-white/60 mb-2">
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              Crowd Prediction
            </div>
            <span>{event.crowdExpected}%</span>
          </div>
          <div className="h-2 bg-cyan/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: crowdColor }}
              initial={{ width: 0 }}
              animate={{ width: `${event.crowdExpected}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            />
          </div>
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-soft-white/60 mb-1">Starting from</div>
            <div className="text-xl text-cyan">{event.price.split(' - ')[0]}</div>
          </div>
          <button className="px-5 py-2.5 bg-cyan text-navy rounded-xl flex items-center gap-2 hover:scale-105 transition-all group">
            Book Now
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Partner Badge */}
        <div className="mt-4 pt-4 border-t border-cyan/10">
          <div className="flex items-center gap-2 text-xs text-soft-white/60">
            <span>via</span>
            <span className="text-cyan">{event.partner}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
