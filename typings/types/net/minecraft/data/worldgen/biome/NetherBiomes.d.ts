import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Biome$BiomeBuilder } from '../../../../../net/minecraft/world/level/biome/Biome$BiomeBuilder.d.ts'
import type { ConfiguredWorldCarver } from '../../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class NetherBiomes extends Object {
    static basaltDeltas(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<any>>): Biome;
    static baseBiome(): Biome$BiomeBuilder;
    static crimsonForest(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<any>>): Biome;
    static netherWastes(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<any>>): Biome;
    static soulSandValley(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<any>>): Biome;
    static warpedForest(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<ConfiguredWorldCarver<any>>): Biome;
    constructor()
}