import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Clock } from '../../java/time/Clock.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { LocalDateTime } from '../../java/time/LocalDateTime.d.ts'
import type { OffsetTime } from '../../java/time/OffsetTime.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../java/time/ZoneOffset.d.ts'
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
export class LocalTime extends Object implements Serializable, Temporal, TemporalAdjuster, Comparable<LocalTime> {
    static MAX: LocalTime;
    static MIDNIGHT: LocalTime;
    static MIN: LocalTime;
    static NOON: LocalTime;
    static from(paramarg0: TemporalAccessor): LocalTime;
    static now(): LocalTime;
    static now(paramarg0: Clock): LocalTime;
    static now(paramarg0: ZoneId): LocalTime;
    static of(paramarg0: number, paramarg1: number): LocalTime;
    static of(paramarg0: number, paramarg1: number, paramarg2: number): LocalTime;
    static of(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): LocalTime;
    static ofInstant(paramarg0: Instant, paramarg1: ZoneId): LocalTime;
    static ofNanoOfDay(paramarg0: number): LocalTime;
    static ofSecondOfDay(paramarg0: number): LocalTime;
    static parse(paramarg0: CharSequence): LocalTime;
    static parse(paramarg0: CharSequence, paramarg1: DateTimeFormatter): LocalTime;
    private constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly hour: number;
    readonly minute: number;
    readonly nano: number;
    readonly second: number;
    adjustInto(arg0: Temporal): Temporal;
    atDate(arg0: LocalDate): LocalDateTime;
    atOffset(arg0: ZoneOffset): OffsetTime;
    compareTo(arg0: LocalTime): number;
    equals(arg0: Object | null): boolean;
    format(arg0: DateTimeFormatter): string;
    get(arg0: TemporalField): number;
    // private get0(arg0: TemporalField): number;
    getHour(): number;
    getLong(arg0: TemporalField): number;
    getMinute(): number;
    getNano(): number;
    getSecond(): number;
    hashCode(): number;
    isAfter(arg0: LocalTime): boolean;
    isBefore(arg0: LocalTime): boolean;
    isSupported(arg0: TemporalField): boolean;
    isSupported(arg0: TemporalUnit): boolean;
    minus(arg0: TemporalAmount): LocalTime;
    minus(arg0: number, arg1: TemporalUnit): LocalTime;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    minusHours(arg0: number): LocalTime;
    minusMinutes(arg0: number): LocalTime;
    minusNanos(arg0: number): LocalTime;
    minusSeconds(arg0: number): LocalTime;
    plus(arg0: TemporalAmount): LocalTime;
    plus(arg0: number, arg1: TemporalUnit): LocalTime;
    plus(arg0: TemporalAmount): Temporal;
    plusHours(arg0: number): LocalTime;
    plusMinutes(arg0: number): LocalTime;
    plusNanos(arg0: number): LocalTime;
    plusSeconds(arg0: number): LocalTime;
    query<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    range(arg0: TemporalField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    toEpochSecond(arg0: LocalDate, arg1: ZoneOffset): number;
    toNanoOfDay(): number;
    toSecondOfDay(): number;
    toString(): string;
    truncatedTo(arg0: TemporalUnit): LocalTime;
    until(arg0: Temporal, arg1: TemporalUnit): number;
    with(arg0: (param0: Temporal) => java.time.temporal.Temporal): LocalTime;
    with(arg0: TemporalField, arg1: number): LocalTime;
    with(arg0: (param0: Temporal) => java.time.temporal.Temporal): Temporal;
    withHour(arg0: number): LocalTime;
    withMinute(arg0: number): LocalTime;
    withNano(arg0: number): LocalTime;
    withSecond(arg0: number): LocalTime;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}