import fastify from "fastify";
import app from "./app.js";
import serverConfig from "./config/serverConfig.js";

const fastifyInstance = fastify({
  logger: true,
});

fastifyInstance.register(app);

fastifyInstance.listen({ port: serverConfig.PORT }, (err) => {
  if (err) {
    fastifyInstance.log.error(err);
    process.exit(1);
  }
  fastifyInstance.log.info(
    `Server is running on http://localhost:${serverConfig.PORT}`
  );
});
