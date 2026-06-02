import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ActiveProfiler$PathEntry } from '../../../../net/minecraft/util/profiling/ActiveProfiler$PathEntry.d.ts'
import type { ProfileCollector } from '../../../../net/minecraft/util/profiling/ProfileCollector.d.ts'
import type { ProfileResults } from '../../../../net/minecraft/util/profiling/ProfileResults.d.ts'
import type { Zone } from '../../../../net/minecraft/util/profiling/Zone.d.ts'
import type { MetricCategory } from '../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
import type { Pair } from '../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class InactiveProfiler extends Object implements ProfileCollector {
    static INSTANCE: InactiveProfiler;
    static ROOT: string;
    private constructor()
    endTick(): void;
    getChartedPaths(): Pair<string, MetricCategory>[];
    getEntry(path: string): ActiveProfiler$PathEntry;
    getResults(): ProfileResults;
    incrementCounter(name: () => string, amount: number): void;
    incrementCounter(name: string, amount: number): void;
    markForCharting(category: MetricCategory): void;
    pop(): void;
    popPush(name: () => string): void;
    popPush(name: string): void;
    push(name: () => string): void;
    push(name: string): void;
    startTick(): void;
    zone(name: () => string): Zone;
    zone(name: string): Zone;
}