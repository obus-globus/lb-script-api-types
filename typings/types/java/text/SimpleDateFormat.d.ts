import type { JavaMap } from '../../JavaMap.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../java/lang/StringBuffer.d.ts'
import type { AttributedCharacterIterator } from '../../java/text/AttributedCharacterIterator.d.ts'
import type { CalendarBuilder } from '../../java/text/CalendarBuilder.d.ts'
import type { DateFormat } from '../../java/text/DateFormat.d.ts'
import type { DateFormatSymbols } from '../../java/text/DateFormatSymbols.d.ts'
import type { FieldPosition } from '../../java/text/FieldPosition.d.ts'
import type { Format$FieldDelegate } from '../../java/text/Format$FieldDelegate.d.ts'
import type { Format$StringBuf } from '../../java/text/Format$StringBuf.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { ParsePosition } from '../../java/text/ParsePosition.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SimpleDateFormat extends DateFormat {
    static AM_PM_FIELD: number;
    static DATE_FIELD: number;
    static DAY_OF_WEEK_FIELD: number;
    static DAY_OF_WEEK_IN_MONTH_FIELD: number;
    static DAY_OF_YEAR_FIELD: number;
    static DEFAULT: number;
    static ERA_FIELD: number;
    static FULL: number;
    static HOUR0_FIELD: number;
    static HOUR1_FIELD: number;
    static HOUR_OF_DAY0_FIELD: number;
    static HOUR_OF_DAY1_FIELD: number;
    static LONG: number;
    static MEDIUM: number;
    static MILLISECOND_FIELD: number;
    static MINUTE_FIELD: number;
    static MONTH_FIELD: number;
    static SECOND_FIELD: number;
    static SHORT: number;
    static TIMEZONE_FIELD: number;
    static WEEK_OF_MONTH_FIELD: number;
    static WEEK_OF_YEAR_FIELD: number;
    static YEAR_FIELD: number;
    static getAvailableLocales(): Locale[];
    static getDateInstance(): DateFormat;
    static getDateInstance(paramarg0: number): DateFormat;
    static getDateInstance(paramarg0: number, paramarg1: Locale): DateFormat;
    static getDateTimeInstance(): DateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number): DateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number, paramarg2: Locale): DateFormat;
    static getInstance(): DateFormat;
    static getTimeInstance(): DateFormat;
    static getTimeInstance(paramarg0: number): DateFormat;
    static getTimeInstance(paramarg0: number, paramarg1: Locale): DateFormat;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: DateFormatSymbols)
    constructor(arg0: string, arg1: Locale)
    // private compiledPattern: string[];
    // private defaultCenturyStart: Date;
    // private defaultCenturyStartYear: number;
    // private forceStandaloneForm: boolean;
    // private formatData: DateFormatSymbols;
    // private hasFollowingMinusSign: boolean;
    // private locale: Locale;
    // private minusSign: string;
    // private originalNumberFormat: NumberFormat;
    // private originalNumberPattern: string;
    // private pattern: string;
    // private serialVersionOnStream: number;
    // private useDateFormatSymbols: boolean;
    // private zeroDigit: string;
    applyLocalizedPattern(arg0: string): void;
    applyPattern(arg0: string): void;
    // private applyPatternImpl(arg0: string): void;
    // private charEquals(arg0: string, arg1: string): boolean;
    // private checkNegativeNumberExpression(): void;
    clone(): Object;
    // private compile(arg0: string): string[];
    equals(arg0: Object | null): boolean;
    format(arg0: Date): string;
    format(arg0: Date, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Date, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    // private format(arg0: Date, arg1: Format$StringBuf, arg2: Format$FieldDelegate): Format$StringBuf;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Object, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;
    get2DigitYearStart(): Date;
    getDateFormatSymbols(): DateFormatSymbols;
    // private getDisplayContextNamesMap(arg0: number, arg1: Locale): JavaMap<string, number>;
    // private getDisplayNamesMap(arg0: number, arg1: Locale): JavaMap<string, number>;
    hashCode(): number;
    // private initialize(arg0: Locale): void;
    // private initializeCalendar(arg0: Locale): void;
    // private initializeDefaultCentury(): void;
    // private isDigit(arg0: string): boolean;
    // private matchDSTString(arg0: string, arg1: number, arg2: number, arg3: number, arg4: string[][]): boolean;
    // private matchString(arg0: string, arg1: number, arg2: number, arg3: string[], arg4: CalendarBuilder): number;
    // private matchString(arg0: string, arg1: number, arg2: number, arg3: JavaMap<string, number>, arg4: CalendarBuilder): number;
    // private matchZoneString(arg0: string, arg1: number, arg2: string[]): number;
    parse(arg0: string): Date;
    parse(arg0: string, arg1: ParsePosition): Date;
    // private parseAmbiguousDatesAsAfter(arg0: Date): void;
    // private readObject(arg0: ObjectInputStream): void;
    set2DigitYearStart(arg0: Date): void;
    setDateFormatSymbols(arg0: DateFormatSymbols): void;
    // private shouldObeyCount(arg0: number, arg1: number): boolean;
    // private subFormat(arg0: number, arg1: number, arg2: Format$FieldDelegate, arg3: Format$StringBuf, arg4: boolean): void;
    // private subParse(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean[], arg6: ParsePosition, arg7: boolean, arg8: CalendarBuilder): number;
    // private subParseNumericZone(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: CalendarBuilder): number;
    // private subParseZoneString(arg0: string, arg1: number, arg2: CalendarBuilder): number;
    toLocalizedPattern(): string;
    toPattern(): string;
    toString(): string;
    // private translatePattern(arg0: string, arg1: string, arg2: string): string;
    // private useDateFormatSymbols(): boolean;
    // private zeroPaddingNumber(arg0: number, arg1: number, arg2: number, arg3: Format$StringBuf): void;
}