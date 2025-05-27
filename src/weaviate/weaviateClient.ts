import weaviate from "weaviate-ts-client";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.WEAVIATE_API_KEY
if (!apiKey) {
    throw new Error("WEAVIATE_API_KEY is not defined in your .env file.");
}
const client = weaviate.client({
    scheme: 'https',
    host: 'xhb64wlftaqvl1yzsotwyg.c0.us-west3.gcp.weaviate.cloud',
    apiKey: new weaviate.ApiKey(apiKey)
});
  
export default client;

