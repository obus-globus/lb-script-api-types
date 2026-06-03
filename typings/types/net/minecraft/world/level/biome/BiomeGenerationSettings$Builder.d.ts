import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { BiomeGenerationSettings$PlainBuilder } from '../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings$PlainBuilder.d.ts'
import type { GenerationStep$Decoration } from '../../../../../net/minecraft/world/level/levelgen/GenerationStep$Decoration.d.ts'
import type { ConfiguredWorldCarver } from '../../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class BiomeGenerationSettings$Builder extends BiomeGenerationSettings$PlainBuilder {
    constructor(placedFeatures: HolderGetter<PlacedFeature>, worldCarvers: HolderGetter<ConfiguredWorldCarver<Object>>)
    // private placedFeatures: HolderGetter<PlacedFeature>;
    // private worldCarvers: HolderGetter<ConfiguredWorldCarver<Object>>;
    addCarver(carver: Holder<ConfiguredWorldCarver<Object>>): BiomeGenerationSettings$PlainBuilder;
    addCarver(carver: ResourceKey<ConfiguredWorldCarver<Object>>): BiomeGenerationSettings$Builder;
    addFeature(index: number, feature: Holder<PlacedFeature>): BiomeGenerationSettings$PlainBuilder;
    addFeature(step: GenerationStep$Decoration, feature: Holder<PlacedFeature>): BiomeGenerationSettings$PlainBuilder;
    addFeature(step: GenerationStep$Decoration, feature: ResourceKey<PlacedFeature>): BiomeGenerationSettings$Builder;
}