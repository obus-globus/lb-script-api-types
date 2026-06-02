import type { TextProcessor } from '../../../../../ai/djl/modality/nlp/preprocess/TextProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PunctuationSeparator extends Object implements TextProcessor {
    constructor()
    preprocess(arg0: string[]): string[];
}