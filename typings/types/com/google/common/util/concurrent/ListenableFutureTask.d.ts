import type { ExecutionList } from '../../../../../com/google/common/util/concurrent/ExecutionList.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { FutureTask } from '../../../../../java/util/concurrent/FutureTask.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ListenableFutureTask<V extends unknown> extends FutureTask<V> implements ListenableFuture<V> {
    static create(paramrunnable: () => void, paramresult: Object | null): ListenableFutureTask<Object>;
    static create(paramcallable: () => Object | null): ListenableFutureTask<Object>;
    constructor(runnable: () => void, result: V)
    constructor(callable: () => V)
    // private executionList: ExecutionList;
    addListener(listener: () => void, exec: Executor): void;
    done(): void;
    get(): V;
    get(timeout: number, unit: TimeUnit): V;
}