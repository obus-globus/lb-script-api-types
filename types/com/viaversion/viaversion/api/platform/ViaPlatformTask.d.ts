import type { PlatformTask } from '../../../../../com/viaversion/viaversion/api/platform/PlatformTask.d.ts'
import type { Task } from '../../../../../com/viaversion/viaversion/api/scheduler/Task.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ViaPlatformTask extends Record implements PlatformTask<Task> {
    constructor(task: Task)
    // private task: Task;
    cancel(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    task(): Task;
    toString(): string;
}