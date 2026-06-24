import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ItemPredicate } from '../../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { SlotCollection } from '../../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
import type { SlotSource } from '../../../../../net/minecraft/world/item/slot/SlotSource.d.ts'
import type { TransformedSlotSource } from '../../../../../net/minecraft/world/item/slot/TransformedSlotSource.d.ts'
export class FilteredSlotSource extends TransformedSlotSource {
    static MAP_CODEC: MapCodec<FilteredSlotSource>;
    private constructor(slotSource: SlotSource, filter: ItemPredicate)
    // private filter: ItemPredicate;
    codec(): MapCodec<FilteredSlotSource>;
    transform(slots: SlotCollection): SlotCollection;
}