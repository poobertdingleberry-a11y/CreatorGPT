import { MoreHorizontal, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecentProjectProps {
  title: string;
  thumbnail: string;
  status: "draft" | "processing" | "completed";
  lastEdited: string;
  delay?: number;
}

export const RecentProject = ({ 
  title, 
  thumbnail, 
  status, 
  lastEdited,
  delay = 0 
}: RecentProjectProps) => {
  const statusColors = {
    draft: "bg-yellow-500/20 text-yellow-500",
    processing: "bg-blue-500/20 text-blue-500",
    completed: "bg-green-500/20 text-green-500"
  };

  return (
    <div 
      className="glass-card-hover p-4 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex gap-4">
        <div className="relative w-32 h-18 rounded-lg overflow-hidden bg-secondary flex-shrink-0 group">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Play className="w-8 h-8 text-white" fill="white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground truncate">{title}</h4>
          <p className="text-sm text-muted-foreground mt-1">Edited {lastEdited}</p>
          <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium capitalize ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <Button variant="ghost" size="icon" className="flex-shrink-0">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
