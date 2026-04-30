import cctvImg from "@/assets/cctv-service.jpg";
import homeAutoImg from "@/assets/home-automation.jpg";
import doorbellImg from "@/assets/doorbell-camera.jpg";
import heroImage from "@/assets/hero-security.jpg";
import { Shield, Camera, Home, Bell, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Security Guard Services",
    description:
      "Highly trained, vetted guards for residential, commercial, and event security. 24/7 patrol and rapid response teams across Nairobi and beyond.",
    features: ["Armed & unarmed guards", "24/7 patrol teams", "Event security", "VIP protection"],
    image: heroImage,
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description:
      "HD & 4K CCTV systems with remote monitoring. Same-day installation by certified technicians with 2-year warranty on all equipment.",
    features: ["4K Ultra HD cameras", "Night vision", "Remote phone access", "Cloud storage"],
    image: cctvImg,
  },
  {
    icon: Bell,
    title: "Smart Doorbell Cameras",
    description:
      "See and speak to visitors from anywhere. AI-powered motion detection, two-way audio, and instant mobile notifications.",
    features: ["Two-way audio", "AI motion alerts", "Night vision", "Easy install"],
    image: doorbellImg,
  },
  {
    icon: Home,
    title: "Home Automation",
    description:
      "Transform your home into a smart fortress. Control lights, locks, alarms, and cameras from a single app on your phone.",
    features: ["Smart locks & lights", "Automated alarms", "Voice control", "Energy savings"],
    image: homeAutoImg,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Complete <span className="text-gradient-gold">Protection</span> Ecosystem
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            We combine trained security personnel with cutting-edge technology to deliver unmatched protection for your home and business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-secondary rounded-xl border border-gold/10 overflow-hidden hover:border-gold/30 transition-all duration-500"
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              )}
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;