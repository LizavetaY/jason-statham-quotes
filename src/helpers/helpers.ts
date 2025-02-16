import * as fs from 'fs';
import * as path from 'path';
import { FileNames } from 'src/enums/file-names.enum';

export function getRandomQuote(quotes: string[] = []) {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  return quotes[randomIndex] || 'N/A';
}

export function getJSONData(fileName: FileNames) {
  const filePath = path.join(__dirname, `../quotes/${fileName}.json`);

  try {
    const data = fs.readFileSync(filePath, 'utf8');

    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${fileName}.json:`, error);
  }
}