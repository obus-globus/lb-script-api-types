import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { IntrinsicsKt__IntrinsicsJvmKt } from '../../../kotlin/coroutines/intrinsics/IntrinsicsKt__IntrinsicsJvmKt.d.ts'
export class IntrinsicsKt__IntrinsicsKt extends IntrinsicsKt__IntrinsicsJvmKt {
    static createCoroutineUnintercepted(paramarg0: (param0: Object | null, param1: Object | null) => Object | null, paramarg1: Object | null, paramarg2: Continuation<Object>): Continuation<void>;
    static createCoroutineUnintercepted(paramarg0: (param0: Object | null) => Object | null, paramarg1: Continuation<Object>): Continuation<void>;
    static getCOROUTINE_SUSPENDED(): Object;
    static intercepted(paramarg0: Continuation<Object>): Continuation<Object>;
    static wrapWithContinuationImpl(paramarg0: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null, paramarg1: Object | null, paramarg2: Object | null, paramarg3: Continuation<Object>): Object;
    static wrapWithContinuationImpl(paramarg0: (param0: Object | null, param1: Object | null) => Object | null, paramarg1: Object | null, paramarg2: Continuation<Object>): Object;
    static wrapWithContinuationImpl(paramarg0: (param0: Object | null) => Object | null, paramarg1: Continuation<Object>): Object;
}