import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { EnchantmentValueEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentValueEffect.d.ts'
export class AllOf$ValueEffects extends Record implements EnchantmentValueEffect {
    static CODEC: Codec<EnchantmentValueEffect>;
    static CODEC: MapCodec<AllOf$ValueEffects>;
    static bootstrap(paramregistry: MapCodec<EnchantmentValueEffect>[]): MapCodec<EnchantmentValueEffect>;
    constructor(effects: EnchantmentValueEffect[])
    // private effects: EnchantmentValueEffect[];
    codec(): MapCodec<AllOf$ValueEffects>;
    effects(): EnchantmentValueEffect[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    process(enchantmentLevel: number, random: RandomSource, value: number): number;
    toString(): string;
}