import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SlotCollection } from '../../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
import type { SlotSource } from '../../../../../net/minecraft/world/item/slot/SlotSource.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
export abstract class CompositeSlotSource extends Object implements SlotSource {
    constructor(terms: SlotSource[])
    // private compositeSlotSource: (param0: LootContext) => SlotCollection;
    // private terms: SlotSource[];
    codec(): MapCodec<CompositeSlotSource>;
    provide(context: LootContext): SlotCollection;
    validate(context: ValidationContext): void;
}