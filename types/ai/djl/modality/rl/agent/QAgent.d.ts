import type { RlAgent } from '../../../../../ai/djl/modality/rl/agent/RlAgent.d.ts'
import type { RlEnv } from '../../../../../ai/djl/modality/rl/env/RlEnv.d.ts'
import type { RlEnv$Step } from '../../../../../ai/djl/modality/rl/env/RlEnv$Step.d.ts'
import type { Trainer } from '../../../../../ai/djl/training/Trainer.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class QAgent extends Object implements RlAgent {
    constructor(arg0: Trainer, arg1: number)
    constructor(arg0: Trainer, arg1: number, arg2: Batchifier)
    // private batchifier: Batchifier;
    // private rewardDiscount: number;
    // private trainer: Trainer;
    // private buildInputs(arg0: (Object | null)[], arg1: (Object | null)[][]): (Object | null)[][];
    chooseAction(arg0: RlEnv, arg1: boolean): (Object | null)[];
    trainBatch(arg0: RlEnv$Step[]): void;
}