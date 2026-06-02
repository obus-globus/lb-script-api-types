import type { Task } from '../../../../com/viaversion/viaversion/api/scheduler/Task.d.ts'
import type { TaskStatus } from '../../../../com/viaversion/viaversion/api/scheduler/TaskStatus.d.ts'
import type { ScheduledFuture } from '../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScheduledTask extends Object implements Task {
    constructor(arg0: ScheduledFuture<Object>)
    // private future: ScheduledFuture<Object>;
    cancel(): void;
    status(): TaskStatus;
}