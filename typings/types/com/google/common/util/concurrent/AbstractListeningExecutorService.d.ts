import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { ListeningExecutorService } from '../../../../../com/google/common/util/concurrent/ListeningExecutorService.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { AbstractExecutorService } from '../../../../../java/util/concurrent/AbstractExecutorService.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { RunnableFuture } from '../../../../../java/util/concurrent/RunnableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractListeningExecutorService extends AbstractExecutorService implements ListeningExecutorService {
    constructor()
    awaitTermination(timeout: Duration): boolean;
    invokeAll<T extends Object | number | string | boolean>(tasks: () => T[], timeout: Duration): Future<T>[];
    invokeAny<T extends Object | number | string | boolean>(tasks: () => T[], timeout: Duration): T;
    newTaskFor<T extends Object | number | string | boolean>(runnable: () => void, value: T): RunnableFuture<T>;
    newTaskFor<T extends Object | number | string | boolean>(callable: () => T): RunnableFuture<T>;
    submit(task: () => void): ListenableFuture<Object>;
    submit<T extends Object | number | string | boolean>(task: () => void, result: T): ListenableFuture<T>;
    submit<T extends Object | number | string | boolean>(task: () => T): ListenableFuture<T>;
}