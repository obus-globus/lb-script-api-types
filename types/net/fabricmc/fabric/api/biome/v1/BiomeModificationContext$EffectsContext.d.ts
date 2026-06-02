import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeSpecialEffects$GrassColorModifier } from '../../../../../../net/minecraft/world/level/biome/BiomeSpecialEffects$GrassColorModifier.d.ts'
export interface BiomeModificationContext$EffectsContext extends Object{
    clearDryFoliageColorOverride(): void;
    clearFoliageColorOverride(): void;
    clearGrassColorOverride(): void;
    setDryFoliageColorOverride(arg0: Optional<number>): void;
    setDryFoliageColorOverride(arg0: OptionalInt): void;
    setDryFoliageColorOverride(arg0: number): void;
    setFogColor(arg0: number): void;
    setFoliageColorOverride(arg0: Optional<number>): void;
    setFoliageColorOverride(arg0: OptionalInt): void;
    setFoliageColorOverride(arg0: number): void;
    setGrassColorModifier(arg0: BiomeSpecialEffects$GrassColorModifier): void;
    setGrassColorOverride(arg0: Optional<number>): void;
    setGrassColorOverride(arg0: OptionalInt): void;
    setGrassColorOverride(arg0: number): void;
    setMusicVolume(arg0: number): void;
    setSkyColor(arg0: number): void;
    setWaterColor(arg0: number): void;
    setWaterFogColor(arg0: number): void;
}