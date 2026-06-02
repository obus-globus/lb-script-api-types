import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { RemoteSlot } from '../../../../net/minecraft/world/inventory/RemoteSlot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ContainerSynchronizer extends Object{
    createSlot(): RemoteSlot;
    sendCarriedChange(container: AbstractContainerMenu, itemStack: ItemStack): void;
    sendDataChange(container: AbstractContainerMenu, id: number, value: number): void;
    sendInitialData(container: AbstractContainerMenu, slotItems: ItemStack[], carried: ItemStack, dataSlots: number[]): void;
    sendSlotChange(container: AbstractContainerMenu, slotIndex: number, itemStack: ItemStack): void;
}