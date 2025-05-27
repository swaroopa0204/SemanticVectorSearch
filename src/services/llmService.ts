import hfClient from "../huggingface/client"

// Building Prompt

export function buildPrompt(chunks: string[], query: string): string {
    const context = chunks.map((chunk, idx) => `---\n${chunk}`).join('\n');
    return `You are a helpful assistant. Use the following context to answer the question.\n\nContext:\n${context}\n\nQuestion: ${query}\n\nAnswer:`;
  }

export async function getAnswerFromLLM(prompt: string): Promise<string> {
    const response = await hfClient.textGeneration({
        model: "EleutherAI/gpt-neo-1.3B",
        inputs: prompt,
        parameters: {
            max_new_tokens: 150
        },
    });

    if(Array.isArray(response) && response.length > 0) {
        return response[0].generate_text.trim();
    }
    throw new Error("LLM failed to generate a response.");
}