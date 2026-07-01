import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Futures$FutureCombiner<V extends unknown> extends Object {
    constructor(arg0: boolean, arg1: Object[], arg2: Future<O>)
    // private allMustSucceed: boolean;
    // private futures: ListenableFuture<V>[];
    call<C extends unknown>(combiner: () => C, executor: Executor): ListenableFuture<C>;
    callAsync<C extends unknown>(combiner: () => ListenableFuture<C>, executor: Executor): ListenableFuture<C>;
    run(combiner: () => void, executor: Executor): ListenableFuture<Object>;
}