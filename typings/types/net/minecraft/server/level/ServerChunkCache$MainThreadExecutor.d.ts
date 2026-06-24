import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { ServerChunkCache } from '../../../../net/minecraft/server/level/ServerChunkCache.d.ts'
import type { BlockableEventLoop } from '../../../../net/minecraft/util/thread/BlockableEventLoop.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class ServerChunkCache$MainThreadExecutor extends BlockableEventLoop<() => void> {
    static BLOCK_TIME_NANOS: number;
    static isNonRecoverable(paramt: Throwable): boolean;
    static relayDelayCrash(paramcrashReport: CrashReport): void;
    private constructor(null_: ServerChunkCache, level: Level)
    doRunTask(task: () => void): void;
    getRunningThread(): Thread;
    pollTask(): boolean;
    scheduleExecutables(): boolean;
    shouldRun(task: () => void): boolean;
    wrapRunnable(runnable: () => void): () => void;
}