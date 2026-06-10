import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { CameraType } from '../../../../../../../net/minecraft/client/CameraType.d.ts'
export class ModuleFreeLook$PerspectiveChoice extends Enum<ModuleFreeLook$PerspectiveChoice> implements Tagged {
    static BACK: ModuleFreeLook$PerspectiveChoice;
    static Companion: Tagged$Companion;
    static FRONT: ModuleFreeLook$PerspectiveChoice;
    static getEntries(): ModuleFreeLook$PerspectiveChoice[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleFreeLook$PerspectiveChoice;
    static values(): (Object | null)[];
    private constructor(tag: string, perspective: CameraType)
    readonly perspective: CameraType;
    readonly tag: string;
    name(): "FRONT" | "BACK";
}