import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { StopAttackingIfTargetInvalid$StopAttackCondition } from '../../../../../../net/minecraft/world/entity/ai/behavior/StopAttackingIfTargetInvalid$StopAttackCondition.d.ts'
import type { StopAttackingIfTargetInvalid$TargetErasedCallback } from '../../../../../../net/minecraft/world/entity/ai/behavior/StopAttackingIfTargetInvalid$TargetErasedCallback.d.ts'
export class StopAttackingIfTargetInvalid extends Object {
    static create(): BehaviorControl<Object>;
    static create(paramstopAttackingWhen: (param0: ServerLevel, param1: LivingEntity) => kotlin.Boolean): BehaviorControl<Object>;
    static create(paramstopAttackingWhen: (param0: ServerLevel, param1: LivingEntity) => kotlin.Boolean, paramonTargetErased: (param0: Object | null, param1: ServerLevel, param2: Object | null) => void, paramcanGrowTiredOfTryingToReachTarget: boolean): BehaviorControl<Object>;
    static create(paramonTargetErased: (param0: Object | null, param1: ServerLevel, param2: Object | null) => void): BehaviorControl<Object>;
    constructor()
}