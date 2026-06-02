import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { TickAccess } from '../../../../net/minecraft/world/ticks/TickAccess.d.ts'
export interface LevelTickAccess<T extends Object | number | string | boolean> extends Object, TickAccess<T>{
    willTickThisTick(pos: BlockPos, type: T): boolean;
}