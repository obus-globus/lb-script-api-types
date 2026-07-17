import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelBasedValue } from '../../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { EnchantmentValueEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentValueEffect.d.ts'
export class ScaleExponentially extends Record implements EnchantmentValueEffect {
    static CODEC: MapCodec<ScaleExponentially>;
    constructor(base: LevelBasedValue, exponent: LevelBasedValue)
    // private base: LevelBasedValue;
    // private exponent: LevelBasedValue;
    base(): LevelBasedValue;
    codec(): MapCodec<ScaleExponentially>;
    equals(o: Object | null): boolean;
    exponent(): LevelBasedValue;
    hashCode(): number;
    process(level: number, random: RandomSource, inputValue: number): number;
    toString(): string;
}