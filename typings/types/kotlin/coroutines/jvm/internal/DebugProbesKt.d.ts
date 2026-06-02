import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class DebugProbesKt extends Object {
    static probeCoroutineCreated(paramarg0: Continuation<Object>): Continuation<Object>;
    static probeCoroutineResumed(paramarg0: Continuation<Object>): void;
    static probeCoroutineSuspended(paramarg0: Continuation<Object>): void;
}