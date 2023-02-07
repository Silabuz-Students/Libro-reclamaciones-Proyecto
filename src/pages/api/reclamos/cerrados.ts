import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

import  prisma from '@/services/prisma';

export default async function GetReclamos(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const session = await getServerSession(req, res, authOptions);
    const idUser = Number(session?.user?.id);

    switch (method) {
        case 'GET':
            try {
                const reclamosCerrados = await prisma.reclamo.findMany({
                    where: {
                        empresa: { id: idUser },
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


