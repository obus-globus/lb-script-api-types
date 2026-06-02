import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { SlotCollection } from '../../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
import type { SlotSource } from '../../../../../net/minecraft/world/item/slot/SlotSource.d.ts'
import type { TransformedSlotSource } from '../../../../../net/minecraft/world/item/slot/TransformedSlotSource.d.ts'
export class LimitSlotSource extends TransformedSlotSource {
    static MAP_CODEC: MapCodec<LimitSlotSource>;
    private constructor(slotSource: SlotSource, limit: number)
    // private limit: number;
    codec(): MapCodec<LimitSlotSource>;
    transform(slots: SlotCollection): SlotCollection;
}