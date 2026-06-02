import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { LevelTickAccess } from '../../../../net/minecraft/world/ticks/LevelTickAccess.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
import type { TickPriority } from '../../../../net/minecraft/world/ticks/TickPriority.d.ts'
export interface ScheduledTickAccess extends Object{
    createTick<T extends Object | number | string | boolean>(pos: BlockPos, type: T, tickDelay: number): ScheduledTick<T>;
    createTick<T extends Object | number | string | boolean>(pos: BlockPos, type: T, tickDelay: number, priority: TickPriority): ScheduledTick<T>;
    getBlockTicks(): LevelTickAccess<Block>;
    getFluidTicks(): LevelTickAccess<Fluid>;
    scheduleTick(pos: BlockPos, type: Block, tickDelay: number): void;
    scheduleTick(pos: BlockPos, type: Block, tickDelay: number, priority: TickPriority): void;
    scheduleTick(pos: BlockPos, type: Fluid, tickDelay: number): void;
    scheduleTick(pos: BlockPos, type: Fluid, tickDelay: number, priority: TickPriority): void;
}