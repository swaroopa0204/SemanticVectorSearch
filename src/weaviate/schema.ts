import client from "./weaviateClient";

export async function createSchema() {
  const existing = await client.schema.getter().do();
  const found = existing.classes?.some(c => c.class === "DocumentChunk");
  if (found) return;

  await client.schema.classCreator().withClass({
    class: "DocumentChunk",
    description: "Chunks of uploaded documents",
    properties: [
      { name: "text", dataType: ["string"] },
      { name: "source", dataType: ["string"] },
    ],
    vectorIndexType: "hnsw",
    vectorizer: "none",
  }).do();

  console.log("✅ Schema created on Weaviate Cloud");
}
