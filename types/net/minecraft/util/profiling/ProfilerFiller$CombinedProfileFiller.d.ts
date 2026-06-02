import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { Zone } from '../../../../net/minecraft/util/profiling/Zone.d.ts'
import type { MetricCategory } from '../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
export class ProfilerFiller$CombinedProfileFiller extends Object implements ProfilerFiller {
    static ROOT: string;
    static combine(paramfirst: ProfilerFiller, paramsecond: ProfilerFiller): ProfilerFiller;
    constructor(first: ProfilerFiller, second: ProfilerFiller)
    // private first: ProfilerFiller;
    // private second: ProfilerFiller;
    addZoneText(text: string): void;
    addZoneText(text: string): void;
    addZoneValue(value: number): void;
    addZoneValue(value: number): void;
    endTick(): void;
    incrementCounter(name: () => string, amount: number): void;
    incrementCounter(name: string, amount: number): void;
    incrementCounter(name: () => string): void;
    incrementCounter(name: string): void;
    markForCharting(category: MetricCategory): void;
    pop(): void;
    popPush(name: () => string): void;
    popPush(name: string): void;
    push(name: () => string): void;
    push(name: string): void;
    setZoneColor(color: number): void;
    setZoneColor(color: number): void;
    startTick(): void;
    zone(name: () => string): Zone;
    zone(name: string): Zone;
}