import type { Runnable } from '../../../../../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../../../../../java/util/concurrent/Callable.d.ts'
import type { ScheduledExecutorService } from '../../../../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ListenableScheduledFuture } from '../../../../../../../../org/spongepowered/include/com/google/common/util/concurrent/ListenableScheduledFuture.d.ts'
import type { ListeningExecutorService } from '../../../../../../../../org/spongepowered/include/com/google/common/util/concurrent/ListeningExecutorService.d.ts'
export interface ListeningScheduledExecutorService extends ScheduledExecutorService, Object, ListeningExecutorService {
    schedule(arg0: () => void, arg1: number, arg2: TimeUnit): ListenableScheduledFuture<Object>;
    schedule(arg0: () => V, arg1: number, arg2: TimeUnit): ListenableScheduledFuture<V>;
    scheduleAtFixedRate(arg0: () => void, arg1: number, arg2: number, arg3: TimeUnit): ListenableScheduledFuture<Object>;
    scheduleWithFixedDelay(arg0: () => void, arg1: number, arg2: number, arg3: TimeUnit): ListenableScheduledFuture<Object>;
}