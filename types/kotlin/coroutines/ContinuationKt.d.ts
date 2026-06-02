import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
export class ContinuationKt extends Object {
    static createCoroutine(paramarg0: Function2<Object, Object, Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): Continuation<void>;
    static createCoroutine(paramarg0: Function1<Object, Object>, paramarg1: Continuation<Object>): Continuation<void>;
    static startCoroutine(paramarg0: Function2<Object, Object, Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): void;
    static startCoroutine(paramarg0: Function1<Object, Object>, paramarg1: Continuation<Object>): void;
}