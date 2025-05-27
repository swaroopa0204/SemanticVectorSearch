import { InferenceClient } from "@huggingface/inference";
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.HUGGINGFACE_API_KEY) {
    throw new Error("Missing HuggingFace API key");
  }

const hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

export async function generateEmbedding(text: string): Promise<number[]> {
    console.log("Text", text);
    const result = await hf.featureExtraction({
        model: "sentence-transformers/all-MiniLM-L6-v2",
        inputs: [text],
    });
    console.log("Raw embedding result:", result);

    // if(Array.isArray(result)) {
    //     if(Array.isArray(result[0])) {
    //         return result[0] as number[];
    //     }
    //     return result as number[];
    // }
    if (Array.isArray(result) && Array.isArray(result[0])) {
        return result[0] as number[];
      }
    
    throw new Error("Failed to Generate Embeddings: Unexpected output type");
}
