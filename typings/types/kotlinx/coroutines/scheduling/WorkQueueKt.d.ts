import type { Object } from '../../../java/lang/Object.d.ts'
import type { Task } from '../../../kotlinx/coroutines/scheduling/Task.d.ts'
export class WorkQueueKt extends Object {
    static BUFFER_CAPACITY: number;
    static BUFFER_CAPACITY_BASE: number;
    static MASK: number;
    static NOTHING_TO_STEAL: number;
    static STEAL_ANY: number;
    static STEAL_BLOCKING_ONLY: number;
    static STEAL_CPU_ONLY: number;
    static TASK_STOLEN: number;
    static getMaskForStealingMode(paramarg0: Task): number;
}