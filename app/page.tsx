import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Package, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import ComponentShowcase from '@/components/component-showcase';
import { FeaturedComponents } from '@/components/featured-components';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
    <Navbar />
      <section className="px-4 py-20 md:py-32 bg-gradient-to-b from-background to-muted relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] rounded-md p-3 flex items-center justify-center ring-1 ring-border overflow-hidden w-full">
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        <div className="container mx-auto text-center z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Beautiful React Components
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build stunning applications with our modern, accessible, and customizable components.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/components">
                Browse Components <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Library?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Package className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Ready to Use</h3>
              <p className="text-muted-foreground">
                Pre-built components that work out of the box, saving you development time.
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">High Performance</h3>
              <p className="text-muted-foreground">
                Optimized for speed and efficiency, ensuring smooth user experiences.
              </p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Type Safe</h3>
              <p className="text-muted-foreground">
                Built with TypeScript for better development experience and fewer bugs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ComponentShowcase />
      <FeaturedComponents />
      <Footer />
    </>
  );
}