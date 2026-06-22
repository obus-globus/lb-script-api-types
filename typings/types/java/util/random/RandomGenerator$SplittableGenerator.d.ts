import type { RandomGenerator } from '../../../java/util/random/RandomGenerator.d.ts'
import type { RandomGenerator$StreamableGenerator } from '../../../java/util/random/RandomGenerator$StreamableGenerator.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RandomGenerator$SplittableGenerator extends RandomGenerator$StreamableGenerator, Object{
    nextLong(): number;
    rngs(): Stream<RandomGenerator>;
    rngs(arg0: number): Stream<RandomGenerator>;
    split(): RandomGenerator$SplittableGenerator;
    split(arg0: RandomGenerator$SplittableGenerator): RandomGenerator$SplittableGenerator;
    splits(): Stream<RandomGenerator$SplittableGenerator>;
    splits(arg0: RandomGenerator$SplittableGenerator): Stream<RandomGenerator$SplittableGenerator>;
    splits(arg0: number): Stream<RandomGenerator$SplittableGenerator>;
    splits(arg0: number, arg1: RandomGenerator$SplittableGenerator): Stream<RandomGenerator$SplittableGenerator>;
}