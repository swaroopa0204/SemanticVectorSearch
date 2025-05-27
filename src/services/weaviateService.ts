import client from "../weaviate/weaviateClient";

export async function storeChunkEmbedding(text: string, embedding: number[], source = "uploaded") {
  const response = await client.data.creator()
    .withClassName("DocumentChunk")
    .withProperties({ text, source })
    .withVector(embedding)
    .do();

  return response;
}
