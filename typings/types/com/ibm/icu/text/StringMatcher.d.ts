import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { RuleBasedTransliterator$Data } from '../../../../com/ibm/icu/text/RuleBasedTransliterator$Data.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { UnicodeReplacer } from '../../../../com/ibm/icu/text/UnicodeReplacer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringMatcher extends Object implements UnicodeMatcher, UnicodeReplacer {
    static ETHER: string;
    static U_MATCH: number;
    static U_MISMATCH: number;
    static U_PARTIAL_MATCH: number;
    constructor(arg0: string, arg1: number, arg2: RuleBasedTransliterator$Data)
    constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: RuleBasedTransliterator$Data)
    // private data: RuleBasedTransliterator$Data;
    // private matchLimit: number;
    // private matchStart: number;
    // private pattern: string;
    // private segmentNumber: number;
    addMatchSetTo(arg0: string[]): void;
    addReplacementSetTo(arg0: string[]): void;
    matches(arg0: Replaceable, arg1: number[], arg2: number, arg3: boolean): number;
    matchesIndexValue(arg0: number): boolean;
    replace(arg0: Replaceable, arg1: number, arg2: number, arg3: number[]): number;
    resetMatch(): void;
    toPattern(arg0: boolean): string;
    toReplacerPattern(arg0: boolean): string;
}