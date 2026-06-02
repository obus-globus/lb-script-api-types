import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
export class RangeSelectItemModel$Entry extends Record {
    static BY_THRESHOLD: (param0: RangeSelectItemModel$Entry) => kotlin.Boolean;
    static CODEC: Codec<RangeSelectItemModel$Entry>;
    // private model: ItemModel$Unbaked;
    // private threshold: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): ItemModel$Unbaked;
    threshold(): number;
    toString(): string;
}