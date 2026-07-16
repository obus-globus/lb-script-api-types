import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ThreadedLevelLightEngine$TaskType extends Enum<ThreadedLevelLightEngine$TaskType> {
    static POST_UPDATE: ThreadedLevelLightEngine$TaskType;
    static PRE_UPDATE: ThreadedLevelLightEngine$TaskType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ThreadedLevelLightEngine$TaskType;
    static values(): ThreadedLevelLightEngine$TaskType[];
    private constructor()
    name(): "PRE_UPDATE" | "POST_UPDATE";
}