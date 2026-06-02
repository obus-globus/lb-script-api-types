import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationIterator.d.ts'
export class UTF16CollationIterator extends CollationIterator {
    constructor(d: CollationData)
    constructor(d: CollationData, numeric: boolean, s: CharSequence, p: number)
    // private limit: number;
    // private pos: number;
    // private seq: CharSequence;
    // private start: number;
    backwardNumCodePoints(num: number): void;
    equals(other: Object | null): boolean;
    forwardNumCodePoints(num: number): void;
    getOffset(): number;
    handleGetTrailSurrogate(): string;
    handleNextCE32(): number;
    hashCode(): number;
    nextCodePoint(): number;
    previousCodePoint(): number;
    resetToOffset(newOffset: number): void;
    setText(numeric: boolean, s: CharSequence, p: number): void;
}