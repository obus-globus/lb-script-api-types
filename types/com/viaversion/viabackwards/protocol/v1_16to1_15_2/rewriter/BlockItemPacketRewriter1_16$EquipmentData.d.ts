import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockItemPacketRewriter1_16$EquipmentData extends Record {
    // private item: Item;
    // private slot: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    item(): Item;
    slot(): number;
    toString(): string;
}