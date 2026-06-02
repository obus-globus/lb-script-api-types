import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { Normalizer2Impl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { UTF16CollationIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/UTF16CollationIterator.d.ts'
export class FCDUTF16CollationIterator extends UTF16CollationIterator {
    constructor(d: CollationData)
    constructor(data: CollationData, numeric: boolean, s: CharSequence, p: number)
    // private checkDir: number;
    // private nfcImpl: Normalizer2Impl;
    // private normalized: StringBuilder;
    // private rawLimit: number;
    // private rawSeq: CharSequence;
    // private segmentLimit: number;
    // private segmentStart: number;
    backwardNumCodePoints(num: number): void;
    equals(other: Object | null): boolean;
    forwardNumCodePoints(num: number): void;
    getOffset(): number;
    handleNextCE32(): number;
    hashCode(): number;
    nextCodePoint(): number;
    // private nextSegment(): void;
    // private normalize(from: number, to: number): void;
    previousCodePoint(): number;
    // private previousSegment(): void;
    resetToOffset(newOffset: number): void;
    setText(numeric: boolean, s: CharSequence, p: number): void;
    // private switchToBackward(): void;
    // private switchToForward(): void;
}