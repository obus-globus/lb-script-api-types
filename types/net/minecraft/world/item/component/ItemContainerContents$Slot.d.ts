import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
export class ItemContainerContents$Slot extends Record {
    static CODEC: Codec<ItemContainerContents$Slot>;
    // private index: number;
    // private item: ItemStackTemplate;
    equals(o: Object | null): boolean;
    hashCode(): number;
    index(): number;
    item(): ItemStackTemplate;
    toString(): string;
}