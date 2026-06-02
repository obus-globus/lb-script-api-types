import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationIterator } from '../../../../../com/ibm/icu/impl/coll/CollationIterator.d.ts'
import type { UCharacterIterator } from '../../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
export class IterCollationIterator extends CollationIterator {
    constructor(arg0: CollationData, arg1: boolean, arg2: UCharacterIterator)
    // private iter: UCharacterIterator;
    backwardNumCodePoints(arg0: number): void;
    forwardNumCodePoints(arg0: number): void;
    getOffset(): number;
    handleGetTrailSurrogate(): string;
    handleNextCE32(): number;
    nextCodePoint(): number;
    previousCodePoint(): number;
    resetToOffset(arg0: number): void;
}