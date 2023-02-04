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

    try {
        const body =req.body

        const last_item: Reclamo | null = await prisma.reclamo.findFirst({      // Corregir Reclamo cuando cambie modelo
            orderBy: {
                id: 'desc',
            }
        });

        let id_reclamo = 0;

        if (last_item != null){
            id_reclamo += last_item.id + 1;
        } else {
            id_reclamo += 1;
        }

        console.log(last_item);
        console.log(id_reclamo);

        const date_now: Date = new Date();
        const year = date_now.getFullYear();

        console.log((year));

        let detalle = ''
        if (body.detalle_reclamo != null){
            detalle = 'Reclamo';

        } else {
            detalle = 'Queja';
        }
        // 300001-2023 Queja    id = 1
        // 500001-2023 Reclamo  id = 2
        // 500002-2023 Reclamo  id = 3
        // 500003-2023 Reclamo  id = 4
        // 300002-2023 Queja    id = 5

        const nro_seguimiento  = `${detalle} Nº 00000000${id_reclamo}-${year}`;
        
        console.log((nro_seguimiento));

        let data:Prisma.ReclamoCreateInput;
        if (body.detalle_reclamo != null) {
            data = {
                nro_seguimiento,
                nombres: body.nombres,
                apellidos: body.apellidos,
                mayor_edad: body.mayor_edad,
                tipo_documento: body.tipo_documento, // Podría obiarse porque tiene por defecto DNI
                nro_dni: body.nro_dni,
                nombre_apoderado: body.nombre_apoderado, // Podría ser null hacia abajo
                direccion: body.direccion,
                referencia: body.referencia,
                departamento: body.departamento,
                provincia: body.provincia,
                distrito: body.distrito,                 // Pdría ser null hacia arriba
                email: body.email,
                telefono: body.telefono,
                tipo_reclamo: body.tipo_reclamo,     // Podría obiarse porque tiene por defecto DNI
                motivo_reclamo: body.motivo_reclamo,
                pedido_reclamo: body.pedido_reclamo,
                estado_reclamo: body.estado_reclamo, // Podría obiarse porque tiene por defecto DNI
                detalle_reclamo: {
                    create: {
                        fecha_compra: new Date(body.detalle_reclamo.fecha_compra), // Cómo ingresar la fecha
                        tipo_comprobante: body.detalle_reclamo.tipo_comprobante, // Podría obiarse porque tiene por defecto DNI
                        nro_comprobante: body.detalle_reclamo.nro_comprobante,
                        monto_producto: body.detalle_reclamo.monto_producto,
                        codigo_producto: body.detalle_reclamo.codigo_producto,
                        detalle_producto: body.detalle_reclamo.detalle_producto
                    }
                },
                empresa: body.empresaId
            }
        } else {
            data = {
                nro_seguimiento,
                nombres: body.nombres,
                apellidos: body.apellidos,
                mayor_edad: body.mayor_edad,
                tipo_documento: body.tipo_documento, // Podría obiarse porque tiene por defecto DNI
                nro_dni: body.nro_dni,
                nombre_apoderado: body.nombre_apoderado, // Podría ser null hacia abajo
                direccion: body.direccion,
                referencia: body.referencia,
                departamento: body.departamento,
                provincia: body.provincia,
                distrito: body.distrito,                 // Pdría ser null hacia arriba
                email: body.email,
                telefono: body.telefono,
                tipo_reclamo: body.tipo_reclamo,     // Podría obiarse porque tiene por defecto DNI
                motivo_reclamo: body.motivo_reclamo,
                pedido_reclamo: body.pedido_reclamo,
                estado_reclamo: body.estado_reclamo, // Podría obiarse porque tiene por defecto DNI
                empresa: body.empresaId
            }
        }

        const reclamo: Reclamo = await prisma.reclamo.create({data});

        return res.status(201).json({
            message: "Reclamo creado correctamente.",
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