import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ConfigurableThreadPoolExecutor extends ExecutorService, Object {
    awaitTermination(arg0: number, arg1: TimeUnit): boolean;
    close(): void;
    execute(arg0: () => void): void;
    isShutdown(): boolean;
    isTerminated(): boolean;
    setCorePoolSize(arg0: number): void;
    setMaximumPoolSize(arg0: number): void;
    shutdown(): void;
}