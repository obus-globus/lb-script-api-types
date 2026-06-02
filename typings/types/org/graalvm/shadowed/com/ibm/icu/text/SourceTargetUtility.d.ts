import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Normalizer2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2.d.ts'
import type { Transform } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transform.d.ts'
import type { Transliterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator.d.ts'
export class SourceTargetUtility extends Object {
    constructor(transform: Transform<string, string>)
    constructor(transform: Transform<string, string>, normalizer: Normalizer2)
    // private sourceCache: string[];
    // private sourceStrings: string[];
    // private transform: Transform<string, string>;
    addSourceTargetSet(transliterator: Transliterator, inputFilter: string[], sourceSet: string[], targetSet: string[]): void;
}