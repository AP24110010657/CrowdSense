import { useState } from 'react';
import { Users, Bell, Moon, MapPin, Shield, Info, Navigation, Zap, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function Settings() {
  const [crowdPreference, setCrowdPreference] = useState<'avoid' | 'prefer'>('avoid');
  const [notifications, setNotifications] = useState({
    highCrowd: true,
    safetyAlerts: true,
    dailySummary: false,
    personalizedTips: true,
    weatherAlerts: true,
    communityUpdates: false,
  });
  const [darkMode, setDarkMode] = useState(true);
  const [locationTracking, setLocationTracking] = useState(true);
  const [emergencySharing, setEmergencySharing] = useState(false);
  const [accessibility, setAccessibility] = useState(false);

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-soft-white mb-2">Settings</h1>
          <p className="text-soft-white/60">Customize your CrowdSense experience</p>
        </div>

        <div className="space-y-6">
          {/* Crowd Preference */}
          <SettingsSection
            icon={Users}
            title="Crowd Preference"
            description="Set your default crowd preference"
          >
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => setCrowdPreference('avoid')}
                className={`flex-1 p-4 rounded-xl border transition-all ${
                  crowdPreference === 'avoid'
                    ? 'bg-cyan/20 border-cyan/40 text-cyan'
                    : 'bg-cyan/5 border-cyan/20 text-soft-white/70'
                }`}
                style={
                  crowdPreference === 'avoid'
                    ? { boxShadow: '0 4px 16px rgba(0, 229, 255, 0.3)' }
                    : {}
                }
              >
                <div className="text-center">
                  <h4 className="mb-1">Avoid Crowds</h4>
                  <p className="text-xs opacity-70">Find less crowded places</p>
                </div>
              </button>

              <button
                onClick={() => setCrowdPreference('prefer')}
                className={`flex-1 p-4 rounded-xl border transition-all ${
                  crowdPreference === 'prefer'
                    ? 'bg-cyan/20 border-cyan/40 text-cyan'
                    : 'bg-cyan/5 border-cyan/20 text-soft-white/70'
                }`}
                style={
                  crowdPreference === 'prefer'
                    ? { boxShadow: '0 4px 16px rgba(0, 229, 255, 0.3)' }
                    : {}
                }
              >
                <div className="text-center">
                  <h4 className="mb-1">Prefer Crowds</h4>
                  <p className="text-xs opacity-70">Discover popular places</p>
                </div>
              </button>
            </div>
          </SettingsSection>

          {/* Notification Settings */}
          <SettingsSection
            icon={Bell}
            title="Notifications"
            description="Manage what alerts you receive"
          >
            <div className="space-y-3 mt-4">
              <ToggleItem
                label="High Crowd Alerts"
                description="Get notified when areas are overcrowded"
                enabled={notifications.highCrowd}
                onChange={(value) =>
                  setNotifications({ ...notifications, highCrowd: value })
                }
              />
              <ToggleItem
                label="Safety Alerts"
                description="Receive critical safety warnings"
                enabled={notifications.safetyAlerts}
                onChange={(value) =>
                  setNotifications({ ...notifications, safetyAlerts: value })
                }
              />
              <ToggleItem
                label="Daily Summary"
                description="Morning recap of crowd patterns"
                enabled={notifications.dailySummary}
                onChange={(value) =>
                  setNotifications({ ...notifications, dailySummary: value })
                }
              />
              <ToggleItem
                label="Personalized Tips"
                description="Get suggestions based on your preferences"
                enabled={notifications.personalizedTips}
                onChange={(value) =>
                  setNotifications({ ...notifications, personalizedTips: value })
                }
              />
              <ToggleItem
                label="Weather Alerts"
                description="Stay informed about weather conditions"
                enabled={notifications.weatherAlerts}
                onChange={(value) =>
                  setNotifications({ ...notifications, weatherAlerts: value })
                }
              />
              <ToggleItem
                label="Community Updates"
                description="Receive news and updates from the community"
                enabled={notifications.communityUpdates}
                onChange={(value) =>
                  setNotifications({ ...notifications, communityUpdates: value })
                }
              />
            </div>
          </SettingsSection>

          {/* Appearance */}
          <SettingsSection
            icon={Moon}
            title="Appearance"
            description="Customize the look and feel"
          >
            <div className="mt-4">
              <ToggleItem
                label="Dark Mode"
                description="Use dark theme throughout the app"
                enabled={darkMode}
                onChange={setDarkMode}
              />
            </div>
          </SettingsSection>

          {/* Privacy & Location */}
          <SettingsSection
            icon={Shield}
            title="Privacy & Location"
            description="Control your data and location settings"
          >
            <div className="mt-4">
              <ToggleItem
                label="Location Tracking"
                description="Allow CrowdSense to access your location for better recommendations"
                enabled={locationTracking}
                onChange={setLocationTracking}
              />
              <ToggleItem
                label="Emergency Sharing"
                description="Share your location with emergency services in case of an emergency"
                enabled={emergencySharing}
                onChange={setEmergencySharing}
              />
              <ToggleItem
                label="Accessibility"
                description="Enable accessibility features for better usability"
                enabled={accessibility}
                onChange={setAccessibility}
              />
            </div>
          </SettingsSection>

          {/* About */}
          <SettingsSection
            icon={Info}
            title="About CrowdSense"
            description="Version 1.0.0"
          >
            <div className="mt-4 space-y-3">
              <InfoRow label="Platform" value="Web Application" />
              <InfoRow label="Last Updated" value="March 17, 2026" />
              <InfoRow label="Data Source" value="Real-time crowd monitoring" />
              <button className="w-full px-4 py-3 mt-2 rounded-xl border border-cyan/20 text-cyan hover:bg-cyan/10 transition-all">
                View Privacy Policy
              </button>
            </div>
          </SettingsSection>
        </div>
      </div>
    </div>
  );
}

function SettingsSection({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: any;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl"
      style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-xl bg-cyan/10 border border-cyan/20">
          <Icon className="w-6 h-6 text-cyan" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg text-soft-white mb-1">{title}</h3>
          <p className="text-sm text-soft-white/60">{description}</p>
        </div>
      </div>
      {children}
    </motion.div>
  );
}

function ToggleItem({
  label,
  description,
  enabled,
  onChange,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-cyan/5 border border-cyan/10">
      <div className="flex-1">
        <h4 className="text-soft-white mb-1">{label}</h4>
        <p className="text-xs text-soft-white/60">{description}</p>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative w-14 h-7 rounded-full border transition-all ${
          enabled ? 'bg-cyan/30 border-cyan/50' : 'bg-cyan/10 border-cyan/20'
        }`}
        style={enabled ? { boxShadow: '0 4px 12px rgba(0, 229, 255, 0.3)' } : {}}
      >
        <motion.div
          className="absolute top-0.5 w-6 h-6 bg-cyan rounded-full"
          style={{ boxShadow: '0 2px 8px rgba(0, 229, 255, 0.5)' }}
          animate={{ left: enabled ? 28 : 2 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </button>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-cyan/5">
      <span className="text-sm text-soft-white/70">{label}</span>
      <span className="text-sm text-soft-white">{value}</span>
    </div>
  );
}