import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class CancellableKt extends Object {
    static startCoroutineCancellable<R extends unknown, T extends unknown>(self: (param0: R) => T, receiver: R, completion: Continuation<T>): void;
    static startCoroutineCancellable<T extends unknown>(self: () => T, completion: Continuation<T>): void;
    static startCoroutineCancellable(self: Continuation<void>, fatalCompletion: Continuation<Object>): void;
}