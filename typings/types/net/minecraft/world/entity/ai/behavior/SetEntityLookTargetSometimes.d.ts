import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { UniformInt } from '../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
export class SetEntityLookTargetSometimes extends Object {
    static create(parammaxDist: number, paraminterval: UniformInt): BehaviorControl<LivingEntity>;
    static create(paramtype: EntityType<Object>, parammaxDist: number, paraminterval: UniformInt): BehaviorControl<LivingEntity>;
    constructor()
}