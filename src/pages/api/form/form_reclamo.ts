import prisma from "@/services/prisma";
import { Reclamo, Detalle_reclamo } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

type Data = {
    message: string
    ok?: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    try {
        const body =req.body

        const reclamo = await prisma.reclamo.create({
            data: {
                nro_seguimiento: body.nro_seguimiento,  // Tengo que autogenerar un código único id + año puede ser
                nombres: body.nombres,
                apellidos: body.apellidos,
                mayor_edad: body.mayor_edad,
                tipo_documento: body.tipo_documento,
                nro_dni: body.nro_dni,
                nombre_apoderado: body.nombre_apoderado,
                direccion: body.direccion,
                referencia: body.referencia,
                departamento: body.departamento,
                provincia: body.provincia,
                distrito: body.distrito,
                email: body.email,
                telefono: body.telefono,
                tipo_reclamo: body.tipo_reclamo,
                motivo_reclamo: body.motivo_reclamo,
                pedido_reclamo: body.pedido_reclamo,
                estado_reclamo: body.estado_reclamo,
                empresaId: body.empresaId,
            }
        });

        return res.status(201).json({
            message: "Reclamo creado correctamente.",
            ok:true
        });
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server error",
            ok:false
        });
    }
}