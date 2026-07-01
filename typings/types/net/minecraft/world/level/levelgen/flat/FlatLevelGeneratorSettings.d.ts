import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeGenerationSettings } from '../../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FlatLayerInfo } from '../../../../../../net/minecraft/world/level/levelgen/flat/FlatLayerInfo.d.ts'
import type { PlacedFeature } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
import type { StructureSet } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureSet.d.ts'
export class FlatLevelGeneratorSettings extends Object {
    static CODEC: Codec<FlatLevelGeneratorSettings>;
    static createLakesList(paramplacedFeatures: HolderGetter<PlacedFeature>): Holder<PlacedFeature>[];
    static getDefault(parambiomes: HolderGetter<Biome>, paramstructureSets: HolderGetter<StructureSet>, paramplacedFeatures: HolderGetter<PlacedFeature>): FlatLevelGeneratorSettings;
    static getDefaultBiome(parambiomes: HolderGetter<Biome>): Holder<Biome>;
    constructor(structureOverrides: Optional<Holder<StructureSet>[]>, biome: Holder<Biome>, lakes: Holder<PlacedFeature>[])
    // private addLakes: boolean;
    readonly biome: Holder<Biome>;
    // private decoration: boolean;
    // private lakes: Holder<PlacedFeature>[];
    readonly layers: BlockState[];
    readonly layersInfo: FlatLayerInfo[];
    // private structureOverrides: Optional<Holder<StructureSet>[]>;
    // private voidGen: boolean;
    adjustGenerationSettings(sourceBiome: Holder<Biome>): BiomeGenerationSettings;
    getBiome(): Holder<Biome>;
    getLayers(): BlockState[];
    getLayersInfo(): FlatLayerInfo[];
    setAddLakes(): void;
    setDecoration(): void;
    structureOverrides(): Optional<Holder<StructureSet>[]>;
    updateLayers(): void;
    withBiomeAndLayers(layers: FlatLayerInfo[], structureOverrides: Optional<Holder<StructureSet>[]>, biome: Holder<Biome>): FlatLevelGeneratorSettings;
}