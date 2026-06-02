import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { RuleBasedTransliterator$Data } from '../../../../com/ibm/icu/text/RuleBasedTransliterator$Data.d.ts'
import type { UnicodeReplacer } from '../../../../com/ibm/icu/text/UnicodeReplacer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringReplacer extends Object implements UnicodeReplacer {
    constructor(arg0: string, arg1: RuleBasedTransliterator$Data)
    constructor(arg0: string, arg1: number, arg2: RuleBasedTransliterator$Data)
    // private cursorPos: number;
    // private data: RuleBasedTransliterator$Data;
    // private hasCursor: boolean;
    // private isComplex: boolean;
    // private output: string;
    addReplacementSetTo(arg0: string[]): void;
    replace(arg0: Replaceable, arg1: number, arg2: number, arg3: number[]): number;
    toReplacerPattern(arg0: boolean): string;
}