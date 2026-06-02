import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeManager$NoiseBiomeSource } from '../../../../../net/minecraft/world/level/biome/BiomeManager$NoiseBiomeSource.d.ts'
export class BiomeManager extends Object {
    static CHUNK_CENTER_QUART: number;
    static obfuscateSeed(paramseed: number): number;
    constructor(noiseBiomeSource: BiomeManager$NoiseBiomeSource, seed: number)
    // private biomeZoomSeed: number;
    // private noiseBiomeSource: BiomeManager$NoiseBiomeSource;
    getBiome(pos: BlockPos): Holder<Biome>;
    getNoiseBiomeAtPosition(x: number, y: number, z: number): Holder<Biome>;
    getNoiseBiomeAtPosition(blockPos: BlockPos): Holder<Biome>;
    getNoiseBiomeAtQuart(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    withDifferentSource(biomeSource: BiomeManager$NoiseBiomeSource): BiomeManager;
}