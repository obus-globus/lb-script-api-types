import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { StartAttacking$StartAttackingCondition } from '../../../../../../net/minecraft/world/entity/ai/behavior/StartAttacking$StartAttackingCondition.d.ts'
import type { StartAttacking$TargetFinder } from '../../../../../../net/minecraft/world/entity/ai/behavior/StartAttacking$TargetFinder.d.ts'
export class StartAttacking extends Object {
    static create(paramcanAttackPredicate: (param0: Object | null, param1: ServerLevel) => kotlin.Boolean, paramtargetFinderFunction: (param0: Object | null, param1: ServerLevel) => java.util.Optional<unknown>): BehaviorControl<Object>;
    static create(paramtargetFinderFunction: (param0: Object | null, param1: ServerLevel) => java.util.Optional<unknown>): BehaviorControl<Object>;
    constructor()
}