import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PositionTracker } from '../../../../../../net/minecraft/world/entity/ai/behavior/PositionTracker.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityTracker extends Object implements PositionTracker {
    constructor(entity: Entity, trackEyeHeight: boolean)
    constructor(entity: Entity, trackEyeHeight: boolean, targetEyeHeight: boolean)
    readonly entity: Entity;
    // private targetEyeHeight: boolean;
    // private trackEyeHeight: boolean;
    currentBlockPosition(): BlockPos;
    currentPosition(): Vec3;
    getEntity(): Entity;
    isVisibleBy(body: LivingEntity): boolean;
    toString(): string;
}