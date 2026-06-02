import type { DecimalFormatProperties } from '../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { LocalizedNumberFormatter } from '../../../../com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
import type { DecimalFormatSymbols } from '../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberFormatter extends Object {
    static forSkeleton(paramarg0: string): UnlocalizedNumberFormatter;
    static fromDecimalFormat(paramarg0: DecimalFormatProperties, paramarg1: DecimalFormatSymbols, paramarg2: DecimalFormatProperties): UnlocalizedNumberFormatter;
    static with(): UnlocalizedNumberFormatter;
    static withLocale(paramarg0: ULocale): LocalizedNumberFormatter;
    static withLocale(paramarg0: Locale): LocalizedNumberFormatter;
    private constructor()
}