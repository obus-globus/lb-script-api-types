import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class IntrinsicsKt__IntrinsicsJvmKt extends Object {
    static createCoroutineUnintercepted<R extends unknown, T extends unknown>(self: (param0: R) => T, receiver: R, completion: Continuation<T>): Continuation<void>;
    static createCoroutineUnintercepted<T extends unknown>(self: () => T, completion: Continuation<T>): Continuation<void>;
    static intercepted<T extends unknown>(self: Continuation<T>): Continuation<T>;
    static wrapWithContinuationImpl<R extends unknown, P extends unknown, T extends unknown>(self: (param0: R, param1: P) => T, receiver: R, param: P, completion: Continuation<T>): Object | null;
    static wrapWithContinuationImpl<R extends unknown, T extends unknown>(self: (param0: R) => T, receiver: R, completion: Continuation<T>): Object | null;
    static wrapWithContinuationImpl<T extends unknown>(self: () => T, completion: Continuation<T>): Object | null;
}