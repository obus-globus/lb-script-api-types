import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StrongholdHypothesis } from '../../../../../../net/ccbluex/liquidbounce/utils/world/stronghold/StrongholdHypothesis.d.ts'
export class StrongholdHypothesisGenerator extends Object {
    static INSTANCE: StrongholdHypothesisGenerator;
    static generate(hypothesisCount: number, seed: number): StrongholdHypothesis[];
    static ringDistribution(spread: number, count: number): number[];
    generate(hypothesisCount: number, seed: number): StrongholdHypothesis[];
    // private generateSingle(seed: number): StrongholdHypothesis;
    ringDistribution(spread: number, count: number): number[];
}