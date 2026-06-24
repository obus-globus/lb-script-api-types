import type { SplittableRandom } from '../../java/util/SplittableRandom.d.ts'
import type { RandomGenerator } from '../../java/util/random/RandomGenerator.d.ts'
import type { RandomGenerator$SplittableGenerator } from '../../java/util/random/RandomGenerator$SplittableGenerator.d.ts'
import type { DoubleStream } from '../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../java/util/stream/LongStream.d.ts'
import type { RandomSupport$AbstractSplittableGenerator } from '../../jdk/internal/util/random/RandomSupport$AbstractSplittableGenerator.d.ts'
export class SplittableRandom$AbstractSplittableGeneratorProxy extends RandomSupport$AbstractSplittableGenerator {
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
    private constructor(null_: SplittableRandom)
    nextInt(): number;
    nextInt(arg0: number): number;
    nextInt(arg0: number, arg1: number): number;
    nextLong(): number;
    nextLong(arg0: number): number;
    nextLong(arg0: number, arg1: number): number;
    split(): RandomGenerator$SplittableGenerator;
    split(arg0: RandomGenerator$SplittableGenerator): SplittableRandom;
}