import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const components = [
  {
    title: "Button",
    description: "Clickable button component with various styles.",
    category: "Free",
    preview: <Button>Click me</Button>,
  },
  {
    title: "Card",
    description: "Versatile container for content and actions.",
    category: "Free",
    preview: (
      <Card className="p-4">
        <h3 className="font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground">Card content goes here</p>
      </Card>
    ),
  },
  {
    title: "Badge",
    description: "Small status indicator component.",
    category: "Premium",
    preview: <Badge>New</Badge>,
  },
];

export function FeaturedComponents() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Components</h2>
          <Button variant="outline" asChild>
            <Link href="/components">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {components.map((component) => (
            <Card key={component.title} className="p-6">
              <div className="mb-4">
                <Badge
                  variant={component.category === "Premium" ? "default" : "secondary"}
                >
                  {component.category}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">{component.title}</h3>
              <p className="text-muted-foreground mb-4">{component.description}</p>
              <div className="py-4 h-[6rem] px-4 bg-muted/50 relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] rounded-md p-3 flex items-center justify-center ring-1 ring-border overflow-hidden w-full">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="relative z-20">{component.preview}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}