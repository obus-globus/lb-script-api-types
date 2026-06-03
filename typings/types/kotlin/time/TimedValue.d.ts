import type { Object } from '../../java/lang/Object.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
export class TimedValue<T extends Object | number | string | boolean> extends Object {
    constructor(value: T, duration: Duration)
    // private duration: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getDuration-UwyO8pc(): Duration;
    readonly value: T;
    component1(): T;
    component2(): Duration;
    copy(value: T, duration: Duration): TimedValue<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}