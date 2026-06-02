import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
import type { Task } from '../../../okhttp3/internal/concurrent/Task.d.ts'
import type { TaskQueue } from '../../../okhttp3/internal/concurrent/TaskQueue.d.ts'
import type { TaskRunner$Backend } from '../../../okhttp3/internal/concurrent/TaskRunner$Backend.d.ts'
import type { TaskRunner$Companion } from '../../../okhttp3/internal/concurrent/TaskRunner$Companion.d.ts'
export class TaskRunner extends Object implements Lockable {
    static Companion: TaskRunner$Companion;
    static INSTANCE: TaskRunner;
    constructor(backend: TaskRunner$Backend, logger: Logger)
    readonly backend: TaskRunner$Backend;
    // private busyQueues: TaskQueue[];
    // private coordinatorWaiting: boolean;
    // private coordinatorWakeUpAt: number;
    // private executeCallCount: number;
    // private logger: Logger;
    /*not mapped: */ getLogger$okhttp(): Logger;
    // private nextQueueName: number;
    // private readyQueues: TaskQueue[];
    // private runCallCount: number;
    // private runnable: () => void;
    activeQueues(): TaskQueue[];
    // private afterRun(task: Task, delayNanos: number, completedNormally: boolean): void;
    awaitTaskToRun(): Task | null;
    // private beforeRun(task: Task): void;
    cancelAll(): void;
    kickCoordinator(taskQueue: TaskQueue): void;
    newQueue(): TaskQueue;
    // private startAnotherThread(): void;
}