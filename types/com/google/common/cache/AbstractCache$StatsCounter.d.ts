import type { CacheStats } from '../../../../com/google/common/cache/CacheStats.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AbstractCache$StatsCounter extends Object{
    recordEviction(): void;
    recordHits(count: number): void;
    recordLoadException(loadTime: number): void;
    recordLoadSuccess(loadTime: number): void;
    recordMisses(count: number): void;
    snapshot(): CacheStats;
}