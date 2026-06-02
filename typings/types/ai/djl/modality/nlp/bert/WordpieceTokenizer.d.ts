import type { Vocabulary } from '../../../../../ai/djl/modality/nlp/Vocabulary.d.ts'
import type { SimpleTokenizer } from '../../../../../ai/djl/modality/nlp/preprocess/SimpleTokenizer.d.ts'
export class WordpieceTokenizer extends SimpleTokenizer {
    constructor(arg0: Vocabulary, arg1: string, arg2: number)
    // private maxInputChars: number;
    // private unknown: string;
    // private vocabulary: Vocabulary;
    tokenize(arg0: string): string[];
}