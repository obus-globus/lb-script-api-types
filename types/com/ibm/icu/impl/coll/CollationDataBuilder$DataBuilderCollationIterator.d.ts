import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationDataBuilder } from '../../../../../com/ibm/icu/impl/coll/CollationDataBuilder.d.ts'
import type { CollationIterator } from '../../../../../com/ibm/icu/impl/coll/CollationIterator.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CollationDataBuilder$DataBuilderCollationIterator extends CollationIterator {
    constructor(arg0: CollationDataBuilder, arg1: CollationData)
    // private builder: CollationDataBuilder;
    // private builderData: CollationData;
    // private jamoCE32s: number[];
    // private pos: number;
    // private s: CharSequence;
    backwardNumCodePoints(arg0: number): void;
    fetchCEs(arg0: CharSequence, arg1: number, arg2: number[], arg3: number): number;
    forwardNumCodePoints(arg0: number): void;
    getCE32FromBuilderData(arg0: number): number;
    getDataCE32(arg0: number): number;
    getOffset(): number;
    nextCodePoint(): number;
    previousCodePoint(): number;
    resetToOffset(arg0: number): void;
}