import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class SetWalkTargetFromLookTarget extends Object {
    static create(paramspeedModifier: number, paramcloseEnoughDistance: number): OneShot<LivingEntity>;
    static create(paramcanSetWalkTargetPredicate: (param0: LivingEntity) => boolean, paramspeedModifier: (param0: LivingEntity) => number, paramcloseEnoughDistance: number): OneShot<LivingEntity>;
    constructor()
}