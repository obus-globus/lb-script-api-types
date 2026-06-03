import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Context } from '../../../../../org/graalvm/polyglot/Context.d.ts'
import type { Context$Builder } from '../../../../../org/graalvm/polyglot/Context$Builder.d.ts'
import type { ContextAwareExecutor } from '../../../../../org/graalvm/tools/lsp/server/ContextAwareExecutor.d.ts'
export class LSPInstrument$ContextAwareExecutorImpl extends Object implements ContextAwareExecutor {
    private constructor(contextBuilder: Context$Builder)
    // private contextBuilder: Context$Builder;
    // private executor: ExecutorService;
    // private lastNestedContext: Context;
    // private workerThread: WeakReference<Thread>;
    // private execute(taskWithResult: () => T): Future<T>;
    executeWithDefaultContext(taskWithResult: () => T): Future<T>;
    executeWithNestedContext(taskWithResult: () => T): Future<T>;
    executeWithNestedContext(taskWithResult: () => T, cached: boolean): Future<T>;
    executeWithNestedContext(taskWithResult: () => T, timeoutMillis: number, onTimeoutTask: () => T): Future<T>;
    executeWithNestedContext(taskWithResult: () => T): Future<T>;
    resetContextCache(): void;
    shutdown(): void;
    // private wrapWithNewContext(taskWithResult: () => T, cached: boolean): () => T;
}