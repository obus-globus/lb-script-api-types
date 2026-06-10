import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { DifficultyInstance } from '../../../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { ItemEnchantments$Mutable } from '../../../../../../net/minecraft/world/item/enchantment/ItemEnchantments$Mutable.d.ts'
import type { EnchantmentProvider } from '../../../../../../net/minecraft/world/item/enchantment/providers/EnchantmentProvider.d.ts'
export class EnchantmentsByCost extends Record implements EnchantmentProvider {
    static CODEC: MapCodec<EnchantmentsByCost>;
    static DIRECT_CODEC: Codec<EnchantmentProvider>;
    constructor(enchantments: Holder<Enchantment>[], cost: IntProvider)
    // private cost: IntProvider;
    // private enchantments: Holder<Enchantment>[];
    codec(): MapCodec<EnchantmentsByCost>;
    cost(): IntProvider;
    enchant(item: ItemStack, itemEnchantments: ItemEnchantments$Mutable, random: RandomSource, difficulty: DifficultyInstance): void;
    enchantments(): Holder<Enchantment>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}