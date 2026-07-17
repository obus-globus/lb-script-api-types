import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { SlotProvider } from '../../../../net/minecraft/world/entity/SlotProvider.d.ts'
import type { SlotRange } from '../../../../net/minecraft/world/inventory/SlotRange.d.ts'
export class SlotsPredicate extends Record {
    static CODEC: Codec<SlotsPredicate>;
    constructor(slots: JavaMap<SlotRange, ItemPredicate>)
    // private slots: JavaMap<SlotRange, ItemPredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(slotProvider: SlotProvider): boolean;
    slots(): JavaMap<SlotRange, ItemPredicate>;
    toString(): string;
}