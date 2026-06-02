import type { Task } from '../../../../com/viaversion/viaversion/api/scheduler/Task.d.ts'
import type { TaskStatus } from '../../../../com/viaversion/viaversion/api/scheduler/TaskStatus.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SubmittedTask extends Object implements Task {
    constructor(arg0: Future<Object>)
    // private future: Future<Object>;
    cancel(): void;
    status(): TaskStatus;
}