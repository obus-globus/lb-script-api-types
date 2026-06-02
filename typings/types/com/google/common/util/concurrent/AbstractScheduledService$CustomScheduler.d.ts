import type { AbstractScheduledService$Cancellable } from '../../../../../com/google/common/util/concurrent/AbstractScheduledService$Cancellable.d.ts'
import type { AbstractScheduledService$CustomScheduler$Schedule } from '../../../../../com/google/common/util/concurrent/AbstractScheduledService$CustomScheduler$Schedule.d.ts'
import type { AbstractScheduledService$Scheduler } from '../../../../../com/google/common/util/concurrent/AbstractScheduledService$Scheduler.d.ts'
import type { AbstractService } from '../../../../../com/google/common/util/concurrent/AbstractService.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
export abstract class AbstractScheduledService$CustomScheduler extends AbstractScheduledService$Scheduler {
    static newFixedDelaySchedule(paraminitialDelay: Duration, paramdelay: Duration): AbstractScheduledService$Scheduler;
    static newFixedDelaySchedule(paraminitialDelay: number, paramdelay: number, paramunit: TimeUnit): AbstractScheduledService$Scheduler;
    static newFixedRateSchedule(paraminitialDelay: Duration, paramperiod: Duration): AbstractScheduledService$Scheduler;
    static newFixedRateSchedule(paraminitialDelay: number, paramperiod: number, paramunit: TimeUnit): AbstractScheduledService$Scheduler;
    constructor()
    getNextSchedule(): AbstractScheduledService$CustomScheduler$Schedule;
    schedule(service: AbstractService, executor: ScheduledExecutorService, runnable: () => void): AbstractScheduledService$Cancellable;
}