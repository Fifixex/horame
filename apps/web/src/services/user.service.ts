import {PrismaClient} from '@prisma/client'
import {pino} from '../lib/logger.js'

export class UserService {
  createUser = async (id: string, params: User) => {
    pino.info('Creating user from Discord auth')

    const client = new PrismaClient()
    const user = await client.user.findFirst({
      where: {
        id,
      },
    })
    if (user) throw Error('This user already exists!')
    await client.user.create({data: params})
    return 'The user has been created successfully!'
  }
}
