import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { NumberFormatterSettings } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatterSettings.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class UnlocalizedNumberFormatter extends NumberFormatterSettings<UnlocalizedNumberFormatter> {
    constructor()
    constructor(parent: NumberFormatterSettings<any>, key: number, value: Object)
    create(key: number, value: Object): UnlocalizedNumberFormatter;
    locale(locale: Locale): LocalizedNumberFormatter;
    locale(locale: ULocale): LocalizedNumberFormatter;
}