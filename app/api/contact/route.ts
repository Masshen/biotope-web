import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

export async function POST(req: Request) {
  const { fullName, secteur, email, besoin } = await req.json();

  // Validation basique
  if (!fullName || !email || !besoin) {
    return NextResponse.json(
      { error: "Champs requis manquants : fullName, email, besoin." },
      { status: 422 },
    );
  }

  const brevo = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY as string,
  });

  try {
    // 1. Envoyer un email de notification à l'équipe Biotope
    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: "Formulaire Biotope",
        email: "contact@biotopecn.org", // ← à adapter à votre domaine vérifié dans Brevo
      },
      to: [
        {
          name: "Équipe Biotope",
          email: process.env.CONTACT_RECEIVER_EMAIL as string, // ex: contact@biotope.cd
        },
      ],
      replyTo: { email, name: fullName },
      subject: `[Nouveau contact] ${fullName} — ${secteur ?? "Secteur non précisé"}`,
      htmlContent: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; color: #1e293b;">
          <div style="background: #020617; padding: 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #f59e0b; margin: 0; font-size: 20px; letter-spacing: 0.05em;">
              NOUVEAU MESSAGE DE CONTACT
            </h2>
            <p style="color: #64748b; margin: 8px 0 0; font-size: 13px;">
              Reçu via le formulaire du site Biotope
            </p>
          </div>

          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 140px;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Nom complet</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="font-weight: 600; color: #1e293b;">${fullName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Secteur</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #1e293b;">${secteur ?? "<em style='color:#94a3b8'>Non précisé</em>"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Email</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 0 0; vertical-align: top;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Besoin spécifique</span>
                </td>
                <td style="padding: 16px 0 0;">
                  <p style="margin: 0; color: #334155; line-height: 1.7; white-space: pre-line;">${besoin}</p>
                </td>
              </tr>
            </table>

            <div style="margin-top: 32px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Votre demande Biotope"
                 style="display: inline-block; background: #f59e0b; color: #000; font-weight: 700;
                        padding: 12px 28px; border-radius: 99px; text-decoration: none;
                        font-size: 13px; letter-spacing: 0.05em;">
                Répondre à ${fullName}
              </a>
            </div>
          </div>
        </div>
      `,
    });

    // 2. Envoyer un email de confirmation au contact
    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: "Biotope",
        email: "no-reply@biotope.cd", // ← même domaine vérifié
      },
      to: [{ name: fullName, email }],
      subject: "Nous avons bien reçu votre message — Biotope",
      htmlContent: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; color: #1e293b;">
          <div style="background: #020617; padding: 40px 32px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 900; letter-spacing: -0.02em;">
              Message reçu,<br/>
              <span style="color: #f59e0b;">nous vous recontactons.</span>
            </h1>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-radius: 0 0 12px 12px;">
            <p style="color: #475569; line-height: 1.7; margin-top: 0;">
              Bonjour <strong>${fullName}</strong>,<br/><br/>
              Votre message a bien été transmis à notre équipe. Nous reviendrons vers vous dans les meilleurs délais concernant votre besoin :
            </p>
            <blockquote style="margin: 0 0 24px; padding: 16px 20px; background: #fff; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; color: #334155; font-style: italic; line-height: 1.7;">
              ${besoin}
            </blockquote>
            <p style="color: #94a3b8; font-size: 13px; margin: 0;">
              — L'équipe Biotope
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Message de contact envoyé avec succès." },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}