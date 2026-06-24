import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
export class InventoryChangeTrigger$TriggerInstance$Slots extends Record {
    static ANY: InventoryChangeTrigger$TriggerInstance$Slots;
    static CODEC: Codec<InventoryChangeTrigger$TriggerInstance$Slots>;
    constructor(occupied: MinMaxBounds$Ints, full: MinMaxBounds$Ints, empty: MinMaxBounds$Ints)
    // private empty: MinMaxBounds$Ints;
    // private full: MinMaxBounds$Ints;
    // private occupied: MinMaxBounds$Ints;
    empty(): MinMaxBounds$Ints;
    equals(o: Object | null): boolean;
    full(): MinMaxBounds$Ints;
    hashCode(): number;
    matches(slotsFull: number, slotsEmpty: number, slotsOccupied: number): boolean;
    occupied(): MinMaxBounds$Ints;
    toString(): string;
}