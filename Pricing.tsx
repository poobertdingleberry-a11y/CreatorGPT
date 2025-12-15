import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic AI tools",
    icon: Zap,
    features: [
      "5 AI thumbnail generations/month",
      "3 voiceover generations/month",
      "Basic script generation",
      "Watermarked exports",
      "Community support"
    ],
    cta: "Current Plan",
    popular: false,
    disabled: true
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Everything you need to grow",
    icon: Crown,
    features: [
      "Unlimited thumbnail generations",
      "Unlimited HD voiceovers",
      "Full video editor access",
      "No watermarks",
      "Priority AI processing",
      "Advanced SEO optimization",
      "Export in all formats",
      "Priority support"
    ],
    cta: "Upgrade to Pro",
    popular: true,
    disabled: false
  },
  {
    name: "Team",
    price: "$99",
    period: "per month",
    description: "For agencies and teams",
    icon: Building2,
    features: [
      "Everything in Pro",
      "5 team members",
      "Multiple channels",
      "Shared project library",
      "Team collaboration tools",
      "API access",
      "Custom branding",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    popular: false,
    disabled: false
  }
];

const Pricing = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to upload — powered by AI. Select the plan that fits your creative journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "glass-card p-8 relative opacity-0 animate-fade-in",
                plan.popular && "ring-2 ring-primary"
              )}
              style={{ animationDelay: `${100 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4",
                  plan.popular ? "bg-primary" : "bg-secondary"
                )}>
                  <plan.icon className={cn(
                    "w-8 h-8",
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  )} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{plan.name}</h2>
                <p className="text-muted-foreground mt-1">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "glow" : "outline"}
                className="w-full"
                size="lg"
                disabled={plan.disabled}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          <p className="text-muted-foreground">
            All plans include a 7-day money-back guarantee. Cancel anytime.
          </p>
          <p className="text-muted-foreground mt-2">
            Need a custom plan? <a href="#" className="text-primary hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Pricing;
