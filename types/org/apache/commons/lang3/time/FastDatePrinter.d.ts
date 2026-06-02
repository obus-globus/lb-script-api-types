import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../java/text/FieldPosition.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DatePrinter } from '../../../../../org/apache/commons/lang3/time/DatePrinter.d.ts'
import type { FastDatePrinter$NumberRule } from '../../../../../org/apache/commons/lang3/time/FastDatePrinter$NumberRule.d.ts'
import type { FastDatePrinter$Rule } from '../../../../../org/apache/commons/lang3/time/FastDatePrinter$Rule.d.ts'
export class FastDatePrinter extends Object implements Serializable, DatePrinter {
    static FULL: number;
    static LONG: number;
    static MEDIUM: number;
    static SHORT: number;
    constructor(arg0: string, arg1: TimeZone, arg2: Locale)
    readonly locale: Locale;
    readonly maxLengthEstimate: number;
    readonly pattern: string;
    // private rules: FastDatePrinter$Rule[];
    readonly timeZone: TimeZone;
    // private applyRules<B extends Appendable>(arg0: Calendar, arg1: B): B;
    applyRules(arg0: Calendar, arg1: StringBuffer): StringBuffer;
    // private applyRulesToString(arg0: Calendar): string;
    equals(arg0: Object | null): boolean;
    format(arg0: Calendar): string;
    format<B extends Appendable>(arg0: Calendar, arg1: B): B;
    format(arg0: Calendar, arg1: StringBuffer): StringBuffer;
    format(arg0: Date): string;
    format<B extends Appendable>(arg0: Date, arg1: B): B;
    format(arg0: Date, arg1: StringBuffer): StringBuffer;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: number): string;
    format<B extends Appendable>(arg0: number, arg1: B): B;
    format(arg0: number, arg1: StringBuffer): StringBuffer;
    getLocale(): Locale;
    getMaxLengthEstimate(): number;
    getPattern(): string;
    getTimeZone(): TimeZone;
    hashCode(): number;
    // private init(): void;
    // private newCalendar(): Calendar;
    parsePattern(): FastDatePrinter$Rule[];
    parseToken(arg0: string, arg1: number[]): string;
    // private readObject(arg0: ObjectInputStream): void;
    selectNumberRule(arg0: number, arg1: number): FastDatePrinter$NumberRule;
    toString(): string;
}