import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelTickAccess } from '../../../../net/minecraft/world/ticks/LevelTickAccess.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
import type { TickContainerAccess } from '../../../../net/minecraft/world/ticks/TickContainerAccess.d.ts'
export class WorldGenTickAccess<T extends unknown> extends Object implements LevelTickAccess<T> {
    constructor(containerGetter: (param0: BlockPos) => TickContainerAccess<T>)
    // private containerGetter: (param0: BlockPos) => TickContainerAccess<T>;
    count(): number;
    hasScheduledTick(pos: BlockPos, type: T): boolean;
    schedule(tick: ScheduledTick<T>): void;
    willTickThisTick(pos: BlockPos, type: T): boolean;
}