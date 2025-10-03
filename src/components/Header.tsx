import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo-proyecto-lumen.png" 
                alt="Proyecto Lumen" 
                className="h-12 md:h-14 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("programa")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Programa
            </button>
            <button
              onClick={() => scrollToSection("resultados")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection("comunidad")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Comunidad
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contacto
            </button>
            <Link
              to="/blog"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-cta hover:bg-cta-hover text-cta-foreground font-semibold px-6 py-2 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              INICIA TU TRANSFORMACIÓN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-sm shadow-lg">
            <nav className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("programa")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Programa
              </button>
              <button
                onClick={() => scrollToSection("resultados")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection("comunidad")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Comunidad
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Contacto
              </button>
              <Link
                to="/blog"
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-cta hover:bg-cta-hover text-cta-foreground font-semibold w-full"
              >
                INICIA TU TRANSFORMACIÓN
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
