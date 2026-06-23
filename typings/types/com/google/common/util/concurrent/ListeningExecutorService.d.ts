import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ListeningExecutorService extends ExecutorService, Object {
    awaitTermination(timeout: Duration): boolean;
    awaitTermination(arg0: number, arg1: TimeUnit): boolean;
    close(): void;
    execute(arg0: () => void): void;
    invokeAll<T extends unknown>(tasks: () => T[]): Future<T>[];
    invokeAll<T extends unknown>(tasks: () => T[], timeout: Duration): Future<T>[];
    invokeAll<T extends unknown>(tasks: () => T[], timeout: number, unit: TimeUnit): Future<T>[];
    invokeAny<T extends unknown>(tasks: () => T[], timeout: Duration): T;
    isShutdown(): boolean;
    isTerminated(): boolean;
    shutdown(): void;
    submit(task: () => void): ListenableFuture<Object>;
    submit<T extends unknown>(task: () => void, result: T): ListenableFuture<T>;
    submit<T extends unknown>(task: () => T): ListenableFuture<T>;
}