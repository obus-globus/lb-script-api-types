import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ListeningExecutorService extends ExecutorService, Object{
    awaitTermination(timeout: Duration): boolean;
    close(): void;
    invokeAll(tasks: E[]): Future<T>[];
    invokeAll(tasks: E[], timeout: Duration): Future<T>[];
    invokeAll(tasks: E[], timeout: number, unit: TimeUnit): Future<T>[];
    invokeAny<T extends Object | number | string | boolean>(tasks: E[], timeout: Duration): T;
    submit(task: () => void): ListenableFuture<Object>;
    submit<T extends Object | number | string | boolean>(task: () => void, result: T): ListenableFuture<T>;
    submit(task: () => T): ListenableFuture<T>;
}