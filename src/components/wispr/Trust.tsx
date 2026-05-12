import { motion } from "framer-motion";
import { ShieldCheck, Activity, Trophy, Gem, Crosshair } from "lucide-react";

const trust = [
  { icon: ShieldCheck, title: "Match Quality", sub: "Tested & Approved" },
  { icon: Activity, title: "Consistent Bounce", sub: "Every Single Time" },
  { icon: Trophy, title: "Champions' Choice", sub: "Trusted by Players" },
  { icon: Gem, title: "Premium Materials", sub: "Built to Last" },
  { icon: Crosshair, title: "Built to Win", sub: "Made to Perform" },
];

export const Trust = () => {
  return (
    <section className="relative py-24 border-y border-border/60 bg-gradient-to-b from-background via-card/40 to-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">
          {trust.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center group relative"
            >
              <div className="w-16 h-16 mb-5 rounded-full flex items-center justify-center border border-border group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-500">
                <t.icon
                  className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-500"
                  strokeWidth={1.4}
                />
              </div>
              <div className="font-display text-base md:text-lg uppercase tracking-wider">{t.title}</div>
              <div className="text-[11px] uppercase tracking-mega text-muted-foreground mt-1.5">{t.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
