import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Lightbulb, 
  Image, 
  Mic, 
  Video, 
  FolderOpen,
  Crown,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Lightbulb, label: "Ideas & Scripts", path: "/scripts" },
  { icon: Image, label: "Thumbnails", path: "/thumbnails" },
  { icon: Mic, label: "Voiceovers", path: "/voiceovers" },
  { icon: Video, label: "Video Editor", path: "/editor" },
  { icon: FolderOpen, label: "Projects", path: "/projects" },
];

export const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar sidebar-glow border-r border-border/50 flex flex-col z-50 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6 border-b border-border/50">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center animate-glow">
            <span className="text-xl font-black text-primary-foreground">Y</span>
          </div>
          {!collapsed && (
            <div className="animate-fade-in">
              <h1 className="text-lg font-bold text-foreground">YouTubeGPT</h1>
              <p className="text-xs text-muted-foreground">AI Creator Suite</p>
            </div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-hide">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "nav-item",
                isActive && "nav-item-active",
                "opacity-0 animate-fade-in-left"
              )}
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-all duration-200",
                isActive && "text-primary"
              )} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Pro Upgrade Card */}
      {!collapsed && (
        <div className="p-4">
          <div className="glass-card p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <Crown className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Upgrade to Pro</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Unlimited generations & HD exports
            </p>
            <Link 
              to="/pricing"
              className="block w-full py-2 px-4 bg-primary text-primary-foreground text-center text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors btn-glow"
            >
              Upgrade Now
            </Link>
          </div>
        </div>
      )}

      {/* Bottom section */}
      <div className="p-4 border-t border-border/50">
        <Link
          to="/settings"
          className={cn(
            "nav-item",
            location.pathname === "/settings" && "nav-item-active"
          )}
        >
          <Settings className="w-5 h-5" />
          {!collapsed && <span>Settings</span>}
        </Link>
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="nav-item w-full mt-2"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};
