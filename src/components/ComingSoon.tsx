import { useState } from "react";

const ComingSoon = () => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contraseña simple para acceso temporal
    if (password === "lumen2025") {
      setIsUnlocked(true);
      localStorage.setItem("siteUnlocked", "true");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  // Verificar si ya está desbloqueado
  if (isUnlocked || localStorage.getItem("siteUnlocked") === "true") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-primary/95 to-accent flex items-center justify-center">
      <div className="container-custom px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/logo-proyecto-lumen.png" 
              alt="Proyecto Lumen" 
              className="h-20 md:h-24 w-auto"
            />
          </div>

          {/* Coming Soon Message */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Próximamente
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Estamos preparando algo extraordinario para ti
            </p>
          </div>

          {/* Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Proyecto Lumen
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Un programa de transformación integral diseñado para hombres que buscan 
              reconectar con su fuerza, salud y propósito.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-white/70">
            <p className="text-sm">¿Tienes preguntas? Contáctanos:</p>
            <a 
              href="mailto:info@proyectolumen.com" 
              className="text-cta hover:text-cta-hover transition-colors font-semibold"
            >
              info@proyectolumen.com
            </a>
          </div>

          {/* Admin Access (oculto visualmente) */}
          <details className="pt-8">
            <summary className="text-xs text-white/30 cursor-pointer hover:text-white/50 transition-colors">
              Acceso
            </summary>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full max-w-xs mx-auto px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white/60"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-cta hover:bg-cta-hover text-white rounded-lg transition-colors font-semibold"
              >
                Entrar
              </button>
            </form>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
