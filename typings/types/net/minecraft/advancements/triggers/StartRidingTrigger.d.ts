import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger.d.ts'
import type { StartRidingTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/StartRidingTrigger$TriggerInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class StartRidingTrigger extends SimpleCriterionTrigger<StartRidingTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<StartRidingTrigger$TriggerInstance>;
    trigger(player: ServerPlayer): void;
    trigger(player: ServerPlayer, matcher: (param0: StartRidingTrigger$TriggerInstance) => boolean): void;
}