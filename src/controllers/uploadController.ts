import { chunkText } from "../utils/chunkText";
import { generateEmbedding } from "../services/embeddingService";
import { parseFileToText } from "../utils/fileParser";
import { Request, Response } from "express";
import { storeChunkEmbedding } from "../services/weaviateService";
import client from "../weaviate/weaviateClient";

export const handleFileUpload = async(req: Request, res: Response) => {
    try {
        const filePath = req.file?.path;
        const fileName = req.file?.originalname;
        console.log("FIle name is",fileName);
        if (!filePath) throw new Error("No File Uploaded");

        const extrctedText = await parseFileToText(filePath, fileName);
        const chunks = chunkText(extrctedText);

        const embeddings  = await Promise.all(chunks.map(chunk => generateEmbedding(chunk)));

        // res.json({
        //     chunks,
        //     embeddings,
        //     message: "Embeddings generated Successfully"
        // });
        for (let i = 0; i < chunks.length; i++) {
            await storeChunkEmbedding(chunks[i], embeddings[i], fileName);
          }
          const sanityCheck = await client.graphql.get()
      .withClassName("DocumentChunk")
      .withFields("text source")
      .withLimit(5)
      .do();

    console.log("📦 Sample chunks in DB:", sanityCheck.data.Get.DocumentChunk);

        
          res.json({ message: "File processed and stored in vector DB." });

    } catch (error:any) {
        console.error("Upload error", error);
        res.status(500).json({error: error.message})
    }
};