import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationIterator.d.ts'
import type { CollationSettings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationSettings.d.ts'
export class CollationCompare extends Object {
    static compareUpToQuaternary(paramleft: CollationIterator, paramright: CollationIterator, paramsettings: CollationSettings): number;
    constructor()
}