import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Executor } from '../../java/util/concurrent/Executor.d.ts'
import type { ContinuationInterceptor$Key } from '../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineDispatcher$Key } from '../../kotlinx/coroutines/CoroutineDispatcher$Key.d.ts'
import type { ExecutorCoroutineDispatcher$Key } from '../../kotlinx/coroutines/ExecutorCoroutineDispatcher$Key.d.ts'
export abstract class ExecutorCoroutineDispatcher extends CoroutineDispatcher implements Closeable, AutoCloseable {
    static Key: ContinuationInterceptor$Key;
    static Key: CoroutineDispatcher$Key;
    static Key: ExecutorCoroutineDispatcher$Key;
    constructor()
    readonly executor: Executor;
    close(): void;
}