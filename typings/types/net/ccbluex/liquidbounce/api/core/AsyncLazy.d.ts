import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { KProperty } from '../../../../../kotlin/reflect/KProperty.d.ts'
import type { AtomicBoolean } from '../../../../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { CompletableDeferred } from '../../../../../kotlinx/coroutines/CompletableDeferred.d.ts'
export class AsyncLazy<T extends unknown> extends Object {
    constructor(initializer: () => T)
    // private deferred: CompletableDeferred<T>;
    // private initialized: AtomicBoolean;
    // private initializer: () => T;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    get($completion: Continuation<T>): any;
    getValue(thisRef: Object | null, property: KProperty<Object>): T;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private initialize($completion: Continuation<void>): any;
}