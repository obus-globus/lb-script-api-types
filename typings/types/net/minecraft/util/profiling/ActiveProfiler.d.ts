import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { LongSupplier } from '../../../../java/util/function/LongSupplier.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ActiveProfiler$PathEntry } from '../../../../net/minecraft/util/profiling/ActiveProfiler$PathEntry.d.ts'
import type { ProfileCollector } from '../../../../net/minecraft/util/profiling/ProfileCollector.d.ts'
import type { ProfileResults } from '../../../../net/minecraft/util/profiling/ProfileResults.d.ts'
import type { MetricCategory } from '../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
export class ActiveProfiler extends Object implements ProfileCollector {
    static ROOT: string;
    constructor(getRealTime: () => number, getTickTime: () => number, suppressWarnings: () => boolean)
    readonly chartedPaths: Pair<string, MetricCategory>[];
    // private currentEntry: ActiveProfiler$PathEntry;
    // private entries: { [key: string]: ActiveProfiler$PathEntry };
    // private getRealTime: () => number;
    // private getTickTime: () => number;
    // private path: string;
    // private paths: string[];
    // private startTimeNano: number;
    // private startTimeTicks: number;
    // private startTimes: (Object | null)[];
    // private started: boolean;
    // private suppressWarnings: () => boolean;
    endTick(): void;
    getChartedPaths(): Pair<string, MetricCategory>[];
    // private getCurrentEntry(): ActiveProfiler$PathEntry;
    getEntry(path: string): ActiveProfiler$PathEntry;
    getResults(): ProfileResults;
    incrementCounter(name: () => string): void;
    incrementCounter(name: () => string, amount: number): void;
    incrementCounter(name: string): void;
    incrementCounter(name: string, amount: number): void;
    markForCharting(category: MetricCategory): void;
    pop(): void;
    popPush(name: () => string): void;
    popPush(name: string): void;
    push(name: () => string): void;
    push(name: string): void;
    startTick(): void;
}