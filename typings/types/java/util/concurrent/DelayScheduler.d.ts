import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Thread$Builder$OfPlatform } from '../../../java/lang/Thread$Builder$OfPlatform.d.ts'
import type { Thread$Builder$OfVirtual } from '../../../java/lang/Thread$Builder$OfVirtual.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { DelayScheduler$ScheduledForkJoinTask } from '../../../java/util/concurrent/DelayScheduler$ScheduledForkJoinTask.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class DelayScheduler extends Thread {
    static MAX_PRIORITY: number;
    static MIN_PRIORITY: number;
    static NORM_PRIORITY: number;
    static activeCount(): number;
    static currentThread(): Thread;
    static dumpStack(): void;
    static enumerate(paramarg0: Thread[]): number;
    static getAllStackTraces(): Map<Thread, StackTraceElement[]>;
    static getDefaultUncaughtExceptionHandler(): (param0: Thread, param1: Throwable) => void;
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
    constructor(arg0: ForkJoinPool, arg1: string)
    // private active: number;
    // private cancelDelayedTasksOnShutdown: number;
    // private pad0: number;
    // private pad1: number;
    // private pad2: number;
    // private pad3: number;
    // private pad4: number;
    // private pad5: number;
    // private pad6: number;
    // private pad7: number;
    // private pad8: number;
    // private pad9: number;
    // private padA: number;
    // private padB: number;
    // private padC: number;
    // private padD: number;
    // private padE: number;
    // private pending: DelayScheduler$ScheduledForkJoinTask<Object>;
    // private pool: ForkJoinPool;
    // private restingSize: number;
    canShutDown(): boolean;
    cancelDelayedTasksOnShutdown(): void;
    lastStableSize(): number;
    // private loop(arg0: ForkJoinPool): void;
    pend(arg0: DelayScheduler$ScheduledForkJoinTask<Object>): void;
    run(): void;
    signal(): number;
    // private tryStop(arg0: ForkJoinPool, arg1: DelayScheduler$ScheduledForkJoinTask<Object>[], arg2: number, arg3: number, arg4: number): number;
}