import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class CancellableKt extends Object {
    static startCoroutineCancellable(paramarg0: (param0: Object, param1: Object) => Object, paramarg1: Object | null, paramarg2: Continuation<Object>): void;
    static startCoroutineCancellable(paramarg0: (param0: Object) => Object, paramarg1: Continuation<Object>): void;
    static startCoroutineCancellable(paramarg0: Continuation<Object>, paramarg1: Continuation<Object>): void;
}