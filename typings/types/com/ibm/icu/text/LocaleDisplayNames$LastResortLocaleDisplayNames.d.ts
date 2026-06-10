import type { DisplayContext } from '../../../../com/ibm/icu/text/DisplayContext.d.ts'
import type { DisplayContext$Type } from '../../../../com/ibm/icu/text/DisplayContext$Type.d.ts'
import type { LocaleDisplayNames } from '../../../../com/ibm/icu/text/LocaleDisplayNames.d.ts'
import type { LocaleDisplayNames$DialectHandling } from '../../../../com/ibm/icu/text/LocaleDisplayNames$DialectHandling.d.ts'
import type { LocaleDisplayNames$UiListItem } from '../../../../com/ibm/icu/text/LocaleDisplayNames$UiListItem.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleDisplayNames$LastResortLocaleDisplayNames extends LocaleDisplayNames {
    static getInstance(paramarg0: ULocale): LocaleDisplayNames;
    static getInstance(paramarg0: ULocale, paramarg1: (Object | null)[]): LocaleDisplayNames;
    static getInstance(paramarg0: ULocale, paramarg1: LocaleDisplayNames$DialectHandling): LocaleDisplayNames;
    static getInstance(paramarg0: Locale): LocaleDisplayNames;
    static getInstance(paramarg0: Locale, paramarg1: (Object | null)[]): LocaleDisplayNames;
    private constructor(arg0: ULocale, arg1: LocaleDisplayNames$DialectHandling)
    private constructor(arg0: ULocale, arg1: DisplayContext[])
    // private contexts: DisplayContext[];
    readonly locale: ULocale;
    getContext(arg0: DisplayContext$Type): DisplayContext;
    getDialectHandling(): LocaleDisplayNames$DialectHandling;
    getLocale(): ULocale;
    getUiListCompareWholeItems(arg0: ULocale[], arg1: (param0: Object) => boolean): LocaleDisplayNames$UiListItem[];
    keyDisplayName(arg0: string): string;
    keyValueDisplayName(arg0: string, arg1: string): string;
    languageDisplayName(arg0: string): string;
    localeDisplayName(arg0: ULocale): string;
    localeDisplayName(arg0: Locale): string;
    localeDisplayName(arg0: string): string;
    regionDisplayName(arg0: string): string;
    scriptDisplayName(arg0: number): string;
    scriptDisplayName(arg0: string): string;
    variantDisplayName(arg0: string): string;
}