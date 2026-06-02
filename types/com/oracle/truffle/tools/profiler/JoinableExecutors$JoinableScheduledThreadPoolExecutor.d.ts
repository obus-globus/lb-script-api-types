import type { ScheduledThreadPoolExecutor } from '../../../../../java/util/concurrent/ScheduledThreadPoolExecutor.d.ts'
import type { ThreadFactory } from '../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
export class JoinableExecutors$JoinableScheduledThreadPoolExecutor extends ScheduledThreadPoolExecutor {
    constructor(corePoolSize: number, threadFactory: ThreadFactory)
    awaitTermination(timeout: number, unit: TimeUnit): boolean;
}