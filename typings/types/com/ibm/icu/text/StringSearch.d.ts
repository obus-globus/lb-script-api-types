import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { CollationElementIterator } from '../../../../com/ibm/icu/text/CollationElementIterator.d.ts'
import type { Normalizer2 } from '../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { RuleBasedCollator } from '../../../../com/ibm/icu/text/RuleBasedCollator.d.ts'
import type { SearchIterator } from '../../../../com/ibm/icu/text/SearchIterator.d.ts'
import type { StringSearch$CollationPCE } from '../../../../com/ibm/icu/text/StringSearch$CollationPCE.d.ts'
import type { StringSearch$Match } from '../../../../com/ibm/icu/text/StringSearch$Match.d.ts'
import type { StringSearch$Pattern } from '../../../../com/ibm/icu/text/StringSearch$Pattern.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
export class StringSearch extends SearchIterator {
    static DONE: number;
    constructor(arg0: string, arg1: CharacterIterator, arg2: RuleBasedCollator)
    constructor(arg0: string, arg1: CharacterIterator, arg2: RuleBasedCollator, arg3: BreakIterator)
    constructor(arg0: string, arg1: CharacterIterator, arg2: ULocale)
    constructor(arg0: string, arg1: CharacterIterator, arg2: Locale)
    constructor(arg0: string, arg1: string)
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
    // private checkIdentical(arg0: number, arg1: number): boolean;
    // private getCE(arg0: number): number;
    getCollator(): RuleBasedCollator;
    getIndex(): number;
    getPattern(): string;
    handleNext(arg0: number): number;
    // private handleNextCanonical(): boolean;
    // private handleNextCommonImpl(): boolean;
    // private handleNextExact(): boolean;
    handlePrevious(arg0: number): number;
    // private handlePreviousCanonical(): boolean;
    // private handlePreviousCommonImpl(): boolean;
    // private handlePreviousExact(): boolean;
    // private initTextProcessedIter(): boolean;
    // private initialize(): void;
    // private initializePattern(): number;
    // private initializePatternCETable(): number;
    // private initializePatternPCETable(): number;
    // private isBreakBoundary(arg0: number): boolean;
    isCanonical(): boolean;
    // private nextBoundaryAfter(arg0: number): number;
    reset(): void;
    // private search(arg0: number, arg1: StringSearch$Match): boolean;
    // private searchBackwards(arg0: number, arg1: StringSearch$Match): boolean;
    setCanonical(arg0: boolean): void;
    setCollator(arg0: RuleBasedCollator): void;
    setIndex(arg0: number): void;
    setMatchNotFound(): void;
    setPattern(arg0: string): void;
    setTarget(arg0: CharacterIterator): void;
}