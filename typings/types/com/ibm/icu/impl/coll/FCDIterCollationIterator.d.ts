import type { Normalizer2Impl } from '../../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { FCDIterCollationIterator$State } from '../../../../../com/ibm/icu/impl/coll/FCDIterCollationIterator$State.d.ts'
import type { IterCollationIterator } from '../../../../../com/ibm/icu/impl/coll/IterCollationIterator.d.ts'
import type { UCharacterIterator } from '../../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class FCDIterCollationIterator extends IterCollationIterator {
    constructor(arg0: CollationData, arg1: boolean, arg2: UCharacterIterator, arg3: number)
    // private limit: number;
    // private nfcImpl: Normalizer2Impl;
    // private normalized: StringBuilder;
    // private pos: number;
    // private s: StringBuilder;
    // private start: number;
    // private state: FCDIterCollationIterator$State;
    backwardNumCodePoints(arg0: number): void;
    forwardNumCodePoints(arg0: number): void;
    getOffset(): number;
    handleGetTrailSurrogate(): string;
    handleNextCE32(): number;
    nextCodePoint(): number;
    // private nextSegment(): boolean;
    // private normalize(arg0: CharSequence): void;
    previousCodePoint(): number;
    // private previousSegment(): boolean;
    resetToOffset(arg0: number): void;
    // private switchToBackward(): void;
    // private switchToForward(): void;
}