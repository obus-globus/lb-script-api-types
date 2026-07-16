import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class MeleeAttack extends Object {
    static create<T extends Mob>(paramcooldownBetweenAttacks: number): OneShot<T>;
    static create<T extends Mob>(paramcanAttackPredicate: (param0: T) => boolean, paramcooldownBetweenAttacks: number): OneShot<T>;
    constructor()
}