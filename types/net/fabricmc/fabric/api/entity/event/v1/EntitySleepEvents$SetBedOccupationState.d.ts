import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface EntitySleepEvents$SetBedOccupationState extends Object{
    setBedOccupationState(arg0: LivingEntity, arg1: BlockPos, arg2: BlockState, arg3: boolean): boolean;
}