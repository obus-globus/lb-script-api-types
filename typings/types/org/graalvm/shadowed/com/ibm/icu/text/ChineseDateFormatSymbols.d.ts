import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { DateFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormatSymbols.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ChineseDateFormatSymbols extends DateFormatSymbols {
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
    static getDateFormatBundle(paramcalendarClass: Class<Object>, paramlocale: Locale): ResourceBundle;
    static getDateFormatBundle(paramcalendarClass: Class<Object>, paramlocale: ULocale): ResourceBundle;
    static getDateFormatBundle(paramcal: Calendar, paramlocale: Locale): ResourceBundle;
    static getDateFormatBundle(paramcal: Calendar, paramlocale: ULocale): ResourceBundle;
    static getInstance(): DateFormatSymbols;
    static getInstance(paramlocale: Locale): DateFormatSymbols;
    static getInstance(paramlocale: ULocale): DateFormatSymbols;
    constructor()
    constructor(locale: Locale)
    constructor(cal: Calendar, locale: Locale)
    constructor(cal: Calendar, locale: ULocale)
    constructor(locale: ULocale)
    // private isLeapMonth: string[];
    getLeapMonth(leap: number): string;
    initializeData(dfs: DateFormatSymbols): void;
    initializeData(desiredLocale: ULocale, type: string): void;
    initializeData(loc: ULocale, b: ICUResourceBundle, calendarType: string): void;
    // private initializeIsLeapMonth(): void;
}