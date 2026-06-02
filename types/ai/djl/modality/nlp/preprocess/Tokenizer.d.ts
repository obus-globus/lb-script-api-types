import type { TextProcessor } from '../../../../../ai/djl/modality/nlp/preprocess/TextProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Tokenizer extends TextProcessor, Object{
    buildSentence(arg0: string[]): string;
    preprocess(arg0: string[]): string[];
    tokenize(arg0: string): string[];
}