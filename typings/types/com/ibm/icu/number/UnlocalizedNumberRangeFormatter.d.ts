import type { LocalizedNumberRangeFormatter } from '../../../../com/ibm/icu/number/LocalizedNumberRangeFormatter.d.ts'
import type { NumberRangeFormatterSettings } from '../../../../com/ibm/icu/number/NumberRangeFormatterSettings.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnlocalizedNumberRangeFormatter extends NumberRangeFormatterSettings<UnlocalizedNumberRangeFormatter> {
    constructor()
    constructor(arg0: NumberRangeFormatterSettings<any>, arg1: number, arg2: Object)
    create(arg0: number, arg1: Object): UnlocalizedNumberRangeFormatter;
    locale(arg0: ULocale): LocalizedNumberRangeFormatter;
    locale(arg0: Locale): LocalizedNumberRangeFormatter;
}