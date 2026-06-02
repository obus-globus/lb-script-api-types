import type { TextProcessor } from '../../../../../ai/djl/modality/nlp/preprocess/TextProcessor.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextCleaner extends Object implements TextProcessor {
    constructor(arg0: (param0: string) => boolean)
    constructor(arg0: (param0: string) => boolean, arg1: string)
    // private condition: (param0: string) => boolean;
    // private replace: string;
    // private cleanText(arg0: string): string;
    preprocess(arg0: string[]): string[];
}