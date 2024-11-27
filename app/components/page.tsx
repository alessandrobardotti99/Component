"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Lock } from "lucide-react";
import ComponentPreview from "@/components/component-preview";
import { components } from "@/lib/components-data";

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredComponents = components.filter((component) => {
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-10 m-auto">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="md:max-w-xs"
        />
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="space-y-4"
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="free">Free</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component) => (
          <Card key={component.name} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{component.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {component.description}
                </p>
              </div>
              <Badge variant={component.type === "premium" ? "default" : "secondary"}>
                {component.type}
              </Badge>
            </div>
            
            <div className="rounded-lg mb-4 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
              <ComponentPreview component={component} />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" variant="outline">
                  View Code
                  {component.type === "premium" && (
                    <Lock className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{component.name}</DialogTitle>
                </DialogHeader>
                {component.type === "free" ? (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{component.code}</code>
                  </pre>
                ) : (
                  <div className="text-center py-8">
                    <Lock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Premium Component</h3>
                    <p className="text-muted-foreground mb-4">
                      Subscribe to access this component's source code
                    </p>
                    <Button asChild>
                      <a href="/pricing">View Pricing</a>
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </Card>
        ))}
      </div>
    </div>
  );
}