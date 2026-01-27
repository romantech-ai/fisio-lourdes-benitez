import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from "lucide-react"
import { clinic } from "@/config/clinic"

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">{clinic.name}</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {clinic.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {clinic.social.instagram && (
                <a
                  href={clinic.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {clinic.social.facebook && (
                <a
                  href={clinic.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {clinic.social.linkedin && (
                <a
                  href={clinic.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {clinic.social.tiktok && (
                <a
                  href={clinic.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
                </a>
              )}
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {clinic.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${clinic.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {clinic.email}
                </a>
              </li>
              <li>
                <a
                  href={clinic.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    {clinic.address.street}<br />
                    {clinic.address.postalCode} {clinic.address.city}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Horario</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {clinic.schedule.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="block">{item.days}</span>
                    <span className="text-white/50">{item.hours}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/aviso-legal" className="hover:text-white transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>
            &copy; {currentYear} {clinic.legal.companyName}. Todos los derechos reservados.
          </p>
          <p>
            CIF: {clinic.legal.cif}
          </p>
        </div>
      </div>
    </footer>
  )
}
