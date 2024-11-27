"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ComponentShowcase() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <section className="py-20 px-4 bg-muted/50 relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] rounded-md p-3 flex items-center justify-center ring-1 ring-border overflow-hidden w-full">
 <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 relative z-20">
          Interactive Component Preview
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-20"
        >
          <Card className="p-6 max-w-2xl mx-auto">
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="form">Form Example</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="form" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <Button className="w-full">Sign In</Button>
              </TabsContent>
              <TabsContent value="settings" className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Enable Notifications</Label>
                  <Switch
                    id="notifications"
                    checked={isEnabled}
                    onCheckedChange={setIsEnabled}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme Preference</Label>
                  <select
                    id="theme"
                    className="w-full p-2 rounded-md border"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </select>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}