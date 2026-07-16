import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EyeMeasurement } from '../../../../../../net/ccbluex/liquidbounce/utils/world/stronghold/EyeMeasurement.d.ts'
import type { PosteriorSnapshot } from '../../../../../../net/ccbluex/liquidbounce/utils/world/stronghold/PosteriorSnapshot.d.ts'
import type { StrongholdHypothesis } from '../../../../../../net/ccbluex/liquidbounce/utils/world/stronghold/StrongholdHypothesis.d.ts'
export class StrongholdBayesianEstimator extends Object {
    static INSTANCE: StrongholdBayesianEstimator;
    static estimate(measurements: EyeMeasurement[], hypotheses: StrongholdHypothesis[], sigmaDeg: number, requireSameStrongholdAcrossThrows: boolean, topCandidates: number): PosteriorSnapshot | null;
    // private angleToYaw(fromX: number, fromZ: number, toX: number, toZ: number): number;
    // private chunkCenter(coordinate: number): number;
    estimate(measurements: EyeMeasurement[], hypotheses: StrongholdHypothesis[], sigmaDeg: number, requireSameStrongholdAcrossThrows: boolean, topCandidates: number): PosteriorSnapshot | null;
    // private nearestStrongholdIndex(hypothesis: StrongholdHypothesis, throwX: number, throwZ: number): number;
}