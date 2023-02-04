import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function GetReclamos(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const reclamosCerrados = await prisma.reclamo.findMany({
                    where: {
                        empresa: { id: 7 },
                        estado_reclamo: 'CERRADO'
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
                        reclamosCerrados: reclamosCerrados
                    }
                });
            } catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: error
                });
            }

        case 'PATCH':
            return res.status(200).json("Reabrir reclamo");
        default:
            return res.status(404).json("Metodo no autorizado");
    }
}


