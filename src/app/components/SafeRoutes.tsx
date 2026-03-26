import { useState } from 'react';
import { Navigation, MapPin, Shield, Moon, Zap, Clock, AlertCircle, Star } from 'lucide-react';
import { motion } from 'motion/react';

const routes = [
  {
    id: 1,
    name: 'Quick Route',
    from: 'Current Location',
    to: 'Central Mall',
    distance: '3.2 km',
    duration: '12 mins',
    crowdLevel: 65,
    safetyScore: 75,
    type: 'fastest',
    highlights: ['Main roads', 'Good lighting', 'Moderate crowd'],
  },
  {
    id: 2,
    name: 'Women Safe Route',
    from: 'Current Location',
    to: 'Central Mall',
    distance: '3.5 km',
    duration: '15 mins',
    crowdLevel: 45,
    safetyScore: 95,
    type: 'safest',
    highlights: ['Well-lit streets', 'CCTV coverage', 'Low crowd', 'Emergency support'],
    nightSafe: true,
  },
  {
    id: 3,
    name: 'Crowd-Free Route',
    from: 'Current Location',
    to: 'Central Mall',
    distance: '4.1 km',
    duration: '18 mins',
    crowdLevel: 20,
    safetyScore: 85,
    type: 'least-crowd',
    highlights: ['Minimal traffic', 'Scenic route', 'Very low crowd'],
  },
  {
    id: 4,
    name: 'Quick Route to Coders Cafe',
    from: 'Current Location',
    to: 'Coders Cafe',
    distance: '1.8 km',
    duration: '7 mins',
    crowdLevel: 40,
    safetyScore: 85,
    type: 'fastest',
    highlights: ['Direct route', 'Well-maintained roads', 'Cafe district'],
  },
  {
    id: 5,
    name: 'Safe Evening Route',
    from: 'Current Location',
    to: 'Coders Cafe',
    distance: '2.1 km',
    duration: '9 mins',
    crowdLevel: 30,
    safetyScore: 92,
    type: 'safest',
    highlights: ['CCTV monitored', 'Street lighting', 'Police patrol route'],
    nightSafe: true,
  },
  {
    id: 6,
    name: 'Scenic Route to Verandah Cafe',
    from: 'Current Location',
    to: 'Verandah Cafe (Vijayawada)',
    distance: '2.5 km',
    duration: '11 mins',
    crowdLevel: 35,
    safetyScore: 88,
    type: 'least-crowd',
    highlights: ['Riverside path', 'Low traffic', 'Well-lit walkway'],
  },
  {
    id: 7,
    name: 'Women Safe Route',
    from: 'Current Location',
    to: 'Verandah Cafe (Vijayawada)',
    distance: '2.3 km',
    duration: '10 mins',
    crowdLevel: 25,
    safetyScore: 96,
    type: 'safest',
    highlights: ['All-female friendly zone', 'Emergency buttons', 'CCTV coverage', '24/7 security'],
    nightSafe: true,
  },
  {
    id: 8,
    name: 'Express Route to City Stadium',
    from: 'Current Location',
    to: 'City Stadium',
    distance: '4.5 km',
    duration: '16 mins',
    crowdLevel: 70,
    safetyScore: 78,
    type: 'fastest',
    highlights: ['Main highway', 'Fast access', 'Good lighting'],
  },
  {
    id: 9,
    name: 'Cafe Hopping Route',
    from: 'Tech Hub Cafe',
    to: 'Coders Cafe',
    distance: '0.8 km',
    duration: '4 mins',
    crowdLevel: 20,
    safetyScore: 90,
    type: 'least-crowd',
    highlights: ['Pedestrian-friendly', 'Cafe district', 'Very safe'],
  },
  {
    id: 10,
    name: 'Park Avenue Leisure Route',
    from: 'Current Location',
    to: 'Park Avenue',
    distance: '2.2 km',
    duration: '9 mins',
    crowdLevel: 15,
    safetyScore: 94,
    type: 'least-crowd',
    highlights: ['Green spaces', 'Family-friendly', 'Minimal crowd', 'Safe for evening walks'],
    nightSafe: true,
  },
];

export function SafeRoutes() {
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [nightMode, setNightMode] = useState(false);

  const filteredRoutes = nightMode ? routes.filter(r => r.nightSafe || r.safetyScore >= 80) : routes;

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-soft-white mb-2">Smart Route Planning</h1>
          <p className="text-soft-white/60">Find the safest and most convenient routes</p>
        </div>

        {/* Route Input Section */}
        <div
          className="mb-8 p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl"
          style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.15)' }}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-soft-white/70 mb-2">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                <input
                  type="text"
                  placeholder="Current Location"
                  className="w-full pl-11 pr-4 py-3 bg-cyan/5 border border-cyan/20 rounded-xl text-soft-white placeholder-soft-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-soft-white/70 mb-2">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-alert-red" />
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="w-full pl-11 pr-4 py-3 bg-cyan/5 border border-cyan/20 rounded-xl text-soft-white placeholder-soft-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setNightMode(!nightMode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                  nightMode
                    ? 'bg-cyan/20 border-cyan/40 text-cyan'
                    : 'bg-cyan/5 border-cyan/20 text-soft-white/70'
                }`}
              >
                <Moon className="w-5 h-5" />
                <span>Night Safe Mode</span>
              </button>
            </div>
            <button className="px-6 py-2 bg-cyan text-navy rounded-xl hover:scale-105 transition-all" style={{ boxShadow: '0 4px 16px rgba(0, 229, 255, 0.4)' }}>
              Find Routes
            </button>
          </div>
        </div>

        {/* Routes List */}
        <div className="space-y-4">
          {filteredRoutes.map((route, index) => (
            <RouteCard
              key={route.id}
              route={route}
              index={index}
              isSelected={selectedRoute === route.id}
              onSelect={() => setSelectedRoute(route.id)}
            />
          ))}
        </div>

        {/* Safety Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-6 rounded-2xl border border-safe-green/20 bg-safe-green/10 backdrop-blur-xl"
          style={{ boxShadow: '0 8px 32px rgba(46, 204, 113, 0.15)' }}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-safe-green/20 rounded-lg">
              <Shield className="w-6 h-6 text-safe-green" />
            </div>
            <div>
              <h3 className="text-lg text-soft-white mb-2">Safety Features</h3>
              <ul className="space-y-2 text-sm text-soft-white/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full" />
                  Routes prioritize well-lit, CCTV-monitored areas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full" />
                  Real-time crowd density to avoid overcrowded paths
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full" />
                  Emergency support points marked along the route
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full" />
                  Share live location with trusted contacts (Premium)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RouteCard({
  route,
  index,
  isSelected,
  onSelect,
}: {
  route: any;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'fastest':
        return Zap;
      case 'safest':
        return Shield;
      case 'least-crowd':
        return Star;
      default:
        return Navigation;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'fastest':
        return '#FFC857';
      case 'safest':
        return '#2ECC71';
      case 'least-crowd':
        return '#00E5FF';
      default:
        return '#00E5FF';
    }
  };

  const Icon = getTypeIcon(route.type);
  const color = getTypeColor(route.type);
  const safetyColor = route.safetyScore >= 90 ? '#2ECC71' : route.safetyScore >= 70 ? '#FFC857' : '#FF4D4D';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onSelect}
      className={`relative rounded-2xl p-6 border backdrop-blur-xl cursor-pointer transition-all ${
        isSelected
          ? 'border-cyan/40 bg-cyan/10'
          : 'border-cyan/20 bg-navy/40 hover:border-cyan/30'
      }`}
      style={{ boxShadow: isSelected ? '0 8px 32px rgba(0, 229, 255, 0.2)' : '0 8px 32px rgba(0, 229, 255, 0.1)' }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-cyan/10 border border-cyan/20">
            <Icon className="w-6 h-6" style={{ color }} />
          </div>
          <div>
            <h3 className="text-xl text-soft-white mb-1 flex items-center gap-2">
              {route.name}
              {route.nightSafe && (
                <span className="px-2 py-0.5 text-xs bg-safe-green/20 border border-safe-green/30 rounded-full text-safe-green">
                  Night Safe
                </span>
              )}
            </h3>
            <p className="text-sm text-soft-white/60">
              {route.from} → {route.to}
            </p>
          </div>
        </div>

        {isSelected && (
          <button className="px-4 py-2 bg-cyan text-navy rounded-lg hover:scale-105 transition-all">
            <Navigation className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Route Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div>
          <div className="text-xs text-soft-white/60 mb-1">Distance</div>
          <div className="text-lg text-soft-white">{route.distance}</div>
        </div>
        <div>
          <div className="text-xs text-soft-white/60 mb-1">Duration</div>
          <div className="text-lg text-soft-white flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {route.duration}
          </div>
        </div>
        <div>
          <div className="text-xs text-soft-white/60 mb-1">Crowd Level</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-cyan/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${route.crowdLevel}%`,
                  backgroundColor: route.crowdLevel > 70 ? '#FF4D4D' : route.crowdLevel > 50 ? '#FFC857' : '#2ECC71',
                }}
              />
            </div>
            <span className="text-sm text-soft-white">{route.crowdLevel}%</span>
          </div>
        </div>
        <div>
          <div className="text-xs text-soft-white/60 mb-1">Safety Score</div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" style={{ color: safetyColor }} />
            <span className="text-lg text-soft-white">{route.safetyScore}%</span>
          </div>
        </div>
      </div>

      {/* Route Highlights */}
      <div className="flex flex-wrap gap-2">
        {route.highlights.map((highlight: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-cyan/10 border border-cyan/20 text-cyan"
          >
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  );
}