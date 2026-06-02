import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BackgroundCompileQueue$JoinableThreadFactory extends ThreadFactory, Object{
    joinOtherThreads(timeout: number, unit: TimeUnit): boolean;
}