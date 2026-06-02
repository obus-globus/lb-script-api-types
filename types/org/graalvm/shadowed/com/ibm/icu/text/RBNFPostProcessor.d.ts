import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NFRuleSet } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRuleSet.d.ts'
import type { RuleBasedNumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
export interface RBNFPostProcessor extends Object{
    init(formatter: RuleBasedNumberFormat, rules: string): void;
    process(output: StringBuilder, ruleSet: NFRuleSet): void;
}