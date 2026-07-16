import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Executor } from '../../java/util/concurrent/Executor.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { ExecutorCoroutineDispatcher$Key } from '../../kotlinx/coroutines/ExecutorCoroutineDispatcher$Key.d.ts'
export abstract class ExecutorCoroutineDispatcher extends CoroutineDispatcher implements Closeable, AutoCloseable {
    static Key: ExecutorCoroutineDispatcher$Key;
    constructor()
    readonly executor: Executor;
    close(): void;
}