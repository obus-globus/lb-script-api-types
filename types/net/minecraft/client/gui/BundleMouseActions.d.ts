import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ScrollWheelHandler } from '../../../../net/minecraft/client/ScrollWheelHandler.d.ts'
import type { ItemSlotMouseAction } from '../../../../net/minecraft/client/gui/ItemSlotMouseAction.d.ts'
import type { ContainerInput } from '../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class BundleMouseActions extends Object implements ItemSlotMouseAction {
    constructor(minecraft: Minecraft)
    // private minecraft: Minecraft;
    // private scrollWheelHandler: ScrollWheelHandler;
    matches(slot: Slot): boolean;
    onMouseScrolled(scrollX: number, scrollY: number, slotIndex: number, itemStack: ItemStack): boolean;
    onSlotClicked(slot: Slot, containerInput: ContainerInput): void;
    onStopHovering(hoveredSlot: Slot): void;
    // private toggleSelectedBundleItem(bundleItem: ItemStack, slotIndex: number, selectedItem: number): void;
    unselectedBundleItem(bundleItem: ItemStack, slotIndex: number): void;
}