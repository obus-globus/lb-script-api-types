import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { RuleBasedTransliterator$Data } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedTransliterator$Data.d.ts'
import type { UnicodeReplacer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeReplacer.d.ts'
export class StringReplacer extends Object implements UnicodeReplacer {
    constructor(theOutput: string, theCursorPos: number, theData: RuleBasedTransliterator$Data)
    constructor(theOutput: string, theData: RuleBasedTransliterator$Data)
    // private cursorPos: number;
    // private data: RuleBasedTransliterator$Data;
    // private hasCursor: boolean;
    // private isComplex: boolean;
    // private output: string;
    addReplacementSetTo(toUnionTo: string[]): void;
    replace(text: Replaceable, start: number, limit: number, cursor: number[]): number;
    toReplacerPattern(escapeUnprintable: boolean): string;
}