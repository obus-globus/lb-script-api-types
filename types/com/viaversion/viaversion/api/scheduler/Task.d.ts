import type { TaskStatus } from '../../../../../com/viaversion/viaversion/api/scheduler/TaskStatus.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Task extends Object{
    cancel(): void;
    status(): TaskStatus;
}