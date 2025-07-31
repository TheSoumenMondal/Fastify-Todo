export const pingController = async (request, reply) => {
  await reply.send("pong");
};
