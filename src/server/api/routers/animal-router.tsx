import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const AnimalRouter = createTRPCRouter({
  addAnimal: publicProcedure
    .input(z.object({
      name: z.string(),
      color: z.string()
    }))
    .mutation(async ({ input, ctx }) => {
      const animal = await ctx.prisma.animal.create({
        data: {
          name: input.name,
          color: input.color
        }
      })

      return animal
    }),
  listOfAnimal: publicProcedure
    .query(async ({ ctx }) => {
      const animals = await ctx.prisma.animal.findMany({
        include: {
          label: true
        }
      });

      return animals
    })
})

export default AnimalRouter;