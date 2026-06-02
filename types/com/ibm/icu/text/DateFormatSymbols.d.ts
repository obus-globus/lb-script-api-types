import type { ICUResourceBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { DateFormatSymbols$CapitalizationContextUsage } from '../../../../com/ibm/icu/text/DateFormatSymbols$CapitalizationContextUsage.d.ts'
import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../com/ibm/icu/util/ULocale$Type.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
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
    static getAvailableLocales(): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
    static getDateFormatBundle(paramarg0: Calendar, paramarg1: ULocale): ResourceBundle;
    static getDateFormatBundle(paramarg0: Calendar, paramarg1: Locale): ResourceBundle;
    static getDateFormatBundle(paramarg0: Class<Object>, paramarg1: ULocale): ResourceBundle;
    static getDateFormatBundle(paramarg0: Class<Object>, paramarg1: Locale): ResourceBundle;
    static getInstance(): DateFormatSymbols;
    static getInstance(paramarg0: ULocale): DateFormatSymbols;
    static getInstance(paramarg0: Locale): DateFormatSymbols;
    constructor()
    constructor(arg0: Calendar, arg1: ULocale)
    constructor(arg0: Calendar, arg1: Locale)
    constructor(arg0: ULocale)
    private constructor(arg0: ULocale, arg1: ICUResourceBundle, arg2: string)
    constructor(arg0: Class<Calendar>, arg1: ULocale)
    constructor(arg0: Class<Calendar>, arg1: Locale)
    constructor(arg0: Locale)
    constructor(arg0: ResourceBundle, arg1: ULocale)
    constructor(arg0: ResourceBundle, arg1: Locale)
    // private abbreviatedDayPeriods: string[];
    // private actualLocale: ULocale;
    // private ampms: string[];
    // private ampmsNarrow: string[];
    // private capitalization: { [key in DateFormatSymbols$CapitalizationContextUsage]: (Object | null)[] };
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
    clone(): Object;
    protected clone(): Object;
    // private duplicate(arg0: string[][]): string[][];
    // private duplicate(arg0: string[]): string[];
    equals(arg0: Object | null): boolean;
    getAmPmStrings(): string[];
    getEraNames(): string[];
    getEras(): string[];
    getLeapMonthPattern(arg0: number, arg1: number): string;
    getLocalPatternChars(): string;
    getLocale(arg0: ULocale$Type): ULocale;
    getMonths(): string[];
    getMonths(arg0: number, arg1: number): string[];
    getNarrowEras(): string[];
    getQuarters(arg0: number, arg1: number): string[];
    getShortMonths(): string[];
    getShortWeekdays(): string[];
    getTimeSeparatorString(): string;
    getWeekdays(): string[];
    getWeekdays(arg0: number, arg1: number): string[];
    getYearNames(arg0: number, arg1: number): string[];
    getZodiacNames(arg0: number, arg1: number): string[];
    getZoneStrings(): string[][];
    hashCode(): number;
    initializeData(arg0: DateFormatSymbols): void;
    initializeData(arg0: ULocale, arg1: ICUResourceBundle, arg2: string): void;
    initializeData(arg0: ULocale, arg1: string): void;
    // private loadDayPeriodStrings(arg0: { [key: string]: string }, arg1: string[]): string[];
    // private readObject(arg0: ObjectInputStream): void;
    setAmPmStrings(arg0: string[]): void;
    setEraNames(arg0: string[]): void;
    setEras(arg0: string[]): void;
    setLeapMonthPattern(arg0: string, arg1: number, arg2: number): void;
    setLocalPatternChars(arg0: string): void;
    setLocale(arg0: ULocale, arg1: ULocale): void;
    setMonths(arg0: string[]): void;
    setMonths(arg0: string[], arg1: number, arg2: number): void;
    setNarrowEras(arg0: string[]): void;
    setQuarters(arg0: string[], arg1: number, arg2: number): void;
    setShortMonths(arg0: string[]): void;
    setShortWeekdays(arg0: string[]): void;
    setTimeSeparatorString(arg0: string): void;
    setWeekdays(arg0: string[]): void;
    setWeekdays(arg0: string[], arg1: number, arg2: number): void;
    setYearNames(arg0: string[], arg1: number, arg2: number): void;
    setZodiacNames(arg0: string[], arg1: number, arg2: number): void;
    setZoneStrings(arg0: string[][]): void;
}