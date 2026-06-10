import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeModificationContext$GenerationSettingsContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext$GenerationSettingsContext.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { BiomeGenerationSettings } from '../../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings.d.ts'
import type { GenerationStep$Decoration } from '../../../../../../net/minecraft/world/level/levelgen/GenerationStep$Decoration.d.ts'
import type { ConfiguredWorldCarver } from '../../../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { PlacedFeature } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class BiomeModificationContextImpl$GenerationSettingsContextImpl extends Object implements BiomeModificationContext$GenerationSettingsContext {
    constructor(null_: BiomeModificationContextImpl$GenerationSettingsContextImpl)
    // private carvers: ConfiguredWorldCarver<Object>[];
    // private features: PlacedFeature[];
    // private generationSettings: BiomeGenerationSettings;
    // private rebuildFeatures: boolean;
    addCarver(arg0: ResourceKey<ConfiguredWorldCarver<Object>>): void;
    addFeature(arg0: GenerationStep$Decoration, arg1: ResourceKey<PlacedFeature>): void;
    freeze(): void;
    // private freezeFeatures(): void;
    // private plus<T extends Object | number | string | boolean>(arg0: Holder<T>[], arg1: Holder<T>): Holder<T>[];
    // private rebuildFlowerFeatures(): void;
    removeCarver(arg0: ResourceKey<ConfiguredWorldCarver<Object>>): boolean;
    removeFeature(arg0: ResourceKey<PlacedFeature>): boolean;
    removeFeature(arg0: GenerationStep$Decoration, arg1: ResourceKey<PlacedFeature>): boolean;
    // private unfreezeFeatures(): void;
}