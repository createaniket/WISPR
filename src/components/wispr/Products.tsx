import { motion } from "framer-motion";
import red from "@/assets/ball-red.jpg";
import white from "@/assets/ball-white.jpg";
import pink from "@/assets/ball-pink.jpg";
import orange from "@/assets/ball-orange.jpg";
import tennis from "@/assets/ball-tennis.jpg";

export const products = [
  { name: "Red", tag: "Match / Test", desc: "The classic red leather ball — engineered for traditional formats.", img: red },
  { name: "White", tag: "Match / Test", desc: "Built for limited-overs cricket with maximum visibility.", img: white },
  { name: "Pink", tag: "Day / Night", desc: "Floodlight-ready performance for the longest formats.", img: pink },
  { name: "Orange", tag: "Intermediate", desc: "Trusted by intermediate players for consistent play.", img: orange },
  { name: "Tennis", tag: "Training / Practice", desc: "Premium tennis ball for training, practice and street cricket.", img: tennis },
];

export const Products = () => {
  return (
    <section id="products" className="relative py-28 md:py-40 bg-section">
      <div className="absolute inset-x-0 top-0 hairline opacity-40" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <div className="eyebrow mb-5">The Range</div>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.92]">
              Crafted for <br /> <span className="text-gold-gradient">Every Format</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground md:text-right">
            From floodlit Tests to backyard nets — five precision-built balls,
            one uncompromising standard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="card-premium group relative overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={`WISPR ${p.name} cricket ball`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute inset-0 bg-radial-spot opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="absolute top-5 left-5 text-[10px] uppercase tracking-mega text-primary font-semibold border border-primary/40 px-3 py-1.5 backdrop-blur-md bg-background/40">
                  {p.tag}
                </span>
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-mega text-foreground/60 font-medium">
                  0{i + 1}
                </span>
              </div>
              <div className="p-7 md:p-8 flex items-end justify-between gap-4 border-t border-border/60">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl uppercase">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs">{p.desc}</p>
                </div>
                <span className="text-primary text-2xl translate-x-0 group-hover:translate-x-2 transition-transform duration-500">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
