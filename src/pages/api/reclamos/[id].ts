import { NextApiRequest, NextApiResponse } from 'next';
import  prisma from '@/services/prisma';

export default async function ReclamoById(req: NextApiRequest, res: NextApiResponse) {
    const { method, query } = req;
    const id = Number(query.id);
    switch (method) {
        case 'GET':
            try {
                const reclamo = await prisma.reclamo.findUnique({
                    where: {
                        id : id
                    },
                })

                return res.status(200).json({
                    ok: true,
                    data: reclamo
                });
            } catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: error
                });
            }

        case 'PATCH':
            try {
                const UpdateStatus = await prisma.reclamo.update({
                    where: { id },
                    data: { estado_reclamo: 'CERRADO' }
                  });
                if(!UpdateStatus){
                    return res.json(`No absuelto`)
                }
                return res.status(200).json({
                    ok: true,
                    message: `Reclamo ${id} absuelto.`
                });
            } catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: error
                });
            }
        default:
            return res.json('Metodo no autorizado');

    }
}

