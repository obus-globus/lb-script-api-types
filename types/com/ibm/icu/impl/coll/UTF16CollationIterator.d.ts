import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationIterator } from '../../../../../com/ibm/icu/impl/coll/CollationIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class UTF16CollationIterator extends CollationIterator {
    constructor(arg0: CollationData)
    constructor(arg0: CollationData, arg1: boolean, arg2: CharSequence, arg3: number)
    // private limit: number;
    // private pos: number;
    // private seq: CharSequence;
    // private start: number;
    backwardNumCodePoints(arg0: number): void;
    equals(arg0: Object | null): boolean;
    forwardNumCodePoints(arg0: number): void;
    getOffset(): number;
    handleGetTrailSurrogate(): string;
    handleNextCE32(): number;
    hashCode(): number;
    nextCodePoint(): number;
    previousCodePoint(): number;
    resetToOffset(arg0: number): void;
    setText(arg0: boolean, arg1: CharSequence, arg2: number): void;
}