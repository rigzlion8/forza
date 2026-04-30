import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-primary font-body text-sm tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6">
              Request a <span className="text-gradient-gold">Free Quote</span>
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-md">
              Tell us about your security needs and we'll provide a tailored solution with a free on-site assessment.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "+254 723 134 222", href: "tel:+254723134222" },
                { icon: Mail, label: "info@forzasecurity.co.ke", href: "mailto:info@forzasecurity.co.ke" },
                { icon: MapPin, label: "Westlands, Nairobi, Kenya", href: "#" },
                { icon: Clock, label: "Mon – Sat: 7:00 AM – 8:00 PM", href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="bg-secondary rounded-xl border border-gold/10 p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-input border border-gold/10 rounded-md px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="John Kamau"
                />
              </div>
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-input border border-gold/10 rounded-md px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-body text-muted-foreground mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-input border border-gold/10 rounded-md px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-body text-muted-foreground mb-1.5">
                Service Needed
              </label>
              <select className="w-full bg-input border border-gold/10 rounded-md px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">Select a service</option>
                <option>Security Guards</option>
                <option>CCTV Installation</option>
                <option>Doorbell Cameras</option>
                <option>Home Automation</option>
                <option>Complete Security Package</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-body text-muted-foreground mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-input border border-gold/10 rounded-md px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none placeholder:text-muted-foreground/50"
                placeholder="Describe your security needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-gold text-primary-foreground py-3.5 rounded-md font-semibold font-body hover:opacity-90 transition-opacity shadow-gold"
            >
              Request Free Security Audit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;