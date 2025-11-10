import axios from "axios";
import { z } from "zod";

const CatFactSchema = z.object({
  fact: z.string(),
  length: z.number(),
});

export type CatFact = z.infer<typeof CatFactSchema>;

export async function fetchCatFact(): Promise<CatFact> {
  const res = await axios.get("https://catfact.ninja/fact");

  const parsed = CatFactSchema.safeParse(res.data);
  if (!parsed.success) {
    throw new Error("Invalid API data");
  }

  return parsed.data;
}
