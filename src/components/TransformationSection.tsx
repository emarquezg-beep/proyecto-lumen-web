import beforeImage from "@/assets/ernesto-111-kg.png";
import afterImage from "@/assets/ernesto-80-kg.jpeg";

const TransformationSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">Un Guía que ya Recorrió el Camino</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No te hablaré desde la teoría, sino desde la experiencia. Yo estuve exactamente donde tú podrías estar ahora. Esta es mi historia, no para presumir, sino para demostrarte que el cambio es posible.
          </p>
        </div>

        {/* Before & After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={beforeImage}
                alt="Ernesto antes - 111 kg (245 lbs)"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-bold">
                ANTES
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">111 kg (245 lbs)</h3>
              <p className="text-muted-foreground">
                Atrapado en la inercia. La ansiedad era mi estado normal y la frustración mi compañera diaria. Sabía lo que tenía que hacer, pero no podía encontrar la fuerza para empezar.
              </p>
            </div>
          </div>

          {/* After */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={afterImage}
                alt="Ernesto después - 80 kg (176 lbs)"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold">
                DESPUÉS
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">80 kg (176 lbs)</h3>
              <p className="text-muted-foreground">
                Dueño de mi energía y mi propósito. Fuerte, resiliente y con una claridad mental que me permite vivir cada día con intención. Corrí una media maratón, pero la verdadera victoria fue interna.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <blockquote className="text-xl text-foreground italic leading-relaxed">
            "Toqué fondo y usé ese suelo para impulsarme. Aprendí a cerrar la brecha entre saber y hacer, integrando un sistema que transformó mi cuerpo, mi mente y mi espíritu. Ahora, mi única misión es entregarte el mapa que yo dibujé en mi propio viaje, para que tu camino de regreso a ti mismo sea más directo y poderoso."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
