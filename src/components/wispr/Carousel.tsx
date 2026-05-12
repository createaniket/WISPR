import { useRef } from "react";
import { products } from "./Products";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Carousel = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container flex items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs uppercase tracking-mega text-primary font-semibold">The Lineup</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase leading-[0.95]">
            Five Balls. <span className="text-gold-gradient">One Standard.</span>
          </h2>
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            className="w-12 h-12 border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            className="w-12 h-12 border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:px-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))]"
      >
        {products.concat(products).map((p, i) => (
          <article
            key={`${p.name}-${i}`}
            className="snap-start shrink-0 w-[80vw] sm:w-[420px] group"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
              <img
                src={p.img}
                alt={`${p.name} cricket ball`}
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-mega text-primary mb-1">{p.tag}</div>
                  <div className="font-display text-3xl uppercase">{p.name}</div>
                </div>
                <span className="text-primary text-xl">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
