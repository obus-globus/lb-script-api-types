import type { Instant } from '../../../java/time/Instant.d.ts'
import type { LocalTime } from '../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../../java/time/ZoneOffset.d.ts'
import type { ChronoLocalDate } from '../../../java/time/chrono/ChronoLocalDate.d.ts'
import type { ChronoLocalDateTime } from '../../../java/time/chrono/ChronoLocalDateTime.d.ts'
import type { Chronology } from '../../../java/time/chrono/Chronology.d.ts'
import type { DateTimeFormatter } from '../../../java/time/format/DateTimeFormatter.d.ts'
import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalAdjuster } from '../../../java/time/temporal/TemporalAdjuster.d.ts'
import type { TemporalAmount } from '../../../java/time/temporal/TemporalAmount.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../../java/time/temporal/TemporalQuery.d.ts'
import type { TemporalUnit } from '../../../java/time/temporal/TemporalUnit.d.ts'
import type { ValueRange } from '../../../java/time/temporal/ValueRange.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export interface ChronoZonedDateTime<D extends ChronoLocalDate> extends Temporal, Object, Comparable<ChronoZonedDateTime<Object>> {
    compareTo(arg0: ChronoZonedDateTime<Object>): number;
    format(arg0: DateTimeFormatter): string;
    get(arg0: TemporalField): number;
    getChronology(): Chronology;
    getLong(arg0: TemporalField): number;
    getOffset(): ZoneOffset;
    getZone(): ZoneId;
    isAfter(arg0: ChronoZonedDateTime<Object>): boolean;
    isBefore(arg0: ChronoZonedDateTime<Object>): boolean;
    isEqual(arg0: ChronoZonedDateTime<Object>): boolean;
    isSupported(arg0: TemporalField): boolean;
    isSupported(arg0: TemporalUnit): boolean;
    minus(arg0: TemporalAmount): ChronoZonedDateTime<D>;
    minus(arg0: number, arg1: TemporalUnit): ChronoZonedDateTime<D>;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    plus(arg0: TemporalAmount): ChronoZonedDateTime<D>;
    plus(arg0: number, arg1: TemporalUnit): ChronoZonedDateTime<D>;
    plus(arg0: TemporalAmount): Temporal;
    query<R extends Object | number | string | boolean>(arg0: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
    toEpochSecond(): number;
    toInstant(): Instant;
    toLocalDate(): D;
    toLocalDateTime(): ChronoLocalDateTime<D>;
    toLocalTime(): LocalTime;
    with(arg0: (param0: Temporal) => Temporal): ChronoZonedDateTime<D>;
    with(arg0: TemporalField, arg1: number): ChronoZonedDateTime<D>;
    with(arg0: (param0: Temporal) => Temporal): Temporal;
    withEarlierOffsetAtOverlap(): ChronoZonedDateTime<D>;
    withLaterOffsetAtOverlap(): ChronoZonedDateTime<D>;
    withZoneSameInstant(arg0: ZoneId): ChronoZonedDateTime<D>;
    withZoneSameLocal(arg0: ZoneId): ChronoZonedDateTime<D>;
}