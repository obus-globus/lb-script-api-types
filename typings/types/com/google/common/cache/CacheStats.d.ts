import type { Object } from '../../../../java/lang/Object.d.ts'
export class CacheStats extends Object {
    constructor(hitCount: number, missCount: number, loadSuccessCount: number, loadExceptionCount: number, totalLoadTime: number, evictionCount: number)
    // private evictionCount: number;
    // private hitCount: number;
    // private loadExceptionCount: number;
    // private loadSuccessCount: number;
    // private missCount: number;
    // private totalLoadTime: number;
    averageLoadPenalty(): number;
    equals(object: Object | null): boolean;
    evictionCount(): number;
    hashCode(): number;
    hitCount(): number;
    hitRate(): number;
    loadCount(): number;
    loadExceptionCount(): number;
    loadExceptionRate(): number;
    loadSuccessCount(): number;
    minus(other: CacheStats): CacheStats;
    missCount(): number;
    missRate(): number;
    plus(other: CacheStats): CacheStats;
    requestCount(): number;
    toString(): string;
    totalLoadTime(): number;
}