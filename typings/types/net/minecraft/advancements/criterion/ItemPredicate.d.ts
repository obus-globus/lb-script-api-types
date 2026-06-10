import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentMatchers } from '../../../../net/minecraft/advancements/criterion/DataComponentMatchers.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../net/minecraft/world/item/ItemInstance.d.ts'
export class ItemPredicate extends Record implements Predicate<ItemInstance> {
    static CODEC: Codec<ItemPredicate>;
    static isEqual(paramarg0: Object): (param0: Object | null) => boolean;
    static not(paramarg0: (param0: Object) => boolean): (param0: Object | null) => boolean;
    constructor(items: Optional<Holder<Item>[]>, count: MinMaxBounds$Ints, components: DataComponentMatchers)
    // private components: DataComponentMatchers;
    // private count: MinMaxBounds$Ints;
    // private items: Optional<Holder<Item>[]>;
    and(arg0: (param0: ItemInstance) => boolean): (param0: ItemInstance) => boolean;
    components(): DataComponentMatchers;
    count(): MinMaxBounds$Ints;
    equals(o: Object | null): boolean;
    hashCode(): number;
    items(): Optional<Holder<Item>[]>;
    negate(): (param0: ItemInstance) => boolean;
    or(arg0: (param0: ItemInstance) => boolean): (param0: ItemInstance) => boolean;
    test(itemStack: ItemInstance): boolean;
    toString(): string;
}