import type { AbstractScheduledService$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractScheduledService } from '../../../../../com/google/common/util/concurrent/AbstractScheduledService.d.ts'
import type { AbstractScheduledService$Cancellable } from '../../../../../com/google/common/util/concurrent/AbstractScheduledService$Cancellable.d.ts'
import type { AbstractService } from '../../../../../com/google/common/util/concurrent/AbstractService.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
export class AbstractScheduledService$ServiceDelegate extends AbstractService {
    private constructor(null_: AbstractScheduledService)
    constructor(null_: AbstractScheduledService, arg1: AbstractScheduledService$1)
    // private executorService: ScheduledExecutorService;
    // private lock: ReentrantLock;
    // private runningTask: AbstractScheduledService$Cancellable;
    // private task: () => void;
    doStart(): void;
    doStop(): void;
    toString(): string;
}