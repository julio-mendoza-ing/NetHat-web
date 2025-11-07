import React, { useState } from 'react';
import { Menu, X, Globe, Network, TrendingUp, Calculator, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export default function NetHatWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Diseño y Desarrollo Web",
      description: "Creamos sitios web modernos, responsivos y optimizados para tu negocio. Gestión completa de tu presencia digital.",
      features: ["Diseño personalizado", "Gestión de contenido", "Optimización SEO", "Mantenimiento continuo"]
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Redes y Cableado",
      description: "Instalación y configuración de infraestructura de red. Cableado estructurado profesional para tu empresa.",
      features: ["Cableado estructurado", "Configuración de routers", "Puntos de acceso WiFi", "Gestión de redes"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Marketing Digital",
      description: "Estrategias de marketing digital para hacer crecer tu negocio online y alcanzar a más clientes.",
      features: ["Redes sociales", "Publicidad digital", "Análisis de métricas", "Email marketing"]
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: "Servicios Contables",
      description: "Gestión contable profesional para mantener tus finanzas en orden y cumplir con tus obligaciones fiscales.",
      features: ["Contabilidad general", "Declaraciones fiscales", "Nómina", "Asesoría financiera"]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/src/assets/NetHAt-Logo.jpeg" alt="NetHat" className="h-12 w-12" onError={(e) => e.target.style.display = 'none'} />
              <div>
                <div className="text-2xl font-bold text-slate-800">NETHAT</div>
                <div className="text-sm text-slate-600 tracking-wider">SOLUTIONS</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-slate-700 hover:text-blue-600 font-medium transition">Inicio</a>
              <a href="#servicios" className="text-slate-700 hover:text-blue-600 font-medium transition">Servicios</a>
              <a href="#nosotros" className="text-slate-700 hover:text-blue-600 font-medium transition">Nosotros</a>
              <a href="#contacto" className="text-slate-700 hover:text-blue-600 font-medium transition">Contacto</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#inicio" className="block py-2 text-slate-700 hover:text-blue-600">Inicio</a>
              <a href="#servicios" className="block py-2 text-slate-700 hover:text-blue-600">Servicios</a>
              <a href="#nosotros" className="block py-2 text-slate-700 hover:text-blue-600">Nosotros</a>
              <a href="#contacto" className="block py-2 text-slate-700 hover:text-blue-600">Contacto</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
                Soluciones Tecnológicas <span className="text-blue-600">Integrales</span>
              </h1>
              <p className="text-xl text-slate-600">
                Impulsamos tu negocio con servicios profesionales de tecnología, diseño web, redes y gestión contable.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contacto" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center">
                  Contáctanos <ChevronRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#servicios" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Ver Servicios
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <Globe className="w-32 h-32 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-slate-600">Soluciones completas para hacer crecer tu negocio</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">¿Por qué NetHat Solutions?</h2>
              <p className="text-lg mb-6 text-blue-100">
                Somos un equipo de profesionales dedicados a proporcionar soluciones tecnológicas de alta calidad que impulsan el crecimiento de tu negocio.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Experiencia Comprobada</h4>
                    <p className="text-blue-100">Años de experiencia en tecnología y gestión empresarial</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Soluciones Personalizadas</h4>
                    <p className="text-blue-100">Adaptamos nuestros servicios a tus necesidades específicas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Soporte Continuo</h4>
                    <p className="text-blue-100">Estamos contigo en cada paso del camino</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-slate-600">Proyectos Completados</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-slate-600">Clientes Satisfechos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-slate-600">Soporte Técnico</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">5★</div>
                  <div className="text-slate-600">Calificación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Contáctanos</h2>
            <p className="text-xl text-slate-600">Estamos listos para ayudarte a impulsar tu negocio</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-800">Email</h4>
                  <p className="text-slate-600">contacto@nethatsolutions.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-800">Teléfono</h4>
                  <p className="text-slate-600">+52 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-800">Ubicación</h4>
                  <p className="text-slate-600">Hidalgo, México</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="web">Diseño y Desarrollo Web</option>
                  <option value="redes">Redes y Cableado</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="contabilidad">Servicios Contables</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
                ></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">NETHAT SOLUTIONS</div>
              <p className="text-slate-400">Soluciones tecnológicas integrales para tu negocio</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Diseño Web</li>
                <li>Redes y Cableado</li>
                <li>Marketing Digital</li>
                <li>Servicios Contables</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-slate-400">
                <li>contacto@nethatsolutions.com</li>
                <li>+52 (123) 456-7890</li>
                <li>Hidalgo, México</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 NetHat Solutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}