import type { TextProcessor } from '../../../../../ai/djl/modality/nlp/preprocess/TextProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextTruncator extends Object implements TextProcessor {
    constructor(arg0: number)
    // private maxSize: number;
    preprocess(arg0: string[]): string[];
}