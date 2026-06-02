import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class IntrinsicsKt__IntrinsicsJvmKt extends Object {
    static createCoroutineUnintercepted(paramarg0: Function2<Object, Object, Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): Continuation<void>;
    static createCoroutineUnintercepted(paramarg0: Function1<Object, Object>, paramarg1: Continuation<Object>): Continuation<void>;
    static intercepted(paramarg0: Continuation<Object>): Continuation<Object>;
    static wrapWithContinuationImpl(paramarg0: Function3<Object, Object, Object, Object>, paramarg1: Object | null, paramarg2: Object | null, paramarg3: Continuation<Object>): Object;
    static wrapWithContinuationImpl(paramarg0: Function2<Object, Object, Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): Object;
    static wrapWithContinuationImpl(paramarg0: Function1<Object, Object>, paramarg1: Continuation<Object>): Object;
}