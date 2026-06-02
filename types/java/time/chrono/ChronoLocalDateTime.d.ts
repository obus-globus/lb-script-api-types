import type { Instant } from '../../../java/time/Instant.d.ts'
import type { LocalTime } from '../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../../java/time/ZoneOffset.d.ts'
import type { ChronoLocalDate } from '../../../java/time/chrono/ChronoLocalDate.d.ts'
import type { ChronoZonedDateTime } from '../../../java/time/chrono/ChronoZonedDateTime.d.ts'
import type { Chronology } from '../../../java/time/chrono/Chronology.d.ts'
import type { DateTimeFormatter } from '../../../java/time/format/DateTimeFormatter.d.ts'
import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { TemporalAdjuster } from '../../../java/time/temporal/TemporalAdjuster.d.ts'
import type { TemporalAmount } from '../../../java/time/temporal/TemporalAmount.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../../java/time/temporal/TemporalQuery.d.ts'
import type { TemporalUnit } from '../../../java/time/temporal/TemporalUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export interface ChronoLocalDateTime<D extends ChronoLocalDate> extends Temporal, TemporalAdjuster, Object, Comparable<ChronoLocalDateTime<Object>>{
    adjustInto(arg0: Temporal): Temporal;
    atZone(arg0: ZoneId): ChronoZonedDateTime<D>;
    compareTo(arg0: ChronoLocalDateTime<Object>): number;
    format(arg0: DateTimeFormatter): string;
    getChronology(): Chronology;
    isAfter(arg0: ChronoLocalDateTime<Object>): boolean;
    isBefore(arg0: ChronoLocalDateTime<Object>): boolean;
    isEqual(arg0: ChronoLocalDateTime<Object>): boolean;
    isSupported(arg0: TemporalField): boolean;
    isSupported(arg0: TemporalUnit): boolean;
    minus(arg0: TemporalAmount): ChronoLocalDateTime<D>;
    minus(arg0: number, arg1: TemporalUnit): ChronoLocalDateTime<D>;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    plus(arg0: TemporalAmount): ChronoLocalDateTime<D>;
    plus(arg0: number, arg1: TemporalUnit): ChronoLocalDateTime<D>;
    plus(arg0: TemporalAmount): Temporal;
    query<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    toEpochSecond(arg0: ZoneOffset): number;
    toInstant(arg0: ZoneOffset): Instant;
    toLocalDate(): D;
    toLocalTime(): LocalTime;
    with(arg0: (param0: Temporal) => java.time.temporal.Temporal): ChronoLocalDateTime<D>;
    with(arg0: TemporalField, arg1: number): ChronoLocalDateTime<D>;
    with(arg0: (param0: Temporal) => java.time.temporal.Temporal): Temporal;
}