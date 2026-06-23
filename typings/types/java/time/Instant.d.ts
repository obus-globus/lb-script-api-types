import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Clock } from '../../java/time/Clock.d.ts'
import type { Duration } from '../../java/time/Duration.d.ts'
import type { OffsetDateTime } from '../../java/time/OffsetDateTime.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../java/time/ZoneOffset.d.ts'
import type { ZonedDateTime } from '../../java/time/ZonedDateTime.d.ts'
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
export class Instant extends Object implements Serializable, Temporal, TemporalAdjuster, Comparable<Instant> {
    static EPOCH: Instant;
    static MAX: Instant;
    static MIN: Instant;
    static from(paramarg0: TemporalAccessor): Instant;
    static now(): Instant;
    static now(paramarg0: Clock): Instant;
    static ofEpochMilli(paramarg0: number): Instant;
    static ofEpochSecond(paramarg0: number): Instant;
    static ofEpochSecond(paramarg0: number, paramarg1: number): Instant;
    static parse(paramarg0: CharSequence): Instant;
    private constructor(arg0: number, arg1: number)
    // private nanos: number;
    // private seconds: number;
    adjustInto(arg0: Temporal): Temporal;
    atOffset(arg0: ZoneOffset): OffsetDateTime;
    atZone(arg0: ZoneId): ZonedDateTime;
    compareTo(arg0: Instant): number;
    equals(arg0: Object | null): boolean;
    get(arg0: TemporalField): number;
    getEpochSecond(): number;
    getLong(arg0: TemporalField): number;
    getNano(): number;
    hashCode(): number;
    isAfter(arg0: Instant): boolean;
    isBefore(arg0: Instant): boolean;
    isSupported(arg0: TemporalField): boolean;
    isSupported(arg0: TemporalUnit): boolean;
    // private microsUntil(arg0: Instant): number;
    // private millisUntil(arg0: Instant): number;
    minus(arg0: TemporalAmount): Instant;
    minus(arg0: number, arg1: TemporalUnit): Instant;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    minusMillis(arg0: number): Instant;
    minusNanos(arg0: number): Instant;
    minusSeconds(arg0: number): Instant;
    // private nanosUntil(arg0: Instant): number;
    plus(arg0: TemporalAmount): Instant;
    plus(arg0: number, arg1: TemporalUnit): Instant;
    // private plus(arg0: number, arg1: number): Instant;
    plus(arg0: TemporalAmount): Temporal;
    plusMillis(arg0: number): Instant;
    plusNanos(arg0: number): Instant;
    plusSeconds(arg0: number): Instant;
    query<R extends unknown>(arg0: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
    // private readObject(arg0: ObjectInputStream): void;
    // private secondsUntil(arg0: Instant): number;
    toEpochMilli(): number;
    toString(): string;
    truncatedTo(arg0: TemporalUnit): Instant;
    until(arg0: Instant): Duration;
    until(arg0: Temporal, arg1: TemporalUnit): number;
    with(arg0: (param0: Temporal) => Temporal): Instant;
    with(arg0: TemporalField, arg1: number): Instant;
    with(arg0: (param0: Temporal) => Temporal): Temporal;
    writeExternal(arg0: DataOutput): void;
    // private writeReplace(): Object;
}