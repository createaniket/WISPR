import { motion } from "framer-motion";
import { Scissors, Layers, Target, Award } from "lucide-react";

const items = [
  { icon: Scissors, title: "Hand Stitched", desc: "Every seam crafted by master artisans for unmatched precision." },
  { icon: Award, title: "Premium Leather", desc: "Finest grade leather sourced for superior feel and longevity." },
  { icon: Layers, title: "Solid Cork Core", desc: "Engineered cork core ensures consistent bounce, ball after ball." },
  { icon: Target, title: "Perfect Balance", desc: "Calibrated weight distribution for ultimate control and swing." },
];

export const WhyWispr = () => {
  return (
    <section
      id="about"
      className="relative py-28 md:py-40 border-y border-border/60 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[11px] uppercase tracking-mega text-primary font-semibold">Why WISPR</span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95]">
            Engineered <span className="text-gold-gradient">Without</span> Compromise
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Four pillars define every ball that leaves our workshop. No shortcuts. No exceptions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-card p-8 md:p-10 group hover:bg-background transition-colors duration-500"
            >
              <span className="absolute top-5 right-5 text-[10px] uppercase tracking-mega text-foreground/30 font-medium">
                0{i + 1}
              </span>
              <div className="w-14 h-14 mb-7 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 group-hover:rotate-3 transition-all duration-500">
                <it.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl uppercase mb-3 group-hover:text-primary transition-colors duration-500">
                {it.title}
              </h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
