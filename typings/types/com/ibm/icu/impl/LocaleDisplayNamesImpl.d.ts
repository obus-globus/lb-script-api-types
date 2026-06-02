import type { CurrencyData$CurrencyDisplayInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { LocaleDisplayNamesImpl$CapitalizationContextUsage } from '../../../../com/ibm/icu/impl/LocaleDisplayNamesImpl$CapitalizationContextUsage.d.ts'
import type { LocaleDisplayNamesImpl$DataTable } from '../../../../com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTable.d.ts'
import type { LocaleDisplayNamesImpl$DataTableType } from '../../../../com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTableType.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { DisplayContext } from '../../../../com/ibm/icu/text/DisplayContext.d.ts'
import type { DisplayContext$Type } from '../../../../com/ibm/icu/text/DisplayContext$Type.d.ts'
import type { LocaleDisplayNames } from '../../../../com/ibm/icu/text/LocaleDisplayNames.d.ts'
import type { LocaleDisplayNames$DialectHandling } from '../../../../com/ibm/icu/text/LocaleDisplayNames$DialectHandling.d.ts'
import type { LocaleDisplayNames$UiListItem } from '../../../../com/ibm/icu/text/LocaleDisplayNames$UiListItem.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleDisplayNamesImpl extends LocaleDisplayNames {
    static getInstance(paramarg0: ULocale, paramarg1: (Object | null)[]): LocaleDisplayNames;
    static getInstance(paramarg0: ULocale, paramarg1: LocaleDisplayNames$DialectHandling): LocaleDisplayNames;
    static getInstance(paramarg0: ULocale): LocaleDisplayNames;
    static getInstance(paramarg0: Locale): LocaleDisplayNames;
    static getInstance(paramarg0: Locale, paramarg1: (Object | null)[]): LocaleDisplayNames;
    static haveData(paramarg0: LocaleDisplayNamesImpl$DataTableType): boolean;
    constructor(arg0: ULocale, arg1: LocaleDisplayNames$DialectHandling)
    constructor(arg0: ULocale, arg1: DisplayContext[])
    // private capitalization: DisplayContext;
    // private capitalizationBrkIter: BreakIterator;
    // private capitalizationUsage: (Object | null)[];
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
    // private adjustForUsageAndContext(arg0: LocaleDisplayNamesImpl$CapitalizationContextUsage, arg1: string): string;
    // private appendWithSep(arg0: string, arg1: StringBuilder): StringBuilder;
    getContext(arg0: DisplayContext$Type): DisplayContext;
    getDialectHandling(): LocaleDisplayNames$DialectHandling;
    getLocale(): ULocale;
    getUiListCompareWholeItems(arg0: ULocale[], arg1: (param0: LocaleDisplayNames$UiListItem) => kotlin.Boolean): LocaleDisplayNames$UiListItem[];
    keyDisplayName(arg0: string): string;
    // private keyDisplayName(arg0: string, arg1: boolean): string;
    keyValueDisplayName(arg0: string, arg1: string): string;
    // private keyValueDisplayName(arg0: string, arg1: string, arg2: boolean): string;
    languageDisplayName(arg0: string): string;
    localeDisplayName(arg0: ULocale): string;
    localeDisplayName(arg0: Locale): string;
    localeDisplayName(arg0: string): string;
    // private localeDisplayNameInternal(arg0: ULocale): string;
    // private localeIdName(arg0: string): string;
    // private newRow(arg0: ULocale, arg1: DisplayContext): LocaleDisplayNames$UiListItem;
    regionDisplayName(arg0: string): string;
    // private regionDisplayName(arg0: string, arg1: boolean): string;
    scriptDisplayName(arg0: number): string;
    scriptDisplayName(arg0: string): string;
    scriptDisplayNameInContext(arg0: string): string;
    // private scriptDisplayNameInContext(arg0: string, arg1: boolean): string;
    variantDisplayName(arg0: string): string;
    // private variantDisplayName(arg0: string, arg1: boolean): string;
}