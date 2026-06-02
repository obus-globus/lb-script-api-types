import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { LookAtPlayerGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/LookAtPlayerGoal.d.ts'
export class InteractGoal extends LookAtPlayerGoal {
    static DEFAULT_PROBABILITY: number;
    constructor(mob: Mob, lookAtType: Class<LivingEntity>, lookDistance: number)
    constructor(mob: Mob, lookAtType: Class<LivingEntity>, lookDistance: number, probability: number)
}