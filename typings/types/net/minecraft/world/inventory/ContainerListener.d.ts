import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ContainerListener extends Object{
    dataChanged(container: AbstractContainerMenu, id: number, value: number): void;
    slotChanged(container: AbstractContainerMenu, slotIndex: number, itemStack: ItemStack): void;
}