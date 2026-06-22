import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BackgroundCompileQueue$JoinableThreadFactory extends ThreadFactory, Object {
    joinOtherThreads(timeout: number, unit: TimeUnit): boolean;
    newThread(arg0: () => void): Thread;
}