// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/services/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { comparePassword } from '@/lib/auth'

type Data = {
    message?: string
    ok: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    try {
        if (req.method !== 'POST') {

            return res.status(405).json({
                message: 'Only POST requests allowed',
                ok: false
            })
        }
        const { email, password } = JSON.parse(JSON.stringify(req.body))

        if (!email || !password) {
            return res.status(404).send({
                message: 'Ingrese email y password',
                ok: true
            })
        }
        const empresa = await prisma.empresa.findUnique({
            where: {
                email
            }
        })

        if (!empresa || await comparePassword(password, empresa.password)) {
            return res.status(404).json({
                message: "Email o contrasena incorrectos",
                ok: false
            });
        } else {
            return res.status(200).json({
                ok: true,
            });
        }

    } catch (error :any) {
        return res.status(405).json({ 
            message: `${error.message}`,
            ok:false
        })

    }

}