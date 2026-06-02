import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { AtomicLong } from '../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { RandomGenerator } from '../../java/util/random/RandomGenerator.d.ts'
import type { DoubleStream } from '../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Random extends Object implements Serializable, RandomGenerator {
    static from(paramarg0: RandomGenerator): Random;
    static getDefault(): RandomGenerator;
    static of(paramarg0: string): RandomGenerator;
    constructor()
    private constructor(arg0: void)
    constructor(arg0: number)
    // private haveNextNextGaussian: boolean;
    // private nextNextGaussian: number;
    readonly seed: AtomicLong;
    doubles(): DoubleStream;
    doubles(arg0: number, arg1: number): DoubleStream;
    doubles(arg0: number): DoubleStream;
    doubles(arg0: number, arg1: number, arg2: number): DoubleStream;
    doubles(): DoubleStream;
    doubles(arg0: number, arg1: number): DoubleStream;
    doubles(arg0: number): DoubleStream;
    doubles(arg0: number, arg1: number, arg2: number): DoubleStream;
    equiDoubles(arg0: number, arg1: number, arg2: boolean, arg3: boolean): DoubleStream;
    ints(): IntStream;
    ints(arg0: number, arg1: number): IntStream;
    ints(arg0: number): IntStream;
    ints(arg0: number, arg1: number, arg2: number): IntStream;
    ints(): IntStream;
    ints(arg0: number, arg1: number): IntStream;
    ints(arg0: number): IntStream;
    ints(arg0: number, arg1: number, arg2: number): IntStream;
    isDeprecated(): boolean;
    longs(): LongStream;
    longs(arg0: number): LongStream;
    longs(arg0: number, arg1: number): LongStream;
    longs(arg0: number, arg1: number, arg2: number): LongStream;
    longs(): LongStream;
    longs(arg0: number): LongStream;
    longs(arg0: number, arg1: number): LongStream;
    longs(arg0: number, arg1: number, arg2: number): LongStream;
    next(arg0: number): number;
    nextBoolean(): boolean;
    nextBoolean(): boolean;
    nextBytes(arg0: number[]): void;
    nextBytes(arg0: number[]): void;
    nextDouble(): number;
    nextDouble(): number;
    nextDouble(arg0: number): number;
    nextDouble(arg0: number, arg1: number): number;
    nextExponential(): number;
    nextFloat(): number;
    nextFloat(): number;
    nextFloat(arg0: number): number;
    nextFloat(arg0: number, arg1: number): number;
    nextGaussian(): number;
    nextGaussian(): number;
    nextGaussian(arg0: number, arg1: number): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextInt(arg0: number, arg1: number): number;
    nextLong(): number;
    nextLong(arg0: number): number;
    nextLong(arg0: number, arg1: number): number;
    // private readObject(arg0: ObjectInputStream): void;
    // private resetSeed(arg0: number): void;
    setSeed(arg0: number): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}