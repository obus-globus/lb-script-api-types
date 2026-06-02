import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { ResourceBundle } from '../../../../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { Collator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator.d.ts'
import type { DateFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { Currency } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class GlobalizationPreferences extends Object implements Freezable<GlobalizationPreferences> {
    static BI_CHARACTER: number;
    static BI_LINE: number;
    static BI_SENTENCE: number;
    static BI_TITLE: number;
    static BI_WORD: number;
    static DF_FULL: number;
    static DF_LONG: number;
    static DF_MEDIUM: number;
    static DF_NONE: number;
    static DF_SHORT: number;
    static ID_CURRENCY: number;
    static ID_CURRENCY_SYMBOL: number;
    static ID_KEYWORD: number;
    static ID_KEYWORD_VALUE: number;
    static ID_LANGUAGE: number;
    static ID_LOCALE: number;
    static ID_SCRIPT: number;
    static ID_TERRITORY: number;
    static ID_TIMEZONE: number;
    static ID_VARIANT: number;
    static NF_CURRENCY: number;
    static NF_INTEGER: number;
    static NF_NUMBER: number;
    static NF_PERCENT: number;
    static NF_SCIENTIFIC: number;
    constructor()
    // private breakIterators: BreakIterator[];
    readonly calendar: Calendar;
    readonly collator: Collator;
    readonly currency: Currency;
    // private dateFormats: DateFormat[][];
    readonly frozen: boolean;
    // private implicitLocales: ULocale[];
    readonly locales: ULocale[];
    // private numberFormats: NumberFormat[];
    readonly territory: string;
    // private timezone: TimeZone;
    cloneAsThawed(): GlobalizationPreferences;
    freeze(): GlobalizationPreferences;
    // private getAvailableLocale(type: number): ULocale;
    getBreakIterator(type: number): BreakIterator;
    getCalendar(): Calendar;
    getCollator(): Collator;
    getCurrency(): Currency;
    getDateFormat(dateStyle: number, timeStyle: number): DateFormat;
    getDisplayName(id: string, type: number): string;
    getLocale(index: number): ULocale;
    getLocales(): ULocale[];
    getNumberFormat(style: number): NumberFormat;
    getResourceBundle(baseName: string): ResourceBundle;
    getResourceBundle(baseName: string, loader: ClassLoader): ResourceBundle;
    getTerritory(): string;
    getTimeZone(): TimeZone;
    guessBreakIterator(type: number): BreakIterator;
    guessCalendar(): Calendar;
    guessCollator(): Collator;
    guessCurrency(): Currency;
    guessDateFormat(dateStyle: number, timeStyle: number): DateFormat;
    guessLocales(): ULocale[];
    guessNumberFormat(style: number): NumberFormat;
    guessTerritory(): string;
    guessTimeZone(): TimeZone;
    // private isAvailableLocale(loc: ULocale, type: number): boolean;
    isFrozen(): boolean;
    processLocales(inputLocales: ULocale[]): ULocale[];
    reset(): GlobalizationPreferences;
    setBreakIterator(type: number, iterator: BreakIterator): GlobalizationPreferences;
    setCalendar(calendar: Calendar): GlobalizationPreferences;
    setCollator(collator: Collator): GlobalizationPreferences;
    setCurrency(currency: Currency): GlobalizationPreferences;
    setDateFormat(dateStyle: number, timeStyle: number, format: DateFormat): GlobalizationPreferences;
    setLocale(uLocale: ULocale): GlobalizationPreferences;
    setLocales(uLocales: ULocale[]): GlobalizationPreferences;
    setLocales(acceptLanguageString: string): GlobalizationPreferences;
    setLocales(inputLocales: ULocale[]): GlobalizationPreferences;
    setNumberFormat(style: number, format: NumberFormat): GlobalizationPreferences;
    setTerritory(territory: string): GlobalizationPreferences;
    setTimeZone(timezone: TimeZone): GlobalizationPreferences;
}