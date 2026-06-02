import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Clock } from '../../../java/time/Clock.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../java/time/LocalDate.d.ts'
import type { LocalDateTime } from '../../../java/time/LocalDateTime.d.ts'
import type { Period } from '../../../java/time/Period.d.ts'
import type { ZoneId } from '../../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../../java/time/ZoneOffset.d.ts'
import type { ZonedDateTime } from '../../../java/time/ZonedDateTime.d.ts'
import type { AbstractChronology } from '../../../java/time/chrono/AbstractChronology.d.ts'
import type { Era } from '../../../java/time/chrono/Era.d.ts'
import type { IsoEra } from '../../../java/time/chrono/IsoEra.d.ts'
import type { ResolverStyle } from '../../../java/time/format/ResolverStyle.d.ts'
import type { ChronoField } from '../../../java/time/temporal/ChronoField.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { ValueRange } from '../../../java/time/temporal/ValueRange.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class IsoChronology extends AbstractChronology implements Serializable {
    static INSTANCE: IsoChronology;
    private constructor()
    date(arg0: Era, arg1: number, arg2: number, arg3: number): LocalDate;
    date(arg0: TemporalAccessor): LocalDate;
    date(arg0: number, arg1: number, arg2: number): LocalDate;
    dateEpochDay(arg0: number): LocalDate;
    dateNow(): LocalDate;
    dateNow(arg0: Clock): LocalDate;
    dateNow(arg0: ZoneId): LocalDate;
    dateYearDay(arg0: Era, arg1: number, arg2: number): LocalDate;
    dateYearDay(arg0: number, arg1: number): LocalDate;
    epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ZoneOffset): number;
    eraOf(arg0: number): IsoEra;
    eras(): Era[];
    getCalendarType(): string;
    getId(): string;
    isIsoBased(): boolean;
    isLeapYear(arg0: number): boolean;
    localDateTime(arg0: TemporalAccessor): LocalDateTime;
    // private numberOfDaysOfMonth(arg0: number, arg1: number): number;
    period(arg0: number, arg1: number, arg2: number): Period;
    prolepticYear(arg0: Era, arg1: number): number;
    range(arg0: ChronoField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    resolveDate(arg0: Map<TemporalField, number>, arg1: ResolverStyle): LocalDate;
    resolveProlepticMonth(arg0: Map<TemporalField, number>, arg1: ResolverStyle): void;
    resolveYMD(arg0: Map<TemporalField, number>, arg1: ResolverStyle): LocalDate;
    resolveYearOfEra(arg0: Map<TemporalField, number>, arg1: ResolverStyle): LocalDate;
    writeReplace(): Object;
    zonedDateTime(arg0: Instant, arg1: ZoneId): ZonedDateTime;
    zonedDateTime(arg0: TemporalAccessor): ZonedDateTime;
}