import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SlotAccess } from '../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { SlotCollection } from '../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
export interface SlotProvider extends Object{
    getSlot(slot: number): SlotAccess;
    getSlotsFromRange(slots: (Object | null)[]): SlotCollection;
}