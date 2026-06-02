import type { NFRuleSet } from '../../../../com/ibm/icu/text/NFRuleSet.d.ts'
import type { RuleBasedNumberFormat } from '../../../../com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RBNFPostProcessor extends Object{
    init(arg0: RuleBasedNumberFormat, arg1: string): void;
    process(arg0: StringBuilder, arg1: NFRuleSet): void;
}