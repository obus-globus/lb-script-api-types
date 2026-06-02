import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeGenerationSettings$Builder } from '../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings$Builder.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class EndBiomes extends Object {
    static baseEndBiome(paramgeneration: BiomeGenerationSettings$Builder): Biome;
    static endBarrens(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<Object>): Biome;
    static endHighlands(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<Object>): Biome;
    static endMidlands(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<Object>): Biome;
    static smallEndIslands(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<Object>): Biome;
    static theEnd(paramplacedFeatures: HolderGetter<PlacedFeature>, paramcarvers: HolderGetter<Object>): Biome;
    constructor()
}