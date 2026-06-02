import type { RangesBuffer } from '../../../../../com/oracle/truffle/regex/charset/RangesBuffer.d.ts'
import type { Encodings$Encoding } from '../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SortedListOfRanges extends Object{
    addRangeTo(buffer: RangesBuffer, i: number): void;
    adjacent(ia: number, o: SortedListOfRanges, ib: number): boolean;
    adjacent(ia: number, bLo: number, bHi: number): boolean;
    appendRangesTo(buffer: RangesBuffer, startIndex: number, endIndex: number): void;
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
    size(): number;
    size(i: number): number;
    sizeOfInverse(encoding: Encodings$Encoding): number;
    valueCount(): number;
    valueCountEquals(cmp: number): boolean;
    valueCountMax(cmp: number): boolean;
}