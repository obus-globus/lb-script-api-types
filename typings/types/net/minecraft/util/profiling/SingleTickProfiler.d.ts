import type { File } from '../../../../java/io/File.d.ts'
import type { LongSupplier } from '../../../../java/util/function/LongSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfileCollector } from '../../../../net/minecraft/util/profiling/ProfileCollector.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class SingleTickProfiler extends Object {
    static createTickProfiler(paramname: string): SingleTickProfiler;
    static decorateFiller(paramfiller: ProfilerFiller, paramtickProfiler: SingleTickProfiler): ProfilerFiller;
    constructor(realTime: () => number, location: string, saveThresholdNs: number)
    // private location: File;
    // private profiler: ProfileCollector;
    // private realTime: () => number;
    // private saveThreshold: number;
    // private tick: number;
    endTick(): void;
    startTick(): ProfilerFiller;
}