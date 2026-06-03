import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DatePrinter } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/DatePrinter.d.ts'
import type { FastDatePrinter } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FastDatePrinter.d.ts'
import type { Format } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/Format.d.ts'
export class FastDateFormat extends Format implements DatePrinter {
    static FULL: number;
    static LONG: number;
    static MEDIUM: number;
    static SHORT: number;
    static getDateInstance(paramstyle: number): FastDateFormat;
    static getDateInstance(paramstyle: number, paramlocale: Locale): FastDateFormat;
    static getDateInstance(paramstyle: number, paramtimeZone: TimeZone): FastDateFormat;
    static getDateInstance(paramstyle: number, paramtimeZone: TimeZone, paramlocale: Locale): FastDateFormat;
    static getDateTimeInstance(paramdateStyle: number, paramtimeStyle: number): FastDateFormat;
    static getDateTimeInstance(paramdateStyle: number, paramtimeStyle: number, paramlocale: Locale): FastDateFormat;
    static getDateTimeInstance(paramdateStyle: number, paramtimeStyle: number, paramtimeZone: TimeZone): FastDateFormat;
    static getDateTimeInstance(paramdateStyle: number, paramtimeStyle: number, paramtimeZone: TimeZone, paramlocale: Locale): FastDateFormat;
    static getInstance(): FastDateFormat;
    static getInstance(parampattern: string): FastDateFormat;
    static getInstance(parampattern: string, paramlocale: Locale): FastDateFormat;
    static getInstance(parampattern: string, paramtimeZone: TimeZone): FastDateFormat;
    static getInstance(parampattern: string, paramtimeZone: TimeZone, paramlocale: Locale): FastDateFormat;
    static getTimeInstance(paramstyle: number): FastDateFormat;
    static getTimeInstance(paramstyle: number, paramlocale: Locale): FastDateFormat;
    static getTimeInstance(paramstyle: number, paramtimeZone: TimeZone): FastDateFormat;
    static getTimeInstance(paramstyle: number, paramtimeZone: TimeZone, paramlocale: Locale): FastDateFormat;
    constructor(pattern: string, timeZone: TimeZone, locale: Locale)
    constructor(pattern: string, timeZone: TimeZone, locale: Locale, centuryStart: Date)
    // private printer: FastDatePrinter;
    equals(obj: Object | null): boolean;
    format(calendar: Calendar): string;
    format<B extends Appendable>(calendar: Calendar, buf: B): B;
    format(date: Date): string;
    format<B extends Appendable>(date: Date, buf: B): B;
    format(obj: Object): string;
    format(obj: Object, toAppendTo: StringBuilder, pos: FieldPosition): StringBuilder;
    format(millis: number): string;
    format<B extends Appendable>(millis: number, buf: B): B;
    getLocale(): Locale;
    getMaxLengthEstimate(): number;
    getPattern(): string;
    getTimeZone(): TimeZone;
    hashCode(): number;
    toString(): string;
}