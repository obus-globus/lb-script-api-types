import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LocalizedNumberRangeFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberRangeFormatter.d.ts'
import type { NumberRangeFormatterSettings } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberRangeFormatterSettings.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class UnlocalizedNumberRangeFormatter extends NumberRangeFormatterSettings<UnlocalizedNumberRangeFormatter> {
    constructor()
    constructor(parent: NumberRangeFormatterSettings<Object>, key: number, value: Object)
    create(key: number, value: Object): UnlocalizedNumberRangeFormatter;
    locale(locale: Locale): LocalizedNumberRangeFormatter;
    locale(locale: ULocale): LocalizedNumberRangeFormatter;
}