import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { SearchIterator } from '../../../../com/ibm/icu/text/SearchIterator.d.ts'
import type { SearchIterator$ElementComparisonType } from '../../../../com/ibm/icu/text/SearchIterator$ElementComparisonType.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SearchIterator$Search extends Object {
    constructor(null_: SearchIterator)
    // private elementComparisonType_: SearchIterator$ElementComparisonType;
    // private internalBreakIter_: BreakIterator;
    // private isCanonicalMatch_: boolean;
    // private isForwardSearching_: boolean;
    // private isOverlap_: boolean;
    // private matchedIndex_: number;
    // private reset_: boolean;
    beginIndex(): number;
    breakIter(): BreakIterator;
    endIndex(): number;
    matchedLength(): number;
    setBreakIter(arg0: BreakIterator): void;
    setMatchedLength(arg0: number): void;
    setTarget(arg0: CharacterIterator): void;
    text(): CharacterIterator;
}