import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DisplayContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext.d.ts'
import type { DisplayContext$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext$Type.d.ts'
import type { LocaleDisplayNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/LocaleDisplayNames.d.ts'
import type { LocaleDisplayNames$DialectHandling } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/LocaleDisplayNames$DialectHandling.d.ts'
import type { LocaleDisplayNames$UiListItem } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/LocaleDisplayNames$UiListItem.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleDisplayNames$LastResortLocaleDisplayNames extends LocaleDisplayNames {
    static getInstance(paramlocale: Locale): LocaleDisplayNames;
    static getInstance(paramlocale: Locale, paramcontexts: (Object | null)[]): LocaleDisplayNames;
    static getInstance(paramlocale: ULocale): LocaleDisplayNames;
    static getInstance(paramlocale: ULocale, paramcontexts: (Object | null)[]): LocaleDisplayNames;
    static getInstance(paramlocale: ULocale, paramdialectHandling: LocaleDisplayNames$DialectHandling): LocaleDisplayNames;
    private constructor(locale: ULocale, contexts: DisplayContext[])
    private constructor(locale: ULocale, dialectHandling: LocaleDisplayNames$DialectHandling)
    // private contexts: DisplayContext[];
    readonly locale: ULocale;
    getContext(type: DisplayContext$Type): DisplayContext;
    getDialectHandling(): LocaleDisplayNames$DialectHandling;
    getLocale(): ULocale;
    getUiListCompareWholeItems(localeSet: ULocale[], comparator: (param0: Object) => boolean): LocaleDisplayNames$UiListItem[];
    keyDisplayName(key: string): string;
    keyValueDisplayName(key: string, value: string): string;
    languageDisplayName(lang: string): string;
    localeDisplayName(locale: Locale): string;
    localeDisplayName(localeId: string): string;
    localeDisplayName(locale: ULocale): string;
    regionDisplayName(region: string): string;
    scriptDisplayName(scriptCode: number): string;
    scriptDisplayName(script: string): string;
    variantDisplayName(variant: string): string;
}