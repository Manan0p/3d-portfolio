import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("/api/send request:", body);

    const parsed = Email.safeParse(body);
    if (!parsed.success) {
      console.error("Validation error:", parsed.error);
      return new Response(JSON.stringify({ error: parsed.error.errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return new Response(
        JSON.stringify({ error: "Missing RESEND_API_KEY on server." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const result = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: [config.email],
        subject: "Contact me from portfolio",
        react: EmailTemplate({
          fullName: parsed.data.fullName,
          email: parsed.data.email,
          message: parsed.data.message,
        }),
      });

      console.log("Resend result:", result);

      if ((result as any).error) {
        console.error("Resend SDK error:", (result as any).error);
        return new Response(JSON.stringify({ error: (result as any).error }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ data: result }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Resend send failed:", err);
      return new Response(JSON.stringify({ error: String(err) }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("/api/send unexpected error:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
