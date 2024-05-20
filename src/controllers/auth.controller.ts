import { FastifyReply, FastifyRequest } from "fastify";

class AuthController {
  async authTest(req: FastifyRequest, reply: FastifyReply) {
    reply.code(200).send({
      data: {
        hello: "Auth",
      },
      message: "Test Auth route",
    });
  }
}

export default new AuthController();
