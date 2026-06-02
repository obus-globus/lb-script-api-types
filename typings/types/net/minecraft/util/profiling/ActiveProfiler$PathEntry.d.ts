import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfilerPathEntry } from '../../../../net/minecraft/util/profiling/ProfilerPathEntry.d.ts'
export class ActiveProfiler$PathEntry extends Object implements ProfilerPathEntry {
    constructor()
    // private accumulatedDuration: number;
    readonly count: number;
    readonly counters: Object2LongOpenHashMap<string>;
    readonly maxDuration: number;
    // private minDuration: number;
    getCount(): number;
    getCounters(): Object2LongMap<string>;
    getDuration(): number;
    getMaxDuration(): number;
}