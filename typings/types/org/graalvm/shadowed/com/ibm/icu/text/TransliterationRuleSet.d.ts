import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { TransliterationRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TransliterationRule.d.ts'
import type { Transliterator$Position } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Position.d.ts'
export class TransliterationRuleSet extends Object {
    constructor()
    // private index: number[];
    // private maxContextLength: number;
    // private ruleVector: TransliterationRule[];
    // private rules: TransliterationRule[];
    addRule(rule: TransliterationRule): void;
    addSourceTargetSet(filter: string[], sourceSet: string[], targetSet: string[]): void;
    freeze(): void;
    getMaximumContextLength(): number;
    toRules(escapeUnprintable: boolean): string;
    transliterate(text: Replaceable, pos: Transliterator$Position, incremental: boolean): boolean;
}