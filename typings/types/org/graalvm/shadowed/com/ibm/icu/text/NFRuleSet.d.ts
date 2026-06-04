import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { NFRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRule.d.ts'
import type { RuleBasedNumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
export class NFRuleSet extends Object {
    constructor(owner: RuleBasedNumberFormat, descriptions: string[], index: number)
    // private fractionRules: NFRule[];
    // private isFractionRuleSet: boolean;
    // private isParseable: boolean;
    readonly name: string;
    // private nonNumericalRules: NFRule[];
    // private owner: RuleBasedNumberFormat;
    // private rules: NFRule[];
    equals(that: Object | null): boolean;
    // private findFractionRuleSetRule(number: number): NFRule;
    // private findNormalRule(number: number): NFRule;
    findRule(number: number): NFRule;
    format(number: number, toInsertInto: StringBuilder, pos: number, recursionCount: number): void;
    getName(): string;
    hashCode(): number;
    isFractionSet(): boolean;
    isParseable(): boolean;
    isPublic(): boolean;
    makeIntoFractionRuleSet(): void;
    parse(text: string, parsePosition: ParsePosition, upperBound: number, nonNumericalExecutedRuleMask: number, recursionCount: number): Number;
    parseRules(description: string): void;
    // private setBestFractionRule(originalIndex: number, newRule: NFRule, rememberRule: boolean): void;
    setDecimalFormatSymbols(newSymbols: DecimalFormatSymbols): void;
    setNonNumericalRule(rule: NFRule): void;
    toString(): string;
}