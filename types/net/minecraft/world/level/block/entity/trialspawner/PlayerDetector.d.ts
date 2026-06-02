import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { PlayerDetector$EntitySelector } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/PlayerDetector$EntitySelector.d.ts'
export interface PlayerDetector extends Object{
    detect(level: ServerLevel, selector: PlayerDetector$EntitySelector, spawnerPos: BlockPos, requiredPlayerRange: number, requireLineOfSight: boolean): UUID[];
}