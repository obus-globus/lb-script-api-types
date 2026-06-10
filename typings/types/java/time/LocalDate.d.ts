import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Clock } from '../../java/time/Clock.d.ts'
import type { DayOfWeek } from '../../java/time/DayOfWeek.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { LocalDateTime } from '../../java/time/LocalDateTime.d.ts'
import type { LocalTime } from '../../java/time/LocalTime.d.ts'
import type { Month } from '../../java/time/Month.d.ts'
import type { OffsetDateTime } from '../../java/time/OffsetDateTime.d.ts'
import type { OffsetTime } from '../../java/time/OffsetTime.d.ts'
import type { Period } from '../../java/time/Period.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../java/time/ZoneOffset.d.ts'
import type { ZonedDateTime } from '../../java/time/ZonedDateTime.d.ts'
import type { ChronoLocalDate } from '../../java/time/chrono/ChronoLocalDate.d.ts'
import type { ChronoLocalDateTime } from '../../java/time/chrono/ChronoLocalDateTime.d.ts'
import type { Era } from '../../java/time/chrono/Era.d.ts'
import type { IsoChronology } from '../../java/time/chrono/IsoChronology.d.ts'
import type { IsoEra } from '../../java/time/chrono/IsoEra.d.ts'
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
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export class LocalDate extends Object implements Serializable, ChronoLocalDate, Temporal, TemporalAdjuster {
    static EPOCH: LocalDate;
    static MAX: LocalDate;
    static MIN: LocalDate;
    static from(paramarg0: TemporalAccessor): LocalDate;
    static from(paramarg0: TemporalAccessor): ChronoLocalDate;
    static now(): LocalDate;
    static now(paramarg0: Clock): LocalDate;
    static now(paramarg0: ZoneId): LocalDate;
    static of(paramarg0: number, paramarg1: number, paramarg2: number): LocalDate;
    static of(paramarg0: number, paramarg1: Month, paramarg2: number): LocalDate;
    static ofEpochDay(paramarg0: number): LocalDate;
    static ofInstant(paramarg0: Instant, paramarg1: ZoneId): LocalDate;
    static ofYearDay(paramarg0: number, paramarg1: number): LocalDate;
    static parse(paramarg0: CharSequence): LocalDate;
    static parse(paramarg0: CharSequence, paramarg1: DateTimeFormatter): LocalDate;
    static timeLineOrder(): (param0: Object) => boolean;
    private constructor(arg0: number, arg1: number, arg2: number)
    // private day: number;
    readonly month: number;
    readonly year: number;
    adjustInto(arg0: Temporal): Temporal;
    atStartOfDay(): LocalDateTime;
    atStartOfDay(arg0: ZoneId): ZonedDateTime;
    atTime(arg0: LocalTime): LocalDateTime;
    atTime(arg0: OffsetTime): OffsetDateTime;
    atTime(arg0: number, arg1: number): LocalDateTime;
    atTime(arg0: number, arg1: number, arg2: number): LocalDateTime;
    atTime(arg0: number, arg1: number, arg2: number, arg3: number): LocalDateTime;
    atTime(arg0: LocalTime): ChronoLocalDateTime<Object>;
    compareTo(arg0: ChronoLocalDate): number;
    compareTo0(arg0: LocalDate): number;
    datesUntil(arg0: LocalDate): Stream<LocalDate>;
    datesUntil(arg0: LocalDate, arg1: Period): Stream<LocalDate>;
    daysUntil(arg0: LocalDate): number;
    equals(arg0: Object | null): boolean;
    format(arg0: DateTimeFormatter): string;
    get(arg0: TemporalField): number;
    // private get0(arg0: TemporalField): number;
    getChronology(): IsoChronology;
    getDayOfMonth(): number;
    getDayOfWeek(): DayOfWeek;
    getDayOfYear(): number;
    getEra(): IsoEra;
    getEra(): Era;
    getLong(arg0: TemporalField): number;
    getMonth(): Month;
    getMonthValue(): number;
    // private getProlepticMonth(): number;
    getYear(): number;
    hashCode(): number;
    isAfter(arg0: ChronoLocalDate): boolean;
    isBefore(arg0: ChronoLocalDate): boolean;
    isEqual(arg0: ChronoLocalDate): boolean;
    isLeapYear(): boolean;
    isSupported(arg0: TemporalField): boolean;
    isSupported(arg0: TemporalUnit): boolean;
    lengthOfMonth(): number;
    lengthOfYear(): number;
    minus(arg0: TemporalAmount): LocalDate;
    minus(arg0: number, arg1: TemporalUnit): LocalDate;
    minus(arg0: TemporalAmount): ChronoLocalDate;
    minus(arg0: number, arg1: TemporalUnit): ChronoLocalDate;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    minusDays(arg0: number): LocalDate;
    minusMonths(arg0: number): LocalDate;
    minusWeeks(arg0: number): LocalDate;
    minusYears(arg0: number): LocalDate;
    // private monthsUntil(arg0: LocalDate): number;
    plus(arg0: TemporalAmount): LocalDate;
    plus(arg0: number, arg1: TemporalUnit): LocalDate;
    plus(arg0: TemporalAmount): ChronoLocalDate;
    plus(arg0: number, arg1: TemporalUnit): ChronoLocalDate;
    plus(arg0: TemporalAmount): Temporal;
    plusDays(arg0: number): LocalDate;
    plusMonths(arg0: number): LocalDate;
    plusWeeks(arg0: number): LocalDate;
    plusYears(arg0: number): LocalDate;
    query<R extends Object | number | string | boolean>(arg0: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    toEpochDay(): number;
    toEpochSecond(arg0: LocalTime, arg1: ZoneOffset): number;
    toString(): string;
    until(arg0: ChronoLocalDate): Period;
    until(arg0: Temporal, arg1: TemporalUnit): number;
    with(arg0: (param0: Temporal) => Temporal): LocalDate;
    with(arg0: TemporalField, arg1: number): LocalDate;
    with(arg0: (param0: Temporal) => Temporal): ChronoLocalDate;
    with(arg0: TemporalField, arg1: number): ChronoLocalDate;
    with(arg0: (param0: Temporal) => Temporal): Temporal;
    withDayOfMonth(arg0: number): LocalDate;
    withDayOfYear(arg0: number): LocalDate;
    withMonth(arg0: number): LocalDate;
    withYear(arg0: number): LocalDate;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}