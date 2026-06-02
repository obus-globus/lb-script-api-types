import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Clock } from '../../java/time/Clock.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../java/time/LocalTime.d.ts'
import type { OffsetDateTime } from '../../java/time/OffsetDateTime.d.ts'
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
export class OffsetTime extends Object implements Serializable, Temporal, TemporalAdjuster, Comparable<OffsetTime> {
    static MAX: OffsetTime;
    static MIN: OffsetTime;
    static from(paramarg0: TemporalAccessor): OffsetTime;
    static now(): OffsetTime;
    static now(paramarg0: Clock): OffsetTime;
    static now(paramarg0: ZoneId): OffsetTime;
    static of(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ZoneOffset): OffsetTime;
    static of(paramarg0: LocalTime, paramarg1: ZoneOffset): OffsetTime;
    static ofInstant(paramarg0: Instant, paramarg1: ZoneId): OffsetTime;
    static parse(paramarg0: CharSequence): OffsetTime;
    static parse(paramarg0: CharSequence, paramarg1: DateTimeFormatter): OffsetTime;
    private constructor(arg0: LocalTime, arg1: ZoneOffset)
    readonly offset: ZoneOffset;
    // private time: LocalTime;
    adjustInto(arg0: Temporal): Temporal;
    atDate(arg0: LocalDate): OffsetDateTime;
    compareTo(arg0: OffsetTime): number;
    equals(arg0: Object | null): boolean;
    format(arg0: DateTimeFormatter): string;
    get(arg0: TemporalField): number;
    getHour(): number;
    getLong(arg0: TemporalField): number;
    getMinute(): number;
    getNano(): number;
    getOffset(): ZoneOffset;
    getSecond(): number;
    hashCode(): number;
    isAfter(arg0: OffsetTime): boolean;
    isBefore(arg0: OffsetTime): boolean;
    isEqual(arg0: OffsetTime): boolean;
    isSupported(arg0: TemporalField): boolean;
    isSupported(arg0: TemporalUnit): boolean;
    minus(arg0: TemporalAmount): OffsetTime;
    minus(arg0: number, arg1: TemporalUnit): OffsetTime;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    minusHours(arg0: number): OffsetTime;
    minusMinutes(arg0: number): OffsetTime;
    minusNanos(arg0: number): OffsetTime;
    minusSeconds(arg0: number): OffsetTime;
    plus(arg0: TemporalAmount): OffsetTime;
    plus(arg0: number, arg1: TemporalUnit): OffsetTime;
    plus(arg0: TemporalAmount): Temporal;
    plusHours(arg0: number): OffsetTime;
    plusMinutes(arg0: number): OffsetTime;
    plusNanos(arg0: number): OffsetTime;
    plusSeconds(arg0: number): OffsetTime;
    query<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    range(arg0: TemporalField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    // private toEpochNano(): number;
    toEpochSecond(arg0: LocalDate): number;
    toLocalTime(): LocalTime;
    toString(): string;
    truncatedTo(arg0: TemporalUnit): OffsetTime;
    until(arg0: Temporal, arg1: TemporalUnit): number;
    // private with(arg0: LocalTime, arg1: ZoneOffset): OffsetTime;
    with(arg0: (param0: Temporal) => java.time.temporal.Temporal): OffsetTime;
    with(arg0: TemporalField, arg1: number): OffsetTime;
    with(arg0: (param0: Temporal) => java.time.temporal.Temporal): Temporal;
    withHour(arg0: number): OffsetTime;
    withMinute(arg0: number): OffsetTime;
    withNano(arg0: number): OffsetTime;
    withOffsetSameInstant(arg0: ZoneOffset): OffsetTime;
    withOffsetSameLocal(arg0: ZoneOffset): OffsetTime;
    withSecond(arg0: number): OffsetTime;
    writeExternal(arg0: ObjectOutput): void;
    // private writeReplace(): Object;
}