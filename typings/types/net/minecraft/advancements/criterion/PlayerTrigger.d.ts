import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { PlayerTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/PlayerTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class PlayerTrigger extends SimpleCriterionTrigger<PlayerTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<PlayerTrigger$TriggerInstance>;
    trigger(player: ServerPlayer): void;
    trigger(player: ServerPlayer, matcher: (param0: PlayerTrigger$TriggerInstance) => kotlin.Boolean): void;
}