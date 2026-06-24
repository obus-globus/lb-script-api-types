import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LegacyItemRewriter$NonExistentEntry extends Record {
    private constructor(itemId: number, itemMeta: number)
    // private itemId: number;
    // private itemMeta: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    itemId(): number;
    itemMeta(): number;
    rewrites(arg0: Item): boolean;
    toString(): string;
}