import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { IntrinsicsKt__IntrinsicsJvmKt } from '../../../kotlin/coroutines/intrinsics/IntrinsicsKt__IntrinsicsJvmKt.d.ts'
export class IntrinsicsKt__IntrinsicsKt extends IntrinsicsKt__IntrinsicsJvmKt {
    static createCoroutineUnintercepted<R extends unknown, T extends unknown>(self: (param0: R) => T, receiver: R, completion: Continuation<T>): Continuation<void>;
    static createCoroutineUnintercepted<T extends unknown>(self: () => T, completion: Continuation<T>): Continuation<void>;
    static getCOROUTINE_SUSPENDED(): Object;
    static intercepted<T extends unknown>(self: Continuation<T>): Continuation<T>;
    static wrapWithContinuationImpl<R extends unknown, P extends unknown, T extends unknown>(self: (param0: R, param1: P) => T, receiver: R, param: P, completion: Continuation<T>): Object | null;
    static wrapWithContinuationImpl<R extends unknown, T extends unknown>(self: (param0: R) => T, receiver: R, completion: Continuation<T>): Object | null;
    static wrapWithContinuationImpl<T extends unknown>(self: () => T, completion: Continuation<T>): Object | null;
}