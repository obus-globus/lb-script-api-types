import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ExecutorService extends AutoCloseable, Executor, Object {
    awaitTermination(arg0: number, arg1: TimeUnit): boolean;
    close(): void;
    invokeAll<T extends Object | number | string | boolean>(arg0: () => T[]): Future<T>[];
    invokeAll<T extends Object | number | string | boolean>(arg0: () => T[], arg1: number, arg2: TimeUnit): Future<T>[];
    invokeAny<T extends Object | number | string | boolean>(arg0: () => T[]): T;
    invokeAny<T extends Object | number | string | boolean>(arg0: () => T[], arg1: number, arg2: TimeUnit): T;
    isShutdown(): boolean;
    isTerminated(): boolean;
    shutdown(): void;
    shutdownNow(): () => void[];
    submit(arg0: () => void): Future<Object>;
    submit<T extends Object | number | string | boolean>(arg0: () => void, arg1: T): Future<T>;
    submit<T extends Object | number | string | boolean>(arg0: () => T): Future<T>;
}