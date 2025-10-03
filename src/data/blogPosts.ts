export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "El Poder de la Mentalidad del Guerrero",
    slug: "poder-mentalidad-guerrero",
    excerpt: "Descubre cómo cultivar una mentalidad resiliente que te permita enfrentar cualquier desafío con fuerza y claridad.",
    content: `
# El Poder de la Mentalidad del Guerrero

La mentalidad del guerrero no se trata de agresión o confrontación. Se trata de disciplina, resiliencia y la capacidad de mantenerte firme ante la adversidad.

## ¿Qué es la Mentalidad del Guerrero?

Es el equilibrio perfecto entre la fuerza y la calma. Es saber cuándo actuar y cuándo observar. Es tener el coraje de enfrentar tus miedos y la sabiduría de conocer tus límites.

## Los Pilares de esta Mentalidad

### 1. Disciplina Diaria
La disciplina no es castigo, es libertad. Cada pequeña acción consistente te acerca a la versión más fuerte de ti mismo.

### 2. Resiliencia Mental
Los obstáculos son inevitables. La diferencia está en cómo respondes a ellos. Un guerrero no se rinde, se adapta.

### 3. Propósito Claro
Sin un norte, cualquier dirección parece correcta. Define tu misión y deja que guíe cada decisión.

## Cómo Cultivar esta Mentalidad

1. **Empieza el día con intención**: Antes de revisar tu teléfono, toma 5 minutos para meditar o establecer tus prioridades.
2. **Abraza la incomodidad**: El crecimiento vive fuera de tu zona de confort.
3. **Celebra las pequeñas victorias**: Cada paso cuenta en el camino de la transformación.

La mentalidad del guerrero se construye día a día, decisión tras decisión. ¿Estás listo para comenzar?
    `,
    author: "Ernesto Márquez",
    date: "2025-09-15",
    readTime: "5 min",
    category: "Mentalidad",
    image: "/api/placeholder/800/400"
  },
  {
    id: "2",
    title: "5 Hábitos Matutinos que Transformarán tu Día",
    slug: "5-habitos-matutinos-transformadores",
    excerpt: "La forma en que empiezas tu día determina cómo lo vives. Estos 5 hábitos te darán el impulso que necesitas.",
    content: `
# 5 Hábitos Matutinos que Transformarán tu Día

La mañana es sagrada. Es el momento donde estableces el tono para las siguientes horas. Aquí te comparto los 5 hábitos que cambiaron mi vida.

## 1. Hidratación Inmediata

Antes de café, antes de comida: agua. Tu cuerpo acaba de pasar 7-8 horas sin hidratación. Dale lo que necesita.

**Acción**: Prepara un vaso de agua junto a tu cama la noche anterior.

## 2. Movimiento Consciente

No necesitas una rutina de 2 horas. 10 minutos de estiramientos o yoga son suficientes para despertar tu cuerpo.

**Acción**: Elige 3-5 estiramientos simples y hazlos cada mañana.

## 3. Meditación o Respiración

5 minutos de silencio pueden cambiar tu estado mental para todo el día.

**Acción**: Usa una app de meditación o simplemente siéntate en silencio y respira profundamente.

## 4. Planificación del Día

Identifica tus 3 prioridades principales. No 10, no 20. Tres.

**Acción**: Escribe en un papel las 3 cosas más importantes que debes lograr hoy.

## 5. Nutrición Inteligente

Tu desayuno no debe ser una bomba de azúcar. Proteína, grasas saludables y carbohidratos complejos.

**Acción**: Prepara tu desayuno la noche anterior si tienes poco tiempo en la mañana.

## El Efecto Compuesto

Ninguno de estos hábitos es revolucionario por sí solo. Pero juntos, día tras día, crean una transformación imparable.

Empieza con uno. Domínalo. Luego añade el siguiente. La consistencia vence a la intensidad.
    `,
    author: "Ernesto Márquez",
    date: "2025-09-22",
    readTime: "6 min",
    category: "Hábitos",
    image: "/api/placeholder/800/400"
  },
  {
    id: "3",
    title: "Por Qué la Comunidad es Clave en tu Transformación",
    slug: "comunidad-clave-transformacion",
    excerpt: "Nadie se transforma solo. Descubre por qué rodearte de las personas correctas acelera tu crecimiento.",
    content: `
# Por Qué la Comunidad es Clave en tu Transformación

He aprendido algo fundamental en mi viaje: la transformación personal no es un camino solitario.

## El Mito del Lobo Solitario

La cultura popular glorifica al hombre que lo hace todo solo. Pero la realidad es diferente. Los hombres más exitosos y realizados tienen algo en común: una red de apoyo sólida.

## Los Beneficios de una Comunidad

### Accountability (Responsabilidad)
Es fácil romper promesas que te haces a ti mismo. Es mucho más difícil fallarle a tu hermandad.

### Perspectiva
Cuando estás en medio de la tormenta, no puedes ver con claridad. Tus hermanos pueden ofrecerte la perspectiva que necesitas.

### Motivación
Ver a otros hombres enfrentar sus desafíos y superarlos te recuerda que tú también puedes.

### Conexión Auténtica
En un mundo de interacciones superficiales, tener un espacio donde puedes ser vulnerable es invaluable.

## Cómo Encontrar tu Tribu

1. **Busca valores compartidos**: No se trata de tener los mismos intereses, sino los mismos principios.
2. **Sé vulnerable primero**: La autenticidad atrae autenticidad.
3. **Contribuye antes de pedir**: Ofrece valor a tu comunidad antes de esperar recibirlo.

## La Hermandad en Proyecto Lumen

En Proyecto Lumen, la comunidad no es un extra, es el corazón del programa. Los círculos de confianza semanales crean un espacio donde los hombres pueden:

- Compartir sus luchas sin juicio
- Celebrar sus victorias con quienes entienden el esfuerzo
- Recibir apoyo en los momentos difíciles
- Construir amistades que duran toda la vida

No tienes que hacerlo solo. De hecho, no deberías.
    `,
    author: "Ernesto Márquez",
    date: "2025-09-28",
    readTime: "7 min",
    category: "Comunidad",
    image: "/api/placeholder/800/400"
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
