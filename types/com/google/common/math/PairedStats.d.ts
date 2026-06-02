import type { LinearTransformation } from '../../../../com/google/common/math/LinearTransformation.d.ts'
import type { Stats } from '../../../../com/google/common/math/Stats.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PairedStats extends Object implements Serializable {
    static fromByteArray(parambyteArray: number[]): PairedStats;
    constructor(xStats: Stats, yStats: Stats, sumOfProductsOfDeltas: number)
    // private sumOfProductsOfDeltas: number;
    // private xStats: Stats;
    // private yStats: Stats;
    count(): number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    leastSquaresFit(): LinearTransformation;
    pearsonsCorrelationCoefficient(): number;
    populationCovariance(): number;
    sampleCovariance(): number;
    sumOfProductsOfDeltas(): number;
    toByteArray(): number[];
    toString(): string;
    xStats(): Stats;
    yStats(): Stats;
}