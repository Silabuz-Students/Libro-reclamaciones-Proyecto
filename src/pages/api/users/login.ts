// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/services/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { comparePassword } from '@/lib/auth'
import { User } from 'next-auth'

type Data = {
    name?: string,
    message? :string,
    user? : any,
}

type userprop = {
    id: string
    name: string
    email: string
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
        const { email, password } = JSON.parse(JSON.stringify(req.body))

        if (!email || !password) {
            return res.status(404).send({
                message: 'Ingrese email y password',
            })
        }
        const empresa = await prisma.empresa.findUnique({
            where: {
                email
            }
        })

        if (!empresa || !await comparePassword(password, empresa.password)) {
            return res.status(404).json({
                message: "Email o contrasena incorrectos",
            });
        } else {
            const user = {
                id: empresa.id.toString(),
                name: empresa.nombre,
                email: empresa.email,
            } 
            return res.status(200).json(user);
        }

    } catch (error: any) {
        return res.status(405).json({
            message: `${error.message}`,
        })

    }

}