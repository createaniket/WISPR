import { Button } from "@/components/ui/button";
import heroAd from "@/assets/wispr-heritage.jpeg";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden grain"
    >
      {/* Full-bleed brand ad */}
      <div className="absolute inset-0">
        <img
          src={heroAd}
          alt="WISPR Sports — Built on heritage. Made for the game. Signature 156g cricket ball."
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1536}
          fetchPriority="high"
        />
        {/* Subtle bottom fade so CTAs read well */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />
      </div>

      {/* Top eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="container relative z-10 pt-32 md:pt-40"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/40 bg-background/40 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-mega text-primary font-semibold">
            Rise. Perform. Win.
          </span>
        </div>
      </motion.div>

      {/* Bottom CTA stack — overlaid on the brand ad */}
      <div className="mt-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="container pb-16 md:pb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                Hand-stitched. Match-tested. Built for the relentless pursuit of
                perfection. Championship-grade equipment for athletes who refuse
                to settle.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="xl">
                  <a href="#products">Shop The Range</a>
                </Button>
                <Button asChild variant="outlineGold" size="xl">
                  <a href="#about">Our Story</a>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-6 md:gap-8 text-xs uppercase tracking-mega text-muted-foreground">
              <div>
                <div className="text-2xl md:text-3xl font-display text-foreground">5</div>
                <div>Variants</div>
              </div>
              <span className="h-10 w-px bg-border" />
              <div>
                <div className="text-2xl md:text-3xl font-display text-foreground">156g</div>
                <div>Signature</div>
              </div>
              <span className="hidden sm:block h-10 w-px bg-border" />
              <div className="hidden sm:block">
                <div className="text-2xl md:text-3xl font-display text-foreground">2024</div>
                <div>Estd.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-mega text-muted-foreground z-10">
        <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  );
};
