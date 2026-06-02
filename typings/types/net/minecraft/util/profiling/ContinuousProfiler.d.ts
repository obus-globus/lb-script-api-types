import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { LongSupplier } from '../../../../java/util/function/LongSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfileCollector } from '../../../../net/minecraft/util/profiling/ProfileCollector.d.ts'
import type { ProfileResults } from '../../../../net/minecraft/util/profiling/ProfileResults.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class ContinuousProfiler extends Object {
    constructor(realTime: () => kotlin.Long, tickCount: () => kotlin.Int, suppressWarnings: () => kotlin.Boolean)
    // private profiler: ProfileCollector;
    // private realTime: () => kotlin.Long;
    // private suppressWarnings: () => kotlin.Boolean;
    // private tickCount: () => kotlin.Int;
    disable(): void;
    enable(): void;
    getFiller(): ProfilerFiller;
    getResults(): ProfileResults;
    isEnabled(): boolean;
}