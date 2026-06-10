import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotThreadLocalActions$RecurringFuture extends Object implements Future<void> {
    constructor(f: Future<void>)
    cancelled: boolean;
    // private currentFuture: Future<void>;
    // private firstFuture: Future<void>;
    cancel(mayInterruptIfRunning: boolean): boolean;
    exceptionNow(): Throwable;
    get(): void;
    get(timeout: number, unit: TimeUnit): void;
    getCurrentFuture(): Future<void>;
    isCancelled(): boolean;
    isDone(): boolean;
    resultNow(): void;
    setCurrentFuture(currentFuture: Future<void>): void;
    state(): Future$State;
}