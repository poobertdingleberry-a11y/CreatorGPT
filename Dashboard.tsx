import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickAction } from "@/components/dashboard/QuickAction";
import { RecentProject } from "@/components/dashboard/RecentProject";
import { 
  Image, 
  Mic, 
  Video, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Clock,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back, <span className="gradient-text">Creator</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          From idea to upload — powered by AI.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Videos Created"
          value="24"
          change="+12% this month"
          changeType="positive"
          icon={Video}
          delay={100}
        />
        <StatCard
          title="Thumbnails Generated"
          value="86"
          change="+24% this month"
          changeType="positive"
          icon={Image}
          delay={150}
        />
        <StatCard
          title="Hours Saved"
          value="142"
          change="Using AI automation"
          changeType="neutral"
          icon={Clock}
          delay={200}
        />
        <StatCard
          title="AI Credits"
          value="850"
          change="1000 total"
          changeType="neutral"
          icon={Zap}
          delay={250}
        />
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Quick Actions</h2>
          <Button variant="ghost" size="sm">View all tools</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickAction
            title="Generate Thumbnail"
            description="Create eye-catching thumbnails with AI"
            icon={Image}
            path="/thumbnails"
            delay={300}
          />
          <QuickAction
            title="Create Voiceover"
            description="Professional AI voices for your videos"
            icon={Mic}
            path="/voiceovers"
            delay={350}
          />
          <QuickAction
            title="Generate Script"
            description="AI-powered scripts and video ideas"
            icon={Lightbulb}
            path="/scripts"
            delay={400}
          />
          <QuickAction
            title="Edit Video"
            description="Auto-edit with captions and effects"
            icon={Video}
            path="/editor"
            delay={450}
          />
        </div>
      </div>

      {/* Recent Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Recent Projects</h2>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <div className="space-y-4">
            <RecentProject
              title="10 AI Tools That Will Change 2024"
              thumbnail="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop"
              status="completed"
              lastEdited="2 hours ago"
              delay={500}
            />
            <RecentProject
              title="How I Made $10k with YouTube Shorts"
              thumbnail="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop"
              status="processing"
              lastEdited="5 hours ago"
              delay={550}
            />
            <RecentProject
              title="The Ultimate Productivity Setup 2024"
              thumbnail="https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=300&h=200&fit=crop"
              status="draft"
              lastEdited="1 day ago"
              delay={600}
            />
          </div>
        </div>

        {/* Channel Stats */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '650ms', animationFillMode: 'forwards' }}>
          <h2 className="text-xl font-semibold text-foreground mb-6">Channel Insights</h2>
          <div className="glass-card p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">+23%</p>
                <p className="text-sm text-muted-foreground">View growth</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12.4K</p>
                <p className="text-sm text-muted-foreground">Subscribers</p>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Top performing video</p>
              <p className="text-foreground font-medium">10 AI Tools That Will Change 2024</p>
              <p className="text-sm text-primary mt-1">156K views • 8.2% CTR</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
