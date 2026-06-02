import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BiomeSpecialEffects } from '../../../../../net/minecraft/world/level/biome/BiomeSpecialEffects.d.ts'
import type { BiomeSpecialEffects$GrassColorModifier } from '../../../../../net/minecraft/world/level/biome/BiomeSpecialEffects$GrassColorModifier.d.ts'
export class BiomeSpecialEffects$Builder extends Object {
    constructor()
    // private dryFoliageColorOverride: Optional<number>;
    // private foliageColorOverride: Optional<number>;
    // private grassColorModifier: BiomeSpecialEffects$GrassColorModifier;
    // private grassColorOverride: Optional<number>;
    // private waterColor: OptionalInt;
    build(): BiomeSpecialEffects;
    dryFoliageColorOverride(dryFoliageColor: number): BiomeSpecialEffects$Builder;
    foliageColorOverride(foliageColor: number): BiomeSpecialEffects$Builder;
    grassColorModifier(grassModifier: BiomeSpecialEffects$GrassColorModifier): BiomeSpecialEffects$Builder;
    grassColorOverride(grassColor: number): BiomeSpecialEffects$Builder;
    waterColor(waterColor: number): BiomeSpecialEffects$Builder;
}