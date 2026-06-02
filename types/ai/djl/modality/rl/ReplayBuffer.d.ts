import type { RlEnv$Step } from '../../../../ai/djl/modality/rl/env/RlEnv$Step.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReplayBuffer extends Object{
    addStep(arg0: RlEnv$Step): void;
    getBatch(): RlEnv$Step[];
}