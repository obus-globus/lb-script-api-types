import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
export class GoToWantedItem extends Object {
    static create<E extends LivingEntity>(parampredicate: (param0: E) => boolean, paramspeedModifier: number, paraminterruptOngoingWalk: boolean, parammaxDistToWalk: number): BehaviorControl<E>;
    static create(paramspeedModifier: number, paraminterruptOngoingWalk: boolean, parammaxDistToWalk: number): BehaviorControl<LivingEntity>;
    constructor()
}