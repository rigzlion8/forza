import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-gold/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-xl font-display font-bold text-gradient-gold">
            Forza Security
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Free Quote
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-gold/20 px-4 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-md text-sm font-semibold text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;