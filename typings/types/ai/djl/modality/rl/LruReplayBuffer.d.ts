import type { ReplayBuffer } from '../../../../ai/djl/modality/rl/ReplayBuffer.d.ts'
import type { RlEnv$Step } from '../../../../ai/djl/modality/rl/env/RlEnv$Step.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LruReplayBuffer extends Object implements ReplayBuffer {
    constructor(arg0: number, arg1: number)
    // private batchSize: number;
    // private firstStepIndex: number;
    // private steps: RlEnv$Step[];
    // private stepsActualSize: number;
    addStep(arg0: RlEnv$Step): void;
    getBatch(): RlEnv$Step[];
}