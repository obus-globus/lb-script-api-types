import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StrongholdHypothesis } from '../../../../../../net/ccbluex/liquidbounce/utils/world/stronghold/StrongholdHypothesis.d.ts'
export class StrongholdHypothesisGenerator extends Object {
    static INSTANCE: StrongholdHypothesisGenerator;
    static generate(paramarg0: number, paramarg1: number): StrongholdHypothesis[];
    static ringDistribution(paramarg0: number, paramarg1: number): number[];
    generate(hypothesisCount: number, seed: number): StrongholdHypothesis[];
    // private generateSingle(seed: number): StrongholdHypothesis;
    ringDistribution(spread: number, count: number): number[];
}