import { FastifyInstance } from "fastify";
import AuthController from "../../controllers/auth.controller";
import { authOpts, authOptsRegister, authOptsLogin  } from "../../interfaces/auth/auth.opts";

const router = async (fastify: FastifyInstance) => {
  /**
   * @route GET /api/auth test
   */
  fastify.get("/", authOpts,  AuthController.authTest);

  /**
   * @route POST /api/auth/register
   */
  fastify.post("/register", authOptsRegister,  AuthController.authRegister as any);

   /**
   * @route POST /api/auth/login
   */
  fastify.post("/login", authOptsLogin,  AuthController.authLogin as any);
};

export default router;
