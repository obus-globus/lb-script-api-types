import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { ExecutionSequencer$ThreadConfinedTaskQueue } from '../../../../../com/google/common/util/concurrent/ExecutionSequencer$ThreadConfinedTaskQueue.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExecutionSequencer extends Object {
    static create(): ExecutionSequencer;
    private constructor()
    // private latestTaskQueue: ExecutionSequencer$ThreadConfinedTaskQueue;
    // private ref: AtomicReference<ListenableFuture<void>>;
    submit(callable: () => T, executor: Executor): ListenableFuture<T>;
    submitAsync(callable: () => T, executor: Executor): ListenableFuture<T>;
}