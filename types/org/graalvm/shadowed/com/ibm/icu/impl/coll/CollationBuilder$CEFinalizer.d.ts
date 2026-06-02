import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationDataBuilder$CEModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationDataBuilder$CEModifier.d.ts'
export class CollationBuilder$CEFinalizer extends Object implements CollationDataBuilder$CEModifier {
    constructor(ces: number[])
    // private finalCEs: number[];
    modifyCE(ce: number): number;
    modifyCE32(ce32: number): number;
}