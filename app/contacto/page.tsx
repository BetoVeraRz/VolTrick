"use client";

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });
  const [status, setStatus] = useState({ success: false, error: false, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ success: false, error: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ success: true, error: false, message: 'Mensaje enviado con éxito.' });
        setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
      } else {
        const errorData = await response.json();
        setStatus({ success: false, error: true, message: errorData.error || 'Error al enviar el mensaje.' });
      }
    } catch (error) {
      setStatus({ success: false, error: true, message: 'Error de conexión. Intenta nuevamente.' });
    }
  };

  return (
    <>
      {/* Cabecera de contacto */}
      <section className="bg-light-bg py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
            <p className="text-lg">
              Estamos aquí para responder a tus preguntas y ofrecerte una asesoría personalizada sobre nuestros servicios y soluciones.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario e información de contacto */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nombre" className="block mb-2 font-medium">Nombre completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Escribe tu nombre" 
                    className="w-full border border-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com" 
                    className="w-full border border-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block mb-2 font-medium">Teléfono</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="(55) 1234-5678" 
                    className="w-full border border-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="servicio" className="block mb-2 font-medium">Servicio de interés</label>
                  <select 
                    id="servicio" 
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full border border-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Seleccionar servicio</option>
                    <option value="calidad">Calidad de Energía</option>
                    <option value="codigo">Cumplimiento Código de Red</option>
                    <option value="capacitores">Bancos de Capacitores</option>
                    <option value="filtros">Filtros de Armónicas</option>
                    <option value="soluciones">Soluciones Energéticas</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block mb-2 font-medium">Mensaje</label>
                  <textarea 
                    id="mensaje" 
                    rows={5} 
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..." 
                    className="w-full border border-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2"
                >
                  <Send size={18} />
                  Enviar mensaje
                </button>
              </form>

              {status.message && (
                <p className={`mt-4 text-sm ${status.success ? 'text-green-600' : 'text-red-600'}`}>
                  {status.message}
                </p>
              )}
            </div>
            
            {/* Información de contacto */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              
              <div className="bg-light-bg p-8 rounded-lg">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-md">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Teléfono</h3>
                      <p className="text-lg">3312547558</p>
                      <p className="text-sm text-gray-500 mt-1">Lunes a Viernes, 9:00 - 18:00</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-md">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Correo electrónico</h3>
                      <p className="text-lg">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
                      <p className="text-sm text-gray-500 mt-1">¡Responderemos lo antes posible!</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-md">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Dirección</h3>
                      <p className="text-lg">Guadalajara, Jalisco</p>
                      <p className="text-sm text-gray-500 mt-1"> Sin oficinas físicas.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-md">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Horario de atención</h3>
                      <p className="text-lg">Lunes a Viernes</p>
                      <p className="text-sm text-gray-500 mt-1">9:00 AM - 6:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-xl mb-4">Síguenos en redes</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-light-bg p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="bg-light-bg p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="#" className="bg-light-bg p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="bg-light-bg p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-8">
        <div className="container-custom">
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-light-bg">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-center">
                <MapPin size={48} className="text-primary mx-auto mb-4" />
                <span className="block text-xl font-bold">Aquí iría el mapa de Google Maps</span>
                <span className="text-gray">Av. Principal #123, Colonia Centro, CDMX</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}