import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { PositionTracker } from '../../../../../../net/minecraft/world/entity/ai/behavior/PositionTracker.d.ts'
export class StayCloseToTarget extends Object {
    static create(paramtargetPositionGetter: (param0: LivingEntity) => Optional<PositionTracker>, paramshouldRunPredicate: (param0: LivingEntity) => boolean, paramcloseEnough: number, paramtooFar: number, paramspeedModifier: number): BehaviorControl<LivingEntity>;
    constructor()
}