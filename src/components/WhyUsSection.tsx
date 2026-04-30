import { CheckCircle, ShieldCheck, Headphones, Award, Wrench, Smartphone } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully licensed by the Private Security Regulatory Authority (PSRA) of Kenya.",
  },
  {
    icon: Headphones,
    title: "24/7 Support & Monitoring",
    description: "Round-the-clock control room monitoring and emergency rapid response teams.",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: "Our CCTV and automation installers are factory-trained and certified.",
  },
  {
    icon: Wrench,
    title: "Free Site Survey",
    description: "We assess your property and recommend the most effective security solution — free of charge.",
  },
  {
    icon: Smartphone,
    title: "Remote Access",
    description: "Monitor your cameras, locks, and alarms from anywhere using our mobile app.",
  },
  {
    icon: CheckCircle,
    title: "2-Year Warranty",
    description: "All equipment comes with a comprehensive 2-year warranty and free maintenance.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            The <span className="text-gradient-gold">Forza</span> Advantage
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            We don't just install cameras — we engineer complete security ecosystems tailored to Kenya's unique security landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-secondary border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;