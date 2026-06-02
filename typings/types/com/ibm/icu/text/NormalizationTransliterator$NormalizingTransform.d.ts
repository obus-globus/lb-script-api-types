import type { Normalizer2 } from '../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { Transform } from '../../../../com/ibm/icu/text/Transform.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NormalizationTransliterator$NormalizingTransform extends Object implements Transform<string, string> {
    constructor(arg0: Normalizer2)
    // private norm2: Normalizer2;
    transform(arg0: string): string;
}