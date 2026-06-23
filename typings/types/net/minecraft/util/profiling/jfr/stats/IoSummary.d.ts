import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IoSummary$CountAndSize } from '../../../../../../net/minecraft/util/profiling/jfr/stats/IoSummary$CountAndSize.d.ts'
export class IoSummary<T extends unknown> extends Object {
    constructor(recordingDuration: Duration, packetStats: Pair<T, IoSummary$CountAndSize>[])
    // private largestSizeContributors: Pair<T, IoSummary$CountAndSize>[];
    // private recordingDuration: Duration;
    // private totalCountAndSize: IoSummary$CountAndSize;
    getCountsPerSecond(): number;
    getSizePerSecond(): number;
    getTotalCount(): number;
    getTotalSize(): number;
    largestSizeContributors(): Pair<T, IoSummary$CountAndSize>[];
}