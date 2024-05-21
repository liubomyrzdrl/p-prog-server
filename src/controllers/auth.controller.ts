import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();
class AuthController {

  async authTest(req: FastifyRequest, reply: FastifyReply) {
    const user = await prisma.user.findFirst();
    reply.code(200).send({
      data: {
        hello: `Auth ${user?.username} email: ${user?.email}`,
      },
      message: "Test Auth route",
    });
  }
}

export default new AuthController();
