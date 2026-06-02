import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { FluentFuture$TrustedFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture$TrustedFuture.d.ts'
import type { InterruptibleTask } from '../../../../../com/google/common/util/concurrent/InterruptibleTask.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { RunnableFuture } from '../../../../../java/util/concurrent/RunnableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TrustedListenableFutureTask<V extends Object | number | string | boolean> extends FluentFuture$TrustedFuture<V> implements RunnableFuture<V> {
    static from(paramfuture: FluentFuture<Object>): FluentFuture<Object>;
    static from(paramfuture: ListenableFuture<Object>): FluentFuture<Object>;
    constructor(callable: () => V)
    constructor(callable: () => V)
    // private task: InterruptibleTask<Object>;
    afterDone(): void;
    pendingToString(): string;
    run(): void;
}