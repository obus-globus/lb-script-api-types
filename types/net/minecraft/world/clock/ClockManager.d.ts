import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
export interface ClockManager extends Object{
    getTotalTicks(definition: Holder<WorldClock>): number;
}