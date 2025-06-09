import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-left">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Discover Unique Designs
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Shopline offers a curated collection of art, decor, and lifestyle products for the modern home. Explore items that inspire.
                </p>
              </div>
              <Link href="/products" passHref>
                <Button size="lg" className="px-8 py-6 text-lg">
                  Explore Products
                </Button>
              </Link>
            </div>
            <Image
              src="https://placehold.co/600x500.png"
              alt="Hero Product Showcase"
              width={600}
              height={500}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg"
              data-ai-hint="modern art decor"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
            Why Shop With Us?
          </h2>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="grid gap-1 p-4 rounded-lg bg-background shadow-md">
              <h3 className="font-headline text-lg font-bold text-primary">Curated Selection</h3>
              <p className="text-sm text-muted-foreground">
                Handpicked items that blend artistry with functionality.
              </p>
            </div>
            <div className="grid gap-1 p-4 rounded-lg bg-background shadow-md">
              <h3 className="font-headline text-lg font-bold text-primary">Quality Craftsmanship</h3>
              <p className="text-sm text-muted-foreground">
                We partner with artisans and designers who prioritize quality.
              </p>
            </div>
            <div className="grid gap-1 p-4 rounded-lg bg-background shadow-md">
              <h3 className="font-headline text-lg font-bold text-primary">Seamless Experience</h3>
              <p className="text-sm text-muted-foreground">
                Easy browsing, secure checkout, and dedicated customer support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
