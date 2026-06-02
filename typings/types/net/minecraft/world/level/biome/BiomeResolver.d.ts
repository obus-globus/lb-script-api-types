import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
export interface BiomeResolver extends Object{
    getNoiseBiome(quartX: number, quartY: number, quartZ: number, sampler: Climate$Sampler): Holder<Biome>;
}