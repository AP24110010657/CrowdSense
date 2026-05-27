import { Outlet, Link, useLocation } from 'react-router';
import { Home, Compass, Bell, Settings, MapPin, Route, Ticket, MessageSquare, Users } from 'lucide-react';

export function Root() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/safe-routes', icon: Route, label: 'Routes' },
    { path: '/tickets', icon: Ticket, label: 'Tickets' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/alerts', icon: Bell, label: 'Alerts' },
    { path: '/report', icon: MessageSquare, label: 'Report' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const mobileNavItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/safe-routes', icon: Route, label: 'Routes' },
    { path: '/tickets', icon: Ticket, label: 'Tickets' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/settings', icon: Settings, label: 'More' },
  ];

  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-cyan/20 bg-navy/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                {/* CrowdSense Logo */}
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10"
                >
                  {/* Location Pin Shape */}
                  <path 
                    d="M20 4C13.4 4 8 9.4 8 16C8 24 20 36 20 36C20 36 32 24 32 16C32 9.4 26.6 4 20 4Z" 
                    fill="url(#pinGradient)"
                    stroke="#00E5FF"
                    strokeWidth="2"
                  />
                  
                  {/* Inner Circle Background */}
                  <circle 
                    cx="20" 
                    cy="16" 
                    r="8" 
                    fill="#0B1C2C"
                    opacity="0.8"
                  />
                  
                  {/* Three People Icons Inside */}
                  {/* Person 1 - Left */}
                  <g opacity="0.9">
                    <circle cx="15" cy="14" r="1.5" fill="#00E5FF" />
                    <path 
                      d="M15 16.5C13.3 16.5 12 17.3 12 18.2V19.5H18V18.2C18 17.3 16.7 16.5 15 16.5Z" 
                      fill="#00E5FF"
                    />
                  </g>
                  
                  {/* Person 2 - Center (Highlighted) */}
                  <g>
                    <circle cx="20" cy="13.5" r="2" fill="#00E5FF" />
                    <path 
                      d="M20 16.5C17.8 16.5 16 17.5 16 18.7V20.5H24V18.7C24 17.5 22.2 16.5 20 16.5Z" 
                      fill="#00E5FF"
                    />
                  </g>
                  
                  {/* Person 3 - Right */}
                  <g opacity="0.9">
                    <circle cx="25" cy="14" r="1.5" fill="#00E5FF" />
                    <path 
                      d="M25 16.5C23.3 16.5 22 17.3 22 18.2V19.5H28V18.2C28 17.3 26.7 16.5 25 16.5Z" 
                      fill="#00E5FF"
                    />
                  </g>
                  
                  {/* Signal Waves - Left Side */}
                  <path 
                    d="M4 16C4 16 6 13 8 13" 
                    stroke="#00E5FF" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path 
                    d="M2 16C2 16 4 11 8 11" 
                    stroke="#00E5FF" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.2;0.6;0.2"
                      dur="2s"
                      begin="0.3s"
                      repeatCount="indefinite"
                    />
                  </path>
                  
                  {/* Signal Waves - Right Side */}
                  <path 
                    d="M36 16C36 16 34 13 32 13" 
                    stroke="#00E5FF" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path 
                    d="M38 16C38 16 36 11 32 11" 
                    stroke="#00E5FF" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.2;0.6;0.2"
                      dur="2s"
                      begin="0.3s"
                      repeatCount="indefinite"
                    />
                  </path>
                  
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="pinGradient" x1="20" y1="4" x2="20" y2="36">
                      <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#00E5FF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-cyan/30 blur-xl rounded-full" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-cyan tracking-wide">CrowdSense</h1>
                <p className="text-xs text-soft-white/60">Know The Crowd Before You Go</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-cyan/20 text-cyan shadow-lg shadow-cyan/20'
                        : 'text-soft-white/70 hover:text-cyan hover:bg-cyan/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-cyan/20 bg-navy/95 backdrop-blur-xl">
        <div className="flex items-center justify-around px-4 py-3">
          {mobileNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                  isActive
                    ? 'text-cyan'
                    : 'text-soft-white/70'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]' : ''}`} />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}