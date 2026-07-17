import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { ICUResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { DateFormatSymbols$CapitalizationContextUsage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormatSymbols$CapitalizationContextUsage.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Type.d.ts'
export class DateFormatSymbols extends Object implements Serializable, Cloneable {
    static ABBREVIATED: number;
    static DT_CONTEXT_COUNT: number;
    static DT_WIDTH_COUNT: number;
    static FORMAT: number;
    static NARROW: number;
    static NUMERIC: number;
    static SHORT: number;
    static STANDALONE: number;
    static WIDE: number;
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getDateFormatBundle(paramcalendarClass: Class<Calendar>, paramlocale: Locale): ResourceBundle;
    static getDateFormatBundle(paramcalendarClass: Class<Calendar>, paramlocale: ULocale): ResourceBundle;
    static getDateFormatBundle(paramcal: Calendar, paramlocale: Locale): ResourceBundle;
    static getDateFormatBundle(paramcal: Calendar, paramlocale: ULocale): ResourceBundle;
    static getInstance(): DateFormatSymbols;
    static getInstance(paramlocale: Locale): DateFormatSymbols;
    static getInstance(paramlocale: ULocale): DateFormatSymbols;
    constructor()
    constructor(calendarClass: Class<Calendar>, locale: Locale)
    constructor(calendarClass: Class<Calendar>, locale: ULocale)
    constructor(locale: Locale)
    constructor(bundle: ResourceBundle, locale: Locale)
    constructor(bundle: ResourceBundle, locale: ULocale)
    constructor(cal: Calendar, locale: Locale)
    constructor(cal: Calendar, locale: ULocale)
    constructor(locale: ULocale)
    // private abbreviatedDayPeriods: string[];
    // private actualLocale: ULocale;
    // private ampms: string[];
    // private ampmsNarrow: string[];
    // private ampmsWide: string[];
    // private capitalization: Map<DateFormatSymbols$CapitalizationContextUsage, boolean[]>;
    eraNames: string[];
    eras: string[];
    // private leapMonthPatterns: string[];
    localPatternChars: string;
    months: string[];
    // private narrowDayPeriods: string[];
    narrowEras: string[];
    // private narrowMonths: string[];
    // private narrowQuarters: string[];
    // private narrowWeekdays: string[];
    // private quarters: string[];
    // private requestedLocale: ULocale;
    shortMonths: string[];
    // private shortQuarters: string[];
    shortWeekdays: string[];
    // private shortYearNames: string[];
    // private shortZodiacNames: string[];
    // private shorterWeekdays: string[];
    // private standaloneAbbreviatedDayPeriods: string[];
    // private standaloneMonths: string[];
    // private standaloneNarrowDayPeriods: string[];
    // private standaloneNarrowMonths: string[];
    // private standaloneNarrowQuarters: string[];
    // private standaloneNarrowWeekdays: string[];
    // private standaloneQuarters: string[];
    // private standaloneShortMonths: string[];
    // private standaloneShortQuarters: string[];
    // private standaloneShortWeekdays: string[];
    // private standaloneShorterWeekdays: string[];
    // private standaloneWeekdays: string[];
    // private standaloneWideDayPeriods: string[];
    // private timeSeparator: string;
    // private validLocale: ULocale;
    weekdays: string[];
    // private wideDayPeriods: string[];
    readonly zoneStrings: string[][];
    clone(): DateFormatSymbols;
    // private duplicate(srcArray: string[][]): string[][];
    // private duplicate(srcArray: string[]): string[];
    equals(obj: Object | null): boolean;
    getAmPmStrings(): string[];
    getAmPmStrings(context: number, width: number): string[];
    getEraNames(): string[];
    getEras(): string[];
    getLeapMonthPattern(context: number, width: number): string;
    getLocalPatternChars(): string;
    getLocale(type: ULocale$Type): ULocale;
    getMonths(): string[];
    getMonths(context: number, width: number): string[];
    getNarrowEras(): string[];
    getQuarters(context: number, width: number): string[];
    getShortMonths(): string[];
    getShortWeekdays(): string[];
    getTimeSeparatorString(): string;
    getWeekdays(): string[];
    getWeekdays(context: number, width: number): string[];
    getYearNames(context: number, width: number): string[];
    getZodiacNames(context: number, width: number): string[];
    getZoneStrings(): string[][];
    hashCode(): number;
    initEras(erasKey: string, maps: { [key: string]: { [key: string]: string } }, calBundle: ICUResourceBundle, maxEra: number): string[];
    initializeData(dfs: DateFormatSymbols): void;
    initializeData(desiredLocale: ULocale, type: string): void;
    initializeData(desiredLocale: ULocale, b: ICUResourceBundle, calendarType: string): void;
    // private loadDayPeriodStrings(resourceMap: { [key: string]: string }, copyFrom: string[]): string[];
    // private readObject(stream: ObjectInputStream): void;
    setAmPmStrings(newAmpms: string[]): void;
    setAmPmStrings(newAmpms: string[], context: number, width: number): void;
    setEraNames(newEraNames: string[]): void;
    setEras(newEras: string[]): void;
    setLeapMonthPattern(leapMonthPattern: string, context: number, width: number): void;
    setLocalPatternChars(newLocalPatternChars: string): void;
    setLocale(valid: ULocale, actual: ULocale): void;
    setMonths(newMonths: string[]): void;
    setMonths(newMonths: string[], context: number, width: number): void;
    setNarrowEras(newNarrowEras: string[]): void;
    setQuarters(newQuarters: string[], context: number, width: number): void;
    setShortMonths(newShortMonths: string[]): void;
    setShortWeekdays(newAbbrevWeekdays: string[]): void;
    setTimeSeparatorString(newTimeSeparator: string): void;
    setWeekdays(newWeekdays: string[]): void;
    setWeekdays(newWeekdays: string[], context: number, width: number): void;
    setYearNames(yearNames: string[], context: number, width: number): void;
    setZodiacNames(zodiacNames: string[], context: number, width: number): void;
    setZoneStrings(newZoneStrings: string[][]): void;
}