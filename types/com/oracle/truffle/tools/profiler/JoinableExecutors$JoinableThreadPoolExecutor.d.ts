import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { ThreadFactory } from '../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { ThreadPoolExecutor } from '../../../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
export class JoinableExecutors$JoinableThreadPoolExecutor extends ThreadPoolExecutor {
    constructor(corePoolSize: number, maximumPoolSize: number, keepAliveTime: number, unit: TimeUnit, workQueue: () => void[], threadFactory: ThreadFactory)
    awaitTermination(timeout: number, unit: TimeUnit): boolean;
}