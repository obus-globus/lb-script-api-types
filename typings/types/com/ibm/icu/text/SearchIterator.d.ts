import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { SearchIterator$ElementComparisonType } from '../../../../com/ibm/icu/text/SearchIterator$ElementComparisonType.d.ts'
import type { SearchIterator$Search } from '../../../../com/ibm/icu/text/SearchIterator$Search.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class SearchIterator extends Object {
    static DONE: number;
    constructor(arg0: CharacterIterator, arg1: BreakIterator)
    breakIterator: BreakIterator;
    matchLength: number;
    // private search_: SearchIterator$Search;
    // private targetText: CharacterIterator;
    first(): number;
    following(arg0: number): number;
    getBreakIterator(): BreakIterator;
    getElementComparisonType(): SearchIterator$ElementComparisonType;
    getIndex(): number;
    getMatchLength(): number;
    getMatchStart(): number;
    getMatchedText(): string;
    getTarget(): CharacterIterator;
    handleNext(arg0: number): number;
    handlePrevious(arg0: number): number;
    isOverlapping(): boolean;
    last(): number;
    next(): number;
    preceding(arg0: number): number;
    previous(): number;
    reset(): void;
    setBreakIterator(arg0: BreakIterator): void;
    setElementComparisonType(arg0: SearchIterator$ElementComparisonType): void;
    setIndex(arg0: number): void;
    setMatchLength(arg0: number): void;
    setMatchNotFound(): void;
    setOverlapping(arg0: boolean): void;
    setTarget(arg0: CharacterIterator): void;
}