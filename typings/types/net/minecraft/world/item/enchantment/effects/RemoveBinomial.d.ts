import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelBasedValue } from '../../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { EnchantmentValueEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentValueEffect.d.ts'
export class RemoveBinomial extends Record implements EnchantmentValueEffect {
    static CODEC: Codec<EnchantmentValueEffect>;
    static CODEC: MapCodec<RemoveBinomial>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    constructor(chance: LevelBasedValue)
    // private chance: LevelBasedValue;
    chance(): LevelBasedValue;
    codec(): MapCodec<RemoveBinomial>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    process(level: number, random: RandomSource, n: number): number;
    toString(): string;
}