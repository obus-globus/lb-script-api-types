import type { BertToken } from '../../../../../ai/djl/modality/nlp/bert/BertToken.d.ts'
import type { SimpleTokenizer } from '../../../../../ai/djl/modality/nlp/preprocess/SimpleTokenizer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BertTokenizer extends SimpleTokenizer {
    constructor()
    encode(arg0: string, arg1: string): BertToken;
    encode(arg0: string, arg1: string, arg2: number): BertToken;
    pad<E extends unknown>(arg0: E[], arg1: E, arg2: number): E[];
    tokenToString(arg0: string[]): string;
    tokenize(arg0: string): string[];
}