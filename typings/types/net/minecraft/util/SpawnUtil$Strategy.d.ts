import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockState } from '../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface SpawnUtil$Strategy extends Object{
    canSpawnOn(level: ServerLevel, pos: BlockPos, blockState: BlockState, abovePos: BlockPos, aboveState: BlockState): boolean;
}