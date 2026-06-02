import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractContainerMenu } from '../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ContainerListener } from '../../../../../../net/minecraft/world/inventory/ContainerListener.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CreativeInventoryListener extends Object implements ContainerListener {
    constructor(minecraft: Minecraft)
    // private minecraft: Minecraft;
    dataChanged(container: AbstractContainerMenu, id: number, value: number): void;
    slotChanged(container: AbstractContainerMenu, slotIndex: number, itemStack: ItemStack): void;
}