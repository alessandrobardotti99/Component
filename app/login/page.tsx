"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Github, Package, Blocks, Box, Sparkles, Layers, Palette, Shield } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        setError(error.message);
      } else {
        // Redirect to dashboard on successful login
        router.push("/dashboard");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Visual Elements */}
      <div className="hidden lg:flex w-7/12 bg-gradient-to-br from-primary/5 via-primary/10 to-background relative overflow-hidden xl:grid xl:place-items-center ">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(at_center,white,transparent_70%)]" />
        <div className="relative z-10 w-full max-w-[720px] mx-auto px-12 py-16 flex flex-col justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2.5 text-primary">
              <Package className="h-6 w-6" />
              <h1 className="text-2xl font-bold tracking-tight">Component</h1>
            </div>
            <p className="mt-6 text-xl/relaxed text-muted-foreground max-w-[420px]">
              Your ultimate destination for beautiful React components
            </p>
            {/* Feature Grid */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 bg-background/60 rounded-xl backdrop-blur-sm border border-border/50 hover:border-border/80 transition-colors">
                <Blocks className="h-6 w-6 mb-3 text-primary" />
                <h3 className="font-semibold mb-1.5">100+ Components</h3>
                <p className="text-sm text-muted-foreground">
                  Extensive library of customizable components
                </p>
              </div>
              <div className="p-6 bg-background/60 rounded-xl backdrop-blur-sm border border-border/50 hover:border-border/80 transition-colors">
                <Box className="h-6 w-6 mb-3 text-primary" />
                <h3 className="font-semibold mb-1.5">Ready to Use</h3>
                <p className="text-sm text-muted-foreground">
                  Production-ready, accessible components
                </p>
              </div>
            </div>
            {/* Bottom Features */}
            <div className="mt-12 grid grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 bg-background/40 rounded-lg backdrop-blur-sm border border-border/50">
                <Sparkles className="h-5 w-5 mb-2 text-primary" />
                <span className="text-sm font-medium">Modern UI</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-background/40 rounded-lg backdrop-blur-sm border border-border/50">
                <Layers className="h-5 w-5 mb-2 text-primary" />
                <span className="text-sm font-medium">Composable</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-background/40 rounded-lg backdrop-blur-sm border border-border/50">
                <Palette className="h-5 w-5 mb-2 text-primary" />
                <span className="text-sm font-medium">Themeable</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-background/40 rounded-lg backdrop-blur-sm border border-border/50">
                <Shield className="h-5 w-5 mb-2 text-primary" />
                <span className="text-sm font-medium">Type-Safe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-5/12 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-[400px] p-6 md:p-8">
          <div className="flex flex-col space-y-1.5 text-center mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="Enter your password" required />
              </div>
            </div>

            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
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
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
