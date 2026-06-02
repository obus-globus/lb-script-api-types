import type { TextProcessor } from '../../../../../ai/djl/modality/nlp/preprocess/TextProcessor.d.ts'
import type { Normalizer$Form } from '../../../../../java/text/Normalizer$Form.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnicodeNormalizer extends Object implements TextProcessor {
    static DEFAULT_FORM: Normalizer$Form;
    static normalizeDefault(paramarg0: string): string;
    constructor()
    constructor(arg0: Normalizer$Form)
    // private normalForm: Normalizer$Form;
    preprocess(arg0: string[]): string[];
}