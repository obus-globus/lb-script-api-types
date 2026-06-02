import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export interface FillCommand$Affector extends Object{
    affect(level: ServerLevel, pos: BlockPos): boolean;
}