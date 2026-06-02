import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SlotRange } from '../../../../net/minecraft/world/inventory/SlotRange.d.ts'
export class SlotRanges extends Object {
    static CODEC: Codec<SlotRange>;
    static MOB_INVENTORY_SIZE: number;
    static MOB_INVENTORY_SLOT_OFFSET: number;
    static allNames(): Stream<string>;
    static nameToIds(paramname: string): SlotRange;
    static singleSlotNames(): Stream<string>;
    constructor()
}