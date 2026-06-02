import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeSource } from '../../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { MultiNoiseBiomeSourceParameterList } from '../../../../../../net/minecraft/world/level/biome/MultiNoiseBiomeSourceParameterList.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { DimensionType } from '../../../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
import type { LevelStem } from '../../../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { NoiseGeneratorSettings } from '../../../../../../net/minecraft/world/level/levelgen/NoiseGeneratorSettings.d.ts'
import type { PlacedFeature } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
import type { WorldPreset } from '../../../../../../net/minecraft/world/level/levelgen/presets/WorldPreset.d.ts'
import type { StructureSet } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureSet.d.ts'
export class WorldPresets$Bootstrap extends Object {
    private constructor(context: BootstrapContext<WorldPreset>)
    // private biomes: HolderGetter<Biome>;
    // private context: BootstrapContext<WorldPreset>;
    // private endStem: LevelStem;
    // private multiNoiseBiomeSourceParameterLists: HolderGetter<MultiNoiseBiomeSourceParameterList>;
    // private netherStem: LevelStem;
    // private noiseSettings: HolderGetter<NoiseGeneratorSettings>;
    // private overworldDimensionType: Holder<DimensionType>;
    // private placedFeatures: HolderGetter<PlacedFeature>;
    // private structureSets: HolderGetter<StructureSet>;
    bootstrap(): void;
    // private createPresetWithCustomOverworld(overworldStem: LevelStem): WorldPreset;
    // private makeNoiseBasedOverworld(overworldBiomeSource: BiomeSource, noiseSettings: Holder<NoiseGeneratorSettings>): LevelStem;
    // private makeOverworld(generator: ChunkGenerator): LevelStem;
    // private registerCustomOverworldPreset(debug: ResourceKey<WorldPreset>, overworld: LevelStem): void;
    // private registerOverworlds(biomeSource: BiomeSource): void;
}