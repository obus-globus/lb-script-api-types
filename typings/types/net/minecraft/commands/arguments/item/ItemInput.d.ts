import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentPatch } from '../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemInput extends Record {
    constructor(item: Holder<Item>, components: DataComponentPatch)
    // private components: DataComponentPatch;
    // private item: Holder<Item>;
    components(): DataComponentPatch;
    createItemStack(count: number): ItemStack;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Holder<Item>;
    toString(): string;
}