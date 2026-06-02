import type { LocalizedNumberRangeFormatter } from '../../../../com/ibm/icu/number/LocalizedNumberRangeFormatter.d.ts'
import type { UnlocalizedNumberRangeFormatter } from '../../../../com/ibm/icu/number/UnlocalizedNumberRangeFormatter.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class NumberRangeFormatter extends Object {
    static with(): UnlocalizedNumberRangeFormatter;
    static withLocale(paramarg0: ULocale): LocalizedNumberRangeFormatter;
    static withLocale(paramarg0: Locale): LocalizedNumberRangeFormatter;
    private constructor()
}