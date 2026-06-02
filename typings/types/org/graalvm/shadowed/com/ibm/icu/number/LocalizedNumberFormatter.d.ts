import type { Format } from '../../../../../../../java/text/Format.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { FormattedNumber } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/FormattedNumber.d.ts'
import type { NumberFormatterImpl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatterImpl.d.ts'
import type { NumberFormatterSettings } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatterSettings.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
import type { Measure } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Measure.d.ts'
import type { MeasureUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
export class LocalizedNumberFormatter extends NumberFormatterSettings<LocalizedNumberFormatter> {
    constructor(parent: NumberFormatterSettings<Object>, key: number, value: Object)
    // private callCountInternal: number;
    // private compiled: NumberFormatterImpl;
    // private savedWithUnit: LocalizedNumberFormatter;
    // private computeCompiled(): boolean;
    create(key: number, value: Object): LocalizedNumberFormatter;
    format(input: number): FormattedNumber;
    format(input: number): FormattedNumber;
    format(input: Number): FormattedNumber;
    // private format(fq: DecimalQuantity): FormattedNumber;
    format(input: Measure): FormattedNumber;
    formatImpl(fq: DecimalQuantity, string: FormattedStringBuilder): MicroProps;
    formatImpl(fq: DecimalQuantity, unit: MeasureUnit, string: FormattedStringBuilder): MicroProps;
    getAffixImpl(isPrefix: boolean, isNegative: boolean): string;
    toFormat(): Format;
    withoutLocale(): UnlocalizedNumberFormatter;
}