import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { StopAttackingIfTargetInvalid$StopAttackCondition } from '../../../../../../net/minecraft/world/entity/ai/behavior/StopAttackingIfTargetInvalid$StopAttackCondition.d.ts'
import type { StopAttackingIfTargetInvalid$TargetErasedCallback } from '../../../../../../net/minecraft/world/entity/ai/behavior/StopAttackingIfTargetInvalid$TargetErasedCallback.d.ts'
export class StopAttackingIfTargetInvalid extends Object {
    static create(): BehaviorControl<Mob>;
    static create(paramstopAttackingWhen: (param0: ServerLevel, param1: LivingEntity) => boolean): BehaviorControl<Mob>;
    static create(paramstopAttackingWhen: (param0: ServerLevel, param1: LivingEntity) => boolean, paramonTargetErased: (param0: ServerLevel, param1: Mob | null, param2: LivingEntity) => void, paramcanGrowTiredOfTryingToReachTarget: boolean): BehaviorControl<Mob>;
    static create(paramonTargetErased: (param0: ServerLevel, param1: Mob | null, param2: LivingEntity) => void): BehaviorControl<Mob>;
    constructor()
}