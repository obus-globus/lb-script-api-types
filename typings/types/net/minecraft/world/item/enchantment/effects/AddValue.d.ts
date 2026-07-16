import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelBasedValue } from '../../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { EnchantmentValueEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentValueEffect.d.ts'
export class AddValue extends Record implements EnchantmentValueEffect {
    static CODEC: MapCodec<AddValue>;
    static bootstrap(paramregistry: MapCodec<EnchantmentValueEffect>[]): MapCodec<EnchantmentValueEffect>;
    constructor(value: LevelBasedValue)
    // private value: LevelBasedValue;
    codec(): MapCodec<AddValue>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    process(enchantmentLevel: number, random: RandomSource, inputValue: number): number;
    toString(): string;
    value(): LevelBasedValue;
}