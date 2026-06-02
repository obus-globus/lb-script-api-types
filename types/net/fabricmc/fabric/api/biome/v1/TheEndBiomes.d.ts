import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class TheEndBiomes extends Object {
    static addBarrensBiome(paramarg0: ResourceKey<Biome>, paramarg1: ResourceKey<Biome>, paramarg2: number): void;
    static addHighlandsBiome(paramarg0: ResourceKey<Biome>, paramarg1: number): void;
    static addMainIslandBiome(paramarg0: ResourceKey<Biome>, paramarg1: number): void;
    static addMidlandsBiome(paramarg0: ResourceKey<Biome>, paramarg1: ResourceKey<Biome>, paramarg2: number): void;
    static addSmallIslandsBiome(paramarg0: ResourceKey<Biome>, paramarg1: number): void;
    private constructor()
}