import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ContextAwareExecutor extends Object {
    executeWithDefaultContext<T extends Object | number | string | boolean>(taskWithResult: () => T): Future<T>;
    executeWithNestedContext<T extends Object | number | string | boolean>(taskWithResult: () => T): Future<T>;
    executeWithNestedContext<T extends Object | number | string | boolean>(taskWithResult: () => T, cached: boolean): Future<T>;
    executeWithNestedContext<T extends Object | number | string | boolean>(taskWithResult: () => T, timeoutMillis: number, onTimeoutTask: () => T): Future<T>;
    resetContextCache(): void;
    shutdown(): void;
}