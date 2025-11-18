import { Router } from "express";
import { db } from "../db";
import { catFacts } from "../models";
import { fetchCatFact } from "../utils/fetchCatFact";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const router = Router();

// Fetch → Validate → Save
router.post("/fetch", async (_req, res) => {
  try {
    const data = await fetchCatFact();
    await db.insert(catFacts).values(data);
    res.json({ message: "saved", data });
  } catch (err: any) {
    res.status(400).json({ error: err.message || "fetch failed" });
  }
});

// Zod validation for create/update
const BodySchema = z.object({
  fact: z.string().min(5),
  length: z.number().int().positive(),
});

// CREATE manually
router.post("/", async (req, res) => {
  try {
    const fact = req.body.fact;

    // Basic validation
    if (!fact || fact.length < 5) {
      return res.status(400).json({ error: "Fact too short or missing" });
    }

    // Insert into DB and compute length automatically
    await db.insert(catFacts).values({
      fact,
      length: fact.length
    });

    // ✅ Return all facts after inserting the new one
    const rows = await db.select().from(catFacts);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error inserting cat fact" });
  }
});


// READ all
router.get("/", async (_req, res) => {
  const rows = await db.select().from(catFacts);
  res.json(rows);
});

// READ one
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  // invalid id check

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const result = await db
    .select()
    .from(catFacts)
    .where(eq(catFacts.id, id))
    .limit(1);
    // not found check

  if (result.length === 0) {
    return res.status(404).json({ error: "Not found" });
  }

  res.json(result[0]);
});


//COUNT 
router.get("/count/all", async (req, res) => {
  const facts = await db.select().from(catFacts);
  res.json({ count: facts.length });
});

// UPDATE
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const parsed = BodySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  await db.update(catFacts).set(parsed.data).where(eq(catFacts.id, id));
  res.json({ message: "updated" });
});

// DELETE
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  await db.delete(catFacts).where(eq(catFacts.id, id));
  res.json({ message: "deleted" });
});

// DELETE all
router.delete("/", async (req, res) => {
  await db.delete(catFacts);
  res.json({ message: "all facts deleted" });
});

