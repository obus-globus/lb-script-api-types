import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationIterator$CEBuffer } from '../../../../../com/ibm/icu/impl/coll/CollationIterator$CEBuffer.d.ts'
import type { CollationIterator$SkippedState } from '../../../../../com/ibm/icu/impl/coll/CollationIterator$SkippedState.d.ts'
import type { UVector32 } from '../../../../../com/ibm/icu/impl/coll/UVector32.d.ts'
import type { CharsTrie$Entry } from '../../../../../com/ibm/icu/util/CharsTrie$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class CollationIterator extends Object {
    constructor(arg0: CollationData)
    constructor(arg0: CollationData, arg1: boolean)
    // private ceBuffer: CollationIterator$CEBuffer;
    // private cesIndex: number;
    // private data: CollationData;
    // private isNumeric: boolean;
    // private numCpFwd: number;
    // private skipped: CollationIterator$SkippedState;
    // private trie: (Object | null)[];
    appendCEsFromCE32(arg0: CollationData, arg1: number, arg2: number, arg3: boolean): void;
    // private appendNumericCEs(arg0: number, arg1: boolean): void;
    // private appendNumericSegmentCEs(arg0: CharSequence): void;
    backwardNumCodePoints(arg0: number): void;
    // private backwardNumSkipped(arg0: number): void;
    clearCEs(): void;
    clearCEsIfNoneRemaining(): void;
    equals(arg0: Object | null): boolean;
    fetchCEs(): number;
    forbidSurrogateCodePoints(): boolean;
    forwardNumCodePoints(arg0: number): void;
    getCE(arg0: number): number;
    getCE32FromBuilderData(arg0: number): number;
    // private getCE32FromPrefix(arg0: CollationData, arg1: number): number;
    getCEs(): number[];
    getCEsLength(): number;
    getDataCE32(arg0: number): number;
    getOffset(): number;
    handleGetTrailSurrogate(): string;
    handleNextCE32(): number;
    hashCode(): number;
    makeCodePointAndCE32Pair(arg0: number, arg1: number): number;
    nextCE(): number;
    // private nextCE32FromContraction(arg0: CollationData, arg1: number, arg2: CharSequence, arg3: number, arg4: number, arg5: number): number;
    // private nextCE32FromDiscontiguousContraction(arg0: CollationData, arg1: CharsTrie$Entry[], arg2: number, arg3: number, arg4: number): number;
    // private nextCEFromCE32(arg0: CollationData, arg1: number, arg2: number): number;
    nextCodePoint(): number;
    // private nextSkippedCodePoint(): number;
    previousCE(arg0: UVector32): number;
    // private previousCEUnsafe(arg0: number, arg1: UVector32): number;
    previousCodePoint(): number;
    reset(): void;
    reset(arg0: boolean): void;
    resetToOffset(arg0: number): void;
    setCurrentCE(arg0: number): void;
}