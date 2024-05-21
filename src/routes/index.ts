import { FastifyInstance } from "fastify";
import authRouter from "./auth/authRouter";

const router = async (fastify: FastifyInstance) => {
    fastify.register(authRouter, { prefix: 'auth' });
};

export default router;