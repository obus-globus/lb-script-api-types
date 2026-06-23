import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { GenerationStep$Decoration } from '../../../../../../net/minecraft/world/level/levelgen/GenerationStep$Decoration.d.ts'
import type { ConfiguredWorldCarver } from '../../../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { PlacedFeature } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export interface BiomeModificationContext$GenerationSettingsContext extends Object{
    addCarver(arg0: ResourceKey<ConfiguredWorldCarver<any>>): void;
    addFeature(arg0: GenerationStep$Decoration, arg1: ResourceKey<PlacedFeature>): void;
    removeCarver(arg0: ResourceKey<ConfiguredWorldCarver<any>>): boolean;
    removeFeature(arg0: ResourceKey<PlacedFeature>): boolean;
    removeFeature(arg0: GenerationStep$Decoration, arg1: ResourceKey<PlacedFeature>): boolean;
}