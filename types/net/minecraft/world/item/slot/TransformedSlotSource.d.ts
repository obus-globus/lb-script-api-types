import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SlotCollection } from '../../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
import type { SlotSource } from '../../../../../net/minecraft/world/item/slot/SlotSource.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
export abstract class TransformedSlotSource extends Object implements SlotSource {
    constructor(slotSource: SlotSource)
    // private slotSource: SlotSource;
    codec(): MapCodec<TransformedSlotSource>;
    provide(context: LootContext): SlotCollection;
    transform(slots: SlotCollection): SlotCollection;
    validate(context: ValidationContext): void;
}