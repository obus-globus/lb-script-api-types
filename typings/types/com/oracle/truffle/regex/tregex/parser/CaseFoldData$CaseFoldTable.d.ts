import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { RangesBuffer } from '../../../../../../com/oracle/truffle/regex/charset/RangesBuffer.d.ts'
import type { SortedListOfRanges } from '../../../../../../com/oracle/truffle/regex/charset/SortedListOfRanges.d.ts'
import type { CaseUnfoldingTrie } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseUnfoldingTrie.d.ts'
import type { Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encoding.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CaseFoldData$CaseFoldTable extends Object implements SortedListOfRanges {
    constructor(parent: CaseFoldData$CaseFoldTable, ranges: number[])
    // private parent: CaseFoldData$CaseFoldTable;
    // private ranges: number[];
    addRangeTo(buffer: RangesBuffer, i: number): void;
    adjacent(ia: number, o: SortedListOfRanges, ib: number): boolean;
    adjacent(ia: number, bLo: number, bHi: number): boolean;
    appendRangesTo(buffer: RangesBuffer, startIndex: number, endIndex: number): void;
    // private apply(tblEntryIndex: number, intersectionLo: number, intersectionHi: number, caseFoldItem: (param0: number, param1: number[]) => void): void;
    binarySearch(keyLo: number): number;
    binarySearchExactMatch(searchResult: number, o: SortedListOfRanges, ib: number): boolean;
    binarySearchExactMatch(searchResult: number, bLo: number, bHi: number): boolean;
    binarySearchGetFirstIntersecting(searchResult: number, o: SortedListOfRanges, ib: number): number;
    binarySearchGetFirstIntersecting(searchResult: number, bLo: number, bHi: number): number;
    binarySearchGetFirstIntersectingOrAdjacent(searchResult: number, bLo: number, bHi: number): number;
    binarySearchGetFirstIntersectingOrAdjacent(searchResult: number, oLo: number, oHi: number, includeAdjacent: boolean): number;
    binarySearchNoIntersectingFound(firstIntersecting: number): boolean;
    caseFold(cps: (Object | null)[], caseFoldItem: (param0: number, param1: number[]) => void): void;
    caseFold(cps: Range[], caseFoldItem: (param0: number, param1: number[]) => void): void;
    caseFold(r: Range, caseFoldItem: (param0: number, param1: number[]) => void): void;
    caseFold(codepoint: number): number[];
    containedBy(ia: number, bLo: number, bHi: number): boolean;
    contains(o: SortedListOfRanges): boolean;
    contains(codePoint: number): boolean;
    contains(ia: number, o: SortedListOfRanges, ib: number): boolean;
    contains(ia: number, bLo: number, bHi: number): boolean;
    // private createCaseUnfoldTrie(): CaseUnfoldingTrie;
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
    inverseGetMax(encoding: Encoding): number;
    inverseGetMin(encoding: Encoding): number;
    inverseRangesToString(encoding: Encoding): string;
    inverseValueCount(encoding: Encoding): number;
    isEmpty(): boolean;
    isSingle(i: number): boolean;
    leftOf(ia: number, o: SortedListOfRanges, ib: number): boolean;
    leftOf(ia: number, bLo: number, bHi: number): boolean;
    matches2CharsWith1BitDifference(): boolean;
    matchesEverything(encoding: Encoding): boolean;
    matchesMinAndMax(encoding: Encoding): boolean;
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
    sizeOfInverse(encoding: Encoding): number;
    valueCount(): number;
    valueCountEquals(cmp: number): boolean;
    valueCountMax(cmp: number): boolean;
}