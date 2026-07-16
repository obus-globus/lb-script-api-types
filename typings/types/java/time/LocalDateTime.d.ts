import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Clock } from '../../java/time/Clock.d.ts'
import type { DayOfWeek } from '../../java/time/DayOfWeek.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../java/time/LocalTime.d.ts'
import type { Month } from '../../java/time/Month.d.ts'
import type { OffsetDateTime } from '../../java/time/OffsetDateTime.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../java/time/ZoneOffset.d.ts'
import type { ZonedDateTime } from '../../java/time/ZonedDateTime.d.ts'
import type { ChronoLocalDateTime } from '../../java/time/chrono/ChronoLocalDateTime.d.ts'
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
export class LocalDateTime extends Object implements Serializable, ChronoLocalDateTime<LocalDate>, Temporal, TemporalAdjuster {
    static MAX: LocalDateTime;
    static MIN: LocalDateTime;
    static from(paramarg0: TemporalAccessor): LocalDateTime;
    static from(paramarg0: TemporalAccessor): ChronoLocalDateTime<any>;
    static now(): LocalDateTime;
    static now(paramarg0: Clock): LocalDateTime;
    static now(paramarg0: ZoneId): LocalDateTime;
    static of(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): LocalDateTime;
    static of(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): LocalDateTime;
    static of(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): LocalDateTime;
    static of(paramarg0: number, paramarg1: Month, paramarg2: number, paramarg3: number, paramarg4: number): LocalDateTime;
    static of(paramarg0: number, paramarg1: Month, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): LocalDateTime;
    static of(paramarg0: number, paramarg1: Month, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): LocalDateTime;
    static of(paramarg0: LocalDate, paramarg1: LocalTime): LocalDateTime;
    static ofEpochSecond(paramarg0: number, paramarg1: number, paramarg2: ZoneOffset): LocalDateTime;
    static ofInstant(paramarg0: Instant, paramarg1: ZoneId): LocalDateTime;
    static parse(paramarg0: CharSequence): LocalDateTime;
    static parse(paramarg0: CharSequence, paramarg1: DateTimeFormatter): LocalDateTime;
    static timeLineOrder(): (param0: ChronoLocalDateTime<any>, param1: ChronoLocalDateTime<any>) => number;
    private constructor(arg0: LocalDate, arg1: LocalTime)
    // private date: LocalDate;
    // private time: LocalTime;
    adjustInto(arg0: Temporal): Temporal;
    atOffset(arg0: ZoneOffset): OffsetDateTime;
    atZone(arg0: ZoneId): ZonedDateTime;
    compareTo(arg0: ChronoLocalDateTime<any>): number;
    // private compareTo0(arg0: LocalDateTime): number;
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
    getSecond(): number;
    getYear(): number;
    hashCode(): number;
    isAfter(arg0: ChronoLocalDateTime<any>): boolean;
    isBefore(arg0: ChronoLocalDateTime<any>): boolean;
    isEqual(arg0: ChronoLocalDateTime<any>): boolean;
    isSupported(arg0: TemporalField): boolean;
    isSupported(arg0: TemporalUnit): boolean;
    minus(arg0: TemporalAmount): LocalDateTime;
    minus(arg0: number, arg1: TemporalUnit): LocalDateTime;
    minus(arg0: TemporalAmount): ChronoLocalDateTime<LocalDate>;
    minus(arg0: number, arg1: TemporalUnit): ChronoLocalDateTime<LocalDate>;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    minusDays(arg0: number): LocalDateTime;
    minusHours(arg0: number): LocalDateTime;
    minusMinutes(arg0: number): LocalDateTime;
    minusMonths(arg0: number): LocalDateTime;
    minusNanos(arg0: number): LocalDateTime;
    minusSeconds(arg0: number): LocalDateTime;
    minusWeeks(arg0: number): LocalDateTime;
    minusYears(arg0: number): LocalDateTime;
    plus(arg0: TemporalAmount): LocalDateTime;
    plus(arg0: number, arg1: TemporalUnit): LocalDateTime;
    plus(arg0: TemporalAmount): ChronoLocalDateTime<LocalDate>;
    plus(arg0: TemporalAmount): Temporal;
    plusDays(arg0: number): LocalDateTime;
    plusHours(arg0: number): LocalDateTime;
    plusMinutes(arg0: number): LocalDateTime;
    plusMonths(arg0: number): LocalDateTime;
    plusNanos(arg0: number): LocalDateTime;
    plusSeconds(arg0: number): LocalDateTime;
    plusWeeks(arg0: number): LocalDateTime;
    // private plusWithOverflow(arg0: LocalDate, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): LocalDateTime;
    plusYears(arg0: number): LocalDateTime;
    query<R extends unknown>(arg0: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    toEpochSecond(arg0: ZoneOffset): number;
    toInstant(arg0: ZoneOffset): Instant;
    toLocalDate(): LocalDate;
    toLocalTime(): LocalTime;
    toString(): string;
    truncatedTo(arg0: TemporalUnit): LocalDateTime;
    until(arg0: Temporal, arg1: TemporalUnit): number;
    // private with(arg0: LocalDate, arg1: LocalTime): LocalDateTime;
    with(arg0: (param0: Temporal) => Temporal): LocalDateTime;
    with(arg0: TemporalField, arg1: number): LocalDateTime;
    with(arg0: (param0: Temporal) => Temporal): ChronoLocalDateTime<LocalDate>;
    with(arg0: (param0: Temporal) => Temporal): Temporal;
    withDayOfMonth(arg0: number): LocalDateTime;
    withDayOfYear(arg0: number): LocalDateTime;
    withHour(arg0: number): LocalDateTime;
    withMinute(arg0: number): LocalDateTime;
    withMonth(arg0: number): LocalDateTime;
    withNano(arg0: number): LocalDateTime;
    withSecond(arg0: number): LocalDateTime;
    withYear(arg0: number): LocalDateTime;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}