import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class IntrinsicsKt__IntrinsicsJvmKt extends Object {
    static createCoroutineUnintercepted(paramarg0: (param0: Object, param1: Object) => Object, paramarg1: Object | null, paramarg2: Continuation<Object>): Continuation<void>;
    static createCoroutineUnintercepted(paramarg0: (param0: Object) => Object, paramarg1: Continuation<Object>): Continuation<void>;
    static intercepted(paramarg0: Continuation<Object>): Continuation<Object>;
    static wrapWithContinuationImpl(paramarg0: (param0: Object, param1: Object, param2: Object) => Object, paramarg1: Object | null, paramarg2: Object | null, paramarg3: Continuation<Object>): Object;
    static wrapWithContinuationImpl(paramarg0: (param0: Object, param1: Object) => Object, paramarg1: Object | null, paramarg2: Continuation<Object>): Object;
    static wrapWithContinuationImpl(paramarg0: (param0: Object) => Object, paramarg1: Continuation<Object>): Object;
}