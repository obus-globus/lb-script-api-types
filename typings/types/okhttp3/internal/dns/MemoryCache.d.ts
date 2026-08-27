import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ComparableTimeMark } from '../../../kotlin/time/ComparableTimeMark.d.ts'
import type { TimeSource$WithComparableMarks } from '../../../kotlin/time/TimeSource$WithComparableMarks.d.ts'
export abstract class MemoryCache<K extends unknown, V extends unknown> extends Object {
    constructor(timeSource: TimeSource$WithComparableMarks, maxSize: number)
    // private entries: JavaMap<K, V>;
    readonly maxSize: number;
    readonly size: number;
    readonly timeSource: TimeSource$WithComparableMarks;
    computeIfAbsent(key: K, computeValue: () => V): V;
    evict(count: number): void;
    evictAll(): void;
    protected lastRequestedAt(now: ComparableTimeMark, value: V): ComparableTimeMark | null;
}