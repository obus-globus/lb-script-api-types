import type { Stats } from '../../../../com/google/common/math/Stats.d.ts'
import type { DoubleStream } from '../../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class StatsAccumulator extends Object {
    constructor()
    // private count: number;
    // private max: number;
    // private mean: number;
    // private min: number;
    // private sumOfSquaresOfDeltas: number;
    add(value: number): void;
    addAll(values: Stats): void;
    addAll(values: StatsAccumulator): void;
    addAll(values: DoubleStream): void;
    addAll(values: IntStream): void;
    addAll(values: LongStream): void;
    addAll(...values: number[]): void;
    addAll(values: Number[]): void;
    addAll(values: Iterator<Number>): void;
    count(): number;
    max(): number;
    mean(): number;
    // private merge(otherCount: number, otherMean: number, otherSumOfSquaresOfDeltas: number, otherMin: number, otherMax: number): void;
    min(): number;
    populationStandardDeviation(): number;
    populationVariance(): number;
    sampleStandardDeviation(): number;
    sampleVariance(): number;
    snapshot(): Stats;
    sum(): number;
    sumOfSquaresOfDeltas(): number;
}