import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ConsumeItemTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/ConsumeItemTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ConsumeItemTrigger extends SimpleCriterionTrigger<ConsumeItemTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<ConsumeItemTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, itemStack: ItemStack): void;
}