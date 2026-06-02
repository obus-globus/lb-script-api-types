import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DecisionInfo } from '../../../../../org/antlr/v4/runtime/atn/DecisionInfo.d.ts'
import type { ProfilingATNSimulator } from '../../../../../org/antlr/v4/runtime/atn/ProfilingATNSimulator.d.ts'
export class ParseInfo extends Object {
    constructor(arg0: ProfilingATNSimulator)
    // private atnSimulator: ProfilingATNSimulator;
    getDFASize(): number;
    getDFASize(arg0: number): number;
    getDecisionInfo(): DecisionInfo[];
    getLLDecisions(): number[];
    getTotalATNLookaheadOps(): number;
    getTotalLLATNLookaheadOps(): number;
    getTotalLLLookaheadOps(): number;
    getTotalSLLATNLookaheadOps(): number;
    getTotalSLLLookaheadOps(): number;
    getTotalTimeInPrediction(): number;
}