import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { StandardPlural } from '../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MacroProps } from '../../../../com/ibm/icu/impl/number/MacroProps.d.ts'
import type { MicroProps } from '../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberFormatterImpl extends Object {
    static formatStatic(paramarg0: MacroProps, paramarg1: DecimalQuantity, paramarg2: FormattedStringBuilder): MicroProps;
    static getPrefixSuffixStatic(paramarg0: MacroProps, paramarg1: number, paramarg2: StandardPlural, paramarg3: FormattedStringBuilder): number;
    static writeAffixes(paramarg0: MicroProps, paramarg1: FormattedStringBuilder, paramarg2: number, paramarg3: number): number;
    static writeNumber(paramarg0: MicroProps, paramarg1: DecimalQuantity, paramarg2: FormattedStringBuilder, paramarg3: number): number;
    constructor(arg0: MacroProps)
    // private microPropsGenerator: MicroPropsGenerator;
    // private micros: MicroProps;
    format(arg0: DecimalQuantity, arg1: FormattedStringBuilder): MicroProps;
    getPrefixSuffix(arg0: number, arg1: StandardPlural, arg2: FormattedStringBuilder): number;
    getRawMicroProps(): MicroProps;
    preProcess(arg0: DecimalQuantity): MicroProps;
}