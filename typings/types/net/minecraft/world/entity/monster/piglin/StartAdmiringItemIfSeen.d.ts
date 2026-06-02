import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
export class StartAdmiringItemIfSeen extends Object {
    static create(paramadmireDuration: number): BehaviorControl<LivingEntity>;
    constructor()
}