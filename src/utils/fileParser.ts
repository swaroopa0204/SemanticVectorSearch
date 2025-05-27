import fs from 'fs';
import path from 'path';
import mammoth from 'mammoth';
import pdfParse from 'pdf-parse';

export async function parseFileToText(filePath: any, fileName: any): Promise<string> {
    const ext = path.extname(fileName).toLowerCase();

    if(ext === '.pdf'){
        const dataBuffer = fs.readFileSync(filePath);
        const pdfData = await pdfParse(dataBuffer);
        return pdfData.text;
    }

    if(ext == '.docx') {
        const result = await mammoth.extractRawText({path: filePath})
        return result.value;
    }

    if(ext == '.txt') {
        return fs.readFileSync(filePath, 'utf8');
    }

    throw new Error("Unsupported File Format");

}