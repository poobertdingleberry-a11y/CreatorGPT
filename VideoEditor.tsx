import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  Scissors, 
  Type, 
  ZoomIn, 
  Volume2,
  Wand2,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Download,
  Settings,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const presets = [
  { id: "shorts", name: "YouTube Shorts", description: "9:16 vertical, quick cuts, captions", icon: "📱" },
  { id: "longform", name: "Long-form", description: "16:9 horizontal, smooth transitions", icon: "🎬" },
  { id: "podcast", name: "Podcast Style", description: "Split screen, waveforms, subtitles", icon: "🎙️" },
];

const aiFeatures = [
  { icon: Scissors, label: "Auto-cut Silences", description: "Remove dead air automatically" },
  { icon: Type, label: "AI Captions", description: "Generate accurate subtitles" },
  { icon: ZoomIn, label: "Smart Zoom", description: "Add engaging zoom effects" },
  { icon: Volume2, label: "Audio Sync", description: "Sync voiceover to video" },
];

const VideoEditor = () => {
  const [selectedPreset, setSelectedPreset] = useState("shorts");
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const [progress, setProgress] = useState(35);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-3xl font-bold text-foreground">
            AI Video <span className="gradient-text">Editor</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Auto-edit your videos with AI-powered tools
          </p>
        </div>

        {!hasVideo ? (
          /* Upload State */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Zone */}
            <div 
              className="glass-card p-8 border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer opacity-0 animate-fade-in"
              style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
              onClick={() => setHasVideo(true)}
            >
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-float">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Upload Your Video
                </h3>
                <p className="text-muted-foreground mb-6">
                  Drag & drop or click to browse
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports MP4, MOV, AVI up to 2GB
                </p>
              </div>
            </div>

            {/* Preset Selection */}
            <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              <h2 className="text-lg font-semibold text-foreground">Select Edit Style</h2>
              {presets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPreset(preset.id)}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left flex items-center gap-4",
                    selectedPreset === preset.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card/50 hover:border-primary/50"
                  )}
                >
                  <span className="text-3xl">{preset.icon}</span>
                  <div>
                    <h3 className="font-medium text-foreground">{preset.name}</h3>
                    <p className="text-sm text-muted-foreground">{preset.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Editor State */
          <div className="space-y-6">
            {/* Video Preview */}
            <div className="glass-card p-4 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <div className="aspect-video bg-secondary rounded-lg relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1280&h=720&fit=crop"
                  alt="Video preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="glass"
                    className="w-16 h-16 rounded-full"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </Button>
                </div>
                
                {/* Processing overlay */}
                <div className="absolute top-4 right-4 glass-card px-3 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-foreground">AI Processing</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-4">
                <div className="flex items-center gap-4 mb-2">
                  <Button size="icon" variant="ghost">
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="ghost"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button size="icon" variant="ghost">
                    <SkipForward className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground">0:35 / 2:48</span>
                  
                  <div className="flex-1" />
                  
                  <Button size="icon" variant="ghost">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Waveform placeholder */}
                <div className="mt-3 h-12 bg-secondary/50 rounded-lg flex items-center px-2">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/40 mx-px rounded-full"
                      style={{ height: `${20 + Math.random() * 60}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* AI Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              {aiFeatures.map((feature) => (
                <button
                  key={feature.label}
                  className="feature-card text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 feature-icon transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">{feature.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </button>
              ))}
            </div>

            {/* Export Options */}
            <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Ready to Export</h3>
                  <p className="text-sm text-muted-foreground">AI processing complete • 2:48 duration</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                  <Button variant="glow">
                    <Download className="w-4 h-4 mr-2" />
                    Export Video
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default VideoEditor;
