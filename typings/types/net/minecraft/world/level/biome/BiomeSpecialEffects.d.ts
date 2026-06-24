import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BiomeSpecialEffects$GrassColorModifier } from '../../../../../net/minecraft/world/level/biome/BiomeSpecialEffects$GrassColorModifier.d.ts'
export class BiomeSpecialEffects extends Record {
    static CODEC: Codec<BiomeSpecialEffects>;
    constructor(waterColor: number, foliageColorOverride: Optional<number>, dryFoliageColorOverride: Optional<number>, grassColorOverride: Optional<number>, grassColorModifier: BiomeSpecialEffects$GrassColorModifier)
    dryFoliageColorOverride: Optional<number>;
    foliageColorOverride: Optional<number>;
    grassColorModifier: BiomeSpecialEffects$GrassColorModifier;
    grassColorOverride: Optional<number>;
    waterColor: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}