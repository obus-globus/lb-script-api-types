import type { AbstractScheduledService$Cancellable } from '../../../../../com/google/common/util/concurrent/AbstractScheduledService$Cancellable.d.ts'
import type { AbstractService } from '../../../../../com/google/common/util/concurrent/AbstractService.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractScheduledService$Scheduler extends Object {
    static newFixedDelaySchedule(paraminitialDelay: Duration, paramdelay: Duration): AbstractScheduledService$Scheduler;
    static newFixedDelaySchedule(paraminitialDelay: number, paramdelay: number, paramunit: TimeUnit): AbstractScheduledService$Scheduler;
    static newFixedRateSchedule(paraminitialDelay: Duration, paramperiod: Duration): AbstractScheduledService$Scheduler;
    static newFixedRateSchedule(paraminitialDelay: number, paramperiod: number, paramunit: TimeUnit): AbstractScheduledService$Scheduler;
    private constructor()
    schedule(service: AbstractService, executor: ScheduledExecutorService, runnable: () => void): AbstractScheduledService$Cancellable;
}