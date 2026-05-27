import { useParams, Link } from 'react-router';
import { ArrowLeft, Navigation, AlertTriangle, TrendingUp, Clock, Users, Ticket, Route, Share2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

const mockData = {
  1: {
    name: 'Central Mall',
    crowdLevel: 85,
    status: 'High',
    color: '#FF4D4D',
    peakTime: '6:00 PM - 8:00 PM',
    currentCapacity: '850/1000',
    safetyWarning: 'High crowd density detected. Consider visiting alternate locations.',
    alternates: [
      { id: 3, name: 'Tech Hub Cafe', crowdLevel: 45, distance: '1.2 km' },
      { id: 6, name: 'Coders Cafe', crowdLevel: 38, distance: '1.5 km' },
      { id: 4, name: 'Park Avenue', crowdLevel: 28, distance: '2.5 km' },
    ],
  },
  2: {
    name: 'City Stadium',
    crowdLevel: 72,
    status: 'Moderate',
    color: '#FFC857',
    peakTime: '7:00 PM - 9:00 PM',
    currentCapacity: '3600/5000',
    safetyWarning: null,
    alternates: [
      { id: 4, name: 'Park Avenue', crowdLevel: 28, distance: '3.1 km' },
    ],
  },
  3: {
    name: 'Tech Hub Cafe',
    crowdLevel: 45,
    status: 'Low',
    color: '#2ECC71',
    peakTime: '12:00 PM - 2:00 PM',
    currentCapacity: '45/100',
    safetyWarning: null,
    alternates: [
      { id: 6, name: 'Coders Cafe', crowdLevel: 38, distance: '0.8 km' },
      { id: 7, name: 'Verandah Cafe (Vijayawada)', crowdLevel: 52, distance: '1.1 km' },
    ],
  },
  4: {
    name: 'Park Avenue',
    crowdLevel: 28,
    status: 'Low',
    color: '#2ECC71',
    peakTime: '5:00 PM - 7:00 PM',
    currentCapacity: '140/500',
    safetyWarning: null,
    alternates: [],
  },
  5: {
    name: 'Downtown Plaza',
    crowdLevel: 90,
    status: 'Critical',
    color: '#FF4D4D',
    peakTime: '5:30 PM - 8:30 PM',
    currentCapacity: '1800/2000',
    safetyWarning: 'Critical crowd density! Please avoid this area or wait for crowd to disperse.',
    alternates: [
      { id: 3, name: 'Tech Hub Cafe', crowdLevel: 45, distance: '2.8 km' },
      { id: 6, name: 'Coders Cafe', crowdLevel: 38, distance: '2.2 km' },
      { id: 4, name: 'Park Avenue', crowdLevel: 28, distance: '1.9 km' },
    ],
  },
  6: {
    name: 'Coders Cafe',
    crowdLevel: 38,
    status: 'Low',
    color: '#2ECC71',
    peakTime: '3:00 PM - 5:00 PM',
    currentCapacity: '23/60',
    safetyWarning: null,
    alternates: [
      { id: 3, name: 'Tech Hub Cafe', crowdLevel: 45, distance: '0.8 km' },
      { id: 7, name: 'Verandah Cafe (Vijayawada)', crowdLevel: 52, distance: '1.4 km' },
    ],
  },
  7: {
    name: 'Verandah Cafe (Vijayawada)',
    crowdLevel: 52,
    status: 'Moderate',
    color: '#FFC857',
    peakTime: '7:00 PM - 9:00 PM',
    currentCapacity: '42/80',
    safetyWarning: null,
    alternates: [
      { id: 6, name: 'Coders Cafe', crowdLevel: 38, distance: '1.4 km' },
      { id: 3, name: 'Tech Hub Cafe', crowdLevel: 45, distance: '1.1 km' },
    ],
  },
};

const chartData = [
  { time: '9 AM', crowd: 20 },
  { time: '10 AM', crowd: 35 },
  { time: '11 AM', crowd: 48 },
  { time: '12 PM', crowd: 65 },
  { time: '1 PM', crowd: 72 },
  { time: '2 PM', crowd: 58 },
  { time: '3 PM', crowd: 50 },
  { time: '4 PM', crowd: 55 },
  { time: '5 PM', crowd: 70 },
  { time: '6 PM', crowd: 85 },
  { time: '7 PM', crowd: 90 },
  { time: '8 PM', crowd: 78 },
];

export function LocationDetails() {
  const { id } = useParams();
  const location = mockData[id as keyof typeof mockData];

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-soft-white mb-4">Location not found</h2>
          <Link to="/" className="text-cyan hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan hover:text-cyan/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Map
          </Link>

          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl text-soft-white mb-2">{location.name}</h1>
              <div className="flex items-center gap-3">
                <div
                  className="px-4 py-1.5 rounded-full text-sm border"
                  style={{
                    backgroundColor: `${location.color}20`,
                    borderColor: `${location.color}40`,
                    color: location.color,
                  }}
                >
                  {location.status} Density
                </div>
                <span className="text-soft-white/60">•</span>
                <span className="text-soft-white/60">{location.currentCapacity} people</span>
              </div>
            </div>

            <button
              className="px-6 py-3 bg-cyan text-navy rounded-xl flex items-center gap-2 transition-all hover:scale-105"
              style={{ boxShadow: '0 8px 24px rgba(0, 229, 255, 0.4)' }}
            >
              <Navigation className="w-5 h-5" />
              Navigate Safely
            </button>
          </div>
        </div>

        {/* Safety Warning */}
        {location.safetyWarning && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 rounded-2xl border border-alert-red/30 bg-alert-red/10 backdrop-blur-xl"
            style={{ boxShadow: '0 8px 32px rgba(255, 77, 77, 0.2)' }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-alert-red/20 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-alert-red" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-alert-red mb-1">Safety Alert</h3>
                <p className="text-soft-white/80">{location.safetyWarning}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <InfoCard
            icon={Users}
            title="Current Crowd"
            value={`${location.crowdLevel}%`}
            subtitle="Capacity filled"
            color={location.color}
          />
          <InfoCard
            icon={Clock}
            title="Peak Time"
            value={location.peakTime}
            subtitle="Expected today"
            color="#00E5FF"
          />
          <InfoCard
            icon={TrendingUp}
            title="Trend"
            value="Increasing"
            subtitle="Next 2 hours"
            color="#FFC857"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8 grid md:grid-cols-3 gap-4">
          <Link to="/safe-routes">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full p-4 rounded-xl border border-cyan/20 bg-cyan/5 hover:bg-cyan/10 backdrop-blur-xl flex items-center gap-3 transition-all"
            >
              <div className="p-2 bg-cyan/20 rounded-lg">
                <Route className="w-5 h-5 text-cyan" />
              </div>
              <div className="text-left">
                <div className="text-soft-white">Find Safe Route</div>
                <div className="text-xs text-soft-white/60">Get directions</div>
              </div>
            </motion.button>
          </Link>

          <Link to="/tickets">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full p-4 rounded-xl border border-cyan/20 bg-cyan/5 hover:bg-cyan/10 backdrop-blur-xl flex items-center gap-3 transition-all"
            >
              <div className="p-2 bg-cyan/20 rounded-lg">
                <Ticket className="w-5 h-5 text-cyan" />
              </div>
              <div className="text-left">
                <div className="text-soft-white">Book Tickets</div>
                <div className="text-xs text-soft-white/60">Events nearby</div>
              </div>
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full p-4 rounded-xl border border-cyan/20 bg-cyan/5 hover:bg-cyan/10 backdrop-blur-xl flex items-center gap-3 transition-all"
          >
            <div className="p-2 bg-cyan/20 rounded-lg">
              <Share2 className="w-5 h-5 text-cyan" />
            </div>
            <div className="text-left">
              <div className="text-soft-white">Share Location</div>
              <div className="text-xs text-soft-white/60">With friends</div>
            </div>
          </motion.button>
        </div>

        {/* Real-time Graph */}
        <div
          className="mb-8 p-6 rounded-3xl border border-cyan/20 bg-navy/40 backdrop-blur-xl"
          style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.15)' }}
        >
          <h3 className="text-xl text-soft-white mb-6">Real-time Crowd Activity</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <defs>
                  <linearGradient id="colorCrowd" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 229, 255, 0.1)" />
                <XAxis
                  dataKey="time"
                  stroke="rgba(245, 247, 250, 0.6)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="rgba(245, 247, 250, 0.6)"
                  style={{ fontSize: '12px' }}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(11, 28, 44, 0.95)',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                    borderRadius: '12px',
                    color: '#F5F7FA',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="crowd"
                  stroke="#00E5FF"
                  strokeWidth={3}
                  dot={{ fill: '#00E5FF', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#00E5FF', strokeWidth: 0 }}
                  fill="url(#colorCrowd)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alternate Locations */}
        {location.alternates.length > 0 && (
          <div>
            <h3 className="text-xl text-soft-white mb-4">Suggested Alternate Locations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {location.alternates.map((alt) => (
                <Link key={alt.id} to={`/location/${alt.id}`}>
                  <motion.div
                    className="p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl hover:border-cyan/40 transition-all cursor-pointer"
                    style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg text-soft-white">{alt.name}</h4>
                      <div className="text-sm text-soft-white/60">{alt.distance}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-cyan/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${alt.crowdLevel}%`,
                            backgroundColor: alt.crowdLevel > 70 ? '#FF4D4D' : alt.crowdLevel > 50 ? '#FFC857' : '#2ECC71',
                          }}
                        />
                      </div>
                      <span className="text-sm text-soft-white/80">{alt.crowdLevel}%</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoCard({
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
    <div
      className="p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl"
      style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-cyan/10 border border-cyan/20">
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <h3 className="text-sm text-soft-white/70">{title}</h3>
      </div>
      <p className="text-2xl text-soft-white mb-1">{value}</p>
      <p className="text-xs text-soft-white/50">{subtitle}</p>
    </div>
  );
}