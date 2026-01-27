"use client"

import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import { clinic } from "@/config/clinic"
import { cn } from "@/lib/utils"

type IconName = keyof typeof LucideIcons

function getIcon(iconName: string) {
  const Icon = LucideIcons[iconName as IconName] as React.ComponentType<{ className?: string }>
  return Icon || LucideIcons.Circle
}

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary mt-4 mb-6">
            Tratamientos especializados para tu bienestar
          </h2>
          <p className="text-lg text-secondary/70">
            Ofrecemos una amplia gama de servicios adaptados a tus necesidades específicas,
            con la más alta calidad y profesionalidad.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {clinic.services.map((service, index) => {
            const Icon = getIcon(service.icon)
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={cn(
                  "group relative bg-neutral rounded-2xl p-6 transition-all duration-300",
                  "hover:bg-white hover:shadow-xl hover:-translate-y-1"
                )}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-secondary mb-3">
                  {service.name}
                </h3>
                <p className="text-secondary/70 text-sm mb-4">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-secondary/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Hover indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <LucideIcons.ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
