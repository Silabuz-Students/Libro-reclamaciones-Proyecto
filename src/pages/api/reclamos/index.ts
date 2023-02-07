import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import  prisma from '@/services/prisma';



export default async function GetReclamos(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;
    //const userId = req.headers.userid;
    const session = await getServerSession(req, res, authOptions);
    const idUser = Number(session?.user?.id);
    //entra un token y saca id de la empresa
    //const idEmpresa = Number(userId);

    switch(method){
        case 'GET':
            try {
                //const reclamos = await prisma.empresa.findUnique({ where: { id: 1 }, include:{ reclamos: true },});
                const reclamosAbiertos = await prisma.reclamo.findMany({
                    where: {
                      empresa: { id: idUser},
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
            return res.status(404).json("Metodo no autorizado");
    }
}


