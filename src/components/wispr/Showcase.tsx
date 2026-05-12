import { motion } from "framer-motion";
import talent from "@/assets/wispr-talent.jpeg";
import heritage from "@/assets/wispr-heritage.jpeg";
import handstitched from "@/assets/wispr-handstitched.jpeg";

const features = [
  {
    img: talent,
    eyebrow: "01 — Our Story",
    title: "Built For The Players. Not The Few.",
    desc: "Cricket was never short of talent — it was controlled by a handful of manufacturers, and slowly the game got expensive. WISPR exists to put championship-grade equipment back into every cricketer's hands.",
  },
  {
    img: heritage,
    eyebrow: "02 — Heritage",
    title: "Built On Heritage. Made For The Game.",
    desc: "Crafted with precision using premium materials and time-honoured techniques. The Signature 156g — solid hide, gold-foil stamped, engineered for consistent performance from the first ball to the last.",
    reverse: true,
  },
  {
    img: handstitched,
    eyebrow: "03 — Hand Stitched Collection",
    title: "Crafted For Traditional Cricket.",
    desc: "Supreme, County, League and Classic — four hand-stitched grades built around English alum-tanned leather, high seam retention and shape consistency that holds up across the longest formats.",
  },
];

export const Showcase = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <div className="container space-y-28 md:space-y-40">
        {features.map((f) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center ${
              f.reverse ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="relative">
              <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden border border-border/80 shadow-deep">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-out"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/15" />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-6 -z-10 bg-radial-spot blur-3xl opacity-70" />
            </div>

            <div className="max-w-lg">
              <span className="text-[11px] uppercase tracking-mega text-primary font-semibold">{f.eyebrow}</span>
              <h3 className="mt-5 font-display text-4xl md:text-6xl uppercase leading-[0.95]">
                {f.title}
              </h3>
              <div className="hairline my-8 max-w-xs" />
              <p className="text-muted-foreground text-base md:text-lg">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
