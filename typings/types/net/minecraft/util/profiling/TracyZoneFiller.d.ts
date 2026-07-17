import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Zone } from '../../../../com/mojang/jtracy/Zone.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { TracyZoneFiller$PlotAndValue } from '../../../../net/minecraft/util/profiling/TracyZoneFiller$PlotAndValue.d.ts'
import type { Zone as Zone_2 } from '../../../../net/minecraft/util/profiling/Zone.d.ts'
import type { MetricCategory } from '../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
export class TracyZoneFiller extends Object implements ProfilerFiller {
    static ROOT: string;
    constructor()
    // private activeZones: Zone[];
    // private name: string;
    // private plots: JavaMap<string, TracyZoneFiller$PlotAndValue>;
    // private activeZone(): Zone;
    addZoneText(text: string): void;
    addZoneValue(value: number): void;
    endTick(): void;
    incrementCounter(name: () => string): void;
    incrementCounter(name: string): void;
    incrementCounter(name: () => string, amount: number): void;
    incrementCounter(name: string, amount: number): void;
    markForCharting(category: MetricCategory): void;
    pop(): void;
    popPush(name: () => string): void;
    popPush(name: string): void;
    push(name: () => string): void;
    push(name: string): void;
    setZoneColor(color: number): void;
    startTick(): void;
    zone(name: () => string): Zone_2;
    zone(name: string): Zone_2;
}