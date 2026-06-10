import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { ItemDurabilityTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/ItemDurabilityTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemDurabilityTrigger extends SimpleCriterionTrigger<ItemDurabilityTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<ItemDurabilityTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, matcher: (param0: ItemDurabilityTrigger$TriggerInstance) => boolean): void;
    trigger(player: ServerPlayer, itemStack: ItemStack, newDurability: number): void;
}