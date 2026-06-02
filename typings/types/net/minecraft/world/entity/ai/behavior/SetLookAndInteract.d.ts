import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
export class SetLookAndInteract extends Object {
    static create(paramtype: EntityType<Object>, paraminteractionRange: number): BehaviorControl<LivingEntity>;
    constructor()
}