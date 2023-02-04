import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import hbs, { NodemailerExpressHandlebarsOptions } from 'nodemailer-express-handlebars';
import path from 'path';

type Data = {
    nombre?: string,
    telefono? :string,
    message? :string,
    email? : any,
    ok?: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({
                message: 'Only POST requests allowed',
            })
        }
        const { email,telefono,nombre } = JSON.parse(JSON.stringify(req.body))

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
                pass: process.env.NEXT_PUBLIC_PASSWORD
            },
            ignoreTLS: false
      
        });
        
        // point to the template folder
        const handlebarOptions : NodemailerExpressHandlebarsOptions = {
            viewEngine: {
              partialsDir: path.resolve('./public/'),
              defaultLayout: false,
            },
            viewPath: path.resolve('./public/'),
        };
        
        // use a template file with nodemailer
        transporter.use('compile', hbs(handlebarOptions))

        const  mailOptions = {
            from: '"Nofificaciones de Reclamos" <cquesr175@gmail.com>', // sender address
            to: `${email}`, // list of receivers
            subject: `RECLAMO #${telefono}`,
            template: 'email', // the name of the template file i.e email.handlebars
            context: {
                name: `${nombre}`, // Nombre de la empresa
                code: '2023000000001' // Numero de reclamo
            }
        };

          // trigger the sending of the E-mail
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });

        return res.status(201).json({
            message: "usuario creado correctamente",
            ok: true
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error",
            ok: false
        })
    };
};