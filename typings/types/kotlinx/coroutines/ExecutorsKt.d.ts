import type { Executor } from '../../java/util/concurrent/Executor.d.ts'
import type { ExecutorService } from '../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { ExecutorCoroutineDispatcher } from '../../kotlinx/coroutines/ExecutorCoroutineDispatcher.d.ts'
export class ExecutorsKt extends Object {
    static asExecutor(self: CoroutineDispatcher): Executor;
    static from(self: Executor): CoroutineDispatcher;
    static from(self: ExecutorService): ExecutorCoroutineDispatcher;
}