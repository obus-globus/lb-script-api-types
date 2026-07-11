import type { StatsAccumulator } from '../../../../com/google/common/math/StatsAccumulator.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { DoubleStream } from '../../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Stats extends Object implements Serializable {
    static fromByteArray(parambyteArray: number[]): Stats;
    static meanOf(...paramvalues: number[]): number;
    static meanOf(...paramvalues: number[]): number;
    static meanOf(paramvalues: Number[]): number;
    static meanOf(paramvalues: Iterator<Number>): number;
    static meanOf(...paramvalues: number[]): number;
    static of(...paramvalues: number[]): Stats;
    static of(...paramvalues: number[]): Stats;
    static of(paramvalues: Number[]): Stats;
    static of(paramvalues: Iterator<Number>): Stats;
    static of(paramvalues: DoubleStream): Stats;
    static of(paramvalues: IntStream): Stats;
    static of(paramvalues: LongStream): Stats;
    static of(...paramvalues: number[]): Stats;
    static toStats(): Collector<Number, StatsAccumulator, Stats>;
    constructor(count: number, mean: number, sumOfSquaresOfDeltas: number, min: number, max: number)
    // private count: number;
    // private max: number;
    // private mean: number;
    // private min: number;
    // private sumOfSquaresOfDeltas: number;
    count(): number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    max(): number;
    mean(): number;
    min(): number;
    populationStandardDeviation(): number;
    populationVariance(): number;
    sampleStandardDeviation(): number;
    sampleVariance(): number;
    sum(): number;
    sumOfSquaresOfDeltas(): number;
    toByteArray(): number[];
    toString(): string;
    writeTo(buffer: ByteBuffer): void;
}