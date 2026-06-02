import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DatePrinter } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/DatePrinter.d.ts'
import type { FastDatePrinter$NumberRule } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FastDatePrinter$NumberRule.d.ts'
import type { FastDatePrinter$Rule } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FastDatePrinter$Rule.d.ts'
export class FastDatePrinter extends Object implements Serializable, DatePrinter {
    static FULL: number;
    static LONG: number;
    static MEDIUM: number;
    static SHORT: number;
    constructor(pattern: string, timeZone: TimeZone, locale: Locale)
    // private mLocale: Locale;
    // private mMaxLengthEstimate: number;
    // private mPattern: string;
    // private mRules: FastDatePrinter$Rule[];
    // private mTimeZone: TimeZone;
    // private applyRules<B extends Appendable>(calendar: Calendar, buf: B): B;
    applyRules(calendar: Calendar, buf: StringBuffer): StringBuffer;
    // private applyRulesToString(c: Calendar): string;
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
    // private init(): void;
    // private newCalendar(): Calendar;
    parsePattern(): FastDatePrinter$Rule[];
    parseToken(pattern: string, indexRef: number[]): string;
    // private readObject(in_: ObjectInputStream): void;
    selectNumberRule(field: number, padding: number): FastDatePrinter$NumberRule;
    toString(): string;
}