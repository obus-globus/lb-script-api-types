import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EventResult } from '../../../../../../../net/fabricmc/fabric/api/util/EventResult.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export interface EntitySleepEvents$AllowNearbyMonsters extends Object{
    allowNearbyMonsters(arg0: Player, arg1: BlockPos, arg2: boolean): EventResult;
}