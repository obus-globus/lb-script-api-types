import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { EnchantedItemTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/triggers/EnchantedItemTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/triggers/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class EnchantedItemTrigger extends SimpleCriterionTrigger<EnchantedItemTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<EnchantedItemTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: EnchantedItemTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, itemStack: ItemStack, levels: number): void;
}