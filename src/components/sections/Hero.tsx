"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Star, ArrowRight } from "lucide-react"
import { clinic } from "@/config/clinic"

export function Hero() {
  const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(clinic.whatsappMessage)}`

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral via-white to-primary/5" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-wide section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-secondary">
                {clinic.reviews.rating} · {clinic.reviews.count}+ reseñas
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary leading-tight mb-6">
              {clinic.seo.defaultTitle.split(" | ")[0]}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-secondary/70 mb-8 max-w-xl mx-auto lg:mx-0">
              {clinic.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reservar Cita
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                className="btn-secondary text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </motion.a>
            </div>

            {/* Quick info */}
            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <p className="text-2xl font-display font-bold text-primary">+6</p>
                <p className="text-sm text-secondary/60">Años de experiencia</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-primary">+{clinic.reviews.count}</p>
                <p className="text-sm text-secondary/60">Pacientes satisfechos</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-2xl font-display font-bold text-primary">{clinic.reviews.rating}</p>
                <p className="text-sm text-secondary/60">Valoración Google</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden relative">
              <Image
                src="/images/hero.webp"
                alt="Lourdes Benítez - Fisioterapeuta en Badajoz"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-4 bottom-8 bg-white rounded-2xl shadow-xl p-4 max-w-xs hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-secondary">Especialista INDIBA</p>
                  <p className="text-sm text-secondary/60">Máquina propia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
