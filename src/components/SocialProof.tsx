import { Trophy } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="bg-accent py-6">
      <div className="container-custom">
        <div className="flex items-center justify-center space-x-4 text-accent-foreground">
          <Trophy className="w-8 h-8" />
          <p className="text-xl md:text-2xl font-bold">
            -31 KILOS: El resultado comprobado de nuestro fundador
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
