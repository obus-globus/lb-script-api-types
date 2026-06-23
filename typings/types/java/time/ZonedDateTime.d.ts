import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Clock } from '../../java/time/Clock.d.ts'
import type { DayOfWeek } from '../../java/time/DayOfWeek.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { LocalDateTime } from '../../java/time/LocalDateTime.d.ts'
import type { LocalTime } from '../../java/time/LocalTime.d.ts'
import type { Month } from '../../java/time/Month.d.ts'
import type { OffsetDateTime } from '../../java/time/OffsetDateTime.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../java/time/ZoneOffset.d.ts'
import type { ChronoZonedDateTime } from '../../java/time/chrono/ChronoZonedDateTime.d.ts'
import type { Chronology } from '../../java/time/chrono/Chronology.d.ts'
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
export class ZonedDateTime extends Object implements Serializable, ChronoZonedDateTime<LocalDate>, Temporal {
    static from(paramarg0: TemporalAccessor): ZonedDateTime;
    static from(paramarg0: TemporalAccessor): ChronoZonedDateTime<any>;
    static now(): ZonedDateTime;
    static now(paramarg0: Clock): ZonedDateTime;
    static now(paramarg0: ZoneId): ZonedDateTime;
    static of(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: ZoneId): ZonedDateTime;
    static of(paramarg0: LocalDate, paramarg1: LocalTime, paramarg2: ZoneId): ZonedDateTime;
    static of(paramarg0: LocalDateTime, paramarg1: ZoneId): ZonedDateTime;
    static ofInstant(paramarg0: Instant, paramarg1: ZoneId): ZonedDateTime;
    static ofInstant(paramarg0: LocalDateTime, paramarg1: ZoneOffset, paramarg2: ZoneId): ZonedDateTime;
    static ofLocal(paramarg0: LocalDateTime, paramarg1: ZoneId, paramarg2: ZoneOffset): ZonedDateTime;
    static ofStrict(paramarg0: LocalDateTime, paramarg1: ZoneOffset, paramarg2: ZoneId): ZonedDateTime;
    static parse(paramarg0: CharSequence): ZonedDateTime;
    static parse(paramarg0: CharSequence, paramarg1: DateTimeFormatter): ZonedDateTime;
    static timeLineOrder(): (param0: Object) => boolean;
    private constructor(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneId)
    // private dateTime: LocalDateTime;
    readonly offset: ZoneOffset;
    readonly zone: ZoneId;
    compareTo(arg0: ChronoZonedDateTime<any>): number;
    equals(arg0: Object | null): boolean;
    format(arg0: DateTimeFormatter): string;
    get(arg0: TemporalField): number;
    getChronology(): Chronology;
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
    getZone(): ZoneId;
    hashCode(): number;
    isAfter(arg0: ChronoZonedDateTime<any>): boolean;
    isBefore(arg0: ChronoZonedDateTime<any>): boolean;
    isEqual(arg0: ChronoZonedDateTime<any>): boolean;
    isSupported(arg0: TemporalField): boolean;
    isSupported(arg0: TemporalUnit): boolean;
    minus(arg0: TemporalAmount): ZonedDateTime;
    minus(arg0: number, arg1: TemporalUnit): ZonedDateTime;
    minus(arg0: TemporalAmount): ChronoZonedDateTime<LocalDate>;
    minus(arg0: number, arg1: TemporalUnit): ChronoZonedDateTime<LocalDate>;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    minusDays(arg0: number): ZonedDateTime;
    minusHours(arg0: number): ZonedDateTime;
    minusMinutes(arg0: number): ZonedDateTime;
    minusMonths(arg0: number): ZonedDateTime;
    minusNanos(arg0: number): ZonedDateTime;
    minusSeconds(arg0: number): ZonedDateTime;
    minusWeeks(arg0: number): ZonedDateTime;
    minusYears(arg0: number): ZonedDateTime;
    plus(arg0: TemporalAmount): ZonedDateTime;
    plus(arg0: number, arg1: TemporalUnit): ZonedDateTime;
    plus(arg0: TemporalAmount): ChronoZonedDateTime<LocalDate>;
    plus(arg0: TemporalAmount): Temporal;
    plusDays(arg0: number): ZonedDateTime;
    plusHours(arg0: number): ZonedDateTime;
    plusMinutes(arg0: number): ZonedDateTime;
    plusMonths(arg0: number): ZonedDateTime;
    plusNanos(arg0: number): ZonedDateTime;
    plusSeconds(arg0: number): ZonedDateTime;
    plusWeeks(arg0: number): ZonedDateTime;
    plusYears(arg0: number): ZonedDateTime;
    query<R extends Object | number | string | boolean>(arg0: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    // private resolveInstant(arg0: LocalDateTime): ZonedDateTime;
    // private resolveLocal(arg0: LocalDateTime): ZonedDateTime;
    // private resolveOffset(arg0: ZoneOffset): ZonedDateTime;
    toEpochSecond(): number;
    toInstant(): Instant;
    toLocalDate(): LocalDate;
    toLocalDateTime(): LocalDateTime;
    toLocalTime(): LocalTime;
    toOffsetDateTime(): OffsetDateTime;
    toString(): string;
    truncatedTo(arg0: TemporalUnit): ZonedDateTime;
    until(arg0: Temporal, arg1: TemporalUnit): number;
    with(arg0: (param0: Temporal) => Temporal): ZonedDateTime;
    with(arg0: TemporalField, arg1: number): ZonedDateTime;
    with(arg0: (param0: Temporal) => Temporal): ChronoZonedDateTime<LocalDate>;
    with(arg0: (param0: Temporal) => Temporal): Temporal;
    withDayOfMonth(arg0: number): ZonedDateTime;
    withDayOfYear(arg0: number): ZonedDateTime;
    withEarlierOffsetAtOverlap(): ZonedDateTime;
    withFixedOffsetZone(): ZonedDateTime;
    withHour(arg0: number): ZonedDateTime;
    withLaterOffsetAtOverlap(): ZonedDateTime;
    withMinute(arg0: number): ZonedDateTime;
    withMonth(arg0: number): ZonedDateTime;
    withNano(arg0: number): ZonedDateTime;
    withSecond(arg0: number): ZonedDateTime;
    withYear(arg0: number): ZonedDateTime;
    withZoneSameInstant(arg0: ZoneId): ZonedDateTime;
    withZoneSameLocal(arg0: ZoneId): ZonedDateTime;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}