import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { BrewedPotionTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/BrewedPotionTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Potion } from '../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
export class BrewedPotionTrigger extends SimpleCriterionTrigger<BrewedPotionTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<BrewedPotionTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: BrewedPotionTrigger$TriggerInstance) => kotlin.Boolean): void;
    trigger(player: ServerPlayer, potion: Holder<Potion>): void;
}