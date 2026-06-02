import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ContainerInput } from '../../../../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
import type { Slot } from '../../../../../../../net/minecraft/world/inventory/Slot.d.ts'
export interface MouseClick extends Object{
    invoke(callbackSlot: Slot | null, slotId: number, mouseButton: number, actionType: ContainerInput): void;
}