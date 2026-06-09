import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../java/util/concurrent/ExecutorService.d.ts'
import type { ScheduledFuture } from '../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ScheduledExecutorService extends ExecutorService, Object {
    close(): void;
    schedule(arg0: () => void, arg1: number, arg2: TimeUnit): ScheduledFuture<Object>;
    schedule(arg0: () => V, arg1: number, arg2: TimeUnit): ScheduledFuture<V>;
    scheduleAtFixedRate(arg0: () => void, arg1: number, arg2: number, arg3: TimeUnit): ScheduledFuture<Object>;
    scheduleWithFixedDelay(arg0: () => void, arg1: number, arg2: number, arg3: TimeUnit): ScheduledFuture<Object>;
}