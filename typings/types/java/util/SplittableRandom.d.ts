import type { SplittableRandom$AbstractSplittableGeneratorProxy } from '../../java/util/SplittableRandom$AbstractSplittableGeneratorProxy.d.ts'
import type { RandomGenerator } from '../../java/util/random/RandomGenerator.d.ts'
import type { RandomGenerator$SplittableGenerator } from '../../java/util/random/RandomGenerator$SplittableGenerator.d.ts'
import type { DoubleStream } from '../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SplittableRandom extends Object implements RandomGenerator, RandomGenerator$SplittableGenerator {
    static getDefault(): RandomGenerator;
    static of(paramarg0: string): RandomGenerator;
    static of(paramarg0: string): RandomGenerator$SplittableGenerator;
    constructor()
    constructor(arg0: number)
    // private gamma: number;
    // private proxy: SplittableRandom$AbstractSplittableGeneratorProxy;
    // private seed: number;
    doubles(): DoubleStream;
    doubles(arg0: number, arg1: number): DoubleStream;
    doubles(arg0: number): DoubleStream;
    doubles(arg0: number, arg1: number, arg2: number): DoubleStream;
    equiDoubles(arg0: number, arg1: number, arg2: boolean, arg3: boolean): DoubleStream;
    ints(): IntStream;
    ints(arg0: number, arg1: number): IntStream;
    ints(arg0: number): IntStream;
    ints(arg0: number, arg1: number, arg2: number): IntStream;
    isDeprecated(): boolean;
    longs(): LongStream;
    longs(arg0: number): LongStream;
    longs(arg0: number, arg1: number): LongStream;
    longs(arg0: number, arg1: number, arg2: number): LongStream;
    nextBoolean(): boolean;
    nextBytes(arg0: number[]): void;
    nextDouble(): number;
    nextDouble(arg0: number): number;
    nextDouble(arg0: number, arg1: number): number;
    nextExponential(): number;
    nextFloat(): number;
    nextFloat(arg0: number): number;
    nextFloat(arg0: number, arg1: number): number;
    nextGaussian(): number;
    nextGaussian(arg0: number, arg1: number): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextInt(arg0: number, arg1: number): number;
    nextLong(): number;
    nextLong(arg0: number): number;
    nextLong(arg0: number, arg1: number): number;
    // private nextSeed(): number;
    rngs(): Stream<RandomGenerator>;
    rngs(arg0: number): Stream<RandomGenerator>;
    split(): SplittableRandom;
    split(arg0: RandomGenerator$SplittableGenerator): SplittableRandom;
    splits(): Stream<RandomGenerator$SplittableGenerator>;
    splits(arg0: RandomGenerator$SplittableGenerator): Stream<RandomGenerator$SplittableGenerator>;
    splits(arg0: number): Stream<RandomGenerator$SplittableGenerator>;
    splits(arg0: number, arg1: RandomGenerator$SplittableGenerator): Stream<RandomGenerator$SplittableGenerator>;
}