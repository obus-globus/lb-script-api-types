import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
export interface RunningPolicyNoStream extends Object{
    lithium$apply<E extends LivingEntity>(arg0: BehaviorControl<E>[], arg1: ServerLevel, arg2: E, arg3: number): void;
}