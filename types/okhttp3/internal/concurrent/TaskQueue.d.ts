import type { CountDownLatch } from '../../../java/util/concurrent/CountDownLatch.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../kotlin/jvm/functions/Function0.d.ts'
import type { Task } from '../../../okhttp3/internal/concurrent/Task.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
export class TaskQueue extends Object {
    constructor(taskRunner: TaskRunner, name: string)
    // private activeTask: Task | null;
    /*not mapped: */ getActiveTask$okhttp(): Task | null;
    // private cancelActiveTask: boolean;
    /*not mapped: */ getCancelActiveTask$okhttp(): boolean;
    // private futureTasks: Task[];
    /*not mapped: */ getFutureTasks$okhttp(): Task[];
    // private name: string;
    /*not mapped: */ getName$okhttp(): string;
    readonly scheduledTasks: Task[];
    // private shutdown: boolean;
    /*not mapped: */ getShutdown$okhttp(): boolean;
    // private taskRunner: TaskRunner;
    /*not mapped: */ getTaskRunner$okhttp(): TaskRunner;
    cancelAll(): void;
    cancelAllAndDecide(): boolean;
    execute(name: string, delayNanos: number, cancelable: boolean, block: Function0<void>): void;
    idleLatch(): CountDownLatch;
    schedule(name: string, delayNanos: number, block: Function0<number>): void;
    schedule(task: Task, delayNanos: number): void;
    scheduleAndDecide(task: Task, delayNanos: number, recurrence: boolean): boolean;
    shutdown(): void;
    toString(): string;
}