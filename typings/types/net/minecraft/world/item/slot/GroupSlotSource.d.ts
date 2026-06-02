import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { CompositeSlotSource } from '../../../../../net/minecraft/world/item/slot/CompositeSlotSource.d.ts'
import type { SlotSource } from '../../../../../net/minecraft/world/item/slot/SlotSource.d.ts'
export class GroupSlotSource extends CompositeSlotSource {
    static INLINE_CODEC: Codec<GroupSlotSource>;
    static MAP_CODEC: MapCodec<GroupSlotSource>;
    private constructor(terms: SlotSource[])
    codec(): MapCodec<GroupSlotSource>;
}