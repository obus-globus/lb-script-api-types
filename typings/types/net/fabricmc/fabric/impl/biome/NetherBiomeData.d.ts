import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Climate$ParameterList } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterList.d.ts'
import type { Climate$ParameterPoint } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterPoint.d.ts'
export class NetherBiomeData extends Object {
    static addNetherBiome(paramarg0: ResourceKey<Biome>, paramarg1: Climate$ParameterPoint): void;
    static canGenerateInNether(paramarg0: ResourceKey<Biome>): boolean;
    static withModdedBiomeEntries<T extends unknown>(paramarg0: Climate$ParameterList<T>, paramarg1: (param0: ResourceKey<Biome>) => T): Climate$ParameterList<T>;
    private constructor()
}