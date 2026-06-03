import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationDataBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationDataBuilder.d.ts'
import type { CollationIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationIterator.d.ts'
export class CollationDataBuilder$DataBuilderCollationIterator extends CollationIterator {
    constructor(b: CollationDataBuilder, newData: CollationData)
    // private builder: CollationDataBuilder;
    // private builderData: CollationData;
    // private jamoCE32s: number[];
    // private pos: number;
    // private s: CharSequence;
    backwardNumCodePoints(num: number): void;
    fetchCEs(): number;
    fetchCEs(str: CharSequence, start: number, ces: number[], cesLength: number): number;
    forwardNumCodePoints(num: number): void;
    getCE32FromBuilderData(ce32: number): number;
    getDataCE32(c: number): number;
    getOffset(): number;
    nextCodePoint(): number;
    previousCodePoint(): number;
    resetToOffset(newOffset: number): void;
}