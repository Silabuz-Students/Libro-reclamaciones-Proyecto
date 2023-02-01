// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/services/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name?: string,
    message? :string
    user? : any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    prisma.empresa
    try {
        if (req.method !== 'POST') {
            res.status(405).send({ message: 'Only POST requests allowed' })
            return
        }
        const body = JSON.parse(JSON.stringify(req.body))
        if (false) {
            res.status(404).send({ message: 'User does not exit!' })
            return
        }
        return res.status(200).json({name:"MESSAGE"});
        
    } catch (error) {
        res.status(405).send({ message: `{error.message}` })
        return
    }

}