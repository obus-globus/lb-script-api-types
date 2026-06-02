import type { Scheduler } from '../../../../com/viaversion/viaversion/api/scheduler/Scheduler.d.ts'
import type { Task } from '../../../../com/viaversion/viaversion/api/scheduler/Task.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { ScheduledExecutorService } from '../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TaskScheduler extends Object implements Scheduler {
    constructor()
    // private executorService: ExecutorService;
    // private scheduledExecutorService: ScheduledExecutorService;
    execute(arg0: () => void): Task;
    schedule(arg0: () => void, arg1: number, arg2: TimeUnit): Task;
    scheduleRepeating(arg0: () => void, arg1: number, arg2: number, arg3: TimeUnit): Task;
    shutdown(): void;
}