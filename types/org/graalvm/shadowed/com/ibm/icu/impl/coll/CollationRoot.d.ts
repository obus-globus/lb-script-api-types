import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationTailoring } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationTailoring.d.ts'
export class CollationRoot extends Object {
    static getData(): CollationData;
    static getRoot(): CollationTailoring;
    constructor()
}