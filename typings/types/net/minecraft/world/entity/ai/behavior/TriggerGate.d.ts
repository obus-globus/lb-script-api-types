import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { GateBehavior$OrderPolicy } from '../../../../../../net/minecraft/world/entity/ai/behavior/GateBehavior$OrderPolicy.d.ts'
import type { GateBehavior$RunningPolicy } from '../../../../../../net/minecraft/world/entity/ai/behavior/GateBehavior$RunningPolicy.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
import type { Trigger } from '../../../../../../net/minecraft/world/entity/ai/behavior/declarative/Trigger.d.ts'
export class TriggerGate extends Object {
    static triggerGate<E extends LivingEntity>(paramweightedBehaviors: Pair<Trigger<any>, number>[], paramorderPolicy: GateBehavior$OrderPolicy, paramrunningPolicy: GateBehavior$RunningPolicy): OneShot<E>;
    static triggerOneShuffled<E extends LivingEntity>(paramweightedTriggers: Pair<Trigger<any>, number>[]): OneShot<E>;
    constructor()
}