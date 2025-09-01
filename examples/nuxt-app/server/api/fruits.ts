import { fruits } from "~~/server/data/fruits";

export default defineEventHandler(async (_event) => {
  return fruits;
});
