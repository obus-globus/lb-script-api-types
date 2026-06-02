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
export class SingleEnchantment extends Record implements EnchantmentProvider {
    static CODEC: MapCodec<SingleEnchantment>;
    static DIRECT_CODEC: Codec<EnchantmentProvider>;
    constructor(enchantment: Holder<Enchantment>, level: IntProvider)
    // private enchantment: Holder<Enchantment>;
    // private level: IntProvider;
    codec(): MapCodec<SingleEnchantment>;
    enchant(item: ItemStack, itemEnchantments: ItemEnchantments$Mutable, random: RandomSource, difficulty: DifficultyInstance): void;
    enchantment(): Holder<Enchantment>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): IntProvider;
    toString(): string;
}