import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { StandardPlural } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MacroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MacroProps.d.ts'
import type { MicroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
export class NumberFormatterImpl extends Object {
    static formatStatic(parammacros: MacroProps, paraminValue: DecimalQuantity, paramoutString: FormattedStringBuilder): MicroProps;
    static getPrefixSuffixStatic(parammacros: MacroProps, paramsignum: number, paramplural: StandardPlural, paramoutput: FormattedStringBuilder): number;
    static writeAffixes(parammicros: MicroProps, paramstring: FormattedStringBuilder, paramstart: number, paramend: number): number;
    static writeNumber(parammicros: MicroProps, paramquantity: DecimalQuantity, paramstring: FormattedStringBuilder, paramindex: number): number;
    constructor(macros: MacroProps)
    // private microPropsGenerator: MicroPropsGenerator;
    // private micros: MicroProps;
    format(inValue: DecimalQuantity, outString: FormattedStringBuilder): MicroProps;
    getPrefixSuffix(signum: number, plural: StandardPlural, output: FormattedStringBuilder): number;
    getRawMicroProps(): MicroProps;
    preProcess(inValue: DecimalQuantity): MicroProps;
}