import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Access to all free components",
      "Basic documentation",
      "Community support",
      "GitHub access",
      "Regular updates",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for professionals",
    features: [
      "All free components",
      "Premium components",
      "Source code access",
      "Advanced documentation",
      "Priority support",
      "Early access to new components",
      "Custom theme builder",
      "Team collaboration tools",
    ],
    buttonText: "Subscribe",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "All Pro features",
      "Custom component development",
      "Dedicated support",
      "SLA guarantees",
      "Custom integration support",
      "Training sessions",
      "Security audit reports",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

export default function PricingPage() {
  return (
    <div className="container py-20 m-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p className="text-xl text-muted-foreground">
          Choose the plan that's right for you
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`p-8 flex flex-col ${
              plan.popular ? "border-primary shadow-lg" : ""
            }`}
          >
            {plan.popular && (
              <div className="px-3 py-1 text-sm text-primary bg-primary/10 rounded-full w-fit mb-4">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <div className="mt-4 mb-8">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
            </div>
            <p className="text-muted-foreground mb-6">{plan.description}</p>
            <div className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-4 w-4 mr-3 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button className="w-full" variant={plan.buttonVariant}>
              {plan.buttonText}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}