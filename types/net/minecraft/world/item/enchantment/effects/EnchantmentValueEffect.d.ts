import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
export interface EnchantmentValueEffect extends Object{
    codec(): MapCodec<EnchantmentValueEffect>;
    process(enchantmentLevel: number, random: RandomSource, inputValue: number): number;
}