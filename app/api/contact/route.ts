import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENTS = [
  "proyectos@jomlia.com",
  "operacionesjomlia@gmail.com",
  "ing.dev.aquino@gmail.com",
];

// Simple in-memory rate limit: max 5 requests per IP per 10 minutes
const rateMap = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 10 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str.replace(/[<>]/g, "").trim().slice(0, 500);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Demasiadas solicitudes. Intenta más tarde." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot — bots fill this hidden field
  if (body.website) {
    return NextResponse.json({ ok: true }); // silent reject
  }

  const nombre   = sanitize(body.nombre);
  const telefono = sanitize(body.telefono);
  const servicio = sanitize(body.servicio);
  const mensaje  = sanitize(body.mensaje);

  if (!nombre || !telefono) {
    return NextResponse.json({ error: "Nombre y teléfono son requeridos." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f5f5f5;padding:24px;border-radius:8px;">
      <div style="background:#003087;padding:20px 24px;border-radius:8px 8px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:20px;">Nueva Solicitud de Cotización</h1>
        <p style="color:rgba(255,255,255,0.75);margin:4px 0 0;font-size:13px;">Jomlia Solution Services</p>
      </div>
      <div style="background:#fff;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;width:140px;color:#6b7280;font-size:13px;font-weight:600;">Nombre</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#1a1a2e;font-size:14px;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:600;">Teléfono / WhatsApp</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#1a1a2e;font-size:14px;">${telefono}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:600;">Tipo de servicio</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#1a1a2e;font-size:14px;">${servicio || "No especificado"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top;">Descripción</td>
            <td style="padding:10px 0;color:#1a1a2e;font-size:14px;white-space:pre-wrap;">${mensaje || "—"}</td>
          </tr>
        </table>
        <div style="margin-top:20px;padding:12px 16px;background:#f0f4ff;border-radius:6px;border-left:4px solid #003087;">
          <p style="margin:0;font-size:12px;color:#6b7280;">
            Solicitud recibida el ${new Date().toLocaleString("es-DO", { timeZone: "America/Santo_Domingo" })}
          </p>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from:    `"Jomlia Web" <${process.env.SMTP_USER}>`,
      to:      RECIPIENTS,
      subject: "Nueva solicitud de cotización - Jomlia",
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendMail error:", err);
    return NextResponse.json({ error: "Error al enviar el correo. Intenta más tarde." }, { status: 500 });
  }
}
