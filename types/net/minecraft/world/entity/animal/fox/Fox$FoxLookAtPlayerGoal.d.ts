import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { LookAtPlayerGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/LookAtPlayerGoal.d.ts'
export class Fox$FoxLookAtPlayerGoal extends LookAtPlayerGoal {
    static DEFAULT_PROBABILITY: number;
    constructor(null_: Fox$FoxLookAtPlayerGoal, lookAtType: Class<LivingEntity>, lookDistance: number)
    canContinueToUse(): boolean;
    canUse(): boolean;
}