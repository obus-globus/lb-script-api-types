import type { RandomGenerator } from '../../../../java/util/random/RandomGenerator.d.ts'
import type { DoubleStream } from '../../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class RandomSupport$AbstractSpliteratorGenerator extends Object implements RandomGenerator {
    static doubles(paramarg0: RandomGenerator): DoubleStream;
    static doubles(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number): DoubleStream;
    static doubles(paramarg0: RandomGenerator, paramarg1: number): DoubleStream;
    static doubles(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number, paramarg3: number): DoubleStream;
    static getDefault(): RandomGenerator;
    static ints(paramarg0: RandomGenerator): IntStream;
    static ints(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number): IntStream;
    static ints(paramarg0: RandomGenerator, paramarg1: number): IntStream;
    static ints(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number, paramarg3: number): IntStream;
    static longs(paramarg0: RandomGenerator): LongStream;
    static longs(paramarg0: RandomGenerator, paramarg1: number): LongStream;
    static longs(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number): LongStream;
    static longs(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number, paramarg3: number): LongStream;
    static of(paramarg0: string): RandomGenerator;
    constructor()
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
}