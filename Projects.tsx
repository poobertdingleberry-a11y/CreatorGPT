import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search, 
  Grid, 
  List,
  MoreHorizontal,
  Play,
  Image,
  Mic,
  FileText,
  Calendar,
  Folder
} from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "10 AI Tools That Will Change 2024",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop",
    status: "completed",
    hasScript: true,
    hasThumbnail: true,
    hasVoiceover: true,
    hasVideo: true,
    lastEdited: "2 hours ago",
    createdAt: "Dec 10, 2024"
  },
  {
    id: 2,
    title: "How I Made $10k with YouTube Shorts",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop",
    status: "processing",
    hasScript: true,
    hasThumbnail: true,
    hasVoiceover: true,
    hasVideo: false,
    lastEdited: "5 hours ago",
    createdAt: "Dec 8, 2024"
  },
  {
    id: 3,
    title: "The Ultimate Productivity Setup 2024",
    thumbnail: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400&h=225&fit=crop",
    status: "draft",
    hasScript: true,
    hasThumbnail: false,
    hasVoiceover: false,
    hasVideo: false,
    lastEdited: "1 day ago",
    createdAt: "Dec 5, 2024"
  },
  {
    id: 4,
    title: "Why Everyone is Switching to AI",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
    status: "draft",
    hasScript: false,
    hasThumbnail: false,
    hasVoiceover: false,
    hasVideo: false,
    lastEdited: "3 days ago",
    createdAt: "Dec 1, 2024"
  },
];

const Projects = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const statusColors = {
    draft: "bg-yellow-500/20 text-yellow-500",
    processing: "bg-blue-500/20 text-blue-500",
    completed: "bg-green-500/20 text-green-500"
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              All your videos in one place
            </p>
          </div>
          <Button variant="glow">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-dark pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2 ml-auto">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div className={cn(
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        )}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "glass-card-hover overflow-hidden opacity-0 animate-fade-in",
                viewMode === "list" && "flex gap-6 p-4"
              )}
              style={{ animationDelay: `${150 + index * 50}ms`, animationFillMode: 'forwards' }}
            >
              {/* Thumbnail */}
              <div className={cn(
                "relative group",
                viewMode === "grid" ? "aspect-video" : "w-48 h-28 flex-shrink-0 rounded-lg overflow-hidden"
              )}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="icon" variant="glass" className="rounded-full">
                    <Play className="w-6 h-6" fill="white" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className={cn(
                viewMode === "grid" ? "p-4" : "flex-1 flex flex-col justify-center"
              )}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground line-clamp-2">{project.title}</h3>
                  <Button size="icon" variant="ghost" className="flex-shrink-0 -mr-2">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium capitalize",
                    statusColors[project.status as keyof typeof statusColors]
                  )}>
                    {project.status}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.lastEdited}
                  </span>
                </div>

                {/* Asset indicators */}
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-6 h-6 rounded flex items-center justify-center",
                    project.hasScript ? "bg-green-500/20" : "bg-secondary"
                  )}>
                    <FileText className={cn(
                      "w-3 h-3",
                      project.hasScript ? "text-green-500" : "text-muted-foreground"
                    )} />
                  </div>
                  <div className={cn(
                    "w-6 h-6 rounded flex items-center justify-center",
                    project.hasThumbnail ? "bg-green-500/20" : "bg-secondary"
                  )}>
                    <Image className={cn(
                      "w-3 h-3",
                      project.hasThumbnail ? "text-green-500" : "text-muted-foreground"
                    )} />
                  </div>
                  <div className={cn(
                    "w-6 h-6 rounded flex items-center justify-center",
                    project.hasVoiceover ? "bg-green-500/20" : "bg-secondary"
                  )}>
                    <Mic className={cn(
                      "w-3 h-3",
                      project.hasVoiceover ? "text-green-500" : "text-muted-foreground"
                    )} />
                  </div>
                  <div className={cn(
                    "w-6 h-6 rounded flex items-center justify-center",
                    project.hasVideo ? "bg-green-500/20" : "bg-secondary"
                  )}>
                    <Play className={cn(
                      "w-3 h-3",
                      project.hasVideo ? "text-green-500" : "text-muted-foreground"
                    )} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* New Project Card */}
          <div 
            className="glass-card border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer flex items-center justify-center min-h-[200px] opacity-0 animate-fade-in"
            style={{ animationDelay: `${150 + projects.length * 50}ms`, animationFillMode: 'forwards' }}
          >
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground">Create New Project</h3>
              <p className="text-sm text-muted-foreground mt-1">Start from scratch</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
