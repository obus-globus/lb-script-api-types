import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../java/util/concurrent/Future$State.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface RunnableFuture<V extends Object | number | string | boolean> extends Runnable, Future<V>, Object{
    exceptionNow(): Throwable;
    resultNow(): V;
    run(): void;
    state(): Future$State;
}