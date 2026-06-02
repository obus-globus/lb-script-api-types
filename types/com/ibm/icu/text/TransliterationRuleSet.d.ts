import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { TransliterationRule } from '../../../../com/ibm/icu/text/TransliterationRule.d.ts'
import type { Transliterator$Position } from '../../../../com/ibm/icu/text/Transliterator$Position.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransliterationRuleSet extends Object {
    constructor()
    // private index: number[];
    // private maxContextLength: number;
    // private ruleVector: TransliterationRule[];
    // private rules: TransliterationRule[];
    addRule(arg0: TransliterationRule): void;
    addSourceTargetSet(arg0: string[], arg1: string[], arg2: string[]): void;
    freeze(): void;
    getMaximumContextLength(): number;
    toRules(arg0: boolean): string;
    transliterate(arg0: Replaceable, arg1: Transliterator$Position, arg2: boolean): boolean;
}