import { Shield, Users, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Shield, value: "500+", label: "Properties Protected" },
  { icon: Users, value: "200+", label: "Trained Guards" },
  { icon: MapPin, value: "15+", label: "Counties Covered" },
  { icon: Clock, value: "24/7", label: "Monitoring & Response" },
];

const StatsSection = () => {
  return (
    <section className="py-16 border-y border-gold/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground font-body mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;