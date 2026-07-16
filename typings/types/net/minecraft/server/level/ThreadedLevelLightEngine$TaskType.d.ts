import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ThreadedLevelLightEngine$TaskType extends Enum<ThreadedLevelLightEngine$TaskType> {
    static POST_UPDATE: ThreadedLevelLightEngine$TaskType;
    static PRE_UPDATE: ThreadedLevelLightEngine$TaskType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ThreadedLevelLightEngine$TaskType;
    static values(): ThreadedLevelLightEngine$TaskType[];
    private constructor()
    name(): "PRE_UPDATE" | "POST_UPDATE";
}