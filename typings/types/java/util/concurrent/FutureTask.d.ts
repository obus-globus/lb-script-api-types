import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { Future$State } from '../../../java/util/concurrent/Future$State.d.ts'
import type { FutureTask$WaitNode } from '../../../java/util/concurrent/FutureTask$WaitNode.d.ts'
import type { RunnableFuture } from '../../../java/util/concurrent/RunnableFuture.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class FutureTask<V extends unknown> extends Object implements RunnableFuture<V> {
    constructor(arg0: () => void, arg1: V)
    constructor(arg0: () => V)
    // private callable: () => V;
    // private outcome: Object;
    // private runner: Thread;
    // private state: number;
    // private waiters: FutureTask$WaitNode;
    // private awaitDone(arg0: boolean, arg1: number): number;
    cancel(arg0: boolean): boolean;
    done(): void;
    exceptionNow(): Throwable;
    // private finishCompletion(): void;
    get(): V;
    get(arg0: number, arg1: TimeUnit): V;
    // private handlePossibleCancellationInterrupt(arg0: number): void;
    isCancelled(): boolean;
    isDone(): boolean;
    // private removeWaiter(arg0: FutureTask$WaitNode): void;
    // private report(arg0: number): V;
    resultNow(): V;
    run(): void;
    runAndReset(): boolean;
    set(arg0: V): void;
    setException(arg0: Throwable): void;
    state(): Future$State;
    toString(): string;
}