import type { TransliterationRuleSet } from '../../../../com/ibm/icu/text/TransliterationRuleSet.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { UnicodeReplacer } from '../../../../com/ibm/icu/text/UnicodeReplacer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuleBasedTransliterator$Data extends Object {
    constructor()
    ruleSet: TransliterationRuleSet;
    // private variableNames: { [key: string]: string[] };
    // private variables: Object[];
    // private variablesBase: string;
    lookupMatcher(arg0: number): UnicodeMatcher;
    lookupReplacer(arg0: number): UnicodeReplacer;
}