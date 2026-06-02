import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeGenerationSettings } from '../../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FlatLayerInfo } from '../../../../../../net/minecraft/world/level/levelgen/flat/FlatLayerInfo.d.ts'
import type { PlacedFeature } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
import type { StructureSet } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureSet.d.ts'
export class FlatLevelGeneratorSettings extends Object {
    static CODEC: Codec<FlatLevelGeneratorSettings>;
    static createLakesList(paramplacedFeatures: HolderGetter<PlacedFeature>): (Object | null)[];
    static getDefault(parambiomes: HolderGetter<Biome>, paramstructureSets: HolderGetter<StructureSet>, paramplacedFeatures: HolderGetter<PlacedFeature>): FlatLevelGeneratorSettings;
    static getDefaultBiome(parambiomes: HolderGetter<Biome>): Holder<Biome>;
    private constructor(structureOverrides: Optional<Holder<T>[]>, layers: FlatLayerInfo[], lakes: boolean, features: boolean, biome: Optional<Holder<Biome>>, fallbackBiome: Holder$Reference<Biome>, lavaUnderground: Holder<PlacedFeature>, lavaSurface: Holder<PlacedFeature>)
    constructor(structureOverrides: Optional<Holder<T>[]>, biome: Holder<Biome>, lakes: Holder<PlacedFeature>[])
    // private addLakes: boolean;
    readonly biome: Holder<Biome>;
    // private decoration: boolean;
    // private lakes: Holder<PlacedFeature>[];
    readonly layers: BlockState[];
    readonly layersInfo: FlatLayerInfo[];
    // private structureOverrides: Optional<Holder<T>[]>;
    // private voidGen: boolean;
    adjustGenerationSettings(sourceBiome: Holder<Biome>): BiomeGenerationSettings;
    getBiome(): Holder<Biome>;
    getLayers(): BlockState[];
    getLayersInfo(): FlatLayerInfo[];
    setAddLakes(): void;
    setDecoration(): void;
    structureOverrides(): Optional<Holder<T>[]>;
    updateLayers(): void;
    withBiomeAndLayers(layers: FlatLayerInfo[], structureOverrides: Optional<Holder<T>[]>, biome: Holder<Biome>): FlatLevelGeneratorSettings;
}