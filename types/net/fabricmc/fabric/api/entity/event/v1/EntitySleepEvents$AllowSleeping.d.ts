import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Player$BedSleepingProblem } from '../../../../../../../net/minecraft/world/entity/player/Player$BedSleepingProblem.d.ts'
export interface EntitySleepEvents$AllowSleeping extends Object{
    allowSleep(arg0: Player, arg1: BlockPos): Player$BedSleepingProblem;
}