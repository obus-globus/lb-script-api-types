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
import type { TemporalField } from '../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../java/time/temporal/TemporalQuery.d.ts'
import type { ValueRange } from '../../java/time/temporal/ValueRange.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class MonthDay extends Object implements Serializable, TemporalAccessor, TemporalAdjuster, Comparable<MonthDay> {
    static from(paramarg0: TemporalAccessor): MonthDay;
    static now(): MonthDay;
    static now(paramarg0: Clock): MonthDay;
    static now(paramarg0: ZoneId): MonthDay;
    static of(paramarg0: number, paramarg1: number): MonthDay;
    static of(paramarg0: Month, paramarg1: number): MonthDay;
    static parse(paramarg0: CharSequence): MonthDay;
    static parse(paramarg0: CharSequence, paramarg1: DateTimeFormatter): MonthDay;
    private constructor(arg0: number, arg1: number)
    // private day: number;
    readonly month: number;
    adjustInto(arg0: Temporal): Temporal;
    atYear(arg0: number): LocalDate;
    compareTo(arg0: MonthDay): number;
    equals(arg0: Object | null): boolean;
    format(arg0: DateTimeFormatter): string;
    get(arg0: TemporalField): number;
    getDayOfMonth(): number;
    getLong(arg0: TemporalField): number;
    getMonth(): Month;
    getMonthValue(): number;
    hashCode(): number;
    isAfter(arg0: MonthDay): boolean;
    isBefore(arg0: MonthDay): boolean;
    isSupported(arg0: TemporalField): boolean;
    isValidYear(arg0: number): boolean;
    query<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    range(arg0: TemporalField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    with(arg0: Month): MonthDay;
    withDayOfMonth(arg0: number): MonthDay;
    withMonth(arg0: number): MonthDay;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}