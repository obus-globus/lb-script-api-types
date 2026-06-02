import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LocalizedNumberRangeFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberRangeFormatter.d.ts'
import type { UnlocalizedNumberRangeFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/UnlocalizedNumberRangeFormatter.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class NumberRangeFormatter extends Object {
    static with(): UnlocalizedNumberRangeFormatter;
    static withLocale(paramlocale: Locale): LocalizedNumberRangeFormatter;
    static withLocale(paramlocale: ULocale): LocalizedNumberRangeFormatter;
    private constructor()
}