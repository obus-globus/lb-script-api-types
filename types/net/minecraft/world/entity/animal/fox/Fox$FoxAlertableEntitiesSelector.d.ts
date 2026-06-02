import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TargetingConditions$Selector } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions$Selector.d.ts'
export class Fox$FoxAlertableEntitiesSelector extends Object implements TargetingConditions$Selector {
    constructor(null_: Fox$FoxAlertableEntitiesSelector)
    test(target: LivingEntity, level: ServerLevel): boolean;
}