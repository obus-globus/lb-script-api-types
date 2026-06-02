import type { TextProcessor } from '../../../../../ai/djl/modality/nlp/preprocess/TextProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextTerminator extends Object implements TextProcessor {
    constructor()
    constructor(arg0: boolean, arg1: boolean)
    constructor(arg0: boolean, arg1: boolean, arg2: string, arg3: string)
    // private addBosToken: boolean;
    // private addEosToken: boolean;
    // private bosToken: string;
    // private eosToken: string;
    preprocess(arg0: string[]): string[];
}