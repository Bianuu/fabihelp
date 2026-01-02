import nodemailer from "nodemailer";
import crypto from "crypto";

const sentMessages = new Set();

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method not allowed"});
    }

    const {nume, email, subiect, mesaj, telefon} = req.body;

    if (!email || !mesaj || !telefon) {
        return res.status(400).json({message: "Invalid payload"});
    }

    const hash = crypto
        .createHash("sha256")
        .update(`${email}-${telefon}-${mesaj}`)
        .digest("hex");

    if (sentMessages.has(hash)) {
        return res.status(200).json({success: true, duplicate: true});
    }

    sentMessages.add(hash);

    const transporter = nodemailer.createTransport({
        host: "smtp.mail.yahoo.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `[FabiHelp] ${subiect}`,
            text: `
=====================
CONTACT NOU
=====================
Nume: ${nume}
Email: ${email}
Telefon: ${telefon}

Mesaj:
${mesaj}
=====================
`,
        });

        return res.status(200).json({success: true});
    } catch (err) {
        sentMessages.delete(hash); // rollback
        console.error(err);
        return res.status(500).json({success: false});
    }
}
