import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TargetingConditions$Selector } from '../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions$Selector.d.ts'
import type { Guardian } from '../../../../../net/minecraft/world/entity/monster/Guardian.d.ts'
export class Guardian$GuardianAttackSelector extends Object implements TargetingConditions$Selector {
    constructor(guardian: Guardian)
    // private guardian: Guardian;
    test(target: LivingEntity, level: ServerLevel): boolean;
}