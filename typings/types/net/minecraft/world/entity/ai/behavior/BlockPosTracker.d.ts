import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PositionTracker } from '../../../../../../net/minecraft/world/entity/ai/behavior/PositionTracker.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockPosTracker extends Object implements PositionTracker {
    constructor(blockPos: BlockPos)
    constructor(vec: Vec3)
    // private blockPos: BlockPos;
    // private centerPosition: Vec3;
    currentBlockPosition(): BlockPos;
    currentPosition(): Vec3;
    isVisibleBy(body: LivingEntity): boolean;
    toString(): string;
}