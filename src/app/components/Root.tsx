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
                <MapPin className="w-8 h-8 text-cyan" />
                <div className="absolute inset-0 bg-cyan/30 blur-lg rounded-full" />
              </div>
              <div>
                <h1 className="text-xl text-cyan tracking-wide">CrowdSense</h1>
                <p className="text-xs text-soft-white/60">Know the crowd before you go</p>
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