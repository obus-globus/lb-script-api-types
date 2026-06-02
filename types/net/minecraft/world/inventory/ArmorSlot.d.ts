import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ArmorSlot extends Slot {
    constructor(inventory: ItemStack[], owner: LivingEntity, slot: EquipmentSlot, slotIndex: number, x: number, y: number, emptyIcon: Identifier)
    // private emptyIcon: Identifier;
    // private owner: LivingEntity;
    // private slot: EquipmentSlot;
    getMaxStackSize(): number;
    getNoItemIcon(): Identifier;
    isActive(): boolean;
    mayPickup(player: Player): boolean;
    mayPlace(itemStack: ItemStack): boolean;
    setByPlayer(itemStack: ItemStack, previous: ItemStack): void;
}