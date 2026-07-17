import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TimedStat } from '../../../../../../net/minecraft/util/profiling/jfr/stats/TimedStat.d.ts'
export class TimedStatSummary<T extends TimedStat> extends Record {
    static summary<T extends TimedStat>(paramvalues: T[]): Optional<TimedStatSummary<T>>;
    constructor(fastest: T, slowest: T, secondSlowest: T, count: number, percentilesNanos: JavaMap<number, number>, totalDuration: Duration)
    // private count: number;
    // private fastest: T;
    // private percentilesNanos: JavaMap<number, number>;
    // private secondSlowest: T;
    // private slowest: T;
    // private totalDuration: Duration;
    count(): number;
    equals(o: Object | null): boolean;
    fastest(): T;
    hashCode(): number;
    percentilesNanos(): JavaMap<number, number>;
    secondSlowest(): T;
    slowest(): T;
    toString(): string;
    totalDuration(): Duration;
}