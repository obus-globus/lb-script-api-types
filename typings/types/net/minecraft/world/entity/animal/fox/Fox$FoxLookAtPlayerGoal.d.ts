import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { LookAtPlayerGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/LookAtPlayerGoal.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$FoxLookAtPlayerGoal extends LookAtPlayerGoal {
    static DEFAULT_PROBABILITY: number;
    constructor(null_: Fox, mob: Mob, lookAtType: Class<LivingEntity>, lookDistance: number)
    canContinueToUse(): boolean;
    canUse(): boolean;
}