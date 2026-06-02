import type { RlAgent } from '../../../../../ai/djl/modality/rl/agent/RlAgent.d.ts'
import type { RlEnv } from '../../../../../ai/djl/modality/rl/env/RlEnv.d.ts'
import type { RlEnv$Step } from '../../../../../ai/djl/modality/rl/env/RlEnv$Step.d.ts'
import type { Tracker } from '../../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EpsilonGreedy extends Object implements RlAgent {
    constructor(arg0: RlAgent, arg1: Tracker)
    // private baseAgent: RlAgent;
    // private counter: number;
    // private exploreRate: Tracker;
    chooseAction(arg0: RlEnv, arg1: boolean): (Object | null)[];
    trainBatch(arg0: RlEnv$Step[]): void;
}