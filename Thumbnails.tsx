import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Sparkles, 
  Download, 
  RefreshCw, 
  Type, 
  Palette, 
  Smile,
  Wand2,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const styles = [
  { id: "mrbeast", name: "MrBeast", color: "from-yellow-500 to-red-500" },
  { id: "tech", name: "Tech Review", color: "from-blue-500 to-cyan-500" },
  { id: "documentary", name: "Documentary", color: "from-gray-600 to-gray-800" },
  { id: "gaming", name: "Gaming", color: "from-purple-500 to-pink-500" },
  { id: "lifestyle", name: "Lifestyle", color: "from-rose-400 to-orange-400" },
  { id: "education", name: "Education", color: "from-green-500 to-emerald-500" },
];

const generatedThumbnails = [
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=640&h=360&fit=crop",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=360&fit=crop",
  "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=640&h=360&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=360&fit=crop",
];

const Thumbnails = () => {
  const [title, setTitle] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("mrbeast");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-3xl font-bold text-foreground">
            AI Thumbnail <span className="gradient-text">Generator</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Create high-CTR thumbnails that get clicks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Controls */}
          <div className="space-y-6">
            {/* Title Input */}
            <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <label className="block text-sm font-medium text-foreground mb-3">
                Video Title
              </label>
              <Input
                placeholder="Enter your video title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-dark text-lg h-12"
              />
            </div>

            {/* Style Selection */}
            <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              <label className="block text-sm font-medium text-foreground mb-4">
                Thumbnail Style
              </label>
              <div className="grid grid-cols-3 gap-3">
                {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={cn(
                      "relative p-4 rounded-xl border-2 transition-all duration-200",
                      selectedStyle === style.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className={cn(
                      "w-full h-8 rounded-lg bg-gradient-to-r mb-2",
                      style.color
                    )} />
                    <span className="text-sm font-medium text-foreground">{style.name}</span>
                    {selectedStyle === style.id && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Edit Options */}
            <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <label className="block text-sm font-medium text-foreground mb-4">
                Quick Edit Options
              </label>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start gap-2">
                  <Type className="w-4 h-4" />
                  Change Text
                </Button>
                <Button variant="outline" className="justify-start gap-2">
                  <Smile className="w-4 h-4" />
                  Face Expression
                </Button>
                <Button variant="outline" className="justify-start gap-2">
                  <Palette className="w-4 h-4" />
                  Adjust Colors
                </Button>
                <Button variant="outline" className="justify-start gap-2">
                  <Wand2 className="w-4 h-4" />
                  Add Effects
                </Button>
              </div>
            </div>

            {/* Generate Button */}
            <Button 
              size="xl" 
              variant="glow"
              className="w-full opacity-0 animate-fade-in"
              style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Thumbnails
                </>
              )}
            </Button>
          </div>

          {/* Right: Generated Thumbnails */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Generated Thumbnails</h2>
              <span className="text-sm text-muted-foreground">1280 × 720</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {generatedThumbnails.map((thumb, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedThumbnail(index)}
                  className={cn(
                    "relative aspect-video rounded-xl overflow-hidden cursor-pointer transition-all duration-200 group",
                    selectedThumbnail === index
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "hover:scale-[1.02]"
                  )}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                      <Button size="sm" variant="glass" className="flex-1">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  {selectedThumbnail === index && (
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Selected Thumbnail Actions */}
            {selectedThumbnail !== null && (
              <div className="mt-6 p-4 glass-card flex items-center justify-between animate-scale-in">
                <div>
                  <p className="font-medium text-foreground">Thumbnail {selectedThumbnail + 1} selected</p>
                  <p className="text-sm text-muted-foreground">Ready to download</p>
                </div>
                <Button variant="glow">
                  <Download className="w-4 h-4 mr-2" />
                  Download HD
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Thumbnails;
