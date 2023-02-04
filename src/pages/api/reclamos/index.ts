import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function GetReclamos(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;
    //entra un token y saca id de la empresa
    const idEmpresa = 1;

    switch(method){
        case 'GET':
            try {
                //const reclamos = await prisma.empresa.findUnique({ where: { id: 1 }, include:{ reclamos: true },});
                const reclamosAbiertos = await prisma.reclamo.findMany({
                    where: {
                      empresa: { id: idEmpresa},
                      estado_reclamo: 'ABIERTO'
                    },
                    include: {
                        empresa: {
                          select: {
                            nombre: true
                          }
                        }
                      }
                  })
                return res.status(200).json({
                    ok: true,
                    data: {
                        reclamosAbiertos: reclamosAbiertos
                    }
                });
            } catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: error
                });
            }
            
        case 'POST':
            const data = body;
            return res.status(200).json({ok:true, message:`FORMULARIO DE NUEVO REGISTRO: ${data}`});
        default:
            return res.status(404).json("Meotod no autorizado");
    }
}


