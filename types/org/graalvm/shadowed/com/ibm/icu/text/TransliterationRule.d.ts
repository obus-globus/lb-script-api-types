import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { RuleBasedTransliterator$Data } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedTransliterator$Data.d.ts'
import type { StringMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringMatcher.d.ts'
import type { Transliterator$Position } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Position.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { UnicodeReplacer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeReplacer.d.ts'
export class TransliterationRule extends Object {
    constructor(input: string, anteContextPos: number, postContextPos: number, output: string, cursorPos: number, cursorOffset: number, segs: UnicodeMatcher[], anchorStart: boolean, anchorEnd: boolean, theData: RuleBasedTransliterator$Data)
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
    addSourceTargetSet(filter: string[], sourceSet: string[], targetSet: string[], revisiting: string[]): void;
    getAnteContextLength(): number;
    getIndexValue(): number;
    masks(r2: TransliterationRule): boolean;
    matchAndReplace(text: Replaceable, pos: Transliterator$Position, incremental: boolean): number;
    matchesIndexValue(v: number): boolean;
    toRule(escapeUnprintable: boolean): string;
    toString(): string;
}