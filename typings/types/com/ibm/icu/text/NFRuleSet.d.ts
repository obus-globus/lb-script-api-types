import type { DecimalFormatSymbols } from '../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { NFRule } from '../../../../com/ibm/icu/text/NFRule.d.ts'
import type { RuleBasedNumberFormat } from '../../../../com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class NFRuleSet extends Object {
    constructor(arg0: RuleBasedNumberFormat, arg1: string[], arg2: number)
    // private fractionRules: NFRule[];
    // private isFractionRuleSet: boolean;
    // private isParseable: boolean;
    readonly name: string;
    // private nonNumericalRules: NFRule[];
    // private owner: RuleBasedNumberFormat;
    // private rules: NFRule[];
    equals(arg0: Object | null): boolean;
    // private findFractionRuleSetRule(arg0: number): NFRule;
    // private findNormalRule(arg0: number): NFRule;
    findRule(arg0: number): NFRule;
    format(arg0: number, arg1: StringBuilder, arg2: number, arg3: number): void;
    getName(): string;
    hashCode(): number;
    isFractionSet(): boolean;
    isParseable(): boolean;
    isPublic(): boolean;
    makeIntoFractionRuleSet(): void;
    parse(arg0: string, arg1: ParsePosition, arg2: number, arg3: number, arg4: number): Number;
    parseRules(arg0: string): void;
    // private setBestFractionRule(arg0: number, arg1: NFRule, arg2: boolean): void;
    setDecimalFormatSymbols(arg0: DecimalFormatSymbols): void;
    setNonNumericalRule(arg0: NFRule): void;
    toString(): string;
}