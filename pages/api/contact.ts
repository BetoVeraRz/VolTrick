import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

declare module 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombre, email, telefono, servicio, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: 'Por favor, completa todos los campos obligatorios.' });
    }

    try {
      // Enviar correo usando Resend
      await resend.emails.send({
        from: 'Voltrik <onboarding@resend.dev>', // Cambia esto si es necesario
        to: process.env.EMAIL_TO || '',
        subject: 'Nuevo mensaje de contacto',
        html: `
          <h1>Nuevo mensaje de contacto</h1>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Servicio:</strong> ${servicio}</p>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
        `,
      });

      return res.status(200).json({ message: 'Correo enviado con éxito.' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).json({ error: 'Error al enviar el correo.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Método ${req.method} no permitido.` });
  }
}
