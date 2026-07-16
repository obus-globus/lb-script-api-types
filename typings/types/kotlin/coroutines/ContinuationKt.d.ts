import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
export class ContinuationKt extends Object {
    static createCoroutine<R extends unknown, T extends unknown>(self: (param0: R) => T, receiver: R, completion: Continuation<T>): Continuation<void>;
    static createCoroutine<T extends unknown>(self: () => T, completion: Continuation<T>): Continuation<void>;
    static startCoroutine<R extends unknown, T extends unknown>(self: (param0: R) => T, receiver: R, completion: Continuation<T>): void;
    static startCoroutine<T extends unknown>(self: () => T, completion: Continuation<T>): void;
}