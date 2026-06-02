import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { CollationElementIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CollationElementIterator.d.ts'
import type { Normalizer2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2.d.ts'
import type { RuleBasedCollator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedCollator.d.ts'
import type { SearchIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SearchIterator.d.ts'
import type { StringSearch$CollationPCE } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringSearch$CollationPCE.d.ts'
import type { StringSearch$Match } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringSearch$Match.d.ts'
import type { StringSearch$Pattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringSearch$Pattern.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class StringSearch extends SearchIterator {
    static DONE: number;
    constructor(pattern: string, target: CharacterIterator, locale: Locale)
    constructor(pattern: string, target: CharacterIterator, collator: RuleBasedCollator)
    constructor(pattern: string, target: CharacterIterator, collator: RuleBasedCollator, breakiter: BreakIterator)
    constructor(pattern: string, target: CharacterIterator, locale: ULocale)
    constructor(pattern: string, target: string)
    // private ceMask_: number;
    // private collator_: RuleBasedCollator;
    // private nfd_: Normalizer2;
    // private pattern_: StringSearch$Pattern;
    // private strength_: number;
    // private textIter_: CollationElementIterator;
    // private textProcessedIter_: StringSearch$CollationPCE;
    // private toShift_: boolean;
    // private utilIter_: CollationElementIterator;
    // private variableTop_: number;
    // private checkIdentical(start: number, end: number): boolean;
    // private getCE(sourcece: number): number;
    getCollator(): RuleBasedCollator;
    getIndex(): number;
    getPattern(): string;
    handleNext(position: number): number;
    // private handleNextCanonical(): boolean;
    // private handleNextCommonImpl(): boolean;
    // private handleNextExact(): boolean;
    handlePrevious(position: number): number;
    // private handlePreviousCanonical(): boolean;
    // private handlePreviousCommonImpl(): boolean;
    // private handlePreviousExact(): boolean;
    // private initTextProcessedIter(): boolean;
    // private initialize(): void;
    // private initializePattern(): number;
    // private initializePatternCETable(): number;
    // private initializePatternPCETable(): number;
    // private isBreakBoundary(index: number): boolean;
    isCanonical(): boolean;
    // private nextBoundaryAfter(startIndex: number): number;
    reset(): void;
    // private search(startIdx: number, m: StringSearch$Match): boolean;
    // private searchBackwards(startIdx: number, m: StringSearch$Match): boolean;
    setCanonical(allowCanonical: boolean): void;
    setCollator(collator: RuleBasedCollator): void;
    setIndex(position: number): void;
    setMatchNotFound(): void;
    setPattern(pattern: string): void;
    setTarget(text: CharacterIterator): void;
}