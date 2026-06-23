import type { Function } from '../../../../../com/google/common/base/Function.d.ts'
import type { AbstractCatchingFuture } from '../../../../../com/google/common/util/concurrent/AbstractCatchingFuture.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class AbstractCatchingFuture$CatchingFuture<V extends unknown, X extends Throwable> extends AbstractCatchingFuture<V, X, (param0: Object) => boolean, V> {
    static from(paramfuture: FluentFuture<Object>): FluentFuture<Object>;
    static from(paramfuture: ListenableFuture<Object>): FluentFuture<Object>;
    constructor(input: ListenableFuture<V>, exceptionType: Class<X>, fallback: (param0: Object) => boolean)
    doFallback(fallback: (param0: Object) => boolean, cause: X): V;
    setResult(result: V): void;
}