import { Gender } from "@prisma/client";

// prettier-ignore
export const labels : Record<Gender, string> = {
  'men': "hombres",
  'women': "mujeres",
  'kid': "niños",
  'unisex': 'todos'
};
