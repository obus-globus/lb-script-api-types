import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Biome$BiomeBuilder } from '../../../../../net/minecraft/world/level/biome/Biome$BiomeBuilder.d.ts'
import type { BiomeGenerationSettings$Builder } from '../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings$Builder.d.ts'
import type { ConfiguredWorldCarver } from '../../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class OverworldBiomes extends Object {
    static SWAMP_SKELETON_WEIGHT: number;
    static badlands(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramwooded: boolean): Biome;
    static bambooJungle(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static baseBiome(paramtemperature: number, paramdownfall: number): Biome$BiomeBuilder;
    static baseJungle(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramdownfall: number, parambamboo: boolean, paramsparse: boolean, paramcore: boolean): Biome$BiomeBuilder;
    static baseOcean(): Biome$BiomeBuilder;
    static baseOceanGeneration(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): BiomeGenerationSettings$Builder;
    static beach(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramsnowy: boolean, paramstony: boolean): Biome;
    static calculateSkyColor(paramtemperature: number): number;
    static coldOcean(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramdeep: boolean): Biome;
    static darkForest(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramisPaleGarden: boolean): Biome;
    static deepDark(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static desert(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static dripstoneCaves(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static forest(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, parambirch: boolean, paramtall: boolean, paramflower: boolean): Biome;
    static frozenOcean(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramdeep: boolean): Biome;
    static frozenPeaks(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static globalOverworldGeneration(paramgeneration: BiomeGenerationSettings$Builder): void;
    static grove(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static jaggedPeaks(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static jungle(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static lukeWarmOcean(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramdeep: boolean): Biome;
    static lushCaves(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static mangroveSwamp(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static meadowOrCherryGrove(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramcherryGrove: boolean): Biome;
    static mushroomFields(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static ocean(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramdeep: boolean): Biome;
    static oldGrowthTaiga(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramspruce: boolean): Biome;
    static plains(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramsunflower: boolean, paramsnowy: boolean, paramspikes: boolean): Biome;
    static river(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramfrozen: boolean): Biome;
    static savanna(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramshattered: boolean, paramplateau: boolean): Biome;
    static snowySlopes(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static sparseJungle(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static stonyPeaks(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static swamp(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static taiga(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, paramsnowy: boolean): Biome;
    static theVoid(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static warmOcean(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>): Biome;
    static windsweptHills(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<Object>>, parammoreTrees: boolean): Biome;
    constructor()
}