import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { AbstractExecutorService } from '../../../java/util/concurrent/AbstractExecutorService.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { CompletionService } from '../../../java/util/concurrent/CompletionService.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { RunnableFuture } from '../../../java/util/concurrent/RunnableFuture.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ExecutorCompletionService<V extends unknown> extends Object implements CompletionService<V> {
    constructor(arg0: Executor)
    constructor(arg0: Executor, arg1: Future<V>[])
    // private aes: AbstractExecutorService;
    // private completionQueue: Future<V>[];
    // private executor: Executor;
    // private newTaskFor(arg0: () => void, arg1: V): RunnableFuture<V>;
    // private newTaskFor(arg0: () => V): RunnableFuture<V>;
    poll(): Future<V>;
    poll(arg0: number, arg1: TimeUnit): Future<V>;
    submit(arg0: () => void, arg1: V): Future<V>;
    submit(arg0: () => V): Future<V>;
    take(): Future<V>;
}