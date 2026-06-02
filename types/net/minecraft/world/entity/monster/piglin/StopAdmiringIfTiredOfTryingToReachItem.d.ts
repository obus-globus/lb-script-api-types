import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
export class StopAdmiringIfTiredOfTryingToReachItem extends Object {
    static create(parammaxTimeToReachItem: number, paramdisableTime: number): BehaviorControl<LivingEntity>;
    constructor()
}