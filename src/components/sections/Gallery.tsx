"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { clinic } from "@/config/clinic"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

export function Gallery() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Instalaciones
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary mt-4 mb-6">
            Conoce nuestra clínica
          </h2>
          <p className="text-lg text-secondary/70">
            Instalaciones modernas y acogedoras diseñadas para tu comodidad.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {clinic.gallery.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-2xl ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"} relative bg-gradient-to-br from-primary/10 to-accent/10`}>
                {image.src && !image.src.includes("placeholder") ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-primary/30">
                    <div className="text-center p-4">
                      <span className="text-4xl mb-2 block">📷</span>
                      <p className="text-xs">{image.alt}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
