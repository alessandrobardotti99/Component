"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/client";
import { Github, Code2, Brush, Wand2, Laptop, Gem, Target } from "lucide-react";
import Link from "next/link";

const supabase = createClient();

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("Form Data:", { fullName, email, password });

    if (!email || !password || !fullName) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
        },
      });

      console.log("Supabase Response:", data, error);

      if (error) {
        setError(error.message);
      } else {
        alert("Account created successfully! Please check your email for confirmation.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Visual Elements */}
      <div className="hidden lg:flex w-7/12 bg-gradient-to-bl from-primary/5 via-primary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern rotate-180 [mask-image:radial-gradient(at_center,white,transparent_70%)]" />
        <div className="relative z-10 w-full max-w-[720px] mx-auto px-12 py-16 flex flex-col">
          <div>
            <div className="flex items-center gap-2.5 text-primary">
              <Code2 className="h-10 w-10" />
              <h1 className="text-2xl font-bold tracking-tight">ComponentCraft</h1>
            </div>
            {/* Hero Section */}
            <div className="mt-12 p-8 bg-background/60 rounded-2xl backdrop-blur-sm border border-border/50">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Create stunning interfaces</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of developers building beautiful applications with our component library
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Brush className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Beautiful Design</h3>
                    <p className="text-sm text-muted-foreground">Carefully crafted components that look great out of the box</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Wand2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Easy Customization</h3>
                    <p className="text-sm text-muted-foreground">Customize every aspect to match your brand perfectly</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Features List */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-6">Everything you need to build modern apps</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-background/40 rounded-xl border border-border/50">
                  <Laptop className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">Modern Tech Stack</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/40 rounded-xl border border-border/50">
                  <Gem className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">Premium Quality</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/40 rounded-xl border border-border/50">
                  <Target className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">Accessibility First</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/40 rounded-xl border border-border/50">
                  <span className="text-sm">Regular Updates</span>
                </div>
              </div>
            </div>
            {/* Bottom Banner */}
            <div className="mt-12 p-6 bg-primary/10 rounded-2xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg border border-border">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Start Building Today</h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant access to our complete library of components and start creating amazing user experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section - Sign Up Form */}
      <div className="w-full lg:w-5/12 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-[400px] p-6 md:p-8">
          <div className="flex flex-col space-y-1.5 text-center mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details to create your account
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Create a password" required />
            </div>
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className="w-full" type="button">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
