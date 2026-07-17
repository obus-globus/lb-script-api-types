import type { Object } from '../java/lang/Object.d.ts'
import type { Continuation } from '../kotlin/coroutines/Continuation.d.ts'
export class DeepRecursiveScope<T extends unknown, R extends unknown> extends Object {
    protected constructor()
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    callRecursive(value: T, $completion: Continuation<R>): any;
}