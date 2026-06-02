import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Task } from '../../../kotlinx/coroutines/scheduling/Task.d.ts'
export class TaskImpl extends Task {
    constructor(block: () => void, submissionTime: number, taskContext: boolean)
    block: () => void;
    run(): void;
    toString(): string;
}