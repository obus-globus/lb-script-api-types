import type { Object } from '../../java/lang/Object.d.ts'
import type { ContinuationInterceptor$Key } from '../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineDispatcher$Key } from '../../kotlinx/coroutines/CoroutineDispatcher$Key.d.ts'
import type { DispatchedTask } from '../../kotlinx/coroutines/DispatchedTask.d.ts'
export abstract class EventLoop extends CoroutineDispatcher {
    static Key: ContinuationInterceptor$Key;
    static Key: CoroutineDispatcher$Key;
    constructor()
    /*not mapped: */ isActive(): boolean;
    // private /*not mapped: */ isEmpty(): boolean;
    /*not mapped: */ isUnconfinedLoopActive(): boolean;
    /*not mapped: */ isUnconfinedQueueEmpty(): boolean;
    // private /*not mapped: */ getNextTime(): number;
    // private shared: boolean;
    // private unconfinedQueue: DispatchedTask<Object>[] | null;
    // private useCount: number;
    decrementUseCount(unconfined: boolean): void;
    // private delta(unconfined: boolean): number;
    dispatchUnconfined(task: DispatchedTask<Object>): void;
    incrementUseCount(unconfined: boolean): void;
    limitedParallelism(parallelism: number): CoroutineDispatcher;
    limitedParallelism(parallelism: number, name: string | null): CoroutineDispatcher;
    processNextEvent(): number;
    processUnconfinedEvent(): boolean;
    shouldBeProcessedFromContext(): boolean;
    shutdown(): void;
}