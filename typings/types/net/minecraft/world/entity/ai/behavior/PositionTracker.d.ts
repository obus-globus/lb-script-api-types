import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface PositionTracker extends Object{
    currentBlockPosition(): BlockPos;
    currentPosition(): Vec3;
    isVisibleBy(body: LivingEntity): boolean;
}