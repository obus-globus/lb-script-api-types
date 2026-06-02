import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GateBehavior$OrderPolicy } from '../../../../../../net/minecraft/world/entity/ai/behavior/GateBehavior$OrderPolicy.d.ts'
import type { GateBehavior$RunningPolicy } from '../../../../../../net/minecraft/world/entity/ai/behavior/GateBehavior$RunningPolicy.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class TriggerGate extends Object {
    static triggerGate(paramweightedBehaviors: (Object | null)[], paramorderPolicy: GateBehavior$OrderPolicy, paramrunningPolicy: GateBehavior$RunningPolicy): OneShot<Object>;
    static triggerOneShuffled(paramweightedTriggers: (Object | null)[]): OneShot<Object>;
    constructor()
}