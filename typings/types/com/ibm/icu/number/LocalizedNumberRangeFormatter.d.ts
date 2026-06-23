import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { FormattedNumberRange } from '../../../../com/ibm/icu/number/FormattedNumberRange.d.ts'
import type { NumberRangeFormatterImpl } from '../../../../com/ibm/icu/number/NumberRangeFormatterImpl.d.ts'
import type { NumberRangeFormatterSettings } from '../../../../com/ibm/icu/number/NumberRangeFormatterSettings.d.ts'
import type { UnlocalizedNumberRangeFormatter } from '../../../../com/ibm/icu/number/UnlocalizedNumberRangeFormatter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class LocalizedNumberRangeFormatter extends NumberRangeFormatterSettings<LocalizedNumberRangeFormatter> {
    constructor(arg0: NumberRangeFormatterSettings<any>, arg1: number, arg2: Object)
    // private fImpl: NumberRangeFormatterImpl;
    create(arg0: number, arg1: Object): LocalizedNumberRangeFormatter;
    formatImpl(arg0: DecimalQuantity, arg1: DecimalQuantity, arg2: boolean): FormattedNumberRange;
    formatRange(arg0: number, arg1: number): FormattedNumberRange;
    formatRange(arg0: Number, arg1: Number): FormattedNumberRange;
    withoutLocale(): UnlocalizedNumberRangeFormatter;
}