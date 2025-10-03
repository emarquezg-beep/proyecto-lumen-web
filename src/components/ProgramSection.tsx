import { Button } from "@/components/ui/button";
import ernestoGuerreroImage from "@/assets/ernesto-guerrero-2.jpeg";

const ProgramSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programa" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={ernestoGuerreroImage}
              alt="Ernesto en postura de guerrero"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="leading-tight">
              Construye tu Fuerza Interior y Exterior
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La postura del guerrero no es solo física, es un estado mental. Es el equilibrio entre la fuerza y la calma, entre la acción y el propósito. Proyecto Lumen es el entrenamiento para llevar esa mentalidad a cada área de tu vida.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Olvídate de los enfoques genéricos. Este programa es una síntesis única de metodologías probadas, filtrada a través de la experiencia auténtica de quien ya recorrió el camino. Te equipamos con las herramientas exactas para dejar atrás el estancamiento y construir la versión más fuerte de ti mismo.
            </p>
            <h3 className="text-xl font-bold text-foreground pt-2">
              Los 3 Pilares de tu Fortaleza:
            </h3>
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground">
                  <strong>CUERPO (Vitalidad y Resiliencia):</strong> No se trata de castigarte en el gimnasio, sino de construir un cuerpo que te sirva. Te guiaremos para desarrollar una fuerza funcional y una energía que te acompañe durante todo el día.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground">
                  <strong>MENTE (Claridad y Enfoque):</strong> El estrés y la ansiedad son el enemigo de tu progreso. Aprenderás a gestionar tu estado mental con técnicas prácticas de meditación y mindfulness que te devolverán la calma y el control.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground">
                  <strong>PROPÓSITO (Dirección y Legado):</strong> Un hombre sin una misión es un hombre a la deriva. Juntos, trabajaremos para definir el norte en tu brújula personal, alineando tus acciones diarias con lo que verdaderamente te importa.
                </p>
              </div>
            </div>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-cta hover:bg-cta-hover text-cta-foreground font-semibold px-8 py-6 rounded-lg transition-all shadow-lg"
            >
              DESCUBRE EL PROGRAMA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
