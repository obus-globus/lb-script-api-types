import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
export class RangeSelectItemModel$Entry extends Record {
    static BY_THRESHOLD: (param0: Object) => boolean;
    static CODEC: Codec<RangeSelectItemModel$Entry>;
    constructor(threshold: number, model: ItemModel$Unbaked)
    // private model: ItemModel$Unbaked;
    // private threshold: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): ItemModel$Unbaked;
    threshold(): number;
    toString(): string;
}