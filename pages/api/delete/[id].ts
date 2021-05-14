import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) =>{
    const idT = Number(req.query.id)

    const deleteTarefa = await prisma.tarefa.delete({
        where: {
            id: idT
        }
    })

    return res.send('Ok')

}