import client from '../weaviate/weaviateClient';
import { generateEmbedding } from './embeddingService';

export async function searchRelevantChunks(query: string) {
    const embedding = await generateEmbedding(query);
    // const schema  =  await client.schema.Get();

    const result = await client.graphql.get()
        .withClassName("DocumentChunk")
        .withFields("text source _additional { distance }")
        .withNearVector({ vector: embedding})
        .withLimit(5) // or .withLimit(5)
        .do();

        console.log("result in service", result);
        return result.data.Get.DocumentChunk;
}