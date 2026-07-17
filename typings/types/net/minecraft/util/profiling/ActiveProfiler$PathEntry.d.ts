import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfilerPathEntry } from '../../../../net/minecraft/util/profiling/ProfilerPathEntry.d.ts'
export class ActiveProfiler$PathEntry extends Object implements ProfilerPathEntry {
    constructor()
    // private accumulatedDuration: number;
    readonly count: number;
    readonly counters: JavaMap<any, any>;
    readonly maxDuration: number;
    // private minDuration: number;
    getCount(): number;
    getCounters(): JavaMap<any, any>;
    getDuration(): number;
    getMaxDuration(): number;
}