import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) =>{
    const idT = Number(req.query.id)
    const { titulo , descicao } = req.body

    const updatedTarefa = await prisma.tarefa.update({
        where: {
            id: idT
        },
        data: {
            titulo: titulo,
            descicao: descicao,
        },
    })

    return res.json(updatedTarefa)

}