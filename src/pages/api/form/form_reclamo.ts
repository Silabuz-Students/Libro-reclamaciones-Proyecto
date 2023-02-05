import prisma from "@/services/prisma";
import { Reclamo, Detalle_reclamo, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

type Data = {
    message: string
    ok?: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Only POST requests are allowed.'
        });
    }

    try {
        const body =req.body

        let last_item: Reclamo | null;

        if (body.tipo_reclamo === 'RECLAMO') {
            last_item = await prisma.reclamo.findFirst({
                where: {
                    tipo_reclamo: 'RECLAMO'
                },
                orderBy: {
                    id: 'desc'
                }
            });

        } else if (body.tipo_reclamo === 'QUEJA') {
            last_item = await prisma.reclamo.findFirst({
                where: {
                    tipo_reclamo: 'QUEJA'
                },
                orderBy: {
                    id: 'desc'
                }
            });
        }

        let id_item = 0;

        if (last_item != null){

            id_item += parseInt(last_item.nro_seguimiento.substring(2,9)) + 1;

        } else {
            id_item += 1;
        };

        console.log(last_item);
        console.log(id_item);

        const date_now: Date = new Date();
        const year = date_now.getFullYear();

        console.log((year));

        let detalle = ''
        if (body.detalle_reclamo != null && body.tipo_reclamo === 'RECLAMO' ){
            detalle = 'R';

        } else {
            detalle = 'Q';
        };

        let digit_id = id_item.toString().length;
        let num_seg = '0'.repeat(7-digit_id) + id_item.toString();

        const nro_seguimiento  = `${detalle}-${num_seg}-${year}`;
        
        console.log((nro_seguimiento));

        const data_common = {
            nro_seguimiento,
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
            empresa: {connect: {
                id: body.empresaId
            }}
        };

        let data:Prisma.ReclamoCreateInput;
        let common = ''

        if (body.detalle_reclamo != null) {
            data = {
                ...data_common,
                detalle_reclamo: {
                    create: {
                        fecha_compra: new Date(body.detalle_reclamo.fecha_compra),
                        tipo_comprobante: body.detalle_reclamo.tipo_comprobante,
                        nro_comprobante: body.detalle_reclamo.nro_comprobante,
                        monto_producto: body.detalle_reclamo.monto_producto,
                        codigo_producto: body.detalle_reclamo.codigo_producto,
                        detalle_producto: body.detalle_reclamo.detalle_producto
                    }
                }
            }

            common = 'Reclamo';

        } else {
            data = data_common;

            common = 'Queja';
        }

        const reclamo: Reclamo = await prisma.reclamo.create({ data });

        return res.status(201).json({
            message: `${common} se creó correctamente.`,
            ok:true
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Internal Server error",
            ok:false
        });
    }
}