import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
export class StartCelebratingIfTargetDead extends Object {
    static create(paramcelebrateDuration: number, paramdancePredicate: (param0: LivingEntity, param1: LivingEntity) => kotlin.Boolean): BehaviorControl<LivingEntity>;
    constructor()
}