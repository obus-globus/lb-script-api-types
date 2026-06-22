import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { RunnableFuture } from '../../../java/util/concurrent/RunnableFuture.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractExecutorService extends Object implements ExecutorService {
    constructor()
    awaitTermination(arg0: number, arg1: TimeUnit): boolean;
    close(): void;
    // private doInvokeAny<T extends Object | number | string | boolean>(arg0: () => T[], arg1: boolean, arg2: number): T;
    execute(arg0: () => void): void;
    invokeAll<T extends Object | number | string | boolean>(arg0: () => T[]): Future<T>[];
    invokeAll<T extends Object | number | string | boolean>(arg0: () => T[], arg1: number, arg2: TimeUnit): Future<T>[];
    invokeAny<T extends Object | number | string | boolean>(arg0: () => T[]): T;
    invokeAny<T extends Object | number | string | boolean>(arg0: () => T[], arg1: number, arg2: TimeUnit): T;
    isShutdown(): boolean;
    isTerminated(): boolean;
    newTaskFor<T extends Object | number | string | boolean>(arg0: () => void, arg1: T): RunnableFuture<T>;
    newTaskFor<T extends Object | number | string | boolean>(arg0: () => T): RunnableFuture<T>;
    shutdown(): void;
    submit(arg0: () => void): Future<Object>;
    submit<T extends Object | number | string | boolean>(arg0: () => void, arg1: T): Future<T>;
    submit<T extends Object | number | string | boolean>(arg0: () => T): Future<T>;
}