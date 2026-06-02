import type { RlEnv } from '../../../../../ai/djl/modality/rl/env/RlEnv.d.ts'
import type { RlEnv$Step } from '../../../../../ai/djl/modality/rl/env/RlEnv$Step.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RlAgent extends Object{
    chooseAction(arg0: RlEnv, arg1: boolean): (Object | null)[];
    trainBatch(arg0: RlEnv$Step[]): void;
}