import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WeightedPicker } from '../../../../../net/fabricmc/fabric/impl/biome/WeightedPicker.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
import type { ImprovedNoise } from '../../../../../net/minecraft/world/level/levelgen/synth/ImprovedNoise.d.ts'
export class TheEndBiomeData$Overrides extends Object {
    constructor(arg0: HolderGetter<Biome>)
    customBiomes: Holder<Biome>[];
    // private endBarrens: Holder<Biome>;
    // private endBarrensMap: Map<Holder<Biome>, WeightedPicker<Holder<Biome>>>;
    // private endBiomesMap: Map<Holder<Biome>, WeightedPicker<Holder<Biome>>>;
    // private endHighlands: Holder<Biome>;
    // private endMidlands: Holder<Biome>;
    // private endMidlandsMap: Map<Holder<Biome>, WeightedPicker<Holder<Biome>>>;
    // private samplers: Map<Climate$Sampler, ImprovedNoise>;
    // private pick<T extends Holder<Biome>>(arg0: T, arg1: T, arg2: Map<T, WeightedPicker<T>>, arg3: number, arg4: number, arg5: Climate$Sampler): T;
    pick(arg0: number, arg1: number, arg2: number, arg3: Climate$Sampler, arg4: Holder<Biome>): Holder<Biome>;
    // private resolveOverrides(arg0: HolderGetter<Biome>, arg1: Map<ResourceKey<Biome>, WeightedPicker<ResourceKey<Biome>>>, arg2: ResourceKey<Biome>): Map<Holder<Biome>, WeightedPicker<Holder<Biome>>>;
}