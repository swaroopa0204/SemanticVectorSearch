// src/controllers/qaController.ts
import { Request, Response } from "express";
import { buildPrompt, getAnswerFromLLM } from "../services/llmService";
import { searchRelevantChunks } from "../services/searchService";

export const handleQA = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { query } = req.body;
    if (!query) {
      res.status(400).json({ error: "Query is required" });
      return;
    }

    const chunks = await searchRelevantChunks(query);
    const chunkTexts = chunks.map((c: any) => c.text);
    const prompt = buildPrompt(chunkTexts, query);
    const answer = await getAnswerFromLLM(prompt);

    res.json({ answer, sources: chunks.map((c: any) => c.source) });
  } catch (err: any) {
    console.error("QA API error:", err);
    res.status(500).json({ error: err.message || "Internal error" });
  }
};
