import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center px-6 py-20 lg:h-screen lg:py-0">
      <article className="max-w-lg space-y-4 text-center">
        <h1 className="text-3xl font-bold lg:text-4xl">
          Welcome to my eCommerce Website
        </h1>
        <p className="text-sm leading-6 text-neutral-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          fugiat facilis nulla dolore quod commodi officia doloremque labore vel
          cumque!
        </p>

        <div className="space-x-6">
          <Button asChild variant="default">
            <Link href="/studio">Studio</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </article>
    </section>
  );
}
