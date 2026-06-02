import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class PrepareRamNearestTarget$RamCandidate extends Object {
    constructor(startPosition: BlockPos, targetPosition: BlockPos, target: LivingEntity)
    readonly startPosition: BlockPos;
    readonly target: LivingEntity;
    readonly targetPosition: BlockPos;
    getStartPosition(): BlockPos;
    getTarget(): LivingEntity;
    getTargetPosition(): BlockPos;
}