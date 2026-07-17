import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { CameraType } from '../../../../../../../net/minecraft/client/CameraType.d.ts'
export class ModuleFreeLook$PerspectiveChoice extends Enum<ModuleFreeLook$PerspectiveChoice> implements Tagged {
    static BACK: ModuleFreeLook$PerspectiveChoice;
    static Companion: Tagged$Companion;
    static FRONT: ModuleFreeLook$PerspectiveChoice;
    static getEntries(): ModuleFreeLook$PerspectiveChoice[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleFreeLook$PerspectiveChoice;
    static values(): ModuleFreeLook$PerspectiveChoice[];
    private constructor(tag: string, perspective: CameraType)
    readonly perspective: CameraType;
    readonly tag: string;
    name(): "FRONT" | "BACK";
}