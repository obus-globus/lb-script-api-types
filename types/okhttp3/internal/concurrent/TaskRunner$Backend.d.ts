import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
export interface TaskRunner$Backend extends Object{
    coordinatorNotify(taskRunner: TaskRunner): void;
    coordinatorWait(taskRunner: TaskRunner, nanos: number): void;
    decorate(queue: T[]): T[];
    execute(taskRunner: TaskRunner, runnable: () => void): void;
    nanoTime(): number;
}