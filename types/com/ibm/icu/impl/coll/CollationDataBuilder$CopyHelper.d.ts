import type { CollationDataBuilder } from '../../../../../com/ibm/icu/impl/coll/CollationDataBuilder.d.ts'
import type { CollationDataBuilder$CEModifier } from '../../../../../com/ibm/icu/impl/coll/CollationDataBuilder$CEModifier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationDataBuilder$CopyHelper extends Object {
    constructor(arg0: CollationDataBuilder, arg1: CollationDataBuilder, arg2: CollationDataBuilder$CEModifier)
    // private dest: CollationDataBuilder;
    // private modifiedCEs: number[];
    // private modifier: CollationDataBuilder$CEModifier;
    // private src: CollationDataBuilder;
    copyCE32(arg0: number): number;
    copyRangeCE32(arg0: number, arg1: number, arg2: number): void;
}