import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Clock } from '../../java/time/Clock.d.ts'
import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { Month } from '../../java/time/Month.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { DateTimeFormatter } from '../../java/time/format/DateTimeFormatter.d.ts'
import type { Temporal } from '../../java/time/temporal/Temporal.d.ts'
import type { TemporalAccessor } from '../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalAdjuster } from '../../java/time/temporal/TemporalAdjuster.d.ts'
import type { TemporalAmount } from '../../java/time/temporal/TemporalAmount.d.ts'
import type { TemporalField } from '../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../java/time/temporal/TemporalQuery.d.ts'
import type { TemporalUnit } from '../../java/time/temporal/TemporalUnit.d.ts'
import type { ValueRange } from '../../java/time/temporal/ValueRange.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class YearMonth extends Object implements Serializable, Temporal, TemporalAdjuster, Comparable<YearMonth> {
    static from(paramarg0: TemporalAccessor): YearMonth;
    static now(): YearMonth;
    static now(paramarg0: Clock): YearMonth;
    static now(paramarg0: ZoneId): YearMonth;
    static of(paramarg0: number, paramarg1: number): YearMonth;
    static of(paramarg0: number, paramarg1: Month): YearMonth;
    static parse(paramarg0: CharSequence): YearMonth;
    static parse(paramarg0: CharSequence, paramarg1: DateTimeFormatter): YearMonth;
    private constructor(arg0: number, arg1: number)
    readonly month: number;
    readonly year: number;
    adjustInto(arg0: Temporal): Temporal;
    atDay(arg0: number): LocalDate;
    atEndOfMonth(): LocalDate;
    compareTo(arg0: YearMonth): number;
    equals(arg0: Object | null): boolean;
    format(arg0: DateTimeFormatter): string;
    get(arg0: TemporalField): number;
    getLong(arg0: TemporalField): number;
    getMonth(): Month;
    getMonthValue(): number;
    // private getProlepticMonth(): number;
    getYear(): number;
    hashCode(): number;
    isAfter(arg0: YearMonth): boolean;
    isBefore(arg0: YearMonth): boolean;
    isLeapYear(): boolean;
    isSupported(arg0: TemporalField): boolean;
    isSupported(arg0: TemporalUnit): boolean;
    isValidDay(arg0: number): boolean;
    lengthOfMonth(): number;
    lengthOfYear(): number;
    minus(arg0: TemporalAmount): YearMonth;
    minus(arg0: number, arg1: TemporalUnit): YearMonth;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    minusMonths(arg0: number): YearMonth;
    minusYears(arg0: number): YearMonth;
    plus(arg0: TemporalAmount): YearMonth;
    plus(arg0: number, arg1: TemporalUnit): YearMonth;
    plus(arg0: TemporalAmount): Temporal;
    plusMonths(arg0: number): YearMonth;
    plusYears(arg0: number): YearMonth;
    query<R extends Object | number | string | boolean>(arg0: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    until(arg0: Temporal, arg1: TemporalUnit): number;
    with(arg0: (param0: Temporal) => Temporal): YearMonth;
    with(arg0: TemporalField, arg1: number): YearMonth;
    // private with(arg0: number, arg1: number): YearMonth;
    with(arg0: (param0: Temporal) => Temporal): Temporal;
    withMonth(arg0: number): YearMonth;
    withYear(arg0: number): YearMonth;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}