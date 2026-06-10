import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Clock } from '../../java/time/Clock.d.ts'
import type { DayOfWeek } from '../../java/time/DayOfWeek.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { LocalDateTime } from '../../java/time/LocalDateTime.d.ts'
import type { LocalTime } from '../../java/time/LocalTime.d.ts'
import type { Month } from '../../java/time/Month.d.ts'
import type { OffsetTime } from '../../java/time/OffsetTime.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../java/time/ZoneOffset.d.ts'
import type { ZonedDateTime } from '../../java/time/ZonedDateTime.d.ts'
import type { DateTimeFormatter } from '../../java/time/format/DateTimeFormatter.d.ts'
import type { Temporal } from '../../java/time/temporal/Temporal.d.ts'
import type { TemporalAccessor } from '../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalAdjuster } from '../../java/time/temporal/TemporalAdjuster.d.ts'
import type { TemporalAmount } from '../../java/time/temporal/TemporalAmount.d.ts'
import type { TemporalField } from '../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../java/time/temporal/TemporalQuery.d.ts'
import type { TemporalUnit } from '../../java/time/temporal/TemporalUnit.d.ts'
import type { ValueRange } from '../../java/time/temporal/ValueRange.d.ts'
import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class OffsetDateTime extends Object implements Serializable, Temporal, TemporalAdjuster, Comparable<OffsetDateTime> {
    static MAX: OffsetDateTime;
    static MIN: OffsetDateTime;
    static from(paramarg0: TemporalAccessor): OffsetDateTime;
    static now(): OffsetDateTime;
    static now(paramarg0: Clock): OffsetDateTime;
    static now(paramarg0: ZoneId): OffsetDateTime;
    static of(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: ZoneOffset): OffsetDateTime;
    static of(paramarg0: LocalDate, paramarg1: LocalTime, paramarg2: ZoneOffset): OffsetDateTime;
    static of(paramarg0: LocalDateTime, paramarg1: ZoneOffset): OffsetDateTime;
    static ofInstant(paramarg0: Instant, paramarg1: ZoneId): OffsetDateTime;
    static parse(paramarg0: CharSequence): OffsetDateTime;
    static parse(paramarg0: CharSequence, paramarg1: DateTimeFormatter): OffsetDateTime;
    static timeLineOrder(): (param0: Object) => boolean;
    private constructor(arg0: LocalDateTime, arg1: ZoneOffset)
    // private dateTime: LocalDateTime;
    readonly offset: ZoneOffset;
    adjustInto(arg0: Temporal): Temporal;
    atZoneSameInstant(arg0: ZoneId): ZonedDateTime;
    atZoneSimilarLocal(arg0: ZoneId): ZonedDateTime;
    compareTo(arg0: OffsetDateTime): number;
    equals(arg0: Object | null): boolean;
    format(arg0: DateTimeFormatter): string;
    get(arg0: TemporalField): number;
    getDayOfMonth(): number;
    getDayOfWeek(): DayOfWeek;
    getDayOfYear(): number;
    getHour(): number;
    getLong(arg0: TemporalField): number;
    getMinute(): number;
    getMonth(): Month;
    getMonthValue(): number;
    getNano(): number;
    getOffset(): ZoneOffset;
    getSecond(): number;
    getYear(): number;
    hashCode(): number;
    isAfter(arg0: OffsetDateTime): boolean;
    isBefore(arg0: OffsetDateTime): boolean;
    isEqual(arg0: OffsetDateTime): boolean;
    isSupported(arg0: TemporalField): boolean;
    isSupported(arg0: TemporalUnit): boolean;
    minus(arg0: TemporalAmount): OffsetDateTime;
    minus(arg0: number, arg1: TemporalUnit): OffsetDateTime;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    minusDays(arg0: number): OffsetDateTime;
    minusHours(arg0: number): OffsetDateTime;
    minusMinutes(arg0: number): OffsetDateTime;
    minusMonths(arg0: number): OffsetDateTime;
    minusNanos(arg0: number): OffsetDateTime;
    minusSeconds(arg0: number): OffsetDateTime;
    minusWeeks(arg0: number): OffsetDateTime;
    minusYears(arg0: number): OffsetDateTime;
    plus(arg0: TemporalAmount): OffsetDateTime;
    plus(arg0: number, arg1: TemporalUnit): OffsetDateTime;
    plus(arg0: TemporalAmount): Temporal;
    plusDays(arg0: number): OffsetDateTime;
    plusHours(arg0: number): OffsetDateTime;
    plusMinutes(arg0: number): OffsetDateTime;
    plusMonths(arg0: number): OffsetDateTime;
    plusNanos(arg0: number): OffsetDateTime;
    plusSeconds(arg0: number): OffsetDateTime;
    plusWeeks(arg0: number): OffsetDateTime;
    plusYears(arg0: number): OffsetDateTime;
    query<R extends Object | number | string | boolean>(arg0: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    toEpochSecond(): number;
    toInstant(): Instant;
    toLocalDate(): LocalDate;
    toLocalDateTime(): LocalDateTime;
    toLocalTime(): LocalTime;
    toOffsetTime(): OffsetTime;
    toString(): string;
    toZonedDateTime(): ZonedDateTime;
    truncatedTo(arg0: TemporalUnit): OffsetDateTime;
    until(arg0: Temporal, arg1: TemporalUnit): number;
    // private with(arg0: LocalDateTime, arg1: ZoneOffset): OffsetDateTime;
    with(arg0: (param0: Temporal) => Temporal): OffsetDateTime;
    with(arg0: TemporalField, arg1: number): OffsetDateTime;
    with(arg0: (param0: Temporal) => Temporal): Temporal;
    withDayOfMonth(arg0: number): OffsetDateTime;
    withDayOfYear(arg0: number): OffsetDateTime;
    withHour(arg0: number): OffsetDateTime;
    withMinute(arg0: number): OffsetDateTime;
    withMonth(arg0: number): OffsetDateTime;
    withNano(arg0: number): OffsetDateTime;
    withOffsetSameInstant(arg0: ZoneOffset): OffsetDateTime;
    withOffsetSameLocal(arg0: ZoneOffset): OffsetDateTime;
    withSecond(arg0: number): OffsetDateTime;
    withYear(arg0: number): OffsetDateTime;
    writeExternal(arg0: ObjectOutput): void;
    // private writeReplace(): Object;
}