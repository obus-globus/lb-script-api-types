import type { RlAgent } from '../../../../../ai/djl/modality/rl/agent/RlAgent.d.ts'
import type { RlEnv$Step } from '../../../../../ai/djl/modality/rl/env/RlEnv$Step.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RlEnv extends AutoCloseable, Object{
    close(): void;
    getActionSpace(): (Object | null)[];
    getBatch(): RlEnv$Step[];
    getObservation(): (Object | null)[];
    reset(): void;
    runEnvironment(arg0: RlAgent, arg1: boolean): number;
    step(arg0: (Object | null)[], arg1: boolean): RlEnv$Step;
}