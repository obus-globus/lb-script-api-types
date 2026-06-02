import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { ParsePosition } from '../../../../../java/text/ParsePosition.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DateParser } from '../../../../../org/apache/commons/lang3/time/DateParser.d.ts'
import type { FastDateParser$Strategy } from '../../../../../org/apache/commons/lang3/time/FastDateParser$Strategy.d.ts'
import type { FastDateParser$StrategyAndWidth } from '../../../../../org/apache/commons/lang3/time/FastDateParser$StrategyAndWidth.d.ts'
export class FastDateParser extends Object implements Serializable, DateParser {
    constructor(arg0: string, arg1: TimeZone, arg2: Locale)
    constructor(arg0: string, arg1: TimeZone, arg2: Locale, arg3: Date)
    // private century: number;
    readonly locale: Locale;
    readonly pattern: string;
    // private patterns: FastDateParser$StrategyAndWidth[];
    // private startYear: number;
    readonly timeZone: TimeZone;
    // private adjustYear(arg0: number): number;
    equals(arg0: Object | null): boolean;
    getLocale(): Locale;
    // private getLocaleSpecificStrategy(arg0: number, arg1: Calendar): FastDateParser$Strategy;
    getPattern(): string;
    // private getStrategy(arg0: string, arg1: number, arg2: Calendar): FastDateParser$Strategy;
    getTimeZone(): TimeZone;
    hashCode(): number;
    // private init(arg0: Calendar): void;
    parse(arg0: string): Date;
    parse(arg0: string, arg1: ParsePosition): Date;
    parse(arg0: string, arg1: ParsePosition, arg2: Calendar): boolean;
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    toStringAll(): string;
}