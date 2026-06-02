import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { BlockableEventLoop } from '../../../../net/minecraft/util/thread/BlockableEventLoop.d.ts'
export abstract class ReentrantBlockableEventLoop<R extends Runnable> extends BlockableEventLoop<R> {
    static BLOCK_TIME_NANOS: number;
    static isNonRecoverable(paramt: Throwable): boolean;
    static relayDelayCrash(paramcrashReport: CrashReport): void;
    constructor(name: string, propagatesCrashes: boolean)
    // private reentrantCount: number;
    doRunTask(task: R): void;
    runningTask(): boolean;
    scheduleExecutables(): boolean;
}