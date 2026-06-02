import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface EntitySleepEvents$StartSleeping extends Object{
    onStartSleeping(arg0: LivingEntity, arg1: BlockPos): void;
}