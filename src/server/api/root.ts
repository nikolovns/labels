import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import AnimalRouter from "./routers/animal-router";
import LabelRouter from "./routers/label-router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  animalRouter: AnimalRouter,
  labelRouter: LabelRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
