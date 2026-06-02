import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TaskQueueType extends Enum<TaskQueueType> {
    static ALWAYS_DEFER: TaskQueueType;
    static INITIAL_BUILD: TaskQueueType;
    static ONE_FRAME_DEFER: TaskQueueType;
    static ZERO_FRAME_DEFER: TaskQueueType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TaskQueueType;
    static values(): (Object | null)[];
    private constructor()
    allowsUnlimitedUploadDuration(): boolean;
    queueSizeLimit(): number;
    name(): "ZERO_FRAME_DEFER" | "ONE_FRAME_DEFER" | "ALWAYS_DEFER" | "INITIAL_BUILD";
}