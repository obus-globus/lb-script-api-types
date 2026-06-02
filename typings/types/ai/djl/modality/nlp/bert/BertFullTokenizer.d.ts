import type { Vocabulary } from '../../../../../ai/djl/modality/nlp/Vocabulary.d.ts'
import type { BertTokenizer } from '../../../../../ai/djl/modality/nlp/bert/BertTokenizer.d.ts'
import type { WordpieceTokenizer } from '../../../../../ai/djl/modality/nlp/bert/WordpieceTokenizer.d.ts'
import type { TextProcessor } from '../../../../../ai/djl/modality/nlp/preprocess/TextProcessor.d.ts'
export class BertFullTokenizer extends BertTokenizer {
    static getPreprocessors(paramarg0: boolean): TextProcessor[];
    constructor(arg0: Vocabulary, arg1: boolean)
    // private basicBertPreprocessors: TextProcessor[];
    readonly vocabulary: Vocabulary;
    // private wordpieceTokenizer: WordpieceTokenizer;
    buildSentence(arg0: string[]): string;
    getVocabulary(): Vocabulary;
    tokenize(arg0: string): string[];
}