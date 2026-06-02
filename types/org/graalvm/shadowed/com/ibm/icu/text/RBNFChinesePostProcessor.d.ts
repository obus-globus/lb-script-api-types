import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NFRuleSet } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRuleSet.d.ts'
import type { RBNFPostProcessor } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBNFPostProcessor.d.ts'
import type { RuleBasedNumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
export class RBNFChinesePostProcessor extends Object implements RBNFPostProcessor {
    constructor()
    // private format: number;
    // private longForm: boolean;
    init(formatter: RuleBasedNumberFormat, rules: string): void;
    process(buf: StringBuilder, ruleSet: NFRuleSet): void;
}