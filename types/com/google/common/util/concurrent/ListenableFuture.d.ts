import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../../../java/util/concurrent/Future$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface ListenableFuture<V extends Object | number | string | boolean> extends Future<V>, Object{
    addListener(listener: () => void, executor: Executor): void;
    exceptionNow(): Throwable;
    resultNow(): V;
    state(): Future$State;
}