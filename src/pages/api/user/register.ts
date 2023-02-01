import prisma from "@/services/prisma";
import { Empresa } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";
import { hashPassword,comparePassword } from "@/lib/auth";

type Data = {
    message: string
    ok?: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    try {
        const { ruc,nombre,domicilio_fiscal,telefono,email,password } =req.body

        const empresa = await prisma.empresa.findUnique({
            where: {
                email
            }
        })
        if (empresa) {
            return res.status(400).json({
                message: "Email ya existe",
                ok:false
            })
        }

        const nuevaEmpresa ={
            ruc,
            nombre,
            domicilio_fiscal,
            telefono,
            email,
            password : await hashPassword(password)
        } as Empresa


        console.log(nuevaEmpresa)

        return res.status(201).json({
            message: "usuario creado correctamente",
            ok:true
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server error",
            ok:false
        })
        
    }
    
}