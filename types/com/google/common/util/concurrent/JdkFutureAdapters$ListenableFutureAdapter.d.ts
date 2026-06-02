import type { ExecutionList } from '../../../../../com/google/common/util/concurrent/ExecutionList.d.ts'
import type { ForwardingFuture } from '../../../../../com/google/common/util/concurrent/ForwardingFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JdkFutureAdapters$ListenableFutureAdapter<V extends Object | number | string | boolean> extends ForwardingFuture<V> implements ListenableFuture<V> {
    constructor(delegate: Future<V>)
    constructor(delegate: Future<V>, adapterExecutor: Executor)
    // private adapterExecutor: Executor;
    // private delegate: Future<V>;
    // private executionList: ExecutionList;
    // private hasListeners: AtomicBoolean;
    addListener(listener: () => void, exec: Executor): void;
    delegate(): Future<V>;
}