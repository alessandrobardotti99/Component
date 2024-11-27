"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const components = {
  button: (
    <div className="flex gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
  input: <Input placeholder="Type here..." />,
  badge: (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </div>
  ),
  progress: <Progress value={60} />,
  avatar: (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  alert: (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>This is an important message.</AlertDescription>
    </Alert>
  ),
  dropdown: (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  tabs: (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  ),
  card: (
    <Card className="p-4">
      <h3 className="font-semibold">Card Title</h3>
      <p className="text-sm text-muted-foreground">Card content</p>
    </Card>
  ),
  "data-table": (
    <div className="text-center p-4 bg-white dark:bg-black dark:text-white rounded-lg border shadow-md">
      Premium Component Preview
    </div>
  ),
  calendar: (
     <div className="text-center p-4 bg-white dark:bg-black dark:text-white rounded-lg border shadow-md">
      Premium Component Preview
    </div>
  ),
  command: (
     <div className="text-center p-4 bg-white dark:bg-black dark:text-white rounded-lg  border shadow-md">
      Premium Component Preview
    </div>
  ),
  form: (
     <div className="text-center p-4 bg-white dark:bg-black dark:text-white rounded-lg  border shadow-md">
      Premium Component Preview
    </div>
  ),
  charts: (
     <div className="text-center p-4 bg-white dark:bg-black dark:text-white rounded-lg  border shadow-md">
      Premium Component Preview
    </div>
  ),
  kanban: (
     <div className="text-center p-4 bg-white dark:bg-black dark:text-white rounded-lg  border shadow-md">
      Premium Component Preview
    </div>
  ),
  "rich-editor": (
     <div className="text-center p-4 bg-white dark:bg-black dark:text-white rounded-lg  border shadow-md">
      Premium Component Preview
    </div>
  ),
  "file-upload": (
     <div className="text-center p-4 bg-white dark:bg-black dark:text-white rounded-lg  border shadow-md">
      Premium Component Preview
    </div>
  ),
  carousel: (
     <div className="text-center p-4 bg-white dark:bg-black dark:text-white rounded-lg  border shadow-md">
      Premium Component Preview
    </div>
  ),
  "color-picker": (
     <div className="text-center p-4 bg-white dark:bg-black dark:text-white rounded-lg  border shadow-md">
      Premium Component Preview
    </div>
  ),
};

export default function ComponentPreview({ component }: { component: any }) {
  const Preview = components[component.id as keyof typeof components];
  return <div className="relative h-60 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] rounded-md p-3 flex items-center justify-center ring-1 ring-border overflow-hidden w-full">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="m-8">{Preview}</div>
    </div>;
}