import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GcHeapStat$Summary extends Record {
    // private allocationRateBytesPerSecond: number;
    // private duration: Duration;
    // private gcTotalDuration: Duration;
    // private totalGCs: number;
    allocationRateBytesPerSecond(): number;
    duration(): Duration;
    equals(o: Object | null): boolean;
    gcOverHead(): number;
    gcTotalDuration(): Duration;
    hashCode(): number;
    toString(): string;
    totalGCs(): number;
}