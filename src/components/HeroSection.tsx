import heroImage from "@/assets/hero-security.jpg";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional security guard in Kenya"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary border border-gold/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-body text-muted-foreground">
              Trusted by 500+ homes & businesses across Kenya
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Premium{" "}
            <span className="text-gradient-gold">Security</span>
            <br />
            Solutions for Kenya
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10 max-w-lg">
            From armed guards to smart CCTV systems and full home automation — we protect what matters most with cutting-edge technology and trained personnel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-md text-base font-semibold hover:opacity-90 transition-opacity shadow-gold"
            >
              Get Free Security Audit
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+254723134222"
              className="inline-flex items-center justify-center gap-2 border border-gold/30 text-foreground px-8 py-4 rounded-md text-base font-semibold hover:bg-secondary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              +254 723 134 222
            </a>
          </div>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default HeroSection;