import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export interface BlendingData$BiomeConsumer extends Object{
    consume(cellX: number, cellZ: number, biome: Holder<Biome>): void;
}