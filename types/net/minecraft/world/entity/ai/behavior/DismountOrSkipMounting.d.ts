import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
export class DismountOrSkipMounting extends Object {
    static create(parammaxWalkDistToRideTarget: number, paramdontRideIf: (param0: Object | null, param1: Entity) => kotlin.Boolean): BehaviorControl<Object>;
    constructor()
}