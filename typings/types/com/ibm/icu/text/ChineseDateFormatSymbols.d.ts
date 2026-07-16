import type { ICUResourceBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { DateFormatSymbols } from '../../../../com/ibm/icu/text/DateFormatSymbols.d.ts'
import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../java/util/ResourceBundle.d.ts'
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
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getDateFormatBundle(paramarg0: Calendar, paramarg1: ULocale): ResourceBundle;
    static getDateFormatBundle(paramarg0: Calendar, paramarg1: Locale): ResourceBundle;
    static getDateFormatBundle(paramarg0: Class<Calendar>, paramarg1: ULocale): ResourceBundle;
    static getDateFormatBundle(paramarg0: Class<Calendar>, paramarg1: Locale): ResourceBundle;
    static getInstance(): DateFormatSymbols;
    static getInstance(paramarg0: ULocale): DateFormatSymbols;
    static getInstance(paramarg0: Locale): DateFormatSymbols;
    constructor()
    constructor(arg0: Calendar, arg1: ULocale)
    constructor(arg0: Calendar, arg1: Locale)
    constructor(arg0: ULocale)
    constructor(arg0: Locale)
    // private isLeapMonth: string[];
    getLeapMonth(arg0: number): string;
    initializeData(arg0: DateFormatSymbols): void;
    initializeData(arg0: ULocale, arg1: ICUResourceBundle, arg2: string): void;
    initializeData(arg0: ULocale, arg1: string): void;
    // private initializeIsLeapMonth(): void;
}