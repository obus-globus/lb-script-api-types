import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { StartAttacking$StartAttackingCondition } from '../../../../../../net/minecraft/world/entity/ai/behavior/StartAttacking$StartAttackingCondition.d.ts'
import type { StartAttacking$TargetFinder } from '../../../../../../net/minecraft/world/entity/ai/behavior/StartAttacking$TargetFinder.d.ts'
export class StartAttacking extends Object {
    static create(paramcanAttackPredicate: (param0: ServerLevel, param1: Mob | null) => boolean, paramtargetFinderFunction: (param0: ServerLevel, param1: Mob | null) => Optional<LivingEntity>): BehaviorControl<Mob>;
    static create(paramtargetFinderFunction: (param0: ServerLevel, param1: Mob | null) => Optional<LivingEntity>): BehaviorControl<Mob>;
    constructor()
}