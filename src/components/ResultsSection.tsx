import { Button } from "@/components/ui/button";
import { TrendingDown, Activity, Target } from "lucide-react";
import ernestoRunningImage from "@/assets/ernesto-running.jpeg";

const ResultsSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="resultados" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="leading-tight">Energía, Vitalidad y Resultados Reales</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Esto no es teoría, son los resultados de un sistema probado. Nuestro enfoque integral genera cambios medibles y sostenibles que devuelven el control de tu vida.
            </p>

            {/* Metrics */}
            <div className="grid gap-6 pt-4">
              <div className="flex items-start space-x-4 bg-background p-6 rounded-xl shadow-md">
                <div className="bg-cta/10 p-3 rounded-lg">
                  <TrendingDown className="w-8 h-8 text-cta" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">-31 KILOS</h3>
                  <p className="text-muted-foreground">Más que un número: es libertad. Es la energía para jugar con tus hijos, la confianza para quitarte la camisa y la agilidad para moverte sin dolor.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-background p-6 rounded-xl shadow-md">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Activity className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">ENERGÍA AL 100%</h3>
                  <p className="text-muted-foreground">Despierta antes de la alarma. Despídete de la fatiga de la tarde y afronta cada día con una vitalidad que creías perdida para siempre.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-background p-6 rounded-xl shadow-md">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">CLARIDAD ABSOLUTA</h3>
                  <p className="text-muted-foreground">El fin del piloto automático. Reemplaza la niebla mental y la duda por un enfoque nítido y un propósito que te sirva de brújula en cada decisión.</p>
                </div>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-cta hover:bg-cta-hover text-cta-foreground font-semibold px-8 py-6 rounded-lg transition-all shadow-lg"
            >
              QUIERO ESTOS RESULTADOS
            </Button>
          </div>

          {/* Image */}
          <div>
            <img
              src={ernestoRunningImage}
              alt="Ernesto corriendo - Energía y vitalidad"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
