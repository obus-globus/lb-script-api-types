import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTeleport$GroundMode extends Enum<ModuleTeleport$GroundMode> implements Tagged {
    static CORRECT: ModuleTeleport$GroundMode;
    static Companion: Tagged$Companion;
    static FALSE: ModuleTeleport$GroundMode;
    static TRUE: ModuleTeleport$GroundMode;
    static getEntries(): ModuleTeleport$GroundMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleTeleport$GroundMode;
    static values(): ModuleTeleport$GroundMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TRUE" | "FALSE" | "CORRECT";
}