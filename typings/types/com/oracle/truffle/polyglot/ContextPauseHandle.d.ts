import type { PauseThreadLocalAction } from '../../../../com/oracle/truffle/polyglot/PauseThreadLocalAction.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ContextPauseHandle extends Object implements Future<void> {
    constructor(pauseThreadLocalAction: PauseThreadLocalAction, pauseActionFuture: Future<void>)
    readonly cancelled: boolean;
    // private pauseActionFuture: Future<void>;
    // private pauseThreadLocalAction: PauseThreadLocalAction;
    cancel(mayInterruptIfRunning: boolean): boolean;
    exceptionNow(): Throwable;
    get(): void;
    get(timeout: number, unit: TimeUnit): void;
    isCancelled(): boolean;
    isDone(): boolean;
    resultNow<V extends Object | number | string | boolean>(): V;
    resume(): void;
    state(): Future$State;
}