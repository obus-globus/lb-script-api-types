import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { Collator } from '../../../../com/ibm/icu/text/Collator.d.ts'
import type { DateFormat } from '../../../../com/ibm/icu/text/DateFormat.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { Currency } from '../../../../com/ibm/icu/util/Currency.d.ts'
import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { ResourceBundle } from '../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    // private getAvailableLocale(arg0: number): ULocale;
    getBreakIterator(arg0: number): BreakIterator;
    getCalendar(): Calendar;
    getCollator(): Collator;
    getCurrency(): Currency;
    getDateFormat(arg0: number, arg1: number): DateFormat;
    getDisplayName(arg0: string, arg1: number): string;
    getLocale(arg0: number): ULocale;
    getLocales(): ULocale[];
    getNumberFormat(arg0: number): NumberFormat;
    getResourceBundle(arg0: string): ResourceBundle;
    getResourceBundle(arg0: string, arg1: ClassLoader): ResourceBundle;
    getTerritory(): string;
    getTimeZone(): TimeZone;
    guessBreakIterator(arg0: number): BreakIterator;
    guessCalendar(): Calendar;
    guessCollator(): Collator;
    guessCurrency(): Currency;
    guessDateFormat(arg0: number, arg1: number): DateFormat;
    guessLocales(): ULocale[];
    guessNumberFormat(arg0: number): NumberFormat;
    guessTerritory(): string;
    guessTimeZone(): TimeZone;
    // private isAvailableLocale(arg0: ULocale, arg1: number): boolean;
    isFrozen(): boolean;
    processLocales(arg0: ULocale[]): ULocale[];
    reset(): GlobalizationPreferences;
    setBreakIterator(arg0: number, arg1: BreakIterator): GlobalizationPreferences;
    setCalendar(arg0: Calendar): GlobalizationPreferences;
    setCollator(arg0: Collator): GlobalizationPreferences;
    setCurrency(arg0: Currency): GlobalizationPreferences;
    setDateFormat(arg0: number, arg1: number, arg2: DateFormat): GlobalizationPreferences;
    setLocale(arg0: ULocale): GlobalizationPreferences;
    setLocales(arg0: ULocale[]): GlobalizationPreferences;
    setLocales(arg0: string): GlobalizationPreferences;
    setNumberFormat(arg0: number, arg1: NumberFormat): GlobalizationPreferences;
    setTerritory(arg0: string): GlobalizationPreferences;
    setTimeZone(arg0: TimeZone): GlobalizationPreferences;
}