import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
export interface TickAccess<T extends Object | number | string | boolean> extends Object{
    count(): number;
    hasScheduledTick(pos: BlockPos, type: T): boolean;
    schedule(tick: ScheduledTick<T>): void;
}