import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SlotCollection } from '../../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
import type { SlotSource } from '../../../../../net/minecraft/world/item/slot/SlotSource.d.ts'
import type { TransformedSlotSource } from '../../../../../net/minecraft/world/item/slot/TransformedSlotSource.d.ts'
import type { ContainerComponentManipulator } from '../../../../../net/minecraft/world/level/storage/loot/ContainerComponentManipulator.d.ts'
export class ContentsSlotSource extends TransformedSlotSource {
    static MAP_CODEC: MapCodec<ContentsSlotSource>;
    private constructor(slotSource: SlotSource, component: ContainerComponentManipulator<Object>)
    // private component: ContainerComponentManipulator<Object>;
    codec(): MapCodec<ContentsSlotSource>;
    transform(slots: SlotCollection): SlotCollection;
}