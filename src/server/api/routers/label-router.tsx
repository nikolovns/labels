import { tableSortLabelClasses } from "@mui/material";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const LabelRouter = createTRPCRouter({
  addLabel: publicProcedure
    .input(z.object({
      id: z.string().optional(),
      name: z.string(),
      color: z.string(),
      animalId: z.string().optional()
    }))
    .mutation(async ({ input, ctx }) => {

      if (input.id) {
        console.log('with id')
        const label = await ctx.prisma.label.update({
          where: {
            id: input.id
          },
          data: {
            animal: {
              connect: {
                id: input.animalId
              }
            }
          }
        })

        return label
      } else {
        const label = await ctx.prisma.label.create({
          data: {
            name: input.name,
            color: input.color,
            animal: {
              connect: {
                id: input.animalId
              }
            }
          }
        })

        return label
      }



      // return label
    }),
  listOfLables: publicProcedure
    .query(async ({ ctx }) => {
      const labels = await ctx.prisma.label.findMany()
      return labels
    })
})

export default LabelRouter