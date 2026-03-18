import { useState } from 'react';
import { Search, Target, Users, TrendingUp, Shield, Clock, Cloud, Droplets, Wind, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const mockLocations = [
  { id: 1, name: 'Central Mall', lat: 40.7580, lng: -73.9855, crowdLevel: 85, color: '#FF4D4D' },
  { id: 2, name: 'City Stadium', lat: 40.7489, lng: -73.9680, crowdLevel: 72, color: '#FFC857' },
  { id: 3, name: 'Tech Hub Cafe', lat: 40.7614, lng: -73.9776, crowdLevel: 45, color: '#2ECC71' },
  { id: 4, name: 'Park Avenue', lat: 40.7549, lng: -73.9840, crowdLevel: 28, color: '#2ECC71' },
  { id: 5, name: 'Downtown Plaza', lat: 40.7520, lng: -73.9730, crowdLevel: 90, color: '#FF4D4D' },
];

export function Home() {
  const [mode, setMode] = useState<'avoid' | 'find'>('avoid');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Weather Alert Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-2xl border border-warning-yellow/30 bg-warning-yellow/10 backdrop-blur-xl flex items-center gap-4"
          style={{ boxShadow: '0 8px 32px rgba(255, 200, 87, 0.15)' }}
        >
          <div className="p-2 bg-warning-yellow/20 rounded-lg">
            <Cloud className="w-6 h-6 text-warning-yellow" />
          </div>
          <div className="flex-1">
            <h3 className="text-soft-white mb-1">Weather Update</h3>
            <p className="text-sm text-soft-white/70">Rain expected today 4-7 PM. Some outdoor events may be affected.</p>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-cyan" />
              <span className="text-soft-white/80">75%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-cyan" />
              <span className="text-soft-white/80">12 mph</span>
            </div>
          </div>
        </motion.div>

        {/* Search and Mode Toggle */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan/60" />
            <input
              type="text"
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-cyan/5 border border-cyan/20 rounded-2xl text-soft-white placeholder-soft-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50 backdrop-blur-xl transition-all"
              style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${mode === 'avoid' ? 'text-cyan' : 'text-soft-white/50'}`}>
              Avoid Crowds
            </span>
            <button
              onClick={() => setMode(mode === 'avoid' ? 'find' : 'avoid')}
              className="relative w-16 h-8 bg-cyan/20 rounded-full border border-cyan/30 transition-all hover:bg-cyan/30"
              style={{ boxShadow: '0 4px 16px rgba(0, 229, 255, 0.2)' }}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-cyan rounded-full"
                style={{ boxShadow: '0 0 16px rgba(0, 229, 255, 0.8)' }}
                animate={{ left: mode === 'avoid' ? 4 : 36 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${mode === 'find' ? 'text-cyan' : 'text-soft-white/50'}`}>
              Find Crowds
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div
              className="relative rounded-3xl overflow-hidden border border-cyan/20 bg-navy/40 backdrop-blur-xl"
              style={{
                height: '500px',
                boxShadow: '0 8px 32px rgba(0, 229, 255, 0.15), inset 0 2px 16px rgba(0, 229, 255, 0.05)',
              }}
            >
              {/* Mock Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-cyan/10">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)',
                      backgroundSize: '50px 50px',
                    }}
                  />
                </div>

                {/* Location Markers */}
                {mockLocations.map((location) => (
                  <Link
                    key={location.id}
                    to={`/location/${location.id}`}
                  >
                    <motion.div
                      className="absolute cursor-pointer group"
                      style={{
                        left: `${((location.lng + 73.9855) / 0.02) * 100}%`,
                        top: `${((40.7614 - location.lat) / 0.015) * 100}%`,
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {/* Pulsing Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          width: '60px',
                          height: '60px',
                          backgroundColor: location.color,
                          opacity: 0.3,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />

                      {/* Marker */}
                      <div
                        className="relative w-8 h-8 rounded-full border-2 border-soft-white"
                        style={{
                          backgroundColor: location.color,
                          boxShadow: `0 0 20px ${location.color}`,
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 bg-soft-white rounded-full" />
                        </div>
                      </div>

                      {/* Tooltip */}
                      <div className="absolute left-10 top-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="bg-navy/95 border border-cyan/30 rounded-lg px-3 py-2 backdrop-blur-xl whitespace-nowrap">
                          <p className="text-sm text-soft-white">{location.name}</p>
                          <p className="text-xs text-cyan">{location.crowdLevel}% capacity</p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Floating Action Button */}
              <button
                className="absolute bottom-6 right-6 w-14 h-14 bg-cyan rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ boxShadow: '0 8px 24px rgba(0, 229, 255, 0.5)' }}
              >
                <Target className="w-6 h-6 text-navy" />
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-4">
            <StatsCard
              icon={Users}
              title="Crowd Level"
              value="Moderate"
              subtitle="Based on nearby areas"
              color="#FFC857"
            />
            <StatsCard
              icon={Clock}
              title="Peak Hours"
              value="6-8 PM"
              subtitle="Expected today"
              color="#00E5FF"
            />
            <StatsCard
              icon={Shield}
              title="Safety Status"
              value="Safe"
              subtitle="All areas monitored"
              color="#2ECC71"
            />
            <StatsCard
              icon={TrendingUp}
              title="Trending Now"
              value="5 Locations"
              subtitle="High activity"
              color="#FF4D4D"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsCard({
  icon: Icon,
  title,
  value,
  subtitle,
  color,
}: {
  icon: any;
  title: string;
  value: string;
  subtitle: string;
  color: string;
}) {
  return (
    <motion.div
      className="relative rounded-2xl p-6 border border-cyan/20 bg-navy/40 backdrop-blur-xl overflow-hidden group hover:border-cyan/40 transition-all cursor-pointer"
      style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
      whileHover={{ y: -4 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-30" style={{ backgroundColor: color }} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-cyan/10 border border-cyan/20">
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <h3 className="text-sm text-soft-white/70">{title}</h3>
        </div>
        <p className="text-2xl text-soft-white mb-1">{value}</p>
        <p className="text-xs text-soft-white/50">{subtitle}</p>
      </div>
    </motion.div>
  );
}