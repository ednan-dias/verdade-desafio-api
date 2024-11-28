import { fastify } from "fastify";
import { z } from "zod";
import { prisma } from "./database/prisma";

const app = fastify();

app.get("/cards", async (req, res) => {
  const cards = await prisma.card.findMany();

  return res.send(cards);
});

app.post("/cards", async (req, res) => {
  const bodySchema = z.object({
    type: z.enum(["TRUTH", "CHALLENGE"]),
    message: z.string(),
  });

  const { type, message } = bodySchema.parse(req.body);

  await prisma.card.create({
    data: {
      type,
      message,
    },
  });

  return res.send({ message: "Card criado com sucesso!" });
});

app.delete("/cards/:id", async (req, res) => {
  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsSchema.parse(req.params);

  await prisma.card.delete({
    where: {
      id,
    },
  });

  return res.status(204).send();
});

export { app };
