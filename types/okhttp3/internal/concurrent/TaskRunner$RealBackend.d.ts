import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ThreadFactory } from '../../../java/util/concurrent/ThreadFactory.d.ts'
import type { ThreadPoolExecutor } from '../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { TaskRunner$Backend } from '../../../okhttp3/internal/concurrent/TaskRunner$Backend.d.ts'
export class TaskRunner$RealBackend extends Object implements TaskRunner$Backend {
    constructor(threadFactory: ThreadFactory)
    readonly executor: ThreadPoolExecutor;
    coordinatorNotify(taskRunner: TaskRunner): void;
    coordinatorWait(taskRunner: TaskRunner, nanos: number): void;
    decorate(queue: T[]): T[];
    execute(taskRunner: TaskRunner, runnable: () => void): void;
    nanoTime(): number;
    shutdown(): void;
}