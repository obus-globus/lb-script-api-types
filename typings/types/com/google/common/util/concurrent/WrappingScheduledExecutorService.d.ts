import type { WrappingExecutorService } from '../../../../../com/google/common/util/concurrent/WrappingExecutorService.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledFuture } from '../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class WrappingScheduledExecutorService extends WrappingExecutorService implements ScheduledExecutorService {
    constructor(delegate: ScheduledExecutorService)
    // private delegate: ScheduledExecutorService;
    schedule(command: () => void, delay: number, unit: TimeUnit): ScheduledFuture<Object>;
    schedule<V extends Object | number | string | boolean>(task: () => V, delay: number, unit: TimeUnit): ScheduledFuture<V>;
    scheduleAtFixedRate(command: () => void, initialDelay: number, period: number, unit: TimeUnit): ScheduledFuture<Object>;
    scheduleWithFixedDelay(command: () => void, initialDelay: number, delay: number, unit: TimeUnit): ScheduledFuture<Object>;
}