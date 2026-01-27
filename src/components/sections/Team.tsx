"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { clinic } from "@/config/clinic"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Team() {
  return (
    <section id="equipo" className="section-padding bg-neutral">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary mt-4 mb-6">
            Profesionales a tu servicio
          </h2>
          <p className="text-lg text-secondary/70">
            Un equipo multidisciplinar con amplia experiencia y formación continua
            para ofrecerte la mejor atención.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {clinic.team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="aspect-[4/5] relative bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  {member.image && member.image !== "/images/team/placeholder.jpg" ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary/30">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-3xl">👤</span>
                        </div>
                        <p className="text-xs">Foto del profesional</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-semibold text-secondary">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mt-1">
                    {member.role}
                  </p>
                  <p className="text-secondary/60 text-sm mt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
