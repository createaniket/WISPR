import { motion } from "framer-motion";
import range from "@/assets/wispr-range.jpeg";
import catalogue from "@/assets/wispr-catalogue.jpeg";
import { Button } from "@/components/ui/button";

export const Heritage = () => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden border-y border-border/60">
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute inset-0 bg-mesh opacity-40" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <div className="eyebrow mb-5">Catalogue 2026</div>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.92]">
            The Full <span className="text-gold-gradient">Red Range</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl">
            Machine-stitched precision and hand-stitched heritage. Every grade
            engineered for a specific moment in the game — from park cricket to
            long-format competition.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          {/* Wide catalogue billboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative group overflow-hidden border border-border/80 shadow-deep aspect-[4/5] lg:aspect-auto"
          >
            <img
              src={range}
              alt="WISPR Pro machine-stitched red cricket ball range — Signature, Heritage, Club, Edge, Strike"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/15" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-background via-background/70 to-transparent">
              <div className="text-[11px] uppercase tracking-mega text-primary font-semibold mb-2">
                Machine Stitched · 5 Grades
              </div>
              <div className="font-display text-2xl md:text-3xl uppercase">
                Signature · Heritage · Club · Edge · Strike
              </div>
            </div>
          </motion.div>

          {/* Tall catalogue page */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 relative group overflow-hidden border border-border/80 shadow-deep aspect-[3/4] lg:aspect-auto"
          >
            <img
              src={catalogue}
              alt="WISPR Sports Red Range catalogue — built on heritage, engineered for performance"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/15" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-background via-background/70 to-transparent">
              <div className="text-[11px] uppercase tracking-mega text-primary font-semibold mb-2">
                Wispr Pro · Performance Series
              </div>
              <div className="font-display text-2xl md:text-3xl uppercase mb-4">
                Built On Heritage. Engineered For Performance.
              </div>
              <Button asChild variant="outlineGold" size="sm">
                <a href="#products">View The Range →</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
