import Fastify, { FastifyInstance } from "fastify";
import fastifyEnv from "@fastify/env";
import multipart from "@fastify/multipart";
import { config } from "./config/config";
import router from "./routes";
import { register } from "module";

const fastify: FastifyInstance = Fastify({
  logger: true,
});

// multipart to get files in request
fastify.register(multipart, { attachFieldsToBody: true });

const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "number",
      default: 8000,
    },
  },
};

const options = {
  confKey: "config",
  dotenv: true,
  schema,
  data: process.env,
};

fastify.get("/", async (request, responce) => {
  return `<h1>Server Fastify</h1>`;
});

fastify.register(router, { prefix: "/api" });
(async () => {
  try {
    fastify.register(fastifyEnv, options);
    await fastify.ready();
    await fastify.listen({ port: Number(process.env.PORT) });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();
