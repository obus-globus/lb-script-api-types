import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { RecordedEvent } from '../../../../../../jdk/jfr/consumer/RecordedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TickTimeStat extends Record {
    static from(paramevent: RecordedEvent): TickTimeStat;
    constructor(timestamp: Instant, currentAverage: Duration)
    // private currentAverage: Duration;
    // private timestamp: Instant;
    currentAverage(): Duration;
    equals(o: Object | null): boolean;
    hashCode(): number;
    timestamp(): Instant;
    toString(): string;
}