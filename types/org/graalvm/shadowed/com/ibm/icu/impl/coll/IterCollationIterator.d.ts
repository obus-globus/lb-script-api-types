import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationIterator.d.ts'
import type { UCharacterIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UCharacterIterator.d.ts'
export class IterCollationIterator extends CollationIterator {
    constructor(d: CollationData, numeric: boolean, ui: UCharacterIterator)
    // private iter: UCharacterIterator;
    backwardNumCodePoints(num: number): void;
    forwardNumCodePoints(num: number): void;
    getOffset(): number;
    handleGetTrailSurrogate(): string;
    handleNextCE32(): number;
    nextCodePoint(): number;
    previousCodePoint(): number;
    resetToOffset(newOffset: number): void;
}