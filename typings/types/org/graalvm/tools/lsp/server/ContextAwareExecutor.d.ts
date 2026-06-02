import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ContextAwareExecutor extends Object{
    executeWithDefaultContext(taskWithResult: () => T): Future<T>;
    executeWithNestedContext(taskWithResult: () => T): Future<T>;
    executeWithNestedContext(taskWithResult: () => T, cached: boolean): Future<T>;
    executeWithNestedContext(taskWithResult: () => T, timeoutMillis: number, onTimeoutTask: () => T): Future<T>;
    resetContextCache(): void;
    shutdown(): void;
}