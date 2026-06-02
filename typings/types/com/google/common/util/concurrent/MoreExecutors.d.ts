import type { ListeningExecutorService } from '../../../../../com/google/common/util/concurrent/ListeningExecutorService.d.ts'
import type { ListeningScheduledExecutorService } from '../../../../../com/google/common/util/concurrent/ListeningScheduledExecutorService.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledThreadPoolExecutor } from '../../../../../java/util/concurrent/ScheduledThreadPoolExecutor.d.ts'
import type { ThreadFactory } from '../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { ThreadPoolExecutor } from '../../../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MoreExecutors extends Object {
    static addDelayedShutdownHook(paramservice: ExecutorService, paramterminationTimeout: Duration): void;
    static addDelayedShutdownHook(paramservice: ExecutorService, paramterminationTimeout: number, paramtimeUnit: TimeUnit): void;
    static directExecutor(): Executor;
    static getExitingExecutorService(paramexecutor: ThreadPoolExecutor): ExecutorService;
    static getExitingExecutorService(paramexecutor: ThreadPoolExecutor, paramterminationTimeout: Duration): ExecutorService;
    static getExitingExecutorService(paramexecutor: ThreadPoolExecutor, paramterminationTimeout: number, paramtimeUnit: TimeUnit): ExecutorService;
    static getExitingScheduledExecutorService(paramexecutor: ScheduledThreadPoolExecutor): ScheduledExecutorService;
    static getExitingScheduledExecutorService(paramexecutor: ScheduledThreadPoolExecutor, paramterminationTimeout: Duration): ScheduledExecutorService;
    static getExitingScheduledExecutorService(paramexecutor: ScheduledThreadPoolExecutor, paramterminationTimeout: number, paramtimeUnit: TimeUnit): ScheduledExecutorService;
    static listeningDecorator(paramdelegate: ExecutorService): ListeningExecutorService;
    static listeningDecorator(paramdelegate: ScheduledExecutorService): ListeningScheduledExecutorService;
    static newDirectExecutorService(): ListeningExecutorService;
    static newSequentialExecutor(paramdelegate: Executor): Executor;
    static platformThreadFactory(): ThreadFactory;
    static shutdownAndAwaitTermination(paramservice: ExecutorService, paramtimeout: Duration): boolean;
    static shutdownAndAwaitTermination(paramservice: ExecutorService, paramtimeout: number, paramunit: TimeUnit): boolean;
    private constructor()
}