import type { Normalizer2 } from '../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { Transform } from '../../../../com/ibm/icu/text/Transform.d.ts'
import type { Transliterator } from '../../../../com/ibm/icu/text/Transliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SourceTargetUtility extends Object {
    constructor(arg0: Transform<string, string>)
    constructor(arg0: Transform<string, string>, arg1: Normalizer2)
    // private sourceCache: string[];
    // private sourceStrings: string[];
    // private transform: Transform<string, string>;
    addSourceTargetSet(arg0: Transliterator, arg1: string[], arg2: string[], arg3: string[]): void;
}