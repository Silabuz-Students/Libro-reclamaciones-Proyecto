import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import hbs, {
  NodemailerExpressHandlebarsOptions,
} from "nodemailer-express-handlebars";
import path from "path";

type Data = {
  nombre?: string;
  telefono?: string;
  message?: string;
  email?: any;
  ok?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // Uso de metodo POST para envio de email
    if (req.method !== "POST") {
      return res.status(405).json({
        message: "Only POST requests allowed",
      });
    }

    // Datos extraidos del formulario para el envio de Email
    const { email, telefono, nombre } = JSON.parse(JSON.stringify(req.body));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
      ignoreTLS: false,
    });

    // Direccionamiento a la carpeta que contiene la plantilla .handlebars
    const handlebarOptions: NodemailerExpressHandlebarsOptions = {
      viewEngine: {
        partialsDir: path.resolve("./public/"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./public/"),
    };

    // Uso de plantilla con nodemailer
    transporter.use("compile", hbs(handlebarOptions));

    const mailOptions = {
      from: '"Nofificaciones de Reclamos" <cquesr175@gmail.com>', // Correo remitente
      to: `${email}`, // Correo destinatario
      subject: `RECLAMO #${telefono}`,
      template: "email", // Nombre del template handlebars ubicado en la carpeta public
      context: {
        name: `${nombre}`, // Nombre de la empresa
        code: "2023000000001", // Numero de reclamo
      },
    };

    // Trigger del envio del Email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.response);
    });

    // Envio exitoso de correo
    return res.status(201).json({
      message: "Correo informativo enviado correctamente",
      ok: true,
    });
  } catch (error) {
    // Mensaje de error - falla de servidor
    return res.status(500).json({
      message: "Internal Server error",
      ok: false,
    });
  }
}
