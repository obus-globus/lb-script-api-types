import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationIterator$CEBuffer } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationIterator$CEBuffer.d.ts'
import type { CollationIterator$SkippedState } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationIterator$SkippedState.d.ts'
import type { UVector32 } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/UVector32.d.ts'
import type { CharsTrie$Entry } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CharsTrie$Entry.d.ts'
export abstract class CollationIterator extends Object {
    constructor(d: CollationData)
    constructor(d: CollationData, numeric: boolean)
    // private ceBuffer: CollationIterator$CEBuffer;
    // private cesIndex: number;
    // private data: CollationData;
    // private isNumeric: boolean;
    // private numCpFwd: number;
    // private skipped: CollationIterator$SkippedState;
    // private trie: (Object | null)[];
    appendCEsFromCE32(d: CollationData, c: number, ce32: number, forward: boolean): void;
    // private appendNumericCEs(ce32: number, forward: boolean): void;
    // private appendNumericSegmentCEs(digits: CharSequence): void;
    backwardNumCodePoints(num: number): void;
    // private backwardNumSkipped(n: number): void;
    clearCEs(): void;
    clearCEsIfNoneRemaining(): void;
    equals(other: Object | null): boolean;
    fetchCEs(): number;
    forbidSurrogateCodePoints(): boolean;
    forwardNumCodePoints(num: number): void;
    getCE(i: number): number;
    getCE32FromBuilderData(ce32: number): number;
    // private getCE32FromPrefix(d: CollationData, ce32: number): number;
    getCEs(): number[];
    getCEsLength(): number;
    getDataCE32(c: number): number;
    getOffset(): number;
    handleGetTrailSurrogate(): string;
    handleNextCE32(): number;
    hashCode(): number;
    makeCodePointAndCE32Pair(c: number, ce32: number): number;
    nextCE(): number;
    // private nextCE32FromContraction(d: CollationData, contractionCE32: number, trieChars: CharSequence, trieOffset: number, ce32: number, c: number): number;
    // private nextCE32FromDiscontiguousContraction(d: CollationData, suffixes: CharsTrie$Entry[], ce32: number, lookAhead: number, c: number): number;
    // private nextCEFromCE32(d: CollationData, c: number, ce32: number): number;
    nextCodePoint(): number;
    // private nextSkippedCodePoint(): number;
    previousCE(offsets: UVector32): number;
    // private previousCEUnsafe(c: number, offsets: UVector32): number;
    previousCodePoint(): number;
    reset(): void;
    reset(numeric: boolean): void;
    resetToOffset(newOffset: number): void;
    setCurrentCE(ce: number): void;
}