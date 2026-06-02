import type { ListenableScheduledFuture } from '../../../../../com/google/common/util/concurrent/ListenableScheduledFuture.d.ts'
import type { ListeningScheduledExecutorService } from '../../../../../com/google/common/util/concurrent/ListeningScheduledExecutorService.d.ts'
import type { MoreExecutors$ListeningDecorator } from '../../../../../com/google/common/util/concurrent/MoreExecutors$ListeningDecorator.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MoreExecutors$ScheduledListeningDecorator extends MoreExecutors$ListeningDecorator implements ListeningScheduledExecutorService {
    constructor(delegate: ScheduledExecutorService)
    // private delegate: ScheduledExecutorService;
    schedule(command: () => void, delay: Duration): ListenableScheduledFuture<Object>;
    schedule(callable: () => V, delay: Duration): ListenableScheduledFuture<V>;
    schedule(command: () => void, delay: number, unit: TimeUnit): ListenableScheduledFuture<Object>;
    schedule(callable: () => V, delay: number, unit: TimeUnit): ListenableScheduledFuture<V>;
    scheduleAtFixedRate(command: () => void, initialDelay: Duration, period: Duration): ListenableScheduledFuture<Object>;
    scheduleAtFixedRate(command: () => void, initialDelay: number, period: number, unit: TimeUnit): ListenableScheduledFuture<Object>;
    scheduleWithFixedDelay(command: () => void, initialDelay: Duration, delay: Duration): ListenableScheduledFuture<Object>;
    scheduleWithFixedDelay(command: () => void, initialDelay: number, delay: number, unit: TimeUnit): ListenableScheduledFuture<Object>;
}