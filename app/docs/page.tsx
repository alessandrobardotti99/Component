"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";

const installationSteps = [
  {
    title: "Install dependencies",
    code: "npm install @radix-ui/react-icons class-variance-authority clsx tailwind-merge",
  },
  {
    title: "Add Tailwind CSS configuration",
    code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... other color configurations
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`,
  },
  {
    title: "Add CSS variables",
    code: `@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... other variables */
  }
}`,
  },
];

const usageExamples = {
  button: {
    title: "Button",
    description: "A versatile button component with multiple variants.",
    code: `import { Button } from "@/components/ui/button"
 
export default function ButtonDemo() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
}`,
  },
  dialog: {
    title: "Dialog",
    description: "A modal dialog component for important actions.",
    code: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
 
export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            Dialog description goes here.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  form: {
    title: "Form",
    description: "A form component with validation and error handling.",
    code: `import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})
 
export function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`,
  },
};

export default function DocsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="container py-10 m-auto">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        
        <Tabs defaultValue="installation" className="space-y-8">
          <TabsList>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
          </TabsList>

          <TabsContent value="installation">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <p className="text-muted-foreground mb-6">
                  Follow these steps to install and set up the component library in your project.
                </p>
              </div>

              {installationSteps.map((step, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{step.code}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(step.code, `step-${index}`)}
                    >
                      {copied === `step-${index}` ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="usage">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
                <p className="text-muted-foreground mb-6">
                  Learn how to use our components with these practical examples.
                </p>
              </div>

              {Object.entries(usageExamples).map(([key, example]) => (
                <Card key={key} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                  <p className="text-muted-foreground mb-4">{example.description}</p>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{example.code}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(example.code, `example-${key}`)}
                    >
                      {copied === `example-${key}` ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="components">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Available Components</h2>
                <p className="text-muted-foreground mb-6">
                  Explore our comprehensive list of components and their documentation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Free Components</h3>
                  <ul className="space-y-2">
                    <li>• Button - Multiple variants and states</li>
                    <li>• Input - Text input with variants</li>
                    <li>• Card - Content container</li>
                    <li>• Badge - Status indicators</li>
                    <li>• Alert - Notification messages</li>
                    <li>• Tabs - Content organization</li>
                    <li>• Dialog - Modal windows</li>
                    <li>• Avatar - User images</li>
                    <li>• Progress - Loading indicators</li>
                    <li>• Toast - Notifications</li>
                    <li>• Dropdown - Menu lists</li>
                    <li>• Toggle - Switch controls</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Premium Components</h3>
                  <ul className="space-y-2">
                    <li>• Data Table - Advanced data grids</li>
                    <li>• Calendar - Date selection</li>
                    <li>• Command Menu - Command palette</li>
                    <li>• Form Builder - Dynamic forms</li>
                    <li>• Charts - Data visualization</li>
                    <li>• Kanban Board - Task management</li>
                    <li>• Rich Text Editor - Content editing</li>
                    <li>• File Upload - File handling</li>
                    <li>• Carousel - Image sliders</li>
                    <li>• Color Picker - Color selection</li>
                    <li>• Multi-select - Advanced selection</li>
                    <li>• Tree View - Hierarchical data</li>
                  </ul>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}