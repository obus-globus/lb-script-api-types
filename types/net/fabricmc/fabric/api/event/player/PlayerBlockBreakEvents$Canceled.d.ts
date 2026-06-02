import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface PlayerBlockBreakEvents$Canceled extends Object{
    onBlockBreakCanceled(arg0: Level, arg1: Player, arg2: BlockPos, arg3: BlockState, arg4: BlockEntity): void;
}