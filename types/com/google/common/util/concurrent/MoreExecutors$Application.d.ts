import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledThreadPoolExecutor } from '../../../../../java/util/concurrent/ScheduledThreadPoolExecutor.d.ts'
import type { ThreadPoolExecutor } from '../../../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MoreExecutors$Application extends Object {
    constructor()
    addDelayedShutdownHook(service: ExecutorService, terminationTimeout: number, timeUnit: TimeUnit): void;
    addShutdownHook(hook: Thread): void;
    getExitingExecutorService(executor: ThreadPoolExecutor): ExecutorService;
    getExitingExecutorService(executor: ThreadPoolExecutor, terminationTimeout: number, timeUnit: TimeUnit): ExecutorService;
    getExitingScheduledExecutorService(executor: ScheduledThreadPoolExecutor): ScheduledExecutorService;
    getExitingScheduledExecutorService(executor: ScheduledThreadPoolExecutor, terminationTimeout: number, timeUnit: TimeUnit): ScheduledExecutorService;
}