import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { ListeningExecutorService } from '../../../../../com/google/common/util/concurrent/ListeningExecutorService.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { AbstractExecutorService } from '../../../../../java/util/concurrent/AbstractExecutorService.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { RunnableFuture } from '../../../../../java/util/concurrent/RunnableFuture.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractListeningExecutorService extends AbstractExecutorService implements ListeningExecutorService {
    constructor()
    awaitTermination(timeout: Duration): boolean;
    awaitTermination(arg0: number, arg1: TimeUnit): boolean;
    execute(arg0: () => void): void;
    invokeAll<T extends unknown>(tasks: () => T[], timeout: Duration): Future<T>[];
    invokeAny<T extends unknown>(tasks: () => T[], timeout: Duration): T;
    isShutdown(): boolean;
    isTerminated(): boolean;
    newTaskFor<T extends unknown>(runnable: () => void, value: T): RunnableFuture<T>;
    newTaskFor<T extends unknown>(callable: () => T): RunnableFuture<T>;
    shutdown(): void;
    submit(task: () => void): ListenableFuture<Object>;
    submit<T extends unknown>(task: () => void, result: T): ListenableFuture<T>;
    submit<T extends unknown>(task: () => T): ListenableFuture<T>;
}