import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LegacyRandomSource } from '../../../../../net/minecraft/world/level/levelgen/LegacyRandomSource.d.ts'
import type { PositionalRandomFactory } from '../../../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
export class WorldgenRandom extends LegacyRandomSource {
    static DOUBLE_MULTIPLIER: number;
    static FLOAT_MULTIPLIER: number;
    static GAUSSIAN_SPREAD_FACTOR: number;
    static seedSlimeChunk(paramx: number, paramz: number, paramseed: number, paramsalt: number): RandomSource;
    constructor(randomSource: RandomSource)
    readonly count: number;
    // private randomSource: RandomSource;
    fork(): RandomSource;
    forkPositional(): PositionalRandomFactory;
    getCount(): number;
    next(bits: number): number;
    setDecorationSeed(seed: number, chunkX: number, chunkZ: number): number;
    setFeatureSeed(seed: number, index: number, step: number): void;
    setLargeFeatureSeed(seed: number, chunkX: number, chunkZ: number): void;
    setLargeFeatureWithSalt(seed: number, x: number, z: number, blend: number): void;
    setSeed(seed: number): void;
}