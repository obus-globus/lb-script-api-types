import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InventoryChangeTrigger$TriggerInstance } from '../../../../net/minecraft/advancements/criterion/InventoryChangeTrigger$TriggerInstance.d.ts'
import type { SimpleCriterionTrigger } from '../../../../net/minecraft/advancements/criterion/SimpleCriterionTrigger.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class InventoryChangeTrigger extends SimpleCriterionTrigger<InventoryChangeTrigger$TriggerInstance> {
    constructor()
    codec(): Codec<InventoryChangeTrigger$TriggerInstance>;
    trigger(player: ServerPlayer, inventory: (Object | null)[], changedItem: ItemStack): void;
    // private trigger(player: ServerPlayer, inventory: (Object | null)[], changedItem: ItemStack, slotsFull: number, slotsEmpty: number, slotsOccupied: number): void;
}