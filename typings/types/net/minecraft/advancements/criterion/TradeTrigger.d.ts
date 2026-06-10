import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { TradeTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/TradeTrigger$TriggerInstance.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { AbstractVillager } from '../../../../net/minecraft/world/entity/npc/villager/AbstractVillager.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TradeTrigger extends SimpleCriterionTrigger<TradeTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<TradeTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: TradeTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, villager: AbstractVillager, itemStack: ItemStack): void;
}