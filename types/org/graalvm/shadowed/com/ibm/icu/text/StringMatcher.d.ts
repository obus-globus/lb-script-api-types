import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { RuleBasedTransliterator$Data } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedTransliterator$Data.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { UnicodeReplacer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeReplacer.d.ts'
export class StringMatcher extends Object implements UnicodeMatcher, UnicodeReplacer {
    static ETHER: string;
    static U_MATCH: number;
    static U_MISMATCH: number;
    static U_PARTIAL_MATCH: number;
    constructor(theString: string, start: number, limit: number, segmentNum: number, theData: RuleBasedTransliterator$Data)
    constructor(theString: string, segmentNum: number, theData: RuleBasedTransliterator$Data)
    // private data: RuleBasedTransliterator$Data;
    // private matchLimit: number;
    // private matchStart: number;
    // private pattern: string;
    // private segmentNumber: number;
    addMatchSetTo(toUnionTo: string[]): void;
    addReplacementSetTo(toUnionTo: string[]): void;
    matches(text: Replaceable, offset: number[], limit: number, incremental: boolean): number;
    matchesIndexValue(v: number): boolean;
    replace(text: Replaceable, start: number, limit: number, cursor: number[]): number;
    resetMatch(): void;
    toPattern(escapeUnprintable: boolean): string;
    toReplacerPattern(escapeUnprintable: boolean): string;
}