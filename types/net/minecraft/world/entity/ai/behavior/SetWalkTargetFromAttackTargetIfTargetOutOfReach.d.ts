import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
export class SetWalkTargetFromAttackTargetIfTargetOutOfReach extends Object {
    static create(paramspeedModifier: number): BehaviorControl<Mob>;
    static create(paramspeedModifier: (param0: LivingEntity) => number): BehaviorControl<Mob>;
    constructor()
}