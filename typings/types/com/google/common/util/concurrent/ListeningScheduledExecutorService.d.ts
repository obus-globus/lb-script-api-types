import type { ListenableScheduledFuture } from '../../../../../com/google/common/util/concurrent/ListenableScheduledFuture.d.ts'
import type { ListeningExecutorService } from '../../../../../com/google/common/util/concurrent/ListeningExecutorService.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ListeningScheduledExecutorService extends ListeningExecutorService, ScheduledExecutorService, Object {
    awaitTermination(timeout: Duration): boolean;
    invokeAll<T extends Object | number | string | boolean>(tasks: () => T[], timeout: Duration): Future<T>[];
    invokeAny<T extends Object | number | string | boolean>(tasks: () => T[], timeout: Duration): T;
    schedule(command: () => void, delay: Duration): ListenableScheduledFuture<Object>;
    schedule(command: () => void, delay: number, unit: TimeUnit): ListenableScheduledFuture<Object>;
    schedule<V extends Object | number | string | boolean>(callable: () => V, delay: Duration): ListenableScheduledFuture<V>;
    schedule<V extends Object | number | string | boolean>(callable: () => V, delay: number, unit: TimeUnit): ListenableScheduledFuture<V>;
    scheduleAtFixedRate(command: () => void, initialDelay: Duration, period: Duration): ListenableScheduledFuture<Object>;
    scheduleAtFixedRate(command: () => void, initialDelay: number, period: number, unit: TimeUnit): ListenableScheduledFuture<Object>;
    scheduleWithFixedDelay(command: () => void, initialDelay: Duration, delay: Duration): ListenableScheduledFuture<Object>;
    scheduleWithFixedDelay(command: () => void, initialDelay: number, delay: number, unit: TimeUnit): ListenableScheduledFuture<Object>;
}