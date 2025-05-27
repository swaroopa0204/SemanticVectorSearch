export function chunkText(text: string, maxChunkSize = 500): string[] {
    const words = text.split(' ');
    const chunks: string[] = [];
    let chunk = '';

    for (const word of words) {
        if ((chunk + word).length <= maxChunkSize) {
            chunk += (chunk ? ' ' : '') + word;
        } else {
            chunks.push(chunk);
            chunk = word;
        }
    }

    if (chunk) chunks.push(chunk);
    return chunks;
}