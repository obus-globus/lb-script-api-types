import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AABB } from '../../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class WebTrapPlanner$WebIntentData extends Object {
    constructor(target: LivingEntity, targetBB: AABB)
    readonly target: LivingEntity;
    readonly targetBB: AABB;
}