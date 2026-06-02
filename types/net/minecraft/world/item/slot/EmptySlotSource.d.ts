import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SlotCollection } from '../../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
import type { SlotSource } from '../../../../../net/minecraft/world/item/slot/SlotSource.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
export class EmptySlotSource extends Record implements SlotSource {
    static MAP_CODEC: MapCodec<EmptySlotSource>;
    constructor()
    codec(): MapCodec<EmptySlotSource>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    provide(context: LootContext): SlotCollection;
    toString(): string;
}