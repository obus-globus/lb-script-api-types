import type { AbstractCache$StatsCounter } from '../../../../com/google/common/cache/AbstractCache$StatsCounter.d.ts'
import type { CacheStats } from '../../../../com/google/common/cache/CacheStats.d.ts'
import type { LongAddable } from '../../../../com/google/common/cache/LongAddable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AbstractCache$SimpleStatsCounter extends Object implements AbstractCache$StatsCounter {
    constructor()
    // private evictionCount: LongAddable;
    // private hitCount: LongAddable;
    // private loadExceptionCount: LongAddable;
    // private loadSuccessCount: LongAddable;
    // private missCount: LongAddable;
    // private totalLoadTime: LongAddable;
    incrementBy(other: AbstractCache$StatsCounter): void;
    recordEviction(): void;
    recordHits(count: number): void;
    recordLoadException(loadTime: number): void;
    recordLoadSuccess(loadTime: number): void;
    recordMisses(count: number): void;
    snapshot(): CacheStats;
}