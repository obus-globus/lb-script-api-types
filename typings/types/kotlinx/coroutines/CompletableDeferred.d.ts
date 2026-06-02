import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
export interface CompletableDeferred<T extends Object | number | string | boolean> extends Object, Deferred<T>{
    complete(value: T): boolean;
    completeExceptionally(exception: Throwable): boolean;
}