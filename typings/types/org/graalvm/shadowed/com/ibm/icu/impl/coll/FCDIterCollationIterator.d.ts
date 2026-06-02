import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { Normalizer2Impl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { FCDIterCollationIterator$State } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/FCDIterCollationIterator$State.d.ts'
import type { IterCollationIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/IterCollationIterator.d.ts'
import type { UCharacterIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UCharacterIterator.d.ts'
export class FCDIterCollationIterator extends IterCollationIterator {
    constructor(data: CollationData, numeric: boolean, ui: UCharacterIterator, startIndex: number)
    // private limit: number;
    // private nfcImpl: Normalizer2Impl;
    // private normalized: StringBuilder;
    // private pos: number;
    // private s: StringBuilder;
    // private start: number;
    // private state: FCDIterCollationIterator$State;
    backwardNumCodePoints(num: number): void;
    forwardNumCodePoints(num: number): void;
    getOffset(): number;
    handleGetTrailSurrogate(): string;
    handleNextCE32(): number;
    nextCodePoint(): number;
    // private nextSegment(): boolean;
    // private normalize(s: CharSequence): void;
    previousCodePoint(): number;
    // private previousSegment(): boolean;
    resetToOffset(newOffset: number): void;
    // private switchToBackward(): void;
    // private switchToForward(): void;
}