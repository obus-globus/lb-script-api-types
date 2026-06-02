import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class MeleeAttack extends Object {
    static create(paramcooldownBetweenAttacks: number): OneShot<Object>;
    static create(paramcanAttackPredicate: (param0: Object | null) => kotlin.Boolean, paramcooldownBetweenAttacks: number): OneShot<Object>;
    constructor()
}