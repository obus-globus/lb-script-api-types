import type { TextProcessor } from '../../../../../ai/djl/modality/nlp/preprocess/TextProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HyphenNormalizer extends Object implements TextProcessor {
    static isHyphenLike(paramarg0: number): boolean;
    static normalizeHyphens(paramarg0: string): string;
    constructor()
    preprocess(arg0: string[]): string[];
}