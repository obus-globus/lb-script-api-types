import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Climate$ParameterList } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterList.d.ts'
export interface MultiNoiseBiomeSourceParameterList$Preset$SourceProvider extends Object {
    apply(lookup: (param0: ResourceKey<Biome>) => T): Climate$ParameterList<T>;
}