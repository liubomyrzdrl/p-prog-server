import { FastifyInstance } from "fastify";
import AuthController from "../../controllers/auth.controller";
import { authOpts } from "../../interfaces/auth/category.coute-opts";
const router = async (fastify: FastifyInstance) => {
  /**
   * @route GET /api/auth test
   */
  fastify.get("/", authOpts,  AuthController.authTest);
};

export default router;
