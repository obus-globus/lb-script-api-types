import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { RangesBuffer } from '../../../../../../com/oracle/truffle/regex/charset/RangesBuffer.d.ts'
import type { SortedListOfRanges } from '../../../../../../com/oracle/truffle/regex/charset/SortedListOfRanges.d.ts'
import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CaseFoldData$CaseFoldEquivalenceTable extends Object implements SortedListOfRanges {
    static adjacent(paramaLo: number, paramaHi: number, parambLo: number, parambHi: number): boolean;
    static contains(paramaLo: number, paramaHi: number, parambLo: number, parambHi: number): boolean;
    static intersect(parama: SortedListOfRanges, paramb: SortedListOfRanges, paramtarget: RangesBuffer): void;
    static intersects(paramaLo: number, paramaHi: number, parambLo: number, parambHi: number): boolean;
    static invert(parama: SortedListOfRanges, paramencoding: Encodings$Encoding, paramtarget: RangesBuffer): void;
    static leftOf(paramaHi: number, parambLo: number): boolean;
    static leftOf(paramaLo: number, paramaHi: number, parambLo: number, parambHi: number): boolean;
    static rightOf(paramaLo: number, parambHi: number): boolean;
    static rightOf(paramaLo: number, paramaHi: number, parambLo: number, parambHi: number): boolean;
    static union(parama: SortedListOfRanges, paramb: SortedListOfRanges, paramtarget: RangesBuffer): void;
    constructor(parent: CaseFoldData$CaseFoldEquivalenceTable, directMappings: (Object | null)[][], ranges: number[])
    // private directMappings: (Object | null)[][];
    // private parent: CaseFoldData$CaseFoldEquivalenceTable;
    // private ranges: number[];
    addRangeTo(buffer: RangesBuffer, i: number): void;
    adjacent(ia: number, o: SortedListOfRanges, ib: number): boolean;
    adjacent(ia: number, bLo: number, bHi: number): boolean;
    appendRangesTo(buffer: RangesBuffer, startIndex: number, endIndex: number): void;
    // private apply(codePointSet: Range[], tblEntryIndex: number, intersectionLo: number, intersectionHi: number): void;
    // private applyCaseFold(dst: Range[], r: Range): void;
    applyCaseFold(dst: Range[], src: Range[]): void;
    binarySearch(keyLo: number): number;
    binarySearchExactMatch(searchResult: number, o: SortedListOfRanges, ib: number): boolean;
    binarySearchExactMatch(searchResult: number, bLo: number, bHi: number): boolean;
    binarySearchGetFirstIntersecting(searchResult: number, o: SortedListOfRanges, ib: number): number;
    binarySearchGetFirstIntersecting(searchResult: number, bLo: number, bHi: number): number;
    binarySearchGetFirstIntersectingOrAdjacent(searchResult: number, bLo: number, bHi: number): number;
    binarySearchGetFirstIntersectingOrAdjacent(searchResult: number, oLo: number, oHi: number, includeAdjacent: boolean): number;
    binarySearchNoIntersectingFound(firstIntersecting: number): boolean;
    containedBy(ia: number, bLo: number, bHi: number): boolean;
    contains(o: SortedListOfRanges): boolean;
    contains(codePoint: number): boolean;
    contains(ia: number, o: SortedListOfRanges, ib: number): boolean;
    contains(ia: number, bLo: number, bHi: number): boolean;
    defaultToString(): string;
    equal(ia: number, o: SortedListOfRanges, ib: number): boolean;
    equal(ia: number, bLo: number, bHi: number): boolean;
    equalsIgnoreCase(codePointA: number, codePointB: number): boolean;
    // private equalsIgnoreCase(tblEntryIndex: number, codePointA: number, codePointB: number): boolean;
    equalsListOfRanges(o: SortedListOfRanges): boolean;
    getHi(i: number): number;
    getLo(i: number): number;
    getMax(): number;
    getMin(): number;
    intersects(o: SortedListOfRanges): boolean;
    intersects(ia: number, o: SortedListOfRanges, ib: number): boolean;
    intersects(ia: number, bLo: number, bHi: number): boolean;
    inverseGetMax(encoding: Encodings$Encoding): number;
    inverseGetMin(encoding: Encodings$Encoding): number;
    inverseRangesToString(encoding: Encodings$Encoding): string;
    inverseValueCount(encoding: Encodings$Encoding): number;
    isEmpty(): boolean;
    isSingle(i: number): boolean;
    leftOf(ia: number, o: SortedListOfRanges, ib: number): boolean;
    leftOf(ia: number, bLo: number, bHi: number): boolean;
    matches2CharsWith1BitDifference(): boolean;
    matchesEverything(encoding: Encodings$Encoding): boolean;
    matchesMinAndMax(encoding: Encodings$Encoding): boolean;
    matchesNothing(): boolean;
    matchesSingleAscii(): boolean;
    matchesSingleChar(): boolean;
    matchesSomething(): boolean;
    rangesAreSortedAndDisjoint(): boolean;
    rangesAreSortedNonAdjacentAndDisjoint(): boolean;
    rangesToString(): string;
    rightOf(ia: number, o: SortedListOfRanges, ib: number): boolean;
    rightOf(ia: number, bLo: number, bHi: number): boolean;
    size(i: number): number;
    size(): number;
    sizeOfInverse(encoding: Encodings$Encoding): number;
    valueCount(): number;
    valueCountEquals(cmp: number): boolean;
    valueCountMax(cmp: number): boolean;
}