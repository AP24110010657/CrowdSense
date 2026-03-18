import { AlertTriangle, Bell, Info, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const alerts = [
  {
    id: 1,
    type: 'critical',
    title: 'Critical Crowd Alert',
    location: 'Downtown Plaza',
    message: 'Extremely high crowd density detected. Please avoid this area for your safety.',
    time: '5 mins ago',
    icon: AlertTriangle,
  },
  {
    id: 2,
    type: 'warning',
    title: 'High Risk Area',
    location: 'Central Mall',
    message: 'Crowd levels reaching capacity. Consider visiting alternate locations.',
    time: '15 mins ago',
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: 'info',
    title: 'Upcoming Event',
    location: 'City Stadium',
    message: 'Championship match starting in 2 hours. Expect heavy crowds around the venue.',
    time: '1 hour ago',
    icon: Info,
  },
  {
    id: 4,
    type: 'success',
    title: 'Area Cleared',
    location: 'Park Avenue',
    message: 'Crowd levels have returned to normal. Safe to visit now.',
    time: '2 hours ago',
    icon: CheckCircle,
  },
  {
    id: 5,
    type: 'info',
    title: 'Personalized Alert',
    location: 'Tech Hub Cafe',
    message: 'Your favorite cafe is experiencing low crowd levels - perfect time to visit!',
    time: '3 hours ago',
    icon: Bell,
  },
];

const notifications = [
  {
    id: 1,
    title: 'Daily Summary',
    message: 'Today, 5 locations experienced high crowd levels during peak hours.',
    time: '8:00 AM',
  },
  {
    id: 2,
    title: 'Route Update',
    message: 'Your usual route to work has moderate crowd levels this morning.',
    time: 'Yesterday',
  },
  {
    id: 3,
    title: 'Weekend Forecast',
    message: 'Expect higher than usual crowds at shopping areas this weekend.',
    time: '2 days ago',
  },
];

export function Alerts() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-soft-white mb-2">Alerts & Notifications</h1>
          <p className="text-soft-white/60">Stay informed about crowd conditions and safety alerts</p>
        </div>

        {/* Active Alerts */}
        <div className="mb-8">
          <h2 className="text-xl text-soft-white mb-4">Active Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <AlertCard key={alert.id} alert={alert} index={index} />
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-xl text-soft-white mb-4">Recent Notifications</h2>
          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <NotificationCard key={notification.id} notification={notification} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AlertCard({ alert, index }: { alert: any; index: number }) {
  const getAlertConfig = (type: string) => {
    switch (type) {
      case 'critical':
        return {
          bgColor: 'rgba(255, 77, 77, 0.1)',
          borderColor: 'rgba(255, 77, 77, 0.3)',
          iconBg: 'rgba(255, 77, 77, 0.2)',
          iconColor: '#FF4D4D',
          textColor: '#FF4D4D',
        };
      case 'warning':
        return {
          bgColor: 'rgba(255, 200, 87, 0.1)',
          borderColor: 'rgba(255, 200, 87, 0.3)',
          iconBg: 'rgba(255, 200, 87, 0.2)',
          iconColor: '#FFC857',
          textColor: '#FFC857',
        };
      case 'success':
        return {
          bgColor: 'rgba(46, 204, 113, 0.1)',
          borderColor: 'rgba(46, 204, 113, 0.3)',
          iconBg: 'rgba(46, 204, 113, 0.2)',
          iconColor: '#2ECC71',
          textColor: '#2ECC71',
        };
      default:
        return {
          bgColor: 'rgba(0, 229, 255, 0.1)',
          borderColor: 'rgba(0, 229, 255, 0.3)',
          iconBg: 'rgba(0, 229, 255, 0.2)',
          iconColor: '#00E5FF',
          textColor: '#00E5FF',
        };
    }
  };

  const config = getAlertConfig(alert.type);
  const Icon = alert.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative rounded-2xl p-6 border backdrop-blur-xl overflow-hidden"
      style={{
        backgroundColor: config.bgColor,
        borderColor: config.borderColor,
        boxShadow: `0 8px 32px ${config.bgColor}`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl" style={{ backgroundColor: config.iconBg }}>
          <Icon className="w-6 h-6" style={{ color: config.iconColor }} />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg text-soft-white mb-1">{alert.title}</h3>
              <p className="text-sm" style={{ color: config.textColor }}>
                {alert.location}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-soft-white/50">
              <Clock className="w-3.5 h-3.5" />
              {alert.time}
            </div>
          </div>

          <p className="text-soft-white/80">{alert.message}</p>
        </div>
      </div>
    </motion.div>
  );
}

function NotificationCard({ notification, index }: { notification: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-5 rounded-xl border border-cyan/20 bg-navy/40 backdrop-blur-xl hover:border-cyan/30 transition-all cursor-pointer"
      style={{ boxShadow: '0 4px 16px rgba(0, 229, 255, 0.08)' }}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-soft-white">{notification.title}</h3>
        <span className="text-xs text-soft-white/50">{notification.time}</span>
      </div>
      <p className="text-sm text-soft-white/70">{notification.message}</p>
    </motion.div>
  );
}
