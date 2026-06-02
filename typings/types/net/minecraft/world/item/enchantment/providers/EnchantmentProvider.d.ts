import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DifficultyInstance } from '../../../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemEnchantments$Mutable } from '../../../../../../net/minecraft/world/item/enchantment/ItemEnchantments$Mutable.d.ts'
export interface EnchantmentProvider extends Object{
    codec(): MapCodec<EnchantmentProvider>;
    enchant(item: ItemStack, itemEnchantments: ItemEnchantments$Mutable, random: RandomSource, difficulty: DifficultyInstance): void;
}