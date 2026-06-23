import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { TemporalAccessor } from '../../../../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalField } from '../../../../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../../../../../java/time/temporal/TemporalQuery.d.ts'
import type { ValueRange } from '../../../../../../java/time/temporal/ValueRange.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Instant } from '../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { Clock } from '../../../../../../org/apache/logging/log4j/core/util/Clock.d.ts'
export class MutableInstant extends Object implements Serializable, TemporalAccessor, Instant {
    static instantToMillisAndNanos(paramepochSecond: number, paramnano: number, paramresult: number[]): void;
    constructor()
    readonly epochSecond: number;
    readonly nanoOfSecond: number;
    equals(object: Object | null): boolean;
    formatTo(buffer: StringBuilder): void;
    get(arg0: TemporalField): number;
    get(field: TemporalField): number;
    getEpochMillisecond(): number;
    getEpochSecond(): number;
    getLong(field: TemporalField): number;
    getNanoOfMillisecond(): number;
    getNanoOfSecond(): number;
    hashCode(): number;
    initFrom(other: Instant): void;
    initFrom(clock: Clock): void;
    initFromEpochMilli(epochMilli: number, nanoOfMillisecond: number): void;
    initFromEpochSecond(epochSecond: number, nano: number): void;
    isSupported(field: TemporalField): boolean;
    query<R extends unknown>(arg0: (param0: TemporalAccessor) => R): R;
    query<R extends unknown>(query: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
    range(field: TemporalField): ValueRange;
    toString(): string;
    // private validateNanoOfMillisecond(nanoOfMillisecond: number): void;
    // private validateNanoOfSecond(nano: number): void;
}