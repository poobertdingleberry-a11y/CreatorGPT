import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Lightbulb, 
  Sparkles, 
  Copy, 
  RefreshCw,
  Target,
  Users,
  TrendingUp,
  FileText,
  Check,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const niches = [
  "Tech & Gadgets",
  "Gaming",
  "Finance",
  "Lifestyle",
  "Education",
  "Entertainment",
  "Health & Fitness",
  "Travel",
];

const generatedIdeas = [
  {
    title: "10 AI Tools That Will Replace Your Job in 2024",
    hook: "Most people don't realize their job could be automated next month...",
    cta: "Drop a comment below with the tool that surprised you the most!",
    seoScore: 94,
  },
  {
    title: "I Tried AI for 30 Days - Here's What Happened",
    hook: "What if I told you AI could do in 5 minutes what takes you 5 hours?",
    cta: "Subscribe and hit the bell to see the full 30-day transformation!",
    seoScore: 89,
  },
  {
    title: "The $0 to $10,000 YouTube Strategy Nobody Talks About",
    hook: "I went from zero to ten thousand dollars in 90 days using this exact method...",
    cta: "Want the full blueprint? Link in the description!",
    seoScore: 92,
  },
];

const Scripts = () => {
  const [topic, setTopic] = useState("");
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedIdea, setSelectedIdea] = useState<number | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 2000);
  };

  const handleCopy = (index: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-3xl font-bold text-foreground">
            AI Script & Idea <span className="gradient-text">Generator</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Generate viral video ideas, hooks, and full scripts optimized for YouTube SEO
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Input Section */}
          <div className="space-y-6">
            {/* Topic Input */}
            <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <label className="block text-sm font-medium text-foreground mb-3">
                <Lightbulb className="w-4 h-4 inline mr-2" />
                Topic or Keyword
              </label>
              <Input
                placeholder="e.g., AI productivity tools, passive income..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="input-dark"
              />
            </div>

            {/* Niche Selection */}
            <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              <label className="block text-sm font-medium text-foreground mb-4">
                <Target className="w-4 h-4 inline mr-2" />
                Select Niche
              </label>
              <div className="flex flex-wrap gap-2">
                {niches.map((niche) => (
                  <button
                    key={niche}
                    onClick={() => setSelectedNiche(niche)}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm transition-all duration-200",
                      selectedNiche === niche
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {niche}
                  </button>
                ))}
              </div>
            </div>

            {/* Audience Type */}
            <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <label className="block text-sm font-medium text-foreground mb-4">
                <Users className="w-4 h-4 inline mr-2" />
                Target Audience
              </label>
              <div className="space-y-2">
                {["Beginners", "Intermediate", "Advanced", "General"].map((audience) => (
                  <button
                    key={audience}
                    className="w-full p-3 rounded-lg bg-secondary/50 text-left text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                  >
                    {audience}
                  </button>
                ))}
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
                  Generating Ideas...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Ideas
                </>
              )}
            </Button>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-2">
            {!showResults ? (
              <div className="glass-card p-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Ready to Generate Ideas
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Enter a topic and select your niche to generate viral video ideas, 
                  engaging hooks, and SEO-optimized scripts.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-foreground">Generated Ideas</h2>
                  <Button variant="outline" size="sm" onClick={handleGenerate}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Regenerate
                  </Button>
                </div>

                {generatedIdeas.map((idea, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedIdea(index)}
                    className={cn(
                      "glass-card-hover p-6 cursor-pointer animate-fade-in",
                      selectedIdea === index && "ring-2 ring-primary"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {idea.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-500">SEO Score: {idea.seoScore}%</span>
                        </div>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(index, idea.title);
                        }}
                      >
                        {copiedIndex === index ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Hook</p>
                        <p className="text-sm text-foreground">{idea.hook}</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">CTA</p>
                        <p className="text-sm text-foreground">{idea.cta}</p>
                      </div>
                    </div>

                    {selectedIdea === index && (
                      <div className="mt-4 pt-4 border-t border-border flex gap-3 animate-fade-in">
                        <Button variant="glow" className="flex-1">
                          <FileText className="w-4 h-4 mr-2" />
                          Generate Full Script
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Use This Idea
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Scripts;
