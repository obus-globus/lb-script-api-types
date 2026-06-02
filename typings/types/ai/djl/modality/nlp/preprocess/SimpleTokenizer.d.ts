import type { Tokenizer } from '../../../../../ai/djl/modality/nlp/preprocess/Tokenizer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SimpleTokenizer extends Object implements Tokenizer {
    constructor()
    constructor(arg0: string)
    // private delimiter: string;
    buildSentence(arg0: string[]): string;
    preprocess(arg0: string[]): string[];
    tokenize(arg0: string): string[];
}