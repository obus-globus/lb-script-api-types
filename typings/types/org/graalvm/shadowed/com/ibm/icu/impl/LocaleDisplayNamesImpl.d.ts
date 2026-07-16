import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { CurrencyData$CurrencyDisplayInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { LocaleDisplayNamesImpl$CapitalizationContextUsage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/LocaleDisplayNamesImpl$CapitalizationContextUsage.d.ts'
import type { LocaleDisplayNamesImpl$DataTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTable.d.ts'
import type { LocaleDisplayNamesImpl$DataTableType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTableType.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { DisplayContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext.d.ts'
import type { DisplayContext$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext$Type.d.ts'
import type { LocaleDisplayNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/LocaleDisplayNames.d.ts'
import type { LocaleDisplayNames$DialectHandling } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/LocaleDisplayNames$DialectHandling.d.ts'
import type { LocaleDisplayNames$UiListItem } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/LocaleDisplayNames$UiListItem.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleDisplayNamesImpl extends LocaleDisplayNames {
    static getInstance(paramlocale: ULocale, ...paramcontexts: DisplayContext[]): LocaleDisplayNames;
    static getInstance(paramlocale: ULocale, paramdialectHandling: LocaleDisplayNames$DialectHandling): LocaleDisplayNames;
    static getInstance(paramlocale: Locale): LocaleDisplayNames;
    static getInstance(paramlocale: Locale, ...paramcontexts: DisplayContext[]): LocaleDisplayNames;
    static getInstance(paramlocale: ULocale): LocaleDisplayNames;
    static haveData(paramtype: LocaleDisplayNamesImpl$DataTableType): boolean;
    constructor(locale: ULocale, ...contexts: DisplayContext[])
    constructor(locale: ULocale, dialectHandling: LocaleDisplayNames$DialectHandling)
    // private capitalization: DisplayContext;
    // private capitalizationBrkIter: BreakIterator;
    // private capitalizationUsage: boolean[];
    // private currencyDisplayInfo: CurrencyData$CurrencyDisplayInfo;
    readonly dialectHandling: LocaleDisplayNames$DialectHandling;
    // private format: string;
    // private formatCloseParen: string;
    // private formatOpenParen: string;
    // private formatReplaceCloseParen: string;
    // private formatReplaceOpenParen: string;
    // private keyTypeFormat: string;
    // private langData: LocaleDisplayNamesImpl$DataTable;
    readonly locale: ULocale;
    // private nameLength: DisplayContext;
    // private regionData: LocaleDisplayNamesImpl$DataTable;
    // private separatorFormat: string;
    // private substituteHandling: DisplayContext;
    // private adjustForUsageAndContext(usage: LocaleDisplayNamesImpl$CapitalizationContextUsage, name: string): string;
    // private appendWithSep(s: string, b: StringBuilder): StringBuilder;
    getContext(type: DisplayContext$Type): DisplayContext;
    getDialectHandling(): LocaleDisplayNames$DialectHandling;
    getLocale(): ULocale;
    getUiListCompareWholeItems(localeSet: ULocale[], comparator: (param0: LocaleDisplayNames$UiListItem, param1: LocaleDisplayNames$UiListItem) => number): LocaleDisplayNames$UiListItem[];
    keyDisplayName(key: string): string;
    // private keyDisplayName(key: string, skipAdjust: boolean): string;
    keyValueDisplayName(key: string, value: string): string;
    // private keyValueDisplayName(key: string, value: string, skipAdjust: boolean): string;
    languageDisplayName(lang: string): string;
    localeDisplayName(locale: Locale): string;
    localeDisplayName(localeId: string): string;
    localeDisplayName(locale: ULocale): string;
    // private localeDisplayNameInternal(locale: ULocale): string;
    // private localeIdName(localeId: string): string;
    // private newRow(modified: ULocale, capContext: DisplayContext): LocaleDisplayNames$UiListItem;
    regionDisplayName(region: string): string;
    // private regionDisplayName(region: string, skipAdjust: boolean): string;
    scriptDisplayName(scriptCode: number): string;
    scriptDisplayName(script: string): string;
    scriptDisplayNameInContext(script: string): string;
    // private scriptDisplayNameInContext(script: string, skipAdjust: boolean): string;
    variantDisplayName(variant: string): string;
    // private variantDisplayName(variant: string, skipAdjust: boolean): string;
}