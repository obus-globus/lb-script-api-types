import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TaskStatus extends Enum<TaskStatus> {
    static RUNNING: TaskStatus;
    static SCHEDULED: TaskStatus;
    static STOPPED: TaskStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TaskStatus;
    static values(): TaskStatus[];
    private constructor()
    name(): "SCHEDULED" | "RUNNING" | "STOPPED";
}