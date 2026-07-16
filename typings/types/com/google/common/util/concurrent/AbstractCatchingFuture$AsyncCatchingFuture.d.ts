import type { AbstractCatchingFuture } from '../../../../../com/google/common/util/concurrent/AbstractCatchingFuture.d.ts'
import type { AsyncFunction } from '../../../../../com/google/common/util/concurrent/AsyncFunction.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class AbstractCatchingFuture$AsyncCatchingFuture<V extends unknown, X extends Throwable> extends AbstractCatchingFuture<V, X, (param0: X) => ListenableFuture<V>, ListenableFuture<V>> {
    static from<V extends unknown>(paramfuture: FluentFuture<V>): FluentFuture<V>;
    static from<V extends unknown>(paramfuture: ListenableFuture<V>): FluentFuture<V>;
    constructor(input: ListenableFuture<V>, exceptionType: Class<X>, fallback: (param0: X) => ListenableFuture<V>)
    doFallback(fallback: (param0: X) => ListenableFuture<V>, cause: X): ListenableFuture<V>;
    setResult(result: ListenableFuture<V>): void;
}