import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Climate$ParameterPoint } from '../../../../../../net/minecraft/world/level/biome/Climate$ParameterPoint.d.ts'
import type { Climate$TargetPoint } from '../../../../../../net/minecraft/world/level/biome/Climate$TargetPoint.d.ts'
export class NetherBiomes extends Object {
    static addNetherBiome(paramarg0: ResourceKey<Biome>, paramarg1: Climate$ParameterPoint): void;
    static addNetherBiome(paramarg0: ResourceKey<Biome>, paramarg1: Climate$TargetPoint): void;
    static canGenerateInNether(paramarg0: ResourceKey<Biome>): boolean;
    private constructor()
}