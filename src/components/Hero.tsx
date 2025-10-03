import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '70% center' }}
        >
          <source src="/ernesto-video-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-white leading-tight">
            El Camino para Reconectar con tu Fuerza, tu Salud y tu Propósito
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
            Un programa de transformación integral diseñado para hombres que buscan superar el
            estancamiento y redescubrir energía, vitalidad y sentido
          </p>
          <div className="pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-cta hover:bg-cta-hover text-cta-foreground font-bold text-lg px-8 py-6 rounded-lg transition-all shadow-2xl hover:shadow-cta/50 hover:scale-105"
            >
              INICIA TU TRANSFORMACIÓN
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
