import type { Object } from '../../java/lang/Object.d.ts'
import type { ExecutorCoroutineDispatcher } from '../../kotlinx/coroutines/ExecutorCoroutineDispatcher.d.ts'
export class ThreadPoolDispatcherKt extends Object {
    static newFixedThreadPoolContext(paramarg0: number, paramarg1: string): ExecutorCoroutineDispatcher;
    static newSingleThreadContext(paramarg0: string): ExecutorCoroutineDispatcher;
}