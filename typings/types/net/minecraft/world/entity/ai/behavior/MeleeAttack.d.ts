import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class MeleeAttack extends Object {
    static create(paramcooldownBetweenAttacks: number): OneShot<Mob>;
    static create(paramcanAttackPredicate: (param0: Mob | null) => boolean, paramcooldownBetweenAttacks: number): OneShot<Mob>;
    constructor()
}