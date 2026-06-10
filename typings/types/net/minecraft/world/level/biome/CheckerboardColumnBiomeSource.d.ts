import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeSource } from '../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
export class CheckerboardColumnBiomeSource extends BiomeSource {
    static CODEC: Codec<BiomeSource>;
    static CODEC: MapCodec<CheckerboardColumnBiomeSource>;
    constructor(allowedBiomes: Holder<Biome>[], size: number)
    // private allowedBiomes: Holder<Biome>[];
    // private bitShift: number;
    // private size: number;
    codec(): MapCodec<BiomeSource>;
    collectPossibleBiomes(): Stream<Holder<Biome>>;
    getNoiseBiome(quartX: number, quartY: number, quartZ: number, sampler: Climate$Sampler): Holder<Biome>;
}