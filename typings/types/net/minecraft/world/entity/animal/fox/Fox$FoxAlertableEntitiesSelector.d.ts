import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TargetingConditions$Selector } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions$Selector.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$FoxAlertableEntitiesSelector extends Object implements TargetingConditions$Selector {
    constructor(null_: Fox)
    test(target: LivingEntity, level: ServerLevel): boolean;
}