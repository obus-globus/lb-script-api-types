import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface EntitySleepEvents$ModifySleepingDirection extends Object{
    modifySleepDirection(arg0: LivingEntity, arg1: BlockPos, arg2: Direction): Direction;
}