import { useState } from 'react';
import { MessageSquare, AlertTriangle, Camera, MapPin, Send, CheckCircle, Flag, Bug, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const reportTypes = [
  { id: 'crowd', label: 'Crowd Issue', icon: AlertTriangle, color: '#FF4D4D' },
  { id: 'safety', label: 'Safety Concern', icon: Flag, color: '#FFC857' },
  { id: 'bug', label: 'App Bug', icon: Bug, color: '#00E5FF' },
  { id: 'feedback', label: 'Feedback', icon: Lightbulb, color: '#2ECC71' },
];

export function Report() {
  const [selectedType, setSelectedType] = useState('crowd');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setLocation('');
      setDescription('');
    }, 3000);
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl text-soft-white mb-2">Report & Feedback</h1>
          <p className="text-soft-white/60">Help us improve CrowdSense and keep everyone safe</p>
        </div>

        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 rounded-2xl border border-safe-green/30 bg-safe-green/10 backdrop-blur-xl flex items-center gap-4"
            style={{ boxShadow: '0 8px 32px rgba(46, 204, 113, 0.2)' }}
          >
            <CheckCircle className="w-8 h-8 text-safe-green" />
            <div>
              <h3 className="text-lg text-safe-green mb-1">Report Submitted!</h3>
              <p className="text-sm text-soft-white/80">
                Thank you for your contribution. Our team will review it shortly.
              </p>
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div
                className="p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl"
                style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.15)' }}
              >
                {/* Report Type Selection */}
                <div className="mb-6">
                  <label className="block text-sm text-soft-white/70 mb-3">Report Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {reportTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selectedType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`p-4 rounded-xl border transition-all ${
                            isSelected
                              ? 'border-cyan/40 bg-cyan/10'
                              : 'border-cyan/20 bg-cyan/5 hover:border-cyan/30'
                          }`}
                        >
                          <Icon
                            className="w-6 h-6 mb-2"
                            style={{ color: isSelected ? type.color : 'rgba(245, 247, 250, 0.6)' }}
                          />
                          <div className={`text-sm ${isSelected ? 'text-soft-white' : 'text-soft-white/70'}`}>
                            {type.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Location Input */}
                <div className="mb-6">
                  <label className="block text-sm text-soft-white/70 mb-2">Location (Optional)</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Where did this occur?"
                      className="w-full pl-11 pr-4 py-3 bg-cyan/5 border border-cyan/20 rounded-xl text-soft-white placeholder-soft-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm text-soft-white/70 mb-2">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Please provide details..."
                    rows={6}
                    className="w-full px-4 py-3 bg-cyan/5 border border-cyan/20 rounded-xl text-soft-white placeholder-soft-white/40 focus:outline-none focus:ring-2 focus:ring-cyan/50 resize-none"
                    required
                  />
                </div>

                {/* Photo Upload */}
                <div className="mb-6">
                  <label className="block text-sm text-soft-white/70 mb-2">Add Photos (Optional)</label>
                  <div className="border-2 border-dashed border-cyan/20 rounded-xl p-8 text-center hover:border-cyan/40 transition-all cursor-pointer bg-cyan/5">
                    <Camera className="w-8 h-8 text-cyan mx-auto mb-2" />
                    <p className="text-sm text-soft-white/70 mb-1">Click to upload photos</p>
                    <p className="text-xs text-soft-white/50">PNG, JPG up to 10MB</p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-cyan text-navy rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all"
                  style={{ boxShadow: '0 8px 24px rgba(0, 229, 255, 0.4)' }}
                >
                  <Send className="w-5 h-5" />
                  Submit Report
                </button>
              </div>
            </form>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6">
            {/* Guidelines */}
            <div
              className="p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-xl"
              style={{ boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-cyan" />
                <h3 className="text-lg text-soft-white">Reporting Guidelines</h3>
              </div>
              <ul className="space-y-3 text-sm text-soft-white/80">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full mt-1.5" />
                  <span>Be specific and accurate in your reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full mt-1.5" />
                  <span>Include photos when possible for verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full mt-1.5" />
                  <span>Reports are reviewed within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan rounded-full mt-1.5" />
                  <span>Your identity remains anonymous</span>
                </li>
              </ul>
            </div>

            {/* Community Impact */}
            <div
              className="p-6 rounded-2xl border border-safe-green/20 bg-safe-green/10 backdrop-blur-xl"
              style={{ boxShadow: '0 8px 32px rgba(46, 204, 113, 0.1)' }}
            >
              <h3 className="text-lg text-soft-white mb-4">Community Impact</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-soft-white/70">Reports This Week</span>
                    <span className="text-cyan">1,247</span>
                  </div>
                  <div className="h-2 bg-cyan/10 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-soft-white/70">Issues Resolved</span>
                    <span className="text-safe-green">892</span>
                  </div>
                  <div className="h-2 bg-cyan/10 rounded-full overflow-hidden">
                    <div className="h-full bg-safe-green rounded-full" style={{ width: '71%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div
              className="p-6 rounded-2xl border border-alert-red/20 bg-alert-red/10 backdrop-blur-xl"
              style={{ boxShadow: '0 8px 32px rgba(255, 77, 77, 0.1)' }}
            >
              <h3 className="text-lg text-alert-red mb-2">Emergency?</h3>
              <p className="text-sm text-soft-white/80 mb-4">
                For immediate safety concerns, please contact emergency services.
              </p>
              <button className="w-full px-4 py-3 bg-alert-red text-soft-white rounded-xl hover:scale-105 transition-all">
                Call Emergency: 911
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
