import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Normalizer2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2.d.ts'
import type { Transform } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transform.d.ts'
export class NormalizationTransliterator$NormalizingTransform extends Object implements Transform<string, string> {
    constructor(norm2: Normalizer2)
    // private norm2: Normalizer2;
    transform(source: string): string;
}