import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { ThreadPoolExecutor } from '../../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
export class JoinableThreadPoolExecutor extends ThreadPoolExecutor {
    constructor(threadFactory: ThreadFactory)
    awaitTermination(timeout: number, unit: TimeUnit): boolean;
    interrupt(): void;
}