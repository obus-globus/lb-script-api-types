import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContainerInput } from '../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ItemSlotMouseAction extends Object{
    matches(slot: Slot): boolean;
    onMouseScrolled(scrollX: number, scrollY: number, slotIndex: number, itemStack: ItemStack): boolean;
    onSlotClicked(slot: Slot, containerInput: ContainerInput): void;
    onStopHovering(hoveredSlot: Slot): void;
}