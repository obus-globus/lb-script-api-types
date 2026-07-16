import type { Object } from '../../java/lang/Object.d.ts'
import type { ExecutorCoroutineDispatcher } from '../../kotlinx/coroutines/ExecutorCoroutineDispatcher.d.ts'
export class ThreadPoolDispatcherKt extends Object {
    static newFixedThreadPoolContext(nThreads: number, name: string): ExecutorCoroutineDispatcher;
    static newSingleThreadContext(name: string): ExecutorCoroutineDispatcher;
}