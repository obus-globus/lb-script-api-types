import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Result } from '../../kotlin/Result.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { SequenceScope } from '../../kotlin/sequences/SequenceScope.d.ts'
export class SequenceBuilderIterator<T extends Object | number | string | boolean> extends SequenceScope<T> implements Iterator<T>, Continuation<void> {
    constructor()
    readonly context: CoroutineContext;
    // private nextIterator: Iterator<T> | null;
    nextStep: Continuation<void> | null;
    // private nextValue: T | null;
    // private state: number;
    // private exceptionalState(): Throwable;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    // private nextNotReady(): T;
    resumeWith(result: Result<void>): void;
    yield(value: T): void;
    yieldAll(iterator: Iterator<T>): void;
}