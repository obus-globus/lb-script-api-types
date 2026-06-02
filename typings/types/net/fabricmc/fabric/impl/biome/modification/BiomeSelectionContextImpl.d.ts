import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeSelectionContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeSelectionContext.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { LevelStem } from '../../../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { ConfiguredFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { PlacedFeature } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
import type { Structure } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
export class BiomeSelectionContextImpl extends Object implements BiomeSelectionContext {
    constructor(arg0: RegistryAccess, arg1: ResourceKey<Biome>, arg2: Biome)
    readonly biome: Biome;
    // private dynamicRegistries: RegistryAccess;
    // private entry: Holder<Biome>;
    // private key: ResourceKey<Biome>;
    canGenerateIn(arg0: ResourceKey<LevelStem>): boolean;
    getBiome(): Biome;
    getBiomeHolder(): Holder<Biome>;
    getBiomeKey(): ResourceKey<Biome>;
    getFeatureKey(arg0: ConfiguredFeature<Object, Object>): Optional<ResourceKey<ConfiguredFeature<Object, Object>>>;
    getPlacedFeatureKey(arg0: PlacedFeature): Optional<ResourceKey<PlacedFeature>>;
    getStructureKey(arg0: Structure): Optional<ResourceKey<Structure>>;
    hasFeature(arg0: ResourceKey<ConfiguredFeature<Object, Object>>): boolean;
    hasPlacedFeature(arg0: ResourceKey<PlacedFeature>): boolean;
    hasTag(arg0: TagKey<Biome>): boolean;
    validForStructure(arg0: ResourceKey<Structure>): boolean;
}