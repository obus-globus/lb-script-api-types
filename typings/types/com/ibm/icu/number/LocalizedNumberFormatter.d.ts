import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { FormattedNumber } from '../../../../com/ibm/icu/number/FormattedNumber.d.ts'
import type { NumberFormatterImpl } from '../../../../com/ibm/icu/number/NumberFormatterImpl.d.ts'
import type { NumberFormatterSettings } from '../../../../com/ibm/icu/number/NumberFormatterSettings.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
import type { Measure } from '../../../../com/ibm/icu/util/Measure.d.ts'
import type { MeasureUnit } from '../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { Format } from '../../../../java/text/Format.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class LocalizedNumberFormatter extends NumberFormatterSettings<LocalizedNumberFormatter> {
    constructor(arg0: NumberFormatterSettings<Object>, arg1: number, arg2: Object)
    // private callCountInternal: number;
    // private compiled: NumberFormatterImpl;
    // private savedWithUnit: LocalizedNumberFormatter;
    // private computeCompiled(): boolean;
    create(arg0: number, arg1: Object): LocalizedNumberFormatter;
    // private format(arg0: DecimalQuantity): FormattedNumber;
    format(arg0: Measure): FormattedNumber;
    format(arg0: number): FormattedNumber;
    format(arg0: number): FormattedNumber;
    format(arg0: Number): FormattedNumber;
    formatImpl(arg0: DecimalQuantity, arg1: FormattedStringBuilder): MicroProps;
    formatImpl(arg0: DecimalQuantity, arg1: MeasureUnit, arg2: FormattedStringBuilder): MicroProps;
    getAffixImpl(arg0: boolean, arg1: boolean): string;
    toFormat(): Format;
    withoutLocale(): UnlocalizedNumberFormatter;
}