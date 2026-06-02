import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../java/text/FieldPosition.d.ts'
import type { Format } from '../../../../../java/text/Format.d.ts'
import type { ParsePosition } from '../../../../../java/text/ParsePosition.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DateParser } from '../../../../../org/apache/commons/lang3/time/DateParser.d.ts'
import type { DatePrinter } from '../../../../../org/apache/commons/lang3/time/DatePrinter.d.ts'
import type { FastDateParser } from '../../../../../org/apache/commons/lang3/time/FastDateParser.d.ts'
import type { FastDatePrinter } from '../../../../../org/apache/commons/lang3/time/FastDatePrinter.d.ts'
export class FastDateFormat extends Format implements DateParser, DatePrinter {
    static FULL: number;
    static LONG: number;
    static MEDIUM: number;
    static SHORT: number;
    static getDateInstance(paramarg0: number): FastDateFormat;
    static getDateInstance(paramarg0: number, paramarg1: Locale): FastDateFormat;
    static getDateInstance(paramarg0: number, paramarg1: TimeZone): FastDateFormat;
    static getDateInstance(paramarg0: number, paramarg1: TimeZone, paramarg2: Locale): FastDateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number): FastDateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number, paramarg2: Locale): FastDateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number, paramarg2: TimeZone): FastDateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number, paramarg2: TimeZone, paramarg3: Locale): FastDateFormat;
    static getInstance(): FastDateFormat;
    static getInstance(paramarg0: string): FastDateFormat;
    static getInstance(paramarg0: string, paramarg1: Locale): FastDateFormat;
    static getInstance(paramarg0: string, paramarg1: TimeZone): FastDateFormat;
    static getInstance(paramarg0: string, paramarg1: TimeZone, paramarg2: Locale): FastDateFormat;
    static getTimeInstance(paramarg0: number): FastDateFormat;
    static getTimeInstance(paramarg0: number, paramarg1: Locale): FastDateFormat;
    static getTimeInstance(paramarg0: number, paramarg1: TimeZone): FastDateFormat;
    static getTimeInstance(paramarg0: number, paramarg1: TimeZone, paramarg2: Locale): FastDateFormat;
    constructor(arg0: string, arg1: TimeZone, arg2: Locale)
    constructor(arg0: string, arg1: TimeZone, arg2: Locale, arg3: Date)
    // private parser: FastDateParser;
    // private printer: FastDatePrinter;
    applyRules(arg0: Calendar, arg1: StringBuffer): StringBuffer;
    equals(arg0: Object | null): boolean;
    format(arg0: Calendar): string;
    format<B extends Appendable>(arg0: Calendar, arg1: B): B;
    format(arg0: Calendar, arg1: StringBuffer): StringBuffer;
    format(arg0: Date): string;
    format<B extends Appendable>(arg0: Date, arg1: B): B;
    format(arg0: Date, arg1: StringBuffer): StringBuffer;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: number): string;
    format<B extends Appendable>(arg0: number, arg1: B): B;
    format(arg0: number, arg1: StringBuffer): StringBuffer;
    getLocale(): Locale;
    getMaxLengthEstimate(): number;
    getPattern(): string;
    getTimeZone(): TimeZone;
    hashCode(): number;
    parse(arg0: string): Date;
    parse(arg0: string, arg1: ParsePosition): Date;
    parse(arg0: string, arg1: ParsePosition, arg2: Calendar): boolean;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    toString(): string;
}