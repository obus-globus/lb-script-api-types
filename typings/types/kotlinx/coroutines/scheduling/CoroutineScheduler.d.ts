import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AtomicBoolean } from '../../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
import type { CoroutineScheduler$Companion } from '../../../kotlinx/coroutines/scheduling/CoroutineScheduler$Companion.d.ts'
import type { CoroutineScheduler$Worker } from '../../../kotlinx/coroutines/scheduling/CoroutineScheduler$Worker.d.ts'
import type { Task } from '../../../kotlinx/coroutines/scheduling/Task.d.ts'
export class CoroutineScheduler extends Object implements Closeable, Executor {
    static Companion: CoroutineScheduler$Companion;
    static MAX_SUPPORTED_POOL_SIZE: number;
    static MIN_SUPPORTED_POOL_SIZE: number;
    static NOT_IN_STACK: Symbol;
    constructor(corePoolSize: number, maxPoolSize: number, idleWorkerKeepAliveNs: number, schedulerName: string)
    // private addToGlobalQueue(task: Task): boolean;
    availableCpuPermits(state: number): number;
    // private blockingTasks(state: number): number;
    close(): void;
    // private createNewWorker(): number;
    createTask(block: () => void, taskContext: boolean): Task;
    // private createdWorkers(state: number): number;
    // private currentWorker(): CoroutineScheduler$Worker | null;
    // private decrementBlockingTasks(): void;
    // private decrementCreatedWorkers(): number;
    dispatch(block: () => void, taskContext: boolean, fair: boolean): void;
    execute(command: () => void): void;
    // private incrementBlockingTasks(): number;
    // private incrementCreatedWorkers(): number;
    // private parkedWorkersStackNextIndex(worker: CoroutineScheduler$Worker): number;
    // private parkedWorkersStackPop(): CoroutineScheduler$Worker | null;
    parkedWorkersStackPush(worker: CoroutineScheduler$Worker): boolean;
    parkedWorkersStackTopUpdate(worker: CoroutineScheduler$Worker, oldIndex: number, newIndex: number): void;
    // private releaseCpuPermit(): number;
    runSafely(task: Task): void;
    shutdown(timeout: number): void;
    // private signalBlockingWork(stateSnapshot: number): void;
    signalCpuWork(): void;
    toString(): string;
    // private tryAcquireCpuPermit(): boolean;
    // private tryCreateWorker(state: number): boolean;
    // private tryUnpark(): boolean;
}