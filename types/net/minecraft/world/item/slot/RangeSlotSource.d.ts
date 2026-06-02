import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { SlotRange } from '../../../../../net/minecraft/world/inventory/SlotRange.d.ts'
import type { SlotCollection } from '../../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
import type { SlotSource } from '../../../../../net/minecraft/world/item/slot/SlotSource.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg } from '../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
export class RangeSlotSource extends Object implements SlotSource {
    static MAP_CODEC: MapCodec<RangeSlotSource>;
    private constructor(source: LootContextArg<Object>, slotRange: SlotRange)
    // private slotRange: SlotRange;
    // private source: LootContextArg<Object>;
    codec(): MapCodec<RangeSlotSource>;
    getReferencedContextParams(): ContextKey<Object>[];
    provide(context: LootContext): SlotCollection;
}