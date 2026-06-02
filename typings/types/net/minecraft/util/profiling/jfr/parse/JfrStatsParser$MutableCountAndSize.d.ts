import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IoSummary$CountAndSize } from '../../../../../../net/minecraft/util/profiling/jfr/stats/IoSummary$CountAndSize.d.ts'
export class JfrStatsParser$MutableCountAndSize extends Object {
    constructor()
    // private count: number;
    // private totalSize: number;
    increment(bytes: number): void;
    toCountAndSize(): IoSummary$CountAndSize;
}