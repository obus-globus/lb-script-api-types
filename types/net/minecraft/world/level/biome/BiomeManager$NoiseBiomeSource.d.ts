import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export interface BiomeManager$NoiseBiomeSource extends Object{
    getNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
}