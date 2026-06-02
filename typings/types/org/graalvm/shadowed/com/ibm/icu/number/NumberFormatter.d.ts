import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class NumberFormatter extends Object {
    static forSkeleton(paramskeleton: string): UnlocalizedNumberFormatter;
    static fromDecimalFormat(paramproperties: DecimalFormatProperties, paramsymbols: DecimalFormatSymbols, paramexportedProperties: DecimalFormatProperties): UnlocalizedNumberFormatter;
    static with(): UnlocalizedNumberFormatter;
    static withLocale(paramlocale: Locale): LocalizedNumberFormatter;
    static withLocale(paramlocale: ULocale): LocalizedNumberFormatter;
    private constructor()
}