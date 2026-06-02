import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { Piglin } from '../../../../../../net/minecraft/world/entity/monster/piglin/Piglin.d.ts'
export class StopAdmiringIfItemTooFarAway<E extends Piglin> extends Object {
    static create(parammaxDistanceToItem: number): BehaviorControl<LivingEntity>;
    constructor()
}