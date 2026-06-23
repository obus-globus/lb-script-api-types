import type { LocalizedNumberFormatter } from '../../../../com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { NumberFormatterSettings } from '../../../../com/ibm/icu/number/NumberFormatterSettings.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnlocalizedNumberFormatter extends NumberFormatterSettings<UnlocalizedNumberFormatter> {
    constructor()
    constructor(arg0: NumberFormatterSettings<any>, arg1: number, arg2: Object)
    create(arg0: number, arg1: Object): UnlocalizedNumberFormatter;
    locale(arg0: ULocale): LocalizedNumberFormatter;
    locale(arg0: Locale): LocalizedNumberFormatter;
}