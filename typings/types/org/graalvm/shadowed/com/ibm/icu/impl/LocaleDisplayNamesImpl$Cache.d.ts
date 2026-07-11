import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DisplayContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext.d.ts'
import type { LocaleDisplayNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/LocaleDisplayNames.d.ts'
import type { LocaleDisplayNames$DialectHandling } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/LocaleDisplayNames$DialectHandling.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleDisplayNamesImpl$Cache extends Object {
    private constructor()
    // private cache: LocaleDisplayNames;
    // private capitalization: DisplayContext;
    // private dialectHandling: LocaleDisplayNames$DialectHandling;
    // private locale: ULocale;
    // private nameLength: DisplayContext;
    // private substituteHandling: DisplayContext;
    get(locale: ULocale, ...contexts: DisplayContext[]): LocaleDisplayNames;
    get(locale: ULocale, dialectHandling: LocaleDisplayNames$DialectHandling): LocaleDisplayNames;
}