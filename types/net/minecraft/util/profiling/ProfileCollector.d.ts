import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ActiveProfiler$PathEntry } from '../../../../net/minecraft/util/profiling/ActiveProfiler$PathEntry.d.ts'
import type { ProfileResults } from '../../../../net/minecraft/util/profiling/ProfileResults.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { Zone } from '../../../../net/minecraft/util/profiling/Zone.d.ts'
import type { MetricCategory } from '../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
import type { Pair } from '../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export interface ProfileCollector extends Object, ProfilerFiller{
    addZoneText(text: string): void;
    addZoneValue(value: number): void;
    getChartedPaths(): Pair<string, MetricCategory>[];
    getEntry(path: string): ActiveProfiler$PathEntry;
    getResults(): ProfileResults;
    incrementCounter(name: () => string): void;
    incrementCounter(name: string): void;
    setZoneColor(color: number): void;
    zone(name: () => string): Zone;
    zone(name: string): Zone;
}