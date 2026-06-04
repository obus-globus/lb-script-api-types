import type { LocalTime } from '../../../java/time/LocalTime.d.ts'
import type { Period } from '../../../java/time/Period.d.ts'
import type { ZoneId } from '../../../java/time/ZoneId.d.ts'
import type { ChronoLocalDate } from '../../../java/time/chrono/ChronoLocalDate.d.ts'
import type { Chronology } from '../../../java/time/chrono/Chronology.d.ts'
import type { DateTimeFormatterBuilder$DayPeriod } from '../../../java/time/format/DateTimeFormatterBuilder$DayPeriod.d.ts'
import type { ResolverStyle } from '../../../java/time/format/ResolverStyle.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../../java/time/temporal/TemporalQuery.d.ts'
import type { ValueRange } from '../../../java/time/temporal/ValueRange.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Parsed extends Object implements TemporalAccessor {
    constructor()
    // private chrono: Chronology;
    // private date: ChronoLocalDate;
    // private dayPeriod: DateTimeFormatterBuilder$DayPeriod;
    // private excessDays: Period;
    // private fieldValues: Map<TemporalField, number>;
    // private leapSecond: boolean;
    // private resolverStyle: ResolverStyle;
    // private time: LocalTime;
    // private zone: ZoneId;
    // private zoneNameType: number;
    copy(): Parsed;
    // private crossCheck(): void;
    // private crossCheck(arg0: TemporalAccessor): void;
    get(arg0: TemporalField): number;
    getLong(arg0: TemporalField): number;
    isSupported(arg0: TemporalField): boolean;
    query<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    range(arg0: TemporalField): ValueRange;
    resolve(arg0: ResolverStyle, arg1: TemporalField[]): TemporalAccessor;
    // private resolveDateFields(): void;
    // private resolveFields(): void;
    // private resolveFractional(): void;
    // private resolveInstant(): void;
    // private resolveInstantFields(): void;
    // private resolveInstantFields0(arg0: ZoneId): void;
    // private resolvePeriod(): void;
    // private resolveTime(arg0: number, arg1: number, arg2: number, arg3: number): void;
    // private resolveTimeFields(): void;
    // private resolveTimeLenient(): void;
    toString(): string;
    // private updateCheckConflict(arg0: LocalTime, arg1: Period): void;
    // private updateCheckConflict(arg0: ChronoLocalDate): void;
    // private updateCheckConflict(arg0: TemporalField, arg1: TemporalField, arg2: number): void;
}