import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SchedulerTimeSource } from '../../../kotlinx/coroutines/scheduling/SchedulerTimeSource.d.ts'
import type { Task } from '../../../kotlinx/coroutines/scheduling/Task.d.ts'
export class TasksKt extends Object {
    static BlockingContext: boolean;
    static CORE_POOL_SIZE: number;
    static DEFAULT_SCHEDULER_NAME: string;
    static IDLE_WORKER_KEEP_ALIVE_NS: number;
    static MAX_POOL_SIZE: number;
    static NonBlockingContext: boolean;
    static WORK_STEALING_TIME_RESOLUTION_NS: number;
    static schedulerTimeSource: SchedulerTimeSource;
    static asTask(paramarg0: () => void, paramarg1: number, paramarg2: boolean): Task;
    static isBlocking(paramarg0: Task): boolean;
}