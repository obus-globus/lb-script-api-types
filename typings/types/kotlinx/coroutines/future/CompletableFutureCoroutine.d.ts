import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AbstractCoroutine } from '../../../kotlinx/coroutines/AbstractCoroutine.d.ts'
import type { Job$Key } from '../../../kotlinx/coroutines/Job$Key.d.ts'
export class CompletableFutureCoroutine<T extends Object | number | string | boolean> extends AbstractCoroutine<T> implements BiFunction<T, Throwable, void> {
    static Key: Job$Key;
    constructor(context: CoroutineContext, future: CompletableFuture<T>)
    // private future: CompletableFuture<T>;
    andThen<V extends Object | number | string | boolean>(arg0: (param0: void) => V): (param0: T | null, param1: Throwable | null) => V;
    apply(value: T | null, exception: Throwable | null): void;
    protected onCancelled(cause: Throwable, handled: boolean): void;
    protected onCompleted(value: T): void;
}