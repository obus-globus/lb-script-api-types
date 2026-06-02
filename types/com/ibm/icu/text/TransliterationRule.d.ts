import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { RuleBasedTransliterator$Data } from '../../../../com/ibm/icu/text/RuleBasedTransliterator$Data.d.ts'
import type { StringMatcher } from '../../../../com/ibm/icu/text/StringMatcher.d.ts'
import type { Transliterator$Position } from '../../../../com/ibm/icu/text/Transliterator$Position.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { UnicodeReplacer } from '../../../../com/ibm/icu/text/UnicodeReplacer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransliterationRule extends Object {
    constructor(arg0: string, arg1: number, arg2: number, arg3: string, arg4: number, arg5: number, arg6: UnicodeMatcher[], arg7: boolean, arg8: boolean, arg9: RuleBasedTransliterator$Data)
    // private anteContext: StringMatcher;
    readonly anteContextLength: number;
    // private data: RuleBasedTransliterator$Data;
    // private flags: number;
    // private key: StringMatcher;
    // private keyLength: number;
    // private output: UnicodeReplacer;
    // private pattern: string;
    // private postContext: StringMatcher;
    // private segments: UnicodeMatcher[];
    addSourceTargetSet(arg0: string[], arg1: string[], arg2: string[], arg3: string[]): void;
    getAnteContextLength(): number;
    getIndexValue(): number;
    masks(arg0: TransliterationRule): boolean;
    matchAndReplace(arg0: Replaceable, arg1: Transliterator$Position, arg2: boolean): number;
    matchesIndexValue(arg0: number): boolean;
    toRule(arg0: boolean): string;
    toString(): string;
}