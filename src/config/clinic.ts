export const clinic = {
  // === IDENTIDAD ===
  name: "Fisioterapia Lourdes Benítez",
  tagline: "Especialista en INDIBA y fisioterapia deportiva en Badajoz",
  description: "Centro de fisioterapia en Badajoz con más de 6 años de experiencia. Especialistas en tratamiento INDIBA, fisioterapia deportiva, osteopatía y ATM. Ex-coordinadora Sanitas Madrid.",

  // === PALETA (extraída del logo) ===
  colors: {
    primary: "#2DD4BF",      // Turquesa del logo
    secondary: "#1F2937",    // Gris oscuro/carbón
    accent: "#14B8A6",       // Teal más intenso
    neutral: "#F0FDFA",      // Fondo turquesa muy claro
  },

  // === CONTACTO ===
  phone: "665 80 60 46",
  whatsapp: "+34665806046",
  whatsappMessage: "Hola Lourdes, me gustaría pedir cita para una sesión de fisioterapia.",
  email: "info@fisioterapialourdesbenitez.com",

  // === UBICACIÓN ===
  address: {
    street: "C. Prim, 24",
    city: "Badajoz",
    province: "Badajoz",
    postalCode: "06001",
    country: "España",
  },
  googleMapsUrl: "https://maps.google.com/?q=C.+Prim,+24,+06001+Badajoz",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.8!2d-6.9706!3d38.8794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sC.%20Prim%2C%2024%2C%2006001%20Badajoz!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses",
  coordinates: { lat: 38.8794, lng: -6.9706 },

  // === HORARIOS ===
  schedule: [
    { days: "Lunes", hours: "8:00 - 13:00, 17:00 - 21:00" },
    { days: "Martes", hours: "8:00 - 17:30" },
    { days: "Miércoles", hours: "8:00 - 13:00, 17:00 - 21:00" },
    { days: "Jueves", hours: "8:00 - 16:30" },
    { days: "Viernes", hours: "8:00 - 15:00" },
    { days: "Sábado - Domingo", hours: "Cerrado" },
  ],

  // === REDES SOCIALES ===
  social: {
    instagram: "https://instagram.com/fisioterapia_lourdesbenitez",
    facebook: "https://facebook.com/fisioloubengo",
    linkedin: null as string | null,
    tiktok: null as string | null,
  },

  // === RESEÑAS GOOGLE ===
  reviews: {
    rating: 5.0,
    count: 150,
    url: "https://www.google.com/maps/place/Fisioterapia+Lourdes+Ben%C3%ADtez",
    featured: [
      {
        author: "Samuel Talan",
        rating: 5,
        text: "Increíble profesional. Me ayudó a recuperarme de una lesión de rodilla y además me dio apoyo mental durante todo el proceso de recuperación. Muy recomendada.",
        date: "hace 2 semanas",
      },
      {
        author: "Virginia Barcos",
        rating: 5,
        text: "Llevaba tiempo con molestias y después del tratamiento con INDIBA los resultados fueron visibles desde la primera sesión. Lourdes es una gran profesional.",
        date: "hace 1 mes",
      },
      {
        author: "Saki Rodríguez",
        rating: 5,
        text: "Tenía un problema de mandíbula que me causaba muchos dolores de cabeza. Después de varias sesiones de fisioterapia ATM, el problema está completamente solucionado.",
        date: "hace 1 mes",
      },
      {
        author: "Juanjo Martin",
        rating: 5,
        text: "Gracias al tratamiento con INDIBA pude volver a entrenar en solo 3 sesiones. Pensaba que estaría meses de baja y Lourdes obró milagros con mi lesión.",
        date: "hace 2 meses",
      },
      {
        author: "Laura Martin",
        rating: 5,
        text: "Especialista en dolores de cabeza. Después de años sufriendo migrañas, por fin encontré a alguien que entiende el origen del problema y lo trata de raíz.",
        date: "hace 2 meses",
      },
      {
        author: "Fernando Hernandez",
        rating: 5,
        text: "Tenía el tendón de Aquiles muy afectado y en solo 2 sesiones de INDIBA noté una mejoría brutal. Ahora puedo correr sin dolor. Totalmente recomendable.",
        date: "hace 3 meses",
      },
    ],
  },

  // === SERVICIOS ===
  services: [
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación de lesiones, prevención y mejora del rendimiento deportivo. Tratamiento especializado para deportistas de todos los niveles.",
      benefits: ["Recuperación acelerada de lesiones", "Prevención de recaídas", "Mejora del rendimiento", "Readaptación deportiva"],
      icon: "Activity",
    },
    {
      id: "indiba",
      name: "Tratamiento INDIBA",
      description: "Radiofrecuencia de última generación para recuperación acelerada. Nuestra especialidad principal con máquina INDIBA propia.",
      benefits: ["Recuperación hasta 3 veces más rápida", "Reduce inflamación y dolor", "Regeneración tisular", "Sin efectos secundarios"],
      icon: "Zap",
    },
    {
      id: "osteopatia",
      name: "Osteopatía",
      description: "Tratamiento integral del sistema musculoesquelético con técnicas manuales avanzadas para restaurar el equilibrio del cuerpo.",
      benefits: ["Tratamiento holístico", "Técnicas manuales precisas", "Mejora la movilidad", "Alivia tensiones crónicas"],
      icon: "Hand",
    },
    {
      id: "fisioterapia-atm",
      name: "Fisioterapia ATM",
      description: "Especialista en articulación temporomandibular y bruxismo. Tratamiento de dolores de cabeza, mandíbula y oído relacionados.",
      benefits: ["Alivio del bruxismo", "Reduce dolores de cabeza", "Mejora la apertura bucal", "Elimina chasquidos mandibulares"],
      icon: "Focus",
    },
    {
      id: "fisioestetica-facial",
      name: "Fisioestética Facial",
      description: "Tratamientos faciales con tecnología INDIBA para rejuvenecimiento y mejora del aspecto de la piel.",
      benefits: ["Rejuvenecimiento facial", "Mejora la elasticidad", "Reduce arrugas", "Efecto lifting natural"],
      icon: "Sparkles",
    },
    {
      id: "fisioestetica-corporal",
      name: "Fisioestética Corporal",
      description: "Maderoterapia, reducción de celulitis y tratamientos post-cirugía para mejorar la silueta y recuperación.",
      benefits: ["Reducción de celulitis", "Maderoterapia profesional", "Recuperación post-cirugía", "Moldea la silueta"],
      icon: "Heart",
    },
  ],

  // === PROCESO ===
  process: [
    {
      step: 1,
      title: "Contacta",
      description: "Escríbenos por WhatsApp o llámanos al 665 80 60 46 para agendar tu primera cita.",
    },
    {
      step: 2,
      title: "Valoración",
      description: "Realizamos una valoración completa y personalizada para entender tu caso y necesidades.",
    },
    {
      step: 3,
      title: "Tratamiento",
      description: "Aplicamos el tratamiento más adecuado con tecnología INDIBA y técnicas manuales avanzadas.",
    },
    {
      step: 4,
      title: "Seguimiento",
      description: "Te acompañamos en todo el proceso de recuperación hasta que vuelvas a tu 100%.",
    },
  ],

  // === POR QUÉ ELEGIRNOS ===
  whyUs: [
    {
      title: "+6 Años de Experiencia",
      description: "Formación continua y experiencia como ex-coordinadora en Sanitas Madrid.",
      icon: "Award",
    },
    {
      title: "Máquina INDIBA Propia",
      description: "Tecnología de radiofrecuencia de última generación para tratamientos más efectivos.",
      icon: "Cpu",
    },
    {
      title: "Trato Personalizado",
      description: "Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas.",
      icon: "Users",
    },
    {
      title: "150+ Reseñas 5 Estrellas",
      description: "La confianza de más de 150 pacientes satisfechos nos avala.",
      icon: "Star",
    },
  ],

  // === EQUIPO ===
  team: [
    {
      name: "Lourdes Benítez",
      role: "Fisioterapeuta & Osteópata",
      image: "/images/team/lourdes.jpg",
      bio: "Especialista en INDIBA y fisioterapia deportiva con más de 6 años de experiencia. Ex-coordinadora en Sanitas Madrid. Formación continua en las técnicas más avanzadas.",
    },
  ],

  // === GALERÍA ===
  gallery: [
    { src: "/images/gallery/1.jpg", alt: "Centro de fisioterapia en Badajoz" },
    { src: "/images/gallery/2.jpg", alt: "Tratamiento con INDIBA" },
    { src: "/images/gallery/3.jpg", alt: "Sala de tratamiento" },
    { src: "/images/gallery/4.jpg", alt: "Equipamiento profesional" },
  ],

  // === FAQ ===
  faq: [
    {
      question: "¿Qué es el tratamiento INDIBA y para qué sirve?",
      answer: "INDIBA es una tecnología de radiofrecuencia que acelera la recuperación de tejidos hasta 3 veces más rápido. Es especialmente efectivo para lesiones deportivas, dolores musculares, tendinitis y procesos inflamatorios. Estimula la regeneración celular de forma natural y sin efectos secundarios.",
    },
    {
      question: "¿Cuánto dura una sesión de fisioterapia?",
      answer: "Las sesiones duran entre 45 y 60 minutos, dependiendo del tratamiento. En la primera visita dedicamos tiempo extra para hacer una valoración completa de tu caso.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "Sí, trabajamos con cita previa para poder dedicarte el tiempo que mereces sin esperas. Puedes pedir cita llamando al 665 80 60 46 o por WhatsApp.",
    },
    {
      question: "¿Tratáis lesiones deportivas?",
      answer: "Sí, la fisioterapia deportiva es una de nuestras especialidades. Tratamos todo tipo de lesiones: esguinces, roturas fibrilares, tendinitis, fascitis plantar, lesiones de rodilla, hombro y más. Muchos de nuestros pacientes son deportistas que necesitan recuperarse rápido.",
    },
    {
      question: "¿Qué es la fisioterapia ATM?",
      answer: "La fisioterapia ATM (Articulación Temporomandibular) trata problemas de la mandíbula como bruxismo, chasquidos, dolor al masticar y dolores de cabeza relacionados. Es un tratamiento muy efectivo para quienes aprietan los dientes o tienen tensión mandibular.",
    },
    {
      question: "¿Hacéis tratamientos post-cirugía?",
      answer: "Sí, realizamos tratamientos de recuperación post-quirúrgica tanto para cirugías traumatológicas como estéticas. El tratamiento con INDIBA es especialmente efectivo para acelerar la recuperación y reducir el edema post-operatorio.",
    },
    {
      question: "¿Qué es la maderoterapia?",
      answer: "La maderoterapia es una técnica de masaje con instrumentos de madera que ayuda a reducir la celulitis, moldear la silueta y mejorar la circulación. Es un tratamiento natural y muy efectivo combinado con otras técnicas.",
    },
    {
      question: "¿Cuántas sesiones necesitaré?",
      answer: "El número de sesiones varía según cada caso. En la primera consulta evaluamos tu situación y te damos una estimación realista. Muchos pacientes notan mejoría desde la primera sesión gracias al tratamiento con INDIBA.",
    },
  ],

  // === SEO ===
  seo: {
    titleTemplate: "%s | Fisioterapia Lourdes Benítez - Badajoz",
    defaultTitle: "Fisioterapia en Badajoz | Lourdes Benítez - Especialista INDIBA",
    defaultDescription: "Centro de fisioterapia en Badajoz. Especialistas en tratamiento INDIBA, fisioterapia deportiva, osteopatía y ATM. +6 años de experiencia. 150+ reseñas 5 estrellas. Pide cita: 665 80 60 46",
    keywords: ["fisioterapia badajoz", "indiba badajoz", "fisio deportivo badajoz", "osteopatia badajoz", "fisioterapia atm badajoz", "fisioterapeuta badajoz"],
    ogImage: "/og-image.jpg",
  },

  // === LEGAL ===
  legal: {
    companyName: "Fisioterapia Lourdes Benítez",
    cif: "Consultar",
    registeredAddress: "C. Prim, 24, 06001 Badajoz",
  },
}

export type Clinic = typeof clinic
