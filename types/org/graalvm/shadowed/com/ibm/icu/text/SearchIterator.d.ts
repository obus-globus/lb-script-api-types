import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { SearchIterator$ElementComparisonType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SearchIterator$ElementComparisonType.d.ts'
import type { SearchIterator$Search } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SearchIterator$Search.d.ts'
export abstract class SearchIterator extends Object {
    static DONE: number;
    constructor(target: CharacterIterator, breaker: BreakIterator)
    breakIterator: BreakIterator;
    matchLength: number;
    // private search_: SearchIterator$Search;
    // private targetText: CharacterIterator;
    first(): number;
    following(position: number): number;
    getBreakIterator(): BreakIterator;
    getElementComparisonType(): SearchIterator$ElementComparisonType;
    getIndex(): number;
    getMatchLength(): number;
    getMatchStart(): number;
    getMatchedText(): string;
    getTarget(): CharacterIterator;
    handleNext(start: number): number;
    handlePrevious(startAt: number): number;
    isOverlapping(): boolean;
    last(): number;
    next(): number;
    preceding(position: number): number;
    previous(): number;
    reset(): void;
    setBreakIterator(breakiter: BreakIterator): void;
    setElementComparisonType(type: SearchIterator$ElementComparisonType): void;
    setIndex(position: number): void;
    setMatchLength(length: number): void;
    setMatchNotFound(): void;
    setOverlapping(allowOverlap: boolean): void;
    setTarget(text: CharacterIterator): void;
}