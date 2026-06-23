import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
export class SelectItemModel$SwitchCase<T extends unknown> extends Record {
    static codec(paramvalueCodec: Codec<Object>): Codec<SelectItemModel$SwitchCase<Object>>;
    constructor(values: T[], model: ItemModel$Unbaked)
    // private model: ItemModel$Unbaked;
    // private values: T[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): ItemModel$Unbaked;
    toString(): string;
    values(): T[];
}