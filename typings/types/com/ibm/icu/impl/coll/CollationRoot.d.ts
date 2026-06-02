import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationTailoring } from '../../../../../com/ibm/icu/impl/coll/CollationTailoring.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationRoot extends Object {
    static getData(): CollationData;
    static getRoot(): CollationTailoring;
    constructor()
}