import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { BlockableEventLoop } from '../../../../net/minecraft/util/thread/BlockableEventLoop.d.ts'
export class SoundEngineExecutor extends BlockableEventLoop<() => void> {
    static BLOCK_TIME_NANOS: number;
    static isNonRecoverable(paramt: Throwable): boolean;
    static relayDelayCrash(paramcrashReport: CrashReport): void;
    constructor()
    // private shutdown: boolean;
    // private thread: Thread;
    // private createThread(): Thread;
    getRunningThread(): Thread;
    // private run(): void;
    schedule(runnable: () => void): void;
    shouldRun(task: () => void): boolean;
    shutDown(): void;
    startUp(): void;
    waitForTasks(): void;
    wrapRunnable(runnable: () => void): () => void;
}