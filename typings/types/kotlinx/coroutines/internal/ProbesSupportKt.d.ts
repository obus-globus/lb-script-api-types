import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class ProbesSupportKt extends Object {
    static probeCoroutineCreated<T extends unknown>(completion: Continuation<T>): Continuation<T>;
    static probeCoroutineResumed<T extends unknown>(completion: Continuation<T>): void;
}