import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { RandomGenerator } from '../../../../java/util/random/RandomGenerator.d.ts'
import type { RandomGenerator$SplittableGenerator } from '../../../../java/util/random/RandomGenerator$SplittableGenerator.d.ts'
import type { DoubleStream } from '../../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { RandomSupport$AbstractSpliteratorGenerator } from '../../../../jdk/internal/util/random/RandomSupport$AbstractSpliteratorGenerator.d.ts'
export abstract class RandomSupport$AbstractSplittableGenerator extends RandomSupport$AbstractSpliteratorGenerator implements RandomGenerator$SplittableGenerator {
    static doubles(paramarg0: RandomGenerator): DoubleStream;
    static doubles(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number): DoubleStream;
    static doubles(paramarg0: RandomGenerator, paramarg1: number): DoubleStream;
    static doubles(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number, paramarg3: number): DoubleStream;
    static ints(paramarg0: RandomGenerator): IntStream;
    static ints(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number): IntStream;
    static ints(paramarg0: RandomGenerator, paramarg1: number): IntStream;
    static ints(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number, paramarg3: number): IntStream;
    static longs(paramarg0: RandomGenerator): LongStream;
    static longs(paramarg0: RandomGenerator, paramarg1: number): LongStream;
    static longs(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number): LongStream;
    static longs(paramarg0: RandomGenerator, paramarg1: number, paramarg2: number, paramarg3: number): LongStream;
    static of(paramarg0: string): RandomGenerator$SplittableGenerator;
    constructor()
    makeSplitsSpliterator(arg0: number, arg1: number, arg2: RandomGenerator$SplittableGenerator): Spliterator<RandomGenerator$SplittableGenerator>;
    rngs(): Stream<RandomGenerator>;
    rngs(arg0: number): Stream<RandomGenerator>;
    split(): RandomGenerator$SplittableGenerator;
    splits(): Stream<RandomGenerator$SplittableGenerator>;
    splits(arg0: RandomGenerator$SplittableGenerator): Stream<RandomGenerator$SplittableGenerator>;
    splits(arg0: number): Stream<RandomGenerator$SplittableGenerator>;
    splits(arg0: number, arg1: RandomGenerator$SplittableGenerator): Stream<RandomGenerator$SplittableGenerator>;
}