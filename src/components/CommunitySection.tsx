import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import ernestoHumanoImage from "@/assets/ernesto-humano.jpeg";

const CommunitySection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="comunidad" className="section-padding bg-dark-section text-dark-section-foreground">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src={ernestoHumanoImage}
              alt="Ernesto - Guía de Proyecto Lumen"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-10 h-10 text-cta" />
              <h2 className="text-dark-section-foreground">La Hermandad</h2>
            </div>
            <p className="text-xl text-dark-section-foreground/90 leading-relaxed">
              El viaje de un hombre a menudo se recorre en solitario. Proyecto Lumen rompe con eso. Esto no es solo un programa, es el círculo de apoyo que quizás nunca tuviste.
            </p>
            <p className="text-lg text-dark-section-foreground/80 leading-relaxed">
              Aquí encontrarás un espacio seguro para bajar la guardia, compartir tus desafíos sin juicios y celebrar tus victorias con hombres que entienden exactamente por lo que estás pasando. Porque el verdadero crecimiento se acelera cuando lo compartes.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                <p className="text-dark-section-foreground/90">
                  <strong>Círculos de Confianza Semanales:</strong> Sesiones grupales facilitadas para compartir avances, superar obstáculos y mantenerte responsable (accountable).
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                <p className="text-dark-section-foreground/90">
                  <strong>Conexiones Reales:</strong> Construye relaciones significativas con otros hombres que, al igual que tú, están comprometidos con ser la mejor versión de sí mismos.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0" />
                <p className="text-dark-section-foreground/90">
                  <strong>Una Red de Apoyo para Toda la Vida:</strong> Más allá del programa, te unes a una red de "hermanos" que te respaldarán en los desafíos futuros.
                </p>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-cta hover:bg-cta-hover text-cta-foreground font-semibold px-8 py-6 rounded-lg transition-all shadow-lg"
            >
              ÚNETE A LA HERMANDAD
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
