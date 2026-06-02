import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export interface EntitySleepEvents$AllowSettingSpawn extends Object{
    allowSettingSpawn(arg0: Player, arg1: BlockPos): boolean;
}