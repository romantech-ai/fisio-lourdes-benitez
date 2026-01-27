"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { clinic } from "@/config/clinic"

export function CTA() {
  const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(clinic.whatsappMessage)}`

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            ¿Listo para empezar tu tratamiento?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Da el primer paso hacia tu bienestar. Pide tu cita ahora y nuestro equipo
            te asesorará sin compromiso.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-primary hover:bg-white/90 transition-colors shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Reservar por WhatsApp
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={`tel:${clinic.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              {clinic.phone}
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-8 text-sm text-white/60">
            <span>Primera consulta informativa</span>
            <span>Sin compromiso</span>
            <span>Respuesta en menos de 24h</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
