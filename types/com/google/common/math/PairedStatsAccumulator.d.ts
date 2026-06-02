import type { LinearTransformation } from '../../../../com/google/common/math/LinearTransformation.d.ts'
import type { PairedStats } from '../../../../com/google/common/math/PairedStats.d.ts'
import type { Stats } from '../../../../com/google/common/math/Stats.d.ts'
import type { StatsAccumulator } from '../../../../com/google/common/math/StatsAccumulator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PairedStatsAccumulator extends Object {
    constructor()
    // private sumOfProductsOfDeltas: number;
    // private xStats: StatsAccumulator;
    // private yStats: StatsAccumulator;
    add(x: number, y: number): void;
    addAll(values: PairedStats): void;
    count(): number;
    leastSquaresFit(): LinearTransformation;
    pearsonsCorrelationCoefficient(): number;
    populationCovariance(): number;
    sampleCovariance(): number;
    snapshot(): PairedStats;
    xStats(): Stats;
    yStats(): Stats;
}