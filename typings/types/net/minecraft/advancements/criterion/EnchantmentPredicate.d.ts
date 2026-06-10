import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Enchantment } from '../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { ItemEnchantments } from '../../../../net/minecraft/world/item/enchantment/ItemEnchantments.d.ts'
export class EnchantmentPredicate extends Record {
    static CODEC: Codec<EnchantmentPredicate>;
    constructor(enchantments: Optional<Holder<Enchantment>[]>, level: MinMaxBounds$Ints)
    constructor(enchantment: Holder<Enchantment>, level: MinMaxBounds$Ints)
    constructor(enchantments: Holder<Enchantment>[], level: MinMaxBounds$Ints)
    // private enchantments: Optional<Holder<Enchantment>[]>;
    // private level: MinMaxBounds$Ints;
    containedIn(itemEnchantments: ItemEnchantments): boolean;
    enchantments(): Optional<Holder<Enchantment>[]>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): MinMaxBounds$Ints;
    // private matchesEnchantment(itemEnchantments: ItemEnchantments, enchantment: Holder<Enchantment>): boolean;
    toString(): string;
}