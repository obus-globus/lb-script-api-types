import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { FormattedNumberRange } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/FormattedNumberRange.d.ts'
import type { NumberRangeFormatterImpl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberRangeFormatterImpl.d.ts'
import type { NumberRangeFormatterSettings } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberRangeFormatterSettings.d.ts'
import type { UnlocalizedNumberRangeFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/UnlocalizedNumberRangeFormatter.d.ts'
export class LocalizedNumberRangeFormatter extends NumberRangeFormatterSettings<LocalizedNumberRangeFormatter> {
    constructor(parent: NumberRangeFormatterSettings<any>, key: number, value: Object)
    // private fImpl: NumberRangeFormatterImpl;
    create(key: number, value: Object): LocalizedNumberRangeFormatter;
    formatImpl(first: DecimalQuantity, second: DecimalQuantity, equalBeforeRounding: boolean): FormattedNumberRange;
    formatRange(first: number, second: number): FormattedNumberRange;
    formatRange(first: Number, second: Number): FormattedNumberRange;
    withoutLocale(): UnlocalizedNumberRangeFormatter;
}