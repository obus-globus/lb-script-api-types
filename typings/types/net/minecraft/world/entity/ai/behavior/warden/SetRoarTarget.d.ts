import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { Warden } from '../../../../../../../net/minecraft/world/entity/monster/warden/Warden.d.ts'
export class SetRoarTarget extends Object {
    static create(paramtargetFinderFunction: (param0: Warden | null) => Optional<LivingEntity>): BehaviorControl<Warden>;
    constructor()
}