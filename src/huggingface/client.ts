import { InferenceClient } from "@huggingface/inference";
import dotenv from "dotenv"

dotenv.config();

const apiKey = process.env.HUGGINGFACE_API_KEY;
if(!apiKey) {
    throw new Error("HUGGINGFACE_API_KEY is not defined in .env")
}

const hfClient = new InferenceClient(apiKey)

export default hfClient;