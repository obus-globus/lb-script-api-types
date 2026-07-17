import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export abstract class SequenceScope<T extends unknown> extends Object {
    constructor()
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    yield(value: T, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    yieldAll(elements: T[], $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    yieldAll(iterator: Iterator<T>, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    yieldAll(sequence: Sequence<T>, $completion: Continuation<void>): any;
}