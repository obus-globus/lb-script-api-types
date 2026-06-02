import type { TextProcessor } from '../../../../../ai/djl/modality/nlp/preprocess/TextProcessor.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LowerCaseConvertor extends Object implements TextProcessor {
    constructor()
    constructor(arg0: Locale)
    // private locale: Locale;
    preprocess(arg0: string[]): string[];
}