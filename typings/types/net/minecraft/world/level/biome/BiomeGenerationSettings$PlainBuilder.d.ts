import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { BiomeGenerationSettings } from '../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings.d.ts'
import type { GenerationStep$Decoration } from '../../../../../net/minecraft/world/level/levelgen/GenerationStep$Decoration.d.ts'
import type { ConfiguredWorldCarver } from '../../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class BiomeGenerationSettings$PlainBuilder extends Object {
    constructor()
    // private carvers: Holder<ConfiguredWorldCarver<any>>[];
    // private features: Holder<PlacedFeature>[][];
    addCarver(carver: Holder<ConfiguredWorldCarver<any>>): BiomeGenerationSettings$PlainBuilder;
    addFeature(index: number, feature: Holder<PlacedFeature>): BiomeGenerationSettings$PlainBuilder;
    addFeature(step: GenerationStep$Decoration, feature: Holder<PlacedFeature>): BiomeGenerationSettings$PlainBuilder;
    // private addFeatureStepsUpTo(index: number): void;
    build(): BiomeGenerationSettings;
}