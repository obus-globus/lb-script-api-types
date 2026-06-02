import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BitRandomSource } from '../../../../../net/minecraft/world/level/levelgen/BitRandomSource.d.ts'
import type { MarsagliaPolarGaussian } from '../../../../../net/minecraft/world/level/levelgen/MarsagliaPolarGaussian.d.ts'
import type { PositionalRandomFactory } from '../../../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
export class ThreadSafeLegacyRandomSource extends Object implements BitRandomSource {
    static DOUBLE_MULTIPLIER: number;
    static FLOAT_MULTIPLIER: number;
    static GAUSSIAN_SPREAD_FACTOR: number;
    constructor(seed: number)
    // private gaussianSource: MarsagliaPolarGaussian;
    readonly seed: AtomicLong;
    fork(): RandomSource;
    forkPositional(): PositionalRandomFactory;
    next(bits: number): number;
    nextBoolean(): boolean;
    nextDouble(): number;
    nextFloat(): number;
    nextGaussian(): number;
    nextInt(): number;
    nextInt(bound: number): number;
    nextLong(): number;
    setSeed(seed: number): void;
}