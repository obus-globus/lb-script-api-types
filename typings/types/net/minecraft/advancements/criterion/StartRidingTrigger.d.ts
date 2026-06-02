import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { StartRidingTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/StartRidingTrigger$TriggerInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class StartRidingTrigger extends SimpleCriterionTrigger<StartRidingTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<StartRidingTrigger$TriggerInstance>;
    trigger(player: ServerPlayer): void;
}