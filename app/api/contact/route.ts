import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { nombre, telefono, servicio, mensaje } = await req.json();

    if (!nombre || !telefono) {
      return NextResponse.json(
        { error: "Nombre y teléfono son requeridos." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.jomlia.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Jomlia Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || "f.aquino@jomlia.com",
      subject: `Nueva solicitud de cotización — ${servicio || "Sin especificar"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #003087;">Nueva Solicitud de Cotización</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding:8px; font-weight:bold; color:#555;">Nombre:</td>
              <td style="padding:8px;">${nombre}</td>
            </tr>
            <tr style="background:#f5f5f5;">
              <td style="padding:8px; font-weight:bold; color:#555;">Teléfono / WhatsApp:</td>
              <td style="padding:8px;">${telefono}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold; color:#555;">Servicio:</td>
              <td style="padding:8px;">${servicio || "No especificado"}</td>
            </tr>
            <tr style="background:#f5f5f5;">
              <td style="padding:8px; font-weight:bold; color:#555;">Mensaje:</td>
              <td style="padding:8px;">${mensaje || "—"}</td>
            </tr>
          </table>
          <p style="margin-top:20px; color:#888; font-size:12px;">
            Enviado desde el formulario de jomlia.com
          </p>
        </div>
      `,
      replyTo: undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error enviando correo:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el correo. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
