import type { ForwardingObject } from '../../../../../com/google/common/collect/ForwardingObject.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ForwardingExecutorService extends ForwardingObject implements ExecutorService {
    constructor()
    awaitTermination(timeout: number, unit: TimeUnit): boolean;
    close(): void;
    delegate(): ExecutorService;
    execute(command: () => void): void;
    invokeAll(tasks: E[]): Future<T>[];
    invokeAll(tasks: E[], timeout: number, unit: TimeUnit): Future<T>[];
    invokeAny<T extends Object | number | string | boolean>(tasks: E[]): T;
    invokeAny<T extends Object | number | string | boolean>(tasks: E[], timeout: number, unit: TimeUnit): T;
    isShutdown(): boolean;
    isTerminated(): boolean;
    shutdown(): void;
    shutdownNow(): () => void[];
    submit(task: () => void): Future<Object>;
    submit<T extends Object | number | string | boolean>(task: () => void, result: T): Future<T>;
    submit(task: () => T): Future<T>;
}