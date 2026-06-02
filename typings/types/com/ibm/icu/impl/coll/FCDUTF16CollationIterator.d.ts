import type { Normalizer2Impl } from '../../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { UTF16CollationIterator } from '../../../../../com/ibm/icu/impl/coll/UTF16CollationIterator.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class FCDUTF16CollationIterator extends UTF16CollationIterator {
    constructor(arg0: CollationData)
    constructor(arg0: CollationData, arg1: boolean, arg2: CharSequence, arg3: number)
    // private checkDir: number;
    // private nfcImpl: Normalizer2Impl;
    // private normalized: StringBuilder;
    // private rawLimit: number;
    // private rawSeq: CharSequence;
    // private segmentLimit: number;
    // private segmentStart: number;
    backwardNumCodePoints(arg0: number): void;
    equals(arg0: Object | null): boolean;
    forwardNumCodePoints(arg0: number): void;
    getOffset(): number;
    handleNextCE32(): number;
    hashCode(): number;
    nextCodePoint(): number;
    // private nextSegment(): void;
    // private normalize(arg0: number, arg1: number): void;
    previousCodePoint(): number;
    // private previousSegment(): void;
    resetToOffset(arg0: number): void;
    setText(arg0: boolean, arg1: CharSequence, arg2: number): void;
    // private switchToBackward(): void;
    // private switchToForward(): void;
}