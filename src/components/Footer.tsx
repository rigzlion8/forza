import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gold/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-7 h-7 text-primary" />
              <span className="text-lg font-display font-bold text-gradient-gold">
                Forza Security
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-body max-w-sm leading-relaxed">
              Kenya's premier integrated security solutions provider. Combining trained personnel with smart technology to protect homes, businesses, and communities since 2015.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><a href="#services" className="hover:text-primary transition-colors">Security Guards</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">CCTV Installation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Doorbell Cameras</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Home Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 Forza Security Kenya. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body">
            Licensed by the Private Security Regulatory Authority (PSRA)
          </p>
          <a href="https://maishatech.co.ke" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground font-body hover:text-primary transition-colors">
            Powered by <span className="text-primary">Maishatech</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;