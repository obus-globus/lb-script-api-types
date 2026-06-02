import type { DisplayContext } from '../../../../com/ibm/icu/text/DisplayContext.d.ts'
import type { LocaleDisplayNames } from '../../../../com/ibm/icu/text/LocaleDisplayNames.d.ts'
import type { LocaleDisplayNames$DialectHandling } from '../../../../com/ibm/icu/text/LocaleDisplayNames$DialectHandling.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleDisplayNamesImpl$Cache extends Object {
    private constructor()
    // private cache: LocaleDisplayNames;
    // private capitalization: DisplayContext;
    // private dialectHandling: LocaleDisplayNames$DialectHandling;
    // private locale: ULocale;
    // private nameLength: DisplayContext;
    // private substituteHandling: DisplayContext;
    get(arg0: ULocale, arg1: LocaleDisplayNames$DialectHandling): LocaleDisplayNames;
    get(arg0: ULocale, arg1: DisplayContext[]): LocaleDisplayNames;
}