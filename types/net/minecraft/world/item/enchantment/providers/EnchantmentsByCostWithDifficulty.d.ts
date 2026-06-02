import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DifficultyInstance } from '../../../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemEnchantments$Mutable } from '../../../../../../net/minecraft/world/item/enchantment/ItemEnchantments$Mutable.d.ts'
import type { EnchantmentProvider } from '../../../../../../net/minecraft/world/item/enchantment/providers/EnchantmentProvider.d.ts'
export class EnchantmentsByCostWithDifficulty extends Record implements EnchantmentProvider {
    static CODEC: MapCodec<EnchantmentsByCostWithDifficulty>;
    static DIRECT_CODEC: Codec<EnchantmentProvider>;
    static MAX_ALLOWED_VALUE_PART: number;
    // private enchantments: Holder<T>[];
    // private maxCostSpan: number;
    // private minCost: number;
    codec(): MapCodec<EnchantmentsByCostWithDifficulty>;
    enchant(item: ItemStack, itemEnchantments: ItemEnchantments$Mutable, random: RandomSource, difficulty: DifficultyInstance): void;
    enchantments(): Holder<T>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxCostSpan(): number;
    minCost(): number;
    toString(): string;
}