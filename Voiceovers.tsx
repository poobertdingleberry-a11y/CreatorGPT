import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause,
  Download, 
  RefreshCw, 
  Volume2,
  Gauge,
  Mic,
  Sparkles,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

const voices = [
  { id: "male-energetic", name: "Alex", gender: "Male", style: "Energetic", avatar: "🎙️" },
  { id: "female-calm", name: "Sarah", gender: "Female", style: "Calm", avatar: "🎧" },
  { id: "male-documentary", name: "James", gender: "Male", style: "Documentary", avatar: "📻" },
  { id: "female-hype", name: "Maya", gender: "Female", style: "Hype", avatar: "🔊" },
  { id: "male-warm", name: "David", gender: "Male", style: "Warm", avatar: "🎤" },
  { id: "female-professional", name: "Emma", gender: "Female", style: "Professional", avatar: "🎵" },
];

const Voiceovers = () => {
  const [text, setText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("male-energetic");
  const [speed, setSpeed] = useState([1.0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 2500);
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-3xl font-bold text-foreground">
            AI Voiceover <span className="gradient-text">Generator</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Professional AI voices for your YouTube videos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Script Input */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium text-foreground">
                  Your Script
                </label>
                <span className="text-sm text-muted-foreground">
                  {text.length} / 5000 characters
                </span>
              </div>
              <Textarea
                placeholder="Paste or type your video script here... The AI will convert this text into a natural-sounding voiceover."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="input-dark min-h-[300px] text-base resize-none"
              />
            </div>

            {/* Audio Controls */}
            <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              <h3 className="text-sm font-medium text-foreground mb-6">Voice Settings</h3>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Gauge className="w-4 h-4 text-muted-foreground" />
                    <label className="text-sm text-muted-foreground">Speed</label>
                    <span className="ml-auto text-sm font-medium text-foreground">{speed[0]}x</span>
                  </div>
                  <Slider
                    value={speed}
                    onValueChange={setSpeed}
                    min={0.5}
                    max={2.0}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-muted-foreground">Slow</span>
                    <span className="text-xs text-muted-foreground">Fast</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Volume2 className="w-4 h-4 text-muted-foreground" />
                    <label className="text-sm text-muted-foreground">Emotion</label>
                  </div>
                  <div className="flex gap-2">
                    {["Neutral", "Excited", "Serious"].map((emotion) => (
                      <Button 
                        key={emotion} 
                        variant="outline" 
                        size="sm"
                        className="flex-1"
                      >
                        {emotion}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <Button 
              size="xl" 
              variant="glow"
              className="w-full opacity-0 animate-fade-in"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
              onClick={handleGenerate}
              disabled={isGenerating || !text.trim()}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Generating Voiceover...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Voiceover
                </>
              )}
            </Button>

            {/* Generated Audio Player */}
            {hasGenerated && (
              <div className="glass-card p-6 animate-scale-in">
                <h3 className="text-sm font-medium text-foreground mb-4">Generated Voiceover</h3>
                <div className="flex items-center gap-4">
                  <Button
                    size="icon"
                    variant="glow"
                    className="w-14 h-14 rounded-full"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6 ml-1" />
                    )}
                  </Button>
                  
                  <div className="flex-1">
                    <div className="h-12 bg-secondary/50 rounded-lg flex items-center px-4">
                      {/* Waveform visualization */}
                      <div className="flex items-center gap-1 h-full w-full">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-primary/30 rounded-full transition-all duration-100"
                            style={{
                              height: `${20 + Math.random() * 60}%`,
                              opacity: isPlaying ? 1 : 0.5
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>0:00</span>
                      <span>2:34</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      MP3
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      WAV
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Voice Selection */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}>
            <h2 className="text-lg font-semibold text-foreground mb-4">Select Voice</h2>
            <div className="space-y-3">
              {voices.map((voice) => (
                <button
                  key={voice.id}
                  onClick={() => setSelectedVoice(voice.id)}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left flex items-center gap-4",
                    selectedVoice === voice.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card/50 hover:border-primary/50"
                  )}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                    {voice.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{voice.name}</span>
                      <span className={cn(
                        "px-2 py-0.5 rounded-full text-xs",
                        voice.gender === "Male" 
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-pink-500/20 text-pink-400"
                      )}>
                        {voice.gender}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{voice.style}</p>
                  </div>
                  <Button size="icon" variant="ghost" className="flex-shrink-0">
                    <Play className="w-4 h-4" />
                  </Button>
                </button>
              ))}
            </div>

            {/* Voice Preview Card */}
            <div className="mt-6 glass-card p-4">
              <div className="flex items-center gap-3 mb-3">
                <Mic className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Voice Preview</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Click the play button on any voice to hear a sample
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Voiceovers;
