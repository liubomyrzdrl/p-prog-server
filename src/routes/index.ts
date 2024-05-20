import { FastifyInstance } from "fastify";
import authRouter from "./auth/authRouter";

const router = async (fastify: FastifyInstance) => {
    console.log('fastify', fastify)
    fastify.register(authRouter, { prefix: 'auth' });
};

export default router;