import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransliterationRuleSet } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TransliterationRuleSet.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { UnicodeReplacer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeReplacer.d.ts'
export class RuleBasedTransliterator$Data extends Object {
    constructor()
    ruleSet: TransliterationRuleSet;
    // private variableNames: JavaMap<string, string[]>;
    // private variables: Object[];
    // private variablesBase: string;
    lookupMatcher(standIn: number): UnicodeMatcher;
    lookupReplacer(standIn: number): UnicodeReplacer;
}