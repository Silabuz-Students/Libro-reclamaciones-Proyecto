import prisma from "@/services/prisma";
import { Empresa } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";
import { hashPassword, comparePassword } from "@/lib/auth";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

type Data = {
    message: string
    ok?: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    try {
        const { ruc, nombre, domicilio_fiscal, telefono, email, password } = req.body

        const empresa: Empresa | null = await prisma.empresa.findUnique({
            where: {
                email,
            }


        })
        if (empresa) {
            return res.status(400).json({
                message: "Usuario ya existe",
                ok: false
            })
        }

        const data = {
            ruc,
            nombre,
            domicilio_fiscal,
            telefono,
            email,
            password: await hashPassword(password)
        }
        const empresaCreada = await prisma.empresa.create({ data })

        return res.status(201).json({
            message: "usuario creado correctamente",
            ok: true
        })

    } catch (error) {

        if (error instanceof PrismaClientKnownRequestError) {
            return res.status(400).json({
                message: "Usuario ya existe con el mismo ruc o telefono",
                ok: false
            })
        }
        return res.status(500).json({
            message: "Internal Server error",
            ok: false
        })

    }

}