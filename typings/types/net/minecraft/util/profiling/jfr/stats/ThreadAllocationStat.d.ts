import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { RecordedEvent } from '../../../../../../jdk/jfr/consumer/RecordedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ThreadAllocationStat$Summary } from '../../../../../../net/minecraft/util/profiling/jfr/stats/ThreadAllocationStat$Summary.d.ts'
import type { Logger } from '../../../../../../org/slf4j/Logger.d.ts'
export class ThreadAllocationStat extends Record {
    static LOGGER: Logger;
    static from(paramevent: RecordedEvent): ThreadAllocationStat;
    static summary(paramstats: ThreadAllocationStat[]): ThreadAllocationStat$Summary;
    constructor(timestamp: Instant, threadName: string, totalBytes: number)
    // private threadName: string;
    // private timestamp: Instant;
    // private totalBytes: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    threadName(): string;
    timestamp(): Instant;
    toString(): string;
    totalBytes(): number;
}