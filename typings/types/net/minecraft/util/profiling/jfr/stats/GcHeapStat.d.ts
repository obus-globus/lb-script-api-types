import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { RecordedEvent } from '../../../../../../jdk/jfr/consumer/RecordedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GcHeapStat$Summary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/GcHeapStat$Summary.d.ts'
import type { GcHeapStat$Timing } from '../../../../../../net/minecraft/util/profiling/jfr/stats/GcHeapStat$Timing.d.ts'
export class GcHeapStat extends Record {
    static from(paramevent: RecordedEvent): GcHeapStat;
    static summary(paramrecordingDuration: Duration, paramheapStats: GcHeapStat[], paramgcTotalDuration: Duration, paramtotalGCs: number): GcHeapStat$Summary;
    constructor(timestamp: Instant, heapUsed: number, timing: GcHeapStat$Timing)
    // private heapUsed: number;
    // private timestamp: Instant;
    // private timing: GcHeapStat$Timing;
    equals(o: Object | null): boolean;
    hashCode(): number;
    heapUsed(): number;
    timestamp(): Instant;
    timing(): GcHeapStat$Timing;
    toString(): string;
}