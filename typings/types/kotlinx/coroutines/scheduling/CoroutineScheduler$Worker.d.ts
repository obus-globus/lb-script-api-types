import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Thread$Builder$OfPlatform } from '../../../java/lang/Thread$Builder$OfPlatform.d.ts'
import type { Thread$Builder$OfVirtual } from '../../../java/lang/Thread$Builder$OfVirtual.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { AtomicIntegerFieldUpdater } from '../../../java/util/concurrent/atomic/AtomicIntegerFieldUpdater.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Ref$ObjectRef } from '../../../kotlin/jvm/internal/Ref$ObjectRef.d.ts'
import type { AtomicInt } from '../../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { CoroutineScheduler } from '../../../kotlinx/coroutines/scheduling/CoroutineScheduler.d.ts'
import type { CoroutineScheduler$WorkerState } from '../../../kotlinx/coroutines/scheduling/CoroutineScheduler$WorkerState.d.ts'
import type { Task } from '../../../kotlinx/coroutines/scheduling/Task.d.ts'
import type { WorkQueue } from '../../../kotlinx/coroutines/scheduling/WorkQueue.d.ts'
export class CoroutineScheduler$Worker extends Thread {
    static MAX_PRIORITY: number;
    static MIN_PRIORITY: number;
    static NORM_PRIORITY: number;
    static activeCount(): number;
    static currentThread(): Thread;
    static dumpStack(): void;
    static enumerate(paramarg0: Thread[]): number;
    static getAllStackTraces(): Map<Thread, StackTraceElement[]>;
    static getDefaultUncaughtExceptionHandler(): (param0: Thread, param1: Throwable) => void;
    static getWorkerCtl$volatile$FU(): AtomicIntegerFieldUpdater<Object>;
    static holdsLock(paramarg0: Object): boolean;
    static interrupted(): boolean;
    static ofPlatform(): Thread$Builder$OfPlatform;
    static ofVirtual(): Thread$Builder$OfVirtual;
    static onSpinWait(): void;
    static setDefaultUncaughtExceptionHandler(paramarg0: (param0: Thread, param1: Throwable) => void): void;
    static sleep(paramarg0: Duration): void;
    static sleep(paramarg0: number): void;
    static sleep(paramarg0: number, paramarg1: number): void;
    static startVirtualThread(paramarg0: () => void): Thread;
    static yield(): void;
    constructor(null_: CoroutineScheduler, index: number)
    // private executeTask(task: Task): void;
    // private findAnyTask(scanLocalQueue: boolean): Task | null;
    // private findBlockingTask(): Task | null;
    findTask(mayHaveLocalTasks: boolean): Task | null;
    // private inStack(): boolean;
    isIo(): boolean;
    nextInt(upperBound: number): number;
    // private park(): void;
    // private pollGlobalQueues(): Task | null;
    run(): void;
    // private runWorker(): void;
    // private tryAcquireCpuPermit(): boolean;
    // private tryPark(): void;
    tryReleaseCpu(newState: CoroutineScheduler$WorkerState): boolean;
    // private trySteal(stealingMode: number): Task | null;
    // private tryTerminateWorker(): void;
}