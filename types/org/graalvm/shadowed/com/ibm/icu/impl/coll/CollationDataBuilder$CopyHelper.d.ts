import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationDataBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationDataBuilder.d.ts'
import type { CollationDataBuilder$CEModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationDataBuilder$CEModifier.d.ts'
export class CollationDataBuilder$CopyHelper extends Object {
    constructor(s: CollationDataBuilder, d: CollationDataBuilder, m: CollationDataBuilder$CEModifier)
    // private dest: CollationDataBuilder;
    // private modifiedCEs: number[];
    // private modifier: CollationDataBuilder$CEModifier;
    // private src: CollationDataBuilder;
    copyCE32(ce32: number): number;
    copyRangeCE32(start: number, end: number, ce32: number): void;
}