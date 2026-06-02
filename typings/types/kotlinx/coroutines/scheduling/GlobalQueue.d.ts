import type { LockFreeTaskQueue } from '../../../kotlinx/coroutines/internal/LockFreeTaskQueue.d.ts'
import type { Task } from '../../../kotlinx/coroutines/scheduling/Task.d.ts'
export class GlobalQueue extends LockFreeTaskQueue<Task> {
    constructor()
}